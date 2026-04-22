"use client";

import styled, { css } from "styled-components";
import { admin } from "./AdminCommon.styles";

export const EditorRoot = styled.div`
  border: 1px solid ${admin.gray200};
  border-radius: 8px;
  overflow: hidden;
`;

export const EditorPanel = styled.div<{ $visible?: boolean }>`
  display: ${({ $visible }) => ($visible ? "block" : "none")};
`;

export const EditorLoading = styled.div`
  min-height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${admin.gray50};
  font-size: 14px;
  color: ${admin.gray400};
`;

export const HtmlTextarea = styled.textarea`
  width: 100%;
  min-height: 320px;
  padding: 16px;
  font-size: 12px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  color: ${admin.gray700};
  background: ${admin.gray50};
  resize: vertical;
  border: none;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }
`;

export const PlainPreview = styled.div`
  min-height: 320px;
  padding: 16px;
  font-size: 14px;
  color: ${admin.gray600};
  white-space: pre-wrap;
  line-height: 1.625;
`;

export const PlainPreviewEmpty = styled.span`
  color: ${admin.gray300};
`;

export const TabBar = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid ${admin.gray200};
  background: ${admin.gray50};
`;

export const TabButton = styled.button<{ $active?: boolean }>`
  appearance: none;
  cursor: pointer;
  font-family: inherit;
  border: none;
  border-right: 1px solid ${admin.gray200};
  padding: 8px 20px;
  font-size: 12px;
  font-weight: 500;
  transition: color 0.15s ease, background 0.15s ease;
  background: ${({ $active }) => ($active ? "#fff" : "transparent")};
  color: ${({ $active }) => ($active ? admin.primary : admin.gray400)};

  &:last-of-type {
    border-right: none;
  }

  &:hover {
    color: ${({ $active }) => ($active ? admin.primary : admin.gray600)};
    background: ${({ $active }) => ($active ? "#fff" : "rgba(255,255,255,0.6)")};
  }

  ${({ $active }) =>
    $active &&
    css`
      font-weight: 600;
    `}
`;
