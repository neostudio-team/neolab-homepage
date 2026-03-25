"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function AdminDashboard() {
  const [noticeCount, setNoticeCount] = useState<number | null>(null);
  const [pressCount, setPressCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/notices").then(r => r.json()).then(d => setNoticeCount(Array.isArray(d) ? d.length : 0));
    fetch("/api/press").then(r => r.json()).then(d => setPressCount(Array.isArray(d) ? d.length : 0));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">대시보드</h1>
      <p className="text-gray-500 text-sm mb-8">공지사항과 기업뉴스를 관리합니다.</p>

      <div className="grid grid-cols-2 gap-6 max-w-2xl">
        <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">공지사항</p>
          <p className="text-4xl font-bold text-[#1a1a2e] mb-4">{noticeCount ?? "—"}</p>
          <div className="flex gap-3">
            <Link href="/admin/notices" className="text-sm text-blue-600 hover:underline">목록 보기</Link>
            <Link href="/admin/notices/new" className="text-sm text-blue-600 hover:underline">새 글 작성</Link>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">기업뉴스</p>
          <p className="text-4xl font-bold text-[#1a1a2e] mb-4">{pressCount ?? "—"}</p>
          <div className="flex gap-3">
            <Link href="/admin/press" className="text-sm text-blue-600 hover:underline">목록 보기</Link>
            <Link href="/admin/press/new" className="text-sm text-blue-600 hover:underline">새 글 작성</Link>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-blue-50 border border-blue-100 rounded-xl p-5 max-w-2xl text-sm text-blue-800">
        <p className="font-medium mb-1">💡 안내</p>
        <p>작성한 내용은 국문/영문/일문 사이트에 각각 적용됩니다. 각 언어별 제목과 내용을 입력해 주세요.</p>
      </div>
    </div>
  );
}
