import { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import JaCompanyPage from "@/features/company/JaCompanyPage";
import CompanyHistoryTimeline from "@/features/company/components/CompanyHistoryTimeline";
import CompanyHeroContent from "@/features/company/components/CompanyHeroContent";
import {
  BrDesktopOnly,
  Container,
  DeptBar,
  DeptCard,
  DeptDesc,
  DeptList,
  DeptName,
  Eyebrow,
  HeroAccent,
  HeroDivider,
  HeroEyebrow,
  HeroSection,
  HeroTitle,
  HistoryHeading,
  OfficeAddress,
  OfficeCard,
  OfficeDivider,
  OfficeGrid,
  OfficeHeader,
  OfficeHeading,
  OfficeSublabel,
  OfficeTitle,
  SectionHeader,
  SectionHistory,
  SectionOffice,
  SectionTeam,
  TeamGrid,
  TeamHeader,
  TeamHeading,
  TeamLead,
  TeamMuted,
  TeamTextCol,
} from "./CompanyPage.styles";

export const metadata: Metadata = {
  title: "회사소개 - 네오랩컨버전스",
  description: "Write the Future, Connect the World — 아날로그와 디지털을 연결하는 네오랩컨버전스",
};

const departments = [
  {
    name: "기획 & 디자인",
    desc: "사용자의 경험을 설계합니다.",
  },
  {
    name: "HW / FW / 기구 개발",
    desc: "세상에 없던 스마트 디바이스를 탄생시킵니다.",
  },
  {
    name: "SW 개발",
    desc: "데이터를 가치 있게 만드는 플랫폼을 구축합니다.",
  },
  {
    name: "사업",
    desc: "고객의 숨겨진 니즈까지 발굴하여 최적의 솔루션을 찾아드립니다.",
  },
  {
    name: "생산 & 경영지원",
    desc: "최고의 품질과 전략으로 시장의 신뢰를 확보합니다.",
  },
];

const offices = [
  {
    label: "서울 사무실",
    sublabel: "본사",
    address: "서울특별시 구로구 디지털로30길 28\n마리오타워 1501호, 1503호",
  },
  {
    label: "수원 사무실",
    sublabel: "생산 HUB",
    address: "경기도 수원시 권선구 서부로 1433-20\n델리스 4층",
  },
  {
    label: "도쿄 사무실",
    sublabel: "일본지사",
    address: "4-16-47-203, Shimorenjyaku\nMitaka city, Tokyo, Japan",
  },
];

export default async function CompanyPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  if (lang === "ja") {
    return <JaCompanyPage lang={lang} dict={dict} />;
  }

  return (
    <>
      <Header lang={lang} dict={dict.common.header} />
      <main>
        <HeroSection>
          <Container>
            <HeroEyebrow>NeoLAB Convergence</HeroEyebrow>
            <HeroTitle>
              Write the Future,
              <br />
              <HeroAccent>Connect</HeroAccent> the World
            </HeroTitle>
            <HeroDivider />
            <CompanyHeroContent />
          </Container>
        </HeroSection>

        <SectionHistory>
          <Container>
            <SectionHeader>
              <Eyebrow>Our Journey</Eyebrow>
              <HistoryHeading>HISTORY</HistoryHeading>
            </SectionHeader>
            <CompanyHistoryTimeline />
          </Container>
        </SectionHistory>

        <SectionTeam>
          <Container>
            <TeamHeader>
              <Eyebrow>Our Team</Eyebrow>
              <TeamHeading>
                &quot;하드웨어의 견고함과 소프트웨어의 유연함,
                <BrDesktopOnly />
                그 사이의 완벽한 밸런스&quot;
              </TeamHeading>
            </TeamHeader>

            <TeamGrid>
              <TeamTextCol>
                <TeamLead>
                  하드웨어를 잘 아는 소프트웨어 개발자, 소프트웨어의 흐름을 이해하는 하드웨어 개발자.
                  네오랩컨버전스의 전문가들은 자신의 영역을 넘어 제품의 &apos;본질적 가치&apos;를 위해 협업합니다.
                </TeamLead>
                <TeamMuted>
                  개발, 제조의 복잡함은 네오랩이 해결합니다.
                  <br />
                  고객은 비즈니스의 본질에만 집중하십시오.
                </TeamMuted>
              </TeamTextCol>

              <DeptList>
                {departments.map((dept) => (
                  <DeptCard key={dept.name}>
                    <DeptBar />
                    <div>
                      <DeptName>{dept.name}</DeptName>
                      <DeptDesc>{dept.desc}</DeptDesc>
                    </div>
                  </DeptCard>
                ))}
              </DeptList>
            </TeamGrid>
          </Container>
        </SectionTeam>

        <SectionOffice>
          <Container>
            <OfficeHeader>
              <Eyebrow $variant="gold">Find Us</Eyebrow>
              <OfficeHeading>OFFICE</OfficeHeading>
            </OfficeHeader>

            <OfficeGrid>
              {offices.map((office) => (
                <OfficeCard key={office.label}>
                  <OfficeSublabel>{office.sublabel}</OfficeSublabel>
                  <OfficeTitle>{office.label}</OfficeTitle>
                  <OfficeDivider />
                  <OfficeAddress>{office.address}</OfficeAddress>
                </OfficeCard>
              ))}
            </OfficeGrid>
          </Container>
        </SectionOffice>
      </main>
      <Footer lang={lang} dict={dict.common.footer} />
    </>
  );
}
