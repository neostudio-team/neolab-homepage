"use client";
import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import { DEFAULT_PRIVACY, DEFAULT_TERMS } from "@/lib/legal-defaults";

const TABS = [
  { key: "privacy", label: "개인정보처리방침", href: "/ko/privacy" },
  { key: "terms", label: "이용약관", href: "/ko/terms" },
] as const;
type TabKey = "privacy" | "terms";

interface Version {
  id: string;
  versionNumber: number;
  note: string;
  createdAt: string | null;
  createdBy: string;
  isActive: boolean;
}

const DEFAULTS: Record<TabKey, string> = { privacy: DEFAULT_PRIVACY, terms: DEFAULT_TERMS };

export default function AdminLegalPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("privacy");
  const [versions, setVersions] = useState<Record<TabKey, Version[]>>({ privacy: [], terms: [] });
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState<"list" | "new" | "view" | "edit">("list");
  const [editContent, setEditContent] = useState("");
  const [editNote, setEditNote] = useState("");
  const [editVersion, setEditVersion] = useState<Version | null>(null);
  const [viewContent, setViewContent] = useState("");
  const [viewVersion, setViewVersion] = useState<Version | null>(null);
  const [saving, setSaving] = useState(false);
  const [pageSize, setPageSize] = useState(10);
  const [legalPage, setLegalPage] = useState(1);

  async function getToken() {
    return await auth.currentUser?.getIdToken();
  }

  async function fetchVersions(type: TabKey): Promise<Version[]> {
    const token = await getToken();
    const res = await fetch(`/api/legal/${type}`, {
      cache: "no-store",
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return (data.versions ?? []) as Version[];
  }

  async function seedDefault(type: TabKey) {
    const token = await getToken();
    await fetch(`/api/legal/${type}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ content: DEFAULTS[type], note: "초기 버전 (기본값)" }),
    });
  }

  async function loadAll() {
    setLoading(true);
    const [p, t] = await Promise.all([fetchVersions("privacy"), fetchVersions("terms")]);
    const tasks: Promise<void>[] = [];
    if (p.length === 0) tasks.push(seedDefault("privacy"));
    if (t.length === 0) tasks.push(seedDefault("terms"));
    if (tasks.length > 0) {
      await Promise.all(tasks);
      const [p2, t2] = await Promise.all([fetchVersions("privacy"), fetchVersions("terms")]);
      setVersions({ privacy: p2, terms: t2 });
    } else {
      setVersions({ privacy: p, terms: t });
    }
    setLoading(false);
  }

  useEffect(() => {
    const unsub = auth.onAuthStateChanged(u => { if (u) loadAll(); });
    return () => unsub();
  }, []);

  async function handleCreate() {
    if (!editContent.trim()) { alert("내용을 입력해 주세요."); return; }
    setSaving(true);
    try {
      const token = await getToken();
      const res = await fetch(`/api/legal/${activeTab}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ content: editContent, note: editNote }),
      });
      if (res.ok) { setMode("list"); await loadAll(); }
      else alert("등록 실패");
    } finally { setSaving(false); }
  }

  async function handleSaveEdit() {
    if (!editContent.trim() || !editVersion) { alert("내용을 입력해 주세요."); return; }
    setSaving(true);
    try {
      const token = await getToken();
      const res = await fetch(`/api/legal/${activeTab}/${editVersion.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ content: editContent, note: editNote }),
      });
      if (res.ok) { setMode("list"); await loadAll(); }
      else alert("수정 실패");
    } finally { setSaving(false); }
  }

  async function handleActivate(versionId: string) {
    const token = await getToken();
    const res = await fetch(`/api/legal/${activeTab}/${versionId}`, {
      method: "PUT",
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res.ok) await loadAll();
    else alert("발행 실패");
  }

  async function handleDelete(versionId: string) {
    if (!confirm("이 버전을 삭제하시겠습니까?")) return;
    const token = await getToken();
    const res = await fetch(`/api/legal/${activeTab}/${versionId}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    if (res.ok) await loadAll();
    else alert(data.error ?? "삭제 실패");
  }

  async function handleView(v: Version) {
    setViewVersion(v);
    const token = await getToken();
    const res = await fetch(`/api/legal/${activeTab}/${v.id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    setViewContent(data.content ?? "");
    setMode("view");
  }

  async function handleEdit(v: Version) {
    setEditVersion(v);
    const token = await getToken();
    const res = await fetch(`/api/legal/${activeTab}/${v.id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    setEditContent(data.content ?? "");
    setEditNote(v.note ?? "");
    setMode("edit");
  }

  const currentTabInfo = TABS.find(t => t.key === activeTab)!;
  const tabVersions = versions[activeTab];
  const legalTotalPages = Math.max(1, Math.ceil(tabVersions.length / pageSize));
  const pagedVersions = tabVersions.slice((legalPage - 1) * pageSize, legalPage * pageSize);

  function handleLegalPageSizeChange(size: number) {
    setPageSize(size);
    setLegalPage(1);
  }

  function fmtDate(iso: string | null) {
    if (!iso) return "-";
    return new Date(iso).toLocaleString("ko-KR");
  }

  const isEditMode = mode === "edit" || mode === "new";

  return (
    <div className="p-8 max-w-6xl">
      <div className="flex items-center gap-3 mb-6">
        <h1 className="text-2xl font-bold text-gray-800">약관 관리</h1>
        <a href={currentTabInfo.href} target="_blank" rel="noopener noreferrer"
          className="text-xs text-blue-500 hover:underline">→ 홈페이지에서 보기</a>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-6 border-b border-gray-200">
        {TABS.map(tab => (
          <button key={tab.key} onClick={() => { setActiveTab(tab.key); setMode("list"); }}
            className={`px-5 py-2 text-sm font-medium border-b-2 transition-colors ${
              activeTab === tab.key ? "border-[#1a1a2e] text-[#1a1a2e]" : "border-transparent text-gray-500 hover:text-gray-700"
            }`}>{tab.label}</button>
        ))}
      </div>

      {loading ? (
        <div className="bg-white border border-gray-200 rounded-xl p-12 text-center text-gray-400">불러오는 중...</div>
      ) : mode === "list" ? (
        <>
          <div className="flex justify-between items-center mb-4">
            <p className="text-sm text-gray-500">총 {tabVersions.length}개 버전 | <span className="text-green-600 font-medium">●  발행 중</span> 버전만 실제 홈페이지에 노출됩니다.</p>
            <div className="flex items-center gap-2">
              <div className="relative">
                <select value={pageSize} onChange={e => handleLegalPageSizeChange(Number(e.target.value))}
                  className="border border-gray-200 rounded-lg px-3 py-1.5 pr-7 text-xs text-gray-700 focus:outline-none appearance-none cursor-pointer">
                  <option value={10}>10개씩 보기</option>
                  <option value={20}>20개씩 보기</option>
                  <option value={50}>50개씩 보기</option>
                </select>
                <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-[10px]">▾</span>
              </div>
              <button onClick={() => { setEditContent(""); setEditNote(""); setEditVersion(null); setMode("new"); }}
                className="px-4 py-2 bg-[#1a1a2e] text-white rounded-lg text-xs font-semibold hover:bg-[#16213e] transition-colors">
                + 새 버전 작성
              </button>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            {tabVersions.length === 0 ? (
              <div className="p-12 text-center text-gray-400 text-sm">등록된 버전이 없습니다.</div>
            ) : (
              <table className="w-full text-xs">
                <thead className="bg-gray-50 border-b border-gray-200 text-gray-500">
                  <tr>
                    <th className="px-4 py-3 text-center font-medium w-16">버전</th>
                    <th className="px-4 py-3 text-center font-medium w-20">상태</th>
                    <th className="px-4 py-3 text-left font-medium">개정 메모</th>
                    <th className="px-4 py-3 text-center font-medium w-44">등록일시</th>
                    <th className="px-4 py-3 text-center font-medium w-28">작성자</th>
                    <th className="px-4 py-3 text-center font-medium w-48">액션</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {pagedVersions.map(v => (
                    <tr key={v.id} className={`hover:bg-gray-50 transition-colors ${v.isActive ? "bg-blue-50/40" : ""}`}>
                      <td className="px-4 py-3 text-center font-bold text-gray-700">v{v.versionNumber}</td>
                      <td className="px-4 py-3 text-center">
                        {v.isActive
                          ? <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-[10px] font-bold">발행 중</span>
                          : <span className="bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full text-[10px]">미발행</span>}
                      </td>
                      <td className="px-4 py-3 text-gray-600">{v.note || "-"}</td>
                      <td className="px-4 py-3 text-center text-gray-500">{fmtDate(v.createdAt)}</td>
                      <td className="px-4 py-3 text-center text-gray-500">{v.createdBy ? v.createdBy.split("@")[0] : "-"}</td>
                      <td className="px-4 py-3 text-center">
                        <div className="flex gap-1.5 justify-center">
                          <button onClick={() => handleView(v)}
                            className="px-2.5 py-1 border border-gray-200 rounded text-[11px] text-gray-600 hover:bg-gray-50">
                            보기
                          </button>
                          <button onClick={() => handleEdit(v)}
                            className="px-2.5 py-1 border border-blue-200 text-blue-500 rounded text-[11px] hover:bg-blue-50">
                            수정
                          </button>
                          {!v.isActive && (
                            <>
                              <button onClick={() => handleActivate(v.id)}
                                className="px-2.5 py-1 bg-blue-500 text-white rounded text-[11px] hover:bg-blue-600">
                                발행
                              </button>
                              <button onClick={() => handleDelete(v.id)}
                                className="px-2.5 py-1 border border-red-200 text-red-500 rounded text-[11px] hover:bg-red-50">
                                삭제
                              </button>
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
          {legalTotalPages > 1 && (
            <div className="mt-3 flex justify-center items-center gap-1">
              <button onClick={() => setLegalPage(1)} disabled={legalPage === 1}
                className="px-2 py-1 text-xs border border-gray-200 rounded hover:bg-gray-50 disabled:opacity-30">«</button>
              <button onClick={() => setLegalPage(p => Math.max(1, p - 1))} disabled={legalPage === 1}
                className="px-2 py-1 text-xs border border-gray-200 rounded hover:bg-gray-50 disabled:opacity-30">‹</button>
              {Array.from({ length: legalTotalPages }, (_, i) => i + 1)
                .filter(p => p === 1 || p === legalTotalPages || Math.abs(p - legalPage) <= 2)
                .reduce<(number | string)[]>((acc, p, i, arr) => {
                  if (i > 0 && (p as number) - (arr[i - 1] as number) > 1) acc.push("…");
                  acc.push(p); return acc;
                }, [])
                .map((p, i) => p === "…"
                  ? <span key={`e-${i}`} className="px-1 text-xs text-gray-400">…</span>
                  : <button key={p} onClick={() => setLegalPage(p as number)}
                      className={`px-2.5 py-1 text-xs border rounded transition-colors ${legalPage === p ? "bg-[#1a1a2e] text-white border-[#1a1a2e]" : "border-gray-200 hover:bg-gray-50"}`}>{p}</button>
                )}
              <button onClick={() => setLegalPage(p => Math.min(legalTotalPages, p + 1))} disabled={legalPage === legalTotalPages}
                className="px-2 py-1 text-xs border border-gray-200 rounded hover:bg-gray-50 disabled:opacity-30">›</button>
              <button onClick={() => setLegalPage(legalTotalPages)} disabled={legalPage === legalTotalPages}
                className="px-2 py-1 text-xs border border-gray-200 rounded hover:bg-gray-50 disabled:opacity-30">»</button>
              <span className="ml-2 text-xs text-gray-400">{tabVersions.length}개 중 {(legalPage-1)*pageSize+1}–{Math.min(legalPage*pageSize, tabVersions.length)}</span>
            </div>
          )}
        </>
      ) : isEditMode ? (
        <>
          <div className="flex items-center gap-3 mb-4">
            <button onClick={() => setMode("list")} className="text-sm text-gray-500 hover:text-gray-800">← 목록으로</button>
            <span className="text-sm font-semibold text-gray-800">
              {mode === "new" ? "새 버전 작성" : `v${editVersion?.versionNumber} 수정`}
            </span>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-4">
            <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
              <input
                value={editNote}
                onChange={e => setEditNote(e.target.value)}
                placeholder="개정 메모 (예: 2025년 7월 1일 1차 개정)"
                className="w-full bg-transparent text-sm text-gray-800 focus:outline-none"
              />
            </div>
            <textarea
              value={editContent}
              onChange={e => setEditContent(e.target.value)}
              className="w-full h-[600px] p-4 text-sm text-gray-800 resize-none focus:outline-none leading-relaxed"
              placeholder="내용을 입력하세요..."
            />
          </div>
          <div className="flex justify-between items-center">
            <p className="text-xs text-gray-400">
              {mode === "new"
                ? "※ 저장 후 목록에서 '발행' 버튼을 눌러야 홈페이지에 반영됩니다."
                : "※ 수정 사항은 즉시 저장되며, 발행 중인 버전이면 홈페이지에도 반영됩니다."}
            </p>
            <div className="flex gap-2">
              <button onClick={() => setMode("list")} className="px-4 py-2.5 border border-gray-200 rounded-lg text-xs text-gray-600 hover:bg-gray-50">취소</button>
              <button onClick={mode === "new" ? handleCreate : handleSaveEdit} disabled={saving}
                className="px-6 py-2.5 bg-[#1a1a2e] text-white rounded-lg text-sm font-semibold hover:bg-[#16213e] transition-colors disabled:opacity-50">
                {saving ? "저장 중..." : mode === "new" ? "버전 저장" : "수정 저장"}
              </button>
            </div>
          </div>
        </>
      ) : (
        /* view mode */
        <>
          <div className="flex items-center gap-3 mb-4">
            <button onClick={() => setMode("list")} className="text-sm text-gray-500 hover:text-gray-800">← 목록으로</button>
            <span className="text-sm font-semibold text-gray-800">
              v{viewVersion?.versionNumber} 보기 {viewVersion?.isActive && <span className="ml-2 bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-[10px] font-bold">발행 중</span>}
            </span>
          </div>
          {viewVersion?.note && <p className="text-xs text-gray-500 mb-3">개정 메모: {viewVersion.note}</p>}
          <div className="bg-white border border-gray-200 rounded-xl p-6 mb-4">
            <pre className="whitespace-pre-wrap font-sans text-sm text-gray-700 leading-relaxed">{viewContent}</pre>
          </div>
          <div className="flex justify-end gap-2">
            <button onClick={() => handleEdit(viewVersion!)}
              className="px-4 py-2.5 border border-blue-200 text-blue-500 rounded-lg text-sm font-medium hover:bg-blue-50">
              수정하기
            </button>
            {!viewVersion?.isActive && (
              <button onClick={() => { handleActivate(viewVersion!.id); setMode("list"); }}
                className="px-6 py-2.5 bg-blue-500 text-white rounded-lg text-sm font-semibold hover:bg-blue-600 transition-colors">
                이 버전 발행하기
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}
