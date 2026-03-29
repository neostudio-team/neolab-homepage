"use client";
import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import { auth } from "@/lib/firebase";

interface Member {
  id: string;
  seq: number;
  name: string;
  level: number;
  group: string;
  email: string;
  loginCount: number;
  postCount: number;
  replyCount: number;
  commentCount: number;
  createdAt: string;
  lastLoginAt: string;
}

const LEVEL_LABELS: Record<number, { label: string; color: string }> = {
  1: { label: "최고관리자", color: "#ef4444" },
  2: { label: "일반관리자", color: "#3b82f6" },
};

function fmtDatetime(iso: string) {
  if (!iso) return "-";
  const d = new Date(iso);
  const date = d.toLocaleDateString("ko-KR", { year: "numeric", month: "2-digit", day: "2-digit" }).replace(/\. /g, "-").replace(".", "");
  const time = d.toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false });
  return `${date} ${time}`;
}

export default function AdminMembersPage() {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [searchField, setSearchField] = useState("username");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [activeKeyword, setActiveKeyword] = useState({ field: "username", value: "" });
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [myLevel, setMyLevel] = useState<number>(99);
  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(1);

  async function fetchMembers() {
    setLoading(true);
    const token = await auth.currentUser?.getIdToken();
    const res = await fetch("/api/admin-members", {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res.ok) {
      const data = await res.json();
      setMembers(Array.isArray(data) ? data : []);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchMembers();
    // 내 레벨 확인
    (async () => {
      const user = auth.currentUser;
      if (!user) return;
      const token = await user.getIdToken();
      const res = await fetch(`/api/admin-members?email=${encodeURIComponent(user.email ?? "")}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        const data = await res.json();
        if (data?.level) setMyLevel(Number(data.level));
      }
    })();
  }, []);

  const filtered = useMemo(() => {
    if (!activeKeyword.value) return members;
    const kw = activeKeyword.value.toLowerCase();
    return members.filter(m => {
      if (activeKeyword.field === "name") return m.name?.toLowerCase().includes(kw);
      if (activeKeyword.field === "email") return m.email?.toLowerCase().includes(kw);
      return true;
    });
  }, [members, activeKeyword]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const paged = filtered.slice((page - 1) * pageSize, page * pageSize);

  function handlePageSizeChange(size: number) {
    setPageSize(size);
    setPage(1);
  }
  function handleKeywordChange() {
    setActiveKeyword({ field: searchField, value: searchKeyword });
    setPage(1);
  }

  function toggleAll(checked: boolean) {
    setSelected(checked ? new Set(paged.map(m => m.id)) : new Set());
  }
  function toggleOne(id: string) {
    setSelected(prev => { const next = new Set(prev); next.has(id) ? next.delete(id) : next.add(id); return next; });
  }

  async function handleLevelChange(id: string, level: number) {
    const token = await auth.currentUser?.getIdToken();
    const member = members.find(m => m.id === id);
    if (!member) return;
    await fetch(`/api/admin-members/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ ...member, level }),
    });
    setMembers(prev => prev.map(m => m.id === id ? { ...m, level } : m));
  }

  async function doDelete() {
    const token = await auth.currentUser?.getIdToken();
    const results = await Promise.all(
      [...selected].map(id =>
        fetch(`/api/admin-members/${id}`, {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        }).then(r => r.json())
      )
    );
    const denied = results.find(r => r.error?.includes("최고관리자"));
    if (denied) { alert(denied.error); setShowDeleteModal(false); return; }
    setSelected(new Set());
    setShowDeleteModal(false);
    fetchMembers();
  }

  return (
    <div className="p-8 max-w-7xl">
      {/* 삭제 확인 모달 */}
      {showDeleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl shadow-xl p-8 w-[360px] flex flex-col items-center gap-5">
            <div className="text-3xl">🗑️</div>
            <h2 className="text-lg font-bold text-gray-800">회원 삭제</h2>
            <p className="text-sm text-gray-500 text-center">
              {selected.size}명의 회원을 삭제하시겠습니까?<br />삭제된 회원은 복구할 수 없습니다.
            </p>
            <div className="flex gap-3 w-full">
              <button onClick={() => setShowDeleteModal(false)} className="flex-1 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors">취소</button>
              <button onClick={doDelete} className="flex-1 py-2.5 bg-red-500 text-white rounded-lg text-sm font-semibold hover:bg-red-600 transition-colors">삭제</button>
            </div>
          </div>
        </div>
      )}

      {/* 헤더: 제목 */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-1">회원 관리</h1>
        <p className="text-sm text-gray-400">NeoLAB Convergence 홈페이지 관리자 계정 목록</p>
      </div>

      {/* 검색 */}
      <div className="flex items-center gap-2 mb-3">
        <select value={searchField} onChange={e => setSearchField(e.target.value)}
          className="border border-gray-200 rounded-lg px-3 py-1.5 text-xs text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1a1a2e]">
          <option value="name">이름</option>
          <option value="email">이메일</option>
        </select>
        <input value={searchKeyword} onChange={e => setSearchKeyword(e.target.value)}
          onKeyDown={e => e.key === "Enter" && handleKeywordChange()}
          placeholder="검색어 입력"
          className="border border-gray-200 rounded-lg px-3 py-1.5 text-xs text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1a1a2e] w-40" />
        <button onClick={handleKeywordChange}
          className="px-4 py-1.5 bg-[#1a1a2e] text-white rounded-lg text-xs hover:bg-[#16213e] transition-colors">검색</button>
      </div>

      {/* 총 개수 + 페이지당 행 수 + 버튼 */}
      <div className="flex items-center justify-between mb-2 px-1">
        <span className="text-xs text-gray-500">총 <strong className="text-gray-800">{filtered.length}</strong>명</span>
        <div className="flex items-center gap-2">
          <select value={pageSize} onChange={e => handlePageSizeChange(Number(e.target.value))}
            className="border border-gray-200 rounded-lg px-3 py-1.5 text-xs text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1a1a2e] bg-white">
            <option value={10}>10개씩 보기</option>
            <option value={20}>20개씩 보기</option>
            <option value={50}>50개씩 보기</option>
            <option value={100}>100개씩 보기</option>
          </select>
          {myLevel === 1 && (
            <>
              <button
                onClick={() => { if (selected.size === 0) { alert("삭제할 회원을 선택해 주세요."); return; } setShowDeleteModal(true); }}
                className="px-4 py-1.5 border border-red-200 text-red-500 rounded-lg text-xs bg-white hover:bg-red-50 transition-colors">
                삭제
              </button>
              <Link href="/admin/members/new"
                className="px-4 py-1.5 bg-[#1a1a2e] text-white rounded-lg text-xs hover:bg-[#16213e] transition-colors">
                회원 등록
              </Link>
            </>
          )}
        </div>
      </div>

      {/* 테이블 */}
      {loading ? (
        <div className="bg-white border border-gray-200 rounded-xl p-12 text-center text-gray-400 text-sm">불러오는 중...</div>
      ) : (
        <div className="bg-white border border-gray-200 rounded-xl overflow-x-auto">
          <table className="w-full text-xs">
            <thead className="bg-gray-50 border-b border-gray-200 text-gray-500">
              <tr>
                <th className="px-3 py-3 w-10">
                  <input type="checkbox" onChange={e => toggleAll(e.target.checked)}
                    checked={selected.size === paged.length && paged.length > 0}
                    className="w-4 h-4 rounded accent-[#1a1a2e]" />
                </th>
                <th className="px-3 py-3 w-12 text-center font-medium">번호</th>
                <th className="px-3 py-3 w-40 text-center font-medium">이름</th>
                <th className="px-3 py-3 w-36 text-center font-medium">레벨</th>
                <th className="px-3 py-3 w-56 text-center font-medium">이메일</th>
                <th className="px-3 py-3 w-14 text-center font-medium">로그인</th>
                <th className="px-3 py-3 w-14 text-center font-medium">글쓰기</th>
                <th className="px-3 py-3 w-14 text-center font-medium">답변</th>
                <th className="px-3 py-3 w-14 text-center font-medium">댓글</th>
                <th className="px-3 py-3 w-44 text-center font-medium">가입/최종 접속일</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {paged.length === 0 ? (
                <tr><td colSpan={10} className="px-6 py-12 text-center text-gray-400">등록된 회원이 없습니다.</td></tr>
              ) : paged.map(m => (
                <tr key={m.id} className={`hover:bg-gray-50 transition-colors ${selected.has(m.id) ? "bg-blue-50/60" : ""}`}>
                  <td className="px-3 py-2.5 text-center">
                    <input type="checkbox" checked={selected.has(m.id)} onChange={() => toggleOne(m.id)}
                      className="w-4 h-4 rounded accent-[#1a1a2e]" />
                  </td>
                  <td className="px-3 py-2.5 text-center text-gray-500">{m.seq}</td>
                  <td className="px-3 py-2.5 text-center text-gray-700 font-medium">{m.name}</td>
                  <td className="px-3 py-2.5 text-center">
                    {myLevel === 1 ? (
                      <select value={m.level}
                        onChange={e => handleLevelChange(m.id, Number(e.target.value))}
                        className="border border-gray-200 rounded px-1.5 py-0.5 text-xs focus:outline-none focus:ring-1 focus:ring-[#1a1a2e]"
                        style={{ color: LEVEL_LABELS[m.level]?.color ?? "#374151" }}>
                        <option value={1} style={{ color: "#ef4444" }}>1 (최고관리자)</option>
                        <option value={2} style={{ color: "#3b82f6" }}>2 (일반관리자)</option>
                      </select>
                    ) : (
                      <span className="text-xs font-medium" style={{ color: LEVEL_LABELS[m.level]?.color ?? "#374151" }}>
                        {m.level} ({LEVEL_LABELS[m.level]?.label ?? "관리자"})
                      </span>
                    )}
                  </td>
                  <td className="px-3 py-2.5 text-center text-gray-600 truncate max-w-[14rem]">{m.email}</td>
                  <td className="px-3 py-2.5 text-center text-gray-500">{m.loginCount ?? 0}</td>
                  <td className="px-3 py-2.5 text-center text-gray-500">{m.postCount ?? 0}</td>
                  <td className="px-3 py-2.5 text-center text-gray-500">{m.replyCount ?? 0}</td>
                  <td className="px-3 py-2.5 text-center text-gray-500">{m.commentCount ?? 0}</td>

                  <td className="px-3 py-2.5 text-center text-gray-500 leading-snug">
                    <div>{fmtDatetime(m.createdAt)}</div>
                    <div className="text-gray-400 text-[10px]">({fmtDatetime(m.lastLoginAt)})</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* 페이지네이션 */}
      {totalPages > 1 && (
        <div className="mt-3 flex justify-center items-center gap-1">
          <button onClick={() => setPage(1)} disabled={page === 1}
            className="px-2 py-1 text-xs border border-gray-200 rounded hover:bg-gray-50 disabled:opacity-30">«</button>
          <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}
            className="px-2 py-1 text-xs border border-gray-200 rounded hover:bg-gray-50 disabled:opacity-30">‹</button>
          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .filter(p => p === 1 || p === totalPages || Math.abs(p - page) <= 2)
            .reduce<(number | string)[]>((acc, p, i, arr) => {
              if (i > 0 && (p as number) - (arr[i - 1] as number) > 1) acc.push("…");
              acc.push(p);
              return acc;
            }, [])
            .map((p, i) => p === "…" ? (
              <span key={`ellipsis-${i}`} className="px-1 text-xs text-gray-400">…</span>
            ) : (
              <button key={p} onClick={() => setPage(p as number)}
                className={`px-2.5 py-1 text-xs border rounded transition-colors ${
                  page === p ? "bg-[#1a1a2e] text-white border-[#1a1a2e]" : "border-gray-200 hover:bg-gray-50"
                }`}>{p}</button>
            ))}
          <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}
            className="px-2 py-1 text-xs border border-gray-200 rounded hover:bg-gray-50 disabled:opacity-30">›</button>
          <button onClick={() => setPage(totalPages)} disabled={page === totalPages}
            className="px-2 py-1 text-xs border border-gray-200 rounded hover:bg-gray-50 disabled:opacity-30">»</button>
          <span className="ml-2 text-xs text-gray-400">{filtered.length}명 중 {(page-1)*pageSize+1}–{Math.min(page*pageSize, filtered.length)}</span>
        </div>
      )}

    </div>
  );
}
