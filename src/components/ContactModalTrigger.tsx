"use client";

import { useState, useEffect, useRef } from "react";

const CATEGORIES = [
  { value: "", label: "-선택-" },
  { value: "제품문의", label: "제품문의" },
  { value: "제안사항", label: "제안사항 (콜라보레이션 포함)" },
  { value: "대량구매문의", label: "대량구매문의" },
  { value: "산업용제품문의", label: "산업용제품문의" },
  { value: "아이글 문의", label: "아이글 문의" },
  { value: "기타문의", label: "기타문의" },
];

const FIELD = "w-full bg-[#5a5250] text-white placeholder-white/50 px-4 py-3 rounded text-sm focus:outline-none focus:ring-1 focus:ring-white/40";

interface Props {
  buttonText: string;
  variant?: "circle" | "pill";
  pillClassName?: string;
  defaultCategory?: string;
}

export default function ContactModalTrigger({ buttonText, variant = "circle", pillClassName, defaultCategory = "" }: Props) {
  const [open, setOpen] = useState(false);
  const [privacyText, setPrivacyText] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState({
    category: defaultCategory,
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [file, setFile] = useState<File | null>(null);

  // 개인정보처리방침 로드
  useEffect(() => {
    if (!open || privacyText) return;
    fetch("/api/legal/privacy")
      .then((r) => r.json())
      .then((d) => setPrivacyText(d.activeContent ?? ""))
      .catch(() => {});
  }, [open, privacyText]);

  // ESC 키로 닫기
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  // 스크롤 잠금
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  function resetForm() {
    setForm({ category: defaultCategory, name: "", email: "", phone: "", subject: "", message: "" });
    setFile(null);
    setAgreed(false);
    setDone(false);
    setError("");
    if (fileRef.current) fileRef.current.value = "";
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!agreed) { setError("개인정보 수집 및 이용에 동의해 주세요."); return; }

    setSending(true);
    setError("");

    try {
      let fileBase64 = "";
      let fileName = "";
      let fileType = "";

      // 파일을 base64로 변환 (Storage 불필요, Firestore에 직접 저장)
      if (file) {
        if (file.size > 5 * 1024 * 1024) {
          setError("파일 크기는 5MB 이하만 가능합니다.");
          setSending(false);
          return;
        }
        const reader = new FileReader();
        fileBase64 = await new Promise<string>((resolve, reject) => {
          reader.onload = () => resolve((reader.result as string).split(",")[1]);
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
        fileName = file.name;
        fileType = file.type;
      }

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, fileBase64, fileName, fileType }),
      });

      if (!res.ok) throw new Error("서버 오류");
      setDone(true);
    } catch {
      setError("전송에 실패했습니다. 잠시 후 다시 시도해 주세요.");
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      {/* 트리거 버튼 */}
      {variant === "pill" ? (
        <button
          onClick={() => { setOpen(true); resetForm(); }}
          className={pillClassName ?? "inline-block border border-white/40 text-white text-[17px] px-10 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors"}
        >
          {buttonText}
        </button>
      ) : (
        <button
          onClick={() => { setOpen(true); resetForm(); }}
          className="flex-shrink-0 flex flex-col items-center justify-center text-white font-bold text-center transition-all hover:bg-white hover:text-[#F5A623]"
          style={{
            width: "clamp(140px, 14vw, 200px)",
            height: "clamp(140px, 14vw, 200px)",
            borderRadius: "50%",
            border: "2px solid rgba(255,255,255,0.8)",
            fontSize: "clamp(13px, 1.2vw, 16px)",
            letterSpacing: ".3px",
            padding: "20px",
          }}
        >
          <span className="leading-tight">{buttonText.replace(" →", "")}</span>
          <span style={{ fontSize: "1.4em", marginTop: 4 }}>→</span>
        </button>
      )}

      {/* 모달 오버레이 */}
      {open && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
          onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
        >
          <div
            className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-lg"
            style={{ backgroundColor: "#3a3230" }}
          >
            {/* 닫기 버튼 */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-5 text-white/60 hover:text-white text-2xl leading-none z-10"
            >
              ✕
            </button>

            <div className="p-8 md:p-12">
              <h2 className="text-white font-bold text-2xl tracking-widest mb-8">CONTACT US</h2>

              {done ? (
                <div className="flex flex-col items-center justify-center py-20 gap-6">
                  <div className="text-5xl">✅</div>
                  <p className="text-white text-lg font-semibold">문의가 접수되었습니다.</p>
                  <p className="text-white/60 text-sm">담당자 확인 후 입력하신 이메일로 회신드리겠습니다.</p>
                  <button
                    onClick={() => setOpen(false)}
                    className="mt-4 px-8 py-3 bg-white text-[#3a3230] font-bold rounded text-sm tracking-wider"
                  >
                    닫기
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* 좌측: 입력 폼 */}
                    <div className="flex flex-col gap-3">
                      {/* 문의내용 */}
                      <select
                        value={form.category}
                        onChange={(e) => setForm({ ...form, category: e.target.value })}
                        className={FIELD}
                        style={{ appearance: "none", backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='white' d='M6 8L0 0h12z'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center" }}
                      >
                        {CATEGORIES.map((c) => (
                          <option key={c.value} value={c.value} style={{ backgroundColor: "#5a5250", color: "white" }}>
                            {c.label}
                          </option>
                        ))}
                      </select>

                      {/* 이름 */}
                      <input
                        type="text"
                        placeholder="*이름"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={FIELD}
                      />

                      {/* 이메일 */}
                      <input
                        type="email"
                        placeholder="*이메일"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={FIELD}
                      />

                      {/* 연락처 */}
                      <input
                        type="tel"
                        placeholder="연락처"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className={FIELD}
                      />

                      {/* 제목 */}
                      <input
                        type="text"
                        placeholder="*제목"
                        required
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className={FIELD}
                      />

                      {/* 내용 */}
                      <textarea
                        placeholder="*내용"
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className={`${FIELD} resize-none`}
                      />

                      {/* 첨부파일 */}
                      <div className="flex items-center gap-3 bg-[#5a5250] rounded px-4 py-3">
                        <span className="text-white/60 text-sm flex-1 truncate">
                          {file ? file.name : "첨부파일"}
                        </span>
                        <button
                          type="button"
                          onClick={() => fileRef.current?.click()}
                          className="flex-shrink-0 bg-[#3a3230] text-white text-xs px-4 py-1.5 rounded hover:bg-[#2d2624] transition-colors"
                        >
                          파일선택
                        </button>
                        <input
                          ref={fileRef}
                          type="file"
                          className="hidden"
                          onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                        />
                      </div>
                    </div>

                    {/* 우측: 개인정보처리방침 */}
                    <div className="flex flex-col">
                      <div
                        className="bg-white rounded p-4 flex-1 overflow-y-auto text-xs text-gray-700 leading-relaxed"
                        style={{ maxHeight: "360px" }}
                      >
                        <p className="font-bold text-sm mb-3 text-gray-900">개인정보 취급방침</p>
                        {privacyText ? (
                          <div className="whitespace-pre-wrap">{privacyText}</div>
                        ) : (
                          <p className="text-gray-400">불러오는 중...</p>
                        )}
                      </div>

                      {/* 동의 체크박스 */}
                      <label className="flex items-center gap-2 mt-4 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={agreed}
                          onChange={(e) => setAgreed(e.target.checked)}
                          className="w-4 h-4 accent-orange-400"
                        />
                        <span className="text-white/80 text-sm">
                          개인정보 수집 및 이용안내에 동의합니다.
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* 오류 메시지 */}
                  {error && (
                    <p className="mt-4 text-center text-red-400 text-sm">{error}</p>
                  )}

                  {/* SEND 버튼 */}
                  <div className="mt-8 flex justify-center">
                    <button
                      type="submit"
                      disabled={sending}
                      className="w-64 py-4 bg-white text-[#cc2222] font-bold tracking-[0.3em] text-sm rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      {sending ? "전송 중..." : "SEND"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
