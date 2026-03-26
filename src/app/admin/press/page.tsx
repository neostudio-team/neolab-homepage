"use client";
import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import { auth } from "@/lib/firebase";

interface Press {
  id: string;
  titleKo: string;
  author: string;
  category: string;
  views: number;
  createdAt: string;
}

const BADGE_COLORS = ["#3b82f6","#10b981","#8b5cf6","#f97316","#ef4444","#14b8a6","#ec4899","#6366f1"];
function badgeColor(name: string) { return BADGE_COLORS[(name?.charCodeAt(0) || 0) % BADGE_COLORS.length]; }
function fmtDate(iso: string) { if (!iso) return "-"; return iso.slice(0, 10); }
function todayStr() { return new Date().toISOString().slice(0, 10); }
function offsetDay(n: number) { const d = new Date(); d.setDate(d.getDate() + n); return d.toISOString().slice(0, 10); }
function firstOfMonth(offset = 0) { const d = new Date(); d.setDate(1); d.setMonth(d.getMonth() + offset); return d.toISOString().slice(0, 10); }
function lastOfMonth(offset = 0) { const d = new Date(); d.setDate(1); d.setMonth(d.getMonth() + offset + 1); d.setDate(0); return d.toISOString().slice(0, 10); }

type QuickDate = "today" | "yesterday" | "1week" | "1month" | "thismonth" | "lastmonth" | "all";
const QUICK_OPTIONS: { key: QuickDate; label: string }[] = [
  { key: "today", label: "오늘" }, { key: "yesterday", label: "어제" },
  { key: "1week", label: "1주일" }, { key: "1month", label: "1개월" },
  { key: "thismonth", label: "이번달" }, { key: "lastmonth", label: "지난달" }, { key: "all", label: "전체" },
];
function quickRange(key: QuickDate): [string, string] {
  const today = todayStr();
  switch (key) {
    case "today": return [today, today];
    case "yesterday": { const y = offsetDay(-1); return [y, y]; }
    case "1week": return [offsetDay(-6), today];
    case "1month": return [offsetDay(-29), today];
    case "thismonth": return [firstOfMonth(0), lastOfMonth(0)];
    case "lastmonth": return [firstOfMonth(-1), lastOfMonth(-1)];
    case "all": return ["", ""];
  }
}

const PAGE_SIZE_OPTIONS = [10, 20, 50];
const BTN = "flex items-center justify-center w-8 h-8 rounded text-xs transition-colors border";
const BTN_NORMAL = `${BTN} border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed`;
const BTN_ACTIVE = `${BTN} border-[#1a1a2e] bg-[#1a1a2e] text-white font-semibold`;

export default function AdminPressPage() {
  const [items, setItems] = useState<Press[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [quickDate, setQuickDate] = useState<QuickDate>("all");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [searchField, setSearchField] = useState<"title" | "author">("title");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [activeKeyword, setActiveKeyword] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  async function fetchAll() {
    setLoading(true);
    const res = await fetch("/api/press");
    const data = await res.json();
    setItems(Array.isArray(data) ? data : []);
    setLoading(false);
  }
  useEffect(() => { fetchAll(); }, []);

  function applyQuick(key: QuickDate) {
    setQuickDate(key);
    const [s, e] = quickRange(key);
    setStartDate(s); setEndDate(e);
  }
  function doSearch() { setActiveKeyword(searchKeyword); setCurrentPage(1); }

  const filtered = useMemo(() => items.filter(item => {
    if (startDate || endDate) {
      const d = fmtDate(item.createdAt);
      if (startDate && d < startDate) return false;
      if (endDate && d > endDate) return false;
    }
    if (activeKeyword) {
      const kw = activeKeyword.toLowerCase();
      if (searchField === "title" && !item.titleKo?.toLowerCase().includes(kw)) return false;
      if (searchField === "author" && !item.author?.toLowerCase().includes(kw)) return false;
    }
    return true;
  }), [items, startDate, endDate, activeKeyword, searchField]);

  // reset page on filter / size change
  useEffect(() => { setCurrentPage(1); }, [activeKeyword, startDate, endDate, pageSize]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const pagedItems = useMemo(() => filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize), [filtered, currentPage, pageSize]);

  function toggleAll(checked: boolean) { setSelected(checked ? new Set(pagedItems.map(p => p.id)) : new Set()); }
  function toggleOne(id: string) { setSelected(prev => { const next = new Set(prev); next.has(id) ? next.delete(id) : next.add(id); return next; }); }

  async function doDelete() {
    const token = await auth.currentUser?.getIdToken();
    await Promise.all([...selected].map(id =>
      fetch(`/api/press/${id}`, { method: "DELETE", headers: { Authorization: `Bearer ${token}` } })
    ));
    setSelected(new Set()); setShowDeleteModal(false); fetchAll();
  }

  // pagination bar
  const groupStart = Math.floor((currentPage - 1) / 10) * 10 + 1;
  const groupEnd = Math.min(groupStart + 9, totalPages);
  const pageNums = Array.from({ length: groupEnd - groupStart + 1 }, (_, i) => groupStart + i);

  return (
    <div className="p-8 max-w-6xl">
      {showDeleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl shadow-xl p-8 w-[360px] flex flex-col items-center gap-5">
            <div className="text-3xl">🗑️</div>
            <h2 className="text-lg font-bold text-gray-800">게시글 삭제</h2>
            <p className="text-sm text-gray-500 text-center">{selected.size}개의 게시글을 삭제하시겠습니까?<br />삭제된 게시글은 복구할 수 없습니다.</p>
            <div className="flex gap-3 w-full">
              <button onClick={() => setShowDeleteModal(false)} className="flex-1 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors">취소</button>
              <button onClick={doDelete} className="flex-1 py-2.5 bg-red-500 text-white rounded-lg text-sm font-semibold hover:bg-red-600 transition-colors">삭제</button>
            </div>
          </div>
        </div>
      )}

      <h1 className="text-2xl font-bold text-gray-800 mb-6">기업뉴스 관리</h1>

      {/* 날짜 필터 */}
      <div className="bg-white border border-gray-200 rounded-xl px-5 py-4 mb-3 flex flex-wrap items-center gap-3">
        <div className="flex gap-1.5 flex-wrap">
          {QUICK_OPTIONS.map(opt => (
            <button key={opt.key} onClick={() => applyQuick(opt.key)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${quickDate === opt.key ? "bg-[#1a1a2e] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
              {opt.label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2 ml-auto flex-wrap">
          <input type="date" value={startDate} onChange={e => { setStartDate(e.target.value); setQuickDate("all"); }}
            className="border border-gray-200 rounded-lg px-3 py-1.5 text-xs text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1a1a2e]" />
          <span className="text-gray-400 text-xs">~</span>
          <input type="date" value={endDate} onChange={e => { setEndDate(e.target.value); setQuickDate("all"); }}
            className="border border-gray-200 rounded-lg px-3 py-1.5 text-xs text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1a1a2e]" />
          <button onClick={doSearch} className="px-4 py-1.5 bg-[#1a1a2e] text-white rounded-lg text-xs hover:bg-[#16213e] transition-colors">검색</button>
        </div>
      </div>

      {/* 키워드 검색 */}
      <div className="bg-white border border-gray-200 rounded-xl px-5 py-4 mb-3 flex items-center gap-3">
        <select value={searchField} onChange={e => setSearchField(e.target.value as "title" | "author")}
          className="border border-gray-200 rounded-lg px-3 py-1.5 text-xs text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1a1a2e]">
          <option value="title">제목</option>
          <option value="author">작성자</option>
        </select>
        <input value={searchKeyword} onChange={e => setSearchKeyword(e.target.value)}
          onKeyDown={e => e.key === "Enter" && doSearch()}
          placeholder="검색어를 입력하세요"
          className="flex-1 border border-gray-200 rounded-lg px-4 py-1.5 text-xs text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1a1a2e]" />
        <button onClick={doSearch} className="px-4 py-1.5 bg-[#1a1a2e] text-white rounded-lg text-xs hover:bg-[#16213e] transition-colors">검색</button>
      </div>

      {/* 총 개수 + 페이지당 행 수 */}
      <div className="flex items-center justify-between mb-2 px-1">
        <span className="text-xs text-gray-500">총 <strong className="text-gray-800">{filtered.length}</strong>개</span>
        <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}
          className="border border-gray-200 rounded-lg px-3 py-1.5 text-xs text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1a1a2e] bg-white">
          {PAGE_SIZE_OPTIONS.map(n => <option key={n} value={n}>{n}개씩 보기</option>)}
        </select>
      </div>

      {/* 테이블 */}
      {loading ? (
        <div className="bg-white border border-gray-200 rounded-xl p-12 text-center text-gray-400 text-sm">불러오는 중...</div>
      ) : (
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200 text-gray-500 text-xs">
              <tr>
                <th className="px-4 py-3 w-10">
                  <input type="checkbox" onChange={e => toggleAll(e.target.checked)}
                    checked={pagedItems.length > 0 && pagedItems.every(p => selected.has(p.id))}
                    className="w-4 h-4 rounded accent-[#1a1a2e]" />
                </th>
                <th className="px-4 py-3 w-16 text-center font-medium">번호</th>
                <th className="px-4 py-3 text-left font-medium">제목</th>
                <th className="px-4 py-3 w-36 text-center font-medium">작성자</th>
                <th className="px-4 py-3 w-28 text-center font-medium">날짜</th>
                <th className="px-4 py-3 w-16 text-center font-medium">조회</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {pagedItems.length === 0 ? (
                <tr><td colSpan={6} className="px-6 py-12 text-center text-gray-400 text-sm">등록된 기업뉴스가 없습니다.</td></tr>
              ) : pagedItems.map((p, idx) => {
                const globalIdx = (currentPage - 1) * pageSize + idx;
                return (
                  <tr key={p.id} className={`hover:bg-gray-50 transition-colors ${selected.has(p.id) ? "bg-blue-50/60" : ""}`}>
                    <td className="px-4 py-3 text-center">
                      <input type="checkbox" checked={selected.has(p.id)} onChange={() => toggleOne(p.id)} className="w-4 h-4 rounded accent-[#1a1a2e]" />
                    </td>
                    <td className="px-4 py-3 text-center text-gray-500 text-xs">{filtered.length - globalIdx}</td>
                    <td className="px-4 py-3">
                      <Link href={`/admin/press/${p.id}/edit`} className="text-gray-800 hover:text-[#1a1a2e] hover:underline font-medium line-clamp-1">{p.titleKo || "(제목 없음)"}</Link>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <div className="flex items-center justify-center gap-1.5">
                        <span className="inline-flex w-6 h-6 rounded-full items-center justify-center text-white text-[10px] font-bold flex-shrink-0"
                          style={{ backgroundColor: badgeColor(p.author) }}>{p.author?.charAt(0) || "?"}</span>
                        <span className="text-gray-600 text-xs">{p.author}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-center text-gray-500 text-xs">{fmtDate(p.createdAt)}</td>
                    <td className="px-4 py-3 text-center text-gray-500 text-xs">{p.views ?? 0}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* 페이지네이션 */}
      {!loading && totalPages > 1 && (
        <div className="flex items-center justify-center gap-1 mt-4">
          <button onClick={() => setCurrentPage(1)} disabled={currentPage === 1} className={BTN_NORMAL}>«</button>
          <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1} className={BTN_NORMAL}>‹</button>
          {pageNums.map(p => (
            <button key={p} onClick={() => setCurrentPage(p)} className={currentPage === p ? BTN_ACTIVE : BTN_NORMAL}>{p}</button>
          ))}
          <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages} className={BTN_NORMAL}>›</button>
          <button onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages} className={BTN_NORMAL}>»</button>
        </div>
      )}

      {/* 하단 툴바 */}
      <div className="mt-4 flex items-center justify-end gap-2">
        <button
          onClick={() => { if (selected.size === 0) { alert("삭제할 게시글을 선택해 주세요."); return; } setShowDeleteModal(true); }}
          className="px-4 py-2 border border-red-200 text-red-500 rounded-lg text-xs bg-white hover:bg-red-50 transition-colors">
          삭제
        </button>
        <Link href="/admin/press/new" className="px-4 py-2 bg-[#1a1a2e] text-white rounded-lg text-xs hover:bg-[#16213e] transition-colors">
          글쓰기
        </Link>
      </div>
    </div>
  );
}
