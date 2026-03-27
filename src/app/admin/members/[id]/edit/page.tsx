"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { auth } from "@/lib/firebase";
import Link from "next/link";

const FIELD_ROWS = [
  { key: "name", label: "이름", required: true, type: "text" },
  { key: "email", label: "이메일", required: true, type: "email" },
];

export default function EditMemberPage() {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    name: "", email: "", level: 2,
    memberMemo: "", adminMemo: "",
  });

  useEffect(() => {
    (async () => {
      const user = auth.currentUser;
      if (!user) { router.replace("/admin/members"); return; }
      const token = await user.getIdToken();

      // 권한 확인
      const meRes = await fetch(`/api/admin-members?email=${encodeURIComponent(user.email ?? "")}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (meRes.ok) {
        const me = await meRes.json();
        if (Number(me?.level) !== 1) {
          alert("최고관리자만 접근할 수 있습니다.");
          router.replace("/admin/members");
          return;
        }
      }

      const res = await fetch(`/api/admin-members/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        const data = await res.json();
        setForm({
          name: data.name ?? "",
          email: data.email ?? "",
          level: Number(data.level) || 2,
          memberMemo: data.memberMemo ?? "",
          adminMemo: data.adminMemo ?? "",
        });
      }
      setLoading(false);
    })();
  }, [id, router]);

  function set(key: string, value: string | number) {
    setForm(f => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    try {
      const token = await auth.currentUser?.getIdToken();
      const res = await fetch(`/api/admin-members/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify(form),
      });
      if (res.ok) router.push("/admin/members");
      else alert("수정에 실패했습니다.");
    } finally {
      setSaving(false);
    }
  }

  if (loading) return <div className="p-8 text-gray-400 text-sm">불러오는 중...</div>;

  return (
    <div className="p-8 max-w-3xl">
      <div className="flex items-center gap-3 mb-6">
        <Link href="/admin/members" className="text-gray-400 hover:text-gray-600 text-sm">← 목록으로</Link>
        <h1 className="text-2xl font-bold text-gray-800">회원 수정</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-4">
          <table className="w-full text-sm">
            <tbody>
              {FIELD_ROWS.map(row => (
                <tr key={row.key} className="border-b border-gray-100 last:border-0">
                  <td className="px-5 py-3 w-36 bg-gray-50 text-gray-600 text-xs font-medium">
                    {row.label}{row.required && <span className="text-red-500 ml-0.5">(*)</span>}
                  </td>
                  <td className="px-5 py-3">
                    <input
                      type={row.type}
                      value={(form as Record<string, string | number>)[row.key] as string}
                      onChange={e => set(row.key, e.target.value)}
                      required={row.required}
                      className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a2e] w-72"
                    />
                  </td>
                </tr>
              ))}
              <tr className="border-b border-gray-100">
                <td className="px-5 py-3 bg-gray-50 text-gray-600 text-xs font-medium">레벨</td>
                <td className="px-5 py-3">
                  <select value={form.level} onChange={e => set("level", Number(e.target.value))}
                    className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a2e]">
                    <option value={1}>1 (최고관리자)</option>
                    <option value={2}>2 (일반관리자)</option>
                  </select>
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="px-5 py-3 bg-gray-50 text-gray-600 text-xs font-medium align-top pt-4">회원 메모</td>
                <td className="px-5 py-3">
                  <textarea value={form.memberMemo} onChange={e => set("memberMemo", e.target.value)}
                    rows={4} className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a2e] w-full resize-y" />
                </td>
              </tr>
              <tr>
                <td className="px-5 py-3 bg-gray-50 text-gray-600 text-xs font-medium align-top pt-4">관리자 메모</td>
                <td className="px-5 py-3">
                  <textarea value={form.adminMemo} onChange={e => set("adminMemo", e.target.value)}
                    rows={4} className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a2e] w-full resize-y" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between">
          <Link href="/admin/members" className="px-5 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors">목록</Link>
          <button type="submit" disabled={saving}
            className="px-6 py-2.5 bg-[#1a1a2e] text-white rounded-lg text-sm hover:bg-[#16213e] transition-colors disabled:opacity-50">
            {saving ? "저장 중..." : "확인"}
          </button>
        </div>
      </form>
    </div>
  );
}
