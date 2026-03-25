"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { auth } from "@/lib/firebase";

interface Press {
  id: string;
  titleKo: string;
  author: string;
  category: string;
  createdAt: string;
}

export default function AdminPressPage() {
  const [press, setPress] = useState<Press[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchPress() {
    const res = await fetch("/api/press");
    const data = await res.json();
    setPress(Array.isArray(data) ? data : []);
    setLoading(false);
  }

  useEffect(() => { fetchPress(); }, []);

  async function handleDelete(id: string) {
    if (!confirm("삭제하시겠습니까?")) return;
    const token = await auth.currentUser?.getIdToken();
    await fetch(`/api/press/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchPress();
  }

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">기업뉴스 관리</h1>
        <Link href="/admin/press/new" className="bg-[#1a1a2e] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#16213e] transition-colors">
          + 새 글 작성
        </Link>
      </div>

      {loading ? (
        <p className="text-gray-400 text-sm">불러오는 중...</p>
      ) : press.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-100 p-12 text-center text-gray-400 text-sm">
          등록된 기업뉴스가 없습니다.
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-100 text-gray-500 text-xs uppercase tracking-wider">
              <tr>
                <th className="text-left px-6 py-3 font-medium">제목</th>
                <th className="text-left px-6 py-3 font-medium w-28">카테고리</th>
                <th className="text-left px-6 py-3 font-medium w-28">작성자</th>
                <th className="text-left px-6 py-3 font-medium w-28">날짜</th>
                <th className="text-left px-6 py-3 font-medium w-24">관리</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {press.map((p) => (
                <tr key={p.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-800 max-w-xs truncate">{p.titleKo || "(제목 없음)"}</td>
                  <td className="px-6 py-4 text-gray-500">{p.category}</td>
                  <td className="px-6 py-4 text-gray-500">{p.author}</td>
                  <td className="px-6 py-4 text-gray-500">{p.createdAt ? new Date(p.createdAt).toLocaleDateString("ko-KR") : "-"}</td>
                  <td className="px-6 py-4 flex gap-2">
                    <Link href={`/admin/press/${p.id}/edit`} className="text-blue-600 hover:underline">수정</Link>
                    <button onClick={() => handleDelete(p.id)} className="text-red-500 hover:underline">삭제</button>
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
