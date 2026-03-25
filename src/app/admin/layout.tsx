"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import "../globals.css";

const BADGE_COLORS = ["#3b82f6","#10b981","#8b5cf6","#f97316","#ef4444","#14b8a6","#ec4899","#6366f1"];
function badgeColor(name: string) {
  return BADGE_COLORS[(name?.charCodeAt(0) || 0) % BADGE_COLORS.length];
}

interface MemberProfile { name: string; level: number; username: string; }

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<MemberProfile | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (!user && pathname !== "/admin/login") {
        router.replace("/admin/login");
      } else {
        setLoading(false);
        if (user?.email) {
          try {
            const token = await user.getIdToken();
            const res = await fetch(`/api/admin-members?email=${encodeURIComponent(user.email)}`, {
              headers: { Authorization: `Bearer ${token}` },
            });
            if (res.ok) {
              const data = await res.json();
              if (data) setProfile({ name: data.name, level: Number(data.level), username: data.username });
            }
          } catch { /* ignore */ }
        }
      }
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
            <div className="px-6 py-6 border-b border-white/10">
              <p className="text-xs text-white/40 uppercase tracking-widest mb-1">NeoLAB Convergence</p>
              <p className="font-bold text-xl text-white">관리자</p>
            </div>
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
              <div className="px-4 py-4 border-t border-white/10">
                <div className="flex items-center gap-3 px-2 py-2">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                    style={{ backgroundColor: badgeColor(profile.name) }}
                  >
                    {profile.name?.charAt(0) || "?"}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-white text-sm font-medium truncate">{profile.name}</p>
                    <p className="text-white/40 text-xs">
                      {profile.level === 1 ? "최고관리자" : "일반관리자"}
                    </p>
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
