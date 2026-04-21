import { Metadata } from "next";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import {
  BodyCenter,
  CertImg,
  CompareBox,
  CompareCol,
  CompareGrid,
  CompareImg,
  CompareTitle,
  Container,
  FeatureDesc,
  FeatureGrid,
  FeatureImg,
  FeatureItem,
  FeatureThumb,
  FeatureTitle,
  GalleryGrid,
  GalleryImg,
  H2,
  HeroImg,
  HeroInner,
  HeroSection,
  HeroSub,
  HeroTitle,
  LineupCard,
  LineupDesc,
  LineupImg,
  LineupImgCol,
  LineupName,
  LineupTextCol,
  LineupWrap,
  ProductInfoLabel,
  ProductInfoText,
  SectionGray,
  SectionPad,
  SectionWhite,
} from "./NotebooksPage.styles";

const IMG = "/images/neosmartpen/paper/notebooks";
const NOTE_IMG = "/images/neosmartpen/main";

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.neosmartpen.notebooks.metadata;
  return { title: t.title, description: t.description };
}

export default async function NotebooksPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const dict = await getDictionary((await params).lang);
  const t = dict.neosmartpen.notebooks;

  const notebooks = [
    { name: t.lineup.memo, desc: t.lineup.memoDesc, spec: t.lineup.memoSpec, img: `${IMG}/N-memo-2-1.png` },
    { name: t.lineup.blankPlanner, desc: t.lineup.blankPlannerDesc, spec: t.lineup.blankPlannerSpec, img: `${IMG}/N-Blank-Planner_01.png` },
    { name: t.lineup.moleskine, desc: t.lineup.moleskineDesc, spec: t.lineup.moleskineSpec, img: `${IMG}/N-Moleskine_01.png` },
    { name: t.lineup.ideaPadMini, desc: t.lineup.ideaPadMiniDesc, spec: t.lineup.ideaPadMiniSpec, img: `${IMG}/idea-pad-mini_01.png` },
    { name: t.lineup.college, desc: t.lineup.collegeDesc, spec: t.lineup.collegeSpec, img: `${IMG}/N_college_notebook-1.png` },
    { name: t.lineup.pocket, desc: t.lineup.pocketDesc, spec: t.lineup.pocketSpec, img: `${IMG}/N-pocket-2.png` },
    { name: t.lineup.ring, desc: t.lineup.ringDesc, spec: t.lineup.ringSpec, img: `${IMG}/N-ring_01-1.png` },
    { name: t.lineup.professional, desc: t.lineup.professionalDesc, spec: t.lineup.professionalSpec, img: `${NOTE_IMG}/note05-1.jpg` },
    { name: t.lineup.ideaPad, desc: t.lineup.ideaPadDesc, spec: t.lineup.ideaPadSpec, img: `${IMG}/idea-pad_01-1.png` },
    { name: t.lineup.holder, desc: t.lineup.holderDesc, spec: t.lineup.holderSpec, img: `${IMG}/N-Holder_Grey-1.png` },
  ];

  return (
    <>
      <HeroSection>
        <HeroInner>
          <HeroTitle>{t.hero.subtitle}</HeroTitle>
          <HeroSub>{t.appNote}</HeroSub>
          <HeroImg src={`${IMG}/notebooks_hero.png`} alt={t.hero.title} width={800} height={500} priority />
        </HeroInner>
      </HeroSection>

      <SectionWhite>
        <SectionPad>
          <H2>{t.features.variety}</H2>
          <BodyCenter>{t.features.varietyDesc}</BodyCenter>
          <CompareGrid>
            <CompareCol>
              <CompareTitle>{t.features.ipad}</CompareTitle>
              <CompareBox>
                <CompareImg src={`${IMG}/benefit_ios.png`} alt={t.features.ipad} width={375} height={372} />
              </CompareBox>
            </CompareCol>
            <CompareCol>
              <CompareTitle>{t.features.digitalNotebook}</CompareTitle>
              <CompareBox>
                <CompareImg src={`${IMG}/benefit_paper.png`} alt={t.features.digitalNotebook} width={375} height={372} />
              </CompareBox>
            </CompareCol>
          </CompareGrid>
        </SectionPad>
      </SectionWhite>

      <SectionGray>
        <SectionPad>
          <FeatureGrid>
            {[
              { title: t.features.edit, desc: t.features.editDesc, img: `${IMG}/note_usage_1.jpg` },
              { title: t.features.share, desc: t.features.shareDesc, img: `${IMG}/note_usage_2.jpg` },
              { title: t.features.search, desc: t.features.searchDesc, img: `${IMG}/note_usage_3.jpg` },
            ].map((item) => (
              <FeatureItem key={item.title}>
                <FeatureThumb>
                  <FeatureImg src={item.img} alt={item.title} width={320} height={240} />
                </FeatureThumb>
                <FeatureTitle>{item.title}</FeatureTitle>
                <FeatureDesc>{item.desc}</FeatureDesc>
              </FeatureItem>
            ))}
          </FeatureGrid>
        </SectionPad>
      </SectionGray>

      <SectionWhite>
        <SectionPad>
          <H2>{t.features.quality}</H2>
          <BodyCenter>{t.features.qualityDesc}</BodyCenter>
          <CertImg src={`${NOTE_IMG}/Screen-Shot-2022-02-09-at-11.09.44-PM.png`} alt="Ncode certification" width={200} height={100} />
          <GalleryGrid>
            {[`${NOTE_IMG}/note05-1.jpg`, `${NOTE_IMG}/note04-1.jpg`, `${NOTE_IMG}/note01-1.jpg`, `${NOTE_IMG}/note03-1.jpg`, `${NOTE_IMG}/note02-1.jpg`].map((src) => (
              <GalleryImg key={src} src={src} alt="Notebook" width={200} height={260} />
            ))}
          </GalleryGrid>
        </SectionPad>
      </SectionWhite>

      <SectionGray>
        <SectionPad>
          <H2>{t.lineup.title}</H2>
          <LineupWrap>
            {notebooks.map((nb, i) => (
              <LineupCard key={nb.name} $reverse={i % 2 !== 0}>
                <LineupImgCol>
                  <LineupImg src={nb.img} alt={nb.name} width={280} height={360} />
                </LineupImgCol>
                <LineupTextCol>
                  <LineupName>{nb.name}</LineupName>
                  <LineupDesc>{nb.desc}</LineupDesc>
                  <ProductInfoLabel>{t.lineup.productInfo}</ProductInfoLabel>
                  <ProductInfoText>{nb.spec}</ProductInfoText>
                </LineupTextCol>
              </LineupCard>
            ))}
          </LineupWrap>
        </SectionPad>
      </SectionGray>
    </>
  );
}
