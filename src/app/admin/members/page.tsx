"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import { auth } from "@/lib/firebase";
import {
  AdminBtnSm,
  AdminCardPadded,
  AdminCheckboxSm,
  AdminCheckMark,
  AdminConfirmModal,
  AdminDashMark,
  AdminDialogTitle,
  AdminEllipsis,
  AdminFlexGap2,
  AdminH1,
  AdminHeaderRowBetween,
  AdminHelpIconButton,
  AdminIconButton,
  AdminInlineStrong,
  AdminInput,
  AdminLinkPrimary,
  AdminModalActions,
  AdminModalDesc,
  AdminModalEmoji,
  AdminModalOverlay,
  AdminModalTitle,
  AdminMutedSmall,
  AdminMutedXs,
  AdminPage,
  AdminPagerNav,
  AdminPagerPage,
  AdminPagerText,
  AdminPermTable,
  AdminPermTd,
  AdminPermTh,
  AdminSelect,
  AdminTable,
  AdminTableShell,
  AdminTableWide,
  AdminTbody,
  AdminTd,
  AdminTdDense,
  AdminTh,
  AdminThead,
  AdminTr,
  AdminWideDialog,
  AdminLinkBtnXs,
  AdminToolbarFooter,
  AdminMemberMeta,
  AdminMemberMetaSub,
} from "@/components/admin/AdminCommon.styles";

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
  const date = d
    .toLocaleDateString("ko-KR", { year: "numeric", month: "2-digit", day: "2-digit" })
    .replace(/\. /g, "-")
    .replace(".", "");
  const time = d.toLocaleTimeString("ko-KR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
  return `${date} ${time}`;
}

const PERM_ROWS: [string, boolean, boolean][] = [
  ["대시보드 조회", true, true],
  ["공지사항 관리", true, true],
  ["기업뉴스 관리", true, true],
  ["고객지원 관리", true, true],
  ["팝업 관리", true, true],
  ["회원 목록 조회", true, true],
  ["회원 등록", true, false],
  ["회원 수정", true, false],
  ["회원 삭제", true, false],
  ["회원 레벨 변경", true, false],
  ["약관 관리", true, false],
];

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
  const [showPermModal, setShowPermModal] = useState(false);

  const fetchMembers = useCallback(async () => {
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
  }, []);

  useEffect(() => {
    void fetchMembers();
    void (async () => {
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
  }, [fetchMembers]);

  const filtered = useMemo(() => {
    if (!activeKeyword.value) return members;
    const kw = activeKeyword.value.toLowerCase();
    return members.filter((m) => {
      if (activeKeyword.field === "name") return m.name?.toLowerCase().includes(kw);
      if (activeKeyword.field === "email") return m.email?.toLowerCase().includes(kw);
      return true;
    });
  }, [members, activeKeyword]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const paged = filtered.slice((page - 1) * pageSize, page * pageSize);

  const handlePageSizeChange = useCallback((size: number) => {
    setPageSize(size);
    setPage(1);
  }, []);

  const handleKeywordChange = useCallback(() => {
    setActiveKeyword({ field: searchField, value: searchKeyword });
    setPage(1);
  }, [searchField, searchKeyword]);

  const toggleAll = useCallback(
    (checked: boolean) => {
      setSelected(checked ? new Set(paged.map((m) => m.id)) : new Set());
    },
    [paged],
  );

  const toggleOne = useCallback((id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const handleLevelChange = useCallback(
    async (id: string, level: number) => {
      const token = await auth.currentUser?.getIdToken();
      const member = members.find((m) => m.id === id);
      if (!member) return;
      await fetch(`/api/admin-members/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ ...member, level }),
      });
      setMembers((prev) => prev.map((m) => (m.id === id ? { ...m, level } : m)));
    },
    [members],
  );

  const doDelete = useCallback(async () => {
    const token = await auth.currentUser?.getIdToken();
    const results = await Promise.all(
      [...selected].map((id) =>
        fetch(`/api/admin-members/${id}`, {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        }).then((r) => r.json()),
      ),
    );
    const denied = results.find((r) => r.error?.includes("최고관리자"));
    if (denied) {
      alert(denied.error);
      setShowDeleteModal(false);
      return;
    }
    setSelected(new Set());
    setShowDeleteModal(false);
    void fetchMembers();
  }, [selected, fetchMembers]);

  const handleClosePermModal = useCallback(() => {
    setShowPermModal(false);
  }, []);

  const handleOpenPermModal = useCallback(() => {
    setShowPermModal(true);
  }, []);

  const handlePermOverlayClick = useCallback(() => {
    setShowPermModal(false);
  }, []);

  const handlePermDialogClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
  }, []);

  const handleCloseDeleteModal = useCallback(() => {
    setShowDeleteModal(false);
  }, []);

  const handleDeleteToolbarClick = useCallback(() => {
    if (selected.size === 0) {
      alert("삭제할 회원을 선택해 주세요.");
      return;
    }
    setShowDeleteModal(true);
  }, [selected.size]);

  const pageButtons = useMemo(() => {
    return Array.from({ length: totalPages }, (_, i) => i + 1)
      .filter((p) => p === 1 || p === totalPages || Math.abs(p - page) <= 2)
      .reduce<(number | string)[]>((acc, p, i, arr) => {
        if (i > 0 && (p as number) - (arr[i - 1] as number) > 1) acc.push("…");
        acc.push(p);
        return acc;
      }, []);
  }, [totalPages, page]);

  const handleFirstPage = useCallback(() => setPage(1), []);
  const handlePrevPage = useCallback(() => setPage((p) => Math.max(1, p - 1)), []);
  const handleNextPage = useCallback(
    () => setPage((p) => Math.min(totalPages, p + 1)),
    [totalPages],
  );
  const handleLastPage = useCallback(() => setPage(totalPages), [totalPages]);

  const makePageHandler = useCallback((p: number) => () => setPage(p), []);

  const handleSearchKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") handleKeywordChange();
    },
    [handleKeywordChange],
  );

  return (
    <AdminPage $max="7xl">
      {showPermModal ? (
        <AdminModalOverlay onMouseDown={handlePermOverlayClick}>
          <AdminWideDialog onMouseDown={handlePermDialogClick}>
            <AdminHeaderRowBetween style={{ marginBottom: 20 }}>
              <AdminDialogTitle>관리자 권한 비교</AdminDialogTitle>
              <AdminIconButton type="button" onClick={handleClosePermModal} aria-label="닫기">
                ✕
              </AdminIconButton>
            </AdminHeaderRowBetween>
            <AdminPermTable>
              <thead>
                <tr>
                  <AdminPermTh $align="left" style={{ width: "50%" }}>
                    기능
                  </AdminPermTh>
                  <AdminPermTh $align="center" $tone="red" style={{ width: "25%" }}>
                    최고관리자
                  </AdminPermTh>
                  <AdminPermTh $align="center" $tone="blue" style={{ width: "25%" }}>
                    일반관리자
                  </AdminPermTh>
                </tr>
              </thead>
              <tbody>
                {PERM_ROWS.map(([label, adm, norm], i) => (
                  <tr key={label}>
                    <AdminPermTd $striped={i % 2 === 1}>{label}</AdminPermTd>
                    <AdminPermTd $align="center" $striped={i % 2 === 1}>
                      {adm ? <AdminCheckMark>✓</AdminCheckMark> : <AdminDashMark>—</AdminDashMark>}
                    </AdminPermTd>
                    <AdminPermTd $align="center" $striped={i % 2 === 1}>
                      {norm ? <AdminCheckMark>✓</AdminCheckMark> : <AdminDashMark>—</AdminDashMark>}
                    </AdminPermTd>
                  </tr>
                ))}
              </tbody>
            </AdminPermTable>
            <div style={{ marginTop: 20, display: "flex", justifyContent: "flex-end" }}>
              <AdminBtnSm type="button" onClick={handleClosePermModal}>
                닫기
              </AdminBtnSm>
            </div>
          </AdminWideDialog>
        </AdminModalOverlay>
      ) : null}

      {showDeleteModal ? (
        <AdminModalOverlay>
          <AdminConfirmModal>
            <AdminModalEmoji>🗑️</AdminModalEmoji>
            <AdminModalTitle>회원 삭제</AdminModalTitle>
            <AdminModalDesc>
              {selected.size}명의 회원을 삭제하시겠습니까?
              <br />
              삭제된 회원은 복구할 수 없습니다.
            </AdminModalDesc>
            <AdminModalActions>
              <AdminBtnSm type="button" $variant="secondary" $block onClick={handleCloseDeleteModal}>
                취소
              </AdminBtnSm>
              <AdminBtnSm type="button" $variant="danger" $block onClick={doDelete}>
                삭제
              </AdminBtnSm>
            </AdminModalActions>
          </AdminConfirmModal>
        </AdminModalOverlay>
      ) : null}

      <div style={{ marginBottom: 24 }}>
        <AdminFlexGap2 style={{ marginBottom: 4 }}>
          <AdminH1>회원 관리</AdminH1>
          {myLevel === 1 ? (
            <AdminHelpIconButton type="button" onClick={handleOpenPermModal} title="권한 비교 보기">
              ?
            </AdminHelpIconButton>
          ) : null}
        </AdminFlexGap2>
        <AdminMutedSmall as="p" style={{ margin: 0 }}>
          NeoLAB Convergence 홈페이지 관리자 계정 목록
        </AdminMutedSmall>
      </div>

      <AdminFlexGap2 style={{ marginBottom: 12 }}>
        <AdminSelect
          value={searchField}
          onChange={(e) => setSearchField(e.target.value)}
        >
          <option value="name">이름</option>
          <option value="email">이메일</option>
        </AdminSelect>
        <AdminInput
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          onKeyDown={handleSearchKeyDown}
          placeholder="검색어 입력"
          style={{ width: 160 }}
        />
        <AdminBtnSm type="button" onClick={handleKeywordChange}>
          검색
        </AdminBtnSm>
      </AdminFlexGap2>

      <AdminToolbarFooter>
        <AdminMutedSmall as="span">
          총 <AdminInlineStrong>{filtered.length}</AdminInlineStrong>명
        </AdminMutedSmall>
        <AdminFlexGap2>
          <AdminSelect value={String(pageSize)} onChange={(e) => handlePageSizeChange(Number(e.target.value))}>
            <option value={10}>10개씩 보기</option>
            <option value={20}>20개씩 보기</option>
            <option value={50}>50개씩 보기</option>
            <option value={100}>100개씩 보기</option>
          </AdminSelect>
          {myLevel === 1 ? (
            <>
              <AdminBtnSm type="button" $variant="outlineRed" onClick={handleDeleteToolbarClick}>
                삭제
              </AdminBtnSm>
              <AdminLinkPrimary href="/admin/members/new">회원 등록</AdminLinkPrimary>
            </>
          ) : null}
        </AdminFlexGap2>
      </AdminToolbarFooter>

      {loading ? (
        <AdminCardPadded>불러오는 중...</AdminCardPadded>
      ) : (
        <AdminTableWide>
          <AdminTable>
            <AdminThead>
              <tr>
                <AdminTh $width="40px">
                  <AdminCheckboxSm
                    type="checkbox"
                    onChange={(e) => toggleAll(e.target.checked)}
                    checked={selected.size === paged.length && paged.length > 0}
                  />
                </AdminTh>
                <AdminTh $align="center" $width="48px">
                  번호
                </AdminTh>
                <AdminTh $align="center" $width="160px">
                  이름
                </AdminTh>
                <AdminTh $align="center" $width="144px">
                  레벨
                </AdminTh>
                <AdminTh $align="center" $width="224px">
                  이메일
                </AdminTh>
                <AdminTh $align="center" $width="56px">
                  로그인
                </AdminTh>
                <AdminTh $align="center" $width="56px">
                  글쓰기
                </AdminTh>
                <AdminTh $align="center" $width="56px">
                  답변
                </AdminTh>
                <AdminTh $align="center" $width="56px">
                  댓글
                </AdminTh>
                <AdminTh $align="center" $width="176px">
                  가입/최종 접속일
                </AdminTh>
                <AdminTh $align="center" $width="56px">
                  수정
                </AdminTh>
              </tr>
            </AdminThead>
            <AdminTbody>
              {paged.length === 0 ? (
                <tr>
                  <AdminTd colSpan={11} $align="center">
                    등록된 회원이 없습니다.
                  </AdminTd>
                </tr>
              ) : (
                paged.map((m) => (
                  <AdminTr key={m.id} $hover $selected={selected.has(m.id)}>
                    <AdminTdDense $align="center">
                      <AdminCheckboxSm
                        type="checkbox"
                        checked={selected.has(m.id)}
                        onChange={() => toggleOne(m.id)}
                      />
                    </AdminTdDense>
                    <AdminTdDense $align="center">
                      <AdminMutedSmall as="span">{m.seq}</AdminMutedSmall>
                    </AdminTdDense>
                    <AdminTdDense $align="center">
                      <AdminMutedXs as="span" style={{ fontWeight: 600, color: "#374151", fontSize: 12 }}>
                        {m.name}
                      </AdminMutedXs>
                    </AdminTdDense>
                    <AdminTdDense $align="center">
                      {myLevel === 1 ? (
                        <AdminSelect
                          value={m.level}
                          onChange={(e) => handleLevelChange(m.id, Number(e.target.value))}
                          style={{
                            color: LEVEL_LABELS[m.level]?.color ?? "#374151",
                            fontSize: 12,
                            padding: "2px 6px",
                          }}
                        >
                          <option value={1} style={{ color: "#ef4444" }}>
                            1 (최고관리자)
                          </option>
                          <option value={2} style={{ color: "#3b82f6" }}>
                            2 (일반관리자)
                          </option>
                        </AdminSelect>
                      ) : (
                        <AdminMutedXs as="span" style={{ color: LEVEL_LABELS[m.level]?.color ?? "#374151", fontWeight: 500 }}>
                          {m.level} ({LEVEL_LABELS[m.level]?.label ?? "관리자"})
                        </AdminMutedXs>
                      )}
                    </AdminTdDense>
                    <AdminTdDense $align="center">
                      <AdminMutedSmall as="span">{m.email}</AdminMutedSmall>
                    </AdminTdDense>
                    <AdminTdDense $align="center">
                      <AdminMutedSmall as="span">{m.loginCount ?? 0}</AdminMutedSmall>
                    </AdminTdDense>
                    <AdminTdDense $align="center">
                      <AdminMutedSmall as="span">{m.postCount ?? 0}</AdminMutedSmall>
                    </AdminTdDense>
                    <AdminTdDense $align="center">
                      <AdminMutedSmall as="span">{m.replyCount ?? 0}</AdminMutedSmall>
                    </AdminTdDense>
                    <AdminTdDense $align="center">
                      <AdminMutedSmall as="span">{m.commentCount ?? 0}</AdminMutedSmall>
                    </AdminTdDense>
                    <AdminTdDense $align="center">
                      <AdminMemberMeta>
                        <div>{fmtDatetime(m.createdAt)}</div>
                        <AdminMemberMetaSub>({fmtDatetime(m.lastLoginAt)})</AdminMemberMetaSub>
                      </AdminMemberMeta>
                    </AdminTdDense>
                    <AdminTdDense $align="center">
                      {myLevel === 1 ? (
                        <AdminLinkBtnXs href={`/admin/members/${m.id}/edit`}>수정</AdminLinkBtnXs>
                      ) : null}
                    </AdminTdDense>
                  </AdminTr>
                ))
              )}
            </AdminTbody>
          </AdminTable>
        </AdminTableWide>
      )}

      {totalPages > 1 ? (
        <div style={{ marginTop: 12, display: "flex", justifyContent: "center", alignItems: "center", gap: 4 }}>
          <AdminPagerNav type="button" disabled={page === 1} onClick={handleFirstPage}>
            «
          </AdminPagerNav>
          <AdminPagerNav type="button" disabled={page === 1} onClick={handlePrevPage}>
            ‹
          </AdminPagerNav>
          {pageButtons.map((p, i) =>
            p === "…" ? (
              <AdminEllipsis key={`ellipsis-${i}`}>…</AdminEllipsis>
            ) : (
              <AdminPagerPage key={p} type="button" $active={page === p} onClick={makePageHandler(p as number)}>
                {p}
              </AdminPagerPage>
            ),
          )}
          <AdminPagerNav type="button" disabled={page === totalPages} onClick={handleNextPage}>
            ›
          </AdminPagerNav>
          <AdminPagerNav type="button" disabled={page === totalPages} onClick={handleLastPage}>
            »
          </AdminPagerNav>
          <AdminPagerText>
            {filtered.length}명 중 {(page - 1) * pageSize + 1}–{Math.min(page * pageSize, filtered.length)}
          </AdminPagerText>
        </div>
      ) : null}
    </AdminPage>
  );
}
