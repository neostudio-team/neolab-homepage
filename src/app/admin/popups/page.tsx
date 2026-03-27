"use client";
import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import { auth } from "@/lib/firebase";

interface Popup {
  id: string;
  isActive: boolean;
  title: string;
  startDate: string;
  endDate: string;
  position: string;
  language?: string;
  author?: string;
  createdAt: string;
}

const BADGE_COLORS = ["#3b82f6","#10b981","#8b5cf6","#f97316","#ef4444","#14b8a6","#ec4899","#6366f1"];
function badgeColor(name: string) { return BADGE_COLORS[(name?.charCodeAt(0) || 0) % BADGE_COLORS.length]; }

function fmtDate(iso: string) { if (!iso) return "-"; return iso.replace("T", " ").slice(0, 16); }

const PAGE_SIZE_OPTIONS = [10, 20, 50];
const BTN = "flex items-center justify-center w-8 h-8 rounded text-xs transition-colors border";
const BTN_NORMAL = `${BTN} border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed`;
const BTN_ACTIVE = `${BTN} border-[#1a1a2e] bg-[#1a1a2e] text-white font-semibold`;

export default function AdminPopupsPage() {
  const [items, setItems] = useState<Popup[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  async function fetchAll(user: any) {
    if (!user) return;
    setLoading(true);
    const token = await user.getIdToken();
    const headers: Record<string, string> = { Authorization: `Bearer ${token}` };
    const res = await fetch("/api/popups", { headers, cache: "no-store" });
    const data = await res.json();
    setItems(Array.isArray(data) ? data : []);
    setLoading(false);
  }
  useEffect(() => { 
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) fetchAll(user);
    });
    return () => unsubscribe();
  }, []);

  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
  const pagedItems = useMemo(() => items.slice((currentPage - 1) * pageSize, currentPage * pageSize), [items, currentPage, pageSize]);

  function toggleAll(checked: boolean) { setSelected(checked ? new Set(pagedItems.map(n => n.id)) : new Set()); }
  function toggleOne(id: string) { setSelected(prev => { const next = new Set(prev); next.has(id) ? next.delete(id) : next.add(id); return next; }); }

  async function doDelete() {
    const user = auth.currentUser;
    if (!user) return;
    const token = await user.getIdToken();
    await Promise.all([...selected].map(id =>
      fetch(`/api/popups/${id}`, { method: "DELETE", headers: { Authorization: `Bearer ${token}` } })
    ));
    setSelected(new Set()); setShowDeleteModal(false); fetchAll(user);
  }

  const groupStart = Math.floor((currentPage - 1) / 10) * 10 + 1;
  const groupEnd = Math.min(groupStart + 9, totalPages);
  const pageNums = Array.from({ length: groupEnd - groupStart + 1 }, (_, i) => groupStart + i);

  return (
    <div className="p-8 max-w-6xl">
      {showDeleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl shadow-xl p-8 w-[360px] flex flex-col items-center gap-5">
            <div className="text-3xl">🗑️</div>
            <h2 className="text-lg font-bold text-gray-800">팝업 삭제</h2>
            <p className="text-sm text-gray-500 text-center">{selected.size}개의 팝업을 삭제하시겠습니까?<br />삭제된 팝업은 복구할 수 없습니다.</p>
            <div className="flex gap-3 w-full">
              <button onClick={() => setShowDeleteModal(false)} className="flex-1 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors">취소</button>
              <button onClick={doDelete} className="flex-1 py-2.5 bg-red-500 text-white rounded-lg text-sm font-semibold hover:bg-red-600 transition-colors">삭제</button>
            </div>
          </div>
        </div>
      )}

      <h1 className="text-2xl font-bold text-gray-800 mb-6">팝업 관리</h1>

      <div className="flex items-center justify-between mb-2 px-1">
        <span className="text-xs text-gray-500">총 <strong className="text-gray-800">{items.length}</strong>개</span>
        <div className="flex items-center gap-2">
          <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}
            className="border border-gray-200 rounded-lg px-3 py-1.5 text-xs text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1a1a2e] bg-white">
            {PAGE_SIZE_OPTIONS.map(n => <option key={n} value={n}>{n}개씩 보기</option>)}
          </select>
          <button
            onClick={() => { if (selected.size === 0) { alert("삭제할 팝업을 선택해 주세요."); return; } setShowDeleteModal(true); }}
            className="px-4 py-1.5 border border-red-200 text-red-500 rounded-lg text-xs bg-white hover:bg-red-50 transition-colors">
            삭제
          </button>
          <Link href="/admin/popups/new" className="px-4 py-1.5 bg-[#1a1a2e] text-white rounded-lg text-xs hover:bg-[#16213e] transition-colors">
            작성하기
          </Link>
        </div>
      </div>

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
                <th className="px-4 py-3 w-20 text-center font-medium">상태</th>
                <th className="px-4 py-3 text-left font-medium">제목</th>
                <th className="px-4 py-3 w-32 text-center font-medium">작성자</th>
                <th className="px-4 py-3 w-28 text-center font-medium">노출 페이지</th>
                <th className="px-4 py-3 text-center font-medium w-40">배포 일정</th>
                <th className="px-4 py-3 w-32 text-center font-medium">위치</th>
                <th className="px-4 py-3 w-24 text-center font-medium">수정</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {pagedItems.length === 0 ? (
                <tr><td colSpan={6} className="px-6 py-12 text-center text-gray-400 text-sm">등록된 팝업이 없습니다.</td></tr>
              ) : pagedItems.map(n => (
                <tr key={n.id} className={`hover:bg-gray-50 transition-colors ${selected.has(n.id) ? "bg-blue-50/60" : ""}`}>
                  <td className="px-4 py-3 text-center">
                    <input type="checkbox" checked={selected.has(n.id)} onChange={() => toggleOne(n.id)} className="w-4 h-4 rounded accent-[#1a1a2e]" />
                  </td>
                  <td className="px-4 py-3 text-center">
                    {n.isActive
                      ? <span className="inline-block bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded">활성</span>
                      : <span className="inline-block bg-gray-300 text-gray-700 text-[10px] font-bold px-2 py-0.5 rounded">비활성</span>
                    }
                  </td>
                  <td className="px-4 py-3">
                    <Link href={`/admin/popups/${n.id}/edit`} className="text-gray-800 hover:text-[#1a1a2e] hover:underline font-medium line-clamp-1">
                      {n.title || "(제목 없음)"}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex items-center justify-center gap-1.5 flex-wrap">
                      <span className="inline-flex w-5 h-5 rounded-full items-center justify-center text-white text-[10px] font-bold flex-shrink-0"
                        style={{ backgroundColor: badgeColor(n.author || "관리자") }}>{(n.author || "관").charAt(0)}</span>
                      <span className="text-gray-600 text-xs truncate max-w-[80px]">{n.author || "관리자"}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className="text-gray-500 text-xs font-bold uppercase">
                      {n.language === "ko" ? "국문" : n.language === "en" ? "영문" : n.language === "ja" ? "일문" : "전체"}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center text-gray-500 text-xs w-56 whitespace-nowrap">
                    {n.startDate || n.endDate ? (
                      <>
                        {fmtDate(n.startDate) || "무제한"}<br/>~ {fmtDate(n.endDate) || "무제한"}
                      </>
                    ) : "제한 없음"}
                  </td>
                  <td className="px-4 py-3 text-center text-gray-500 text-xs">{n.position}</td>
                  <td className="px-4 py-3 text-center">
                    <Link href={`/admin/popups/${n.id}/edit`} className="text-[#1a1a2e] hover:underline text-xs font-semibold">수정</Link>
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
