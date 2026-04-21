import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { adminDb } from "@/lib/firebase-admin";
import { FieldValue } from "firebase-admin/firestore";
import { notFound } from "next/navigation";
import {
  BackLink,
  BorderBtn,
  DetailInner,
  DetailTitle,
  DetailWrap,
  FooterBox,
  HtmlContent,
  Meta,
} from "../NewsPage.styles";

export default async function NoticeDetailPage({ params }: { params: Promise<{ lang: Locale; id: string }> }) {
  const { lang, id } = await params;
  const dict = await getDictionary(lang);

  let notice: Record<string, string | boolean | number> | null = null;
  try {
    const doc = await adminDb.collection("notices").doc(id).get();
    if (!doc.exists) notFound();
    await adminDb.collection("notices").doc(id).update({ views: FieldValue.increment(1) });
    notice = { id: doc.id, ...doc.data(), createdAt: doc.data()?.createdAt?.toDate().toISOString() } as Record<string, string | boolean | number>;
  } catch {
    notFound();
  }

  const title = lang === "en" ? notice.titleEn || notice.titleKo : lang === "ja" ? notice.titleJa || notice.titleKo : notice.titleKo;
  const content = lang === "en" ? notice.contentEn || notice.contentKo : lang === "ja" ? notice.contentJa || notice.contentKo : notice.contentKo;

  return (
    <>
      <Header lang={lang} dict={dict.common.header} />
      <DetailWrap>
        <DetailInner>
          <BackLink href={`/${lang}/company/news`}>← {lang === "en" ? "Back to Notice" : lang === "ja" ? "お知らせ一覧へ" : "목록으로"}</BackLink>
          <DetailTitle>{title as string}</DetailTitle>
          <Meta>
            <span>{notice.author as string}</span>
            <span>{new Date(notice.createdAt as string).toLocaleDateString("ko-KR")}</span>
            <span>{lang === "en" ? "Views" : lang === "ja" ? "閲覧数" : "조회"} {notice.views as number}</span>
          </Meta>
          <HtmlContent dangerouslySetInnerHTML={{ __html: content as string }} />
          <FooterBox><BorderBtn href={`/${lang}/company/news`}>{lang === "en" ? "Back to list" : lang === "ja" ? "一覧へ戻る" : "목록으로"}</BorderBtn></FooterBox>
        </DetailInner>
      </DetailWrap>
      <Footer lang={lang} dict={dict.common.footer} />
    </>
  );
}
