import { Metadata } from "next";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import {
  Container,
  DownloadBtn,
  DownloadCard,
  DownloadGrid2,
  DownloadGrid4,
  DownloadGrid5,
  DownloadImage,
  FeatureCard,
  FeatureDesc,
  FeatureGrid,
  FeatureIcon,
  FeatureTitle,
  HeroInner,
  HeroSection,
  HeroSubtitle,
  HeroTitle,
  InfoDesc,
  InfoHalf,
  InfoImage,
  InfoImageRounded,
  InfoImageWrap,
  InfoSplit,
  InfoSplitReverse,
  InfoSub,
  InfoTitle,
  NoteBox,
  NoteLabel,
  NoteLabelStrong,
  NoteList,
  SectionGray,
  SectionHeading,
  SectionPad,
  SectionWhite,
} from "./NcodePdfPage.styles";

const IMG = "/images/neosmartpen/paper/ncode-pdf";

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.neosmartpen.ncodePdf.metadata;
  return { title: t.title, description: t.description };
}

const PAPER_DOWNLOADS = [
  { img: "paper_plain-1.png", label: "Plain", href: "https://neosmartpen.com/wp-content/uploads/2022/03/Neosmartpen_A4_A_Type_plain_en.zip" },
  { img: "paper_string-1.png", label: "Lined", href: "https://neosmartpen.com/wp-content/uploads/2022/03/Neosmartpen_A4_B_Type_string_en.zip" },
  { img: "paper_grid-1.png", label: "Grid", href: "https://neosmartpen.com/wp-content/uploads/2022/03/Neosmartpen_A4_C_Type_grid_en.zip" },
  { img: "paper_dot-1.png", label: "Dot", href: "https://neosmartpen.com/wp-content/uploads/2022/03/Neosmartpen_A4_D_Type_dot_en.zip" },
  { img: "paper_landscape-1.png", label: "Landscape", href: "https://neosmartpen.com/wp-content/uploads/2022/03/Neosmartpen_A4_E_Type_landscape_en.zip" },
];

const TEMPLATE_DOWNLOADS = [
  { img: "NcodePDF_manuscript.png", label: "Manuscript", href: "https://drive.google.com/file/d/1d68IiJarC_BIni18uOehXZu30qavSzyr/view?usp=drive_link" },
  { img: "NcodePDF_Check-List.png", label: "Check-List", href: "https://drive.google.com/file/d/1gX9p7tta7JKwwLBZPAT7V8ZfDbTolRnr/view?usp=drive_link" },
  { img: "NcodePDF_cornell.png", label: "Cornell", href: "https://drive.google.com/file/d/1m3mQhDDN2Nuij9KfXuYycKWVwHPHsgkB/view?usp=drive_link" },
  { img: "NcodePDF_Meeting-Minutes.png", label: "Meeting Minutes", href: "https://drive.google.com/file/d/1P5xWYUrNNVYzj3dzgoaUlcz2c0sr74a3/view?usp=drive_link" },
  { img: "NcodePDF_log-sheet.png", label: "Log Sheet", href: "https://drive.google.com/file/d/1KUgsVdnHb7De0bxRHCNF6xaDowVQBsTH/view?usp=drive_link" },
  { img: "NcodePDF_Letter.png", label: "Letter", href: "https://drive.google.com/file/d/18OBF04MgfNr1OxYfda03vlbb0t-D29G-/view?usp=drive_link" },
  { img: "NcodePDF_A5_Plain.png", label: "A5 Plain", href: "https://drive.google.com/file/d/1F4y5bRssGaqROzJPKqeZtu72gShfOle6/view?usp=drive_link" },
  { img: "NcodePDF_A5_String.png", label: "A5 Lined", href: "https://drive.google.com/file/d/1sLWNy5rfG6U2tQ3wpIgEas4qzqufKFt-/view?usp=drive_link" },
];

const STORYBOARD_DOWNLOADS = [
  { img: "NcodeStoryBD_A4_ver1.png", label: "Storyboard A4", href: "https://neosmartpen.com/wp-content/uploads/2022/07/StoryBoard-A4.zip" },
  { img: "NcodeStoryBD_Letter_ver1.png", label: "Storyboard Letter", href: "https://neosmartpen.com/wp-content/uploads/2022/07/StoryBoard-Letter.zip" },
];

export default async function NcodePdfPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const dict = await getDictionary((await params).lang);
  const t = dict.neosmartpen.ncodePdf;

  return (
    <>
      <HeroSection>
        <HeroInner>
          <HeroTitle>{t.hero.title}</HeroTitle>
          <HeroSubtitle>{t.hero.subtitle}</HeroSubtitle>
        </HeroInner>
      </HeroSection>

      <SectionWhite>
        <SectionPad>
          <FeatureGrid>
            {[
              { icon: `${IMG}/Print-Icon_01.png`, title: t.features.printHome, desc: t.features.printHomeDesc },
              { icon: `${IMG}/Print-Icon_02.png`, title: t.features.enoughPages, desc: t.features.enoughPagesDesc },
              { icon: `${IMG}/Print-Icon_03.png`, title: t.features.templates, desc: t.features.templatesDesc },
            ].map((item) => (
              <FeatureCard key={item.title}>
                <FeatureIcon src={item.icon} alt={item.title} width={80} height={80} />
                <FeatureTitle>{item.title}</FeatureTitle>
                <FeatureDesc>{item.desc}</FeatureDesc>
              </FeatureCard>
            ))}
          </FeatureGrid>
        </SectionPad>
      </SectionWhite>

      <SectionGray>
        <SectionPad>
          <SectionHeading>{t.printables}</SectionHeading>
          <DownloadGrid5>
            {PAPER_DOWNLOADS.map((paper) => (
              <DownloadCard key={paper.label}>
                <DownloadImage src={`${IMG}/${paper.img}`} alt={paper.label} width={200} height={280} />
                <DownloadBtn href={paper.href} target="_blank" rel="noopener noreferrer">{t.download}</DownloadBtn>
              </DownloadCard>
            ))}
          </DownloadGrid5>
          <DownloadGrid4>
            {TEMPLATE_DOWNLOADS.map((tmpl) => (
              <DownloadCard key={tmpl.label}>
                <DownloadImage src={`${IMG}/${tmpl.img}`} alt={tmpl.label} width={200} height={280} />
                <DownloadBtn href={tmpl.href} target="_blank" rel="noopener noreferrer">{t.download}</DownloadBtn>
              </DownloadCard>
            ))}
          </DownloadGrid4>
          <DownloadGrid2>
            {STORYBOARD_DOWNLOADS.map((sb) => (
              <DownloadCard key={sb.label}>
                <DownloadImage src={`${IMG}/${sb.img}`} alt={sb.label} width={400} height={280} />
                <DownloadBtn href={sb.href} target="_blank" rel="noopener noreferrer">{t.download}</DownloadBtn>
              </DownloadCard>
            ))}
          </DownloadGrid2>
        </SectionPad>
      </SectionGray>

      <SectionWhite>
        <SectionPad>
          <NoteBox>
            <NoteLabel><NoteLabelStrong>{t.notes.noteLabel}</NoteLabelStrong></NoteLabel>
            <NoteList>
              <li>{t.notes.note1}</li>
              <li>{t.notes.note2}</li>
              <li>{t.notes.note3}</li>
            </NoteList>
          </NoteBox>

          <InfoSplit>
            <InfoHalf>
              <InfoTitle>{t.beforePrint}</InfoTitle>
              <InfoSub>{t.testFirst}</InfoSub>
              <InfoDesc>{t.testFirstDesc}</InfoDesc>
            </InfoHalf>
            <InfoImageWrap>
              <InfoImage src={`${IMG}/code_head_img-1.png`} alt={t.beforePrint} width={400} height={300} />
            </InfoImageWrap>
          </InfoSplit>

          <InfoSplitReverse>
            <InfoHalf>
              <InfoTitle>{t.neoStudio}</InfoTitle>
              <InfoSub>{t.enableDisable}</InfoSub>
              <InfoDesc>{t.enableDisableDesc}</InfoDesc>
            </InfoHalf>
            <InfoImageWrap>
              <InfoImageRounded src={`${IMG}/NeoStudio_input.jpg`} alt={t.neoStudio} width={400} height={300} />
            </InfoImageWrap>
          </InfoSplitReverse>
        </SectionPad>
      </SectionWhite>
    </>
  );
}
