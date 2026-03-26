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
  const [mode, setMode] = useState<"list" | "new" | "view">("list");
  const [newContent, setNewContent] = useState("");
  const [newNote, setNewNote] = useState("");
  const [viewContent, setViewContent] = useState("");
  const [viewVersion, setViewVersion] = useState<Version | null>(null);
  const [saving, setSaving] = useState(false);

  async function getToken() {
    return await auth.currentUser?.getIdToken();
  }

  async function fetchVersions(type: TabKey) {
    const token = await getToken();
    const res = await fetch(`/api/legal/${type}`, {
      cache: "no-store",
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return (data.versions ?? []) as Version[];
  }

  async function loadAll() {
    setLoading(true);
    const [p, t] = await Promise.all([fetchVersions("privacy"), fetchVersions("terms")]);
    setVersions({ privacy: p, terms: t });
    setLoading(false);
  }

  useEffect(() => {
    const unsub = auth.onAuthStateChanged(u => { if (u) loadAll(); });
    return () => unsub();
  }, []);

  async function handleCreate() {
    if (!newContent.trim()) { alert("내용을 입력해 주세요."); return; }
    setSaving(true);
    try {
      const token = await getToken();
      const res = await fetch(`/api/legal/${activeTab}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ content: newContent, note: newNote }),
      });
      if (res.ok) {
        setNewContent(""); setNewNote(""); setMode("list");
        await loadAll();
      } else { alert("등록 실패"); }
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

  const currentTab = TABS.find(t => t.key === activeTab)!;
  const tabVersions = versions[activeTab];

  function fmtDate(iso: string | null) {
    if (!iso) return "-";
    return new Date(iso).toLocaleString("ko-KR");
  }

  return (
    <div className="p-8 max-w-6xl">
      <div className="flex items-center gap-3 mb-6">
        <h1 className="text-2xl font-bold text-gray-800">약관 관리</h1>
        <a href={currentTab.href} target="_blank" rel="noopener noreferrer"
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
            <p className="text-sm text-gray-500">총 {tabVersions.length}개 버전 | 발행 중인 버전만 홈페이지에 표시됩니다.</p>
            <button onClick={() => { setNewContent(DEFAULTS[activeTab]); setNewNote(""); setMode("new"); }}
              className="px-4 py-2 bg-[#1a1a2e] text-white rounded-lg text-xs font-semibold hover:bg-[#16213e] transition-colors">
              + 새 버전 작성
            </button>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            {tabVersions.length === 0 ? (
              <div className="p-12 text-center text-gray-400 text-sm">등록된 버전이 없습니다. 새 버전을 작성해 주세요.</div>
            ) : (
              <table className="w-full text-xs">
                <thead className="bg-gray-50 border-b border-gray-200 text-gray-500">
                  <tr>
                    <th className="px-4 py-3 text-center font-medium w-16">버전</th>
                    <th className="px-4 py-3 text-center font-medium w-20">상태</th>
                    <th className="px-4 py-3 text-left font-medium">개정 메모</th>
                    <th className="px-4 py-3 text-center font-medium w-44">등록일시</th>
                    <th className="px-4 py-3 text-center font-medium w-28">작성자</th>
                    <th className="px-4 py-3 text-center font-medium w-40">액션</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {tabVersions.map(v => (
                    <tr key={v.id} className={`hover:bg-gray-50 transition-colors ${v.isActive ? "bg-blue-50/40" : ""}`}>
                      <td className="px-4 py-3 text-center font-bold text-gray-700">v{v.versionNumber}</td>
                      <td className="px-4 py-3 text-center">
                        {v.isActive
                          ? <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-[10px] font-bold">발행 중</span>
                          : <span className="bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full text-[10px]">미발행</span>}
                      </td>
                      <td className="px-4 py-3 text-gray-600">{v.note || "-"}</td>
                      <td className="px-4 py-3 text-center text-gray-500">{fmtDate(v.createdAt)}</td>
                      <td className="px-4 py-3 text-center text-gray-500 truncate max-w-[100px]">{v.createdBy.split("@")[0]}</td>
                      <td className="px-4 py-3 text-center">
                        <div className="flex gap-1.5 justify-center">
                          <button onClick={() => handleView(v)}
                            className="px-2.5 py-1 border border-gray-200 rounded text-[11px] text-gray-600 hover:bg-gray-50">
                            보기
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
        </>
      ) : mode === "new" ? (
        <>
          <div className="flex items-center gap-3 mb-4">
            <button onClick={() => setMode("list")} className="text-sm text-gray-500 hover:text-gray-800">← 목록으로</button>
            <span className="text-sm font-semibold text-gray-800">새 버전 작성</span>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-4">
            <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
              <input
                value={newNote}
                onChange={e => setNewNote(e.target.value)}
                placeholder="개정 메모 (예: 2025년 7월 1일 1차 개정)"
                className="w-full bg-transparent text-sm text-gray-800 focus:outline-none"
              />
            </div>
            <textarea
              value={newContent}
              onChange={e => setNewContent(e.target.value)}
              className="w-full h-[600px] p-4 text-sm text-gray-800 resize-none focus:outline-none leading-relaxed"
              placeholder="내용을 입력하세요..."
            />
          </div>
          <div className="flex justify-between items-center">
            <p className="text-xs text-gray-400">※ 저장 후 목록에서 '발행' 버튼을 눌러야 홈페이지에 반영됩니다.</p>
            <div className="flex gap-2">
              <button onClick={() => setMode("list")} className="px-4 py-2.5 border border-gray-200 rounded-lg text-xs text-gray-600 hover:bg-gray-50">취소</button>
              <button onClick={handleCreate} disabled={saving}
                className="px-6 py-2.5 bg-[#1a1a2e] text-white rounded-lg text-sm font-semibold hover:bg-[#16213e] transition-colors disabled:opacity-50">
                {saving ? "저장 중..." : "버전 저장"}
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center gap-3 mb-4">
            <button onClick={() => setMode("list")} className="text-sm text-gray-500 hover:text-gray-800">← 목록으로</button>
            <span className="text-sm font-semibold text-gray-800">
              v{viewVersion?.versionNumber} 보기 {viewVersion?.isActive && <span className="ml-2 bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-[10px] font-bold">발행 중</span>}
            </span>
          </div>
          {viewVersion?.note && <p className="text-xs text-gray-500 mb-3">개정 메모: {viewVersion.note}</p>}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <pre className="whitespace-pre-wrap font-sans text-sm text-gray-700 leading-relaxed">{viewContent}</pre>
          </div>
          {!viewVersion?.isActive && (
            <div className="mt-4 flex justify-end">
              <button onClick={() => { handleActivate(viewVersion!.id); setMode("list"); }}
                className="px-6 py-2.5 bg-blue-500 text-white rounded-lg text-sm font-semibold hover:bg-blue-600 transition-colors">
                이 버전 발행하기
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
