import { Metadata } from "next";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import Image from "next/image";
import {
  AboutCard,
  AboutGrid,
  AboutImg,
  AboutLabel,
  AppCard,
  AppCardBody,
  AppCardDesc,
  AppCardImg,
  AppCardTitle,
  AppsGrid,
  BgImage,
  BgOverlay40,
  BgOverlay50,
  BlockBody,
  BlockBodyDark,
  BlockBodySmall,
  BlockHeading,
  BlockTagline,
  BlockTaglineNoItalic,
  BoxItem,
  BoxList,
  BoxNote,
  BoxNum,
  BoxText,
  CheckItem,
  CheckList,
  CheckMark,
  CheckTextBold,
  CheckTextMuted,
  CenterInlineBlock,
  CompareSection,
  CompareTable,
  CompareTd,
  CompareTdR1,
  CompareTdSpec,
  CompareTh,
  CompareThR1,
  CompareTr,
  CompareWrap,
  Container,
  ContainerFeatureRich,
  ContainerManual,
  ContainerNarrow,
  ContainerSearch,
  DigitizeCard,
  DigitizeCardDesc,
  DigitizeCardTitle,
  DigitizeGrid,
  FeatureRichSub,
  FreedomCard,
  FreedomGrid,
  FreedomMain,
  FreedomSub,
  Half,
  HalfImageSecondDesktop,
  HalfTextFirstDesktop,
  ManualIcon,
  ManualLink,
  ManualLinkLabel,
  ManualStack,
  NotebookCard,
  NotebookCardBody,
  NotebookName,
  NotebookPrice,
  NotebookProductGrid,
  NotebookThumb,
  NotebookThumbImg,
  NotebooksDesc,
  NotebooksFindTitle,
  NotebooksIntroRow,
  NotebooksSubheading,
  NumberBadge,
  NumberedItem,
  NumberedList,
  RoundedCoverImg,
  SearchDesc,
  SearchTagline,
  SectionBgImage,
  SectionFreedom,
  SectionGray,
  SectionGraySoft,
  SectionNotebooksTop,
  SectionSearchBg,
  SectionWhite,
  SpecImg,
  SpecSectionRow,
  SpecTable,
  SpecTdLabel,
  SpecTdVal,
  SpecTr,
  SplitRow,
  SubGray,
  SubMuted,
  SubMutedCenter,
  Title28,
  Title32Black,
  Title32Search,
} from "./ProductR1Page.styles";

const CDN = "https://shop.neosmartpen.com/cdn/shop";

const IMG = {
  featureRichBg: `${CDN}/files/neo-smartpen-r1-img.png?v=1756778721`,
  aboutBt: `${CDN}/files/25.png?v=1756700568`,
  aboutBat: `${CDN}/files/26.png?v=1756700529`,
  aboutSave: `${CDN}/files/27.png?v=1756700645`,
  sync: `${CDN}/files/221104-neolab_smartpen_-2234_1.png?v=1756790290`,
  edit: `${CDN}/files/221104-neolab_smartpen_-2378_1.png?v=1756790344`,
  transcribe: `${CDN}/files/221104-neolab_smartpen_-2396_1.png?v=1756790387`,
  searchBg: `${CDN}/files/14.png?v=1756693263`,
  notebooks: `${CDN}/files/11_a0ab5ef5-fed0-4e2d-a0f3-676cce04e21e.jpg?v=1756697566`,
  neoStudio: `${CDN}/files/16.png?v=1756698404`,
  gridaboard: `${CDN}/files/12.jpg?v=1756698417`,
  spec: `${CDN}/files/28.png?v=1756701172`,
  box: `${CDN}/files/1_bf147d36-cecc-47e6-89bc-d6bd0c372927.jpg?v=1756790863`,
};

const NOTEBOOK_PRODUCTS = [
  { name: "NEO SMART PLANNER 2026 Pro", price: "$20.00", img: `${CDN}/files/NEOSMARTPLANNER2026Pro_001.jpg?v=1760412631`, href: "https://shop.neosmartpen.com/products/neo-smart-planner-2026" },
  { name: "100 DAY COUNTDOWN PLANNER", price: "$9.50", img: `${CDN}/products/1-437017.png?v=1754458267`, href: "https://shop.neosmartpen.com/products/100-day-countdown-planner" },
  { name: "N PROFESSIONAL NOTEBOOK", price: "$19.00", img: `${CDN}/products/n-professional-notebook-notebook-notebook-black-798281.jpg?v=1615610117`, href: "https://shop.neosmartpen.com/products/n-professional-notebook-1" },
  { name: "N MOLESKINE NOTEBOOK", price: "$29.00", img: `${CDN}/products/n-moleskine-notebook-notebook-notebook-509125.jpg?v=1606769897`, href: "https://shop.neosmartpen.com/products/n-moleskine-notebook" },
  { name: "N RING NOTEBOOK (5 PACK)", price: "$19.90", img: `${CDN}/products/n-ring-notebook-5-pack-notebook-notebook-197592.jpg?v=1615610560`, href: "https://shop.neosmartpen.com/products/n-ring-notebook-5-pack" },
  { name: "N POCKET NOTEBOOKS (5 PACK)", price: "$14.90", img: `${CDN}/products/N-730011.jpg?v=1709830146`, href: "https://shop.neosmartpen.com/products/n-pocket-notebooks-5-pack" },
  { name: "N MEMO NOTEBOOKS (5 PACK)", price: "$14.90", img: `${CDN}/products/MEMO-NOTEBOOKS-766389.jpg?v=1709913031`, href: "https://shop.neosmartpen.com/products/n-memo-notebooks-5-pack" },
  { name: "N HANDY NOTEBOOK (BLUE)", price: "$15.00", img: `${CDN}/files/n-handy-notebook-notebook-notebook-light-blue-125132_208d7ca5-0110-43ca-a76a-a35c93871409.jpg?v=1701750686`, href: "https://shop.neosmartpen.com/products/n-handy-notebook-blue" },
];

const COMPARISON = [
  { spec: "Model", lamySafari: "NWP-F80", a1: "NWP-F151", m1plus: "NWP-F55", r1: "NWP-F45", dimo: "NWP-F30" },
  { spec: "Storage (A4)", lamySafari: "160 pgs", a1: "160 pgs", m1plus: "1000 pgs", r1: "20 pgs", dimo: "20 pgs" },
  { spec: "Battery", lamySafari: "Li-Polymer 180mAh", a1: "Li-po 130mAh", m1plus: "Li-po 280mAh", r1: "Li-po 180mAh", dimo: "AAA×1" },
  { spec: "Battery Life", lamySafari: "11 hours", a1: "14 hours", m1plus: "14 hours", r1: "14 hours", dimo: "9.5 hours" },
  { spec: "Charging", lamySafari: "5 Pin Cable", a1: "USB-C", m1plus: "USB-C", r1: "USB-C", dimo: "—" },
  { spec: "Size", lamySafari: "144×16mm", a1: "139×13.9mm", m1plus: "149.6×10.9mm", r1: "149×11mm", dimo: "140×14.7mm" },
  { spec: "Weight", lamySafari: "28g", a1: "20g", m1plus: "22g", r1: "18g", dimo: "26.5g" },
  { spec: "Connectivity", lamySafari: "BT 4.2", a1: "BT 5.0", m1plus: "BT 4.2", r1: "BT 4.2", dimo: "BT 4.2" },
];

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.neosmartpen.productR1.metadata;
  return { title: t.title, description: t.description };
}

export default async function ProductR1Page({ params }: { params: Promise<{ lang: Locale }> }) {
  const dict = await getDictionary((await params).lang);
  const t = dict.neosmartpen.productR1;

  return (
    <>
      <SectionFreedom>
        <ContainerNarrow>
          <Title28>{t.freedom.heading}</Title28>
          <SubGray>{t.freedom.desc}</SubGray>
          <FreedomGrid>
            {[
              { main: t.freedom.f1, sub: t.freedom.f1sub },
              { main: t.freedom.f2, sub: t.freedom.f2sub },
              { main: t.freedom.f3, sub: t.freedom.f3sub },
              { main: t.freedom.f4, sub: t.freedom.f4sub },
            ].map((item) => (
              <FreedomCard key={item.main}>
                <FreedomMain>{item.main}</FreedomMain>
                <FreedomSub>{item.sub}</FreedomSub>
              </FreedomCard>
            ))}
          </FreedomGrid>
        </ContainerNarrow>
      </SectionFreedom>

      <SectionBgImage>
        <BgImage src={IMG.featureRichBg} alt="Feature Rich Smartpen" fill unoptimized />
        <BgOverlay50 />
        <ContainerFeatureRich>
          <Title32Black>{t.featureRich.heading}</Title32Black>
          <FeatureRichSub>{t.featureRich.subheading}</FeatureRichSub>
          <CheckList>
            {[
              { main: t.featureRich.f1, sub: t.featureRich.f1sub },
              { main: t.featureRich.f2, sub: t.featureRich.f2sub },
              { main: t.featureRich.f3, sub: t.featureRich.f3sub },
            ].map((item) => (
              <CheckItem key={item.main}>
                <CheckMark aria-hidden>✓</CheckMark>
                <div>
                  <CheckTextBold>{item.main}</CheckTextBold>
                  <CheckTextMuted> / {item.sub}</CheckTextMuted>
                </div>
              </CheckItem>
            ))}
          </CheckList>
        </ContainerFeatureRich>
      </SectionBgImage>

      <SectionWhite>
        <Container>
          <Title28>{t.aboutR1.heading}</Title28>
          <SubMutedCenter>{t.aboutR1.desc}</SubMutedCenter>
          <AboutGrid>
            {[
              { img: IMG.aboutBt, label: t.aboutR1.b1 },
              { img: IMG.aboutBat, label: t.aboutR1.b2 },
              { img: IMG.aboutSave, label: t.aboutR1.b3 },
            ].map((item) => (
              <AboutCard key={item.label}>
                <AboutImg src={item.img} alt={item.label} width={400} height={300} unoptimized />
                <AboutLabel>{item.label}</AboutLabel>
              </AboutCard>
            ))}
          </AboutGrid>
        </Container>
      </SectionWhite>

      <SectionGray>
        <ContainerNarrow>
          <Title28>{t.digitize.heading}</Title28>
          <SubGray>{t.digitize.desc}</SubGray>
          <DigitizeGrid>
            {[
              { title: t.digitize.block1Title, desc: t.digitize.block1Desc },
              { title: t.digitize.block2Title, desc: t.digitize.block2Desc },
              { title: t.digitize.block3Title, desc: t.digitize.block3Desc },
            ].map((block) => (
              <DigitizeCard key={block.title}>
                <DigitizeCardTitle>{block.title}</DigitizeCardTitle>
                <DigitizeCardDesc>{block.desc}</DigitizeCardDesc>
              </DigitizeCard>
            ))}
          </DigitizeGrid>
        </ContainerNarrow>
      </SectionGray>

      <SectionWhite>
        <ContainerNarrow>
          <Title28>{t.whatYouCan.heading}</Title28>
          <SubMuted>{t.whatYouCan.subheading}</SubMuted>
          <CenterInlineBlock>
            <NumberedList>
              {[t.whatYouCan.item1, t.whatYouCan.item2, t.whatYouCan.item3, t.whatYouCan.item4].map((item, i) => (
                <NumberedItem key={item}>
                  <NumberBadge>{i + 1}</NumberBadge>
                  {item}
                </NumberedItem>
              ))}
            </NumberedList>
          </CenterInlineBlock>
        </ContainerNarrow>
      </SectionWhite>

      <SectionGray>
        <Container>
          <SplitRow>
            <Half>
              <RoundedCoverImg src={IMG.sync} alt="Sync handwriting" width={600} height={480} unoptimized />
            </Half>
            <Half>
              <BlockHeading>{t.sync.heading}</BlockHeading>
              <BlockTagline>{t.sync.tagline}</BlockTagline>
              <BlockBody>{t.sync.desc}</BlockBody>
            </Half>
          </SplitRow>
        </Container>
      </SectionGray>

      <SectionWhite>
        <Container>
          <SplitRow>
            <HalfTextFirstDesktop>
              <BlockHeading>{t.edit.heading}</BlockHeading>
              <BlockTagline>{t.edit.tagline}</BlockTagline>
              <BlockBody>{t.edit.desc}</BlockBody>
            </HalfTextFirstDesktop>
            <HalfImageSecondDesktop>
              <RoundedCoverImg src={IMG.edit} alt="Edit handwriting" width={600} height={480} unoptimized />
            </HalfImageSecondDesktop>
          </SplitRow>
        </Container>
      </SectionWhite>

      <SectionGray>
        <Container>
          <SplitRow>
            <Half>
              <RoundedCoverImg src={IMG.transcribe} alt="Transcribe and export" width={600} height={480} unoptimized />
            </Half>
            <Half>
              <BlockHeading>{t.transcribe.heading}</BlockHeading>
              <BlockTagline>{t.transcribe.tagline}</BlockTagline>
              <BlockBody>{t.transcribe.desc}</BlockBody>
            </Half>
          </SplitRow>
        </Container>
      </SectionGray>

      <SectionSearchBg>
        <BgImage src={IMG.searchBg} alt="Search and organize" fill unoptimized />
        <BgOverlay40 />
        <ContainerSearch>
          <Title32Search>{t.search.heading}</Title32Search>
          <SearchTagline>{t.search.tagline}</SearchTagline>
          <SearchDesc>{t.search.desc}</SearchDesc>
        </ContainerSearch>
      </SectionSearchBg>

      <SectionGraySoft>
        <Container>
          <SplitRow>
            <Half>
              <RoundedCoverImg
                src="https://shop.neosmartpen.com/cdn/shop/files/2_4e69c0c0-7907-407f-926c-78fe44a4030c.jpg?v=1756790863"
                alt="NEO Smart Planner"
                width={600}
                height={400}
                unoptimized
              />
            </Half>
            <Half>
              <BlockHeading>{t.planner.heading}</BlockHeading>
              <BlockTaglineNoItalic>{t.planner.subheading}</BlockTaglineNoItalic>
              <BlockBodyDark>{t.planner.desc}</BlockBodyDark>
              <BlockBodySmall>{t.planner.apps}</BlockBodySmall>
            </Half>
          </SplitRow>
        </Container>
      </SectionGraySoft>

      <SectionNotebooksTop>
        <Container>
          <Title28>{t.notebooks.heading}</Title28>
          <NotebooksIntroRow>
            <Half>
              <RoundedCoverImg src={IMG.notebooks} alt="Notebooks for Neo Smartpen" width={600} height={420} unoptimized />
            </Half>
            <Half>
              <NotebooksSubheading>{t.notebooks.title}</NotebooksSubheading>
              <NotebooksDesc>{t.notebooks.desc}</NotebooksDesc>
            </Half>
          </NotebooksIntroRow>
          <NotebooksFindTitle>{t.notebooks.findTitle}</NotebooksFindTitle>
          <NotebookProductGrid>
            {NOTEBOOK_PRODUCTS.map((nb) => (
              <NotebookCard key={nb.href} href={nb.href} target="_blank" rel="noopener noreferrer">
                <NotebookThumb>
                  <NotebookThumbImg src={nb.img} alt={nb.name} width={200} height={200} unoptimized />
                </NotebookThumb>
                <NotebookCardBody>
                  <NotebookName>{nb.name}</NotebookName>
                  <NotebookPrice>{nb.price}</NotebookPrice>
                </NotebookCardBody>
              </NotebookCard>
            ))}
          </NotebookProductGrid>
        </Container>
      </SectionNotebooksTop>

      <SectionWhite>
        <Container>
          <Title28>{t.apps.heading}</Title28>
          <AppsGrid>
            <AppCard>
              <AppCardImg src={IMG.neoStudio} alt="Neo Studio 2" width={600} height={360} unoptimized />
              <AppCardBody>
                <AppCardTitle>{t.apps.ns2title}</AppCardTitle>
                <AppCardDesc>{t.apps.ns2desc}</AppCardDesc>
              </AppCardBody>
            </AppCard>
            <AppCard>
              <AppCardImg src={IMG.gridaboard} alt="Grida Board" width={600} height={360} unoptimized />
              <AppCardBody>
                <AppCardTitle>{t.apps.gbtitle}</AppCardTitle>
                <AppCardDesc>{t.apps.gbdesc}</AppCardDesc>
              </AppCardBody>
            </AppCard>
          </AppsGrid>
        </Container>
      </SectionWhite>

      <SectionGray>
        <Container>
          <Title28>{t.specs.heading}</Title28>
          <SpecSectionRow>
            <Half>
              <SpecImg src={IMG.spec} alt="Specification" width={600} height={500} unoptimized />
            </Half>
            <Half>
              <SpecTable>
                <tbody>
                  {[
                    [t.specs.model, t.specs.modelVal],
                    [t.specs.storage, t.specs.storageVal],
                    [t.specs.battery, t.specs.batteryVal],
                    [t.specs.batteryLife, t.specs.batteryLifeVal],
                    [t.specs.charging, t.specs.chargingVal],
                    [t.specs.size, t.specs.sizeVal],
                    [t.specs.weight, t.specs.weightVal],
                    [t.specs.powerBtn, t.specs.powerBtnVal],
                    [t.specs.connectivity, t.specs.connectivityVal],
                    [t.specs.colors, t.specs.colorsVal],
                  ].map(([label, value]) => (
                    <SpecTr key={label}>
                      <SpecTdLabel>{label}</SpecTdLabel>
                      <SpecTdVal>{value}</SpecTdVal>
                    </SpecTr>
                  ))}
                </tbody>
              </SpecTable>
            </Half>
          </SpecSectionRow>
        </Container>
      </SectionGray>

      <SectionWhite>
        <Container>
          <Title28>{t.box.heading}</Title28>
          <SplitRow>
            <Half>
              <SpecImg src={IMG.box} alt="What's inside the box" width={600} height={440} unoptimized />
            </Half>
            <Half>
              <BoxList>
                {[t.box.item1, t.box.item2, t.box.item3].map((item, i) => (
                  <BoxItem key={item}>
                    <BoxNum>{i + 1}</BoxNum>
                    <BoxText>{item}</BoxText>
                  </BoxItem>
                ))}
              </BoxList>
              <BoxNote>{t.box.note}</BoxNote>
            </Half>
          </SplitRow>
        </Container>
      </SectionWhite>

      <CompareSection>
        <Container>
          <Title28>{t.comparison.heading}</Title28>
          <CompareWrap>
              <CompareTable>
                <thead>
                  <tr>
                    <CompareTh $align="left">Spec</CompareTh>
                    <CompareTh>Lamy Safari</CompareTh>
                    <CompareTh>A1</CompareTh>
                    <CompareTh>M1+</CompareTh>
                    <CompareThR1>R1</CompareThR1>
                    <CompareTh>Dimo</CompareTh>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row, i) => (
                    <CompareTr key={row.spec} $even={i % 2 === 0}>
                      <CompareTdSpec>{row.spec}</CompareTdSpec>
                      <CompareTd>{row.lamySafari}</CompareTd>
                      <CompareTd>{row.a1}</CompareTd>
                      <CompareTd>{row.m1plus}</CompareTd>
                      <CompareTdR1>{row.r1}</CompareTdR1>
                      <CompareTd>{row.dimo}</CompareTd>
                    </CompareTr>
                  ))}
                </tbody>
              </CompareTable>
          </CompareWrap>
        </Container>
      </CompareSection>

      <SectionWhite>
        <ContainerManual>
          <Title28>{t.manual.heading}</Title28>
          <ManualStack>
            <ManualLink href="https://neo-smartpen.myshopify.com/cdn/shop/files/F40_manual_global.pdf" target="_blank" rel="noopener noreferrer">
              <ManualLinkLabel>{t.manual.dl1}</ManualLinkLabel>
              <ManualIcon fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </ManualIcon>
            </ManualLink>
            <ManualLink href="https://neo-smartpen.myshopify.com/cdn/shop/files/R1_manual_re7_240624.pdf" target="_blank" rel="noopener noreferrer">
              <ManualLinkLabel>{t.manual.dl2}</ManualLinkLabel>
              <ManualIcon fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </ManualIcon>
            </ManualLink>
          </ManualStack>
        </ContainerManual>
      </SectionWhite>
    </>
  );
}
