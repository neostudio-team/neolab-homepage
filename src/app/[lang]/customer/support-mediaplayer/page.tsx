import Link from "next/link";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import ContactModalTrigger from "@/components/common/ContactModalTrigger";
import SupportFaqAccordion from "@/components/support/SupportFaqAccordion";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { AccessoryCard, BackLink, BackRow, BlockGray, BlockTitle, BlockWhite, BuyLink, CardDesc, CardGrid2, CardTitle, ContactInner, ContactSection, ContactText, ContactTitle, Container, Dot, DotItem, DotListColumns, Emoji, FaqLabel, Hero, HeroDesc, HeroImage, HeroInner, HeroLabel, HeroLeft, HeroTitle, IconBox, PolicyBox, Wrap } from "../SupportPage.styles";

const WARRANTY_POLICY = `제품 구입 후 품질보증기간(1년) 이내에 정상적인 사용상태에서 발생한 성능 기능상의 하자가 발생 시 무상으로 품질보증을 합니다. 보증기간 이내라도 파손 및 침수 등 과실로 인한 부분은 유상 AS대상 입니다.`;
const WARRANTY_POLICY2 = `품질보증기간은 구입 후 1년이며, 정확한 품질보증 혜택을 받으시기 위해서는 상품을 구입하신 영수증 또는, 인터넷 쇼핑몰 구입 내역 화면 캡쳐 등이 필요합니다. 부득이 확인이 어려운 경우 제품 고유 번호를 통해 확인되는 제조일 기준으로 보증기간을 적용 받게 됩니다.`;
const PRODUCT_LIST = ["플링플링 플레이어(H13X)", "미디어웨일(H140)"];
const FAQ_ITEMS = [{ q: "전원이 켜지지 않아요.", a: ["전원 버튼을 2초 이상 눌러주셔야 켜집니다.", "어댑터 콘센트 연결 상태와 플레이어 본체 뒤쪽으로 전원 연결 DC in 위치에 어댑터 연결상태를 점검하여 주세요."] }];

export default async function SupportMediaplayerPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
      <Header lang={lang} dict={dict.common.header} />
      <Wrap>
        <Hero $bg="#EAF4FB"><HeroInner><HeroLeft><HeroLabel $color="#3B8FBF">Customer Support</HeroLabel><HeroTitle>미디어 플레이어</HeroTitle><HeroDesc>소리펜으로 책을 콕 찍으면 미디어 플레이어를 통해 영상 콘텐츠가 재생 됩니다.</HeroDesc></HeroLeft><HeroImage src="/images/customer/Neo-mediaplayer.png" alt="미디어플레이어" /></HeroInner></Hero>
        <BlockWhite><Container><BlockTitle>고객지원 정책</BlockTitle><PolicyBox><p>{WARRANTY_POLICY}</p><p>{WARRANTY_POLICY2}</p></PolicyBox></Container></BlockWhite>
        <BlockGray><Container><BlockTitle>미디어 플레이어 제품 리스트</BlockTitle><DotListColumns>{PRODUCT_LIST.map((p) => <DotItem key={p}><Dot $color="#3B8FBF" />{p}</DotItem>)}</DotListColumns></Container></BlockGray>
        <BlockWhite><Container><FaqLabel $color="#3B8FBF">F.A.Q.</FaqLabel><BlockTitle>자주 묻는 질문</BlockTitle><SupportFaqAccordion items={FAQ_ITEMS} /></Container></BlockWhite>
        <BlockGray><Container><BlockTitle>제품 관련 악세서리</BlockTitle><CardGrid2>
          <AccessoryCard><IconBox $bg="#E8F0F5"><Emoji>🖥️</Emoji></IconBox><CardTitle>HDMI 케이블</CardTitle><CardDesc>네오랩컨버전스의 플링플링 및 미디어웨일을 TV 및 모니터에 연결을 위한 HDMI케이블 입니다.</CardDesc><BuyLink href="https://smartstore.naver.com/neolab/products/460451933" target="_blank" rel="noopener noreferrer">구매사이트로 이동하기</BuyLink></AccessoryCard>
          <AccessoryCard><IconBox $bg="#FFF0DC"><Emoji>🔋</Emoji></IconBox><CardTitle>충전 어댑터</CardTitle><CardDesc>플링플링, 스마트콩, 핑크퐁빔, 드림큐브, 마법상자, 드림씨어터2, T-Box 2.0과 호환 됩니다.</CardDesc><BuyLink href="https://smartstore.naver.com/neolab/products/2669984891" target="_blank" rel="noopener noreferrer">구매 사이트로 이동하기</BuyLink></AccessoryCard>
        </CardGrid2></Container></BlockGray>
        <ContactSection><ContactInner><HeroLabel $color="#E1A02E">Contact Us</HeroLabel><ContactTitle>문의하기</ContactTitle><ContactText>미디어플레이어 관련 문의사항이 있으시면 아래 버튼을 통해 문의해 주세요. 담당자 확인 후 빠르게 답변드리겠습니다.</ContactText><ContactModalTrigger buttonText="문의하기" variant="pill" pillVariant="blackRound" defaultCategory="미디어플레이어 문의" /></ContactInner></ContactSection>
        <BackRow><BackLink href={`/${lang}/customer`}>← 고객지원으로 돌아가기</BackLink></BackRow>
      </Wrap>
      <Footer lang={lang} dict={dict.common.footer} />
    </>
  );
}
