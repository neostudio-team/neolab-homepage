"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import { auth } from "@/lib/firebase";
import {
  AdminAuthorBadge,
  AdminAuthorText,
  AdminBtnSm,
  AdminCardPadded,
  AdminCellHCenter,
  AdminCheckbox,
  AdminConfirmModal,
  AdminFlexGap2,
  AdminGrayBadge,
  AdminGreenBadge,
  AdminH1,
  AdminHeaderRowBetween,
  AdminInlineStrong,
  AdminLinkBlue,
  AdminLinkPrimary,
  AdminModalActions,
  AdminModalDesc,
  AdminModalEmoji,
  AdminModalOverlay,
  AdminModalTitle,
  AdminMutedSmall,
  AdminPage,
  AdminPageButton,
  AdminPagination,
  AdminScheduleCell,
  AdminSelect,
  AdminTable,
  AdminTableShell,
  AdminTbody,
  AdminTd,
  AdminTh,
  AdminThead,
  AdminTitleLink,
  AdminTr,
  AdminUppercaseStrong,
} from "@/components/admin/AdminCommon.styles";

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

const BADGE_COLORS = [
  "#3b82f6",
  "#10b981",
  "#8b5cf6",
  "#f97316",
  "#ef4444",
  "#14b8a6",
  "#ec4899",
  "#6366f1",
];
function badgeColor(name: string) {
  return BADGE_COLORS[(name?.charCodeAt(0) || 0) % BADGE_COLORS.length];
}

function fmtDate(iso: string) {
  if (!iso) return "-";
  return iso.replace("T", " ").slice(0, 16);
}

const PAGE_SIZE_OPTIONS = [10, 20, 50];

export default function AdminPopupsPage() {
  const [items, setItems] = useState<Popup[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchAll = useCallback(async (user: { getIdToken: () => Promise<string> } | null) => {
    if (!user) return;
    setLoading(true);
    const token = await user.getIdToken();
    const headers: Record<string, string> = { Authorization: `Bearer ${token}` };
    const res = await fetch("/api/popups", { headers, cache: "no-store" });
    const data = await res.json();
    setItems(Array.isArray(data) ? data : []);
    setLoading(false);
  }, []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) void fetchAll(user);
    });
    return () => unsubscribe();
  }, [fetchAll]);

  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
  const pagedItems = useMemo(
    () => items.slice((currentPage - 1) * pageSize, currentPage * pageSize),
    [items, currentPage, pageSize],
  );

  const toggleAll = useCallback(
    (checked: boolean) => {
      setSelected(checked ? new Set(pagedItems.map((n) => n.id)) : new Set());
    },
    [pagedItems],
  );

  const toggleOne = useCallback((id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const handleCloseDeleteModal = useCallback(() => {
    setShowDeleteModal(false);
  }, []);

  const handleDeleteToolbarClick = useCallback(() => {
    if (selected.size === 0) {
      alert("삭제할 팝업을 선택해 주세요.");
      return;
    }
    setShowDeleteModal(true);
  }, [selected.size]);

  const doDelete = useCallback(async () => {
    const user = auth.currentUser;
    if (!user) return;
    const token = await user.getIdToken();
    await Promise.all(
      [...selected].map((id) =>
        fetch(`/api/popups/${id}`, {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        }),
      ),
    );
    setSelected(new Set());
    setShowDeleteModal(false);
    void fetchAll(user);
  }, [selected, fetchAll]);

  const groupStart = Math.floor((currentPage - 1) / 10) * 10 + 1;
  const groupEnd = Math.min(groupStart + 9, totalPages);
  const pageNums = Array.from({ length: groupEnd - groupStart + 1 }, (_, i) => groupStart + i);

  const handleFirstPage = useCallback(() => setCurrentPage(1), []);
  const handlePrevPage = useCallback(() => setCurrentPage((p) => Math.max(1, p - 1)), []);
  const handleNextPage = useCallback(
    () => setCurrentPage((p) => Math.min(totalPages, p + 1)),
    [totalPages],
  );
  const handleLastPage = useCallback(() => setCurrentPage(totalPages), [totalPages]);

  const makePageHandler = useCallback((p: number) => () => setCurrentPage(p), []);

  const handlePageSizeChange = useCallback((n: number) => {
    setPageSize(n);
  }, []);

  return (
    <AdminPage>
      {showDeleteModal ? (
        <AdminModalOverlay>
          <AdminConfirmModal>
            <AdminModalEmoji>🗑️</AdminModalEmoji>
            <AdminModalTitle>팝업 삭제</AdminModalTitle>
            <AdminModalDesc>
              {selected.size}개의 팝업을 삭제하시겠습니까?
              <br />
              삭제된 팝업은 복구할 수 없습니다.
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

      <AdminH1>팝업 관리</AdminH1>

      <AdminHeaderRowBetween>
        <AdminMutedSmall as="span">
          총 <AdminInlineStrong>{items.length}</AdminInlineStrong>개
        </AdminMutedSmall>
        <AdminFlexGap2>
          <AdminSelect value={String(pageSize)} onChange={(e) => handlePageSizeChange(Number(e.target.value))}>
            {PAGE_SIZE_OPTIONS.map((n) => (
              <option key={n} value={n}>
                {n}개씩 보기
              </option>
            ))}
          </AdminSelect>
          <AdminBtnSm type="button" $variant="outlineRed" onClick={handleDeleteToolbarClick}>
            삭제
          </AdminBtnSm>
          <AdminLinkPrimary href="/admin/popups/new">작성하기</AdminLinkPrimary>
        </AdminFlexGap2>
      </AdminHeaderRowBetween>

      {loading ? (
        <AdminCardPadded>불러오는 중...</AdminCardPadded>
      ) : (
        <AdminTableShell>
          <AdminTable>
            <AdminThead>
              <tr>
                <AdminTh $width="40px">
                  <AdminCheckbox
                    type="checkbox"
                    onChange={(e) => toggleAll(e.target.checked)}
                    checked={pagedItems.length > 0 && pagedItems.every((n) => selected.has(n.id))}
                  />
                </AdminTh>
                <AdminTh $align="center" $width="80px">
                  상태
                </AdminTh>
                <AdminTh>제목</AdminTh>
                <AdminTh $align="center" $width="128px">
                  작성자
                </AdminTh>
                <AdminTh $align="center" $width="112px">
                  노출 페이지
                </AdminTh>
                <AdminTh $align="center" $width="160px">
                  배포 일정
                </AdminTh>
                <AdminTh $align="center" $width="128px">
                  위치
                </AdminTh>
                <AdminTh $align="center" $width="96px">
                  수정
                </AdminTh>
              </tr>
            </AdminThead>
            <AdminTbody>
              {pagedItems.length === 0 ? (
                <tr>
                  <AdminTd colSpan={8} $align="center">
                    등록된 팝업이 없습니다.
                  </AdminTd>
                </tr>
              ) : (
                pagedItems.map((n) => (
                  <AdminTr key={n.id} $hover $selected={selected.has(n.id)}>
                    <AdminTd $align="center">
                      <AdminCheckbox
                        type="checkbox"
                        checked={selected.has(n.id)}
                        onChange={() => toggleOne(n.id)}
                      />
                    </AdminTd>
                    <AdminTd $align="center">
                      {n.isActive ? <AdminGreenBadge>활성</AdminGreenBadge> : <AdminGrayBadge>비활성</AdminGrayBadge>}
                    </AdminTd>
                    <AdminTd>
                      <AdminTitleLink href={`/admin/popups/${n.id}/edit`}>
                        {n.title || "(제목 없음)"}
                      </AdminTitleLink>
                    </AdminTd>
                    <AdminTd $align="center">
                      <AdminCellHCenter>
                        <AdminAuthorBadge $color={badgeColor(n.author || "관리자")}>
                          {(n.author || "관").charAt(0)}
                        </AdminAuthorBadge>
                        <AdminAuthorText>{n.author || "관리자"}</AdminAuthorText>
                      </AdminCellHCenter>
                    </AdminTd>
                    <AdminTd $align="center">
                      <AdminUppercaseStrong>
                        {n.language === "ko"
                          ? "국문"
                          : n.language === "en"
                            ? "영문"
                            : n.language === "ja"
                              ? "일문"
                              : "전체"}
                      </AdminUppercaseStrong>
                    </AdminTd>
                    <AdminScheduleCell $align="center">
                      <AdminMutedSmall as="span">
                        {n.startDate || n.endDate ? (
                          <>
                            {fmtDate(n.startDate) || "무제한"}
                            <br />~ {fmtDate(n.endDate) || "무제한"}
                          </>
                        ) : (
                          "제한 없음"
                        )}
                      </AdminMutedSmall>
                    </AdminScheduleCell>
                    <AdminTd $align="center">
                      <AdminMutedSmall as="span">{n.position}</AdminMutedSmall>
                    </AdminTd>
                    <AdminTd $align="center">
                      <AdminLinkBlue href={`/admin/popups/${n.id}/edit`}>수정</AdminLinkBlue>
                    </AdminTd>
                  </AdminTr>
                ))
              )}
            </AdminTbody>
          </AdminTable>
        </AdminTableShell>
      )}

      {!loading && totalPages > 1 ? (
        <AdminPagination>
          <AdminPageButton type="button" disabled={currentPage === 1} onClick={handleFirstPage}>
            «
          </AdminPageButton>
          <AdminPageButton type="button" disabled={currentPage === 1} onClick={handlePrevPage}>
            ‹
          </AdminPageButton>
          {pageNums.map((p) => (
            <AdminPageButton
              key={p}
              type="button"
              $active={currentPage === p}
              onClick={makePageHandler(p)}
            >
              {p}
            </AdminPageButton>
          ))}
          <AdminPageButton
            type="button"
            disabled={currentPage === totalPages}
            onClick={handleNextPage}
          >
            ›
          </AdminPageButton>
          <AdminPageButton
            type="button"
            disabled={currentPage === totalPages}
            onClick={handleLastPage}
          >
            »
          </AdminPageButton>
        </AdminPagination>
      ) : null}
    </AdminPage>
  );
}
