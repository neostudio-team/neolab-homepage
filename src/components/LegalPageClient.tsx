"use client";
import { useState } from "react";

interface Version {
  id: string;
  versionNumber: number;
  note: string;
  createdAt: string | null;
  isActive: boolean;
}

interface Props {
  type: "privacy" | "terms";
  initialContent: string;
  activeVersionId: string | null;
  versions: Version[];
}

const LABEL: Record<string, string> = {
  privacy: "이전 개인정보처리방침 보기",
  terms: "이전 이용약관 보기",
};

function fmtDate(iso: string | null) {
  if (!iso) return "";
  const d = new Date(iso);
  return `${d.getFullYear()}년 ${String(d.getMonth() + 1).padStart(2, "0")}월 ${String(d.getDate()).padStart(2, "0")}일`;
}

export default function LegalPageClient({ type, initialContent, activeVersionId, versions }: Props) {
  const [selectedPrevId, setSelectedPrevId] = useState<string>("");
  const [prevContent, setPrevContent] = useState<string>("");
  const [loadingId, setLoadingId] = useState<string | null>(null);

  // Only non-active (previous) versions in the dropdown
  const prevVersions = versions.filter(v => !v.isActive);

  async function handleSelectPrev(versionId: string) {
    if (!versionId) {
      setSelectedPrevId("");
      setPrevContent("");
      return;
    }
    if (versionId === selectedPrevId) return;
    setLoadingId(versionId);
    setSelectedPrevId(versionId);
    try {
      const res = await fetch(`/api/legal/${type}/${versionId}`);
      const data = await res.json();
      setPrevContent(data.content ?? "");
    } finally {
      setLoadingId(null);
    }
  }

  const selectedVersion = prevVersions.find(v => v.id === selectedPrevId);

  return (
    <div>
      {/* Current active version content */}
      <pre className="whitespace-pre-wrap font-sans text-sm text-gray-700 leading-relaxed">
        {initialContent}
      </pre>

      {/* Previous versions dropdown — only shown if there are previous versions */}
      {prevVersions.length > 0 && (
        <div className="mt-12 pt-8 border-t border-gray-100">
          <div className="flex items-center gap-3">
            <div className="relative flex-1 max-w-xs">
              <select
                value={selectedPrevId}
                onChange={e => handleSelectPrev(e.target.value)}
                className="w-full text-sm border border-gray-300 rounded-lg px-4 py-2.5 pr-8 text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-400 bg-white appearance-none cursor-pointer"
              >
                <option value="">{LABEL[type]}</option>
                {prevVersions.map(v => (
                  <option key={v.id} value={v.id}>
                    {v.createdAt ? fmtDate(v.createdAt) : ""}
                    {v.versionNumber ? ` (v${v.versionNumber})` : ""}
                    {v.note ? ` — ${v.note}` : ""}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">▾</span>
            </div>
            {selectedPrevId && (
              <button
                onClick={() => { setSelectedPrevId(""); setPrevContent(""); }}
                className="text-xs text-gray-400 hover:text-gray-600 underline"
              >
                닫기
              </button>
            )}
          </div>

          {/* Previous version content panel */}
          {selectedPrevId && (
            <div className="mt-4 p-6 bg-gray-50 rounded-xl border border-gray-200 relative">
              {selectedVersion && (
                <div className="mb-3 flex gap-3 text-xs text-gray-400">
                  <span>v{selectedVersion.versionNumber}</span>
                  {selectedVersion.note && <span>{selectedVersion.note}</span>}
                  {selectedVersion.createdAt && <span>등록일: {fmtDate(selectedVersion.createdAt)}</span>}
                </div>
              )}
              {loadingId ? (
                <div className="text-xs text-gray-400 text-center py-8">불러오는 중...</div>
              ) : (
                <pre className="whitespace-pre-wrap font-sans text-sm text-gray-600 leading-relaxed">
                  {prevContent}
                </pre>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
