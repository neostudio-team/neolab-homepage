"use client";
import { useCallback, useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import { assignLocationHref } from "@/lib/browser-runtime";
import RichEditor from "@/components/admin/RichEditor";
import {
  AdminAuthorName,
  AdminBackLink,
  AdminBtn,
  AdminCheckbox,
  AdminChipButton,
  AdminFlexColGap,
  AdminFlexGap6,
  AdminFlexRowWrap,
  AdminFooterHint,
  AdminFormActions,
  AdminFormLabelCell,
  AdminFormLabelCellTop,
  AdminFormNote,
  AdminFormTable,
  AdminFormValueCell,
  AdminH1,
  AdminHeaderRow,
  AdminHtmlPreview,
  AdminIconButton,
  AdminInput,
  AdminLabelRow,
  AdminLinkMuted,
  AdminModalFooterBar,
  AdminModalHeaderBar,
  AdminModalOverlayHigh,
  AdminModalTitle,
  AdminModalWide,
  AdminMutedSmall,
  AdminNumberField,
  AdminPage,
  AdminPreviewCloseCaption,
  AdminPreviewFooter,
  AdminPreviewFrame,
  AdminPreviewHint,
  AdminRequiredMark,
  AdminScrollArea,
  AdminScrollAreaLg,
  AdminSelect,
  AdminTableForm,
  AdminDatetimeRow,
  AdminDatetimeLabel,
} from "@/components/admin/AdminCommon.styles";

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
  { value: "/bi", label: "BI" },
];

export default function NewPopupPage() {
  const [saving, setSaving] = useState(false);
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

  const setField = useCallback((field: string, value: unknown) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  }, []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const name = user.displayName || user.email?.split("@")[0] || "관리자";
        setForm((prev) => ({ ...prev, author: name }));
      }
    });
    return () => unsubscribe();
  }, []);

  const [showPreview, setShowPreview] = useState(false);

  const handleClosePreview = useCallback(() => {
    setShowPreview(false);
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (!form.title) {
        alert("제목을 입력해 주세요.");
        return;
      }
      setShowPreview(true);
    },
    [form.title],
  );

  const doSubmit = useCallback(async () => {
    setSaving(true);
    try {
      const token = await auth.currentUser?.getIdToken();
      const res = await fetch("/api/popups", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ ...form, height: form.height ? Number(form.height) : null }),
      });
      if (res.ok) assignLocationHref("/admin/popups");
      else alert("등록에 실패했습니다.");
    } catch {
      alert("등록 중 오류가 발생했습니다.");
    } finally {
      setSaving(false);
      setShowPreview(false);
    }
  }, [form]);

  const previewHeight = form.height ? Number(form.height) : null;

  const toggleDisplayPage = useCallback((optValue: string) => {
    if (optValue === "all") {
      setForm((prev) => ({ ...prev, displayPages: "all" }));
      return;
    }
    setForm((prev) => {
      let cur =
        prev.displayPages === "all" ? [] : prev.displayPages.split(",").map((s) => s.trim()).filter(Boolean);
      if (cur.includes(optValue)) cur = cur.filter((x) => x !== optValue);
      else cur.push(optValue);
      return { ...prev, displayPages: cur.length ? cur.join(",") : "all" };
    });
  }, []);

  const handleModalWideClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  }, []);

  return (
    <AdminPage $max="4xl">
      {showPreview ? (
        <AdminModalOverlayHigh $padded>
          <AdminModalWide onClick={handleModalWideClick}>
            <AdminModalHeaderBar>
              <AdminModalTitle as="h3">팝업 미리보기</AdminModalTitle>
              <AdminIconButton type="button" onClick={handleClosePreview} aria-label="닫기">
                ✕
              </AdminIconButton>
            </AdminModalHeaderBar>

            <AdminScrollAreaLg>
              <AdminPreviewHint>실제 웹페이지 배경</AdminPreviewHint>

              <AdminPreviewFrame $width={form.width || 400} $height={previewHeight}>
                <AdminScrollArea>
                  <AdminHtmlPreview dangerouslySetInnerHTML={{ __html: form.content }} />
                </AdminScrollArea>
                <AdminPreviewFooter>
                  <AdminLabelRow>
                    <AdminCheckbox type="checkbox" readOnly checked={false} />
                    오늘 하루 보지 않기
                  </AdminLabelRow>
                  <AdminPreviewCloseCaption>닫기 ✕</AdminPreviewCloseCaption>
                </AdminPreviewFooter>
              </AdminPreviewFrame>
            </AdminScrollAreaLg>

            <AdminModalFooterBar>
              <AdminFooterHint>
                ※ 설정한 위치({form.position})에 맞추어 표출됩니다. 위 내용을 이대로 등록하시겠습니까?
              </AdminFooterHint>
              <AdminBtn type="button" $variant="secondary" onClick={handleClosePreview}>
                취소
              </AdminBtn>
              <AdminBtn type="button" onClick={doSubmit} disabled={saving}>
                {saving ? "등록 중..." : "이대로 등록"}
              </AdminBtn>
            </AdminModalFooterBar>
          </AdminModalWide>
        </AdminModalOverlayHigh>
      ) : null}

      <AdminHeaderRow>
        <AdminBackLink href="/admin/popups">← 목록으로</AdminBackLink>
        <AdminH1>새 팝업 등록</AdminH1>
      </AdminHeaderRow>

      <form onSubmit={handleSubmit}>
        <AdminTableForm>
          <AdminFormTable>
            <tbody>
              <tr>
                <AdminFormLabelCell>기본 설정</AdminFormLabelCell>
                <AdminFormValueCell>
                  <AdminFlexGap6>
                    <AdminLabelRow>
                      <AdminCheckbox
                        type="checkbox"
                        checked={form.isActive}
                        onChange={(e) => setField("isActive", e.target.checked)}
                      />
                      활성화 (사용)
                    </AdminLabelRow>
                    <AdminFlexGap6>
                      <AdminMutedSmall as="span">작성자</AdminMutedSmall>
                      <AdminAuthorName>{form.author}</AdminAuthorName>
                    </AdminFlexGap6>
                  </AdminFlexGap6>
                </AdminFormValueCell>
              </tr>
              <tr>
                <AdminFormLabelCell>
                  팝업 제목 <AdminRequiredMark>*</AdminRequiredMark>
                </AdminFormLabelCell>
                <AdminFormValueCell>
                  <AdminInput
                    value={form.title}
                    onChange={(e) => setField("title", e.target.value)}
                    required
                    placeholder="관리자용 팝업 제목 (예: 신규 기능 안내)"
                  />
                </AdminFormValueCell>
              </tr>
              <tr>
                <AdminFormLabelCellTop>팝업 내용</AdminFormLabelCellTop>
                <AdminFormValueCell>
                  <RichEditor value={form.content} onChange={(v) => setField("content", v)} />
                </AdminFormValueCell>
              </tr>
              <tr>
                <AdminFormLabelCellTop>게시 일정</AdminFormLabelCellTop>
                <AdminFormValueCell>
                  <AdminFlexColGap>
                    <AdminDatetimeRow>
                      <AdminDatetimeLabel>시작일:</AdminDatetimeLabel>
                      <AdminInput
                        type="datetime-local"
                        value={form.startDate}
                        onChange={(e) => setField("startDate", e.target.value)}
                      />
                    </AdminDatetimeRow>
                    <AdminDatetimeRow>
                      <AdminDatetimeLabel>종료일:</AdminDatetimeLabel>
                      <AdminInput
                        type="datetime-local"
                        value={form.endDate}
                        onChange={(e) => setField("endDate", e.target.value)}
                      />
                    </AdminDatetimeRow>
                    <AdminFormNote>※ 일정을 비워두면 상시 노출됩니다.</AdminFormNote>
                  </AdminFlexColGap>
                </AdminFormValueCell>
              </tr>
              <tr>
                <AdminFormLabelCell>노출 페이지</AdminFormLabelCell>
                <AdminFormValueCell>
                  <AdminSelect value={form.language} onChange={(e) => setField("language", e.target.value)}>
                    <option value="all">전체</option>
                    <option value="ko">국문</option>
                    <option value="en">영문</option>
                    <option value="ja">일문</option>
                  </AdminSelect>
                </AdminFormValueCell>
              </tr>
              <tr>
                <AdminFormLabelCell>화면 위치</AdminFormLabelCell>
                <AdminFormValueCell>
                  <AdminSelect value={form.position} onChange={(e) => setField("position", e.target.value)}>
                    <option value="center">가운데 (Center)</option>
                    <option value="top-left">왼쪽 상단 (Top-Left)</option>
                    <option value="top-right">오른쪽 상단 (Top-Right)</option>
                    <option value="bottom-left">왼쪽 하단 (Bottom-Left)</option>
                    <option value="bottom-right">오른쪽 하단 (Bottom-Right)</option>
                  </AdminSelect>
                </AdminFormValueCell>
              </tr>
              <tr>
                <AdminFormLabelCell>크기 설정</AdminFormLabelCell>
                <AdminFormValueCell>
                  <AdminFlexGap6>
                    <AdminFlexGap6>
                      가로(px){" "}
                      <AdminNumberField
                        type="number"
                        value={form.width}
                        onChange={(e) => setField("width", Number(e.target.value))}
                      />
                    </AdminFlexGap6>
                    <AdminFlexGap6>
                      세로(px){" "}
                      <AdminNumberField
                        type="number"
                        value={form.height === "" ? "" : form.height}
                        onChange={(e) => setField("height", e.target.value)}
                        placeholder="자동"
                      />
                    </AdminFlexGap6>
                  </AdminFlexGap6>
                </AdminFormValueCell>
              </tr>
              <tr>
                <AdminFormLabelCell>상세 메뉴 선택</AdminFormLabelCell>
                <AdminFormValueCell>
                  <AdminFlexRowWrap>
                    {PAGE_OPTIONS.map((opt) => {
                      const isSelected =
                        form.displayPages === "all"
                          ? opt.value === "all"
                          : form.displayPages
                              .split(",")
                              .map((s) => s.trim())
                              .includes(opt.value);
                      return (
                        <AdminChipButton
                          key={opt.value}
                          type="button"
                          $active={isSelected}
                          onClick={() => toggleDisplayPage(opt.value)}
                        >
                          {opt.label}
                        </AdminChipButton>
                      );
                    })}
                  </AdminFlexRowWrap>
                  <AdminFormNote>
                    ※ 클릭하여 여러 페이지를 선택할 수 있습니다. 아무것도 안 선택시 &apos;모든 페이지&apos;가 됩니다.
                  </AdminFormNote>
                </AdminFormValueCell>
              </tr>
            </tbody>
          </AdminFormTable>
        </AdminTableForm>
        <AdminFormActions>
          <AdminLinkMuted href="/admin/popups">취소</AdminLinkMuted>
          <AdminBtn type="submit" disabled={saving}>
            {saving ? "등록 중..." : "확인"}
          </AdminBtn>
        </AdminFormActions>
      </form>
    </AdminPage>
  );
}
