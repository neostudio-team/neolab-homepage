"use client";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";
import {
  AdminBackLink,
  AdminBtn,
  AdminFormActions,
  AdminFormLabelCellTop,
  AdminFormTable,
  AdminFormValueCell,
  AdminH1,
  AdminHeaderRow,
  AdminInputW72,
  AdminLabelCellNarrow,
  AdminLinkMuted,
  AdminPage,
  AdminRequiredMark,
  AdminSelect,
  AdminTableForm,
  AdminTextarea,
  AdminCardPadded,
  AdminMutedSmall,
} from "@/components/admin/AdminCommon.styles";

const FIELD_ROWS = [
  { key: "name", label: "이름", required: true, type: "text" as const },
  { key: "email", label: "이메일", required: true, type: "email" as const },
];

export default function NewMemberPage() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [permitted, setPermitted] = useState<boolean | null>(null);

  useEffect(() => {
    void (async () => {
      const user = auth.currentUser;
      if (!user) {
        router.replace("/admin/members");
        return;
      }
      const token = await user.getIdToken();
      const res = await fetch(`/api/admin-members?email=${encodeURIComponent(user.email ?? "")}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        const data = await res.json();
        if (Number(data?.level) === 1) setPermitted(true);
        else {
          alert("최고관리자만 접근할 수 있습니다.");
          router.replace("/admin/members");
        }
      }
    })();
  }, [router]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    level: 2,
    memberMemo: "",
    adminMemo: "",
  });

  const setField = useCallback((key: string, value: string | number) => {
    setForm((f) => ({ ...f, [key]: value }));
  }, []);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!form.name) {
        alert("이름을 입력해 주세요.");
        return;
      }
      if (!form.email) {
        alert("이메일을 입력해 주세요.");
        return;
      }
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
    },
    [form, router],
  );

  if (permitted === null) {
    return (
      <AdminPage $max="3xl">
        <AdminCardPadded>
          <AdminMutedSmall as="span">권한 확인 중...</AdminMutedSmall>
        </AdminCardPadded>
      </AdminPage>
    );
  }

  return (
    <AdminPage $max="3xl">
      <AdminHeaderRow>
        <AdminBackLink href="/admin/members">← 목록으로</AdminBackLink>
        <AdminH1>회원 등록</AdminH1>
      </AdminHeaderRow>

      <form onSubmit={handleSubmit}>
        <AdminTableForm>
          <AdminFormTable>
            <tbody>
              {FIELD_ROWS.map((row) => (
                <tr key={row.key}>
                  <AdminLabelCellNarrow>
                    {row.label}
                    {row.required ? (
                      <>
                        {" "}
                        <AdminRequiredMark>(*)</AdminRequiredMark>
                      </>
                    ) : null}
                  </AdminLabelCellNarrow>
                  <AdminFormValueCell>
                    <AdminInputW72
                      type={row.type}
                      value={(form as Record<string, string | number>)[row.key] as string}
                      onChange={(e) => setField(row.key, e.target.value)}
                      required={row.required}
                    />
                  </AdminFormValueCell>
                </tr>
              ))}
              <tr>
                <AdminLabelCellNarrow>레벨</AdminLabelCellNarrow>
                <AdminFormValueCell>
                  <AdminSelect value={form.level} onChange={(e) => setField("level", Number(e.target.value))}>
                    <option value={1}>1 (최고관리자)</option>
                    <option value={2}>2 (일반관리자)</option>
                  </AdminSelect>
                </AdminFormValueCell>
              </tr>
              <tr>
                <AdminFormLabelCellTop>회원 메모</AdminFormLabelCellTop>
                <AdminFormValueCell>
                  <AdminTextarea
                    value={form.memberMemo}
                    onChange={(e) => setField("memberMemo", e.target.value)}
                    rows={4}
                  />
                </AdminFormValueCell>
              </tr>
              <tr>
                <AdminFormLabelCellTop>관리자 메모</AdminFormLabelCellTop>
                <AdminFormValueCell>
                  <AdminTextarea
                    value={form.adminMemo}
                    onChange={(e) => setField("adminMemo", e.target.value)}
                    rows={4}
                  />
                </AdminFormValueCell>
              </tr>
            </tbody>
          </AdminFormTable>
        </AdminTableForm>

        <AdminFormActions>
          <AdminLinkMuted href="/admin/members">목록</AdminLinkMuted>
          <AdminBtn type="submit" disabled={saving}>
            {saving ? "등록 중..." : "확인"}
          </AdminBtn>
        </AdminFormActions>
      </form>
    </AdminPage>
  );
}
