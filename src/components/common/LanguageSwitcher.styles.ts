import styled from "styled-components";
import Link from "next/link";
import { colors } from "@/styles/theme";

const nspAccent = "#39d2cc";

export type LanguageSwitcherVariant =
  | "footer"
  | "headerMobile"
  | "nspTopBar"
  | "nspMobile"
  | "nspFooter";

export const Root = styled.span<{ $variant: LanguageSwitcherVariant }>`
  display: flex;
  align-items: center;
  gap: ${({ $variant }) => {
    if ($variant === "footer") return "0.5rem";
    if ($variant === "nspFooter") return "0.25rem";
    return "1rem";
  }};
  font-size: ${({ $variant }) =>
    $variant === "nspFooter" ? "13px" : "14px"};
  color: ${({ $variant }) => {
    if ($variant === "nspFooter") return "#666666";
    if ($variant === "nspTopBar") return "#ffffff";
    return "#6b7280";
  }};
`;

export const LocaleLink = styled(Link)<{
  $variant: LanguageSwitcherVariant;
}>`
  transition: color 0.15s, opacity 0.15s;
  color: inherit;

  ${({ $variant }) =>
    $variant === "nspTopBar" &&
    `
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    opacity: 0.6;
    &:hover {
      opacity: 1;
      color: ${nspAccent};
    }
  `}

  ${({ $variant }) =>
    $variant === "footer" &&
    `
    &:hover {
      color: ${colors.primary};
    }
  `}

  ${({ $variant }) =>
    $variant === "headerMobile" &&
    `
    &:hover {
      color: ${colors.primary};
    }
  `}

  ${({ $variant }) =>
    $variant === "nspMobile" &&
    `
    color: #9ca3af;
    &:hover {
      color: ${nspAccent};
    }
  `}

  ${({ $variant }) =>
    $variant === "nspFooter" &&
    `
    &:hover {
      color: ${nspAccent};
    }
  `}
`;

export const SeparatorSpan = styled.span`
  color: #666666;
`;
