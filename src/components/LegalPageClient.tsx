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

function fmtDate(iso: string | null) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("ko-KR");
}

export default function LegalPageClient({ type, initialContent, activeVersionId, versions }: Props) {
  const [selectedId, setSelectedId] = useState<string | null>(activeVersionId);
  const [content, setContent] = useState(initialContent);
  const [loadingId, setLoadingId] = useState<string | null>(null);

  async function handleSelectVersion(versionId: string) {
    if (versionId === selectedId) return;
    setLoadingId(versionId);
    try {
      const res = await fetch(`/api/legal/${type}/${versionId}`);
      const data = await res.json();
      setContent(data.content ?? "");
      setSelectedId(versionId);
    } finally {
      setLoadingId(null);
    }
  }

  const selectedVersion = versions.find(v => v.id === selectedId);
  const isViewingOld = selectedId !== activeVersionId;

  return (
    <div>
      {/* Version selector */}
      {versions.length > 1 && (
        <div className="flex items-center justify-end gap-2 mb-6">
          <label className="text-xs text-gray-400">버전 선택:</label>
          <div className="relative">
            <select
              value={selectedId ?? ""}
              onChange={e => handleSelectVersion(e.target.value)}
              className="text-xs border border-gray-200 rounded-lg px-3 py-1.5 pr-7 text-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-300 bg-white appearance-none cursor-pointer"
            >
              {versions.map(v => (
                <option key={v.id} value={v.id}>
                  {v.isActive ? "● " : ""}v{v.versionNumber}
                  {v.note ? ` — ${v.note}` : ""}
                  {v.createdAt ? ` (${fmtDate(v.createdAt)})` : ""}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-xs">▾</span>
          </div>
        </div>
      )}

      {/* Old version notice */}
      {isViewingOld && (
        <div className="mb-4 px-4 py-2 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-700 flex items-center justify-between">
          <span>이전 버전을 보고 있습니다.</span>
          <button
            onClick={() => {
              const active = versions.find(v => v.isActive);
              if (active) handleSelectVersion(active.id);
            }}
            className="underline font-medium"
          >
            최신 버전 보기
          </button>
        </div>
      )}

      {/* Version metadata */}
      {selectedVersion && (
        <div className="mb-4 text-xs text-gray-400 flex gap-4">
          <span>버전 v{selectedVersion.versionNumber}</span>
          {selectedVersion.note && <span>{selectedVersion.note}</span>}
          {selectedVersion.createdAt && <span>등록일: {fmtDate(selectedVersion.createdAt)}</span>}
          {selectedVersion.isActive && <span className="text-green-600 font-medium">● 현재 발행 중</span>}
        </div>
      )}

      {/* Content */}
      <div className="relative">
        {loadingId && (
          <div className="absolute inset-0 bg-white/60 flex items-center justify-center rounded">
            <span className="text-xs text-gray-400">불러오는 중...</span>
          </div>
        )}
        <pre className="whitespace-pre-wrap font-sans text-sm text-gray-700 leading-relaxed">
          {content}
        </pre>
      </div>
    </div>
  );
}
