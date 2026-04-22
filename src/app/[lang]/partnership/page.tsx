import { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import ContactModalTrigger from "@/components/common/ContactModalTrigger";
import { LazySection } from "@/components/home";
import PartnershipCategories from "@/components/partnership/PartnershipCategories";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import {
  CenterDesc,
  CenterTitle,
  CenterWrap,
  Container,
  DarkDesc,
  DarkSection,
  EventBody,
  EventCard,
  EventDesc,
  EventImageWrap,
  EventTitle,
  ExhibGrid,
  HeroDesc,
  HeroImage,
  HeroImageWrap,
  HeroInner,
  HeroLabel,
  HeroOverlay,
  HeroSection,
  HeroText,
  HeroTitle,
  MailLink,
  PrimaryBtnLink,
  SectionGray,
  SectionWhite,
  TealBtn,
} from "./PartnershipPage.styles";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Partnership - NeoLAB Convergence Inc.",
  description: "Create new business opportunities with NeoLAB Convergence",
};

interface PartnerCard { name: string; description: string; image: string; }

export default async function PartnershipPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.partnership;
  const p = t.partners;

  const stationery: PartnerCard[] = [{ ...p.moleskine, image: "/images/partnership/Stationery_moleskine01.jpg" }, { ...p.monami, image: "/images/partnership/Stationery_monami.jpg" }, { ...p.lamy, image: "/images/partnership/Stationery_lamy.jpg" }, { ...p.lineFriends, image: "/images/partnership/line.jpg" }, { ...p.yangjisa, image: "/images/partnership/Stationery_yangjisa.jpg" }];
  const education: PartnerCard[] = [{ ...p.kyowonKumon, image: "/images/partnership/edu_kumon.jpg" }, { ...p.mbest, image: "/images/partnership/edu_mbest.jpg" }, { ...p.smartStudy, image: "/images/partnership/edu_study.jpg" }, { ...p.englishEgg, image: "/images/partnership/edu_egg.jpg" }, { ...p.hansolEdu, image: "/images/partnership/edu_whale.jpg" }, { ...p.bts, image: "/images/partnership/edu_BTS.jpg" }, { ...p.smartssen, image: "/images/partnership/edu_sinsa.jpg" }, { ...p.echelon, image: "/images/partnership/edu_ech.jpg" }, { ...p.chungnamEdu, image: "/images/partnership/edu_chungnam_edu.jpg" }, { ...p.jeonbukEdu, image: "/images/partnership/edu_jeonbuk_edu.jpg" }];
  const enterprise: PartnerCard[] = [{ ...p.forestService, image: "/images/partnership/form_san.jpg" }, { ...p.informDS, image: "/images/partnership/form_inform.jpg" }, { ...p.lgChemical, image: "/images/partnership/form_LG.jpg" }];
  const audioGuide: PartnerCard[] = [{ ...p.culturalHeritage, image: "/images/partnership/munhaw.jpg" }, { ...p.chuusonji, image: "/images/partnership/form_chuson.jpg" }];
  const license: PartnerCard[] = [{ ...p.snu, image: "/images/partnership/SNU.jpg" }, { ...p.koreaUniv, image: "/images/partnership/kyo.jpg" }, { ...p.kimJungGi, image: "/images/partnership/jung.jpg" }, { ...p.johnMayer, image: "/images/partnership/john.jpg" }];
  const media: PartnerCard[] = [{ ...p.tvnBrainiacs, image: "/images/partnership/tv01.jpg" }, { ...p.tvnCoolkkadang, image: "/images/partnership/tv02.jpg" }, { ...p.heartSignal, image: "/images/partnership/tv03.jpg" }, { ...p.hitman, image: "/images/partnership/tv04.jpg" }, { ...p.secretLove, image: "/images/partnership/tv05.jpg" }, { ...p.idolLeague, image: "/images/partnership/tv06.jpg" }];

  return (
    <>
      <Header lang={lang} dict={dict.common.header} />
      <main>
        <HeroSection>
          <HeroOverlay />
          <HeroInner>
            <HeroText><HeroLabel>{t.hero.label}</HeroLabel><HeroTitle>{t.hero.title}</HeroTitle><HeroDesc>{t.hero.description}</HeroDesc></HeroText>
            <HeroImageWrap><HeroImage src="/images/partnership/picWindow01.png" alt="Partnership" width={400} height={478} /></HeroImageWrap>
          </HeroInner>
        </HeroSection>

        <SectionWhite>
          <Container>
            <CenterWrap>
              <CenterTitle>{t.diverseApplications.title}</CenterTitle>
              <CenterDesc>{t.diverseApplications.description}</CenterDesc>
              <PrimaryBtnLink href="#collab">{dict.common.contactUs}</PrimaryBtnLink>
            </CenterWrap>
          </Container>
        </SectionWhite>

        <LazySection>
          <SectionGray>
            <Container>
              <PartnershipCategories categories={[
                { icon: "/images/partnership/icon-coll01.png", title: t.categories.stationery, cards: stationery },
                { icon: "/images/partnership/icon-coll02.png", title: t.categories.education, cards: education },
                { icon: "/images/partnership/icon-coll05.png", title: t.categories.enterpriseForm, cards: enterprise },
                { icon: "/images/partnership/icon-coll02.png", title: t.categories.audioGuide, cards: audioGuide },
                { icon: "/images/partnership/icon-coll03.png", title: t.categories.license, cards: license },
                { icon: "/images/partnership/icon-coll04.png", title: t.categories.media, cards: media },
              ]} />
            </Container>
          </SectionGray>
        </LazySection>

        <LazySection>
          <SectionWhite>
            <Container>
              <CenterTitle>{t.exhibitions.title}</CenterTitle>
              <CenterDesc>{t.exhibitions.description}</CenterDesc>
              <ExhibGrid>
                {t.exhibitions.events.map((event, i) => {
                  const images = ["/images/partnership/g01.jpg", "/images/partnership/huyndai02.jpg", "/images/partnership/forum.jpg"];
                  return (
                    <EventCard key={event.title}>
                      <EventImageWrap><Image src={images[i]} alt={event.title} fill /></EventImageWrap>
                      <EventBody><EventTitle>{event.title}</EventTitle><EventDesc>{event.description}</EventDesc></EventBody>
                    </EventCard>
                  );
                })}
              </ExhibGrid>
            </Container>
          </SectionWhite>
        </LazySection>

        <LazySection>
          <SectionGray id="collab">
            <Container>
              <CenterWrap>
                <CenterTitle>{dict.common.creatingNewValue}</CenterTitle>
                <CenterDesc>{dict.common.contactUsAt} <MailLink href="mailto:korbiz@neolab.net">korbiz@neolab.net</MailLink></CenterDesc>
                <ContactModalTrigger buttonText={dict.common.contactUs} variant="pill" pillVariant="primary" defaultCategory="제안사항" />
              </CenterWrap>
            </Container>
          </SectionGray>
        </LazySection>

        <LazySection>
          <DarkSection>
            <Container>
              <CenterTitle>{dict.common.designedForDevelopers}</CenterTitle>
              <DarkDesc>{dict.common.developersDesc}</DarkDesc>
              <TealBtn href="https://github.com/NeoSmartpen" target="_blank" rel="noopener noreferrer">{dict.common.openSourceCode}</TealBtn>
            </Container>
          </DarkSection>
        </LazySection>
      </main>
      <Footer lang={lang} dict={dict.common.footer} />
    </>
  );
}
