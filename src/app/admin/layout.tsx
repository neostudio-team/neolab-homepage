"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import "../globals.css";
import {
  Avatar,
  BodyPlain,
  BrandLink,
  BrandLogo,
  BrandSubtitle,
  LevelBadge,
  LoadingScreen,
  LoadingText,
  LogoutButton,
  LogoutSection,
  Main,
  Nav,
  NavIcon,
  NavLink,
  NavSectionLabel,
  ProfileCard,
  ProfileEmail,
  ProfileInfo,
  ProfileName,
  ProfileSection,
  Shell,
  Sidebar,
} from "./AdminLayout.styles";

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

interface MemberProfile {
  name: string;
  level: number;
  username: string;
  email: string;
}

async function fetchProfile(user: User): Promise<MemberProfile | null> {
  try {
    const token = await user.getIdToken();
    const res = await fetch("/api/auth/check-admin", {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) return null;
    const data = await res.json();
    if (!data.allowed) return null;
    return {
      name: data.member?.name || user.displayName || user.email?.split("@")[0] || "관리자",
      level: Number(data.member?.level) || 0,
      username: data.member?.username || user.email?.split("@")[0] || "",
      email: user.email ?? "",
    };
  } catch {
    return null;
  }
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<MemberProfile | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (pathname === "/admin/login") {
        setLoading(false);
        if (user) router.replace("/admin");
        return;
      }

      if (!user) {
        router.replace("/admin/login");
        return;
      }

      const p = await fetchProfile(user);
      if (!p) {
        await signOut(auth);
        document.cookie = "admin_logged_in=; path=/; max-age=0";
        router.replace("/admin/login");
        return;
      }

      setProfile(p);
      setLoading(false);
    });
    return () => unsub();
  }, [pathname, router]);

  if (pathname === "/admin/login") {
    return (
      <html lang="ko">
        <BodyPlain>{children}</BodyPlain>
      </html>
    );
  }

  if (loading) {
    return (
      <html lang="ko">
        <BodyPlain>
          <LoadingScreen>
            <LoadingText>로딩 중...</LoadingText>
          </LoadingScreen>
        </BodyPlain>
      </html>
    );
  }

  function handleLogout() {
    document.cookie = "admin_logged_in=; path=/; max-age=0";
    signOut(auth).then(() => router.replace("/admin/login"));
  }

  return (
    <html lang="ko">
      <BodyPlain>
        <Shell>
          <Sidebar>
            <BrandLink href="/admin">
              <BrandLogo
                src="/images/NeoLAB-CI_01.png"
                alt="NeoLAB Convergence"
              />
              <BrandSubtitle>홈페이지 관리자</BrandSubtitle>
            </BrandLink>
            <Nav>
              <NavLink href="/admin" $active={pathname === "/admin"}>
                <NavIcon>🏠</NavIcon> 대시보드
              </NavLink>

              <NavSectionLabel>게시판</NavSectionLabel>
              <NavLink href="/admin/notices" $active={pathname.startsWith("/admin/notices")}>
                <NavIcon>📋</NavIcon> 공지사항
              </NavLink>
              <NavLink href="/admin/press" $active={pathname.startsWith("/admin/press")}>
                <NavIcon>📰</NavIcon> 기업뉴스
              </NavLink>
              <NavLink href="/admin/customer" $active={pathname.startsWith("/admin/customer")}>
                <NavIcon>🎧</NavIcon> 고객지원
              </NavLink>

              <NavSectionLabel>관리</NavSectionLabel>
              <NavLink href="/admin/contact" $active={pathname.startsWith("/admin/contact")}>
                <NavIcon>📩</NavIcon> 문의 관리
              </NavLink>
              <NavLink href="/admin/popups" $active={pathname.startsWith("/admin/popups")}>
                <NavIcon>🖼️</NavIcon> 팝업 관리
              </NavLink>
              {profile && profile.level === 1 && (
                <NavLink href="/admin/legal" $active={pathname.startsWith("/admin/legal")}>
                  <NavIcon>📄</NavIcon> 약관 관리
                </NavLink>
              )}
              <NavLink href="/admin/members" $active={pathname.startsWith("/admin/members")}>
                <NavIcon>👥</NavIcon> 회원 관리
              </NavLink>
            </Nav>

            {profile && (
              <ProfileSection>
                <ProfileCard>
                  <Avatar $bg={badgeColor(profile.name)}>
                    {profile.name?.charAt(0) || "?"}
                  </Avatar>
                  <ProfileInfo>
                    <ProfileName>{profile.name}</ProfileName>
                    <ProfileEmail>{profile.email}</ProfileEmail>
                    {profile.level > 0 && (
                      <LevelBadge $level={profile.level}>
                        {profile.level === 1 ? "최고관리자" : "일반관리자"}
                      </LevelBadge>
                    )}
                  </ProfileInfo>
                </ProfileCard>
              </ProfileSection>
            )}

            <LogoutSection>
              <LogoutButton type="button" onClick={handleLogout}>
                <span>🚪</span> 로그아웃
              </LogoutButton>
            </LogoutSection>
          </Sidebar>

          <Main>{children}</Main>
        </Shell>
      </BodyPlain>
    </html>
  );
}
