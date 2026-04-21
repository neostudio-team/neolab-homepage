import { Metadata } from "next";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import {
  BulkDesc,
  BulkSection,
  CenterDesc,
  CenterDescBlock,
  CenterNote,
  CenterSection,
  CenterTitle,
  CenterWrap,
  ChromeIcon,
  ChromeLink,
  ChromeRow,
  Container,
  CtaBtn,
  CtaImage,
  CtaSectionGray,
  CtaSplit,
  CtaSubtitle,
  CtaText,
  CtaTitle,
  GuideBold,
  GuideHeading,
  GuideImage,
  GuideSplit,
  GuideSplitSection,
  Half,
  HeroDesc,
  HeroForBold,
  HeroForLabel,
  HeroLogo,
  HeroLogoWrap,
  HeroSection,
  HeroSplit,
  HeroSub,
  HeroTitle,
  RemoteEduSection,
  RemoteLabel,
  RemoteTitle,
  ReqDesc,
  ReqHalf,
  ReqSmall,
  ReqSplit,
  RequirementSection,
  RoleCard,
  RoleDesc,
  RoleGrid,
  RoleImg,
  RoleTitle,
} from "./GridaBoardPage.styles";

const IMG = "/images/neosmartpen/apps/gridaboard";

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.neosmartpen.gridaboard.metadata;
  return { title: t.title, description: t.description };
}

export default async function GridaBoardPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const dict = await getDictionary((await params).lang);
  const t = dict.neosmartpen.gridaboard;

  return (
    <>
      <HeroSection>
        <HeroSplit>
          <HeroLogoWrap>
            <HeroLogo src={`${IMG}/gridaboard_logo.png`} alt="GRIDA BOARD" width={400} height={200} />
          </HeroLogoWrap>
          <Half>
            <HeroTitle>{t.hero.title}</HeroTitle>
            <HeroSub>{t.hero.subtitle}</HeroSub>
            <HeroForLabel>{t.hero.forLabel}</HeroForLabel>
            <HeroForBold>{t.hero.forBold}</HeroForBold>
            <HeroDesc>{t.hero.desc}</HeroDesc>
            <CtaBtn href="https://gridaboard.io/" target="_blank" rel="noopener noreferrer">{t.hero.cta}</CtaBtn>
          </Half>
        </HeroSplit>
      </HeroSection>

      <CenterSection>
        <CenterWrap>
          <CenterTitle>{t.s1.title}</CenterTitle>
          {"desc" in t.s1 && (
            <CenterDescBlock>
              <CenterDesc>{(t.s1 as { desc?: string }).desc}</CenterDesc>
              {(t.s1 as { desc2?: string }).desc2 && <CenterDesc>{(t.s1 as { desc2?: string }).desc2}</CenterDesc>}
              {(t.s1 as { desc3?: string }).desc3 && <CenterDesc>{(t.s1 as { desc3?: string }).desc3}</CenterDesc>}
              {(t.s1 as { note?: string }).note && <CenterNote>{(t.s1 as { note?: string }).note}</CenterNote>}
            </CenterDescBlock>
          )}
        </CenterWrap>
      </CenterSection>

      <GuideSplitSection>
        <GuideSplit>
          <ReqHalf>
            <GuideHeading>
              {t.s2.guideLabel}
              {t.s2.guideBold && (
                <>
                  <br />
                  <GuideBold>{t.s2.guideBold}</GuideBold>
                </>
              )}
            </GuideHeading>
          </ReqHalf>
          <ReqHalf>
            <GuideImage src={`${IMG}/gridaboard_desc01.jpg`} alt="Grida Guide" width={700} height={400} />
          </ReqHalf>
        </GuideSplit>
      </GuideSplitSection>

      {"remoteEdu" in t && (
        <RemoteEduSection>
          <CenterWrap>
            <RemoteLabel>{(t as { remoteEdu: { label: string; title: string } }).remoteEdu.label}</RemoteLabel>
            <RemoteTitle>{(t as { remoteEdu: { label: string; title: string } }).remoteEdu.title}</RemoteTitle>
          </CenterWrap>
        </RemoteEduSection>
      )}

      <RequirementSection>
        <Container>
          <ReqSplit>
            <ReqHalf>
              <ReqDesc>{t.s3.requirement}</ReqDesc>
              <ReqSmall>{t.s3.osNote}</ReqSmall>
              <ReqSmall>{t.s3.versionNote}</ReqSmall>
            </ReqHalf>
            <ReqHalf>
              <ChromeRow>
                <ChromeIcon src={`${IMG}/Chrome-Logo01.png`} alt="Chrome" width={60} height={60} />
                <ChromeLink href="https://www.google.com/chrome/" target="_blank" rel="noopener noreferrer">{t.s3.downloadChrome}</ChromeLink>
              </ChromeRow>
            </ReqHalf>
          </ReqSplit>

          <RoleGrid>
            {[
              { img: "gridaboard_student.png", title: t.s3.student, desc: t.s3.studentDesc },
              { img: "gridaboard_teacher.png", title: t.s3.teacher, desc: t.s3.teacherDesc },
              { img: "gridaboard_business.png", title: t.s3.business, desc: t.s3.businessDesc },
            ].map((item) => (
              <RoleCard key={item.title}>
                <RoleImg src={`${IMG}/${item.img}`} alt={item.title} width={300} height={300} />
                <RoleTitle>{item.title}</RoleTitle>
                <RoleDesc>{item.desc}</RoleDesc>
              </RoleCard>
            ))}
          </RoleGrid>
        </Container>
      </RequirementSection>

      <CtaSectionGray>
        <CtaSplit>
          <Half>
            <CtaImage src={`${IMG}/compare-fibre-fRGoTJFQAHM-unsplash.jpg`} alt="Remote meeting" width={540} height={360} />
          </Half>
          <CtaText>
            <CtaTitle>{t.s4.title}</CtaTitle>
            <CtaSubtitle>{t.s4.subtitle}</CtaSubtitle>
            <CtaBtn href="https://gridaboard.io/" target="_blank" rel="noopener noreferrer">{t.s4.cta}</CtaBtn>
          </CtaText>
        </CtaSplit>
      </CtaSectionGray>

      {"bulkPurchase" in t && (
        <BulkSection>
          <CenterWrap>
            <CtaTitle>{(t as { bulkPurchase: { title: string; desc: string; cta: string } }).bulkPurchase.title}</CtaTitle>
            <BulkDesc>{(t as { bulkPurchase: { title: string; desc: string; cta: string } }).bulkPurchase.desc}</BulkDesc>
            <CtaBtn href="https://gridaboard.io/" target="_blank" rel="noopener noreferrer">{(t as { bulkPurchase: { title: string; desc: string; cta: string } }).bulkPurchase.cta}</CtaBtn>
          </CenterWrap>
        </BulkSection>
      )}
    </>
  );
}
