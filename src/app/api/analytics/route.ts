import { NextRequest, NextResponse } from "next/server";
import { adminAuth } from "@/lib/firebase-admin";
import { GoogleAuth } from "google-auth-library";

const GA_PROPERTY_ID = process.env.GA_PROPERTY_ID;

async function getGAAccessToken(): Promise<string> {
  const auth = new GoogleAuth({
    credentials: {
      client_email: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
      private_key: (process.env.FIREBASE_ADMIN_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/analytics.readonly"],
  });
  const client = await auth.getClient();
  const { token } = await client.getAccessToken();
  if (!token) throw new Error("Access token 발급 실패");
  return token;
}

async function gaReport(accessToken: string, body: object) {
  const res = await fetch(
    `https://analyticsdata.googleapis.com/v1beta/properties/${GA_PROPERTY_ID}:runReport`,
    {
      method: "POST",
      headers: { Authorization: `Bearer ${accessToken}`, "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }
  );
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err?.error?.message || "GA API 오류");
  }
  return res.json();
}

/** YYYY-MM-DD → GA 날짜 문자열 그대로 사용 가능 */
function resolveRange(preset: string, customStart?: string, customEnd?: string) {
  const today = "today";
  switch (preset) {
    case "today":    return { startDate: "today",      endDate: "today" };
    case "yesterday":return { startDate: "yesterday",  endDate: "yesterday" };
    case "7":        return { startDate: "6daysAgo",   endDate: today };
    case "14":       return { startDate: "13daysAgo",  endDate: today };
    case "30":       return { startDate: "29daysAgo",  endDate: today };
    case "90":       return { startDate: "89daysAgo",  endDate: today };
    case "180":      return { startDate: "179daysAgo", endDate: today };
    case "365":      return { startDate: "364daysAgo", endDate: today };
    case "custom":
      return {
        startDate: customStart || "29daysAgo",
        endDate:   customEnd   || today,
      };
    default:         return { startDate: "29daysAgo",  endDate: today };
  }
}

/** 기간 일수에 따라 트렌드 차트에 쓸 범위 결정 (최대 90일 일별) */
function trendRange(preset: string, customStart?: string, customEnd?: string) {
  if (preset === "custom" && customStart && customEnd) {
    const days = Math.round((new Date(customEnd).getTime() - new Date(customStart).getTime()) / 86400000) + 1;
    if (days <= 90) return { startDate: customStart, endDate: customEnd };
    // 90일 초과 시 마지막 90일만
    const d = new Date(customEnd);
    d.setDate(d.getDate() - 89);
    return { startDate: d.toISOString().slice(0, 10), endDate: customEnd };
  }
  // preset이 90일 초과면 마지막 90일만
  const days = parseInt(preset) || 30;
  if (days > 90) return { startDate: "89daysAgo", endDate: "today" };
  return resolveRange(preset, customStart, customEnd);
}

export async function GET(request: NextRequest) {
  const token = request.headers.get("Authorization")?.replace("Bearer ", "");
  if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    await adminAuth.verifyIdToken(token);
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!GA_PROPERTY_ID) {
    return NextResponse.json({ error: "GA_PROPERTY_ID_NOT_SET" }, { status: 503 });
  }

  const { searchParams } = new URL(request.url);
  const preset      = searchParams.get("preset") || "30";
  const customStart = searchParams.get("startDate") || undefined;
  const customEnd   = searchParams.get("endDate")   || undefined;

  const mainRange  = resolveRange(preset, customStart, customEnd);
  const chartRange = trendRange(preset, customStart, customEnd);

  try {
    const accessToken = await getGAAccessToken();

    const [summaryData, countryData, trendData, topPagesData, sourcesData] = await Promise.all([
      // 요약 지표
      gaReport(accessToken, {
        dateRanges: [mainRange],
        metrics: [
          { name: "activeUsers" },
          { name: "sessions" },
          { name: "screenPageViews" },
          { name: "newUsers" },
          { name: "averageSessionDuration" },
          { name: "bounceRate" },
          { name: "screenPageViewsPerSession" },
        ],
      }),
      // 국가별 접속자 (top 8)
      gaReport(accessToken, {
        dateRanges: [mainRange],
        metrics: [{ name: "activeUsers" }],
        dimensions: [{ name: "country" }],
        orderBys: [{ metric: { metricName: "activeUsers" }, desc: true }],
        limit: 8,
      }),
      // 일별 트렌드 (최대 90일)
      gaReport(accessToken, {
        dateRanges: [chartRange],
        metrics: [{ name: "sessions" }, { name: "activeUsers" }],
        dimensions: [{ name: "date" }],
        orderBys: [{ dimension: { dimensionName: "date" } }],
      }),
      // 인기 페이지 top 10
      gaReport(accessToken, {
        dateRanges: [mainRange],
        metrics: [
          { name: "screenPageViews" },
          { name: "sessions" },
          { name: "activeUsers" },
          { name: "averageSessionDuration" },
        ],
        dimensions: [{ name: "pagePath" }],
        orderBys: [{ metric: { metricName: "screenPageViews" }, desc: true }],
        limit: 10,
      }),
      // 유입 채널 top 8
      gaReport(accessToken, {
        dateRanges: [mainRange],
        metrics: [{ name: "sessions" }, { name: "activeUsers" }],
        dimensions: [{ name: "sessionDefaultChannelGroup" }],
        orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
        limit: 8,
      }),
    ]);

    const summaryRow = summaryData.rows?.[0];
    const summary = {
      activeUsers:        parseInt(summaryRow?.metricValues?.[0]?.value || "0"),
      sessions:           parseInt(summaryRow?.metricValues?.[1]?.value || "0"),
      pageViews:          parseInt(summaryRow?.metricValues?.[2]?.value || "0"),
      newUsers:           parseInt(summaryRow?.metricValues?.[3]?.value || "0"),
      avgSessionDuration: parseFloat(summaryRow?.metricValues?.[4]?.value || "0"),
      bounceRate:         parseFloat(summaryRow?.metricValues?.[5]?.value || "0"),
      pagesPerSession:    parseFloat(summaryRow?.metricValues?.[6]?.value || "0"),
    };

    const totalCountryUsers = (countryData.rows || []).reduce(
      (sum: number, r: { metricValues: { value: string }[] }) => sum + parseInt(r.metricValues[0].value), 0
    );
    const countries = (countryData.rows || []).map((r: { dimensionValues: { value: string }[]; metricValues: { value: string }[] }) => ({
      country: r.dimensionValues[0].value,
      users:   parseInt(r.metricValues[0].value),
      pct:     totalCountryUsers > 0 ? Math.round(parseInt(r.metricValues[0].value) / totalCountryUsers * 100) : 0,
    }));

    const trend = (trendData.rows || []).map((r: { dimensionValues: { value: string }[]; metricValues: { value: string }[] }) => ({
      date:     r.dimensionValues[0].value,
      sessions: parseInt(r.metricValues[0].value),
      users:    parseInt(r.metricValues[1].value),
    }));

    const totalPageViews = (topPagesData.rows || []).reduce(
      (sum: number, r: { metricValues: { value: string }[] }) => sum + parseInt(r.metricValues[0].value), 0
    );
    const topPages = (topPagesData.rows || []).map((r: { dimensionValues: { value: string }[]; metricValues: { value: string }[] }) => ({
      path:      r.dimensionValues[0].value,
      pageViews: parseInt(r.metricValues[0].value),
      sessions:  parseInt(r.metricValues[1].value),
      users:     parseInt(r.metricValues[2].value),
      pct:       totalPageViews > 0 ? Math.round(parseInt(r.metricValues[0].value) / totalPageViews * 100) : 0,
    }));

    const totalSourceSessions = (sourcesData.rows || []).reduce(
      (sum: number, r: { metricValues: { value: string }[] }) => sum + parseInt(r.metricValues[0].value), 0
    );
    const sources = (sourcesData.rows || []).map((r: { dimensionValues: { value: string }[]; metricValues: { value: string }[] }) => ({
      channel:  r.dimensionValues[0].value,
      sessions: parseInt(r.metricValues[0].value),
      users:    parseInt(r.metricValues[1].value),
      pct:      totalSourceSessions > 0 ? Math.round(parseInt(r.metricValues[0].value) / totalSourceSessions * 100) : 0,
    }));

    return NextResponse.json({ summary, countries, trend, topPages, sources });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "알 수 없는 오류";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
