"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import { auth } from "@/lib/firebase";
import { DEFAULT_PRIVACY, DEFAULT_TERMS } from "@/lib/legal-defaults";
import {
  AdminBackTextBtn,
  AdminBadgePill,
  AdminBtn,
  AdminBtnBlue,
  AdminBtnOutlineBlue,
  AdminBtnOutlineBlueLg,
  AdminBtnLgBlue,
  AdminBtnSm,
  AdminBtnXs,
  AdminCardPadded,
  AdminEllipsis,
  AdminExternalLink,
  AdminFlexBetweenBar,
  AdminFlexEndBar,
  AdminFlexGap1Center,
  AdminFlexGap2,
  AdminFormHeaderBar,
  AdminGreenDotText,
  AdminH1,
  AdminInputTransparent,
  AdminLegalEditHeader,
  AdminLegalEditTitle,
  AdminLegalHeaderBar,
  AdminLegalPre,
  AdminLegalViewCard,
  AdminMutedSmall,
  AdminPage,
  AdminPagerNav,
  AdminPagerPage,
  AdminPagerText,
  AdminSelect,
  AdminSelectChevron,
  AdminSelectWrap,
  AdminSpan,
  AdminTable,
  AdminTableShell,
  AdminTableXs,
  AdminTbody,
  AdminTd,
  AdminTh,
  AdminThead,
  AdminTextareaPlain,
  AdminTr,
  AdminTabsBar,
  AdminTabButton,
} from "@/components/admin/AdminCommon.styles";

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

  const getToken = useCallback(async () => {
    return await auth.currentUser?.getIdToken();
  }, []);

  const fetchVersions = useCallback(
    async (type: TabKey): Promise<Version[]> => {
      const token = await getToken();
      const res = await fetch(`/api/legal/${type}`, {
        cache: "no-store",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) return [];
      const data = await res.json();
      return (data.versions ?? []) as Version[];
    },
    [getToken],
  );

  const seedDefault = useCallback(
    async (type: TabKey) => {
      const token = await getToken();
      await fetch(`/api/legal/${type}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ content: DEFAULTS[type], note: "초기 버전 (기본값)" }),
      });
    },
    [getToken],
  );

  const loadAll = useCallback(async () => {
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
  }, [fetchVersions, seedDefault]);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((u) => {
      if (u) void loadAll();
    });
    return () => unsub();
  }, [loadAll]);

  const handleCreate = useCallback(async () => {
    if (!editContent.trim()) {
      alert("내용을 입력해 주세요.");
      return;
    }
    setSaving(true);
    try {
      const token = await getToken();
      const res = await fetch(`/api/legal/${activeTab}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ content: editContent, note: editNote }),
      });
      if (res.ok) {
        setMode("list");
        await loadAll();
      } else alert("등록 실패");
    } finally {
      setSaving(false);
    }
  }, [editContent, editNote, activeTab, getToken, loadAll]);

  const handleSaveEdit = useCallback(async () => {
    if (!editContent.trim() || !editVersion) {
      alert("내용을 입력해 주세요.");
      return;
    }
    setSaving(true);
    try {
      const token = await getToken();
      const res = await fetch(`/api/legal/${activeTab}/${editVersion.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ content: editContent, note: editNote }),
      });
      if (res.ok) {
        setMode("list");
        await loadAll();
      } else alert("수정 실패");
    } finally {
      setSaving(false);
    }
  }, [editContent, editNote, editVersion, activeTab, getToken, loadAll]);

  const handleActivate = useCallback(
    async (versionId: string) => {
      const token = await getToken();
      const res = await fetch(`/api/legal/${activeTab}/${versionId}`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) await loadAll();
      else alert("발행 실패");
    },
    [activeTab, getToken, loadAll],
  );

  const handleDelete = useCallback(
    async (versionId: string) => {
      if (!confirm("이 버전을 삭제하시겠습니까?")) return;
      const token = await getToken();
      const res = await fetch(`/api/legal/${activeTab}/${versionId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (res.ok) await loadAll();
      else alert(data.error ?? "삭제 실패");
    },
    [activeTab, getToken, loadAll],
  );

  const handleView = useCallback(
    async (v: Version) => {
      setViewVersion(v);
      const token = await getToken();
      const res = await fetch(`/api/legal/${activeTab}/${v.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setViewContent(data.content ?? "");
      setMode("view");
    },
    [activeTab, getToken],
  );

  const handleEdit = useCallback(
    async (v: Version) => {
      setEditVersion(v);
      const token = await getToken();
      const res = await fetch(`/api/legal/${activeTab}/${v.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setEditContent(data.content ?? "");
      setEditNote(v.note ?? "");
      setMode("edit");
    },
    [activeTab, getToken],
  );

  const currentTabInfo = TABS.find((t) => t.key === activeTab)!;
  const tabVersions = versions[activeTab];
  const legalTotalPages = Math.max(1, Math.ceil(tabVersions.length / pageSize));
  const pagedVersions = tabVersions.slice((legalPage - 1) * pageSize, legalPage * pageSize);

  const handleLegalPageSizeChange = useCallback((size: number) => {
    setPageSize(size);
    setLegalPage(1);
  }, []);

  function fmtDate(iso: string | null) {
    if (!iso) return "-";
    return new Date(iso).toLocaleString("ko-KR");
  }

  const isEditMode = mode === "edit" || mode === "new";

  const pageButtons = useMemo(() => {
    return Array.from({ length: legalTotalPages }, (_, i) => i + 1)
      .filter((p) => p === 1 || p === legalTotalPages || Math.abs(p - legalPage) <= 2)
      .reduce<(number | string)[]>((acc, p, i, arr) => {
        if (i > 0 && (p as number) - (arr[i - 1] as number) > 1) acc.push("…");
        acc.push(p);
        return acc;
      }, []);
  }, [legalTotalPages, legalPage]);

  const handleTabClick = useCallback((key: TabKey) => {
    setActiveTab(key);
    setMode("list");
  }, []);

  const handleNewVersionClick = useCallback(() => {
    setEditContent("");
    setEditNote("");
    setEditVersion(null);
    setMode("new");
  }, []);

  const handleBackToList = useCallback(() => {
    setMode("list");
  }, []);

  const handleViewEditClick = useCallback(() => {
    if (viewVersion) void handleEdit(viewVersion);
  }, [viewVersion, handleEdit]);

  const handleViewPublishClick = useCallback(() => {
    if (!viewVersion) return;
    void handleActivate(viewVersion.id);
    setMode("list");
  }, [viewVersion, handleActivate]);

  const handleFirstLegalPage = useCallback(() => setLegalPage(1), []);
  const handlePrevLegalPage = useCallback(() => setLegalPage((p) => Math.max(1, p - 1)), []);
  const handleNextLegalPage = useCallback(
    () => setLegalPage((p) => Math.min(legalTotalPages, p + 1)),
    [legalTotalPages],
  );
  const handleLastLegalPage = useCallback(() => setLegalPage(legalTotalPages), [legalTotalPages]);

  const makeLegalPageHandler = useCallback((p: number) => () => setLegalPage(p), []);

  return (
    <AdminPage>
      <AdminLegalHeaderBar>
        <AdminH1>약관 관리</AdminH1>
        <AdminExternalLink href={currentTabInfo.href} target="_blank" rel="noopener noreferrer">
          → 홈페이지에서 보기
        </AdminExternalLink>
      </AdminLegalHeaderBar>

      <AdminTabsBar>
        {TABS.map((tab) => (
          <AdminTabButton key={tab.key} type="button" $active={activeTab === tab.key} onClick={() => handleTabClick(tab.key)}>
            {tab.label}
          </AdminTabButton>
        ))}
      </AdminTabsBar>

      {loading ? (
        <AdminCardPadded>불러오는 중...</AdminCardPadded>
      ) : mode === "list" ? (
        <>
          <AdminFlexBetweenBar style={{ marginBottom: 16 }}>
            <AdminSpan $size="sm">
              총 {tabVersions.length}개 버전 | <AdminGreenDotText>● 발행 중</AdminGreenDotText> 버전만 실제 홈페이지에 노출됩니다.
            </AdminSpan>
            <AdminFlexGap2>
              <AdminSelectWrap>
                <AdminSelect value={String(pageSize)} onChange={(e) => handleLegalPageSizeChange(Number(e.target.value))}>
                  <option value={10}>10개씩 보기</option>
                  <option value={20}>20개씩 보기</option>
                  <option value={50}>50개씩 보기</option>
                </AdminSelect>
                <AdminSelectChevron>▾</AdminSelectChevron>
              </AdminSelectWrap>
              <AdminBtnSm type="button" onClick={handleNewVersionClick}>
                + 새 버전 작성
              </AdminBtnSm>
            </AdminFlexGap2>
          </AdminFlexBetweenBar>

          <AdminTableShell>
            {tabVersions.length === 0 ? (
              <AdminCardPadded>등록된 버전이 없습니다.</AdminCardPadded>
            ) : (
              <AdminTableXs>
                <AdminThead>
                  <tr>
                    <AdminTh $align="center" $width="64px">
                      버전
                    </AdminTh>
                    <AdminTh $align="center" $width="80px">
                      상태
                    </AdminTh>
                    <AdminTh>개정 메모</AdminTh>
                    <AdminTh $align="center" $width="176px">
                      등록일시
                    </AdminTh>
                    <AdminTh $align="center" $width="112px">
                      작성자
                    </AdminTh>
                    <AdminTh $align="center" $width="192px">
                      액션
                    </AdminTh>
                  </tr>
                </AdminThead>
                <AdminTbody>
                  {pagedVersions.map((v) => (
                    <AdminTr key={v.id} $hover $selected={v.isActive}>
                      <AdminTd $align="center">
                        <AdminSpan $size="xs" style={{ fontWeight: 700 }}>
                          v{v.versionNumber}
                        </AdminSpan>
                      </AdminTd>
                      <AdminTd $align="center">
                        {v.isActive ? (
                          <AdminBadgePill $tone="green">발행 중</AdminBadgePill>
                        ) : (
                          <AdminBadgePill $tone="gray">미발행</AdminBadgePill>
                        )}
                      </AdminTd>
                      <AdminTd>
                        <AdminSpan $size="xs">{v.note || "-"}</AdminSpan>
                      </AdminTd>
                      <AdminTd $align="center">
                        <AdminMutedSmall as="span">{fmtDate(v.createdAt)}</AdminMutedSmall>
                      </AdminTd>
                      <AdminTd $align="center">
                        <AdminMutedSmall as="span">{v.createdBy ? v.createdBy.split("@")[0] : "-"}</AdminMutedSmall>
                      </AdminTd>
                      <AdminTd $align="center">
                        <AdminFlexGap1Center>
                          <AdminBtnXs type="button" $variant="outline" onClick={() => void handleView(v)}>
                            보기
                          </AdminBtnXs>
                          <AdminBtnOutlineBlue type="button" onClick={() => void handleEdit(v)}>
                            수정
                          </AdminBtnOutlineBlue>
                          {!v.isActive ? (
                            <>
                              <AdminBtnBlue type="button" onClick={() => void handleActivate(v.id)}>
                                발행
                              </AdminBtnBlue>
                              <AdminBtnXs type="button" $variant="outlineRed" onClick={() => void handleDelete(v.id)}>
                                삭제
                              </AdminBtnXs>
                            </>
                          ) : null}
                        </AdminFlexGap1Center>
                      </AdminTd>
                    </AdminTr>
                  ))}
                </AdminTbody>
              </AdminTableXs>
            )}
          </AdminTableShell>

          {legalTotalPages > 1 ? (
            <div style={{ marginTop: 12, display: "flex", justifyContent: "center", alignItems: "center", gap: 4 }}>
              <AdminPagerNav type="button" disabled={legalPage === 1} onClick={handleFirstLegalPage}>
                «
              </AdminPagerNav>
              <AdminPagerNav type="button" disabled={legalPage === 1} onClick={handlePrevLegalPage}>
                ‹
              </AdminPagerNav>
              {pageButtons.map((p, i) =>
                p === "…" ? (
                  <AdminEllipsis key={`e-${i}`}>…</AdminEllipsis>
                ) : (
                  <AdminPagerPage
                    key={p}
                    type="button"
                    $active={legalPage === p}
                    onClick={makeLegalPageHandler(p as number)}
                  >
                    {p}
                  </AdminPagerPage>
                ),
              )}
              <AdminPagerNav type="button" disabled={legalPage === legalTotalPages} onClick={handleNextLegalPage}>
                ›
              </AdminPagerNav>
              <AdminPagerNav type="button" disabled={legalPage === legalTotalPages} onClick={handleLastLegalPage}>
                »
              </AdminPagerNav>
              <AdminPagerText>
                {tabVersions.length}개 중 {(legalPage - 1) * pageSize + 1}–
                {Math.min(legalPage * pageSize, tabVersions.length)}
              </AdminPagerText>
            </div>
          ) : null}
        </>
      ) : isEditMode ? (
        <>
          <AdminLegalEditHeader>
            <AdminBackTextBtn type="button" onClick={handleBackToList}>
              ← 목록으로
            </AdminBackTextBtn>
            <AdminLegalEditTitle>
              {mode === "new" ? "새 버전 작성" : `v${editVersion?.versionNumber} 수정`}
            </AdminLegalEditTitle>
          </AdminLegalEditHeader>
          <AdminTableShell style={{ marginBottom: 16 }}>
            <AdminFormHeaderBar>
              <AdminInputTransparent
                value={editNote}
                onChange={(e) => setEditNote(e.target.value)}
                placeholder="개정 메모 (예: 2025년 7월 1일 1차 개정)"
              />
            </AdminFormHeaderBar>
            <AdminTextareaPlain
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
              placeholder="내용을 입력하세요..."
            />
          </AdminTableShell>
          <AdminFlexBetweenBar>
            <AdminMutedSmall as="p" style={{ margin: 0 }}>
              {mode === "new"
                ? "※ 저장 후 목록에서 '발행' 버튼을 눌러야 홈페이지에 반영됩니다."
                : "※ 수정 사항은 즉시 저장되며, 발행 중인 버전이면 홈페이지에도 반영됩니다."}
            </AdminMutedSmall>
            <AdminFlexGap2>
              <AdminBtn type="button" $variant="secondary" onClick={handleBackToList}>
                취소
              </AdminBtn>
              <AdminBtn
                type="button"
                onClick={mode === "new" ? handleCreate : handleSaveEdit}
                disabled={saving}
              >
                {saving ? "저장 중..." : mode === "new" ? "버전 저장" : "수정 저장"}
              </AdminBtn>
            </AdminFlexGap2>
          </AdminFlexBetweenBar>
        </>
      ) : (
        <>
          <AdminLegalEditHeader>
            <AdminBackTextBtn type="button" onClick={handleBackToList}>
              ← 목록으로
            </AdminBackTextBtn>
            <AdminLegalEditTitle>
              v{viewVersion?.versionNumber} 보기{" "}
              {viewVersion?.isActive ? (
                <AdminBadgePill $tone="green" style={{ marginLeft: 8 }}>
                  발행 중
                </AdminBadgePill>
              ) : null}
            </AdminLegalEditTitle>
          </AdminLegalEditHeader>
          {viewVersion?.note ? (
            <AdminMutedSmall as="p" style={{ margin: "0 0 12px" }}>
              개정 메모: {viewVersion.note}
            </AdminMutedSmall>
          ) : null}
          <AdminLegalViewCard>
            <AdminLegalPre>{viewContent}</AdminLegalPre>
          </AdminLegalViewCard>
          <AdminFlexEndBar>
            <AdminBtnOutlineBlueLg type="button" onClick={handleViewEditClick}>
              수정하기
            </AdminBtnOutlineBlueLg>
            {!viewVersion?.isActive ? (
              <AdminBtnLgBlue type="button" onClick={handleViewPublishClick}>
                이 버전 발행하기
              </AdminBtnLgBlue>
            ) : null}
          </AdminFlexEndBar>
        </>
      )}
    </AdminPage>
  );
}
