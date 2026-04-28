"use client";

import { useState, useRef } from "react";
import {
  FormCol,
  FormTitle,
  FormBody,
  FormSelect,
  FormInput,
  FormTextarea,
  FileRow,
  FileButton,
  FileName,
  HiddenFile,
  AgreeRow,
  AgreeBox,
  SubmitBtn,
  FormError,
  FormSuccess,
} from "../CustomerPage.styles";

const CATEGORIES = [
  { value: "", label: "제품선택" },
  { value: "제품문의", label: "제품문의" },
  { value: "소리펜 문의", label: "소리펜 문의" },
  { value: "네오스마트펜 문의", label: "네오스마트펜 문의" },
  { value: "미디어플레이어 문의", label: "미디어플레이어 문의" },
  { value: "빔프로젝터 문의", label: "빔프로젝터 문의" },
  { value: "아이글 문의", label: "아이글 문의" },
  { value: "그리다보드 문의", label: "그리다보드 문의" },
  { value: "대량구매문의", label: "대량구매문의" },
  { value: "기타문의", label: "기타문의" },
];

export default function InquiryForm() {
  const [form, setForm] = useState({
    category: "",
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [agreed, setAgreed] = useState(false);
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  function set<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!form.category) return setError("제품을 선택해 주세요.");
    if (!form.name) return setError("성명을 입력해 주세요.");
    if (!form.email) return setError("이메일을 입력해 주세요.");
    if (!form.subject) return setError("제목을 입력해 주세요.");
    if (!form.message) return setError("문의사항을 입력해 주세요.");
    if (!agreed) return setError("개인정보 수집 및 이용에 동의해 주세요.");

    setSending(true);
    try {
      let fileBase64 = "";
      let fileName = "";
      let fileType = "";
      if (file) {
        if (file.size > 5 * 1024 * 1024) {
          setError("파일 크기는 5MB 이하만 가능합니다.");
          setSending(false);
          return;
        }
        const reader = new FileReader();
        fileBase64 = await new Promise<string>((resolve, reject) => {
          reader.onload = () =>
            resolve((reader.result as string).split(",")[1]);
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
      if (!res.ok) throw new Error("server error");
      setDone(true);
    } catch {
      setError("전송에 실패했습니다. 잠시 후 다시 시도해 주세요.");
    } finally {
      setSending(false);
    }
  }

  return (
    <FormCol>
      <FormTitle>Message</FormTitle>

      {done ? (
        <FormSuccess>
          ✓ 문의가 접수되었습니다.
          <br />
          담당자 확인 후 입력하신 이메일로 회신드리겠습니다.
        </FormSuccess>
      ) : (
        <FormBody onSubmit={onSubmit}>
          <FormSelect
            value={form.category}
            onChange={(e) => set("category", e.target.value)}
            required
          >
            {CATEGORIES.map((c) => (
              <option key={c.value} value={c.value} disabled={!c.value}>
                {c.label}
              </option>
            ))}
          </FormSelect>
          <FormInput
            type="text"
            placeholder="성명"
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
            required
          />
          <FormInput
            type="tel"
            placeholder="연락처"
            value={form.phone}
            onChange={(e) => set("phone", e.target.value)}
          />
          <FormInput
            type="email"
            placeholder="이메일"
            value={form.email}
            onChange={(e) => set("email", e.target.value)}
            required
          />
          <FormInput
            type="text"
            placeholder="제목"
            value={form.subject}
            onChange={(e) => set("subject", e.target.value)}
            required
          />
          <FormTextarea
            placeholder="문의사항"
            value={form.message}
            onChange={(e) => set("message", e.target.value)}
            required
          />
          <FileRow>
            <FileButton
              type="button"
              onClick={() => fileRef.current?.click()}
            >
              파일 첨부
            </FileButton>
            <FileName>{file ? file.name : "선택된 파일 없음"}</FileName>
            <HiddenFile
              ref={fileRef}
              onChange={(e) => setFile(e.target.files?.[0] ?? null)}
            />
          </FileRow>
          <AgreeRow>
            <AgreeBox
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            개인정보 수집 및 이용에 동의합니다.
          </AgreeRow>
          {error && <FormError>{error}</FormError>}
          <SubmitBtn type="submit" disabled={sending}>
            {sending ? "전송 중..." : "문의하기"}
          </SubmitBtn>
        </FormBody>
      )}
    </FormCol>
  );
}
