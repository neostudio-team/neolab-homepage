import { Metadata } from "next";
import { Icon } from "@iconify/react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import PageHero from "@/components/common/PageHero";
import Reveal, { RevealGroup, RevealItem } from "@/components/common/Reveal";
import Section from "@/components/common/Section";
import ContactModalTrigger from "@/components/common/ContactModalTrigger";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { adminDb } from "@/lib/firebase-admin";
import InquiryForm from "./components/InquiryForm";
import {
  Page,
  TopSection,
  InfoCol,
  InfoHeading,
  InfoTitle,
  InfoSubtitle,
  PhoneRow,
  PhoneNumber,
  InfoGrid,
  InfoItem,
  InfoLabel,
  InfoValue,
  InfoValueLine,
  NoticeSection,
  NoticeTable,
  NoticeRow,
  NoticeTitle,
  NoticeDate,
  NoticeEmpty,
  ProductGrid,
  ProductCard,
  ProductImg,
  ProductName,
  ProductCta,
  Divider,
  BottomCta,
  BottomCtaText,
  BottomCtaTitle,
  BottomCtaDesc,
} from "./CustomerPage.styles";

const IMG = "/images/customer/figma";

export const metadata: Metadata = {
  title: "고객센터 | 네오랩컨버전스",
  description:
    "네오랩컨버전스 고객센터입니다. 제품 문의, A/S, 파트너 상담 등 도움이 필요하신 사항을 안내해 드립니다.",
};

export const dynamic = "force-dynamic";

interface CustomerNotice {
  id: string;
  isPinned: boolean;
  titleKo: string;
  titleEn: string;
  titleJa: string;
  externalUrl: string;
  createdAt: string;
}

async function getCustomerNotices(): Promise<CustomerNotice[]> {
  try {
    const snapshot = await adminDb
      .collection("customer_notices")
      .orderBy("createdAt", "desc")
      .get();
    const docs = snapshot.docs.map((doc) => ({
      id: doc.id,
      isPinned: doc.data().isPinned ?? false,
      titleKo: doc.data().titleKo ?? "",
      titleEn: doc.data().titleEn ?? "",
      titleJa: doc.data().titleJa ?? "",
      externalUrl: doc.data().externalUrl ?? "",
      createdAt:
        doc.data().createdAt?.toDate().toISOString() ??
        new Date().toISOString(),
    }));
    return [...docs.filter((d) => d.isPinned), ...docs.filter((d) => !d.isPinned)];
  } catch {
    return [];
  }
}

const PRODUCTS = [
  { name: "소리펜", img: `${IMG}/product-soripen.png`, slug: "support-sori" },
  { name: "미디어 플레이어", img: `${IMG}/product-mediaplayer.png`, slug: "support-mediaplayer" },
  { name: "빔프로젝터", img: `${IMG}/product-beam.png`, slug: "support-beam" },
  { name: "네오스마트펜", img: `${IMG}/product-smartpen.png`, slug: "support-smartpen" },
];

function fmtDate(iso: string) {
  const d = new Date(iso);
  return `${d.getFullYear()}. ${String(d.getMonth() + 1).padStart(2, "0")}. ${String(d.getDate()).padStart(2, "0")}`;
}

function pickTitle(n: CustomerNotice, lang: Locale) {
  if (lang === "en" && n.titleEn) return n.titleEn;
  if (lang === "ja" && n.titleJa) return n.titleJa;
  return n.titleKo || n.titleEn || n.titleJa;
}

export default async function CustomerPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const notices = await getCustomerNotices();
  const visible = notices.slice(0, 11);

  return (
    <>
      <Header lang={lang} dict={dict.common.header} />
      <Page>
        {/* HERO */}
        <PageHero title="고객센터" backgroundImage={`${IMG}/hero-bg.png`} />

        {/* TOP: Info + Inquiry form */}
        <TopSection>
          <Reveal y={32} amount={0.15} duration={0.9}>
            <InfoCol>
              <InfoHeading>
                <InfoTitle>
                  {"네오랩컨버전스는 경계 없는 기술로\n일상의 혁신을 만듭니다."}
                </InfoTitle>
                <InfoSubtitle>
                  최고의 만족을 드릴 수 있도록 고객의 입장에서 최선을
                  다하겠습니다.
                </InfoSubtitle>
              </InfoHeading>

              <PhoneRow>
                <Icon icon="gg:phone" aria-hidden />
                <PhoneNumber>1588-6239</PhoneNumber>
              </PhoneRow>

              <InfoGrid>
                <InfoItem>
                  <InfoLabel>이메일</InfoLabel>
                  <InfoValue>cs@neolab.net</InfoValue>
                </InfoItem>
                <InfoItem>
                  <InfoLabel>상담시간</InfoLabel>
                  <InfoValue>
                    10:00~18:00 (평일 / 점심시간 12:00~13:00)
                  </InfoValue>
                </InfoItem>
                <InfoItem>
                  <InfoLabel>파트너</InfoLabel>
                  <InfoValue>
                    <InfoValueLine>대교 눈높이 1661-2981</InfoValueLine>
                    <InfoValueLine>엠베스트 1833-6239</InfoValueLine>
                    <InfoValueLine>구몬 1661-1311</InfoValueLine>
                  </InfoValue>
                </InfoItem>
                <InfoItem>
                  <InfoLabel>A/S 센터</InfoLabel>
                  <InfoValue>
                    경기도 수원시 권선구 서부로 1433-20 4층 401호
                  </InfoValue>
                </InfoItem>
                <InfoItem>
                  <InfoLabel>A/S 지정택배</InfoLabel>
                  <InfoValue>CJ대한통운</InfoValue>
                </InfoItem>
              </InfoGrid>
            </InfoCol>
          </Reveal>

          <Reveal y={32} delay={0.15} amount={0.15} duration={0.9}>
            <InquiryForm />
          </Reveal>
        </TopSection>

        {/* NOTICE TABLE */}
        <NoticeSection>
          <Reveal y={28} amount={0.1} duration={0.9}>
            <NoticeTable>
              {visible.length > 0 ? (
                visible.map((n) => (
                  <NoticeRow
                    key={n.id}
                    href={n.externalUrl || `/${lang}/customer/${n.id}`}
                    target={n.externalUrl ? "_blank" : undefined}
                    rel={n.externalUrl ? "noopener noreferrer" : undefined}
                  >
                    <NoticeTitle>{pickTitle(n, lang)}</NoticeTitle>
                    <NoticeDate>{fmtDate(n.createdAt)}</NoticeDate>
                  </NoticeRow>
                ))
              ) : (
                <NoticeEmpty>등록된 공지사항이 없습니다.</NoticeEmpty>
              )}
            </NoticeTable>
          </Reveal>
        </NoticeSection>

        {/* 제품군 상세 설명 */}
        <Section title="제품군 상세 설명" background="#fcfcfc" tone="dark">
          <RevealGroup stagger={0.1} amount={0.15}>
            <ProductGrid>
              {PRODUCTS.map((p) => (
                <RevealItem key={p.name} y={28} duration={0.85}>
                  <ProductCard href={`/${lang}/customer/${p.slug}`}>
                    <ProductImg src={p.img} alt={p.name} loading="lazy" />
                    <ProductName>{p.name}</ProductName>
                    <ProductCta>
                      자세히 보기
                      <Icon icon="ei:arrow-right" aria-hidden />
                    </ProductCta>
                  </ProductCard>
                </RevealItem>
              ))}
            </ProductGrid>
          </RevealGroup>

          <Divider />

          <Reveal y={24} duration={0.85}>
            <BottomCta>
              <BottomCtaText>
                <BottomCtaTitle>제품 문의하기</BottomCtaTitle>
                <BottomCtaDesc>
                  {
                    "해당하는 제품의 자주 묻는 질문에서 원하는 답변을 찾을 수 없는 경우,\n아래 버튼을 통해 문의해 주세요. 담당자 확인 후 빠르게 답변드리겠습니다."
                  }
                </BottomCtaDesc>
              </BottomCtaText>
              <ContactModalTrigger
                buttonText="문의하기"
                variant="pill"
                defaultCategory="제품문의"
              />
            </BottomCta>
          </Reveal>
        </Section>
      </Page>
      <Footer lang={lang} dict={dict.common.footer} />
    </>
  );
}
