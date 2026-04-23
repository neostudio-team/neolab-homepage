"use client";

import { useState, useEffect, useRef } from "react";
import {
  AgreeCheckbox,
  AgreeLabel,
  AgreeText,
  Backdrop,
  CircleArrow,
  CircleButton,
  CircleLine1,
  CloseButton,
  ErrorText,
  FileName,
  FilePickButton,
  FileRow,
  FormCol,
  FormGrid,
  FormInput,
  FormSelect,
  FormTextarea,
  HiddenFileInput,
  ModalBody,
  ModalPanel,
  ModalTitle,
  PillButton,
  PrivacyBox,
  PrivacyCol,
  PrivacyContent,
  PrivacyHeading,
  PrivacyLoading,
  SubmitButton,
  SubmitWrap,
  SuccessClose,
  SuccessIcon,
  SuccessLead,
  SuccessSub,
  SuccessWrap,
  type PillVariant,
} from "./ContactModalTrigger.styles";

const CATEGORIES = [
  { value: "", label: "-선택-" },
  { value: "제품문의", label: "제품문의" },
  { value: "제안사항", label: "제안사항 (콜라보레이션 포함)" },
  { value: "대량구매문의", label: "대량구매문의" },
  { value: "산업용제품문의", label: "산업용제품문의" },
  { value: "아이글 문의", label: "아이글 문의" },
  { value: "그리다보드 문의", label: "그리다보드 문의" },
  { value: "소리펜 문의", label: "소리펜 문의" },
  { value: "네오스마트펜 문의", label: "네오스마트펜 문의" },
  { value: "미디어플레이어 문의", label: "미디어플레이어 문의" },
  { value: "빔프로젝터 문의", label: "빔프로젝터 문의" },
  { value: "기타문의", label: "기타문의" },
];

interface Props {
  buttonText: string;
  variant?: "circle" | "pill";
  pillVariant?: PillVariant;
  defaultCategory?: string;
}

export default function ContactModalTrigger({
  buttonText,
  variant = "circle",
  pillVariant = "default",
  defaultCategory = "",
}: Props) {
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

  useEffect(() => {
    if (!open || privacyText) return;
    fetch("/api/legal/privacy")
      .then((r) => r.json())
      .then((d) => setPrivacyText(d.activeContent ?? ""))
      .catch(() => {});
  }, [open, privacyText]);

  useEffect(() => {
    function handler(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function resetForm() {
    setForm({
      category: defaultCategory,
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setFile(null);
    setAgreed(false);
    setDone(false);
    setError("");
    if (fileRef.current) fileRef.current.value = "";
  }

  function handleOpenModal() {
    setOpen(true);
    resetForm();
  }

  function handleCloseModal() {
    setOpen(false);
  }

  function handleBackdropMouseDown(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) setOpen(false);
  }

  function handleFileButtonClick() {
    fileRef.current?.click();
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!agreed) {
      setError("개인정보 수집 및 이용에 동의해 주세요.");
      return;
    }

    setSending(true);
    setError("");

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
      {variant === "pill" ? (
        <PillButton type="button" $pillVariant={pillVariant} onClick={handleOpenModal}>
          {buttonText}
        </PillButton>
      ) : (
        <CircleButton type="button" onClick={handleOpenModal}>
          <CircleLine1>{buttonText.replace(" →", "")}</CircleLine1>
          <CircleArrow aria-hidden="true" />
        </CircleButton>
      )}

      {open && (
        <Backdrop onMouseDown={handleBackdropMouseDown}>
          <ModalPanel onMouseDown={(e) => e.stopPropagation()}>
            <CloseButton type="button" onClick={handleCloseModal}>
              ✕
            </CloseButton>

            <ModalBody>
              <ModalTitle>CONTACT US</ModalTitle>

              {done ? (
                <SuccessWrap>
                  <SuccessIcon>✅</SuccessIcon>
                  <SuccessLead>문의가 접수되었습니다.</SuccessLead>
                  <SuccessSub>담당자 확인 후 입력하신 이메일로 회신드리겠습니다.</SuccessSub>
                  <SuccessClose type="button" onClick={handleCloseModal}>
                    닫기
                  </SuccessClose>
                </SuccessWrap>
              ) : (
                <form onSubmit={handleSubmit}>
                  <FormGrid>
                    <FormCol>
                      <FormSelect
                        value={form.category}
                        onChange={(e) =>
                          setForm({ ...form, category: e.target.value })
                        }
                      >
                        {CATEGORIES.map((c) => (
                          <option
                            key={c.value}
                            value={c.value}
                            style={{ backgroundColor: "#5a5250", color: "white" }}
                          >
                            {c.label}
                          </option>
                        ))}
                      </FormSelect>

                      <FormInput
                        type="text"
                        placeholder="*이름"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                      />

                      <FormInput
                        type="email"
                        placeholder="*이메일"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                      />

                      <FormInput
                        type="tel"
                        placeholder="연락처"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      />

                      <FormInput
                        type="text"
                        placeholder="*제목"
                        required
                        value={form.subject}
                        onChange={(e) =>
                          setForm({ ...form, subject: e.target.value })
                        }
                      />

                      <FormTextarea
                        placeholder="*내용"
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) =>
                          setForm({ ...form, message: e.target.value })
                        }
                      />

                      <FileRow>
                        <FileName>{file ? file.name : "첨부파일"}</FileName>
                        <FilePickButton type="button" onClick={handleFileButtonClick}>
                          파일선택
                        </FilePickButton>
                        <HiddenFileInput
                          ref={fileRef}
                          type="file"
                          onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                        />
                      </FileRow>
                    </FormCol>

                    <PrivacyCol>
                      <PrivacyBox>
                        <PrivacyHeading>개인정보 취급방침</PrivacyHeading>
                        {privacyText ? (
                          <PrivacyContent>{privacyText}</PrivacyContent>
                        ) : (
                          <PrivacyLoading>불러오는 중...</PrivacyLoading>
                        )}
                      </PrivacyBox>

                      <AgreeLabel>
                        <AgreeCheckbox
                          type="checkbox"
                          checked={agreed}
                          onChange={(e) => setAgreed(e.target.checked)}
                        />
                        <AgreeText>개인정보 수집 및 이용안내에 동의합니다.</AgreeText>
                      </AgreeLabel>
                    </PrivacyCol>
                  </FormGrid>

                  {error && <ErrorText>{error}</ErrorText>}

                  <SubmitWrap>
                    <SubmitButton type="submit" disabled={sending}>
                      {sending ? "전송 중..." : "SEND"}
                    </SubmitButton>
                  </SubmitWrap>
                </form>
              )}
            </ModalBody>
          </ModalPanel>
        </Backdrop>
      )}
    </>
  );
}
