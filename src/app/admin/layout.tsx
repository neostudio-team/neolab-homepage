"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import "../globals.css";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (!user && pathname !== "/admin/login") {
        router.replace("/admin/login");
      } else {
        setLoading(false);
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

              <Link href="/admin/notices" className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors ${pathname.startsWith("/admin/notices") ? "bg-white/15 text-white" : "text-white/70 hover:bg-white/10 hover:text-white"}`}>
                <span className="text-base">📋</span> 공지사항
              </Link>
              <Link href="/admin/press" className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors ${pathname.startsWith("/admin/press") ? "bg-white/15 text-white" : "text-white/70 hover:bg-white/10 hover:text-white"}`}>
                <span className="text-base">📰</span> 기업뉴스
              </Link>
              <Link href="/admin/customer" className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors ${pathname.startsWith("/admin/customer") ? "bg-white/15 text-white" : "text-white/70 hover:bg-white/10 hover:text-white"}`}>
                <span className="text-base">🎧</span> 고객지원
              </Link>
            </nav>
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
