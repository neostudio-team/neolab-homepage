import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { media } from "@/styles/theme";

const c = {
  text: "#333",
  textMuted: "#666",
  textDark: "#222",
  textBody: "#444",
  border: "#333",
  grayBorder: "#d1d5db",
  teal: "#39d2cc",
};

export const Container = styled.div`
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const KoHeroSection = styled.section`
  background: #f0f0f0;
  min-height: 500px;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

export const KoHeroInner = styled.div`
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 0;

  ${media.lg} {
    flex-direction: row;
  }
`;

export const KoHeroTextCol = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  ${media.lg} {
    width: 50%;
  }
`;

export const KoHeroTitle = styled.h1`
  font-size: 40px;
  font-weight: 700;
  color: ${c.textDark};
  line-height: 1.25;

  ${media.lg} {
    font-size: 54px;
  }
`;

export const KoHeroSubtitle = styled.p`
  font-size: 18px;
  color: ${c.textBody};

  ${media.lg} {
    font-size: 20px;
  }
`;

export const KoHeroCta = styled.a`
  display: inline-block;
  border: 1px solid ${c.border};
  color: ${c.border};
  background: #fff;
  padding: 0.75rem 2rem;
  font-size: 14px;
  font-weight: 500;
  width: fit-content;
  transition: background 0.15s, color 0.15s;

  &:hover {
    background: ${c.border};
    color: #fff;
  }
`;

export const KoHeroImageCol = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  align-self: stretch;
  padding-top: 2rem;

  ${media.lg} {
    width: 50%;
    padding-top: 0;
  }
`;

export const KoHeroImage = styled(Image)`
  width: 100%;
  max-width: 460px;
  object-fit: contain;
  align-self: flex-end;

  ${media.lg} {
    max-width: 520px;
  }
`;

export const FallbackHeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 600px;
  background-color: #f3f1ec;
  overflow: hidden;
`;

export const FallbackHeroLink = styled(Link)`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
`;

export const FallbackHeroImage = styled(Image)`
  object-fit: contain;
`;

export const JaProductsSection = styled.section`
  background: #fff;
  padding: 3rem 0;
`;

export const Grid4 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;

  ${media.md} {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

export const JaProductCard = styled(Link)`
  text-align: center;
  color: inherit;
  text-decoration: none;
`;

export const JaProductThumb = styled.div`
  margin-bottom: 1rem;
  overflow: hidden;
`;

export const JaProductImg = styled(Image)`
  width: 100%;
  object-fit: contain;
  transition: transform 0.2s;

  ${JaProductCard}:hover & {
    transform: scale(1.05);
  }
`;

export const JaProductTitle = styled.h4`
  font-size: 14px;
  font-weight: 700;
  color: ${c.text};
  margin-bottom: 0.25rem;
`;

export const JaProductDesc = styled.p`
  font-size: 12px;
  color: ${c.textMuted};
`;

export const SectionDigital = styled.section`
  background: #fff;
  padding-top: 54px;
  padding-bottom: 11px;
`;

export const RowLg = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  ${media.lg} {
    flex-direction: row;
  }
`;

export const Half = styled.div`
  width: 100%;

  ${media.lg} {
    width: 50%;
  }
`;

export const HalfCenter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  ${media.lg} {
    width: 50%;
  }
`;

export const Heading26 = styled.h2`
  font-size: 26px;
  font-weight: 500;
  color: ${c.text};
  margin-bottom: 1.5rem;
`;

export const BenefitImg = styled(Image)`
  width: 100%;
  max-width: 400px;
`;

export const FullWidthImg = styled(Image)`
  width: 100%;
`;

export const SectionHighlightTitleOnly = styled.section`
  background: #fff;
  padding-top: 7px;
  padding-bottom: 0;
`;

export const HighlightTitle = styled.h1`
  font-size: 26px;
  font-weight: 500;
  color: ${c.text};
`;

export const SectionFeatureGrid = styled.section`
  background: #fff;
  padding-top: 8px;
  padding-bottom: 14px;
`;

export const RowGapSm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${media.lg} {
    flex-direction: row;
  }
`;

export const FeatureGrid2 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
`;

export const SectionUtilize = styled.section`
  background: #fff;
  padding-top: 22px;
  padding-bottom: 0;
`;

export const UtilizeRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  ${media.lg} {
    flex-direction: row;
  }
`;

export const UtilizeSideCol = styled.div`
  width: 100%;
  flex-shrink: 0;

  ${media.lg} {
    width: 225px;
  }
`;

export const UtilizeLine1 = styled.h2`
  font-size: 23px;
  font-weight: 500;
  color: ${c.text};
  margin: 0 0 0.5rem;
`;

export const UtilizeLine2 = styled.h2`
  font-size: 23px;
  font-weight: 500;
  color: ${c.text};
`;

export const UtilizeCenterCol = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const UtilizeLayersImg = styled(Image)`
  width: 100%;
  max-width: 510px;
`;

export const ChevronIcon = styled.svg`
  width: 12px;
  height: 12px;
  transition: transform 0.2s;
  flex-shrink: 0;
`;

export const UtilizeDetails = styled.details`
  &[open] ${ChevronIcon} {
    transform: rotate(180deg);
  }
`;

export const UtilizeSummary = styled.summary`
  cursor: pointer;
  padding: 0.75rem 0;
  font-size: 14px;
  font-weight: 600;
  color: ${c.text};
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;

  &::-webkit-details-marker {
    display: none;
  }
`;

export const UtilizeSummaryTitle = styled.h3`
  font-size: 14px;
  font-weight: 600;
`;

export const UtilizeBody = styled.p`
  font-size: 13px;
  color: ${c.textMuted};
  padding-bottom: 1rem;
  line-height: 1.625;
`;

export const UtilizeBodyBlock = styled.div`
  font-size: 13px;
  color: ${c.textMuted};
  padding-bottom: 1rem;
  line-height: 1.625;
`;

export const BorderTop = styled.div`
  border-top: 1px solid ${c.grayBorder};
`;

export const BorderTopBottom = styled.div`
  border-top: 1px solid ${c.grayBorder};
  border-bottom: 1px solid ${c.grayBorder};
`;

export const GridaLink = styled(Link)`
  display: block;
  margin-top: 0.5rem;
  color: ${c.text};
  transition: color 0.15s;

  &:hover {
    color: ${c.teal};
  }
`;

export const SectionEasy = styled.section`
  background: #fff;
  padding-top: 20px;
  padding-bottom: 12px;
`;

export const RowLgCenter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;

  ${media.lg} {
    flex-direction: row;
  }
`;

export const EasyMediaCol = styled.div`
  width: 100%;

  ${media.lg} {
    width: 65%;
  }
`;

export const EasyTextCol = styled.div`
  width: 100%;

  ${media.lg} {
    width: 35%;
  }
`;

export const Heading23 = styled.h2`
  font-size: 23px;
  font-weight: 500;
  color: ${c.text};
  margin-bottom: 1rem;
`;

export const BodyText = styled.p`
  font-size: 14px;
  color: ${c.textMuted};
  line-height: 1.625;
  margin-bottom: 0.75rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const SectionNotebooksHeading = styled.section`
  background: #fff;
  padding-top: 16px;
  padding-bottom: 0;
`;

export const Heading26Center = styled.h2`
  font-size: 26px;
  font-weight: 500;
  color: ${c.text};
  text-align: center;
`;

export const SectionNotebooksBody = styled.section`
  background: #fff;
  padding-top: 6px;
  padding-bottom: 54px;
`;

export const RowLgStart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-start;

  ${media.lg} {
    flex-direction: row;
  }
`;

export const TwoThirds = styled.div`
  width: 100%;

  ${media.lg} {
    width: 66.666%;
  }
`;

export const OneThirdCenter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  ${media.lg} {
    width: 33.333%;
  }
`;

export const NotebooksPara = styled.p`
  font-size: 14px;
  color: ${c.textMuted};
  line-height: 1.625;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const SectionNews = styled.section`
  background: #fff;
  padding-top: 20px;
  padding-bottom: 30px;
`;

export const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  ${media.md} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const NewsCard = styled.a`
  color: inherit;
  text-decoration: none;
`;

export const NewsImage = styled(Image)`
  width: 100%;
  object-fit: cover;
  margin-bottom: 0.75rem;
`;

export const NewsTitle = styled.h2`
  font-size: 16px;
  font-weight: 700;
  color: ${c.text};
  line-height: 1.375;
  transition: color 0.15s;

  ${NewsCard}:hover & {
    color: ${c.teal};
  }
`;

export const GallerySection = styled.section<{ $paddingTop: number; $paddingBottom: number }>`
  background: #fff;
  padding-top: ${({ $paddingTop }) => $paddingTop}px;
  padding-bottom: ${({ $paddingBottom }) => $paddingBottom}px;
`;

export const NotebookGalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;

  ${media.md} {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
`;

export const NotebookThumb = styled(Image)`
  width: 100%;
`;
