import { Metadata } from "next";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import {
  BlackInner,
  BlackMin,
  CenterBlock,
  CenterSub,
  CenterTitle,
  Container,
  FeatureCard,
  FeatureDesc,
  FeatureGrid,
  FeatureImg,
  FeatureSub,
  FeatureTitle,
  GuideMainLink,
  GuideSub,
  GuideSubLink,
  GuideTitle,
  HalfCenter,
  HalfText,
  HeroDesc,
  HeroHeading,
  HeroImage,
  HeroLogo,
  HeroMeta,
  HeroMetaDesc,
  HeroTitle,
  HeroWrap,
  InvertLogo,
  MidHeading,
  NeedCard,
  NeedDesc,
  NeedGrid,
  NeedIcon,
  NeedImg,
  NeedImgWrap,
  NeedLabel,
  PenImage,
  PrimaryBtn,
  SectionBlack,
  SectionGray,
  SectionPad,
  SectionWhite,
  SmallText,
  ThinkingGrid,
  ThinkingImg,
  ThinkingItem,
  UseCaseDesc,
  UseCaseDescSpaced,
  UseCaseGrid,
  UseCaseImg,
  UseCaseTag,
  UseCaseTitle,
  WhiteHeading,
  Row,
} from "./ProductLamyPage.styles";

const IMG = "/images/neosmartpen/products/lamy";

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.neosmartpen.productLamy.metadata;
  return { title: t.title, description: t.description };
}

export default async function ProductLamyPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const dict = await getDictionary((await params).lang);
  const t = dict.neosmartpen.productLamy;

  return (
    <>
      <SectionWhite>
        <HeroWrap>
          <Row>
            <HalfText>
              <HeroLogo src={`${IMG}/lamy_fullname.png`} alt="LAMY safari all black ncode" width={758} height={53} />
              <HeroMeta>{t.hero.collaboration}</HeroMeta>
              <HeroMetaDesc>{t.hero.collab}</HeroMetaDesc>
              <HeroMeta>{t.hero.slogan}</HeroMeta>
              <HeroTitle>{t.hero.subtitle}</HeroTitle>
              <HeroHeading>{t.hero.desc}</HeroHeading>
              <HeroDesc>{t.hero.heroDesc}</HeroDesc>
              <HeroLogo src={`${IMG}/lamy_neolab_logo.png`} alt="LAMY x NeoLAB" width={232} height={27} />
            </HalfText>
            <HalfCenter>
              <HeroImage src={`${IMG}/lamy_imageshot.png`} alt="LAMY safari all black ncode" width={807} height={578} />
            </HalfCenter>
          </Row>
        </HeroWrap>
      </SectionWhite>

      <BlackMin>
        <BlackInner>
          <HalfText>
            <InvertLogo src={`${IMG}/lamy_fullname.png`} alt="LAMY safari all black ncode" width={758} height={53} />
            <WhiteHeading>{t.s2.heading}</WhiteHeading>
          </HalfText>
          <HalfCenter>
            <PenImage src={`${IMG}/lamy_pen2.png`} alt="LAMY pen" width={976} height={779} />
          </HalfCenter>
        </BlackInner>
      </BlackMin>

      <SectionBlack>
        <CenterBlock>
          <CenterTitle>{t.lamyMeetsDigital.heading}</CenterTitle>
          <CenterSub>{t.lamyMeetsDigital.sub}</CenterSub>
        </CenterBlock>
      </SectionBlack>

      <SectionWhite>
        <SectionPad>
          <Row>
            <HalfCenter>
              <HeroImage src={`${IMG}/lamy_third01.png`} alt="LAMY digital" width={500} height={501} />
            </HalfCenter>
            <HalfText>
              <MidHeading>{t.s2a.heading}</MidHeading>
              <CenterSub>{t.s2a.sub}</CenterSub>
            </HalfText>
          </Row>
        </SectionPad>
      </SectionWhite>

      <SectionWhite>
        <SectionPad>
          <CenterBlock>
            <HeroMeta>{t.thinkingTool.tag}</HeroMeta>
            <MidHeading>{t.thinkingTool.heading}</MidHeading>
          </CenterBlock>
          <ThinkingGrid>
            {[
              { img: "think1.png", text: t.thinkingTool.items[0] },
              { img: "think3.png", text: t.thinkingTool.items[1] },
              { img: "think2.png", text: t.thinkingTool.items[2] },
              { img: "think4.png", text: t.thinkingTool.items[3] },
            ].map((item) => (
              <ThinkingItem key={item.text}>
                <ThinkingImg src={`${IMG}/${item.img}`} alt={item.text} width={269} height={247} />
                <SmallText>{item.text}</SmallText>
              </ThinkingItem>
            ))}
          </ThinkingGrid>
        </SectionPad>
      </SectionWhite>

      <SectionBlack>
        <SectionPad>
          <CenterBlock>
            <HeroMeta>{t.special.tag}</HeroMeta>
            <CenterSub>{t.special.highlightsSubheading}</CenterSub>
            <WhiteHeading>{t.special.heading}</WhiteHeading>
          </CenterBlock>
          <FeatureGrid>
            {[
              { img: "special1.png", title: t.special.writeAndGo, sub: "", desc: t.special.writeAndGoDesc },
              { img: "special2.png", title: t.special.digitalPaper, sub: "", desc: t.special.digitalPaperDesc },
              { img: "special3.png", title: t.special.grip, sub: t.special.gripSub, desc: t.special.gripDesc },
              { img: "special4.png", title: t.special.theme, sub: "", desc: t.special.themeDesc },
            ].map((item) => (
              <FeatureCard key={item.title}>
                <FeatureImg src={`${IMG}/${item.img}`} alt={item.title} width={240} height={240} />
                <FeatureTitle>{item.title}</FeatureTitle>
                {item.sub && <FeatureSub>{item.sub}</FeatureSub>}
                <FeatureDesc>{item.desc}</FeatureDesc>
              </FeatureCard>
            ))}
          </FeatureGrid>
        </SectionPad>
      </SectionBlack>

      <SectionGray>
        <SectionPad>
          <CenterBlock>
            <HeroMeta>{t.whatYouNeed.tag}</HeroMeta>
            <MidHeading>{t.whatYouNeed.heading}</MidHeading>
          </CenterBlock>
          <NeedImgWrap>
            <NeedImg src={`${IMG}/required.png`} alt="What you need" width={800} height={400} />
          </NeedImgWrap>
          <NeedGrid>
            {[
              { img: "required_icon1.png", label: t.whatYouNeed.app, desc: t.whatYouNeed.appDesc },
              { img: "required_icon2.png", label: t.whatYouNeed.pen, desc: t.whatYouNeed.penDesc },
              { img: "special_icon3.png", label: t.whatYouNeed.paper, desc: t.whatYouNeed.paperDesc },
            ].map((item) => (
              <NeedCard key={item.label}>
                <NeedIcon src={`${IMG}/${item.img}`} alt={item.label} width={120} height={120} />
                <NeedLabel>{item.label}</NeedLabel>
                <NeedDesc>{item.desc}</NeedDesc>
              </NeedCard>
            ))}
          </NeedGrid>
          <CenterBlock>
            <PrimaryBtn href={t.whatYouNeed.findOutMoreLink} target="_blank" rel="noopener noreferrer">
              {t.whatYouNeed.findOutMore}
            </PrimaryBtn>
          </CenterBlock>
        </SectionPad>
      </SectionGray>

      <SectionWhite>
        <SectionPad>
          <CenterBlock>
            <HeroMeta>{t.useCases.sectionTag}</HeroMeta>
          </CenterBlock>
          <UseCaseGrid>
            <div>
              <UseCaseImg src={`${IMG}/showtell01.jpg`} alt="Share with one touch" width={340} height={250} />
              <UseCaseTag>{t.useCases.touch.tag}</UseCaseTag>
              <UseCaseTitle>{t.useCases.touch.title}</UseCaseTitle>
              <UseCaseDesc>{t.useCases.touch.desc}</UseCaseDesc>
            </div>
            <div>
              <UseCaseImg src={`${IMG}/N2_promo01.jpg`} alt="Easy to store" width={340} height={250} />
              <UseCaseTag>{t.useCases.store.tag}</UseCaseTag>
              <UseCaseTitle>{t.useCases.store.title}</UseCaseTitle>
              <UseCaseDescSpaced>{t.useCases.store.desc}</UseCaseDescSpaced>
              <UseCaseImg src={`${IMG}/showtell02.jpg`} alt="Convenience" width={340} height={250} />
              <UseCaseTag>{t.useCases.convenience.tag}</UseCaseTag>
              <UseCaseTitle>{t.useCases.convenience.title}</UseCaseTitle>
              <UseCaseDesc>{t.useCases.convenience.desc}</UseCaseDesc>
            </div>
            <div>
              <UseCaseImg src={`${IMG}/grida_13.jpg`} alt="Smart work" width={340} height={250} />
              <UseCaseTag>{t.useCases.smartwork.tag}</UseCaseTag>
              <UseCaseTitle>{t.useCases.smartwork.title}</UseCaseTitle>
              <UseCaseDesc>{t.useCases.smartwork.desc}</UseCaseDesc>
            </div>
          </UseCaseGrid>
        </SectionPad>
      </SectionWhite>

      <SectionWhite>
        <CenterBlock>
          <GuideTitle>
            <GuideMainLink href={t.userGuide.link} target="_blank" rel="noopener noreferrer">
              {t.userGuide.title}
            </GuideMainLink>
          </GuideTitle>
          <GuideSub>
            <GuideSubLink href={t.userGuide.espanolLink} target="_blank" rel="noopener noreferrer">{t.userGuide.espanol}</GuideSubLink>
            {" / "}
            <GuideSubLink href={t.userGuide.italianoLink} target="_blank" rel="noopener noreferrer">{t.userGuide.italiano}</GuideSubLink>
            {" / "}
            <GuideSubLink href={t.userGuide.francaisLink} target="_blank" rel="noopener noreferrer">{t.userGuide.francais}</GuideSubLink>
            {" / "}
            <GuideSubLink href={t.userGuide.nederlandseLink} target="_blank" rel="noopener noreferrer">{t.userGuide.nederlandse}</GuideSubLink>
          </GuideSub>
        </CenterBlock>
      </SectionWhite>
    </>
  );
}
