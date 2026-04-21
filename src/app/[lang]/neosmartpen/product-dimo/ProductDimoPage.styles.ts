import styled from "styled-components";
import Image from "next/image";
import { media } from "@/styles/theme";

const teal = "#39d2cc";

export const Container = styled.div`
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const SectionHero = styled.section<{ $bg: string }>`
  background-color: #ebe7e5;
  background-image: url(${({ $bg }) => $bg});
  background-size: cover;
  background-position: center;
`;

export const HeroTop = styled.div`
  padding-top: 4rem;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const HeroBottom = styled.div`
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const HeroLogo = styled(Image)`
  margin-bottom: 1.5rem;
  object-fit: contain;
`;

export const HeroH1Light = styled.h1`
  font-size: 32px;
  font-weight: 300;
  color: #333;
  line-height: 1.25;
  margin-bottom: 1rem;

  ${media.lg} {
    font-size: 40px;
  }
`;

export const HeroH1Spaced = styled(HeroH1Light)`
  margin-bottom: 2rem;
`;

export const HeroH2Muted = styled.h2`
  font-size: 22px;
  font-weight: 300;
  color: #555;
  line-height: 1.375;
  margin-bottom: 0.5rem;

  ${media.lg} {
    font-size: 28px;
  }
`;

export const HeroH2Spaced = styled(HeroH2Muted)`
  margin-bottom: 1.5rem;
`;

export const HeroH2Strong = styled.h2`
  font-size: 26px;
  font-weight: 500;
  color: #333;
  line-height: 1.375;
  margin-bottom: 0.5rem;

  ${media.lg} {
    font-size: 34px;
  }
`;

export const HeroH2StrongSpaced = styled(HeroH2Strong)`
  margin-bottom: 2rem;
`;

export const IconsImg = styled(Image)`
  object-fit: contain;
`;

export const SectionDigitalTwin = styled.section<{ $bg: string }>`
  background-image: url(${({ $bg }) => $bg});
  background-size: cover;
  background-position: center;
  min-height: 925px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DigitalTwinInner = styled.div`
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;
  padding: 6rem 1rem;
  text-align: center;
`;

export const DigitalTwinH1 = styled.h1`
  font-size: 36px;
  font-weight: 500;
  color: #cecece;
  line-height: 1.25;
  margin-bottom: 3rem;

  ${media.lg} {
    font-size: 55px;
  }
`;

export const DigitalTwinH2 = styled.h2`
  font-size: 18px;
  font-weight: 500;
  color: #f7f7f7;
  line-height: 1.625;

  ${media.lg} {
    font-size: 25px;
  }
`;

export const SectionWhite = styled.section`
  background: #fff;
  padding: 3rem 0;
`;

export const CtaRow = styled.div`
  display: flex;
  justify-content: center;
`;

export const CtaButton = styled.a`
  display: inline-block;
  border: 1px solid #333;
  color: #333;
  font-size: 14px;
  padding: 0.75rem 2rem;
  transition: background 0.15s, color 0.15s;

  &:hover {
    background: #333;
    color: #fff;
  }
`;

export const SectionGrayGallery = styled.section`
  background: #e8e8e8;
  padding: 4rem 0;
`;

export const GalleryStack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const GalleryImg = styled(Image)`
  width: 100%;
  object-fit: contain;
`;

export const SectionSpecsGray = styled.section`
  background: #ddd;
  padding: 3rem 0;
`;

export const SpecsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  ${media.md} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const SpecCell = styled.div`
  text-align: center;
`;

export const SpecImg = styled(Image)`
  margin-left: auto;
  margin-right: auto;
  object-fit: contain;
  margin-bottom: 1rem;
`;

export const SpecTitle = styled.h4`
  font-size: 18px;
  font-weight: 700;
  color: #333;
  margin-bottom: 0.5rem;
`;

export const SpecDesc = styled.p`
  font-size: 13px;
  color: #666;
  line-height: 1.625;
`;

export const SectionComposition = styled.section`
  background: #fff;
  padding: 4rem 0;
`;

export const RowLg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

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

export const CompImg = styled(Image)`
  width: 100%;
  object-fit: contain;
`;

export const CompText = styled.h3`
  font-size: 16px;
  color: #666;
  line-height: 2;
  white-space: pre-line;
`;

export const SectionDimWarm = styled.section`
  background: #f8f4e8;
  padding: 3rem 0;
`;

export const DimImgWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const DimImg = styled(Image)`
  width: 100%;
  max-width: 1000px;
  object-fit: contain;
`;

export const Spacer80 = styled.div`
  height: 80px;
  background: #fff;
`;

export const UseCaseGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  ${media.md} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const UseCaseImg = styled(Image)`
  width: 100%;
  object-fit: cover;
  margin-bottom: 1rem;
`;

export const UseCaseTag = styled.p`
  font-size: 12px;
  color: ${teal};
  margin-bottom: 0.25rem;
`;

export const UseCaseTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: #333;
  margin-bottom: 0.5rem;
`;

export const UseCaseDesc = styled.p`
  font-size: 13px;
  color: #666;
  line-height: 1.625;
`;

export const UseCaseDescSpaced = styled(UseCaseDesc)`
  margin-bottom: 1.5rem;
`;
