import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { media } from "@/styles/theme";

const accent = "#39d2cc";

export const LangBar = styled.div`
  background: #000;
  color: #fff;
  font-size: 12px;
  line-height: 30px;
  padding-left: 1rem;
  padding-right: 1rem;
  text-align: right;
`;

export const LangBarInner = styled.div`
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;
`;

export const HeaderRoot = styled.header`
  background: #0a0a0a;
  position: sticky;
  top: 0;
  z-index: 50;
  height: 80px;
`;

export const HeaderInner = styled.div`
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
`;

export const LogoImage = styled(Image)``;

export const DesktopNav = styled.nav`
  display: none;
  align-items: center;
  height: 100%;

  ${media.lg} {
    display: flex;
  }
`;

export const NavItemWrap = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const NavTopLink = styled(Link)`
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  font-size: 14px;
  color: #fff;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  height: 100%;
  transition: color 0.15s;

  &:hover {
    color: ${accent};
  }
`;

export const NavChevron = styled.svg`
  width: 12px;
  height: 12px;
  margin-left: 2px;
`;

export const DropdownPanel = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: #0a0a0a;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2);
  padding: 0.5rem 0;
  min-width: 220px;
  z-index: 50;
  border-top: 1px solid #374151;
`;

export const DropdownLink = styled(Link)`
  display: block;
  padding: 0.625rem 1.25rem;
  font-size: 13px;
  color: #d1d5db;
  transition: color 0.15s, background 0.15s;

  &:hover {
    color: ${accent};
    background: #1a1a1a;
  }
`;

export const MobileMenuButton = styled.button`
  display: flex;
  padding: 0.5rem;
  color: #fff;
  background: none;
  border: none;
  cursor: pointer;

  ${media.lg} {
    display: none;
  }
`;

export const MobileMenuIcon = styled.svg`
  width: 24px;
  height: 24px;
`;

export const MobileNavPanel = styled.div`
  background: #0a0a0a;
  border-top: 1px solid #374151;

  ${media.lg} {
    display: none;
  }
`;

export const MobileBlock = styled.div``;

export const MobileTopLink = styled(Link)`
  display: block;
  padding: 0.75rem 1.5rem;
  font-size: 14px;
  color: #d1d5db;
  border-bottom: 1px solid #1f2937;
  transition: color 0.15s, background 0.15s;

  &:hover {
    color: ${accent};
    background: #1a1a1a;
  }
`;

export const MobileSubLink = styled(Link)`
  display: block;
  padding: 0.5rem 2.5rem;
  font-size: 14px;
  color: #9ca3af;
  transition: color 0.15s, background 0.15s;

  &:hover {
    color: ${accent};
    background: #1a1a1a;
  }
`;

export const MobileLangRow = styled.div`
  padding: 0.75rem 1.5rem;
  display: flex;
  gap: 1rem;
  font-size: 14px;
`;
