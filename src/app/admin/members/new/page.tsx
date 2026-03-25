"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";
import Link from "next/link";

const FIELD_ROWS = [
  { key: "username", label: "아이디", required: true, type: "text" },
  { key: "name", label: "이름", required: true, type: "text" },
  { key: "password", label: "비밀번호", required: false, type: "password" },
  { key: "group", label: "그룹", required: false, type: "text" },
  { key: "email", label: "이메일", required: false, type: "email" },
  { key: "phone", label: "핸드폰", required: false, type: "text" },
  { key: "birthday", label: "생년월일", required: false, type: "text" },
  { key: "messenger", label: "메신저", required: false, type: "text" },
  { key: "homepage", label: "홈페이지", required: false, type: "text" },
  { key: "blog", label: "블로그", required: false, type: "text" },
  { key: "homePhone", label: "집 전화", required: false, type: "text" },
  { key: "statusMessage", label: "상태 메시지", required: false, type: "text" },
];

export default function NewMemberPage() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    username: "", name: "", password: "", group: "home", level: 2,
    email: "", phone: "", birthday: "", messenger: "",
    homepage: "", blog: "", homePhone: "", statusMessage: "",
    memberMemo: "", adminMemo: "",
  });

  function set(key: string, value: string | number) {
    setForm(f => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.username) return alert("아이디를 입력해 주세요.");
    if (!form.name) return alert("이름을 입력해 주세요.");
    setSaving(true);
    try {
      const token = await auth.currentUser?.getIdToken();
      const res = await fetch("/api/admin-members", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify(form),
      });
      if (res.ok) router.push("/admin/members");
      else alert("등록에 실패했습니다.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="p-8 max-w-3xl">
      <div className="flex items-center gap-3 mb-6">
        <Link href="/admin/members" className="text-gray-400 hover:text-gray-600 text-sm">← 목록으로</Link>
        <h1 className="text-2xl font-bold text-gray-800">회원 등록</h1>
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
                      className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a2e] w-64"
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
            {saving ? "등록 중..." : "확인"}
          </button>
        </div>
      </form>
    </div>
  );
}
