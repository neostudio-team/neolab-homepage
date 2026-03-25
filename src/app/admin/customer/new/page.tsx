"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";

export default function NewCustomerNoticePage() {
  const router = useRouter();
  const [tab, setTab] = useState<"ko" | "en" | "ja">("ko");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    isPinned: false,
    titleKo: "", titleEn: "", titleJa: "",
    contentKo: "", contentEn: "", contentJa: "",
    author: "NeoLAB_CS",
    externalUrl: "",
  });

  function set(key: string, value: string | boolean) {
    setForm(f => ({ ...f, [key]: value }));
  }

  async function doSubmit() {
    setLoading(true);
    setShowModal(false);
    try {
      const token = await auth.currentUser?.getIdToken();
      const res = await fetch("/api/customer-notices", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify(form),
      });
      if (res.ok) router.push("/admin/customer");
      else alert("등록에 실패했습니다.");
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.titleKo) return alert("한국어 제목을 입력해 주세요.");
    setShowModal(true);
  }

  return (
    <div className="p-8 max-w-3xl">
      {/* 확인 모달 */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl shadow-xl p-8 w-[360px] flex flex-col items-center gap-5">
            <div className="text-3xl">🎧</div>
            <h2 className="text-lg font-bold text-gray-800">고객지원 공지 등록</h2>
            <p className="text-sm text-gray-500 text-center">
              입력한 내용으로 고객지원 공지를 등록하시겠습니까?
            </p>
            <div className="flex gap-3 w-full">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors"
              >
                취소
              </button>
              <button
                onClick={doSubmit}
                className="flex-1 py-2.5 bg-[#1a1a2e] text-white rounded-lg text-sm font-semibold hover:bg-[#16213e] transition-colors"
              >
                등록
              </button>
            </div>
          </div>
        </div>
      )}

      <h1 className="text-2xl font-bold text-gray-800 mb-6">고객지원 공지 작성</h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="flex items-center gap-3">
          <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
            <input type="checkbox" checked={form.isPinned} onChange={e => set("isPinned", e.target.checked)} className="w-4 h-4" />
            공지 상단 고정
          </label>
        </div>

        <div className="flex gap-2 border-b border-gray-200">
          {(["ko", "en", "ja"] as const).map(l => (
            <button key={l} type="button" onClick={() => setTab(l)}
              className={`px-4 py-2 text-sm font-medium transition-colors ${tab === l ? "border-b-2 border-[#1a1a2e] text-[#1a1a2e]" : "text-gray-400 hover:text-gray-600"}`}>
              {l === "ko" ? "한국어" : l === "en" ? "English" : "日本語"}
            </button>
          ))}
        </div>

        {tab === "ko" && (
          <>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1.5">제목 (한국어) *</label>
              <input value={form.titleKo} onChange={e => set("titleKo", e.target.value)} required
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a2e]" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1.5">내용 (한국어)</label>
              <textarea value={form.contentKo} onChange={e => set("contentKo", e.target.value)} rows={10}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a2e] resize-y" />
            </div>
          </>
        )}
        {tab === "en" && (
          <>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1.5">Title (English)</label>
              <input value={form.titleEn} onChange={e => set("titleEn", e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a2e]" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1.5">Content (English)</label>
              <textarea value={form.contentEn} onChange={e => set("contentEn", e.target.value)} rows={10}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a2e] resize-y" />
            </div>
          </>
        )}
        {tab === "ja" && (
          <>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1.5">タイトル (日本語)</label>
              <input value={form.titleJa} onChange={e => set("titleJa", e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a2e]" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1.5">内容 (日本語)</label>
              <textarea value={form.contentJa} onChange={e => set("contentJa", e.target.value)} rows={10}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a2e] resize-y" />
            </div>
          </>
        )}

        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1.5">작성자</label>
          <input value={form.author} onChange={e => set("author", e.target.value)}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a2e]" />
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1.5">외부 링크 (선택)</label>
          <input value={form.externalUrl} onChange={e => set("externalUrl", e.target.value)}
            placeholder="https://..." className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a2e]" />
        </div>

        <div className="flex gap-3 pt-2">
          <button type="submit" disabled={loading}
            className="bg-[#1a1a2e] text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-[#16213e] transition-colors disabled:opacity-50">
            {loading ? "등록 중..." : "등록"}
          </button>
          <button type="button" onClick={() => router.back()}
            className="border border-gray-200 text-gray-600 px-6 py-3 rounded-xl text-sm hover:bg-gray-50 transition-colors">
            취소
          </button>
        </div>
      </form>
    </div>
  );
}
