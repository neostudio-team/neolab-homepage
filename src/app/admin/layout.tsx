"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

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

  if (pathname === "/admin/login") return <>{children}</>;
  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-gray-500 text-sm">로딩 중...</div>
    </div>
  );

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-56 bg-[#1a1a2e] text-white flex flex-col">
        <div className="px-6 py-5 border-b border-white/10">
          <p className="text-xs text-white/50 uppercase tracking-widest mb-1">NeoLAB</p>
          <p className="font-bold text-lg">관리자</p>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1 text-sm">
          <Link href="/admin" className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${pathname === "/admin" ? "bg-white/20" : "hover:bg-white/10"}`}>
            🏠 대시보드
          </Link>
          <p className="px-3 pt-4 pb-1 text-xs text-white/40 uppercase tracking-widest">공지사항</p>
          <Link href="/admin/notices" className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${pathname.startsWith("/admin/notices") ? "bg-white/20" : "hover:bg-white/10"}`}>
            📋 목록
          </Link>
          <Link href="/admin/notices/new" className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${pathname === "/admin/notices/new" ? "bg-white/20" : "hover:bg-white/10"}`}>
            ✏️ 새 글 작성
          </Link>
          <p className="px-3 pt-4 pb-1 text-xs text-white/40 uppercase tracking-widest">기업뉴스</p>
          <Link href="/admin/press" className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${pathname.startsWith("/admin/press") ? "bg-white/20" : "hover:bg-white/10"}`}>
            📰 목록
          </Link>
          <Link href="/admin/press/new" className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${pathname === "/admin/press/new" ? "bg-white/20" : "hover:bg-white/10"}`}>
            ✏️ 새 글 작성
          </Link>
        </nav>
        <div className="px-4 py-4 border-t border-white/10">
          <button
            onClick={() => { document.cookie = "admin_logged_in=; path=/; max-age=0"; signOut(auth).then(() => router.replace("/admin/login")); }}
            className="w-full text-left text-sm text-white/60 hover:text-white transition-colors px-3 py-2"
          >
            로그아웃
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}
