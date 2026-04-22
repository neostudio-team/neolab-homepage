"use client";
import { useCallback, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { auth, storage } from "@/lib/firebase";
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import RichEditor from "@/components/admin/RichEditor";
import {
  AdminBackLink,
  AdminBtn,
  AdminCheckbox,
  AdminFileButton,
  AdminFileRow,
  AdminFlexGap6,
  AdminFormActions,
  AdminFormLabelCell,
  AdminFormLabelCellTop,
  AdminFormTable,
  AdminFormValueCell,
  AdminH1,
  AdminHeaderRow,
  AdminHiddenInput,
  AdminInput,
  AdminLabelRow,
  AdminLinkMuted,
  AdminModalActions,
  AdminModalDesc,
  AdminModalEmoji,
  AdminModalOverlay,
  AdminModalTitle,
  AdminMutedSmall,
  AdminMutedXs,
  AdminPage,
  AdminRequiredMark,
  AdminTableForm,
  AdminConfirmModal,
} from "@/components/admin/AdminCommon.styles";

export default function NewCustomerNoticePage() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    isPinned: false,
    isSecret: false,
    titleKo: "",
    contentKo: "",
    author: "NeoLAB_CS",
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

  const setField = useCallback((field: string, value: string | boolean) => {
    setForm((f) => ({ ...f, [field]: value }));
  }, []);

  const handleCloseModal = useCallback(() => {
    setShowModal(false);
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (!form.titleKo) {
        alert("제목을 입력해 주세요.");
        return;
      }
      setShowModal(true);
    },
    [form.titleKo],
  );

  const handlePickFile1 = useCallback(() => {
    file1Ref.current?.click();
  }, []);

  const handlePickFile2 = useCallback(() => {
    file2Ref.current?.click();
  }, []);

  const handleFile1Change = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0] ?? null;
    if (f && f.size > 10 * 1024 * 1024) {
      alert("파일 크기는 최대 10MB까지 가능합니다.");
      e.target.value = "";
      return;
    }
    setFile1(f);
  }, []);

  const handleFile2Change = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0] ?? null;
    if (f && f.size > 10 * 1024 * 1024) {
      alert("파일 크기는 최대 10MB까지 가능합니다.");
      e.target.value = "";
      return;
    }
    setFile2(f);
  }, []);

  async function uploadFile(file: File): Promise<{ url: string; name: string }> {
    const fileRef = storageRef(storage, `customer/${Date.now()}_${file.name}`);
    const timeout = new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error("파일 업로드 시간 초과")), 15000),
    );
    await Promise.race([uploadBytes(fileRef, file), timeout]);
    return { url: await getDownloadURL(fileRef), name: file.name };
  }

  const doSubmit = useCallback(async () => {
    setShowModal(false);
    setSaving(true);
    try {
      const payload = { ...form };
      if (file1) {
        try {
          const r = await uploadFile(file1);
          payload.file1Url = r.url;
          payload.file1Name = r.name;
        } catch {
          alert("파일1 업로드 실패. 파일 없이 등록합니다.");
        }
      }
      if (file2) {
        try {
          const r = await uploadFile(file2);
          payload.file2Url = r.url;
          payload.file2Name = r.name;
        } catch {
          alert("파일2 업로드 실패. 파일 없이 등록합니다.");
        }
      }
      const token = await auth.currentUser?.getIdToken();
      const res = await fetch("/api/customer-notices", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify(payload),
      });
      if (res.ok) router.push("/admin/customer");
      else alert("등록에 실패했습니다.");
    } catch (err) {
      console.error(err);
      alert("등록 중 오류가 발생했습니다.");
    } finally {
      setSaving(false);
    }
  }, [file1, file2, form, router]);

  return (
    <AdminPage $max="4xl">
      {showModal ? (
        <AdminModalOverlay>
          <AdminConfirmModal>
            <AdminModalEmoji>🎧</AdminModalEmoji>
            <AdminModalTitle>고객지원 공지 등록</AdminModalTitle>
            <AdminModalDesc>입력한 내용으로 고객지원 공지를 등록하시겠습니까?</AdminModalDesc>
            <AdminModalActions>
              <AdminBtn type="button" $variant="secondary" $block onClick={handleCloseModal}>
                취소
              </AdminBtn>
              <AdminBtn type="button" $block onClick={doSubmit}>
                등록
              </AdminBtn>
            </AdminModalActions>
          </AdminConfirmModal>
        </AdminModalOverlay>
      ) : null}

      <AdminHeaderRow>
        <AdminBackLink href="/admin/customer">← 목록으로</AdminBackLink>
        <AdminH1>고객지원 공지 작성</AdminH1>
      </AdminHeaderRow>

      <form onSubmit={handleSubmit}>
        <AdminTableForm>
          <AdminFormTable>
            <tbody>
              <tr>
                <AdminFormLabelCell>옵션</AdminFormLabelCell>
                <AdminFormValueCell>
                  <AdminFlexGap6>
                    <AdminLabelRow>
                      <AdminCheckbox
                        type="checkbox"
                        checked={form.isSecret}
                        onChange={(e) => setField("isSecret", e.target.checked)}
                      />
                      비밀글
                    </AdminLabelRow>
                    <AdminLabelRow>
                      <AdminCheckbox
                        type="checkbox"
                        checked={form.isPinned}
                        onChange={(e) => setField("isPinned", e.target.checked)}
                      />
                      공지
                    </AdminLabelRow>
                    <AdminFlexGap6>
                      <AdminMutedSmall as="label" htmlFor="cs-new-author">
                        작성자
                      </AdminMutedSmall>
                      <AdminInput
                        id="cs-new-author"
                        value={form.author}
                        onChange={(e) => setField("author", e.target.value)}
                      />
                    </AdminFlexGap6>
                  </AdminFlexGap6>
                </AdminFormValueCell>
              </tr>
              <tr>
                <AdminFormLabelCell>외부 링크</AdminFormLabelCell>
                <AdminFormValueCell>
                  <AdminInput
                    value={form.externalUrl}
                    onChange={(e) => setField("externalUrl", e.target.value)}
                    placeholder="https://... (선택)"
                  />
                </AdminFormValueCell>
              </tr>
              <tr>
                <AdminFormLabelCell>
                  제목 <AdminRequiredMark>*</AdminRequiredMark>
                </AdminFormLabelCell>
                <AdminFormValueCell>
                  <AdminInput
                    value={form.titleKo}
                    onChange={(e) => setField("titleKo", e.target.value)}
                    required
                    placeholder="공지 제목을 입력하세요"
                  />
                </AdminFormValueCell>
              </tr>
              <tr>
                <AdminFormLabelCellTop>내용</AdminFormLabelCellTop>
                <AdminFormValueCell>
                  <RichEditor value={form.contentKo} onChange={(v) => setField("contentKo", v)} />
                </AdminFormValueCell>
              </tr>
              <tr>
                <AdminFormLabelCell>태그</AdminFormLabelCell>
                <AdminFormValueCell>
                  <AdminInput
                    value={form.tags}
                    onChange={(e) => setField("tags", e.target.value)}
                    placeholder="쉼표로 구분 (예: FAQ, 점검, 업데이트)"
                  />
                </AdminFormValueCell>
              </tr>
              <tr>
                <AdminFormLabelCell>파일1</AdminFormLabelCell>
                <AdminFormValueCell>
                  <AdminFileRow>
                    <AdminFileButton type="button" onClick={handlePickFile1}>
                      파일선택
                    </AdminFileButton>
                    <AdminMutedSmall as="span">{file1 ? file1.name : "-"}</AdminMutedSmall>
                    <AdminMutedXs as="span">최대 10MB</AdminMutedXs>
                    <AdminHiddenInput ref={file1Ref} type="file" onChange={handleFile1Change} />
                  </AdminFileRow>
                </AdminFormValueCell>
              </tr>
              <tr>
                <AdminFormLabelCell>파일2</AdminFormLabelCell>
                <AdminFormValueCell>
                  <AdminFileRow>
                    <AdminFileButton type="button" onClick={handlePickFile2}>
                      파일선택
                    </AdminFileButton>
                    <AdminMutedSmall as="span">{file2 ? file2.name : "-"}</AdminMutedSmall>
                    <AdminMutedXs as="span">최대 10MB</AdminMutedXs>
                    <AdminHiddenInput ref={file2Ref} type="file" onChange={handleFile2Change} />
                  </AdminFileRow>
                </AdminFormValueCell>
              </tr>
            </tbody>
          </AdminFormTable>
        </AdminTableForm>
        <AdminFormActions>
          <AdminLinkMuted href="/admin/customer">목록</AdminLinkMuted>
          <AdminBtn type="submit" disabled={saving}>
            {saving ? "등록 중..." : "확인"}
          </AdminBtn>
        </AdminFormActions>
      </form>
    </AdminPage>
  );
}
