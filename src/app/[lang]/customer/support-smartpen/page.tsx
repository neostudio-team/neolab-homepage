import Link from "next/link";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import ContactModalTrigger from "@/components/common/ContactModalTrigger";
import SupportFaqAccordion from "@/components/support/SupportFaqAccordion";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import {
  AccessoryCard,
  BackLink,
  BackRow,
  BlockGray,
  BlockTitle,
  BlockWhite,
  CardDesc,
  CardGrid2,
  CardTitle,
  ContactInner,
  ContactSection,
  ContactText,
  ContactTitle,
  Container,
  Dot,
  DotItem,
  DotListColumns,
  Emoji,
  FaqLabel,
  Hero,
  HeroDesc,
  HeroImage,
  HeroInner,
  HeroLabel,
  HeroLeft,
  HeroTitle,
  IconBox,
  InlineLink,
  InlineLinks,
  PolicyBox,
  Wrap,
  BuyLink,
} from "../SupportPage.styles";

const WARRANTY_POLICY = `제품 구입 후 품질보증기간(1년) 이내에 정상적인 사용상태에서 발생한 성능 기능상의 하자가 발생 시 무상으로 품질보증을 합니다. 보증기간 이내라도 파손 및 침수 등 과실로 인한 부분은 유상 AS대상 입니다.`;
const WARRANTY_POLICY2 = `품질보증기간은 구입 후 1년이며, 정확한 품질보증 혜택을 받으시기 위해서는 상품을 구입하신 영수증 또는, 인터넷 쇼핑몰 구입 내역 화면 캡쳐 등이 필요합니다. 부득이 확인이 어려운 경우 제품 고유 번호를 통해 확인되는 제조일 기준으로 보증기간을 적용 받게 됩니다.`;
const PRODUCT_LIST = ["스마트구몬 K펜, K지우개(F60, E100)", "엠베스트 스마트펜(F110, F121)", "스마트쎈 펜(F12X)", "네오스마트펜 N2(F11X)", "네오스마트펜 M1(F50)", "네오스마트펜 라인프렌즈 에디션(F50)"];
const FAQ_ITEMS = [{ q: "전원이 켜지지 않아요.", a: ["충전을 해주세요. 정상 충전 시 빨간색 LED가 점등됩니다. 완충 시 결과적으로 빨간색 LED가 꺼집니다.", "전원 버튼을 2초 이상 눌러주셔야 켜집니다.", "전원 버튼을 길게 10초 이상 눌러 초기화 후 켜주세요."] }, { q: "전원이 꺼지지 않아요.", a: "전원 버튼을 길게 10초 이상 눌러 초기화 후 정상 유무 확인해 주세요." }, { q: "저절로 꺼져요.", a: ["기본 설정 된 20분 동안 아무런 입력(사용)이 없을 경우 절전을 위해 자동으로 꺼집니다.", "배터리 잔량이 부족할 수 있으니, 충전하여 주세요."] }];

export default async function SupportSmartpenPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
      <Header lang={lang} dict={dict.common.header} />
      <Wrap>
        <Hero $bg="#E8EAF0"><HeroInner><HeroLeft><HeroLabel $color="#4A5BAB">Customer Support</HeroLabel><HeroTitle>스마트펜</HeroTitle><HeroDesc>종이에 필기한 내용을 디지털화 해주는 펜입니다.</HeroDesc><Link href="http://www.neosmartpen.com/" target="_blank" rel="noopener noreferrer">네오스마트펜 사이트로 가기</Link></HeroLeft><HeroImage src="/images/customer/Neo-smartpen.png" alt="네오스마트펜" /></HeroInner></Hero>

        <BlockWhite><Container><BlockTitle>고객지원 정책</BlockTitle><PolicyBox><p>{WARRANTY_POLICY}</p><p>{WARRANTY_POLICY2}</p></PolicyBox></Container></BlockWhite>
        <BlockGray><Container><BlockTitle>스마트펜 제품 리스트</BlockTitle><DotListColumns>{PRODUCT_LIST.map((p) => <DotItem key={p}><Dot $color="#4A5BAB" />{p}</DotItem>)}</DotListColumns></Container></BlockGray>
        <BlockWhite><Container><FaqLabel $color="#4A5BAB">F.A.Q.</FaqLabel><BlockTitle>자주 묻는 질문</BlockTitle><SupportFaqAccordion items={FAQ_ITEMS} /><InlineLinks><InlineLink href="https://www.neosmartpen.com/kr/ncode-pdf/" target="_blank" rel="noopener noreferrer">안내사항 확인하기</InlineLink><InlineLink href="https://www.neosmartpen.com/kr/support/" target="_blank" rel="noopener noreferrer">공식 홈페이지가기</InlineLink></InlineLinks></Container></BlockWhite>

        <BlockGray><Container><BlockTitle>제품 관련 악세서리</BlockTitle><CardGrid2>
          <AccessoryCard><IconBox $bg="#E8EAF0"><Emoji>🛒</Emoji></IconBox><CardTitle>네오스마트펜 스토어</CardTitle><CardDesc>네오스마트펜 온라인몰에는 다양한 상품과 정보가 있습니다.</CardDesc><BuyLink href="http://store.neosmartpen.com/" target="_blank" rel="noopener noreferrer">구매 사이트로 이동하기</BuyLink></AccessoryCard>
          <AccessoryCard><IconBox $bg="#FFF0DC"><Emoji>✏️</Emoji></IconBox><CardTitle>구몬용 악세서리</CardTitle><CardDesc>구몬 스마트펜의 다양한 악세사리를 구매할 수 있습니다.</CardDesc><BuyLink href="https://smartstore.naver.com/neolab/category/19c4320c7414449190cf86239353ed67?cp=1" target="_blank" rel="noopener noreferrer">구매 사이트로 이동하기</BuyLink></AccessoryCard>
        </CardGrid2></Container></BlockGray>

        <ContactSection><ContactInner><HeroLabel $color="#E1A02E">Contact Us</HeroLabel><ContactTitle>문의하기</ContactTitle><ContactText>네오스마트펜 관련 문의사항이 있으시면 아래 버튼을 통해 문의해 주세요. 담당자 확인 후 빠르게 답변드리겠습니다.</ContactText><ContactModalTrigger buttonText="문의하기" variant="pill" pillVariant="blackRound" defaultCategory="네오스마트펜 문의" /></ContactInner></ContactSection>
        <BackRow><BackLink href={`/${lang}/customer`}>← 고객지원으로 돌아가기</BackLink></BackRow>
      </Wrap>
      <Footer lang={lang} dict={dict.common.footer} />
    </>
  );
}
