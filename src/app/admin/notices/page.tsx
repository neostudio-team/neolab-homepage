"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { auth } from "@/lib/firebase";

interface Notice {
  id: string;
  isPinned: boolean;
  titleKo: string;
  author: string;
  views: number;
  createdAt: string;
}

export default function AdminNoticesPage() {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchNotices() {
    const res = await fetch("/api/notices");
    const data = await res.json();
    setNotices(Array.isArray(data) ? data : []);
    setLoading(false);
  }

  useEffect(() => { fetchNotices(); }, []);

  async function handleDelete(id: string) {
    if (!confirm("삭제하시겠습니까?")) return;
    const token = await auth.currentUser?.getIdToken();
    await fetch(`/api/notices/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchNotices();
  }

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">공지사항 관리</h1>
        <Link href="/admin/notices/new" className="bg-[#1a1a2e] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#16213e] transition-colors">
          + 새 글 작성
        </Link>
      </div>

      {loading ? (
        <p className="text-gray-400 text-sm">불러오는 중...</p>
      ) : notices.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-100 p-12 text-center text-gray-400 text-sm">
          등록된 공지사항이 없습니다.
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-100 text-gray-500 text-xs uppercase tracking-wider">
              <tr>
                <th className="text-left px-6 py-3 font-medium w-12">고정</th>
                <th className="text-left px-6 py-3 font-medium">제목</th>
                <th className="text-left px-6 py-3 font-medium w-28">작성자</th>
                <th className="text-left px-6 py-3 font-medium w-28">날짜</th>
                <th className="text-left px-6 py-3 font-medium w-16">조회</th>
                <th className="text-left px-6 py-3 font-medium w-24">관리</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {notices.map((n) => (
                <tr key={n.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-center">{n.isPinned ? "📌" : ""}</td>
                  <td className="px-6 py-4 font-medium text-gray-800 max-w-xs truncate">{n.titleKo || "(제목 없음)"}</td>
                  <td className="px-6 py-4 text-gray-500">{n.author}</td>
                  <td className="px-6 py-4 text-gray-500">{n.createdAt ? new Date(n.createdAt).toLocaleDateString("ko-KR") : "-"}</td>
                  <td className="px-6 py-4 text-gray-500">{n.views}</td>
                  <td className="px-6 py-4 flex gap-2">
                    <Link href={`/admin/notices/${n.id}/edit`} className="text-blue-600 hover:underline">수정</Link>
                    <button onClick={() => handleDelete(n.id)} className="text-red-500 hover:underline">삭제</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
