"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { auth } from "@/lib/firebase";
import Link from "next/link";

export default function EditPressPage() {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    titleKo: "",
    contentKo: "",
    author: "NeoLAB",
    category: "press",
    externalUrl: "",
  });

  useEffect(() => {
    fetch(`/api/press/${id}`).then(r => r.json()).then(data => {
      setForm({
        titleKo: data.titleKo ?? "",
        contentKo: data.contentKo ?? "",
        author: data.author ?? "NeoLAB",
        category: data.category ?? "press",
        externalUrl: data.externalUrl ?? "",
      });
      setLoading(false);
    });
  }, [id]);

  function set(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    const token = await auth.currentUser?.getIdToken();
    const res = await fetch(`/api/press/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      router.push("/admin/press");
    } else {
      alert("저장에 실패했습니다.");
      setSaving(false);
    }
  }

  if (loading) return <div className="p-8 text-gray-400 text-sm">불러오는 중...</div>;

  return (
    <div className="p-8 max-w-3xl">
      <div className="flex items-center gap-3 mb-6">
        <Link href="/admin/press" className="text-gray-400 hover:text-gray-600 text-sm">← 목록으로</Link>
        <h1 className="text-2xl font-bold text-gray-800">기업뉴스 수정</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white rounded-xl border border-gray-100 p-6 grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-gray-500 mb-1">카테고리</label>
            <input value={form.category} onChange={(e) => set("category", e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a2e]" />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">작성자</label>
            <input value={form.author} onChange={(e) => set("author", e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a2e]" />
          </div>
          <div className="col-span-2">
            <label className="block text-xs text-gray-500 mb-1">외부 링크 (원문 기사 URL)</label>
            <input value={form.externalUrl} onChange={(e) => set("externalUrl", e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a2e]" />
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 p-6 space-y-4">
          <div>
            <label className="block text-xs text-gray-500 mb-1">제목</label>
            <input value={form.titleKo} onChange={(e) => set("titleKo", e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a2e]" />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">본문</label>
            <textarea value={form.contentKo} onChange={(e) => set("contentKo", e.target.value)}
              rows={12}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a2e] resize-none" />
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <Link href="/admin/press" className="px-6 py-3 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors">취소</Link>
          <button type="submit" disabled={saving}
            className="px-6 py-3 bg-[#1a1a2e] text-white rounded-lg text-sm hover:bg-[#16213e] transition-colors disabled:opacity-50">
            {saving ? "저장 중..." : "저장"}
          </button>
        </div>
      </form>
    </div>
  );
}
