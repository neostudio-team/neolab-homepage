"use client";

import Link from "next/link";
import styled, { css } from "styled-components";
import { admin } from "./AdminCommon.styles";

export const DashLoadingWrap = styled.div`
  padding: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
`;

export const DashLoadingText = styled.div`
  font-size: 14px;
  color: ${admin.gray400};
`;

export const DashHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 32px;
`;

export const DashTitle = styled.h1`
  margin: 0;
  font-size: 24px;
  font-weight: 700;
  color: ${admin.gray800};
`;

export const DashSubtitle = styled.p`
  margin: 4px 0 0;
  font-size: 14px;
  color: ${admin.gray400};
`;

export const DashDatePill = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  color: ${admin.gray600};
  background: #fff;
  border: 1px solid ${admin.gray200};
  padding: 8px 16px;
  border-radius: 8px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
`;

export const DashCardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
  margin-bottom: 32px;

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

export const DashBoardCard = styled.div`
  background: #fff;
  border-radius: 16px;
  border: 1px solid #f3f4f6;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const DashBoardCardHeader = styled.div<{ $gradient: string }>`
  background: ${({ $gradient }) => $gradient};
  padding: 16px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DashBoardCardHeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const DashBoardIcon = styled.span`
  font-size: 20px;
  line-height: 1;
`;

export const DashBoardLabel = styled.span`
  color: #fff;
  font-weight: 600;
  font-size: 14px;
`;

export const DashBoardCount = styled.span`
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
`;

export const DashBoardList = styled.div`
  flex: 1;

  & > * + * {
    border-top: 1px solid #f9fafb;
  }
`;

export const DashBoardListEmpty = styled.p`
  margin: 0;
  padding: 32px 16px;
  text-align: center;
  font-size: 12px;
  color: ${admin.gray400};
`;

export const DashBoardRow = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 10px 16px;
`;

export const DashBoardRowTitle = styled.span`
  flex: 1;
  font-size: 12px;
  color: ${admin.gray700};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const DashBoardRowMeta = styled.span`
  font-size: 10px;
  color: ${admin.gray400};
  flex-shrink: 0;
  margin-left: 4px;
`;

export const DashBoardFooter = styled.div`
  padding: 12px 16px;
  border-top: 1px solid #f3f4f6;
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const DashFooterMutedLink = styled(Link)`
  font-size: 12px;
  color: ${admin.gray500};
  text-decoration: none;
  transition: color 0.15s ease;

  &:hover {
    color: ${admin.gray800};
  }
`;

export const DashFooterSep = styled.span`
  color: ${admin.gray200};
  user-select: none;
`;

export const DashFooterBlueLink = styled(Link)`
  font-size: 12px;
  font-weight: 500;
  color: ${admin.blue500};
  text-decoration: none;
  transition: color 0.15s ease;

  &:hover {
    color: ${admin.blue700};
  }
`;

export const DashBadgeNotice = styled.span`
  display: inline-flex;
  align-items: center;
  font-size: 10px;
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 4px;
  margin-right: 6px;
  flex-shrink: 0;
  background: ${admin.blue100};
  color: ${admin.blue600};
`;

export const DashBadgeNoticeViolet = styled(DashBadgeNotice)`
  background: #ede9fe;
  color: #7c3aed;
`;

export const DashBadgeNew = styled(DashBadgeNotice)`
  background: ${admin.red100};
  color: ${admin.red600};
`;

export const DashGASection = styled.div`
  background: #fff;
  border-radius: 16px;
  border: 1px solid #f3f4f6;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  padding: 24px;
`;

export const DashGAHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 20px;
`;

export const DashGAH2 = styled.h2`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  color: ${admin.gray800};
`;

export const DashGASub = styled.p`
  margin: 2px 0 0;
  font-size: 12px;
  color: ${admin.gray400};
`;

export const DashGAToolbar = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
`;

export const DashGAPresetWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

export const DashGAPresetBtn = styled.button<{ $active?: boolean }>`
  appearance: none;
  cursor: pointer;
  padding: 6px 12px;
  font-size: 12px;
  font-weight: 500;
  border-radius: 8px;
  border: 1px solid ${admin.gray200};
  transition: background-color 0.15s ease, color 0.15s ease, border-color 0.15s ease;

  ${({ $active }) =>
    $active
      ? css`
          background: ${admin.primary};
          color: #fff;
          border-color: ${admin.primary};
        `
      : css`
          background: #fff;
          color: ${admin.gray600};

          &:hover {
            background: ${admin.gray50};
          }
        `}
`;

export const DashGADateRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const DashGAInput = styled.input`
  border: 1px solid ${admin.gray200};
  border-radius: 8px;
  padding: 6px 8px;
  font-size: 12px;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${admin.ring};
  }
`;

export const DashGABtn = styled.button`
  appearance: none;
  cursor: pointer;
  padding: 6px 12px;
  font-size: 12px;
  background: ${admin.primary};
  color: #fff;
  border: none;
  border-radius: 8px;
  transition: background 0.15s ease, opacity 0.15s ease;

  &:hover:not(:disabled) {
    background: ${admin.primaryHover2};
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

export const DashGABadgeOk = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: #059669;
  background: #ecfdf5;
  padding: 4px 12px;
  border-radius: 999px;
`;

export const DashGABadgeWait = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: ${admin.gray400};
  background: ${admin.gray50};
  padding: 4px 12px;
  border-radius: 999px;
`;

export const DashGAAlertAmber = styled.div`
  border-radius: 12px;
  background: #fffbeb;
  border: 1px solid #fde68a;
  padding: 20px;
`;

export const DashGAAlertAmberTitle = styled.p`
  margin: 0 0 8px;
  font-size: 14px;
  font-weight: 600;
  color: #b45309;
`;

export const DashGAAlertAmberOl = styled.ol`
  margin: 0;
  padding-left: 1.25rem;
  font-size: 12px;
  color: #d97706;
  line-height: 1.625;

  & li + li {
    margin-top: 4px;
  }
`;

export const DashGAAlertAmberCode = styled.code`
  background: #fef3c7;
  padding: 2px 4px;
  border-radius: 4px;
  font-family: ui-monospace, monospace;
  font-size: 12px;
`;

export const DashGAAlertRed = styled.div`
  border-radius: 12px;
  background: ${admin.red50};
  border: 1px solid ${admin.red100};
  padding: 16px;
`;

export const DashGAAlertRedTitle = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: ${admin.red600};
`;

export const DashGAAlertRedText = styled.p`
  margin: 4px 0 0;
  font-size: 12px;
  color: ${admin.red400};
`;

export const DashGAMetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  margin-bottom: 24px;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

export const DashGAMetricCard = styled.div<{ $bg: string }>`
  border-radius: 12px;
  padding: 16px;
  background: ${({ $bg }) => $bg};
`;

export const DashGAMetricTop = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 8px;
`;

export const DashGAMetricSub = styled.span`
  font-size: 12px;
  color: ${admin.gray500};
`;

export const DashGAMetricValue = styled.p<{ $color: string }>`
  margin: 0;
  font-size: 24px;
  font-weight: 700;
  color: ${({ $color }) => $color};
`;

export const DashGAMetricLabel = styled.p`
  margin: 2px 0 0;
  font-size: 12px;
  color: ${admin.gray500};
`;

export const DashGATabBar = styled.div`
  border-bottom: 1px solid #f3f4f6;
  margin-bottom: 20px;
`;

export const DashGATabRow = styled.div`
  display: flex;
  gap: 4px;
`;

export const DashGATabBtn = styled.button<{ $active?: boolean }>`
  appearance: none;
  cursor: pointer;
  border: none;
  background: ${({ $active }) => ($active ? admin.primarySoft : "transparent")};
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 8px 8px 0 0;
  border-bottom: 2px solid
    ${({ $active }) => ($active ? admin.primary : "transparent")};
  color: ${({ $active }) => ($active ? admin.primary : admin.gray500)};
  margin-bottom: -1px;
  transition: color 0.15s ease, border-color 0.15s ease, background 0.15s ease;

  &:hover {
    color: ${({ $active }) => ($active ? admin.primary : admin.gray700)};
    background: ${({ $active }) => ($active ? admin.primarySoft : admin.gray50)};
  }
`;

export const DashGA2Col = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const DashGAH3 = styled.h3`
  margin: 0 0 12px;
  font-size: 14px;
  font-weight: 600;
  color: ${admin.gray700};
`;

export const DashGAListStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const DashGAListStackLg = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const DashGARow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const DashGANum = styled.span`
  font-size: 12px;
  color: ${admin.gray400};
  width: 16px;
  text-align: right;
  flex-shrink: 0;
`;

export const DashGAFlag = styled.span`
  font-size: 14px;
  flex-shrink: 0;
`;

export const DashGACountry = styled.span`
  font-size: 12px;
  color: ${admin.gray700};
  width: 80px;
  flex-shrink: 0;
`;

export const DashGABarTrack = styled.div`
  flex: 1;
  background: ${admin.gray100};
  border-radius: 999px;
  height: 6px;
  overflow: hidden;
`;

export const DashGABarFill = styled.div<{ $widthPct: number; $fill: string }>`
  height: 6px;
  border-radius: 999px;
  width: ${({ $widthPct }) => $widthPct}%;
  background: ${({ $fill }) => $fill};
`;

export const DashGABarTrackSm = styled(DashGABarTrack)`
  height: 4px;
  min-width: 64px;
`;

export const DashGABarFillSm = styled.div<{ $widthPct: number; $fill: string }>`
  height: 4px;
  border-radius: 999px;
  width: ${({ $widthPct }) => $widthPct}%;
  background: ${({ $fill }) => $fill};
`;

export const DashGAStat = styled.span`
  font-size: 12px;
  color: ${admin.gray500};
  width: 56px;
  text-align: right;
  flex-shrink: 0;
`;

export const DashGAPct = styled.span`
  font-size: 12px;
  color: ${admin.gray400};
  width: 32px;
  text-align: right;
  flex-shrink: 0;
`;

export const DashGASvg = styled.svg`
  width: 100%;
  display: block;
`;

export const DashGAPagesHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const DashGAPageSectionTitle = styled.h3`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: ${admin.gray700};
`;

export const DashGAPagesCaption = styled.span`
  font-size: 12px;
  color: ${admin.gray400};
`;

export const DashGATableScroll = styled.div`
  overflow-x: auto;
`;

export const DashGAPagesTable = styled.table`
  width: 100%;
  font-size: 12px;
  border-collapse: collapse;
`;

export const DashGAPagesTh = styled.th<{ $align?: "left" | "right"; $w?: string }>`
  text-align: ${({ $align = "left" }) => $align};
  padding: 0 16px 8px 0;
  font-weight: 500;
  color: ${admin.gray500};
  border-bottom: 1px solid #f3f4f6;
  ${({ $w }) => $w && `width: ${$w};`}
`;

export const DashGAPagesTr = styled.tr`
  transition: background 0.15s ease;

  &:hover {
    background: rgba(249, 250, 251, 0.5);
  }

  & + & {
    border-top: 1px solid #f9fafb;
  }
`;

export const DashGAPagesTd = styled.td<{
  $align?: "left" | "right";
  $variant?: "default" | "violet" | "muted";
}>`
  padding: 10px 16px 10px 0;
  vertical-align: middle;
  text-align: ${({ $align = "left" }) => $align};
  color: ${({ $variant }) => {
    if ($variant === "violet") return "#6d28d9";
    if ($variant === "muted") return admin.gray500;
    return admin.gray400;
  }};
  font-weight: ${({ $variant }) => ($variant === "violet" ? 600 : 400)};
`;

export const DashGAPagePathRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const DashGAPagePath = styled.span`
  font-family: ui-monospace, monospace;
  font-size: 12px;
  color: ${admin.gray700};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 20rem;
`;

export const DashGASummaryGrid = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #f3f4f6;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
`;

export const DashGASummaryCell = styled.div`
  text-align: center;
`;

export const DashGASummaryLabel = styled.p`
  margin: 0 0 4px;
  font-size: 12px;
  color: ${admin.gray400};
`;

export const DashGASummaryValue = styled.p<{ $color: string }>`
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  color: ${({ $color }) => $color};
`;

export const DashChannelDot = styled.span<{ $color: string }>`
  width: 10px;
  height: 10px;
  border-radius: 999px;
  flex-shrink: 0;
  background: ${({ $color }) => $color};
`;

export const DashChannelName = styled.span`
  font-size: 12px;
  color: ${admin.gray700};
  width: 96px;
  flex-shrink: 0;
`;

export const DashEngageCard = styled.div<{ $bg: string }>`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-radius: 12px;
  background: ${({ $bg }) => $bg};
`;

export const DashEngageIcon = styled.span`
  font-size: 20px;
`;

export const DashEngageBody = styled.div`
  flex: 1;
`;

export const DashEngageDesc = styled.p`
  margin: 0;
  font-size: 12px;
  color: ${admin.gray500};
`;

export const DashEngageLabel = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 500;
  color: ${admin.gray700};
`;

export const DashEngageValue = styled.p<{ $color: string }>`
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  color: ${({ $color }) => $color};
`;
