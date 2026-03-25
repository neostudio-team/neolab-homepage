"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";
import Link from "next/link";

export default function NewNoticePage() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    isPinned: false,
    titleKo: "",
    contentKo: "",
    author: "NeoLAB",
  });

  function set(field: string, value: string | boolean) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function doSubmit() {
    setSaving(true);
    setShowModal(false);
    const token = await auth.currentUser?.getIdToken();
    const res = await fetch("/api/notices", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      router.push("/admin/notices");
    } else {
      alert("등록에 실패했습니다.");
      setSaving(false);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.titleKo) return alert("제목을 입력해 주세요.");
    setShowModal(true);
  }

  return (
    <div className="p-8 max-w-3xl">
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl shadow-xl p-8 w-[360px] flex flex-col items-center gap-5">
            <div className="text-3xl">📋</div>
            <h2 className="text-lg font-bold text-gray-800">공지사항 등록</h2>
            <p className="text-sm text-gray-500 text-center">입력한 내용으로 공지사항을 등록하시겠습니까?</p>
            <div className="flex gap-3 w-full">
              <button onClick={() => setShowModal(false)} className="flex-1 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors">취소</button>
              <button onClick={doSubmit} className="flex-1 py-2.5 bg-[#1a1a2e] text-white rounded-lg text-sm font-semibold hover:bg-[#16213e] transition-colors">등록</button>
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center gap-3 mb-6">
        <Link href="/admin/notices" className="text-gray-400 hover:text-gray-600 text-sm">← 목록으로</Link>
        <h1 className="text-2xl font-bold text-gray-800">공지사항 작성</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white rounded-xl border border-gray-100 p-6 space-y-4">
          <div className="flex items-center gap-3">
            <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
              <input type="checkbox" checked={form.isPinned} onChange={(e) => set("isPinned", e.target.checked)} className="rounded" />
              상단 고정
            </label>
            <div className="flex-1" />
            <div>
              <label className="text-xs text-gray-500 mr-2">작성자</label>
              <input value={form.author} onChange={(e) => set("author", e.target.value)}
                className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a2e]" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 p-6 space-y-4">
          <div>
            <label className="block text-xs text-gray-500 mb-1">제목 *</label>
            <input value={form.titleKo} onChange={(e) => set("titleKo", e.target.value)} required
              placeholder="공지사항 제목"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a2e]" />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">내용</label>
            <textarea value={form.contentKo} onChange={(e) => set("contentKo", e.target.value)}
              rows={12} placeholder="공지 내용을 입력하세요"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a2e] resize-none" />
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <Link href="/admin/notices" className="px-6 py-3 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors">취소</Link>
          <button type="submit" disabled={saving}
            className="px-6 py-3 bg-[#1a1a2e] text-white rounded-lg text-sm hover:bg-[#16213e] transition-colors disabled:opacity-50">
            {saving ? "등록 중..." : "등록"}
          </button>
        </div>
      </form>
    </div>
  );
}
