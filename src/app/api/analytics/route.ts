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

  try {
    const accessToken = await getGAAccessToken();

    // 전체 지표 (30일) + 평균 체류시간, 이탈률, 세션당 페이지
    const [summaryData, countryData, trendData, topPagesData, sourcesData] = await Promise.all([
      // 요약 지표
      gaReport(accessToken, {
        dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
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
        dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
        metrics: [{ name: "activeUsers" }],
        dimensions: [{ name: "country" }],
        orderBys: [{ metric: { metricName: "activeUsers" }, desc: true }],
        limit: 8,
      }),
      // 최근 7일 일별 세션
      gaReport(accessToken, {
        dateRanges: [{ startDate: "6daysAgo", endDate: "today" }],
        metrics: [{ name: "sessions" }, { name: "activeUsers" }],
        dimensions: [{ name: "date" }],
        orderBys: [{ dimension: { dimensionName: "date" } }],
      }),
      // 인기 페이지 top 10
      gaReport(accessToken, {
        dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
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
      // 유입 경로 (소스/미디엄) top 8
      gaReport(accessToken, {
        dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
        metrics: [{ name: "sessions" }, { name: "activeUsers" }],
        dimensions: [{ name: "sessionDefaultChannelGroup" }],
        orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
        limit: 8,
      }),
    ]);

    const summaryRow = summaryData.rows?.[0];
    const avgDurSec = parseFloat(summaryRow?.metricValues?.[4]?.value || "0");
    const summary = {
      activeUsers: parseInt(summaryRow?.metricValues?.[0]?.value || "0"),
      sessions: parseInt(summaryRow?.metricValues?.[1]?.value || "0"),
      pageViews: parseInt(summaryRow?.metricValues?.[2]?.value || "0"),
      newUsers: parseInt(summaryRow?.metricValues?.[3]?.value || "0"),
      avgSessionDuration: avgDurSec,
      bounceRate: parseFloat(summaryRow?.metricValues?.[5]?.value || "0"),
      pagesPerSession: parseFloat(summaryRow?.metricValues?.[6]?.value || "0"),
    };

    const totalCountryUsers = (countryData.rows || []).reduce(
      (sum: number, r: { metricValues: { value: string }[] }) => sum + parseInt(r.metricValues[0].value), 0
    );
    const countries = (countryData.rows || []).map((r: { dimensionValues: { value: string }[]; metricValues: { value: string }[] }) => ({
      country: r.dimensionValues[0].value,
      users: parseInt(r.metricValues[0].value),
      pct: totalCountryUsers > 0 ? Math.round(parseInt(r.metricValues[0].value) / totalCountryUsers * 100) : 0,
    }));

    const trend = (trendData.rows || []).map((r: { dimensionValues: { value: string }[]; metricValues: { value: string }[] }) => ({
      date: r.dimensionValues[0].value,
      sessions: parseInt(r.metricValues[0].value),
      users: parseInt(r.metricValues[1].value),
    }));

    const totalPageViews = (topPagesData.rows || []).reduce(
      (sum: number, r: { metricValues: { value: string }[] }) => sum + parseInt(r.metricValues[0].value), 0
    );
    const topPages = (topPagesData.rows || []).map((r: { dimensionValues: { value: string }[]; metricValues: { value: string }[] }) => ({
      path: r.dimensionValues[0].value,
      pageViews: parseInt(r.metricValues[0].value),
      sessions: parseInt(r.metricValues[1].value),
      users: parseInt(r.metricValues[2].value),
      pct: totalPageViews > 0 ? Math.round(parseInt(r.metricValues[0].value) / totalPageViews * 100) : 0,
    }));

    const totalSourceSessions = (sourcesData.rows || []).reduce(
      (sum: number, r: { metricValues: { value: string }[] }) => sum + parseInt(r.metricValues[0].value), 0
    );
    const sources = (sourcesData.rows || []).map((r: { dimensionValues: { value: string }[]; metricValues: { value: string }[] }) => ({
      channel: r.dimensionValues[0].value,
      sessions: parseInt(r.metricValues[0].value),
      users: parseInt(r.metricValues[1].value),
      pct: totalSourceSessions > 0 ? Math.round(parseInt(r.metricValues[0].value) / totalSourceSessions * 100) : 0,
    }));

    return NextResponse.json({ summary, countries, trend, topPages, sources });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "알 수 없는 오류";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
