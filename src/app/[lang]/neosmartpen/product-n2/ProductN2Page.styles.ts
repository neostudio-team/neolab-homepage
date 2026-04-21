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
  background-color: #fff;
  background-image: url(${({ $bg }) => $bg});
  background-size: cover;
  background-position: center;
  padding: 54px 0;
`;

export const RowLg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.lg} {
    flex-direction: row;
  }
`;

export const Half = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.lg} {
    width: 50%;
  }
`;

export const HalfCenter = styled(Half)`
  justify-content: center;
`;

export const HeroLogo = styled(Image)`
  margin-bottom: 1.5rem;
`;

export const HeroLineLight = styled.h1`
  font-size: 32px;
  font-weight: 300;
  color: #333;
  line-height: 1.25;
  text-align: center;

  ${media.lg} {
    font-size: 40px;
  }
`;

export const HeroLineBold = styled(HeroLineLight)`
  font-weight: 600;
`;

export const HeroProductImg = styled(Image)`
  object-fit: contain;
`;

export const SectionBlack = styled.section`
  background: #000;
  min-height: 489px;
`;

export const SectionBlackInner = styled.div`
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 489px;

  ${media.lg} {
    flex-direction: row;
  }
`;

export const BlackHalf = styled.div`
  width: 100%;
  padding: 2rem 0;

  ${media.lg} {
    width: 50%;
  }
`;

export const BlackHalfText = styled(BlackHalf)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  ${media.lg} {
    padding: 2rem;
  }
`;

export const FirstClassImg = styled(Image)`
  width: 100%;
  object-fit: cover;
`;

export const IconsImg = styled(Image)`
  margin-bottom: 2rem;
  object-fit: contain;
`;

export const FirstClassHeading = styled.h1`
  font-size: 26px;
  color: #d3d3d3;
  font-weight: 500;
  text-align: center;
  line-height: 1.375;
  margin-bottom: 1rem;
`;

export const FirstClassSub = styled.h2`
  font-size: 18px;
  color: #999;
  text-align: center;
  line-height: 1.625;
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

export const SectionProductStrip = styled.section<{ $bg: string }>`
  background-image: url(${({ $bg }) => $bg});
  background-size: cover;
  background-position: center;
  min-height: 900px;
`;

export const ProductStripInner = styled.div`
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;
  padding: 4rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;

export const StripImg = styled(Image)`
  object-fit: contain;
`;

export const SectionWhite = styled.section`
  background: #fff;
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

export const SectionWarm = styled.section`
  background: #fdfaf8;
  padding: 4rem 0;
`;

export const DimImgWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DimImg = styled(Image)`
  width: 100%;
  max-width: 841px;
  object-fit: contain;
`;

export const SectionWhitePadded = styled(SectionWhite)`
  padding: 4rem 0;
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
