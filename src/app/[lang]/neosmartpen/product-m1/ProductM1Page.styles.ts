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

export const SectionHeroWarm = styled.section`
  background: #ebe7e5;
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
  padding-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const HeroLogo = styled(Image)`
  margin-bottom: 1.5rem;
  object-fit: contain;
`;

export const HeroSubtitle = styled.h1`
  font-size: 32px;
  font-weight: 300;
  color: #333;
  line-height: 1.25;
  margin-bottom: 2rem;

  ${media.lg} {
    font-size: 40px;
  }
`;

export const HeroStatusImg = styled(Image)`
  margin-bottom: 2rem;
  object-fit: contain;
  max-height: 300px;
`;

export const HeroH1Muted = styled.h1`
  font-size: 22px;
  font-weight: 300;
  color: #555;
  line-height: 1.375;
  margin-bottom: 0.5rem;

  ${media.lg} {
    font-size: 28px;
  }
`;

export const HeroH1MutedSpaced = styled(HeroH1Muted)`
  margin-bottom: 1.5rem;
`;

export const HeroH1Strong = styled.h1`
  font-size: 26px;
  font-weight: 500;
  color: #333;
  line-height: 1.375;
  margin-bottom: 0.5rem;

  ${media.lg} {
    font-size: 34px;
  }
`;

export const HeroH1StrongSpaced = styled(HeroH1Strong)`
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

export const DividerSection = styled.section`
  background: #fff;
`;

export const DividerImage = styled(Image)`
  width: 100%;
  object-fit: cover;
  max-height: 600px;
`;

export const SectionSpecs = styled.section`
  background: #fff;
  padding: 3rem 0;
  min-height: 334px;
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
  width: 100%;
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

export const CompList = styled.h3`
  font-size: 16px;
  color: #333;
  line-height: 2;
`;

export const SectionDimWarm = styled.section`
  background: #fdfaf8;
  padding: 3rem 0;
`;

export const DimImgWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const DimImg = styled(Image)`
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
