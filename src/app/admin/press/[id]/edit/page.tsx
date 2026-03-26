"use client";
import { useEffect, useState, useRef } from "react";
import { useRouter, useParams } from "next/navigation";
import { auth, storage } from "@/lib/firebase";
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import Link from "next/link";
import RichEditor from "@/components/admin/RichEditor";

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

  useEffect(() => {
    fetch(`/api/press/${id}`).then(r => r.json()).then(data => {
      setForm({
        titleKo: data.titleKo ?? "",
        contentKo: data.contentKo ?? "",
        author: data.author ?? "NeoLAB",
        category: data.category ?? "press",
        externalUrl: data.externalUrl ?? "",
        tags: data.tags ?? "",
        file1Url: data.file1Url ?? "",
        file1Name: data.file1Name ?? "",
        file2Url: data.file2Url ?? "",
        file2Name: data.file2Name ?? "",
      });
      setLoading(false);
    });
  }, [id]);

  function set(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function uploadFile(file: File): Promise<{ url: string; name: string }> {
    const path = `press/${Date.now()}_${file.name}`;
    const fileRef = storageRef(storage, path);
    await uploadBytes(fileRef, file);
    const url = await getDownloadURL(fileRef);
    return { url, name: file.name };
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    try {
      const payload = { ...form };
      if (file1) {
        const { url, name } = await uploadFile(file1);
        payload.file1Url = url;
        payload.file1Name = name;
      }
      if (file2) {
        const { url, name } = await uploadFile(file2);
        payload.file2Url = url;
        payload.file2Name = name;
      }
      const token = await auth.currentUser?.getIdToken();
      const res = await fetch(`/api/press/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify(payload),
      });
      if (res.ok) router.push("/admin/press");
      else alert("저장에 실패했습니다.");
    } finally {
      setSaving(false);
    }
  }

  if (loading) return <div className="p-8 text-gray-400 text-sm">불러오는 중...</div>;

  return (
    <div className="p-8 max-w-4xl">
      <div className="flex items-center gap-3 mb-6">
        <Link href="/admin/press" className="text-gray-400 hover:text-gray-600 text-sm">← 목록으로</Link>
        <h1 className="text-2xl font-bold text-gray-800">기업뉴스 수정</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-4">
          <table className="w-full text-sm">
            <tbody>
              {/* Meta */}
              <tr className="border-b border-gray-100">
                <td className="px-5 py-3 bg-gray-50 text-gray-600 text-xs font-medium w-28">정보</td>
                <td className="px-5 py-3">
                  <div className="flex items-center gap-4 flex-wrap">
                    <div className="flex items-center gap-2">
                      <label className="text-xs text-gray-500">카테고리</label>
                      <input value={form.category} onChange={(e) => set("category", e.target.value)}
                        className="border border-gray-200 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a2e] w-28" />
                    </div>
                    <div className="flex items-center gap-2">
                      <label className="text-xs text-gray-500">작성자</label>
                      <input value={form.author} onChange={(e) => set("author", e.target.value)}
                        className="border border-gray-200 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a2e] w-36" />
                    </div>
                  </div>
                </td>
              </tr>

              {/* External URL */}
              <tr className="border-b border-gray-100">
                <td className="px-5 py-3 bg-gray-50 text-gray-600 text-xs font-medium">외부 링크</td>
                <td className="px-5 py-3">
                  <input value={form.externalUrl} onChange={(e) => set("externalUrl", e.target.value)}
                    placeholder="https://... (원문 기사 URL)"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a2e]" />
                </td>
              </tr>

              {/* Title */}
              <tr className="border-b border-gray-100">
                <td className="px-5 py-3 bg-gray-50 text-gray-600 text-xs font-medium">제목 <span className="text-red-500">*</span></td>
                <td className="px-5 py-3">
                  <input value={form.titleKo} onChange={(e) => set("titleKo", e.target.value)} required
                    placeholder="기사 제목을 입력하세요"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a2e]" />
                </td>
              </tr>

              {/* Content */}
              <tr className="border-b border-gray-100">
                <td className="px-5 py-3 bg-gray-50 text-gray-600 text-xs font-medium align-top pt-4">내용</td>
                <td className="px-5 py-3">
                  <RichEditor value={form.contentKo} onChange={(v) => set("contentKo", v)} />
                </td>
              </tr>

              {/* Tags */}
              <tr className="border-b border-gray-100">
                <td className="px-5 py-3 bg-gray-50 text-gray-600 text-xs font-medium">태그</td>
                <td className="px-5 py-3">
                  <input value={form.tags} onChange={(e) => set("tags", e.target.value)}
                    placeholder="쉼표로 구분 (예: 신제품, 수상, IR)"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a2e]" />
                </td>
              </tr>

              {/* File 1 */}
              <tr className="border-b border-gray-100">
                <td className="px-5 py-3 bg-gray-50 text-gray-600 text-xs font-medium">파일1</td>
                <td className="px-5 py-3">
                  <div className="flex items-center gap-3">
                    <button type="button" onClick={() => file1Ref.current?.click()}
                      className="px-3 py-1.5 border border-gray-300 rounded text-xs text-gray-600 hover:bg-gray-50 transition-colors">
                      파일선택
                    </button>
                    <span className="text-xs text-gray-500">{file1 ? file1.name : form.file1Name || "-"}</span>
                    {form.file1Url && !file1 && (
                      <a href={form.file1Url} target="_blank" rel="noopener noreferrer"
                        className="text-xs text-blue-500 hover:underline">다운로드</a>
                    )}
                    <input ref={file1Ref} type="file" className="hidden"
                      onChange={(e) => setFile1(e.target.files?.[0] ?? null)} />
                  </div>
                </td>
              </tr>

              {/* File 2 */}
              <tr>
                <td className="px-5 py-3 bg-gray-50 text-gray-600 text-xs font-medium">파일2</td>
                <td className="px-5 py-3">
                  <div className="flex items-center gap-3">
                    <button type="button" onClick={() => file2Ref.current?.click()}
                      className="px-3 py-1.5 border border-gray-300 rounded text-xs text-gray-600 hover:bg-gray-50 transition-colors">
                      파일선택
                    </button>
                    <span className="text-xs text-gray-500">{file2 ? file2.name : form.file2Name || "-"}</span>
                    {form.file2Url && !file2 && (
                      <a href={form.file2Url} target="_blank" rel="noopener noreferrer"
                        className="text-xs text-blue-500 hover:underline">다운로드</a>
                    )}
                    <input ref={file2Ref} type="file" className="hidden"
                      onChange={(e) => setFile2(e.target.files?.[0] ?? null)} />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between">
          <Link href="/admin/press"
            className="px-5 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors">
            목록
          </Link>
          <button type="submit" disabled={saving}
            className="px-6 py-2.5 bg-[#1a1a2e] text-white rounded-lg text-sm hover:bg-[#16213e] transition-colors disabled:opacity-50">
            {saving ? "저장 중..." : "확인"}
          </button>
        </div>
      </form>
    </div>
  );
}
