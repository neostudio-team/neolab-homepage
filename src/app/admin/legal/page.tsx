"use client";
import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import { DEFAULT_PRIVACY, DEFAULT_TERMS } from "@/lib/legal-defaults";

const TABS = [
  { key: "privacy", label: "개인정보처리방침", href: "/ko/privacy" },
  { key: "terms", label: "이용약관", href: "/ko/terms" },
] as const;

type TabKey = "privacy" | "terms";

const DEFAULTS: Record<TabKey, string> = {
  privacy: DEFAULT_PRIVACY,
  terms: DEFAULT_TERMS,
};

export default function AdminLegalPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("privacy");
  const [contents, setContents] = useState<Record<TabKey, string>>({
    privacy: DEFAULT_PRIVACY,
    terms: DEFAULT_TERMS,
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [savedAt, setSavedAt] = useState<Record<TabKey, string | null>>({ privacy: null, terms: null });

  async function fetchDoc(type: TabKey) {
    try {
      const user = auth.currentUser;
      if (!user) return { content: "", updatedAt: null };
      const token = await user.getIdToken();
      const res = await fetch(`/api/legal/${type}`, {
        cache: "no-store",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      return { content: data.content ?? "", updatedAt: data.updatedAt ?? null };
    } catch {
      return { content: "", updatedAt: null };
    }
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        setLoading(true);
        const [privacy, terms] = await Promise.all([fetchDoc("privacy"), fetchDoc("terms")]);
        setContents({
          privacy: privacy.content || DEFAULTS.privacy,
          terms: terms.content || DEFAULTS.terms,
        });
        setSavedAt({ privacy: privacy.updatedAt, terms: terms.updatedAt });
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  async function handleSave() {
    setSaving(true);
    try {
      const user = auth.currentUser;
      if (!user) return;
      const token = await user.getIdToken();
      const res = await fetch(`/api/legal/${activeTab}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ content: contents[activeTab] }),
      });
      if (res.ok) {
        const now = new Date().toISOString();
        setSavedAt(prev => ({ ...prev, [activeTab]: now }));
        alert("저장되었습니다.");
      } else {
        alert("저장에 실패했습니다.");
      }
    } catch {
      alert("오류가 발생했습니다.");
    } finally {
      setSaving(false);
    }
  }

  const currentTab = TABS.find(t => t.key === activeTab)!;

  return (
    <div className="p-8 max-w-5xl">
      <div className="flex items-center gap-3 mb-6">
        <h1 className="text-2xl font-bold text-gray-800">약관 관리</h1>
        <a
          href={currentTab.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-blue-500 hover:underline"
        >
          → 미리보기 (새 탭)
        </a>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-6 border-b border-gray-200">
        {TABS.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-5 py-2 text-sm font-medium border-b-2 transition-colors ${
              activeTab === tab.key
                ? "border-[#1a1a2e] text-[#1a1a2e]"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="bg-white border border-gray-200 rounded-xl p-12 text-center text-gray-400">불러오는 중...</div>
      ) : (
        <>
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-4">
            <div className="px-4 py-2.5 bg-gray-50 border-b border-gray-200 flex items-center justify-between">
              <span className="text-xs text-gray-500">내용을 직접 입력하세요. 저장 후 즉시 홈페이지에 반영됩니다.</span>
              {savedAt[activeTab] && (
                <span className="text-[10px] text-gray-400">
                  마지막 수정: {new Date(savedAt[activeTab]!).toLocaleString("ko-KR")}
                </span>
              )}
            </div>
            <textarea
              value={contents[activeTab]}
              onChange={e => setContents(prev => ({ ...prev, [activeTab]: e.target.value }))}
              className="w-full h-[600px] p-4 text-sm text-gray-800 resize-none focus:outline-none leading-relaxed"
              placeholder="내용을 입력하세요..."
            />
          </div>

          <div className="flex justify-between items-center">
            <p className="text-xs text-gray-400">
              ※ 저장 후 홈페이지 <a href={currentTab.href} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{currentTab.href}</a> 페이지에 즉시 반영됩니다.
            </p>
            <button
              onClick={handleSave}
              disabled={saving}
              className="px-6 py-2.5 bg-[#1a1a2e] text-white rounded-lg text-sm font-semibold hover:bg-[#16213e] transition-colors disabled:opacity-50"
            >
              {saving ? "저장 중..." : "저장"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
