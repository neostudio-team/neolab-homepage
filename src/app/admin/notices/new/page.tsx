"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";
import Link from "next/link";

export default function NewNoticePage() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    isPinned: false,
    titleKo: "", titleEn: "", titleJa: "",
    contentKo: "", contentEn: "", contentJa: "",
    author: "NeoLAB",
  });
  const [tab, setTab] = useState<"ko" | "en" | "ja">("ko");

  function set(field: string, value: string | boolean) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.titleKo) return alert("국문 제목을 입력해 주세요.");
    setSaving(true);
    const token = await auth.currentUser?.getIdToken();
    const res = await fetch("/api/notices", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      router.push("/admin/notices");
    } else {
      alert("저장에 실패했습니다.");
      setSaving(false);
    }
  }

  const tabs = [{ key: "ko", label: "국문" }, { key: "en", label: "영문" }, { key: "ja", label: "일문" }] as const;

  return (
    <div className="p-8 max-w-3xl">
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
              <input value={form.author} onChange={(e) => set("author", e.target.value)} className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a2e]" />
            </div>
          </div>
        </div>

        {/* Language tabs */}
        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
          <div className="flex border-b border-gray-100">
            {tabs.map((t) => (
              <button key={t.key} type="button" onClick={() => setTab(t.key)}
                className={`px-6 py-3 text-sm font-medium transition-colors ${tab === t.key ? "border-b-2 border-[#1a1a2e] text-[#1a1a2e]" : "text-gray-400 hover:text-gray-600"}`}>
                {t.label}
              </button>
            ))}
          </div>
          <div className="p-6 space-y-4">
            <div>
              <label className="block text-xs text-gray-500 mb-1">제목 *</label>
              <input
                value={form[`title${tab.toUpperCase() as "Ko" | "En" | "Ja"}` as keyof typeof form] as string}
                onChange={(e) => set(`title${tab.toUpperCase() === "KO" ? "Ko" : tab.toUpperCase() === "EN" ? "En" : "Ja"}`, e.target.value)}
                placeholder={tab === "ko" ? "공지사항 제목 (필수)" : "제목 (선택)"}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a2e]"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">내용</label>
              <textarea
                value={form[`content${tab === "ko" ? "Ko" : tab === "en" ? "En" : "Ja"}` as keyof typeof form] as string}
                onChange={(e) => set(`content${tab === "ko" ? "Ko" : tab === "en" ? "En" : "Ja"}`, e.target.value)}
                rows={10}
                placeholder="내용을 입력하세요..."
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a2e] resize-none"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <Link href="/admin/notices" className="px-6 py-3 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors">취소</Link>
          <button type="submit" disabled={saving} className="px-6 py-3 bg-[#1a1a2e] text-white rounded-lg text-sm hover:bg-[#16213e] transition-colors disabled:opacity-50">
            {saving ? "저장 중..." : "저장"}
          </button>
        </div>
      </form>
    </div>
  );
}
