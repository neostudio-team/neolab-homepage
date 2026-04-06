"use client";
import { useEffect, useState, useMemo } from "react";
import { auth } from "@/lib/firebase";

interface Inquiry {
  id: string;
  category: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  fileBase64: string;
  fileName: string;
  fileType: string;
  isRead: boolean;
  createdAt: string;
}

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

export default function AdminContactPage() {
  const [items, setItems] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [quickDate, setQuickDate] = useState<QuickDate>("all");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [activeKeyword, setActiveKeyword] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [detailItem, setDetailItem] = useState<Inquiry | null>(null);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  async function fetchAll() {
    setLoading(true);
    try {
      const token = await auth.currentUser?.getIdToken();
      const res = await fetch("/api/contact", { headers: { Authorization: `Bearer ${token}` } });
      const data = await res.json();
      setItems(Array.isArray(data) ? data : []);
    } catch { setItems([]); }
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
      if (!item.name?.toLowerCase().includes(kw) &&
          !item.email?.toLowerCase().includes(kw) &&
          !item.subject?.toLowerCase().includes(kw)) return false;
    }
    return true;
  }), [items, startDate, endDate, activeKeyword]);

  useEffect(() => { setCurrentPage(1); }, [activeKeyword, startDate, endDate, pageSize]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const pagedItems = useMemo(() => filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize), [filtered, currentPage, pageSize]);

  function toggleAll(checked: boolean) { setSelected(checked ? new Set(pagedItems.map(n => n.id)) : new Set()); }
  function toggleOne(id: string) { setSelected(prev => { const next = new Set(prev); next.has(id) ? next.delete(id) : next.add(id); return next; }); }

  async function doDelete() {
    const token = await auth.currentUser?.getIdToken();
    await Promise.all([...selected].map(id =>
      fetch(`/api/contact/${id}`, { method: "DELETE", headers: { Authorization: `Bearer ${token}` } })
    ));
    setSelected(new Set()); setShowDeleteModal(false); fetchAll();
  }

  async function markRead(item: Inquiry) {
    if (item.isRead) return;
    const token = await auth.currentUser?.getIdToken();
    await fetch(`/api/contact/${item.id}`, {
      method: "PATCH",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({ isRead: true }),
    });
    setItems(prev => prev.map(i => i.id === item.id ? { ...i, isRead: true } : i));
    setDetailItem({ ...item, isRead: true });
  }

  const groupStart = Math.floor((currentPage - 1) / 10) * 10 + 1;
  const groupEnd = Math.min(groupStart + 9, totalPages);
  const pageNums = Array.from({ length: groupEnd - groupStart + 1 }, (_, i) => groupStart + i);

  const unreadCount = items.filter(i => !i.isRead).length;

  return (
    <div className="p-8 max-w-6xl">
      {/* 삭제 확인 모달 */}
      {showDeleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl shadow-xl p-8 w-[360px] flex flex-col items-center gap-5">
            <div className="text-3xl">🗑️</div>
            <h2 className="text-lg font-bold text-gray-800">문의 삭제</h2>
            <p className="text-sm text-gray-500 text-center">{selected.size}건의 문의를 삭제하시겠습니까?<br />삭제된 데이터는 복구할 수 없습니다.</p>
            <div className="flex gap-3 w-full">
              <button onClick={() => setShowDeleteModal(false)} className="flex-1 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50">취소</button>
              <button onClick={doDelete} className="flex-1 py-2.5 bg-red-500 text-white rounded-lg text-sm font-semibold hover:bg-red-600">삭제</button>
            </div>
          </div>
        </div>
      )}

      {/* 상세 보기 모달 */}
      {detailItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" onClick={() => setDetailItem(null)}>
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg max-h-[80vh] overflow-y-auto p-8" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-gray-800">문의 상세</h2>
              <button onClick={() => setDetailItem(null)} className="text-gray-400 hover:text-gray-700 text-xl">✕</button>
            </div>
            <dl className="space-y-3 text-sm">
              {[
                ["문의유형", detailItem.category || "-"],
                ["이름", detailItem.name],
                ["이메일", detailItem.email],
                ["연락처", detailItem.phone || "-"],
                ["제목", detailItem.subject],
                ["접수일", fmtDate(detailItem.createdAt)],
              ].map(([label, value]) => (
                <div key={label} className="flex gap-3">
                  <dt className="w-20 text-gray-400 shrink-0">{label}</dt>
                  <dd className="text-gray-800 flex-1 break-all">{value}</dd>
                </div>
              ))}
              <div>
                <dt className="text-gray-400 mb-1">내용</dt>
                <dd className="text-gray-800 bg-gray-50 rounded-lg p-3 whitespace-pre-wrap leading-relaxed">{detailItem.message}</dd>
              </div>
              {detailItem.fileName && (
                <div className="flex gap-3">
                  <dt className="w-20 text-gray-400 shrink-0">첨부파일</dt>
                  <dd>
                    {detailItem.fileBase64 ? (
                      <a
                        href={`data:${detailItem.fileType || "application/octet-stream"};base64,${detailItem.fileBase64}`}
                        download={detailItem.fileName}
                        className="text-blue-500 underline text-sm"
                      >
                        {detailItem.fileName}
                      </a>
                    ) : (
                      <span className="text-gray-400 text-sm">{detailItem.fileName}</span>
                    )}
                  </dd>
                </div>
              )}
            </dl>
          </div>
        </div>
      )}

      <div className="flex items-center gap-3 mb-6">
        <h1 className="text-2xl font-bold text-gray-800">문의 관리</h1>
        {unreadCount > 0 && (
          <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">{unreadCount} 미확인</span>
        )}
      </div>

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
        </div>
      </div>

      {/* 키워드 검색 */}
      <div className="bg-white border border-gray-200 rounded-xl px-5 py-4 mb-3 flex items-center gap-3">
        <input value={searchKeyword} onChange={e => setSearchKeyword(e.target.value)}
          onKeyDown={e => e.key === "Enter" && doSearch()}
          placeholder="이름 · 이메일 · 제목 검색"
          className="flex-1 border border-gray-200 rounded-lg px-4 py-1.5 text-xs text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1a1a2e]" />
        <button onClick={doSearch} className="px-4 py-1.5 bg-[#1a1a2e] text-white rounded-lg text-xs hover:bg-[#16213e] transition-colors">검색</button>
      </div>

      {/* 총 개수 + 버튼 */}
      <div className="flex items-center justify-between mb-2 px-1">
        <span className="text-xs text-gray-500">총 <strong className="text-gray-800">{filtered.length}</strong>건</span>
        <div className="flex items-center gap-2">
          <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}
            className="border border-gray-200 rounded-lg px-3 py-1.5 text-xs text-gray-700 focus:outline-none bg-white">
            {PAGE_SIZE_OPTIONS.map(n => <option key={n} value={n}>{n}개씩 보기</option>)}
          </select>
          <button
            onClick={() => { if (selected.size === 0) { alert("삭제할 항목을 선택해 주세요."); return; } setShowDeleteModal(true); }}
            className="px-4 py-1.5 border border-red-200 text-red-500 rounded-lg text-xs bg-white hover:bg-red-50 transition-colors">
            삭제
          </button>
        </div>
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
                    checked={pagedItems.length > 0 && pagedItems.every(n => selected.has(n.id))}
                    className="w-4 h-4 rounded accent-[#1a1a2e]" />
                </th>
                <th className="px-4 py-3 w-16 text-center font-medium">번호</th>
                <th className="px-4 py-3 w-28 text-center font-medium">문의유형</th>
                <th className="px-4 py-3 text-left font-medium">제목</th>
                <th className="px-4 py-3 w-28 text-center font-medium">이름</th>
                <th className="px-4 py-3 w-36 text-center font-medium">이메일</th>
                <th className="px-4 py-3 w-24 text-center font-medium">접수일</th>
                <th className="px-4 py-3 w-16 text-center font-medium">상태</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {pagedItems.length === 0 ? (
                <tr><td colSpan={8} className="px-6 py-12 text-center text-gray-400 text-sm">접수된 문의가 없습니다.</td></tr>
              ) : pagedItems.map((item, idx) => (
                <tr key={item.id}
                  className={`hover:bg-gray-50 transition-colors cursor-pointer ${selected.has(item.id) ? "bg-blue-50/60" : ""} ${!item.isRead ? "font-semibold" : ""}`}
                  onClick={() => { markRead(item); setDetailItem(item); }}
                >
                  <td className="px-4 py-3 text-center" onClick={e => e.stopPropagation()}>
                    <input type="checkbox" checked={selected.has(item.id)} onChange={() => toggleOne(item.id)} className="w-4 h-4 rounded accent-[#1a1a2e]" />
                  </td>
                  <td className="px-4 py-3 text-center text-gray-500 text-xs">{filtered.length - ((currentPage - 1) * pageSize + idx)}</td>
                  <td className="px-4 py-3 text-center">
                    {item.category ? (
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{item.category}</span>
                    ) : <span className="text-gray-400 text-xs">-</span>}
                  </td>
                  <td className="px-4 py-3 text-gray-800 hover:underline line-clamp-1">{item.subject || "(제목 없음)"}</td>
                  <td className="px-4 py-3 text-center text-gray-600 text-xs">{item.name}</td>
                  <td className="px-4 py-3 text-center text-gray-500 text-xs truncate max-w-[140px]">{item.email}</td>
                  <td className="px-4 py-3 text-center text-gray-500 text-xs">{fmtDate(item.createdAt)}</td>
                  <td className="px-4 py-3 text-center">
                    {item.isRead
                      ? <span className="text-xs text-gray-400">확인</span>
                      : <span className="text-xs bg-red-100 text-red-600 font-bold px-2 py-0.5 rounded-full">NEW</span>}
                  </td>
                </tr>
              ))}
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
    </div>
  );
}
