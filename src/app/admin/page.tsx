"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { auth } from "@/lib/firebase";

interface BoardItem { id: string; titleKo: string; createdAt: string; isPinned?: boolean; }
interface MemberItem { id: string; name: string; email: string; level: number; createdAt: string; }
interface GASummary {
  activeUsers: number; sessions: number; pageViews: number; newUsers: number;
  avgSessionDuration: number; bounceRate: number; pagesPerSession: number;
}
interface GACountry { country: string; users: number; pct: number; }
interface GATrend { date: string; sessions: number; users: number; }
interface GAPage { path: string; pageViews: number; sessions: number; users: number; pct: number; }
interface GASource { channel: string; sessions: number; users: number; pct: number; }

function fmtShort(iso: string) {
  if (!iso) return "-";
  const d = new Date(iso);
  return `${d.getMonth() + 1}.${d.getDate()}`;
}
function fmt(n: number) { return n.toLocaleString("ko-KR"); }
function todayKr() {
  return new Date().toLocaleDateString("ko-KR", {
    year: "numeric", month: "long", day: "numeric", weekday: "short",
  });
}
function fmtDuration(sec: number) {
  if (!sec || sec < 1) return "0초";
  const m = Math.floor(sec / 60);
  const s = Math.round(sec % 60);
  return m > 0 ? `${m}분 ${s}초` : `${s}초`;
}
function fmtPct(v: number) { return `${Math.round(v * 100)}%`; }

const COUNTRY_MAP: Record<string, string> = {
  "South Korea": "대한민국", "United States": "미국", "Japan": "일본",
  "China": "중국", "Germany": "독일", "United Kingdom": "영국",
  "France": "프랑스", "Canada": "캐나다", "Australia": "호주",
  "Singapore": "싱가포르", "Taiwan": "대만", "Hong Kong": "홍콩",
  "(not set)": "미설정",
};
const FLAG: Record<string, string> = {
  "South Korea": "🇰🇷", "United States": "🇺🇸", "Japan": "🇯🇵", "China": "🇨🇳",
  "Germany": "🇩🇪", "United Kingdom": "🇬🇧", "France": "🇫🇷", "Canada": "🇨🇦",
  "Australia": "🇦🇺", "Singapore": "🇸🇬", "Taiwan": "🇹🇼", "Hong Kong": "🇭🇰",
};
const CHANNEL_KO: Record<string, string> = {
  "Organic Search": "자연검색", "Direct": "직접접속", "Referral": "추천",
  "Organic Social": "소셜", "Paid Search": "검색광고", "Email": "이메일",
  "Display": "디스플레이광고", "Unassigned": "미분류", "(not set)": "미설정",
};
const CHANNEL_COLOR: Record<string, string> = {
  "Organic Search": "bg-green-400", "Direct": "bg-blue-400", "Referral": "bg-purple-400",
  "Organic Social": "bg-pink-400", "Paid Search": "bg-yellow-400", "Email": "bg-orange-400",
  "Display": "bg-red-400", "Unassigned": "bg-gray-300", "(not set)": "bg-gray-300",
};

type GATab = "overview" | "pages" | "sessions";

export default function AdminDashboard() {
  const [notices, setNotices] = useState<BoardItem[]>([]);
  const [press, setPress] = useState<BoardItem[]>([]);
  const [customer, setCustomer] = useState<BoardItem[]>([]);
  const [members, setMembers] = useState<MemberItem[]>([]);
  const [gaData, setGaData] = useState<{
    summary: GASummary; countries: GACountry[]; trend: GATrend[];
    topPages: GAPage[]; sources: GASource[];
  } | null>(null);
  const [gaError, setGaError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [gaTab, setGaTab] = useState<GATab>("overview");

  useEffect(() => {
    async function load() {
      try {
        const [noticesRes, pressRes, customerRes] = await Promise.all([
          fetch("/api/notices").then(r => r.json()),
          fetch("/api/press").then(r => r.json()),
          fetch("/api/customer-notices").then(r => r.json()),
        ]);
        setNotices(Array.isArray(noticesRes) ? noticesRes : []);
        setPress(Array.isArray(pressRes) ? pressRes : []);
        setCustomer(Array.isArray(customerRes) ? customerRes : []);

        const token = await auth.currentUser?.getIdToken();
        if (token) {
          const membersRes = await fetch("/api/admin-members", {
            headers: { Authorization: `Bearer ${token}` },
          }).then(r => r.json());
          setMembers(Array.isArray(membersRes) ? membersRes : []);

          try {
            const gaRes = await fetch("/api/analytics", { headers: { Authorization: `Bearer ${token}` } });
            if (gaRes.ok) setGaData(await gaRes.json());
            else { const e = await gaRes.json(); setGaError(e.error || "GA_FETCH_ERROR"); }
          } catch { setGaError("GA_FETCH_ERROR"); }
        }
      } catch (e) { console.error(e); }
      finally { setLoading(false); }
    }
    load();
  }, []);

  const CARDS = [
    {
      key: "notice", label: "공지사항", icon: "📋", color: "from-blue-500 to-blue-600",
      items: notices, newHref: "/admin/notices/new", listHref: "/admin/notices",
      badge: (n: BoardItem) => n.isPinned
        ? <span className="text-[10px] px-1.5 py-0.5 rounded font-bold mr-1.5 bg-blue-100 text-blue-600 flex-shrink-0">공지</span>
        : null,
    },
    {
      key: "press", label: "기업뉴스", icon: "📰", color: "from-emerald-500 to-emerald-600",
      items: press, newHref: "/admin/press/new", listHref: "/admin/press",
      badge: () => null,
    },
    {
      key: "customer", label: "고객지원", icon: "🎧", color: "from-violet-500 to-violet-600",
      items: customer, newHref: "/admin/customer/new", listHref: "/admin/customer",
      badge: (n: BoardItem) => n.isPinned
        ? <span className="text-[10px] px-1.5 py-0.5 rounded font-bold mr-1.5 bg-violet-100 text-violet-600 flex-shrink-0">공지</span>
        : null,
    },
    {
      key: "member", label: "회원 관리", icon: "👥", color: "from-orange-500 to-orange-600",
      items: members as unknown as BoardItem[],
      newHref: "/admin/members", listHref: "/admin/members",
      badge: (n: BoardItem) => {
        const m = n as unknown as MemberItem;
        return m.level === 1
          ? <span className="text-[10px] px-1.5 py-0.5 rounded font-bold mr-1.5 bg-red-100 text-red-500 flex-shrink-0">최고</span>
          : <span className="text-[10px] px-1.5 py-0.5 rounded font-bold mr-1.5 bg-gray-100 text-gray-400 flex-shrink-0">일반</span>;
      },
    },
  ];

  if (loading) return (
    <div className="p-8 flex items-center justify-center min-h-[60vh]">
      <div className="text-gray-400 text-sm">불러오는 중...</div>
    </div>
  );

  const TAB_ITEMS: { key: GATab; label: string }[] = [
    { key: "overview", label: "개요" },
    { key: "pages", label: "페이지뷰 상세" },
    { key: "sessions", label: "세션 상세" },
  ];

  return (
    <div className="p-8 max-w-7xl">
      {/* 헤더 */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">대시보드</h1>
          <p className="text-gray-400 text-sm mt-1">NeoLAB Convergence 홈페이지 관리 현황</p>
        </div>
        <p className="text-sm font-medium text-gray-600 bg-white border border-gray-200 px-4 py-2 rounded-lg shadow-sm">{todayKr()}</p>
      </div>

      {/* 게시판 카드 4개 */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
        {CARDS.map(card => (
          <div key={card.key} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
            <div className={`bg-gradient-to-r ${card.color} px-5 py-4 flex items-center justify-between`}>
              <div className="flex items-center gap-2">
                <span className="text-xl">{card.icon}</span>
                <span className="text-white font-semibold text-sm">{card.label}</span>
              </div>
              <span className="text-white text-2xl font-bold leading-none">{card.items.length}</span>
            </div>

            <div className="flex-1 divide-y divide-gray-50">
              {card.items.length === 0 ? (
                <p className="text-gray-400 text-xs text-center py-8">등록된 항목이 없습니다.</p>
              ) : card.items.slice(0, 5).map((item) => {
                const m = item as unknown as MemberItem;
                const isMember = card.key === "member";
                return (
                  <div key={item.id} className="flex items-center gap-1 px-4 py-2.5">
                    {card.badge(item)}
                    <span className="flex-1 text-xs text-gray-700 truncate">
                      {isMember ? m.name : (item.titleKo || "(제목 없음)")}
                    </span>
                    <span className="text-[10px] text-gray-400 flex-shrink-0 ml-1">
                      {isMember ? m.email.split("@")[0] : fmtShort(item.createdAt)}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="px-4 py-3 border-t border-gray-100 flex gap-3">
              <Link href={card.listHref} className="text-xs text-gray-500 hover:text-gray-800 transition-colors">목록보기</Link>
              {card.key !== "member" && (
                <>
                  <span className="text-gray-200 select-none">|</span>
                  <Link href={card.newHref} className="text-xs text-blue-500 hover:text-blue-700 font-medium transition-colors">새 글 작성</Link>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* GA 방문 통계 */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        {/* 헤더 */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-base font-bold text-gray-800">방문 통계</h2>
            <p className="text-xs text-gray-400 mt-0.5">Google Analytics · 최근 30일</p>
          </div>
          {gaData && <span className="text-xs text-emerald-600 font-medium bg-emerald-50 px-3 py-1 rounded-full">● 연동됨</span>}
        </div>

        {/* 에러 */}
        {gaError === "GA_PROPERTY_ID_NOT_SET" && (
          <div className="rounded-xl bg-amber-50 border border-amber-100 p-5">
            <p className="text-sm font-semibold text-amber-700 mb-2">📌 GA 연동 설정이 필요합니다</p>
            <ol className="list-decimal pl-5 space-y-1 text-xs text-amber-600 leading-relaxed">
              <li>Google Analytics 콘솔 → 관리 → 속성 설정에서 <strong>속성 ID</strong>(숫자) 확인</li>
              <li>Firebase Admin 서비스 계정을 GA 속성에 <strong>뷰어</strong>로 추가</li>
              <li>Vercel 환경변수에 <code className="bg-amber-100 px-1 rounded font-mono">GA_PROPERTY_ID=숫자</code> 추가 후 재배포</li>
              <li>Google Cloud Console에서 <strong>Google Analytics Data API</strong> 활성화</li>
            </ol>
          </div>
        )}
        {gaError && gaError !== "GA_PROPERTY_ID_NOT_SET" && (
          <div className="rounded-xl bg-red-50 border border-red-100 p-4">
            <p className="text-sm font-semibold text-red-600">⚠️ GA 데이터 조회 실패</p>
            <p className="text-xs mt-1 text-red-400">{gaError}</p>
          </div>
        )}

        {gaData && (
          <>
            {/* 요약 지표 4개 */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {[
                { label: "방문자수", value: fmt(gaData.summary.activeUsers), sub: "Active Users", icon: "👤", color: "text-blue-600", bg: "bg-blue-50" },
                { label: "세션수", value: fmt(gaData.summary.sessions), sub: "Sessions", icon: "📊", color: "text-emerald-600", bg: "bg-emerald-50" },
                { label: "페이지뷰", value: fmt(gaData.summary.pageViews), sub: "Page Views", icon: "👁️", color: "text-violet-600", bg: "bg-violet-50" },
                { label: "신규방문자", value: fmt(gaData.summary.newUsers), sub: "New Users", icon: "✨", color: "text-orange-600", bg: "bg-orange-50" },
              ].map(m => (
                <div key={m.label} className={`${m.bg} rounded-xl px-4 py-4`}>
                  <div className="flex items-center gap-1.5 mb-2">
                    <span>{m.icon}</span>
                    <span className="text-xs text-gray-500">{m.sub}</span>
                  </div>
                  <p className={`text-2xl font-bold ${m.color}`}>{m.value}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{m.label}</p>
                </div>
              ))}
            </div>

            {/* 탭 */}
            <div className="border-b border-gray-100 mb-5">
              <div className="flex gap-1">
                {TAB_ITEMS.map(t => (
                  <button key={t.key} onClick={() => setGaTab(t.key)}
                    className={`px-4 py-2 text-sm font-medium rounded-t-lg border-b-2 transition-colors ${
                      gaTab === t.key
                        ? "border-[#1a1a2e] text-[#1a1a2e] bg-[#1a1a2e]/5"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                    }`}>
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 탭 1: 개요 */}
            {gaTab === "overview" && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* 국가별 */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 mb-3">국가별 접속자</h3>
                  <div className="space-y-2.5">
                    {gaData.countries.map((c, i) => (
                      <div key={c.country} className="flex items-center gap-2.5">
                        <span className="text-gray-400 text-xs w-4 text-right flex-shrink-0">{i + 1}</span>
                        <span className="text-sm flex-shrink-0">{FLAG[c.country] || "🌐"}</span>
                        <span className="text-xs text-gray-700 w-20 flex-shrink-0">{COUNTRY_MAP[c.country] || c.country}</span>
                        <div className="flex-1 bg-gray-100 rounded-full h-1.5 overflow-hidden">
                          <div className="h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-blue-500" style={{ width: `${c.pct}%` }} />
                        </div>
                        <span className="text-xs text-gray-500 w-14 text-right flex-shrink-0">{fmt(c.users)}명</span>
                        <span className="text-xs text-gray-400 w-8 text-right flex-shrink-0">{c.pct}%</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 7일 트렌드 */}
                {gaData.trend.length > 0 && (
                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 mb-3">최근 7일 일별 세션</h3>
                    <div className="flex items-end gap-1.5 h-20 px-1">
                      {(() => {
                        const max = Math.max(...gaData.trend.map(t => t.sessions), 1);
                        return gaData.trend.map(t => {
                          const h = Math.max(4, Math.round((t.sessions / max) * 72));
                          const d = t.date;
                          const label = `${parseInt(d.slice(4, 6))}.${parseInt(d.slice(6, 8))}`;
                          return (
                            <div key={t.date} className="flex-1 flex flex-col items-center gap-0.5">
                              <span className="text-[9px] text-gray-400 leading-none">{t.sessions}</span>
                              <div className="w-full rounded-t-sm bg-blue-400 hover:bg-blue-500 transition-colors" style={{ height: `${h}px` }} title={`${label}: ${t.sessions}세션`} />
                              <span className="text-[9px] text-gray-400 leading-none">{label}</span>
                            </div>
                          );
                        });
                      })()}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* 탭 2: 페이지뷰 상세 */}
            {gaTab === "pages" && (
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-semibold text-gray-700">인기 페이지 Top 10</h3>
                  <span className="text-xs text-gray-400">최근 30일 기준</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-gray-100">
                        <th className="text-left pb-2 pr-4 font-medium text-gray-500 w-6">#</th>
                        <th className="text-left pb-2 pr-4 font-medium text-gray-500">페이지 경로</th>
                        <th className="text-right pb-2 pr-4 font-medium text-gray-500 w-24">페이지뷰</th>
                        <th className="text-right pb-2 pr-4 font-medium text-gray-500 w-16">사용자</th>
                        <th className="text-right pb-2 font-medium text-gray-500 w-12">비중</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {gaData.topPages.map((p, i) => (
                        <tr key={p.path} className="hover:bg-gray-50/50">
                          <td className="py-2.5 pr-4 text-gray-400">{i + 1}</td>
                          <td className="py-2.5 pr-4">
                            <div className="flex items-center gap-2">
                              <span className="font-mono text-gray-700 truncate max-w-xs" title={p.path}>{p.path}</span>
                              <div className="flex-1 min-w-16 bg-gray-100 rounded-full h-1 overflow-hidden">
                                <div className="h-1 rounded-full bg-violet-400" style={{ width: `${p.pct}%` }} />
                              </div>
                            </div>
                          </td>
                          <td className="py-2.5 pr-4 text-right font-semibold text-violet-700">{fmt(p.pageViews)}</td>
                          <td className="py-2.5 pr-4 text-right text-gray-500">{fmt(p.users)}</td>
                          <td className="py-2.5 text-right text-gray-400">{p.pct}%</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* 참여 지표 요약 */}
                <div className="mt-5 pt-5 border-t border-gray-100 grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <p className="text-xs text-gray-400 mb-1">세션당 페이지뷰</p>
                    <p className="text-xl font-bold text-violet-600">{gaData.summary.pagesPerSession.toFixed(1)}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-400 mb-1">총 페이지뷰</p>
                    <p className="text-xl font-bold text-gray-800">{fmt(gaData.summary.pageViews)}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-400 mb-1">신규 방문자</p>
                    <p className="text-xl font-bold text-orange-600">{fmt(gaData.summary.newUsers)}</p>
                  </div>
                </div>
              </div>
            )}

            {/* 탭 3: 세션 상세 */}
            {gaTab === "sessions" && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* 유입 경로 */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 mb-3">유입 채널별 세션</h3>
                  <div className="space-y-2.5">
                    {gaData.sources.map((s, i) => (
                      <div key={s.channel} className="flex items-center gap-2.5">
                        <span className="text-gray-400 text-xs w-4 text-right flex-shrink-0">{i + 1}</span>
                        <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${CHANNEL_COLOR[s.channel] || "bg-gray-300"}`} />
                        <span className="text-xs text-gray-700 w-24 flex-shrink-0">{CHANNEL_KO[s.channel] || s.channel}</span>
                        <div className="flex-1 bg-gray-100 rounded-full h-1.5 overflow-hidden">
                          <div className={`h-1.5 rounded-full ${CHANNEL_COLOR[s.channel] || "bg-gray-400"}`} style={{ width: `${s.pct}%` }} />
                        </div>
                        <span className="text-xs text-gray-500 w-14 text-right flex-shrink-0">{fmt(s.sessions)}세션</span>
                        <span className="text-xs text-gray-400 w-8 text-right flex-shrink-0">{s.pct}%</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 참여 지표 */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 mb-3">참여 지표</h3>
                  <div className="space-y-3">
                    {[
                      {
                        label: "평균 세션 시간",
                        value: fmtDuration(gaData.summary.avgSessionDuration),
                        icon: "⏱️",
                        desc: "방문자 1인당 평균 체류 시간",
                        color: "text-blue-600",
                        bg: "bg-blue-50",
                      },
                      {
                        label: "이탈률",
                        value: fmtPct(gaData.summary.bounceRate),
                        icon: "↩️",
                        desc: "1개 페이지만 보고 떠난 비율",
                        color: gaData.summary.bounceRate > 0.7 ? "text-red-500" : "text-emerald-600",
                        bg: gaData.summary.bounceRate > 0.7 ? "bg-red-50" : "bg-emerald-50",
                      },
                      {
                        label: "세션당 페이지뷰",
                        value: gaData.summary.pagesPerSession.toFixed(1) + "페이지",
                        icon: "📄",
                        desc: "방문당 평균 페이지 조회 수",
                        color: "text-violet-600",
                        bg: "bg-violet-50",
                      },
                      {
                        label: "총 세션",
                        value: fmt(gaData.summary.sessions) + "회",
                        icon: "📊",
                        desc: "최근 30일 전체 세션 수",
                        color: "text-emerald-600",
                        bg: "bg-emerald-50",
                      },
                    ].map(m => (
                      <div key={m.label} className={`flex items-center gap-3 px-4 py-3 rounded-xl ${m.bg}`}>
                        <span className="text-xl">{m.icon}</span>
                        <div className="flex-1">
                          <p className="text-xs text-gray-500">{m.desc}</p>
                          <p className="text-xs font-medium text-gray-700">{m.label}</p>
                        </div>
                        <p className={`text-lg font-bold ${m.color}`}>{m.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
