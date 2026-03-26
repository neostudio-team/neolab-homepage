"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import "../globals.css";

const BADGE_COLORS = ["#3b82f6","#10b981","#8b5cf6","#f97316","#ef4444","#14b8a6","#ec4899","#6366f1"];
function badgeColor(name: string) {
  return BADGE_COLORS[(name?.charCodeAt(0) || 0) % BADGE_COLORS.length];
}

interface MemberProfile { name: string; level: number; username: string; email: string; }

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
      // 로그인 페이지
      if (pathname === "/admin/login") {
        setLoading(false);
        if (user) router.replace("/admin"); // 이미 로그인 상태면 대시보드로
        return;
      }

      // 비로그인 → 로그인 페이지로
      if (!user) {
        router.replace("/admin/login");
        return;
      }

      // 로그인 상태 → admin_members 등록 여부 확인
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
        <body className="antialiased">{children}</body>
      </html>
    );
  }

  if (loading) {
    return (
      <html lang="ko">
        <body className="antialiased">
          <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-gray-500 text-sm">로딩 중...</div>
          </div>
        </body>
      </html>
    );
  }

  return (
    <html lang="ko">
      <body className="antialiased">
        <div className="min-h-screen flex bg-gray-100">
          {/* Sidebar */}
          <aside className="w-60 bg-[#1a1a2e] text-white flex flex-col fixed h-full z-10">
            <Link href="/admin" className="block px-6 py-5 border-b border-white/10 hover:bg-white/5 transition-colors group">
              <img
                src="/images/bi/logo_01.png"
                alt="NeoLAB Convergence"
                className="h-7 w-auto mb-2.5"
                style={{ filter: "brightness(0) invert(1)" }}
              />
              <p className="text-xs font-semibold text-white/60 tracking-wide group-hover:text-white/80 transition-colors">홈페이지 관리자</p>
            </Link>
            <nav className="flex-1 px-4 py-5 space-y-1 text-sm overflow-y-auto">
              <Link href="/admin" className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors ${pathname === "/admin" ? "bg-white/15 text-white" : "text-white/70 hover:bg-white/10 hover:text-white"}`}>
                <span className="text-base">🏠</span> 대시보드
              </Link>

              <div className="pt-3 pb-1">
                <p className="px-4 text-[10px] text-white/30 uppercase tracking-widest font-semibold">게시판</p>
              </div>
              <Link href="/admin/notices" className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors ${pathname.startsWith("/admin/notices") ? "bg-white/15 text-white" : "text-white/70 hover:bg-white/10 hover:text-white"}`}>
                <span className="text-base">📋</span> 공지사항
              </Link>
              <Link href="/admin/press" className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors ${pathname.startsWith("/admin/press") ? "bg-white/15 text-white" : "text-white/70 hover:bg-white/10 hover:text-white"}`}>
                <span className="text-base">📰</span> 기업뉴스
              </Link>
              <Link href="/admin/customer" className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors ${pathname.startsWith("/admin/customer") ? "bg-white/15 text-white" : "text-white/70 hover:bg-white/10 hover:text-white"}`}>
                <span className="text-base">🎧</span> 고객지원
              </Link>

              <div className="pt-3 pb-1">
                <p className="px-4 text-[10px] text-white/30 uppercase tracking-widest font-semibold">설정</p>
              </div>
              <Link href="/admin/members" className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors ${pathname.startsWith("/admin/members") ? "bg-white/15 text-white" : "text-white/70 hover:bg-white/10 hover:text-white"}`}>
                <span className="text-base">👥</span> 회원 관리
              </Link>
            </nav>

            {/* 프로필 */}
            {profile && (
              <div className="px-4 py-3 border-t border-white/10">
                <div className="flex items-center gap-3 px-2 py-2 rounded-lg bg-white/5">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 uppercase"
                    style={{ backgroundColor: badgeColor(profile.name) }}
                  >
                    {profile.name?.charAt(0) || "?"}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-white text-sm font-semibold truncate">{profile.name}</p>
                    <p className="text-white/50 text-[10px] truncate">{profile.email}</p>
                    {profile.level > 0 && (
                      <span className={`inline-block text-[9px] font-bold px-1.5 py-0.5 rounded mt-0.5 ${
                        profile.level === 1 ? "bg-red-500/80 text-white" : "bg-blue-500/80 text-white"
                      }`}>
                        {profile.level === 1 ? "최고관리자" : "일반관리자"}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )}

            <div className="px-4 py-4 border-t border-white/10">
              <button
                onClick={() => { document.cookie = "admin_logged_in=; path=/; max-age=0"; signOut(auth).then(() => router.replace("/admin/login")); }}
                className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-white/50 hover:text-white hover:bg-white/10 transition-colors"
              >
                <span>🚪</span> 로그아웃
              </button>
            </div>
          </aside>

          {/* Main content - offset by sidebar width */}
          <main className="flex-1 ml-60 min-h-screen bg-gray-50">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
