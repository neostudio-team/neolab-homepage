import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { adminDb } from "@/lib/firebase-admin";
import { notFound } from "next/navigation";
import {
  BackLink,
  BorderBtn,
  Category,
  DetailInner,
  DetailMeta,
  DetailTitle,
  DetailWrap,
  EmptyBody,
  ExternalBox,
  ExternalLink,
  FooterBox,
  HtmlContent,
} from "../PressPage.styles";

export const dynamic = "force-dynamic";

export default async function PressDetailPage({ params }: { params: Promise<{ lang: Locale; id: string }> }) {
  const { lang, id } = await params;
  const dict = await getDictionary(lang);

  let press: Record<string, string> | null = null;
  try {
    const doc = await adminDb.collection("press").doc(id).get();
    if (!doc.exists) notFound();
    press = { id: doc.id, ...doc.data(), createdAt: doc.data()?.createdAt?.toDate().toISOString() } as Record<string, string>;
  } catch {
    notFound();
  }

  const title = lang === "en" ? press.titleEn || press.titleKo : lang === "ja" ? press.titleJa || press.titleKo : press.titleKo;
  const content = lang === "en" ? press.contentEn || press.contentKo : lang === "ja" ? press.contentJa || press.contentKo : press.contentKo;

  return (
    <>
      <Header lang={lang} dict={dict.common.header} />
      <DetailWrap>
        <DetailInner>
          <BackLink href={`/${lang}/company/press`}>← Newsroom</BackLink>
          <Category>{press.category || "press"}</Category>
          <DetailTitle>{title}</DetailTitle>
          <DetailMeta>
            <span>{press.author}</span>
            <span>{press.createdAt ? new Date(press.createdAt).toLocaleDateString("ko-KR", { year: "numeric", month: "long", day: "numeric" }) : ""}</span>
          </DetailMeta>
          {press.externalUrl && <ExternalBox><ExternalLink href={press.externalUrl} target="_blank" rel="noopener noreferrer">원문 기사 보기</ExternalLink></ExternalBox>}
          {content ? <HtmlContent dangerouslySetInnerHTML={{ __html: content }} /> : <EmptyBody>본문 내용이 없습니다.</EmptyBody>}
          <FooterBox><BorderBtn href={`/${lang}/company/press`}>{lang === "en" ? "Back to Newsroom" : lang === "ja" ? "ニュースルームへ" : "목록으로"}</BorderBtn></FooterBox>
        </DetailInner>
      </DetailWrap>
      <Footer lang={lang} dict={dict.common.footer} />
    </>
  );
}
