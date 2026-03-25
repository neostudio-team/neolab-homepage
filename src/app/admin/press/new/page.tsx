"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";
import Link from "next/link";

export default function NewPressPage() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [tab, setTab] = useState<"ko" | "en" | "ja">("ko");
  const [form, setForm] = useState({
    titleKo: "", titleEn: "", titleJa: "",
    excerptKo: "", excerptEn: "", excerptJa: "",
    contentKo: "", contentEn: "", contentJa: "",
    author: "NeoLAB",
    category: "press",
    externalUrl: "",
  });

  function set(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.titleKo) return alert("국문 제목을 입력해 주세요.");
    setSaving(true);
    const token = await auth.currentUser?.getIdToken();
    const res = await fetch("/api/press", {
      method: "POST",
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

  const lang = tab === "ko" ? "Ko" : tab === "en" ? "En" : "Ja";
  const tabs = [{ key: "ko", label: "국문" }, { key: "en", label: "영문" }, { key: "ja", label: "일문" }] as const;

  return (
    <div className="p-8 max-w-3xl">
      <div className="flex items-center gap-3 mb-6">
        <Link href="/admin/press" className="text-gray-400 hover:text-gray-600 text-sm">← 목록으로</Link>
        <h1 className="text-2xl font-bold text-gray-800">기업뉴스 작성</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white rounded-xl border border-gray-100 p-6 grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-gray-500 mb-1">카테고리</label>
            <input value={form.category} onChange={(e) => set("category", e.target.value)} placeholder="press" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a2e]" />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">작성자</label>
            <input value={form.author} onChange={(e) => set("author", e.target.value)} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a2e]" />
          </div>
          <div className="col-span-2">
            <label className="block text-xs text-gray-500 mb-1">외부 링크 (원문 기사 URL)</label>
            <input value={form.externalUrl} onChange={(e) => set("externalUrl", e.target.value)} placeholder="https://..." className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a2e]" />
          </div>
        </div>

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
              <label className="block text-xs text-gray-500 mb-1">제목 {tab === "ko" && "*"}</label>
              <input value={form[`title${lang}` as keyof typeof form]} onChange={(e) => set(`title${lang}`, e.target.value)}
                placeholder={tab === "ko" ? "기사 제목 (필수)" : "제목 (선택)"}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a2e]" />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">요약 (목록에 표시)</label>
              <textarea value={form[`excerpt${lang}` as keyof typeof form]} onChange={(e) => set(`excerpt${lang}`, e.target.value)}
                rows={3} placeholder="기사 요약문..."
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a2e] resize-none" />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">본문</label>
              <textarea value={form[`content${lang}` as keyof typeof form]} onChange={(e) => set(`content${lang}`, e.target.value)}
                rows={10} placeholder="본문 내용..."
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a2e] resize-none" />
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <Link href="/admin/press" className="px-6 py-3 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors">취소</Link>
          <button type="submit" disabled={saving} className="px-6 py-3 bg-[#1a1a2e] text-white rounded-lg text-sm hover:bg-[#16213e] transition-colors disabled:opacity-50">
            {saving ? "저장 중..." : "저장"}
          </button>
        </div>
      </form>
    </div>
  );
}
