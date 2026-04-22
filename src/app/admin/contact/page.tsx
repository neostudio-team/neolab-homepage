"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import { auth } from "@/lib/firebase";
import {
  AdminBtnSm,
  AdminCardPadded,
  AdminCategoryTag,
  AdminCheckbox,
  AdminConfirmModal,
  AdminDd,
  AdminDdBlock,
  AdminDetailModalHeader,
  AdminDetailModalPanel,
  AdminDl,
  AdminDlRow,
  AdminDt,
  AdminFlexGap2,
  AdminH1,
  AdminHeaderRow,
  AdminIconButton,
  AdminInlineStrong,
  AdminInput,
  AdminInputGrow,
  AdminModalActions,
  AdminModalDesc,
  AdminModalEmoji,
  AdminModalOverlay,
  AdminModalOverlayHigh,
  AdminModalTitle,
  AdminMutedSmall,
  AdminNewPill,
  AdminPage,
  AdminPageButton,
  AdminPagination,
  AdminQuickDateButton,
  AdminQuickDates,
  AdminReadLabel,
  AdminSelect,
  AdminSpan,
  AdminTable,
  AdminTableShell,
  AdminTextLink,
  AdminTbody,
  AdminTd,
  AdminTh,
  AdminThead,
  AdminTextClamp1,
  AdminToolbar,
  AdminToolbarFooter,
  AdminToolbarRow,
  AdminTrInquiry,
  AdminDateRange,
  AdminDetailBlockLabel,
  AdminTilde,
  AdminUnreadBadge,
} from "@/components/admin/AdminCommon.styles";

interface Inquiry {
  id: string;
  category: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  fileBase64: string;
  fileName: string;
  fileType: string;
  isRead: boolean;
  createdAt: string;
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

export default function AdminContactPage() {
  const [items, setItems] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [quickDate, setQuickDate] = useState<QuickDate>("all");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [activeKeyword, setActiveKeyword] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [detailItem, setDetailItem] = useState<Inquiry | null>(null);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchAll = useCallback(async () => {
    setLoading(true);
    try {
      const token = await auth.currentUser?.getIdToken();
      const res = await fetch("/api/contact", { headers: { Authorization: `Bearer ${token}` } });
      const data = await res.json();
      setItems(Array.isArray(data) ? data : []);
    } catch {
      setItems([]);
    }
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
      alert("삭제할 항목을 선택해 주세요.");
      return;
    }
    setShowDeleteModal(true);
  }, [selected.size]);

  const handleCloseDetail = useCallback(() => {
    setDetailItem(null);
  }, []);

  const handleOverlayPointerDown = useCallback(() => {
    setDetailItem(null);
  }, []);

  const handleDetailPanelPointerDown = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
  }, []);

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
          if (
            !item.name?.toLowerCase().includes(kw) &&
            !item.email?.toLowerCase().includes(kw) &&
            !item.subject?.toLowerCase().includes(kw)
          )
            return false;
        }
        return true;
      }),
    [items, startDate, endDate, activeKeyword],
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

  const doDelete = useCallback(async () => {
    const token = await auth.currentUser?.getIdToken();
    await Promise.all(
      [...selected].map((id) =>
        fetch(`/api/contact/${id}`, {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        }),
      ),
    );
    setSelected(new Set());
    setShowDeleteModal(false);
    void fetchAll();
  }, [selected, fetchAll]);

  const markRead = useCallback(async (item: Inquiry) => {
    if (item.isRead) return;
    const token = await auth.currentUser?.getIdToken();
    await fetch(`/api/contact/${item.id}`, {
      method: "PATCH",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({ isRead: true }),
    });
    setItems((prev) => prev.map((i) => (i.id === item.id ? { ...i, isRead: true } : i)));
    setDetailItem((d) => (d && d.id === item.id ? { ...d, isRead: true } : d));
  }, []);

  const handleRowActivate = useCallback(
    (item: Inquiry) => {
      void markRead(item);
      setDetailItem(item);
    },
    [markRead],
  );

  const handleCheckboxCellPointerDown = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
  }, []);

  const groupStart = Math.floor((currentPage - 1) / 10) * 10 + 1;
  const groupEnd = Math.min(groupStart + 9, totalPages);
  const pageNums = Array.from({ length: groupEnd - groupStart + 1 }, (_, i) => groupStart + i);

  const unreadCount = useMemo(() => items.filter((i) => !i.isRead).length, [items]);

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

  const detailRows = useMemo(() => {
    if (!detailItem) return [];
    return [
      ["문의유형", detailItem.category || "-"],
      ["이름", detailItem.name],
      ["이메일", detailItem.email],
      ["연락처", detailItem.phone || "-"],
      ["제목", detailItem.subject],
      ["접수일", fmtDate(detailItem.createdAt)],
    ] as const;
  }, [detailItem]);

  return (
    <AdminPage>
      {showDeleteModal ? (
        <AdminModalOverlay>
          <AdminConfirmModal>
            <AdminModalEmoji>🗑️</AdminModalEmoji>
            <AdminModalTitle>문의 삭제</AdminModalTitle>
            <AdminModalDesc>
              {selected.size}건의 문의를 삭제하시겠습니까?
              <br />
              삭제된 데이터는 복구할 수 없습니다.
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

      {detailItem ? (
        <AdminModalOverlayHigh $padded onMouseDown={handleOverlayPointerDown}>
          <AdminDetailModalPanel onMouseDown={handleDetailPanelPointerDown}>
            <AdminDetailModalHeader>
              <AdminModalTitle>문의 상세</AdminModalTitle>
              <AdminIconButton type="button" onClick={handleCloseDetail} aria-label="닫기">
                ✕
              </AdminIconButton>
            </AdminDetailModalHeader>
            <AdminDl>
              {detailRows.map(([label, value]) => (
                <AdminDlRow key={label}>
                  <AdminDt>{label}</AdminDt>
                  <AdminDd>{value}</AdminDd>
                </AdminDlRow>
              ))}
              <div>
                <AdminDetailBlockLabel>내용</AdminDetailBlockLabel>
                <AdminDdBlock as="div">{detailItem.message}</AdminDdBlock>
              </div>
              {detailItem.fileName ? (
                <AdminDlRow>
                  <AdminDt>첨부파일</AdminDt>
                  <AdminDd>
                    {detailItem.fileBase64 ? (
                      <AdminTextLink
                        href={`data:${detailItem.fileType || "application/octet-stream"};base64,${detailItem.fileBase64}`}
                        download={detailItem.fileName}
                      >
                        {detailItem.fileName}
                      </AdminTextLink>
                    ) : (
                      <AdminMutedSmall as="span">{detailItem.fileName}</AdminMutedSmall>
                    )}
                  </AdminDd>
                </AdminDlRow>
              ) : null}
            </AdminDl>
          </AdminDetailModalPanel>
        </AdminModalOverlayHigh>
      ) : null}

      <AdminHeaderRow>
        <AdminH1>문의 관리</AdminH1>
        {unreadCount > 0 ? <AdminUnreadBadge>{unreadCount} 미확인</AdminUnreadBadge> : null}
      </AdminHeaderRow>

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
        </AdminDateRange>
      </AdminToolbar>

      <AdminToolbarRow>
        <AdminInputGrow
          value={searchKeyword}
          onChange={(e) => handleSearchKeywordChange(e.target.value)}
          onKeyDown={handleSearchKeyDown}
          placeholder="이름 · 이메일 · 제목 검색"
        />
        <AdminBtnSm type="button" onClick={doSearch}>
          검색
        </AdminBtnSm>
      </AdminToolbarRow>

      <AdminToolbarFooter>
        <AdminMutedSmall as="span">
          총 <AdminInlineStrong>{filtered.length}</AdminInlineStrong>건
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
        </AdminFlexGap2>
      </AdminToolbarFooter>

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
                <AdminTh $align="center" $width="64px">
                  번호
                </AdminTh>
                <AdminTh $align="center" $width="112px">
                  문의유형
                </AdminTh>
                <AdminTh>제목</AdminTh>
                <AdminTh $align="center" $width="112px">
                  이름
                </AdminTh>
                <AdminTh $align="center" $width="144px">
                  이메일
                </AdminTh>
                <AdminTh $align="center" $width="96px">
                  접수일
                </AdminTh>
                <AdminTh $align="center" $width="64px">
                  상태
                </AdminTh>
              </tr>
            </AdminThead>
            <AdminTbody>
              {pagedItems.length === 0 ? (
                <tr>
                  <AdminTd colSpan={8} $align="center">
                    접수된 문의가 없습니다.
                  </AdminTd>
                </tr>
              ) : (
                pagedItems.map((item, idx) => (
                  <AdminTrInquiry
                    key={item.id}
                    $hover
                    $selected={selected.has(item.id)}
                    $unread={!item.isRead}
                    onClick={() => handleRowActivate(item)}
                  >
                    <AdminTd $align="center" onMouseDown={handleCheckboxCellPointerDown}>
                      <AdminCheckbox
                        type="checkbox"
                        checked={selected.has(item.id)}
                        onChange={() => toggleOne(item.id)}
                      />
                    </AdminTd>
                    <AdminTd $align="center">
                      <AdminMutedSmall as="span">
                        {filtered.length - ((currentPage - 1) * pageSize + idx)}
                      </AdminMutedSmall>
                    </AdminTd>
                    <AdminTd $align="center">
                      {item.category ? (
                        <AdminCategoryTag>{item.category}</AdminCategoryTag>
                      ) : (
                        <AdminMutedSmall as="span">-</AdminMutedSmall>
                      )}
                    </AdminTd>
                    <AdminTd>
                      <AdminTextClamp1>{item.subject || "(제목 없음)"}</AdminTextClamp1>
                    </AdminTd>
                    <AdminTd $align="center">
                      <AdminSpan $size="xs">{item.name}</AdminSpan>
                    </AdminTd>
                    <AdminTd $align="center">
                      <AdminMutedSmall as="span">{item.email}</AdminMutedSmall>
                    </AdminTd>
                    <AdminTd $align="center">
                      <AdminMutedSmall as="span">{fmtDate(item.createdAt)}</AdminMutedSmall>
                    </AdminTd>
                    <AdminTd $align="center">
                      {item.isRead ? (
                        <AdminReadLabel>확인</AdminReadLabel>
                      ) : (
                        <AdminNewPill>NEW</AdminNewPill>
                      )}
                    </AdminTd>
                  </AdminTrInquiry>
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
