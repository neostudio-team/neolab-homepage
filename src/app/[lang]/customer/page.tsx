import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import ContactModalTrigger from "@/components/common/ContactModalTrigger";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { adminDb } from "@/lib/firebase-admin";
import {
  AccentLine,
  AccentRow,
  AccentText,
  CatBtn,
  CatCard,
  CatGrid,
  Categories,
  CatImage,
  CatImageWrap,
  CatName,
  ContactInner,
  ContactSection,
  ContactText,
  ContactTitle,
  Divider,
  Dot1,
  Dot2,
  H1,
  HeadRow,
  Heart,
  HeartWrap,
  Hero,
  HeroInner,
  Info,
  InfoItem,
  InfoListRow,
  InfoSection,
  InfoTitle,
  Icon,
  Lead,
  Left,
  MailLink,
  NoticeTag,
  Page,
  Phone,
  Right,
  Row,
  Section,
  SectionTitle,
  Shape,
  Stick,
  Table,
  TableWrap,
  Td,
  Th,
  TitleLink,
  TitleTd,
  Tri,
  CircleA,
  CircleB,
} from "./CustomerPage.styles";

export const dynamic = "force-dynamic";

interface CustomerNotice { id: string; isPinned: boolean; titleKo: string; titleEn: string; titleJa: string; author: string; views: number; externalUrl: string; createdAt: string; }

async function getCustomerNotices(): Promise<CustomerNotice[]> {
  try {
    const snapshot = await adminDb.collection("customer_notices").orderBy("createdAt", "desc").get();
    const docs = snapshot.docs.map((doc) => ({
      id: doc.id,
      isPinned: doc.data().isPinned ?? false,
      titleKo: doc.data().titleKo ?? "",
      titleEn: doc.data().titleEn ?? "",
      titleJa: doc.data().titleJa ?? "",
      author: doc.data().author ?? "NeoLAB_CS",
      views: doc.data().views ?? 0,
      externalUrl: doc.data().externalUrl ?? "",
      createdAt: doc.data().createdAt?.toDate().toISOString() ?? new Date().toISOString(),
    }));
    return [...docs.filter((d) => d.isPinned), ...docs.filter((d) => !d.isPinned)];
  } catch {
    return [];
  }
}

export default async function CustomerPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const notices = await getCustomerNotices();

  const getTitle = (n: CustomerNotice) => (lang === "en" ? n.titleEn || n.titleKo : lang === "ja" ? n.titleJa || n.titleKo : n.titleKo);
  const regularNotices = notices.filter((n) => !n.isPinned);

  return (
    <>
      <Header lang={lang} dict={dict.common.header} />
      <Page>
        <Hero>
          <HeroInner>
            <Left>
              <AccentRow><AccentLine /><AccentText>Customer Support</AccentText></AccentRow>
              <H1>고객센터</H1>
              <Lead>최고의 만족을 드릴 수 있도록 고객의 입장에서 최선을 다하겠습니다.</Lead>
              <Phone>1588-6239</Phone>
              <Info>
                <p>네오랩컨버전스 상담시간 : 10:00~18:00(평일 / 점심시간 12:00~13:00)</p>
                <p>1661-2981 대교 눈높이</p>
                <p>1833-6239 엠베스트</p>
                <p>1661-1311 구몬</p>
                <Divider />
                <p>A/S 센터 : 경기도 수원시 권선구 서부로 1433-20 4층 401호</p>
                <p>네오랩컨버전스 A/S센터 지정택배 : CJ대한통운</p>
              </Info>
            </Left>
            <Right>
              <Shape /><Dot1 /><Dot2 />
              <HeartWrap><Heart><CircleA /><CircleB /><Tri /></Heart><Stick /></HeartWrap>
            </Right>
          </HeroInner>
        </Hero>

        <Section>
          <TableWrap>
            <Table>
              <thead><HeadRow><Th>번호</Th><Th>제목</Th><Th>작성자</Th><Th>날짜</Th><Th>조회</Th></HeadRow></thead>
              <tbody>
                {notices.length === 0 ? (
                  <tr><Td colSpan={5}>등록된 공지사항이 없습니다.</Td></tr>
                ) : (
                  notices.map((n) => {
                    const href = n.externalUrl || `/${lang}/customer/${n.id}`;
                    const isExternal = Boolean(n.externalUrl);
                    return (
                      <Row key={n.id}>
                        <Td>{n.isPinned ? <NoticeTag>공지</NoticeTag> : String(regularNotices.length - regularNotices.indexOf(n))}</Td>
                        <TitleTd><TitleLink href={href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined}>{getTitle(n)}</TitleLink></TitleTd>
                        <Td>{n.author}</Td>
                        <Td>{new Date(n.createdAt).toLocaleDateString("ko-KR")}</Td>
                        <Td>{n.views}</Td>
                      </Row>
                    );
                  })
                )}
              </tbody>
            </Table>
          </TableWrap>
        </Section>

        <Categories>
          <Section>
            <SectionTitle>각 제품군의 상세 설명</SectionTitle>
            <CatGrid>
              <CatCard><CatImageWrap><CatImage src="/images/customer/Neo-soripen.png" alt="소리펜" /></CatImageWrap><CatName>소리펜</CatName><CatBtn href={`/${lang}/customer/support-sori`}>자세히 알아보기</CatBtn></CatCard>
              <CatCard><CatImageWrap><CatImage src="/images/customer/Neo-mediaplayer.png" alt="미디어플레이어" /></CatImageWrap><CatName>미디어플레이어</CatName><CatBtn href={`/${lang}/customer/support-mediaplayer`}>자세히 알아보기</CatBtn></CatCard>
              <CatCard><CatImageWrap><CatImage src="/images/customer/Neo-beam.png" alt="빔프로젝터" /></CatImageWrap><CatName>빔프로젝터</CatName><CatBtn href={`/${lang}/customer/support-beam`}>자세히 알아보기</CatBtn></CatCard>
              <CatCard><CatImageWrap><CatImage src="/images/customer/Neo-smartpen.png" alt="네오스마트펜" /></CatImageWrap><CatName>네오스마트펜</CatName><CatBtn href={`/${lang}/customer/support-smartpen`}>자세히 알아보기</CatBtn></CatCard>
            </CatGrid>
          </Section>
        </Categories>

        <ContactSection>
          <ContactInner>
            <AccentText>Contact Us</AccentText>
            <ContactTitle>문의하기</ContactTitle>
            <ContactText>해당하는 제품의 자주 묻는 질문에서 원하는 답변을 찾을 수 없는 경우, 아래 버튼을 통해 문의해 주세요. 담당자 확인 후 빠르게 답변드리겠습니다.</ContactText>
            <ContactModalTrigger buttonText="문의하기" variant="pill" pillVariant="blackRound" defaultCategory="제품문의" />
          </ContactInner>
        </ContactSection>

        <InfoSection>
          <Section>
            <InfoTitle>연락처</InfoTitle>
            <InfoListRow>
              <InfoItem><Icon fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></Icon><MailLink href="mailto:cs@neolab.net">cs@neolab.net</MailLink></InfoItem>
              <InfoItem>1588-6239 네오랩</InfoItem><InfoItem>1833-6239 엠베스트</InfoItem><InfoItem>1661-2981 대교 눈높이</InfoItem><InfoItem>1661-1311 구몬</InfoItem>
            </InfoListRow>
          </Section>
        </InfoSection>
      </Page>
      <Footer lang={lang} dict={dict.common.footer} />
    </>
  );
}
