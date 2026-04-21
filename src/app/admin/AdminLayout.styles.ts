import styled from "styled-components";
import Link from "next/link";
import { colors } from "@/styles/theme";

export const BodyPlain = styled.body`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

export const LoadingScreen = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f9fafb;
`;

export const LoadingText = styled.div`
  color: #6b7280;
  font-size: 14px;
`;

export const Shell = styled.div`
  min-height: 100vh;
  display: flex;
  background: #f3f4f6;
`;

export const Sidebar = styled.aside`
  width: 15rem;
  background: ${colors.dark};
  color: #fff;
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100%;
  z-index: 10;
`;

export const BrandLink = styled(Link)`
  display: block;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: background 0.15s;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }
`;

export const BrandLogo = styled.img`
  height: 2.25rem;
  width: auto;
  display: block;
  margin-bottom: 0.5rem;
`;

export const BrandSubtitle = styled.p`
  font-size: 13px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: 0.02em;
  margin: 0;
  transition: color 0.15s;

  ${BrandLink}:hover & {
    color: rgba(255, 255, 255, 0.8);
  }
`;

export const Nav = styled.nav`
  flex: 1;
  padding: 1.25rem 1rem;
  font-size: 14px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const NavSectionLabel = styled.p`
  padding: 0.75rem 1rem 0.25rem;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.3);
`;

export const NavLink = styled(Link)<{ $active: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.625rem 1rem;
  border-radius: 0.5rem;
  transition: background 0.15s, color 0.15s;
  color: ${({ $active }) =>
    $active ? "#fff" : "rgba(255, 255, 255, 0.7)"};
  background: ${({ $active }) =>
    $active ? "rgba(255, 255, 255, 0.15)" : "transparent"};

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
  }
`;

export const NavIcon = styled.span`
  font-size: 1rem;
`;

export const ProfileSection = styled.div`
  padding: 0.75rem 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

export const ProfileCard = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.05);
`;

export const Avatar = styled.div<{ $bg: string }>`
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  flex-shrink: 0;
  text-transform: uppercase;
  background: ${({ $bg }) => $bg};
`;

export const ProfileInfo = styled.div`
  min-width: 0;
  flex: 1;
`;

export const ProfileName = styled.p`
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ProfileEmail = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-size: 10px;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const LevelBadge = styled.span<{ $level: number }>`
  display: inline-block;
  font-size: 9px;
  font-weight: 700;
  padding: 0.125rem 0.375rem;
  border-radius: 0.25rem;
  margin-top: 0.125rem;
  color: #fff;
  background: ${({ $level }) =>
    $level === 1 ? "rgba(239, 68, 68, 0.8)" : "rgba(59, 130, 246, 0.8)"};
`;

export const LogoutSection = styled.div`
  padding: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

export const LogoutButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.625rem 1rem;
  border-radius: 0.5rem;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.15s, background 0.15s;

  &:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const Main = styled.main`
  flex: 1;
  margin-left: 15rem;
  min-height: 100vh;
  background: #f9fafb;
`;
