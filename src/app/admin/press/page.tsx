"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import { auth } from "@/lib/firebase";
import {
  AdminAuthorBadge,
  AdminBtn,
  AdminBtnSm,
  AdminCardPadded,
  AdminCellHCenter,
  AdminCheckbox,
  AdminConfirmModal,
  AdminFlexGap2,
  AdminH1,
  AdminHeaderRowBetween,
  AdminInlineStrong,
  AdminInput,
  AdminInputGrow,
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
  AdminQuickDateButton,
  AdminQuickDates,
  AdminSelect,
  AdminTable,
  AdminTableShell,
  AdminTbody,
  AdminTd,
  AdminTh,
  AdminThead,
  AdminTitleLink,
  AdminToolbar,
  AdminToolbarRow,
  AdminTr,
  AdminDateRange,
  AdminTilde,
} from "@/components/admin/AdminCommon.styles";

interface Press {
  id: string;
  titleKo: string;
  author: string;
  category: string;
  views: number;
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
  return iso.slice(0, 10);
}
function todayStr() {
  return new Date().toISOString().slice(0, 10);
}
function offsetDay(n: number) {
  const d = new Date();
  d.setDate(d.getDate() + n);
  return d.toISOString().slice(0, 10);
}
function firstOfMonth(offset = 0) {
  const d = new Date();
  d.setDate(1);
  d.setMonth(d.getMonth() + offset);
  return d.toISOString().slice(0, 10);
}
function lastOfMonth(offset = 0) {
  const d = new Date();
  d.setDate(1);
  d.setMonth(d.getMonth() + offset + 1);
  d.setDate(0);
  return d.toISOString().slice(0, 10);
}

type QuickDate = "today" | "yesterday" | "1week" | "1month" | "thismonth" | "lastmonth" | "all";
const QUICK_OPTIONS: { key: QuickDate; label: string }[] = [
  { key: "today", label: "오늘" },
  { key: "yesterday", label: "어제" },
  { key: "1week", label: "1주일" },
  { key: "1month", label: "1개월" },
  { key: "thismonth", label: "이번달" },
  { key: "lastmonth", label: "지난달" },
  { key: "all", label: "전체" },
];
function quickRange(key: QuickDate): [string, string] {
  const today = todayStr();
  switch (key) {
    case "today":
      return [today, today];
    case "yesterday": {
      const y = offsetDay(-1);
      return [y, y];
    }
    case "1week":
      return [offsetDay(-6), today];
    case "1month":
      return [offsetDay(-29), today];
    case "thismonth":
      return [firstOfMonth(0), lastOfMonth(0)];
    case "lastmonth":
      return [firstOfMonth(-1), lastOfMonth(-1)];
    case "all":
      return ["", ""];
  }
}

const PAGE_SIZE_OPTIONS = [10, 20, 50];

export default function AdminPressPage() {
  const [items, setItems] = useState<Press[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [quickDate, setQuickDate] = useState<QuickDate>("all");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [searchField, setSearchField] = useState<"title" | "author">("title");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [activeKeyword, setActiveKeyword] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchAll = useCallback(async () => {
    setLoading(true);
    const res = await fetch("/api/press");
    const data = await res.json();
    setItems(Array.isArray(data) ? data : []);
    setLoading(false);
  }, []);

  useEffect(() => {
    void fetchAll();
  }, [fetchAll]);

  const applyQuick = useCallback((key: QuickDate) => {
    setQuickDate(key);
    const [s, e] = quickRange(key);
    setStartDate(s);
    setEndDate(e);
  }, []);

  const doSearch = useCallback(() => {
    setActiveKeyword(searchKeyword);
    setCurrentPage(1);
  }, [searchKeyword]);

  const handleStartDateChange = useCallback((value: string) => {
    setStartDate(value);
    setQuickDate("all");
  }, []);

  const handleEndDateChange = useCallback((value: string) => {
    setEndDate(value);
    setQuickDate("all");
  }, []);

  const handleSearchFieldChange = useCallback((value: "title" | "author") => {
    setSearchField(value);
  }, []);

  const handleSearchKeywordChange = useCallback((value: string) => {
    setSearchKeyword(value);
  }, []);

  const handlePageSizeChange = useCallback((value: number) => {
    setPageSize(value);
  }, []);

  const handleCloseDeleteModal = useCallback(() => {
    setShowDeleteModal(false);
  }, []);

  const handleDeleteToolbarClick = useCallback(() => {
    if (selected.size === 0) {
      alert("삭제할 게시글을 선택해 주세요.");
      return;
    }
    setShowDeleteModal(true);
  }, [selected.size]);

  const filtered = useMemo(
    () =>
      items.filter((item) => {
        if (startDate || endDate) {
          const d = fmtDate(item.createdAt);
          if (startDate && d < startDate) return false;
          if (endDate && d > endDate) return false;
        }
        if (activeKeyword) {
          const kw = activeKeyword.toLowerCase();
          if (searchField === "title" && !item.titleKo?.toLowerCase().includes(kw)) return false;
          if (searchField === "author" && !item.author?.toLowerCase().includes(kw)) return false;
        }
        return true;
      }),
    [items, startDate, endDate, activeKeyword, searchField],
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [activeKeyword, startDate, endDate, pageSize]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const pagedItems = useMemo(
    () => filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize),
    [filtered, currentPage, pageSize],
  );

  const toggleAll = useCallback(
    (checked: boolean) => {
      setSelected(checked ? new Set(pagedItems.map((p) => p.id)) : new Set());
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

  const doDelete = useCallback(async () => {
    const token = await auth.currentUser?.getIdToken();
    await Promise.all(
      [...selected].map((id) =>
        fetch(`/api/press/${id}`, {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        }),
      ),
    );
    setSelected(new Set());
    setShowDeleteModal(false);
    void fetchAll();
  }, [selected, fetchAll]);

  const groupStart = Math.floor((currentPage - 1) / 10) * 10 + 1;
  const groupEnd = Math.min(groupStart + 9, totalPages);
  const pageNums = Array.from({ length: groupEnd - groupStart + 1 }, (_, i) => groupStart + i);

  const handleSearchKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") doSearch();
    },
    [doSearch],
  );

  const handleFirstPage = useCallback(() => setCurrentPage(1), []);
  const handlePrevPage = useCallback(() => setCurrentPage((p) => Math.max(1, p - 1)), []);
  const handleNextPage = useCallback(
    () => setCurrentPage((p) => Math.min(totalPages, p + 1)),
    [totalPages],
  );
  const handleLastPage = useCallback(() => setCurrentPage(totalPages), [totalPages]);

  const makePageHandler = useCallback((p: number) => () => setCurrentPage(p), []);

  return (
    <AdminPage>
      {showDeleteModal ? (
        <AdminModalOverlay>
          <AdminConfirmModal>
            <AdminModalEmoji>🗑️</AdminModalEmoji>
            <AdminModalTitle>게시글 삭제</AdminModalTitle>
            <AdminModalDesc>
              {selected.size}개의 게시글을 삭제하시겠습니까?
              <br />
              삭제된 게시글은 복구할 수 없습니다.
            </AdminModalDesc>
            <AdminModalActions>
              <AdminBtn type="button" $variant="secondary" $block onClick={handleCloseDeleteModal}>
                취소
              </AdminBtn>
              <AdminBtn type="button" $variant="danger" $block onClick={doDelete}>
                삭제
              </AdminBtn>
            </AdminModalActions>
          </AdminConfirmModal>
        </AdminModalOverlay>
      ) : null}

      <AdminH1>기업뉴스 관리</AdminH1>

      <AdminToolbar>
        <AdminQuickDates>
          {QUICK_OPTIONS.map((opt) => (
            <AdminQuickDateButton
              key={opt.key}
              type="button"
              $active={quickDate === opt.key}
              onClick={() => applyQuick(opt.key)}
            >
              {opt.label}
            </AdminQuickDateButton>
          ))}
        </AdminQuickDates>
        <AdminDateRange>
          <AdminInput
            type="date"
            value={startDate}
            onChange={(e) => handleStartDateChange(e.target.value)}
          />
          <AdminTilde>~</AdminTilde>
          <AdminInput
            type="date"
            value={endDate}
            onChange={(e) => handleEndDateChange(e.target.value)}
          />
          <AdminBtnSm type="button" onClick={doSearch}>
            검색
          </AdminBtnSm>
        </AdminDateRange>
      </AdminToolbar>

      <AdminToolbarRow>
        <AdminSelect
          value={searchField}
          onChange={(e) => handleSearchFieldChange(e.target.value as "title" | "author")}
        >
          <option value="title">제목</option>
          <option value="author">작성자</option>
        </AdminSelect>
        <AdminInputGrow
          value={searchKeyword}
          onChange={(e) => handleSearchKeywordChange(e.target.value)}
          onKeyDown={handleSearchKeyDown}
          placeholder="검색어를 입력하세요"
        />
        <AdminBtnSm type="button" onClick={doSearch}>
          검색
        </AdminBtnSm>
      </AdminToolbarRow>

      <AdminHeaderRowBetween>
        <AdminMutedSmall as="span">
          총 <AdminInlineStrong>{filtered.length}</AdminInlineStrong>개
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
          <AdminLinkPrimary href="/admin/press/new">글쓰기</AdminLinkPrimary>
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
                    checked={pagedItems.length > 0 && pagedItems.every((p) => selected.has(p.id))}
                  />
                </AdminTh>
                <AdminTh $align="center" $width="64px">
                  번호
                </AdminTh>
                <AdminTh>제목</AdminTh>
                <AdminTh $align="center" $width="144px">
                  작성자
                </AdminTh>
                <AdminTh $align="center" $width="112px">
                  날짜
                </AdminTh>
                <AdminTh $align="center" $width="64px">
                  조회
                </AdminTh>
              </tr>
            </AdminThead>
            <AdminTbody>
              {pagedItems.length === 0 ? (
                <tr>
                  <AdminTd colSpan={6} $align="center">
                    등록된 기업뉴스가 없습니다.
                  </AdminTd>
                </tr>
              ) : (
                pagedItems.map((p, idx) => {
                  const globalIdx = (currentPage - 1) * pageSize + idx;
                  return (
                    <AdminTr key={p.id} $hover $selected={selected.has(p.id)}>
                      <AdminTd $align="center">
                        <AdminCheckbox
                          type="checkbox"
                          checked={selected.has(p.id)}
                          onChange={() => toggleOne(p.id)}
                        />
                      </AdminTd>
                      <AdminTd $align="center">
                        <AdminMutedSmall as="span">{filtered.length - globalIdx}</AdminMutedSmall>
                      </AdminTd>
                      <AdminTd>
                        <AdminTitleLink href={`/admin/press/${p.id}/edit`}>
                          {p.titleKo || "(제목 없음)"}
                        </AdminTitleLink>
                      </AdminTd>
                      <AdminTd $align="center">
                        <AdminCellHCenter>
                          <AdminAuthorBadge $color={badgeColor(p.author)}>
                            {p.author?.charAt(0) || "?"}
                          </AdminAuthorBadge>
                          <AdminMutedSmall as="span">{p.author}</AdminMutedSmall>
                        </AdminCellHCenter>
                      </AdminTd>
                      <AdminTd $align="center">
                        <AdminMutedSmall as="span">{fmtDate(p.createdAt)}</AdminMutedSmall>
                      </AdminTd>
                      <AdminTd $align="center">
                        <AdminMutedSmall as="span">{p.views ?? 0}</AdminMutedSmall>
                      </AdminTd>
                    </AdminTr>
                  );
                })
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
