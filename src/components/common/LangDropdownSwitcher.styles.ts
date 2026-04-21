import styled from "styled-components";
import Link from "next/link";
import { colors } from "@/styles/theme";

export const Wrap = styled.div`
  position: relative;
  margin-left: 0.75rem;
`;

export const ToggleButton = styled.button<{ $scrolled: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 22px;
  border-radius: 100px;
  border: 1px solid
    ${({ $scrolled }) => ($scrolled ? "#111111" : "#ffffff")};
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  transition: color 0.2s, border-color 0.2s, opacity 0.2s;
  background: transparent;
  cursor: pointer;
  color: ${({ $scrolled }) => ($scrolled ? "#111111" : "#ffffff")};

  &:hover {
    opacity: 0.85;
  }
`;

export const ChevronIcon = styled.svg<{ $open: boolean }>`
  width: 16px;
  height: 16px;
  transition: transform 0.2s;
  transform: ${({ $open }) => ($open ? "rotate(180deg)" : "none")};
`;

export const Dropdown = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  background: #fff;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 0.375rem 0;
  min-width: 110px;
  z-index: 50;
  border: 1px solid #f3f4f6;
`;

export const DropdownLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 14px;
  color: #4b5563;
  transition: color 0.15s, background 0.15s;

  &:hover {
    color: ${colors.primary};
    background: #f9fafb;
  }
`;

export const ShortLabel = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: #9ca3af;
  width: 24px;
`;
