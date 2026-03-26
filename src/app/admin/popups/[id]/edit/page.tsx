"use client";
import { useEffect, useState, use } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";
import Link from "next/link";
import RichEditor from "@/components/admin/RichEditor";

export default function EditPopupPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const { id } = use(params);
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    isActive: true,
    title: "",
    content: "",
    startDate: "",
    endDate: "",
    position: "center",
    language: "all",
    author: "관리자",
    width: 400,
    height: "",
    displayPages: "all",
  });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const token = await user.getIdToken();
          const res = await fetch(`/api/popups/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
            cache: "no-store"
          });
          if (!res.ok) throw new Error();
          
          const data = await res.json();
          setForm({
            isActive: data.isActive ?? true,
            title: data.title ?? "",
            content: data.content ?? "",
            startDate: data.startDate ?? "",
            endDate: data.endDate ?? "",
            position: data.position ?? "center",
            language: data.language ?? "all",
            author: data.author ?? "관리자",
            width: data.width ?? 400,
            height: data.height ?? "",
            displayPages: data.displayPages ?? "all",
          });
          setLoading(false);
        } catch (error) {
          alert("팝업 정보를 불러오지 못했습니다.");
          router.push("/admin/popups");
        }
      } else {
        // If not logged in, it will likely be redirected by a middleware or auth guard,
        // but just in case, we can redirect or show error
        // alert("로그인이 필요합니다.");
        // router.push("/login");
      }
    });

    return () => unsubscribe();
  }, [id, router]);

  function setField(field: string, value: any) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  const [showPreview, setShowPreview] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.title) return alert("제목을 입력해 주세요.");
    setShowPreview(true);
  }

  async function doSubmit() {
    setSaving(true);
    try {
      const token = await auth.currentUser?.getIdToken();
      const res = await fetch(`/api/popups/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ ...form, height: form.height ? Number(form.height) : null }),
      });
      if (res.ok) window.location.href = "/admin/popups";
      else alert("수정에 실패했습니다.");
    } catch {
      alert("수정 중 오류가 발생했습니다.");
    } finally {
      setSaving(false);
      setShowPreview(false);
    }
  }

  if (loading) return <div className="p-8 text-gray-500">불러오는 중...</div>;

  const PAGE_OPTIONS = [
    { value: "all", label: "모든 페이지" },
    { value: "/", label: "메인 홈" },
    { value: "/company", label: "Company" },
    { value: "/technology", label: "Technology" },
    { value: "/neosmartpen", label: "Neo smartpen" },
    { value: "/soundpen", label: "Soundpen" },
    { value: "/pokoro", label: "Pokoro" },
    { value: "/apps", label: "Apps" },
    { value: "/customer", label: "Customer" },
    { value: "/partnership", label: "Partnership" },
    { value: "/bi", label: "BI" }
  ];

  return (
    <div className="p-8 max-w-4xl">
      {showPreview && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-xl shadow-2xl flex flex-col w-full max-w-3xl max-h-[90vh] overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
              <h3 className="font-bold text-lg text-gray-800">팝업 미리보기</h3>
              <button type="button" onClick={() => setShowPreview(false)} className="text-gray-400 hover:text-gray-600">✕</button>
            </div>
            
            <div className="flex-1 overflow-y-auto bg-gray-100 p-8 flex flex-col items-center justify-center relative min-h-[400px]">
              <div className="absolute top-4 left-4 text-xs text-gray-400">실제 웹페이지 배경</div>
              
              <div 
                className="bg-white shadow-2xl overflow-hidden flex flex-col border border-gray-100 rounded-xl"
                style={{ width: form.width || 400, height: form.height || "auto", minHeight: 100 }}
              >
                <div className="flex-1 overflow-y-auto w-full max-h-[60vh]">
                  <div dangerouslySetInnerHTML={{ __html: form.content }} className="prose prose-sm max-w-none p-4 w-full" />
                </div>
                <div className="bg-[#f8f9fa] border-t border-gray-200 px-4 py-2.5 flex items-center justify-between text-xs">
                  <label className="flex items-center gap-1.5 text-gray-500 select-none">
                    <input type="checkbox" readOnly className="w-3.5 h-3.5 accent-[#1a1a2e]" />
                    오늘 하루 보지 않기
                  </label>
                  <span className="text-gray-600 font-medium">닫기 ✕</span>
                </div>
              </div>
            </div>

            <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex items-center justify-end gap-3">
              <span className="text-sm text-gray-500 mr-auto">※ 설정한 위치({form.position})에 맞추어 표출됩니다. 위 내용을 이대로 수정하시겠습니까?</span>
              <button type="button" onClick={() => setShowPreview(false)} className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-white transition-colors">취소</button>
              <button type="button" onClick={doSubmit} disabled={saving} className="px-5 py-2 bg-[#1a1a2e] text-white rounded-lg text-sm font-semibold hover:bg-[#16213e] transition-colors disabled:opacity-50">
                {saving ? "수정 중..." : "수정사항 저장"}
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="flex items-center gap-3 mb-6">
        <Link href="/admin/popups" className="text-gray-400 hover:text-gray-600 text-sm">← 목록으로</Link>
        <h1 className="text-2xl font-bold text-gray-800">팝업 수정</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-4">
          <table className="w-full text-sm">
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="px-5 py-3 bg-gray-50 text-gray-600 text-xs font-medium w-32">기본 설정</td>
                <td className="px-5 py-3">
                  <div className="flex items-center gap-6">
                    <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer select-none">
                      <input type="checkbox" checked={form.isActive} onChange={(e) => setField("isActive", e.target.checked)} className="w-4 h-4 rounded accent-[#1a1a2e]" />
                      활성화 (사용)
                    </label>
                    <div className="flex items-center gap-2 ml-4">
                      <span className="text-xs text-gray-500">작성자</span>
                      <span className="text-sm font-semibold text-gray-800 px-2 py-1">{form.author}</span>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="px-5 py-3 bg-gray-50 text-gray-600 text-xs font-medium">팝업 제목 <span className="text-red-500">*</span></td>
                <td className="px-5 py-3">
                  <input value={form.title} onChange={(e) => setField("title", e.target.value)} required
                    placeholder="관리자용 팝업 제목 (예: 신규 기능 안내)"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a2e]" />
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="px-5 py-3 bg-gray-50 text-gray-600 text-xs font-medium align-top pt-4">팝업 내용</td>
                <td className="px-5 py-3">
                  <RichEditor value={form.content} onChange={(v) => setField("content", v)} />
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="px-5 py-3 bg-gray-50 text-gray-600 text-xs font-medium align-top pt-4">게시 일정</td>
                <td className="px-5 py-3">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="w-16">시작일:</span>
                      <input type="datetime-local" value={form.startDate} onChange={e => setField("startDate", e.target.value)}
                        className="border border-gray-200 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2" />
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="w-16">종료일:</span>
                      <input type="datetime-local" value={form.endDate} onChange={e => setField("endDate", e.target.value)}
                        className="border border-gray-200 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2" />
                    </div>
                    <p className="text-xs text-gray-400 mt-1">※ 일정을 비워두면 상시 노출됩니다.</p>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="px-5 py-3 bg-gray-50 text-gray-600 text-xs font-medium">노출 페이지</td>
                <td className="px-5 py-3">
                  <select value={form.language} onChange={e => setField("language", e.target.value)}
                    className="border border-gray-200 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2">
                    <option value="all">전체</option>
                    <option value="ko">국문</option>
                    <option value="en">영문</option>
                    <option value="ja">일문</option>
                  </select>
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="px-5 py-3 bg-gray-50 text-gray-600 text-xs font-medium">화면 위치</td>
                <td className="px-5 py-3">
                  <select value={form.position} onChange={e => setField("position", e.target.value)}
                    className="border border-gray-200 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2">
                    <option value="center">가운데 (Center)</option>
                    <option value="top-left">왼쪽 상단 (Top-Left)</option>
                    <option value="top-right">오른쪽 상단 (Top-Right)</option>
                    <option value="bottom-left">왼쪽 하단 (Bottom-Left)</option>
                    <option value="bottom-right">오른쪽 하단 (Bottom-Right)</option>
                  </select>
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="px-5 py-3 bg-gray-50 text-gray-600 text-xs font-medium">크기 설정</td>
                <td className="px-5 py-3 text-sm">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      가로(px) <input type="number" value={form.width} onChange={e => setField("width", Number(e.target.value))} className="w-20 border rounded px-2 py-1" />
                    </div>
                    <div className="flex items-center gap-2">
                      세로(px) <input type="number" value={form.height || ""} onChange={e => setField("height", e.target.value)} placeholder="자동" className="w-20 border rounded px-2 py-1" />
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-5 py-3 bg-gray-50 text-gray-600 text-xs font-medium">상세 메뉴 선택</td>
                <td className="px-5 py-3">
                  <div className="flex flex-wrap gap-2">
                    {PAGE_OPTIONS.map(opt => {
                      const isSelected = form.displayPages === "all" ? opt.value === "all" : form.displayPages.split(",").map(s => s.trim()).includes(opt.value);
                      return (
                        <button 
                          type="button"
                          key={opt.value}
                          onClick={() => {
                            if (opt.value === "all") {
                              setField("displayPages", "all");
                            } else {
                              let cur = form.displayPages === "all" ? [] : form.displayPages.split(",").map(s => s.trim()).filter(Boolean);
                              if (cur.includes(opt.value)) {
                                cur = cur.filter(x => x !== opt.value);
                              } else {
                                cur.push(opt.value);
                              }
                              setField("displayPages", cur.length ? cur.join(",") : "all");
                            }
                          }}
                          className={`px-3 py-1.5 text-xs rounded-full border transition-colors ${isSelected ? "bg-[#1a1a2e] text-white border-[#1a1a2e]" : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"}`}
                        >
                          {opt.label}
                        </button>
                      );
                    })}
                  </div>
                  <p className="text-xs text-gray-400 mt-2">※ 클릭하여 여러 페이지를 선택할 수 있습니다. 아무것도 안 선택시 '모든 페이지'가 됩니다.</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between">
          <Link href="/admin/popups" className="px-5 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors">취소</Link>
          <button type="submit" disabled={saving}
            className="px-6 py-2.5 bg-[#1a1a2e] text-white rounded-lg text-sm hover:bg-[#16213e] transition-colors disabled:opacity-50">
            {saving ? "저장 중..." : "수정사항 저장"}
          </button>
        </div>
      </form>
    </div>
  );
}
