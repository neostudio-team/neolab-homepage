"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { auth } from "@/lib/firebase";
import { AdminPage, AdminTilde } from "@/components/admin/AdminCommon.styles";
import {
  DashBadgeNew,
  DashBadgeNotice,
  DashBadgeNoticeViolet,
  DashBoardCard,
  DashBoardCardHeader,
  DashBoardCardHeaderLeft,
  DashBoardCount,
  DashBoardFooter,
  DashBoardIcon,
  DashBoardLabel,
  DashBoardList,
  DashBoardListEmpty,
  DashBoardRow,
  DashBoardRowMeta,
  DashBoardRowTitle,
  DashCardsGrid,
  DashChannelDot,
  DashChannelName,
  DashDatePill,
  DashEngageBody,
  DashEngageCard,
  DashEngageDesc,
  DashEngageIcon,
  DashEngageLabel,
  DashEngageValue,
  DashFooterBlueLink,
  DashFooterMutedLink,
  DashFooterSep,
  DashGA2Col,
  DashGAAlertAmber,
  DashGAAlertAmberCode,
  DashGAAlertAmberOl,
  DashGAAlertAmberTitle,
  DashGAAlertRed,
  DashGAAlertRedText,
  DashGAAlertRedTitle,
  DashGABadgeOk,
  DashGABadgeWait,
  DashGABarFill,
  DashGABarFillSm,
  DashGABarTrack,
  DashGABarTrackSm,
  DashGABtn,
  DashGACountry,
  DashGADateRow,
  DashGAFlag,
  DashGAH2,
  DashGAH3,
  DashGAHeader,
  DashGAInput,
  DashGAListStack,
  DashGAListStackLg,
  DashGAMetricCard,
  DashGAMetricLabel,
  DashGAMetricsGrid,
  DashGAMetricSub,
  DashGAMetricTop,
  DashGAMetricValue,
  DashGANum,
  DashGAPagesHeader,
  DashGAPageSectionTitle,
  DashGAPagesCaption,
  DashGAPagesTable,
  DashGAPagesTd,
  DashGAPagesTh,
  DashGAPagesTr,
  DashGAPagePath,
  DashGAPagePathRow,
  DashGAPct,
  DashGAPresetBtn,
  DashGAPresetWrap,
  DashGARow,
  DashGAStat,
  DashGASection,
  DashGASub,
  DashGASummaryCell,
  DashGASummaryGrid,
  DashGASummaryLabel,
  DashGASummaryValue,
  DashGASvg,
  DashGATabBar,
  DashGATabBtn,
  DashGATabRow,
  DashGATableScroll,
  DashGAToolbar,
  DashHeader,
  DashLoadingText,
  DashLoadingWrap,
  DashSubtitle,
  DashTitle,
} from "@/components/admin/AdminDashboard.styles";

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
const CHANNEL_HEX: Record<string, string> = {
  "Organic Search": "#4ade80",
  Direct: "#60a5fa",
  Referral: "#c084fc",
  "Organic Social": "#f472b6",
  "Paid Search": "#facc15",
  Email: "#fb923c",
  Display: "#f87171",
  Unassigned: "#d1d5db",
  "(not set)": "#d1d5db",
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
      key: "notice",
      label: "공지사항",
      icon: "📋",
      gradient: "linear-gradient(to right, #3b82f6, #2563eb)",
      items: notices,
      newHref: "/admin/notices/new",
      listHref: "/admin/notices",
      badge: (n: BoardItem) =>
        n.isPinned ? <DashBadgeNotice>공지</DashBadgeNotice> : null,
    },
    {
      key: "press",
      label: "기업뉴스",
      icon: "📰",
      gradient: "linear-gradient(to right, #10b981, #059669)",
      items: press,
      newHref: "/admin/press/new",
      listHref: "/admin/press",
      badge: () => null,
    },
    {
      key: "customer",
      label: "고객지원",
      icon: "🎧",
      gradient: "linear-gradient(to right, #8b5cf6, #7c3aed)",
      items: customer,
      newHref: "/admin/customer/new",
      listHref: "/admin/customer",
      badge: (n: BoardItem) =>
        n.isPinned ? <DashBadgeNoticeViolet>공지</DashBadgeNoticeViolet> : null,
    },
    {
      key: "contact",
      label: "문의 관리",
      icon: "📩",
      gradient: "linear-gradient(to right, #f43f5e, #e11d48)",
      items: contacts.map(
        (c) =>
          ({
            id: c.id,
            titleKo: c.subject || "(제목 없음)",
            createdAt: c.createdAt,
            isPinned: !c.isRead,
          }) as BoardItem,
      ),
      newHref: "/admin/contact",
      listHref: "/admin/contact",
      badge: (n: BoardItem) =>
        n.isPinned ? <DashBadgeNew>NEW</DashBadgeNew> : null,
    },
  ];

  if (loading) {
    return (
      <DashLoadingWrap>
        <DashLoadingText>불러오는 중...</DashLoadingText>
      </DashLoadingWrap>
    );
  }

  const TAB_ITEMS: { key: GATab; label: string }[] = [
    { key: "overview", label: "개요" },
    { key: "pages", label: "페이지뷰 상세" },
    { key: "sessions", label: "세션 상세" },
  ];

  const gaRangeLabel =
    gaPreset === "today"
      ? "오늘"
      : gaPreset === "yesterday"
        ? "어제"
        : gaPreset === "custom" && customStart && customEnd
          ? `${customStart} ~ ${customEnd}`
          : gaPreset === "7"
            ? "최근 7일"
            : gaPreset === "14"
              ? "최근 14일"
              : gaPreset === "30"
                ? "최근 30일"
                : gaPreset === "90"
                  ? "최근 90일"
                  : gaPreset === "180"
                    ? "최근 6개월"
                    : gaPreset === "365"
                      ? "최근 1년"
                      : "";

  return (
    <AdminPage $max="7xl">
      <DashHeader>
        <div>
          <DashTitle>대시보드</DashTitle>
          <DashSubtitle>NeoLAB Convergence 홈페이지 관리 현황</DashSubtitle>
        </div>
        <DashDatePill>{todayKr()}</DashDatePill>
      </DashHeader>

      <DashCardsGrid>
        {CARDS.map((card) => (
          <DashBoardCard key={card.key}>
            <DashBoardCardHeader $gradient={card.gradient}>
              <DashBoardCardHeaderLeft>
                <DashBoardIcon>{card.icon}</DashBoardIcon>
                <DashBoardLabel>{card.label}</DashBoardLabel>
              </DashBoardCardHeaderLeft>
              <DashBoardCount>{card.items.length}</DashBoardCount>
            </DashBoardCardHeader>

            <DashBoardList>
              {card.items.length === 0 ? (
                <DashBoardListEmpty>등록된 항목이 없습니다.</DashBoardListEmpty>
              ) : (
                card.items.slice(0, 5).map((item) => {
                  const m = item as unknown as MemberItem;
                  const isMember = card.key === "member";
                  return (
                    <DashBoardRow key={item.id}>
                      {card.badge(item)}
                      <DashBoardRowTitle>
                        {isMember ? m.name : item.titleKo || "(제목 없음)"}
                      </DashBoardRowTitle>
                      <DashBoardRowMeta>
                        {isMember
                          ? m.email.split("@")[0]
                          : fmtShort(item.createdAt)}
                      </DashBoardRowMeta>
                    </DashBoardRow>
                  );
                })
              )}
            </DashBoardList>

            <DashBoardFooter>
              <DashFooterMutedLink href={card.listHref}>
                목록보기
              </DashFooterMutedLink>
              {card.key !== "member" && card.key !== "contact" && (
                <>
                  <DashFooterSep>|</DashFooterSep>
                  <DashFooterBlueLink href={card.newHref}>
                    새 글 작성
                  </DashFooterBlueLink>
                </>
              )}
            </DashBoardFooter>
          </DashBoardCard>
        ))}
      </DashCardsGrid>

      <DashGASection>
        <DashGAHeader>
          <div>
            <DashGAH2>방문 통계</DashGAH2>
            <DashGASub>Google Analytics · {gaRangeLabel}</DashGASub>
          </div>
          <DashGAToolbar>
            <DashGAPresetWrap>
              {PRESET_OPTIONS.map((opt) => (
                <DashGAPresetBtn
                  key={opt.key}
                  type="button"
                  $active={gaPreset === opt.key}
                  onClick={() => {
                    setGaPreset(opt.key);
                    if (opt.key !== "custom") void fetchGA(opt.key, "", "");
                  }}
                >
                  {opt.label}
                </DashGAPresetBtn>
              ))}
            </DashGAPresetWrap>
            {gaPreset === "custom" && (
              <DashGADateRow>
                <DashGAInput
                  type="date"
                  value={customStart}
                  onChange={(e) => setCustomStart(e.target.value)}
                />
                <AdminTilde>~</AdminTilde>
                <DashGAInput
                  type="date"
                  value={customEnd}
                  onChange={(e) => setCustomEnd(e.target.value)}
                />
                <DashGABtn
                  type="button"
                  onClick={() => {
                    if (customStart && customEnd)
                      void fetchGA("custom", customStart, customEnd);
                  }}
                  disabled={!customStart || !customEnd}
                >
                  조회
                </DashGABtn>
              </DashGADateRow>
            )}
            {gaData && !gaLoading && <DashGABadgeOk>● 연동됨</DashGABadgeOk>}
            {gaLoading && <DashGABadgeWait>조회 중...</DashGABadgeWait>}
          </DashGAToolbar>
        </DashGAHeader>

        {gaError === "GA_PROPERTY_ID_NOT_SET" && (
          <DashGAAlertAmber>
            <DashGAAlertAmberTitle>
              📌 GA 연동 설정이 필요합니다
            </DashGAAlertAmberTitle>
            <DashGAAlertAmberOl>
              <li>
                Google Analytics 콘솔 → 관리 → 속성 설정에서{" "}
                <strong>속성 ID</strong>(숫자) 확인
              </li>
              <li>
                Firebase Admin 서비스 계정을 GA 속성에 <strong>뷰어</strong>로
                추가
              </li>
              <li>
                Vercel 환경변수에{" "}
                <DashGAAlertAmberCode>GA_PROPERTY_ID=숫자</DashGAAlertAmberCode>{" "}
                추가 후 재배포
              </li>
              <li>
                Google Cloud Console에서{" "}
                <strong>Google Analytics Data API</strong> 활성화
              </li>
            </DashGAAlertAmberOl>
          </DashGAAlertAmber>
        )}
        {gaError && gaError !== "GA_PROPERTY_ID_NOT_SET" && (
          <DashGAAlertRed>
            <DashGAAlertRedTitle>⚠️ GA 데이터 조회 실패</DashGAAlertRedTitle>
            <DashGAAlertRedText>{gaError}</DashGAAlertRedText>
          </DashGAAlertRed>
        )}

        {gaData && (
          <>
            <DashGAMetricsGrid>
              {[
                {
                  label: "방문자수",
                  value: fmt(gaData.summary.activeUsers),
                  sub: "Active Users",
                  icon: "👤",
                  valueColor: "#2563eb",
                  bg: "#eff6ff",
                },
                {
                  label: "세션수",
                  value: fmt(gaData.summary.sessions),
                  sub: "Sessions",
                  icon: "📊",
                  valueColor: "#059669",
                  bg: "#ecfdf5",
                },
                {
                  label: "페이지뷰",
                  value: fmt(gaData.summary.pageViews),
                  sub: "Page Views",
                  icon: "👁️",
                  valueColor: "#7c3aed",
                  bg: "#f5f3ff",
                },
                {
                  label: "신규방문자",
                  value: fmt(gaData.summary.newUsers),
                  sub: "New Users",
                  icon: "✨",
                  valueColor: "#ea580c",
                  bg: "#fff7ed",
                },
              ].map((m) => (
                <DashGAMetricCard key={m.label} $bg={m.bg}>
                  <DashGAMetricTop>
                    <span>{m.icon}</span>
                    <DashGAMetricSub>{m.sub}</DashGAMetricSub>
                  </DashGAMetricTop>
                  <DashGAMetricValue $color={m.valueColor}>{m.value}</DashGAMetricValue>
                  <DashGAMetricLabel>{m.label}</DashGAMetricLabel>
                </DashGAMetricCard>
              ))}
            </DashGAMetricsGrid>

            <DashGATabBar>
              <DashGATabRow>
                {TAB_ITEMS.map((t) => (
                  <DashGATabBtn
                    key={t.key}
                    type="button"
                    $active={gaTab === t.key}
                    onClick={() => setGaTab(t.key)}
                  >
                    {t.label}
                  </DashGATabBtn>
                ))}
              </DashGATabRow>
            </DashGATabBar>

            {gaTab === "overview" && (
              <DashGA2Col>
                <div>
                  <DashGAH3>국가별 접속자</DashGAH3>
                  <DashGAListStack>
                    {gaData.countries.map((c, i) => (
                      <DashGARow key={c.country}>
                        <DashGANum>{i + 1}</DashGANum>
                        <DashGAFlag>{FLAG[c.country] || "🌐"}</DashGAFlag>
                        <DashGACountry>
                          {COUNTRY_MAP[c.country] || c.country}
                        </DashGACountry>
                        <DashGABarTrack>
                          <DashGABarFill
                            $widthPct={c.pct}
                            $fill="linear-gradient(to right, #60a5fa, #3b82f6)"
                          />
                        </DashGABarTrack>
                        <DashGAStat>{fmt(c.users)}명</DashGAStat>
                        <DashGAPct>{c.pct}%</DashGAPct>
                      </DashGARow>
                    ))}
                  </DashGAListStack>
                </div>

                {/* 트렌드 차트 */}
                {gaData.trend.length > 0 && (
                  <div>
                    <DashGAH3>
                      {gaPreset === "today" || gaPreset === "yesterday"
                        ? "시간별 세션"
                        : gaPreset === "7"
                          ? "최근 7일 일별 세션"
                          : gaPreset === "14"
                            ? "최근 14일 일별 세션"
                            : gaPreset === "30"
                              ? "최근 30일 일별 세션"
                              : gaPreset === "90"
                                ? "최근 90일 일별 세션"
                                : gaPreset === "180"
                                  ? "최근 90일 일별 세션"
                                  : gaPreset === "365"
                                    ? "최근 90일 일별 세션"
                                    : "일별 세션"}
                    </DashGAH3>
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
                          <DashGASvg viewBox={`0 0 ${W} ${H}`}>
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
                          </DashGASvg>
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
                          <DashGASvg viewBox={`0 0 ${W} ${H}`}>
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
                          </DashGASvg>
                        );
                      }
                    })()}
                  </div>
                )}
              </DashGA2Col>
            )}

            {gaTab === "pages" && (
              <div>
                <DashGAPagesHeader>
                  <DashGAPageSectionTitle>
                    인기 페이지 Top 10
                  </DashGAPageSectionTitle>
                  <DashGAPagesCaption>
                    {gaPreset === "today"
                      ? "오늘 기준"
                      : gaPreset === "yesterday"
                        ? "어제 기준"
                        : gaPreset === "custom" && customStart && customEnd
                          ? `${customStart} ~ ${customEnd}`
                          : `최근 ${
                              gaPreset === "7"
                                ? "7일"
                                : gaPreset === "14"
                                  ? "14일"
                                  : gaPreset === "30"
                                    ? "30일"
                                    : gaPreset === "90"
                                      ? "90일"
                                      : gaPreset === "180"
                                        ? "6개월"
                                        : "1년"
                            } 기준`}
                  </DashGAPagesCaption>
                </DashGAPagesHeader>
                <DashGATableScroll>
                  <DashGAPagesTable>
                    <thead>
                      <tr>
                        <DashGAPagesTh $w="24px">#</DashGAPagesTh>
                        <DashGAPagesTh>페이지 경로</DashGAPagesTh>
                        <DashGAPagesTh $align="right" $w="96px">
                          페이지뷰
                        </DashGAPagesTh>
                        <DashGAPagesTh $align="right" $w="64px">
                          사용자
                        </DashGAPagesTh>
                        <DashGAPagesTh $align="right" $w="48px">
                          비중
                        </DashGAPagesTh>
                      </tr>
                    </thead>
                    <tbody>
                      {gaData.topPages.map((p, i) => (
                        <DashGAPagesTr key={p.path}>
                          <DashGAPagesTd>{i + 1}</DashGAPagesTd>
                          <DashGAPagesTd>
                            <DashGAPagePathRow>
                              <DashGAPagePath title={p.path}>
                                {p.path}
                              </DashGAPagePath>
                              <DashGABarTrackSm>
                                <DashGABarFillSm
                                  $widthPct={p.pct}
                                  $fill="#a78bfa"
                                />
                              </DashGABarTrackSm>
                            </DashGAPagePathRow>
                          </DashGAPagesTd>
                          <DashGAPagesTd $align="right" $variant="violet">
                            {fmt(p.pageViews)}
                          </DashGAPagesTd>
                          <DashGAPagesTd $align="right" $variant="muted">
                            {fmt(p.users)}
                          </DashGAPagesTd>
                          <DashGAPagesTd $align="right">{p.pct}%</DashGAPagesTd>
                        </DashGAPagesTr>
                      ))}
                    </tbody>
                  </DashGAPagesTable>
                </DashGATableScroll>

                <DashGASummaryGrid>
                  <DashGASummaryCell>
                    <DashGASummaryLabel>세션당 페이지뷰</DashGASummaryLabel>
                    <DashGASummaryValue $color="#7c3aed">
                      {gaData.summary.pagesPerSession.toFixed(1)}
                    </DashGASummaryValue>
                  </DashGASummaryCell>
                  <DashGASummaryCell>
                    <DashGASummaryLabel>총 페이지뷰</DashGASummaryLabel>
                    <DashGASummaryValue $color="#1f2937">
                      {fmt(gaData.summary.pageViews)}
                    </DashGASummaryValue>
                  </DashGASummaryCell>
                  <DashGASummaryCell>
                    <DashGASummaryLabel>신규 방문자</DashGASummaryLabel>
                    <DashGASummaryValue $color="#ea580c">
                      {fmt(gaData.summary.newUsers)}
                    </DashGASummaryValue>
                  </DashGASummaryCell>
                </DashGASummaryGrid>
              </div>
            )}

            {gaTab === "sessions" && (
              <DashGA2Col>
                <div>
                  <DashGAH3>유입 채널별 세션</DashGAH3>
                  <DashGAListStack>
                    {gaData.sources.map((s, i) => {
                      const chColor =
                        CHANNEL_HEX[s.channel] ?? "#d1d5db";
                      return (
                        <DashGARow key={s.channel}>
                          <DashGANum>{i + 1}</DashGANum>
                          <DashChannelDot $color={chColor} />
                          <DashChannelName>
                            {CHANNEL_KO[s.channel] || s.channel}
                          </DashChannelName>
                          <DashGABarTrack>
                            <DashGABarFill
                              $widthPct={s.pct}
                              $fill={chColor}
                            />
                          </DashGABarTrack>
                          <DashGAStat>{fmt(s.sessions)}세션</DashGAStat>
                          <DashGAPct>{s.pct}%</DashGAPct>
                        </DashGARow>
                      );
                    })}
                  </DashGAListStack>
                </div>

                <div>
                  <DashGAH3>참여 지표</DashGAH3>
                  <DashGAListStackLg>
                    {[
                      {
                        label: "평균 세션 시간",
                        value: fmtDuration(gaData.summary.avgSessionDuration),
                        icon: "⏱️",
                        desc: "방문자 1인당 평균 체류 시간",
                        valueColor: "#2563eb",
                        bg: "#eff6ff",
                      },
                      {
                        label: "이탈률",
                        value: fmtPct(gaData.summary.bounceRate),
                        icon: "↩️",
                        desc: "1개 페이지만 보고 떠난 비율",
                        valueColor:
                          gaData.summary.bounceRate > 0.7
                            ? "#ef4444"
                            : "#059669",
                        bg:
                          gaData.summary.bounceRate > 0.7
                            ? "#fef2f2"
                            : "#ecfdf5",
                      },
                      {
                        label: "세션당 페이지뷰",
                        value: `${gaData.summary.pagesPerSession.toFixed(1)}페이지`,
                        icon: "📄",
                        desc: "방문당 평균 페이지 조회 수",
                        valueColor: "#7c3aed",
                        bg: "#f5f3ff",
                      },
                      {
                        label: "총 세션",
                        value: `${fmt(gaData.summary.sessions)}회`,
                        icon: "📊",
                        desc: "최근 30일 전체 세션 수",
                        valueColor: "#059669",
                        bg: "#ecfdf5",
                      },
                    ].map((m) => (
                      <DashEngageCard key={m.label} $bg={m.bg}>
                        <DashEngageIcon>{m.icon}</DashEngageIcon>
                        <DashEngageBody>
                          <DashEngageDesc>{m.desc}</DashEngageDesc>
                          <DashEngageLabel>{m.label}</DashEngageLabel>
                        </DashEngageBody>
                        <DashEngageValue $color={m.valueColor}>
                          {m.value}
                        </DashEngageValue>
                      </DashEngageCard>
                    ))}
                  </DashGAListStackLg>
                </div>
              </DashGA2Col>
            )}
          </>
        )}
      </DashGASection>
    </AdminPage>
  );
}
