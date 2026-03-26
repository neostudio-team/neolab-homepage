import { NextRequest, NextResponse } from "next/server";
import { adminAuth } from "@/lib/firebase-admin";
import { GoogleAuth } from "google-auth-library";

// GA4 Property ID는 Firebase Console > Analytics > 속성 설정에서 확인
// 예: "123456789" (숫자만)
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

    // 전체 지표 (30일)
    const summaryData = await gaReport(accessToken, {
      dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
      metrics: [
        { name: "activeUsers" },
        { name: "sessions" },
        { name: "screenPageViews" },
        { name: "newUsers" },
      ],
    });

    // 국가별 접속자 (30일, top 8)
    const countryData = await gaReport(accessToken, {
      dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
      metrics: [{ name: "activeUsers" }],
      dimensions: [{ name: "country" }],
      orderBys: [{ metric: { metricName: "activeUsers" }, desc: true }],
      limit: 8,
    });

    // 최근 7일 일별 세션
    const trendData = await gaReport(accessToken, {
      dateRanges: [{ startDate: "6daysAgo", endDate: "today" }],
      metrics: [{ name: "sessions" }, { name: "activeUsers" }],
      dimensions: [{ name: "date" }],
      orderBys: [{ dimension: { dimensionName: "date" } }],
    });

    const summaryRow = summaryData.rows?.[0];
    const summary = {
      activeUsers: parseInt(summaryRow?.metricValues?.[0]?.value || "0"),
      sessions: parseInt(summaryRow?.metricValues?.[1]?.value || "0"),
      pageViews: parseInt(summaryRow?.metricValues?.[2]?.value || "0"),
      newUsers: parseInt(summaryRow?.metricValues?.[3]?.value || "0"),
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

    return NextResponse.json({ summary, countries, trend });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "알 수 없는 오류";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
