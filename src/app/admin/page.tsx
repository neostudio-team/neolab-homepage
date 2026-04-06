"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { auth } from "@/lib/firebase";

interface BoardItem { id: string; titleKo: string; createdAt: string; isPinned?: boolean; }
interface ContactItem { id: string; name: string; subject: string; createdAt: string; isRead: boolean; category: string; }
interface MemberItem { id: string; name: string; email: string; level: number; createdAt: string; }
interface GASummary {
  activeUsers: number; sessions: number; pageViews: number; newUsers: number;
  avgSessionDuration: number; bounceRate: number; pagesPerSession: number;
}
interface GACountry { country: string; users: number; pct: number; }
interface GATrend { date: string; sessions: number; users: number; }
interface GAPage { path: string; pageViews: number; sessions: number; users: number; pct: number; }
interface GASource { channel: string; sessions: number; users: number; pct: number; }

type GAPreset = "today" | "yesterday" | "7" | "14" | "30" | "90" | "180" | "365" | "custom";
const PRESET_OPTIONS: { key: GAPreset; label: string }[] = [
  { key: "today",     label: "오늘" },
  { key: "yesterday", label: "어제" },
  { key: "7",         label: "7일" },
  { key: "14",        label: "14일" },
  { key: "30",        label: "30일" },
  { key: "90",        label: "90일" },
  { key: "180",       label: "6개월" },
  { key: "365",       label: "1년" },
  { key: "custom",    label: "직접입력" },
];

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
  const [contacts, setContacts] = useState<ContactItem[]>([]);
  const [members, setMembers] = useState<MemberItem[]>([]);
  const [gaData, setGaData] = useState<{
    summary: GASummary; countries: GACountry[]; trend: GATrend[];
    topPages: GAPage[]; sources: GASource[];
  } | null>(null);
  const [gaError, setGaError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [gaTab, setGaTab] = useState<GATab>("overview");
  const [gaPreset, setGaPreset] = useState<GAPreset>("30");
  const [customStart, setCustomStart] = useState("");
  const [customEnd, setCustomEnd] = useState("");
  const [gaLoading, setGaLoading] = useState(false);

  async function fetchGA(preset: GAPreset, cStart: string, cEnd: string) {
    setGaLoading(true);
    setGaError(null);
    try {
      const token = await auth.currentUser?.getIdToken();
      if (!token) return;
      let url = `/api/analytics?preset=${preset}`;
      if (preset === "custom" && cStart && cEnd) {
        url += `&startDate=${cStart}&endDate=${cEnd}`;
      }
      const gaRes = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
      if (gaRes.ok) setGaData(await gaRes.json());
      else { const e = await gaRes.json(); setGaError(e.error || "GA_FETCH_ERROR"); }
    } catch { setGaError("GA_FETCH_ERROR"); }
    setGaLoading(false);
  }

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
          const contactRes = await fetch("/api/contact", { headers: { Authorization: `Bearer ${token}` } }).then(r => r.json());
          setContacts(Array.isArray(contactRes) ? contactRes : []);
          await fetchGA("30", "", "");
        }
      } catch (e) { console.error(e); }
      finally { setLoading(false); }
    }
    load();
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
      key: "contact", label: "문의 관리", icon: "📩", color: "from-rose-500 to-rose-600",
      items: contacts.map(c => ({ id: c.id, titleKo: c.subject || "(제목 없음)", createdAt: c.createdAt, isPinned: !c.isRead })) as BoardItem[],
      newHref: "/admin/contact", listHref: "/admin/contact",
      badge: (n: BoardItem) => n.isPinned
        ? <span className="text-[10px] px-1.5 py-0.5 rounded font-bold mr-1.5 bg-red-100 text-red-600 flex-shrink-0">NEW</span>
        : null,
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
        <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
          <div>
            <h2 className="text-base font-bold text-gray-800">방문 통계</h2>
            <p className="text-xs text-gray-400 mt-0.5">
              Google Analytics ·{" "}
              {gaPreset === "today" ? "오늘" : gaPreset === "yesterday" ? "어제" :
               gaPreset === "custom" && customStart && customEnd ? `${customStart} ~ ${customEnd}` :
               gaPreset === "7" ? "최근 7일" : gaPreset === "14" ? "최근 14일" :
               gaPreset === "30" ? "최근 30일" : gaPreset === "90" ? "최근 90일" :
               gaPreset === "180" ? "최근 6개월" : gaPreset === "365" ? "최근 1년" : ""}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {/* 프리셋 버튼 */}
            <div className="flex flex-wrap gap-1">
              {PRESET_OPTIONS.map(opt => (
                <button key={opt.key}
                  onClick={() => {
                    setGaPreset(opt.key);
                    if (opt.key !== "custom") fetchGA(opt.key, "", "");
                  }}
                  className={`px-3 py-1.5 text-xs rounded-lg border font-medium transition-colors ${
                    gaPreset === opt.key
                      ? "bg-[#1a1a2e] text-white border-[#1a1a2e]"
                      : "bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  }`}>
                  {opt.label}
                </button>
              ))}
            </div>
            {/* 직접입력 날짜 */}
            {gaPreset === "custom" && (
              <div className="flex items-center gap-1.5">
                <input type="date" value={customStart} onChange={e => setCustomStart(e.target.value)}
                  className="border border-gray-200 rounded-lg px-2 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-[#1a1a2e]/20" />
                <span className="text-xs text-gray-400">~</span>
                <input type="date" value={customEnd} onChange={e => setCustomEnd(e.target.value)}
                  className="border border-gray-200 rounded-lg px-2 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-[#1a1a2e]/20" />
                <button
                  onClick={() => { if (customStart && customEnd) fetchGA("custom", customStart, customEnd); }}
                  disabled={!customStart || !customEnd}
                  className="px-3 py-1.5 text-xs bg-[#1a1a2e] text-white rounded-lg hover:bg-[#2a2a4e] disabled:opacity-40 transition-colors">
                  조회
                </button>
              </div>
            )}
            {gaData && !gaLoading && (
              <span className="text-xs text-emerald-600 font-medium bg-emerald-50 px-3 py-1 rounded-full">● 연동됨</span>
            )}
            {gaLoading && (
              <span className="text-xs text-gray-400 font-medium bg-gray-50 px-3 py-1 rounded-full">조회 중...</span>
            )}
          </div>
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

                {/* 트렌드 차트 */}
                {gaData.trend.length > 0 && (
                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 mb-3">
                      {gaPreset === "today" || gaPreset === "yesterday" ? "시간별 세션" :
                       gaPreset === "7" ? "최근 7일 일별 세션" :
                       gaPreset === "14" ? "최근 14일 일별 세션" :
                       gaPreset === "30" ? "최근 30일 일별 세션" :
                       gaPreset === "90" ? "최근 90일 일별 세션" :
                       gaPreset === "180" ? "최근 90일 일별 세션" :
                       gaPreset === "365" ? "최근 90일 일별 세션" :
                       "일별 세션"}
                    </h3>
                    {(() => {
                      const data = gaData.trend;
                      const W = 560, H = 110;
                      const pad = { top: 18, right: 4, bottom: 18, left: 4 };
                      const cW = W - pad.left - pad.right;
                      const cH = H - pad.top - pad.bottom;
                      const max = Math.max(...data.map(t => t.sessions), 1);
                      const label = (d: string) =>
                        `${parseInt(d.slice(4, 6))}.${parseInt(d.slice(6, 8))}`;

                      if (data.length <= 14) {
                        /* ── 바 차트 (≤14일) ── */
                        const bw = cW / data.length;
                        const gap = Math.max(1, bw * 0.25);
                        return (
                          <svg viewBox={`0 0 ${W} ${H}`} className="w-full">
                            {data.map((t, i) => {
                              const bh = t.sessions > 0 ? Math.max(2, (t.sessions / max) * cH) : 0;
                              const x = pad.left + i * bw + gap / 2;
                              const y = pad.top + cH - bh;
                              return (
                                <g key={t.date}>
                                  <rect x={x} y={y} width={bw - gap} height={bh} rx="1.5" fill="#60a5fa" />
                                  <text x={x + (bw - gap) / 2} y={pad.top + cH - bh - 3}
                                    textAnchor="middle" fontSize="8" fill="#9ca3af">
                                    {t.sessions > 0 ? t.sessions : ""}
                                  </text>
                                  <text x={x + (bw - gap) / 2} y={H - 2}
                                    textAnchor="middle" fontSize="7.5" fill="#9ca3af">
                                    {label(t.date)}
                                  </text>
                                </g>
                              );
                            })}
                          </svg>
                        );
                      } else {
                        /* ── 영역 라인 차트 (>14일) ── */
                        const n = data.length;
                        const xs = data.map((_, i) => pad.left + (i / (n - 1)) * cW);
                        const ys = data.map(t => pad.top + cH - (t.sessions / max) * cH);
                        const polyline = data.map((_, i) => `${xs[i]},${ys[i]}`).join(" ");
                        const area = `M${xs[0]},${pad.top + cH} ` +
                          data.map((_, i) => `L${xs[i]},${ys[i]}`).join(" ") +
                          ` L${xs[n - 1]},${pad.top + cH} Z`;
                        /* 레이블: 첫·마지막·N 간격마다 */
                        const every = n <= 30 ? 6 : n <= 60 ? 10 : 15;
                        return (
                          <svg viewBox={`0 0 ${W} ${H}`} className="w-full">
                            <defs>
                              <linearGradient id="trendGrad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.35" />
                                <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.03" />
                              </linearGradient>
                            </defs>
                            <path d={area} fill="url(#trendGrad)" />
                            <polyline points={polyline} fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeLinejoin="round" />
                            {data.map((t, i) => {
                              const showDot = t.sessions > 0;
                              const showLabel = i === 0 || i === n - 1 || i % every === 0;
                              return (
                                <g key={t.date}>
                                  {showDot && <circle cx={xs[i]} cy={ys[i]} r="2" fill="#3b82f6" />}
                                  {showLabel && (
                                    <text x={xs[i]} y={H - 2} textAnchor="middle" fontSize="7.5" fill="#9ca3af">
                                      {label(t.date)}
                                    </text>
                                  )}
                                </g>
                              );
                            })}
                          </svg>
                        );
                      }
                    })()}
                  </div>
                )}
              </div>
            )}

            {/* 탭 2: 페이지뷰 상세 */}
            {gaTab === "pages" && (
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-semibold text-gray-700">인기 페이지 Top 10</h3>
                  <span className="text-xs text-gray-400">
                    {gaPreset === "today" ? "오늘 기준" : gaPreset === "yesterday" ? "어제 기준" :
                     gaPreset === "custom" && customStart && customEnd ? `${customStart} ~ ${customEnd}` :
                     `최근 ${gaPreset === "7" ? "7일" : gaPreset === "14" ? "14일" : gaPreset === "30" ? "30일" : gaPreset === "90" ? "90일" : gaPreset === "180" ? "6개월" : "1년"} 기준`}
                  </span>
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
