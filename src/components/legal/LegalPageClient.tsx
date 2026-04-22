"use client";
import { useState } from "react";
import {
  CloseLink,
  LoadingBox,
  MainPre,
  PrevPanel,
  PrevPre,
  PrevRow,
  PrevSection,
  SelectChevron,
  SelectWrap,
  VersionMeta,
  VersionSelect,
} from "./LegalPageClient.styles";

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

export default function LegalPageClient({
  type,
  initialContent,
  activeVersionId,
  versions,
}: Props) {
  const [selectedPrevId, setSelectedPrevId] = useState<string>("");
  const [prevContent, setPrevContent] = useState<string>("");
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const prevVersions = versions.filter((v) => !v.isActive);

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

  function handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
    handleSelectPrev(e.target.value);
  }

  function handleClosePrev() {
    setSelectedPrevId("");
    setPrevContent("");
  }

  const selectedVersion = prevVersions.find((v) => v.id === selectedPrevId);

  return (
    <div>
      <MainPre>{initialContent}</MainPre>

      {prevVersions.length > 0 && (
        <PrevSection>
          <PrevRow>
            <SelectWrap>
              <VersionSelect value={selectedPrevId} onChange={handleSelectChange}>
                <option value="">{LABEL[type]}</option>
                {prevVersions.map((v) => (
                  <option key={v.id} value={v.id}>
                    {v.createdAt ? fmtDate(v.createdAt) : ""}
                    {v.versionNumber ? ` (v${v.versionNumber})` : ""}
                    {v.note ? ` — ${v.note}` : ""}
                  </option>
                ))}
              </VersionSelect>
              <SelectChevron>▾</SelectChevron>
            </SelectWrap>
            {selectedPrevId && (
              <CloseLink type="button" onClick={handleClosePrev}>
                닫기
              </CloseLink>
            )}
          </PrevRow>

          {selectedPrevId && (
            <PrevPanel>
              {selectedVersion && (
                <VersionMeta>
                  <span>v{selectedVersion.versionNumber}</span>
                  {selectedVersion.note && <span>{selectedVersion.note}</span>}
                  {selectedVersion.createdAt && (
                    <span>등록일: {fmtDate(selectedVersion.createdAt)}</span>
                  )}
                </VersionMeta>
              )}
              {loadingId ? (
                <LoadingBox>불러오는 중...</LoadingBox>
              ) : (
                <PrevPre>{prevContent}</PrevPre>
              )}
            </PrevPanel>
          )}
        </PrevSection>
      )}
    </div>
  );
}
