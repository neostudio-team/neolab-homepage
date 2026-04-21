import { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import {
  AccentLine,
  AccentRow,
  AccentText,
  CategoryCard,
  CategoryGrid,
  CategoryLink,
  CategoryName,
  CategorySection,
  Circle,
  CircleText,
  Container,
  Deco1,
  Deco2,
  Deco3,
  Deco4,
  Divider,
  DotMint,
  DotOrange,
  Form,
  FormDesc,
  FormTitle,
  FormWrap,
  Heart,
  HeartWrap,
  HeroDesc,
  HeroInner,
  HeroLeft,
  HeroRight,
  HeroSection,
  HeroTitle,
  InfoList,
  InquirySection,
  Input,
  NoticeLink,
  NoticeSection,
  Page,
  PageBtn,
  PageBtnActive,
  Pagination,
  Phone,
  PolicyLink,
  PolicyText,
  SectionTitle,
  ShapeMain,
  Stick,
  SubmitBtn,
  SubmitWrap,
  Table,
  TableWrap,
  Td,
  Textarea,
  Th,
  TheadRow,
  TitleTd,
  Tr,
} from "./CustomerPage.styles";

export const metadata: Metadata = {
  title: "고객지원 | 네오스마트펜",
  description: "최고의 만족을 드릴 수 있도록 고객의 입장에서 최선을 다하겠습니다.",
};

const notices = [
  { id: 25, title: "POKORO DB버전 업그레이드 작업 안내", author: "NeoLAB_CS", date: "2024.02.20", views: 104 },
  { id: 24, title: "네오스튜디오2 DB버전 업그레이드 작업 안내", author: "NeoLAB_CS", date: "2024.01.15", views: 251 },
  { id: 23, title: "(주) 네오랩컨버전스 고객지원 및 배송 업무 안내 <26년 임직원 조기 퇴근 및 설 연휴>", author: "NeoLAB_CS", date: "2023.12.28", views: 520 },
  { id: 22, title: "네오스튜디오2 서버 점검 작업 및 앱 업데이트 필수 안내", author: "NeoLAB_CS", date: "2023.11.10", views: 410 },
  { id: 21, title: "POKORO 서버 점검 작업에 따른 서비스 일시 중지 안내", author: "NeoLAB_CS", date: "2023.10.05", views: 88 },
  { id: 20, title: "(주) 네오랩컨버전스 고객지원 및 배송 업무 안내 <25년 추석 연휴 >", author: "NeoLAB_CS", date: "2023.09.12", views: 320 },
  { id: 19, title: "A/S 처리 비용 일부 조정 안내", author: "NeoLAB", date: "2023.08.01", views: 1105 },
  { id: 18, title: "A/S 처리 기준 및 택배비 부담 안내", author: "NeoLAB_CS", date: "2023.07.15", views: 2410 },
  { id: 17, title: "[공지] 네오랩컨버전스 홈페이지 이용약관 및 개인정보처리방침 개정 안내", author: "NeoLAB_CS", date: "2023.06.20", views: 900 },
  { id: 16, title: "(주) 네오랩컨버전스 A/S 종료 제품 안내", author: "NeoLAB_CS", date: "2023.05.10", views: 4500 },
];

export default async function CustomerPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;

  return (
    <Page>
      <HeroSection>
        <HeroInner>
          <HeroLeft>
            <AccentRow><AccentLine /><AccentText>Customer Support</AccentText></AccentRow>
            <HeroTitle>고객센터</HeroTitle>
            <HeroDesc>최고의 만족을 드릴 수 있도록 고객의 입장에서 최선을 다하겠습니다.</HeroDesc>
            <Phone>1588-6239</Phone>
            <InfoList>
              <p>네오랩컨버전스 상담시간 : 10:00~18:00(평일 / 점심시간 12:00~13:00)</p>
              <p>1661-2981 대교 눈높이</p>
              <p>1833-6239 엠베스트</p>
              <p>1661-1311 구몬</p>
              <Divider />
              <p>A/S 센터 : 경기도 수원시 권선구 서부로 1433-20 4층 401호</p>
              <p>네오랩컨버전스 A/S센터 지정택배 : CJ대한통운</p>
            </InfoList>
          </HeroLeft>
          <HeroRight>
            <ShapeMain />
            <DotOrange />
            <DotMint />
            <HeartWrap><Heart /><Stick /></HeartWrap>
          </HeroRight>
        </HeroInner>
      </HeroSection>

      <NoticeSection>
        <Container>
          <TableWrap>
            <Table>
              <thead>
                <TheadRow>
                  <Th>번호</Th><Th>제목</Th><Th>작성자</Th><Th>작성일</Th><Th>조회</Th>
                </TheadRow>
              </thead>
              <tbody>
                {notices.map((n) => (
                  <Tr key={n.id}>
                    <Td>{n.id}</Td>
                    <TitleTd><NoticeLink href="#">{n.title}</NoticeLink></TitleTd>
                    <Td>{n.author}</Td>
                    <Td>{n.date}</Td>
                    <Td>{n.views}</Td>
                  </Tr>
                ))}
              </tbody>
            </Table>
          </TableWrap>
          <Pagination>
            <PageBtn>«</PageBtn>
            <PageBtnActive>1</PageBtnActive>
            <PageBtn>2</PageBtn>
            <PageBtn>»</PageBtn>
          </Pagination>
        </Container>
      </NoticeSection>

      <CategorySection>
        <Container>
          <SectionTitle>각 제품군의 상세 설명</SectionTitle>
          <CategoryGrid>
            <CategoryCard>
              <Circle><CircleText>소리펜</CircleText></Circle>
              <CategoryName>소리펜</CategoryName>
              <CategoryLink href={`/${lang}/soundpen`}>자세히 알아보기</CategoryLink>
            </CategoryCard>
            <CategoryCard>
              <Circle><CircleText>미디어\n플레이어</CircleText></Circle>
              <CategoryName>미디어플레이어</CategoryName>
              <CategoryLink href="#">자세히 알아보기</CategoryLink>
            </CategoryCard>
            <CategoryCard>
              <Circle><CircleText>빔프로젝터</CircleText></Circle>
              <CategoryName>빔프로젝터</CategoryName>
              <CategoryLink href="#">자세히 알아보기</CategoryLink>
            </CategoryCard>
            <CategoryCard>
              <Circle><CircleText>네오스마트펜</CircleText></Circle>
              <CategoryName>네오스마트펜</CategoryName>
              <CategoryLink href={`/${lang}/neosmartpen`}>자세히 알아보기</CategoryLink>
            </CategoryCard>
          </CategoryGrid>
        </Container>
      </CategorySection>

      <InquirySection>
        <Deco1 /><Deco2 /><Deco3 /><Deco4 />
        <FormWrap>
          <FormTitle>문의하기</FormTitle>
          <FormDesc>해당하는 제품의 자주 묻는 질문에서 원하는 답변을 찾을 수 없는 경우에는 아래의 전화번호, 이메일, 혹은 문의하기 폼을 이용하여 주세요</FormDesc>
          <PolicyText>(주)네오랩컨버전스의 개인정보 취급방침을 확인 하시려면 상세 보기를 눌러 주세요 <PolicyLink href="#">상세보기</PolicyLink></PolicyText>
          <Form>
            <Input type="text" placeholder="성함" />
            <Input type="text" placeholder="전화번호" />
            <Input type="email" placeholder="이메일 주소" />
            <Input type="text" placeholder="제품명" />
            <Textarea placeholder="문의 내용" rows={4} />
            <SubmitWrap><SubmitBtn type="submit">Send</SubmitBtn></SubmitWrap>
          </Form>
        </FormWrap>
      </InquirySection>
    </Page>
  );
}
