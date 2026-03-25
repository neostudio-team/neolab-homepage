"use client";
import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import { auth } from "@/lib/firebase";

interface Notice {
  id: string;
  isPinned: boolean;
  titleKo: string;
  author: string;
  views: number;
  createdAt: string;
}

const BADGE_COLORS = ["#3b82f6","#10b981","#8b5cf6","#f97316","#ef4444","#14b8a6","#ec4899","#6366f1"];
function badgeColor(name: string) {
  return BADGE_COLORS[(name?.charCodeAt(0) || 0) % BADGE_COLORS.length];
}
function fmtDate(iso: string) {
  if (!iso) return "-";
  return iso.slice(0, 10);
}
function todayStr() { return new Date().toISOString().slice(0, 10); }
function offsetDay(n: number) { const d = new Date(); d.setDate(d.getDate() + n); return d.toISOString().slice(0, 10); }
function firstOfMonth(offset = 0) { const d = new Date(); d.setDate(1); d.setMonth(d.getMonth() + offset); return d.toISOString().slice(0, 10); }
function lastOfMonth(offset = 0) { const d = new Date(); d.setDate(1); d.setMonth(d.getMonth() + offset + 1); d.setDate(0); return d.toISOString().slice(0, 10); }

type QuickDate = "today" | "yesterday" | "1week" | "1month" | "thismonth" | "lastmonth" | "all";
const QUICK_OPTIONS: { key: QuickDate; label: string }[] = [
  { key: "today", label: "오늘" },
  { key: "yesterday", label: "어제" },
  { key: "1week", label: "1주일" },
  { key: "1month", label: "1개월" },
  { key: "thismonth", label: "이번달" },
  { key: "lastmonth", label: "지난달" },
  { key: "all", label: "전체" },
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

export default function AdminNoticesPage() {
  const [items, setItems] = useState<Notice[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [quickDate, setQuickDate] = useState<QuickDate>("all");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [searchField, setSearchField] = useState<"title" | "author">("title");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [activeKeyword, setActiveKeyword] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  async function fetchAll() {
    setLoading(true);
    const res = await fetch("/api/notices");
    const data = await res.json();
    const list: Notice[] = Array.isArray(data) ? data : [];
    setItems([...list.filter(n => n.isPinned), ...list.filter(n => !n.isPinned)]);
    setLoading(false);
  }
  useEffect(() => { fetchAll(); }, []);

  function applyQuick(key: QuickDate) {
    setQuickDate(key);
    const [s, e] = quickRange(key);
    setStartDate(s);
    setEndDate(e);
  }
  function doSearch() { setActiveKeyword(searchKeyword); }

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

  const nonPinnedFiltered = filtered.filter(x => !x.isPinned);

  function toggleAll(checked: boolean) {
    setSelected(checked ? new Set(filtered.map(n => n.id)) : new Set());
  }
  function toggleOne(id: string) {
    setSelected(prev => { const next = new Set(prev); next.has(id) ? next.delete(id) : next.add(id); return next; });
  }

  async function doDelete() {
    const token = await auth.currentUser?.getIdToken();
    await Promise.all([...selected].map(id =>
      fetch(`/api/notices/${id}`, { method: "DELETE", headers: { Authorization: `Bearer ${token}` } })
    ));
    setSelected(new Set());
    setShowDeleteModal(false);
    fetchAll();
  }

  return (
    <div className="p-8 max-w-6xl">
      {/* 삭제 확인 모달 */}
      {showDeleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl shadow-xl p-8 w-[360px] flex flex-col items-center gap-5">
            <div className="text-3xl">🗑️</div>
            <h2 className="text-lg font-bold text-gray-800">게시글 삭제</h2>
            <p className="text-sm text-gray-500 text-center">
              {selected.size}개의 게시글을 삭제하시겠습니까?<br />삭제된 게시글은 복구할 수 없습니다.
            </p>
            <div className="flex gap-3 w-full">
              <button onClick={() => setShowDeleteModal(false)} className="flex-1 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors">취소</button>
              <button onClick={doDelete} className="flex-1 py-2.5 bg-red-500 text-white rounded-lg text-sm font-semibold hover:bg-red-600 transition-colors">삭제</button>
            </div>
          </div>
        </div>
      )}

      <h1 className="text-2xl font-bold text-gray-800 mb-6">공지사항 관리</h1>

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
      <div className="bg-white border border-gray-200 rounded-xl px-5 py-4 mb-4 flex items-center gap-3">
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
                    checked={selected.size === filtered.length && filtered.length > 0}
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
              {filtered.length === 0 ? (
                <tr><td colSpan={6} className="px-6 py-12 text-center text-gray-400 text-sm">등록된 공지사항이 없습니다.</td></tr>
              ) : filtered.map(n => {
                const nonPinnedIdx = nonPinnedFiltered.findIndex(x => x.id === n.id);
                return (
                  <tr key={n.id} className={`hover:bg-gray-50 transition-colors ${selected.has(n.id) ? "bg-blue-50/60" : ""}`}>
                    <td className="px-4 py-3 text-center">
                      <input type="checkbox" checked={selected.has(n.id)} onChange={() => toggleOne(n.id)} className="w-4 h-4 rounded accent-[#1a1a2e]" />
                    </td>
                    <td className="px-4 py-3 text-center">
                      {n.isPinned
                        ? <span className="inline-block bg-[#1a1a2e] text-white text-[10px] font-bold px-2 py-0.5 rounded">공지</span>
                        : <span className="text-gray-500 text-xs">{nonPinnedFiltered.length - nonPinnedIdx}</span>
                      }
                    </td>
                    <td className="px-4 py-3">
                      <Link href={`/admin/notices/${n.id}/edit`} className="text-gray-800 hover:text-[#1a1a2e] hover:underline font-medium line-clamp-1">{n.titleKo || "(제목 없음)"}</Link>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <div className="flex items-center justify-center gap-1.5">
                        <span className="inline-flex w-6 h-6 rounded-full items-center justify-center text-white text-[10px] font-bold flex-shrink-0"
                          style={{ backgroundColor: badgeColor(n.author) }}>
                          {n.author?.charAt(0) || "?"}
                        </span>
                        <span className="text-gray-600 text-xs">{n.author}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-center text-gray-500 text-xs">{fmtDate(n.createdAt)}</td>
                    <td className="px-4 py-3 text-center text-gray-500 text-xs">{n.views ?? 0}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* 하단 툴바 */}
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <select className="border border-gray-200 rounded-lg px-3 py-2 text-xs text-gray-700 focus:outline-none bg-white">
            <option>공지사항</option>
          </select>
          <button className="px-4 py-2 border border-gray-200 rounded-lg text-xs text-gray-600 bg-white hover:bg-gray-50 transition-colors">이동</button>
          <button className="px-4 py-2 border border-gray-200 rounded-lg text-xs text-gray-600 bg-white hover:bg-gray-50 transition-colors">복사</button>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => { if (selected.size === 0) { alert("삭제할 게시글을 선택해 주세요."); return; } setShowDeleteModal(true); }}
            className="px-4 py-2 border border-red-200 text-red-500 rounded-lg text-xs bg-white hover:bg-red-50 transition-colors">
            삭제
          </button>
          <Link href="/admin/notices/new" className="px-4 py-2 bg-[#1a1a2e] text-white rounded-lg text-xs hover:bg-[#16213e] transition-colors">
            글쓰기
          </Link>
        </div>
      </div>
    </div>
  );
}
