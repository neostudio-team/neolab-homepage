"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { auth, storage } from "@/lib/firebase";
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import Link from "next/link";
import RichEditor from "@/components/admin/RichEditor";

export default function NewNoticePage() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    isPinned: false,
    isSecret: false,
    titleKo: "",
    contentKo: "",
    author: "NeoLAB",
    tags: "",
    file1Url: "",
    file1Name: "",
    file2Url: "",
    file2Name: "",
  });
  const [file1, setFile1] = useState<File | null>(null);
  const [file2, setFile2] = useState<File | null>(null);
  const file1Ref = useRef<HTMLInputElement>(null);
  const file2Ref = useRef<HTMLInputElement>(null);

  function set(field: string, value: string | boolean) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.titleKo) return alert("제목을 입력해 주세요.");
    setShowModal(true);
  }

  async function uploadFile(file: File): Promise<{ url: string; name: string }> {
    const path = `notices/${Date.now()}_${file.name}`;
    const fileRef = storageRef(storage, path);
    const timeout = new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error("파일 업로드 시간 초과")), 15000)
    );
    await Promise.race([uploadBytes(fileRef, file), timeout]);
    const url = await getDownloadURL(fileRef);
    return { url, name: file.name };
  }

  async function doSubmit() {
    setShowModal(false);
    setSaving(true);
    try {
      const payload = { ...form };
      if (file1) {
        try {
          const { url, name } = await uploadFile(file1);
          payload.file1Url = url;
          payload.file1Name = name;
        } catch {
          alert("파일1 업로드에 실패했습니다. 파일 없이 등록합니다.");
        }
      }
      if (file2) {
        try {
          const { url, name } = await uploadFile(file2);
          payload.file2Url = url;
          payload.file2Name = name;
        } catch {
          alert("파일2 업로드에 실패했습니다. 파일 없이 등록합니다.");
        }
      }
      const token = await auth.currentUser?.getIdToken();
      const res = await fetch("/api/notices", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify(payload),
      });
      if (res.ok) router.push("/admin/notices");
      else alert("등록에 실패했습니다.");
    } catch (err) {
      console.error(err);
      alert("등록 중 오류가 발생했습니다.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="p-8 max-w-4xl">
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

      <form onSubmit={handleSubmit}>
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-4">
          <table className="w-full text-sm">
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="px-5 py-3 bg-gray-50 text-gray-600 text-xs font-medium w-28">옵션</td>
                <td className="px-5 py-3">
                  <div className="flex items-center gap-6">
                    <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer select-none">
                      <input type="checkbox" checked={form.isSecret} onChange={(e) => set("isSecret", e.target.checked)} className="w-4 h-4 rounded accent-[#1a1a2e]" />
                      비밀글
                    </label>
                    <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer select-none">
                      <input type="checkbox" checked={form.isPinned} onChange={(e) => set("isPinned", e.target.checked)} className="w-4 h-4 rounded accent-[#1a1a2e]" />
                      공지
                    </label>
                    <div className="flex items-center gap-2 ml-4">
                      <label className="text-xs text-gray-500">작성자</label>
                      <input value={form.author} onChange={(e) => set("author", e.target.value)}
                        className="border border-gray-200 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a2e] w-36" />
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="px-5 py-3 bg-gray-50 text-gray-600 text-xs font-medium">제목 <span className="text-red-500">*</span></td>
                <td className="px-5 py-3">
                  <input value={form.titleKo} onChange={(e) => set("titleKo", e.target.value)} required
                    placeholder="공지사항 제목을 입력하세요"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a2e]" />
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="px-5 py-3 bg-gray-50 text-gray-600 text-xs font-medium align-top pt-4">내용</td>
                <td className="px-5 py-3">
                  <RichEditor value={form.contentKo} onChange={(v) => set("contentKo", v)} />
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="px-5 py-3 bg-gray-50 text-gray-600 text-xs font-medium">태그</td>
                <td className="px-5 py-3">
                  <input value={form.tags} onChange={(e) => set("tags", e.target.value)}
                    placeholder="쉼표로 구분 (예: 업데이트, 점검, 이벤트)"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a2e]" />
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="px-5 py-3 bg-gray-50 text-gray-600 text-xs font-medium">파일1</td>
                <td className="px-5 py-3">
                  <div className="flex items-center gap-3">
                    <button type="button" onClick={() => file1Ref.current?.click()}
                      className="px-3 py-1.5 border border-gray-300 rounded text-xs text-gray-600 hover:bg-gray-50 transition-colors">파일선택</button>
                    <span className="text-xs text-gray-500">{file1 ? file1.name : "-"}</span>
                    <input ref={file1Ref} type="file" className="hidden" onChange={(e) => setFile1(e.target.files?.[0] ?? null)} />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-5 py-3 bg-gray-50 text-gray-600 text-xs font-medium">파일2</td>
                <td className="px-5 py-3">
                  <div className="flex items-center gap-3">
                    <button type="button" onClick={() => file2Ref.current?.click()}
                      className="px-3 py-1.5 border border-gray-300 rounded text-xs text-gray-600 hover:bg-gray-50 transition-colors">파일선택</button>
                    <span className="text-xs text-gray-500">{file2 ? file2.name : "-"}</span>
                    <input ref={file2Ref} type="file" className="hidden" onChange={(e) => setFile2(e.target.files?.[0] ?? null)} />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between">
          <Link href="/admin/notices" className="px-5 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors">목록</Link>
          <button type="submit" disabled={saving}
            className="px-6 py-2.5 bg-[#1a1a2e] text-white rounded-lg text-sm hover:bg-[#16213e] transition-colors disabled:opacity-50">
            {saving ? "등록 중..." : "확인"}
          </button>
        </div>
      </form>
    </div>
  );
}
