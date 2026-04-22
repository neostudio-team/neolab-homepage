"use client";

import Link from "next/link";
import styled, { css } from "styled-components";

/** 관리자 화면 공통 색·간격 (Tailwind 유틸 제거용) */
export const admin = {
  primary: "#1a1a2e",
  primaryHover: "#16213e",
  primaryHover2: "#2a2a4e",
  primarySoft: "rgba(26, 26, 46, 0.05)",
  ring: "rgba(26, 26, 46, 0.2)",
  gray50: "#f9fafb",
  gray100: "#f3f4f6",
  gray200: "#e5e7eb",
  gray300: "#d1d5db",
  gray400: "#9ca3af",
  gray500: "#6b7280",
  gray600: "#4b5563",
  gray700: "#374151",
  gray800: "#1f2937",
  red50: "#fef2f2",
  red100: "#fee2e2",
  red200: "#fecaca",
  red400: "#f87171",
  red500: "#ef4444",
  red600: "#dc2626",
  blue50: "#eff6ff",
  blue100: "#dbeafe",
  blue500: "#3b82f6",
  blue600: "#2563eb",
  blue700: "#1d4ed8",
};

const maxWidthMap = {
  "3xl": "48rem",
  "4xl": "56rem",
  "6xl": "72rem",
  "7xl": "80rem",
} as const;

export type AdminMaxWidth = keyof typeof maxWidthMap;

export const AdminPage = styled.div<{ $max?: AdminMaxWidth }>`
  padding: 32px;
  margin: 0 auto;
  max-width: ${({ $max = "6xl" }) => maxWidthMap[$max]};
`;

export const AdminCenterMessage = styled.div`
  padding: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
`;

export const AdminMutedText = styled.p`
  margin: 0;
  font-size: 14px;
  color: ${admin.gray400};
`;

export const AdminModalOverlay = styled.div<{ $padded?: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  ${({ $padded }) =>
    $padded &&
    css`
      padding: 16px;
    `}
`;

export const AdminModalOverlayHigh = styled(AdminModalOverlay)`
  z-index: 100;
`;

export const AdminConfirmModal = styled.div`
  width: 360px;
  max-width: calc(100vw - 32px);
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

/** 권한 비교 등 가로가 넓은 확인 패널 */
export const AdminWideDialog = styled.div`
  width: 520px;
  max-width: 90vw;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  padding: 32px;
`;

export const AdminModalEmoji = styled.div`
  font-size: 30px;
  line-height: 1;
`;

export const AdminModalTitle = styled.h2`
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  color: ${admin.gray800};
`;

export const AdminDialogTitle = styled.h2`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  color: ${admin.gray800};
`;

export const AdminModalDesc = styled.p`
  margin: 0;
  font-size: 14px;
  color: ${admin.gray500};
  text-align: center;
  line-height: 1.5;
`;

export const AdminModalActions = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
`;

export const AdminDetailModalPanel = styled.div`
  width: 100%;
  max-width: 32rem;
  max-height: 80vh;
  overflow-y: auto;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  padding: 32px;
`;

export const AdminDetailModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const AdminIconButton = styled.button`
  appearance: none;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
  font-size: 20px;
  line-height: 1;
  color: ${admin.gray400};

  &:hover {
    color: ${admin.gray700};
  }
`;

export const AdminH1 = styled.h1`
  margin: 0;
  font-size: 24px;
  font-weight: 700;
  color: ${admin.gray800};
`;

export const AdminHeaderRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
`;

export const AdminHeaderRowBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const AdminBackLink = styled(Link)`
  font-size: 14px;
  color: ${admin.gray400};
  text-decoration: none;

  &:hover {
    color: ${admin.gray600};
  }
`;

export const AdminExternalLink = styled.a`
  font-size: 12px;
  color: ${admin.blue500};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const AdminCard = styled.div`
  background: #fff;
  border: 1px solid ${admin.gray200};
  border-radius: 12px;
  overflow: hidden;
`;

export const AdminCardPadded = styled(AdminCard)`
  padding: 48px 24px;
  text-align: center;
  font-size: 14px;
  color: ${admin.gray400};
`;

export const AdminToolbar = styled.div`
  background: #fff;
  border: 1px solid ${admin.gray200};
  border-radius: 12px;
  padding: 16px 20px;
  margin-bottom: 12px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
`;

export const AdminToolbarRow = styled.div`
  background: #fff;
  border: 1px solid ${admin.gray200};
  border-radius: 12px;
  padding: 16px 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const AdminToolbarFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  padding: 0 4px;
`;

export const AdminQuickDates = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

export const AdminQuickDateButton = styled.button<{ $active?: boolean }>`
  appearance: none;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  padding: 6px 12px;
  font-size: 12px;
  font-weight: 500;
  transition: background-color 0.15s ease, color 0.15s ease;

  ${({ $active }) =>
    $active
      ? css`
          background: ${admin.primary};
          color: #fff;
        `
      : css`
          background: ${admin.gray100};
          color: ${admin.gray600};

          &:hover {
            background: ${admin.gray200};
          }
        `}
`;

export const AdminDateRange = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: auto;
  flex-wrap: wrap;
`;

export const AdminInput = styled.input`
  border: 1px solid ${admin.gray200};
  border-radius: 8px;
  padding: 6px 12px;
  font-size: 12px;
  color: ${admin.gray700};
  background: #fff;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${admin.ring};
  }
`;

export const AdminSelect = styled.select`
  border: 1px solid ${admin.gray200};
  border-radius: 8px;
  padding: 6px 28px 6px 12px;
  font-size: 12px;
  color: ${admin.gray700};
  background: #fff;
  appearance: none;
  cursor: pointer;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${admin.ring};
  }
`;

export const AdminSelectWrap = styled.div`
  position: relative;
`;

export const AdminSelectChevron = styled.span`
  pointer-events: none;
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 10px;
  color: ${admin.gray400};
`;

export const AdminTextarea = styled.textarea`
  border: 1px solid ${admin.gray200};
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 14px;
  color: ${admin.gray800};
  background: #fff;
  resize: vertical;
  width: 100%;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${admin.ring};
  }
`;

export const AdminTextareaPlain = styled.textarea`
  width: 100%;
  border: none;
  resize: none;
  padding: 16px;
  font-size: 14px;
  line-height: 1.625;
  color: ${admin.gray800};
  min-height: 600px;

  &:focus {
    outline: none;
  }
`;

export const AdminInputTransparent = styled.input`
  width: 100%;
  border: none;
  background: transparent;
  font-size: 14px;
  color: ${admin.gray800};

  &:focus {
    outline: none;
  }
`;

export const AdminTable = styled.table`
  width: 100%;
  font-size: 14px;
  border-collapse: collapse;
`;

export const AdminTableXs = styled(AdminTable)`
  font-size: 12px;
`;

export const AdminThead = styled.thead`
  background: ${admin.gray50};
  border-bottom: 1px solid ${admin.gray200};
  color: ${admin.gray500};
  font-size: 12px;
`;

export const AdminTh = styled.th<{
  $align?: "left" | "center" | "right";
  $width?: string;
}>`
  padding: 12px 16px;
  font-weight: 500;
  text-align: ${({ $align = "left" }) => $align};
  ${({ $width }) => $width && `width: ${$width};`}
`;

export const AdminTbody = styled.tbody`
  & > tr + tr {
    border-top: 1px solid ${admin.gray100};
  }
`;

export const AdminTbodyLight = styled.tbody`
  & > tr + tr {
    border-top: 1px solid #f9fafb;
  }
`;

export const AdminTr = styled.tr<{ $hover?: boolean; $selected?: boolean }>`
  ${({ $selected }) =>
    $selected &&
    css`
      background: rgba(239, 246, 255, 0.6);
    `}

  ${({ $hover }) =>
    $hover &&
    css`
      transition: background-color 0.15s ease;

      &:hover {
        background: ${admin.gray50};
      }
    `}
`;

export const AdminTrClickable = styled(AdminTr)`
  cursor: pointer;
`;

export const AdminTrInquiry = styled(AdminTr)<{ $unread?: boolean }>`
  cursor: pointer;
  font-weight: ${({ $unread }) => ($unread ? 600 : 400)};
`;

export const AdminTd = styled.td<{ $align?: "left" | "center" | "right" }>`
  padding: 12px 16px;
  text-align: ${({ $align = "left" }) => $align};
`;

export const AdminTdDense = styled.td<{
  $align?: "left" | "center" | "right";
}>`
  padding: 10px 16px 10px 0;
  text-align: ${({ $align = "left" }) => $align};
  vertical-align: top;
`;

export const AdminCheckbox = styled.input`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  accent-color: ${admin.primary};
`;

export const AdminCheckboxSm = styled.input`
  width: 14px;
  height: 14px;
  border-radius: 4px;
  accent-color: ${admin.primary};
`;

export const AdminBtn = styled.button<{
  $variant?: "primary" | "secondary" | "danger" | "outline" | "outlineRed" | "ghost";
  $block?: boolean;
}>`
  appearance: none;
  cursor: pointer;
  font-family: inherit;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  transition: background-color 0.15s ease, color 0.15s ease, opacity 0.15s ease,
    border-color 0.15s ease;
  border: 1px solid transparent;
  ${({ $block }) => $block && `flex: 1;`}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({ $variant = "primary" }) => {
    switch ($variant) {
      case "secondary":
        return css`
          padding: 10px 20px;
          background: #fff;
          border-color: ${admin.gray200};
          color: ${admin.gray600};

          &:hover:not(:disabled) {
            background: ${admin.gray50};
          }
        `;
      case "danger":
        return css`
          padding: 10px 20px;
          background: ${admin.red500};
          color: #fff;

          &:hover:not(:disabled) {
            background: ${admin.red600};
          }
        `;
      case "outline":
        return css`
          padding: 10px 20px;
          background: #fff;
          border-color: ${admin.gray200};
          color: ${admin.gray600};
          font-weight: 500;

          &:hover:not(:disabled) {
            background: ${admin.gray50};
          }
        `;
      case "outlineRed":
        return css`
          padding: 10px 16px;
          background: #fff;
          border-color: ${admin.red200};
          color: ${admin.red500};
          font-size: 12px;
          font-weight: 500;

          &:hover:not(:disabled) {
            background: ${admin.red50};
          }
        `;
      case "ghost":
        return css`
          padding: 8px 12px;
          background: transparent;
          color: ${admin.gray500};
          font-size: 14px;
          font-weight: 500;

          &:hover:not(:disabled) {
            color: ${admin.gray800};
          }
        `;
      default:
        return css`
          padding: 10px 24px;
          background: ${admin.primary};
          color: #fff;

          &:hover:not(:disabled) {
            background: ${admin.primaryHover};
          }
        `;
    }
  }}
`;

export const AdminBtnSm = styled(AdminBtn)`
  padding: 6px 16px;
  font-size: 12px;
`;

export const AdminBtnXs = styled(AdminBtn)`
  padding: 6px 12px;
  font-size: 12px;
  font-weight: 600;
`;

export const AdminLinkPrimary = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 16px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 500;
  text-decoration: none;
  background: ${admin.primary};
  color: #fff;

  &:hover {
    background: ${admin.primaryHover};
  }
`;

export const AdminLinkMuted = styled(Link)`
  font-size: 12px;
  color: ${admin.gray500};
  text-decoration: none;
  padding: 10px 20px;
  border: 1px solid ${admin.gray200};
  border-radius: 8px;

  &:hover {
    background: ${admin.gray50};
    color: ${admin.gray800};
  }
`;

export const AdminLinkBlue = styled(Link)`
  font-size: 12px;
  font-weight: 500;
  color: ${admin.blue500};
  text-decoration: none;

  &:hover {
    color: ${admin.blue700};
  }
`;

export const AdminTextLink = styled.a`
  font-size: 12px;
  color: ${admin.blue500};
  text-decoration: underline;

  &:hover {
    color: ${admin.blue700};
  }
`;

export const AdminTitleLink = styled(Link)`
  font-size: 14px;
  font-weight: 500;
  color: ${admin.gray800};
  text-decoration: none;
  display: block;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;

  &:hover {
    color: ${admin.primary};
    text-decoration: underline;
  }
`;

export const AdminTextClamp1 = styled.span`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const AdminFlexRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const AdminFlexRowWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
`;

export const AdminFlexRowBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AdminFlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-top: 16px;
`;

export const AdminFlexGap1 = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const AdminFlexGap2 = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const AdminFlexGap3 = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const AdminFlexGap3Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
`;

export const AdminFlexGap6 = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const AdminFlexEnd = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;
`;

export const AdminLabelRow = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: ${admin.gray700};
  cursor: pointer;
  user-select: none;
`;

export const AdminFormActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
`;

export const AdminPagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-top: 16px;
`;

export const AdminPageButton = styled.button<{ $active?: boolean }>`
  appearance: none;
  cursor: pointer;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  font-size: 12px;
  transition: background-color 0.15s ease, color 0.15s ease, border-color 0.15s ease,
    opacity 0.15s ease;
  border: 1px solid ${({ $active }) => ($active ? admin.primary : admin.gray200)};
  background: ${({ $active }) => ($active ? admin.primary : "#fff")};
  color: ${({ $active }) => ($active ? "#fff" : admin.gray500)};
  font-weight: ${({ $active }) => ($active ? 600 : 400)};

  &:hover:not(:disabled) {
    background: ${({ $active }) => ($active ? admin.primary : admin.gray50)};
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

export const AdminPageButtonSm = styled.button<{ $active?: boolean }>`
  appearance: none;
  cursor: pointer;
  padding: 4px 10px;
  font-size: 12px;
  border-radius: 6px;
  border: 1px solid ${({ $active }) => ($active ? admin.primary : admin.gray200)};
  background: ${({ $active }) => ($active ? admin.primary : "#fff")};
  color: ${({ $active }) => ($active ? "#fff" : admin.gray600)};
  transition: background-color 0.15s ease, color 0.15s ease;

  &:hover:not(:disabled) {
    background: ${({ $active }) => ($active ? admin.primary : admin.gray50)};
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

export const AdminBadge = styled.span<{ $tone?: "gray" | "blue" | "violet" | "red" | "green" }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 4px;
  margin-right: 6px;
  flex-shrink: 0;

  ${({ $tone = "gray" }) => {
    switch ($tone) {
      case "blue":
        return css`
          background: ${admin.blue100};
          color: ${admin.blue600};
        `;
      case "violet":
        return css`
          background: #ede9fe;
          color: #7c3aed;
        `;
      case "red":
        return css`
          background: ${admin.red100};
          color: ${admin.red600};
        `;
      case "green":
        return css`
          background: #dcfce7;
          color: #15803d;
        `;
      default:
        return css`
          background: ${admin.gray100};
          color: ${admin.gray500};
        `;
    }
  }}
`;

export const AdminBadgePill = styled.span<{ $tone: "green" | "gray" }>`
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border-radius: 999px;
  font-size: 10px;
  font-weight: 700;

  ${({ $tone }) =>
    $tone === "green"
      ? css`
          background: #dcfce7;
          color: #15803d;
        `
      : css`
          background: ${admin.gray100};
          color: ${admin.gray500};
        `}
`;

export const AdminBadgeNew = styled.span`
  display: inline-flex;
  align-items: center;
  font-size: 12px;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 999px;
  background: ${admin.red100};
  color: ${admin.red600};
`;

export const AdminTag = styled.span`
  font-size: 12px;
  background: ${admin.gray100};
  color: ${admin.gray600};
  padding: 2px 8px;
  border-radius: 999px;
`;

export const AdminMutedSmall = styled.span`
  font-size: 12px;
  color: ${admin.gray400};
`;

export const AdminMutedXs = styled.span`
  font-size: 10px;
  color: ${admin.gray400};
  flex-shrink: 0;
  margin-left: 4px;
`;

export const AdminAuthorBadge = styled.span<{ $color: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 999px;
  font-size: 10px;
  font-weight: 700;
  color: #fff;
  flex-shrink: 0;
  background: ${({ $color }) => $color};
`;

export const AdminDl = styled.dl`
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: 14px;
`;

export const AdminDlRow = styled.div`
  display: flex;
  gap: 12px;
`;

export const AdminDt = styled.dt`
  width: 80px;
  flex-shrink: 0;
  color: ${admin.gray400};
`;

export const AdminDd = styled.dd`
  margin: 0;
  flex: 1;
  color: ${admin.gray800};
  word-break: break-all;
`;

export const AdminDdBlock = styled.dd`
  margin: 0;
  color: ${admin.gray800};
  background: ${admin.gray50};
  border-radius: 8px;
  padding: 12px;
  white-space: pre-wrap;
  line-height: 1.625;
`;

export const AdminTableShell = styled.div`
  background: #fff;
  border: 1px solid ${admin.gray200};
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 16px;
`;

export const AdminTableForm = styled(AdminTableShell)`
  margin-bottom: 16px;
`;

export const AdminFormLabelCell = styled.td`
  padding: 12px 20px;
  width: 112px;
  background: ${admin.gray50};
  color: ${admin.gray600};
  font-size: 12px;
  font-weight: 500;
  vertical-align: middle;
  border-bottom: 1px solid ${admin.gray100};
`;

export const AdminFormLabelCellTop = styled(AdminFormLabelCell)`
  vertical-align: top;
  padding-top: 16px;
`;

export const AdminFormValueCell = styled.td`
  padding: 12px 20px;
  border-bottom: 1px solid ${admin.gray100};
`;

export const AdminFormTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;

  & tr:last-child td {
    border-bottom: none;
  }
`;

export const AdminFileRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`;

export const AdminFileButton = styled.button`
  appearance: none;
  cursor: pointer;
  padding: 6px 12px;
  border: 1px solid ${admin.gray300};
  border-radius: 6px;
  font-size: 12px;
  color: ${admin.gray600};
  background: #fff;

  &:hover {
    background: ${admin.gray50};
  }
`;

export const AdminTabsBar = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 24px;
  border-bottom: 1px solid ${admin.gray200};
`;

export const AdminTabButton = styled.button<{ $active?: boolean }>`
  appearance: none;
  cursor: pointer;
  border: none;
  background: transparent;
  padding: 8px 20px;
  font-size: 14px;
  font-weight: 500;
  border-bottom: 2px solid
    ${({ $active }) => ($active ? admin.primary : "transparent")};
  color: ${({ $active }) => ($active ? admin.primary : admin.gray500)};
  margin-bottom: -1px;
  transition: color 0.15s ease, border-color 0.15s ease;

  &:hover {
    color: ${({ $active }) => ($active ? admin.primary : admin.gray700)};
  }
`;

export const AdminTabButtonSm = styled.button<{ $active?: boolean }>`
  appearance: none;
  cursor: pointer;
  border: none;
  background: ${({ $active }) => ($active ? admin.primarySoft : "transparent")};
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  border-bottom: 2px solid
    ${({ $active }) => ($active ? admin.primary : "transparent")};
  color: ${({ $active }) => ($active ? admin.primary : admin.gray500)};
  margin-bottom: -1px;
  border-radius: 8px 8px 0 0;
  transition: color 0.15s ease, border-color 0.15s ease, background 0.15s ease;

  &:hover {
    color: ${({ $active }) => ($active ? admin.primary : admin.gray700)};
    background: ${({ $active }) => ($active ? admin.primarySoft : admin.gray50)};
  }
`;

export const AdminHtmlPreview = styled.div`
  font-size: 14px;
  line-height: 1.6;
  color: ${admin.gray800};
  width: 100%;
  padding: 16px;

  & p {
    margin: 0 0 0.5em;
  }

  & h1,
  & h2,
  & h3 {
    margin: 0.5em 0;
    font-weight: 700;
  }

  & ul,
  & ol {
    margin: 0 0 0.5em;
    padding-left: 1.25rem;
  }

  & img {
    max-width: 100%;
    height: auto;
  }

  & a {
    color: ${admin.blue500};
    text-decoration: underline;
  }
`;

export const AdminScrollArea = styled.div`
  flex: 1;
  overflow-y: auto;
  width: 100%;
  max-height: 60vh;
`;

export const AdminScrollAreaLg = styled.div`
  flex: 1;
  overflow-y: auto;
  background: ${admin.gray100};
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 400px;
`;

export const AdminPreviewHint = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  font-size: 12px;
  color: ${admin.gray400};
`;

export const AdminPreviewFrame = styled.div<{
  $width: number;
  $height?: number | null;
}>`
  background: #fff;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border: 1px solid ${admin.gray100};
  border-radius: 12px;
  width: ${({ $width }) => Math.min($width, 560)}px;
  max-width: 100%;
  ${({ $height }) =>
    $height != null && $height > 0
      ? `height: ${$height}px;`
      : "min-height: 200px;"}
`;

export const AdminPreviewFooter = styled.div`
  background: #f8f9fa;
  border-top: 1px solid ${admin.gray200};
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
`;

export const AdminPreviewCloseCaption = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: ${admin.gray600};
`;

export const AdminModalFooterBar = styled.div`
  padding: 16px 24px;
  border-top: 1px solid ${admin.gray200};
  background: ${admin.gray50};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
`;

export const AdminModalHeaderBar = styled.div`
  padding: 16px 24px;
  border-bottom: 1px solid ${admin.gray200};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AdminModalWide = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 48rem;
  max-height: 90vh;
  overflow: hidden;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
`;

export const AdminSpan = styled.span<{ $size?: "xs" | "sm"; $color?: "muted" | "danger" }>`
  font-size: ${({ $size }) => ($size === "xs" ? "12px" : "14px")};
  color: ${({ $color }) =>
    $color === "danger" ? admin.red400 : admin.gray500};
`;

export const AdminCode = styled.code`
  background: #fef3c7;
  padding: 2px 4px;
  border-radius: 4px;
  font-family: ui-monospace, monospace;
  font-size: 12px;
`;

export const AdminOl = styled.ol`
  margin: 0;
  padding-left: 1.25rem;
  font-size: 12px;
  color: #b45309;
  line-height: 1.625;
`;

export const AdminAlertBox = styled.div<{ $tone: "amber" | "red" }>`
  border-radius: 12px;
  padding: ${({ $tone }) => ($tone === "amber" ? "20px" : "16px")};
  ${({ $tone }) =>
    $tone === "amber"
      ? css`
          background: #fffbeb;
          border: 1px solid #fde68a;
        `
      : css`
          background: ${admin.red50};
          border: 1px solid ${admin.red100};
        `}
`;

export const AdminAlertTitle = styled.p<{ $tone: "amber" | "red" }>`
  margin: 0 0 8px;
  font-size: 14px;
  font-weight: 600;
  color: ${({ $tone }) => ($tone === "amber" ? "#b45309" : admin.red600)};
`;

export const AdminAlertText = styled.p`
  margin: 4px 0 0;
  font-size: 12px;
  color: ${admin.red400};
`;

export const AdminTilde = styled.span`
  color: ${admin.gray400};
  font-size: 12px;
`;

/** `<input type="file" />` 등 — 레이아웃에서 숨김 */
export const AdminHiddenInput = styled.input`
  display: none;
`;

/** 툴바·검색줄에서 가로로 채우는 입력 */
export const AdminInputGrow = styled(AdminInput)`
  flex: 1;
  min-width: 0;
`;

/** 팝업 «상세 메뉴» 등 토글 칩 */
export const AdminChipButton = styled.button<{ $active?: boolean }>`
  appearance: none;
  cursor: pointer;
  padding: 6px 12px;
  font-size: 12px;
  border-radius: 999px;
  border: 1px solid ${({ $active }) => ($active ? admin.primary : admin.gray200)};
  background: ${({ $active }) => ($active ? admin.primary : "#fff")};
  color: ${({ $active }) => ($active ? "#fff" : admin.gray600)};
  transition: background-color 0.15s ease, color 0.15s ease, border-color 0.15s ease;

  &:hover:not(:disabled) {
    background: ${({ $active }) => ($active ? admin.primary : admin.gray50)};
  }
`;

export const AdminNumberField = styled(AdminInput)`
  width: 80px;
`;

export const AdminHelpIconButton = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 999px;
  border: none;
  background: ${admin.gray200};
  color: ${admin.gray500};
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  transition: background 0.15s ease, color 0.15s ease;

  &:hover {
    background: ${admin.gray300};
    color: ${admin.gray700};
  }
`;

export const AdminLegalPre = styled.pre`
  margin: 0;
  white-space: pre-wrap;
  font-family: inherit;
  font-size: 14px;
  color: ${admin.gray700};
  line-height: 1.625;
`;

export const AdminTableWide = styled(AdminTableShell)`
  overflow-x: auto;
`;

export const AdminPagerText = styled.span`
  margin-left: 8px;
  font-size: 12px;
  color: ${admin.gray400};
`;

/** 회원·약관 목록 등 컴팩트 « ‹ › » */
export const AdminPagerNav = styled.button`
  appearance: none;
  cursor: pointer;
  padding: 4px 8px;
  font-size: 12px;
  border: 1px solid ${admin.gray200};
  border-radius: 6px;
  background: #fff;
  color: ${admin.gray600};
  transition: background 0.15s ease;

  &:hover:not(:disabled) {
    background: ${admin.gray50};
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

export const AdminPagerPage = styled.button<{ $active?: boolean }>`
  appearance: none;
  cursor: pointer;
  padding: 4px 10px;
  font-size: 12px;
  border-radius: 6px;
  border: 1px solid ${({ $active }) => ($active ? admin.primary : admin.gray200)};
  background: ${({ $active }) => ($active ? admin.primary : "#fff")};
  color: ${({ $active }) => ($active ? "#fff" : admin.gray600)};
  transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;

  &:hover:not(:disabled) {
    background: ${({ $active }) => ($active ? admin.primary : admin.gray50)};
  }
`;

export const AdminEllipsis = styled.span`
  padding: 0 4px;
  font-size: 12px;
  color: ${admin.gray400};
`;

export const AdminRequiredMark = styled.span`
  color: ${admin.red500};
`;

export const AdminInlineStrong = styled.strong`
  color: ${admin.gray800};
  font-weight: 700;
`;

export const AdminPermTable = styled.table`
  width: 100%;
  font-size: 12px;
  border-collapse: collapse;
`;

export const AdminPermTh = styled.th<{ $align?: "left" | "center"; $tone?: "red" | "blue" }>`
  border: 1px solid ${admin.gray200};
  padding: 10px 16px;
  text-align: ${({ $align = "left" }) => $align};
  font-weight: 600;
  background: ${admin.gray50};
  color: ${({ $tone }) => {
    if ($tone === "red") return "#ef4444";
    if ($tone === "blue") return "#3b82f6";
    return admin.gray600;
  }};
`;

export const AdminPermTd = styled.td<{ $align?: "left" | "center"; $striped?: boolean }>`
  border: 1px solid ${admin.gray200};
  padding: 10px 16px;
  text-align: ${({ $align = "left" }) => $align};
  color: ${admin.gray700};
  background: ${({ $striped }) => ($striped ? "rgba(249, 250, 251, 0.5)" : "#fff")};
`;

export const AdminCheckMark = styled.span`
  color: #22c55e;
  font-weight: 700;
  font-size: 14px;
`;

export const AdminDashMark = styled.span`
  color: ${admin.gray300};
  font-size: 14px;
`;

export const AdminAuthorText = styled.span`
  font-size: 12px;
  color: ${admin.gray600};
  max-width: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const AdminUppercaseStrong = styled.span`
  font-size: 12px;
  color: ${admin.gray500};
  font-weight: 700;
  text-transform: uppercase;
`;

export const AdminTdTruncate = styled(AdminTd)`
  max-width: 14rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const AdminTdClamp = styled(AdminTd)`
  display: table-cell;
  max-width: 0;
`;

export const AdminScheduleCell = styled(AdminTd)`
  white-space: nowrap;
  width: 14rem;
`;

export const AdminGreenBadge = styled.span`
  display: inline-block;
  background: #22c55e;
  color: #fff;
  font-size: 10px;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 4px;
`;

export const AdminGrayBadge = styled.span`
  display: inline-block;
  background: ${admin.gray300};
  color: ${admin.gray700};
  font-size: 10px;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 4px;
`;

export const AdminNoticePinBadge = styled.span`
  display: inline-block;
  background: ${admin.primary};
  color: #fff;
  font-size: 10px;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 4px;
`;

export const AdminUnreadBadge = styled.span`
  background: ${admin.red500};
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 999px;
`;

export const AdminDetailBlockLabel = styled.p`
  margin: 0 0 8px;
  font-size: 12px;
  color: ${admin.gray500};
`;

export const AdminCategoryTag = styled.span`
  font-size: 12px;
  background: ${admin.gray100};
  color: ${admin.gray600};
  padding: 2px 8px;
  border-radius: 999px;
`;

export const AdminNewPill = styled.span`
  font-size: 12px;
  background: ${admin.red100};
  color: ${admin.red600};
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 999px;
`;

export const AdminReadLabel = styled.span`
  font-size: 12px;
  color: ${admin.gray400};
`;

export const AdminFlexColGap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const AdminDatetimeRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
`;

export const AdminDatetimeLabel = styled.span`
  width: 64px;
  flex-shrink: 0;
`;

export const AdminFormNote = styled.p`
  margin: 4px 0 0;
  font-size: 12px;
  color: ${admin.gray400};
`;

export const AdminMutedBlock = styled.p`
  margin: 0 0 12px;
  font-size: 12px;
  color: ${admin.gray500};
`;

export const AdminFlexEndBar = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
`;

export const AdminFlexBetweenBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;

export const AdminFooterHint = styled.span`
  font-size: 12px;
  color: ${admin.gray500};
  margin-right: auto;
`;

export const AdminLinkBtnXs = styled(AdminLinkPrimary)`
  padding: 4px 10px;
  font-size: 12px;
`;

export const AdminBtnBlue = styled.button`
  appearance: none;
  cursor: pointer;
  padding: 4px 10px;
  background: ${admin.blue500};
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 11px;
  transition: background 0.15s ease;

  &:hover:not(:disabled) {
    background: ${admin.blue600};
  }
`;

export const AdminBtnOutlineBlue = styled.button`
  appearance: none;
  cursor: pointer;
  padding: 4px 10px;
  border: 1px solid ${admin.blue100};
  color: ${admin.blue500};
  background: #fff;
  border-radius: 6px;
  font-size: 11px;
  transition: background 0.15s ease;

  &:hover:not(:disabled) {
    background: ${admin.blue50};
  }
`;

export const AdminBtnLgBlue = styled(AdminBtnBlue)`
  padding: 10px 24px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 8px;
`;

export const AdminBtnOutlineBlueLg = styled(AdminBtnOutlineBlue)`
  padding: 10px 16px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 8px;
`;

export const AdminLegalHeaderBar = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
`;

export const AdminGreenDotText = styled.span`
  color: #16a34a;
  font-weight: 500;
`;

export const AdminFormHeaderBar = styled.div`
  padding: 12px 16px;
  background: ${admin.gray50};
  border-bottom: 1px solid ${admin.gray200};
`;

export const AdminLegalViewCard = styled.div`
  background: #fff;
  border: 1px solid ${admin.gray200};
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 16px;
`;

export const AdminFlexGap1Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  flex-wrap: wrap;
`;

export const AdminMemberMeta = styled.div`
  text-align: center;
  color: ${admin.gray500};
  line-height: 1.375;
`;

export const AdminMemberMetaSub = styled.div`
  color: ${admin.gray400};
  font-size: 10px;
`;

export const AdminLegalEditHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`;

export const AdminLegalEditTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${admin.gray800};
`;

export const AdminBackTextBtn = styled.button`
  appearance: none;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 14px;
  color: ${admin.gray500};
  padding: 0;

  &:hover {
    color: ${admin.gray800};
  }
`;

export const AdminFormTableRow = styled.tr`
  border-bottom: 1px solid ${admin.gray100};

  &:last-child {
    border-bottom: none;
  }
`;

export const AdminLabelCellNarrow = styled(AdminFormLabelCell)`
  width: 144px;
`;

export const AdminInputW72 = styled(AdminInput)`
  max-width: 18rem;
`;

export const AdminInputFixedSm = styled(AdminInput)`
  width: 112px;
`;

export const AdminInputFixedMd = styled(AdminInput)`
  width: 144px;
`;

export const AdminAuthorName = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${admin.gray800};
  padding: 4px 8px;
`;

/** 테이블 셀 내부 가로 중앙 정렬 (작성자 아바타 등) */
export const AdminCellHCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
`;
