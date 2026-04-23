import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { colors, media } from "@/styles/theme";

export const QuickToggleButton = styled.button`
  position: absolute;
  left: -38px;
  top: 0;
  width: 38px;
  height: 110px;
  background: #0f0000;
  color: #fff;
  border-radius: 12px 0 0 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s;
  border: none;
  padding: 0;

  &:hover {
    background: #ff4e00;
  }
`;

export const QuickLabel = styled.span`
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 0.2em;
  transform: rotate(270deg);
`;

export const QuickMenuWrapper = styled.div<{ $open: boolean }>`
  position: fixed;
  top: 200px;
  right: 0;
  z-index: 100;
  display: none;
  transition: transform 0.3s;
  transform: ${({ $open }) =>
    $open ? "translateX(0)" : "translateX(200px)"};

  ${media.lg} {
    display: flex;
  }
`;

export const QuickMenuPanel = styled.div`
  width: 200px;
  background: #fff;
  box-shadow: -5px 0 15px -5px rgba(0, 0, 0, 0.1);
  border-radius: 0 0 0 12px;
  border-left: 1px solid #f3f4f6;
  border-bottom: 1px solid #f3f4f6;
  border-top: 1px solid #f3f4f6;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const QuickMenuLink = styled(Link)<{ $noDivider?: boolean }>`
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  transition: color 0.2s;
  border-bottom: ${({ $noDivider }) =>
    $noDivider ? "none" : "1px solid #f9fafb"};
  padding-bottom: ${({ $noDivider }) => ($noDivider ? "0" : "0.5rem")};

  &:hover {
    color: #ff4e00;
  }
`;

export const HeaderContainer = styled.header<{
  $scrolled: boolean;
  $menuOpen: boolean;
}>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  width: 100%;
  display: flex;
  flex-direction: column;
  transition:
    background-color 0.25s ease,
    backdrop-filter 0.25s ease,
    box-shadow 0.25s ease;
  background: ${({ $scrolled, $menuOpen }) =>
    $scrolled || $menuOpen ? "#ffffff" : "rgba(255, 255, 255, 0.05)"};
  backdrop-filter: ${({ $scrolled, $menuOpen }) =>
    $scrolled || $menuOpen ? "none" : "blur(8px)"};
  -webkit-backdrop-filter: ${({ $scrolled, $menuOpen }) =>
    $scrolled || $menuOpen ? "none" : "blur(8px)"};
  box-shadow: ${({ $scrolled, $menuOpen }) =>
    $scrolled || $menuOpen ? "0 1px 2px rgba(0, 0, 0, 0.06)" : "none"};
`;

export const HeaderLogoImage = styled(Image)<{
  $scrolled: boolean;
  $menuOpen: boolean;
}>`
  transition: filter 0.25s ease;
  filter: ${({ $scrolled, $menuOpen }) =>
    $scrolled || $menuOpen ? "none" : "brightness(0) invert(1)"};
`;

export const HeaderInner = styled.div`
  width: 100%;
`;

export const NavBarRow = styled.div`
  width: 100%;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;

  ${media.md} {
    padding: 0 2.5rem;
    height: 88px;
  }

  ${media.lg} {
    padding: 0 clamp(40px, 8.3vw, 140px);
    height: 100px;
  }
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const DesktopNav = styled.nav`
  display: none;
  align-items: center;
  gap: 12px;

  ${media.lg} {
    display: flex;
  }
`;

export const NavItemWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100px;
`;

const navLabelBase = `
  padding: 8px 24px;
  font-family: Pretendard, sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 1;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: color 0.2s;
  letter-spacing: -0.01em;
  white-space: nowrap;

  @media (min-width: 1280px) {
    padding: 8px 32px;
    font-size: 20px;
  }
`;

export const NavParentLabel = styled.span<{
  $scrolled: boolean;
  $menuOpen: boolean;
  $active: boolean;
}>`
  ${navLabelBase}
  cursor: default;
  user-select: none;
  color: ${({ $scrolled, $menuOpen, $active }) => {
    if ($menuOpen) return $active ? "#111111" : "#d2d2d2";
    if ($scrolled) return "#111111";
    return "#ffffff";
  }};
`;

export const NavChevron = styled.svg`
  width: 14px;
  height: 14px;
`;

export const NavTopLink = styled(Link)<{
  $scrolled: boolean;
  $menuOpen: boolean;
}>`
  ${navLabelBase}
  text-decoration: none;
  color: ${({ $scrolled, $menuOpen }) => {
    if ($menuOpen) return "#d2d2d2";
    if ($scrolled) return "#111111";
    return "#ffffff";
  }};

  &:hover {
    color: ${({ $scrolled, $menuOpen }) =>
      $scrolled || $menuOpen ? "#111111" : "#ffffff"};
  }
`;

export const DropdownPanel = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: #ffffff;
  border-radius: 0 0 8px 8px;
  box-shadow: 0 8px 16px -6px rgba(0, 0, 0, 0.08);
  padding: 16px 0;
  min-width: 200px;
  z-index: 50;
`;

export const SubDropdownPanel = styled.div`
  display: none;
  position: absolute;
  left: 100%;
  top: 0;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 8px 16px -6px rgba(0, 0, 0, 0.08);
  padding: 8px 0;
  min-width: 220px;
`;

export const SubNavWrap = styled.div`
  position: relative;

  &:hover ${SubDropdownPanel} {
    display: block;
  }
`;

export const DropdownItemRow = styled.div`
  position: relative;
`;

export const DropdownDot = styled.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 999px;
  border: 2px solid #ff9900;
  background: #fff;
  margin-left: auto;
  opacity: 0;
  transition: opacity 0.15s;
`;

export const DropdownLink = styled(Link)<{ $active: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  font-family: Pretendard, sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.2;
  white-space: nowrap;
  text-decoration: none;
  color: ${({ $active }) => ($active ? "#ff9900" : "#111111")};
  transition: color 0.15s;

  ${DropdownDot} {
    opacity: ${({ $active }) => ($active ? 1 : 0)};
  }

  &:hover {
    color: #ff9900;
  }

  &:hover ${DropdownDot} {
    opacity: 1;
  }
`;

export const MobileMenuButton = styled.button`
  display: flex;
  padding: 0.5rem;
  background: none;
  border: none;
  cursor: pointer;

  ${media.lg} {
    display: none;
  }
`;

export const MobileMenuIcon = styled.svg<{
  $scrolled: boolean;
  $menuOpen: boolean;
}>`
  width: 24px;
  height: 24px;
  transition: color 0.2s;
  color: ${({ $scrolled, $menuOpen }) =>
    $scrolled || $menuOpen ? "#111111" : "#ffffff"};
`;

export const MobileNavPanel = styled.div`
  background: #fff;
  border-top: 1px solid #e5e7eb;

  ${media.lg} {
    display: none;
  }
`;

export const MobileNavLink = styled(Link)`
  display: block;
  padding: 0.75rem 1.5rem;
  font-size: 14px;
  color: #374151;
  border-bottom: 1px solid #f3f4f6;
  transition: color 0.15s, background 0.15s;

  &:hover {
    color: ${colors.primary};
    background: #f9fafb;
  }
`;

export const MobileLangRow = styled.div`
  padding: 0.75rem 1.5rem;
  display: flex;
  gap: 1rem;
  font-size: 14px;
`;
