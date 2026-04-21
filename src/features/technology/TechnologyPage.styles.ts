import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { colors, media } from "@/styles/theme";

export const Container = styled.div`
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const HeroContainer = styled(Container)`
  text-align: center;
`;

export const ShopWrap = styled.div`
  text-align: center;
  margin-top: 2rem;
`;

export const PatentsContainer = styled(Container)`
  text-align: center;
`;

export const HeroSection = styled.section`
  padding-top: 4rem;
  padding-bottom: 4rem;
  background: ${colors.dark};
  color: #fff;
`;

export const HeroLabel = styled.p`
  color: ${colors.primary};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 14px;
  margin-bottom: 1rem;
`;

export const HeroTitle = styled.h1`
  font-size: 40px;
  font-weight: 900;
  margin-bottom: 1.5rem;
`;

export const HeroDesc = styled.p`
  color: #d1d5db;
  font-size: 14px;
  line-height: 2;
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
`;

export const SectionWhite = styled.section`
  padding: 54px 0;
  background: #fff;
`;

export const SectionGray = styled.section`
  padding: 54px 0;
  background: #f1f1f1;
`;

export const SectionDark = styled.section`
  padding: 4rem 0;
  background: ${colors.dark};
  color: #fff;
`;

export const TwoCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;

  ${media.lg} {
    flex-direction: row;
  }
`;

export const Col37 = styled.div`
  width: 100%;

  ${media.lg} {
    width: 37%;
  }
`;

export const Col58 = styled.div`
  width: 100%;

  ${media.lg} {
    width: 58%;
  }
`;

export const Col50 = styled.div`
  width: 100%;

  ${media.lg} {
    width: 50%;
  }
`;

export const Col58FlexCenter = styled(Col58)`
  display: flex;
  justify-content: center;
`;

export const Col50FlexCenter = styled(Col50)`
  display: flex;
  justify-content: center;
`;

export const SectionTitle = styled.h2`
  font-size: 30px;
  font-weight: 500;
  color: #000;
  margin-bottom: 1.5rem;
`;

export const SectionTitleSm = styled.h2`
  font-size: 22px;
  font-weight: 700;
  color: #000;
  margin-bottom: 1rem;
`;

export const Body = styled.p`
  color: #666;
  font-size: 14px;
  line-height: 2;
  margin-bottom: 1rem;
`;

export const BodyNoMargin = styled(Body)`
  margin-bottom: 0;
`;

export const HardwareIntroBody = styled(Body)`
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
`;

export const SubTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #000;
  margin-bottom: 0.75rem;
  margin-top: 2rem;
`;

export const PatternImage = styled(Image)`
  width: 100%;
  max-width: 28rem;
  height: auto;
`;

export const FeatureRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

export const FeatureIcon = styled(Image)`
  flex-shrink: 0;
`;

export const FeatureTitle = styled.h3`
  font-weight: 700;
  color: #000;
  margin-bottom: 0.5rem;
`;

export const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ImageStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FullImage = styled(Image)`
  width: 100%;
  height: auto;
`;

export const CenterIntro = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

export const HardwareGrid = styled.div`
  display: grid;
  gap: 2rem;
  margin-bottom: 3rem;
  grid-template-columns: 1fr;

  ${media.md} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const HardwareCard = styled.div`
  text-align: center;
`;

export const IconWrap = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
`;

export const HwIcon = styled(Image)``;

export const HwTitle = styled.h3`
  font-weight: 700;
  color: #000;
  margin-bottom: 0.5rem;
`;

export const HwDesc = styled.p`
  color: #666;
  font-size: 14px;
`;

export const WideImage = styled(Image)`
  width: 100%;
  max-width: 42rem;
  height: auto;
`;

export const CenterWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const ShopLink = styled(Link)`
  display: inline-block;
  background: ${colors.primary};
  color: #fff;
  padding: 0.75rem 2rem;
  border-radius: 0.25rem;
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: background 0.15s;

  &:hover {
    background: ${colors.primaryDark};
  }
`;

export const PatentsTitle = styled.h2`
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 1.5rem;
`;

export const PatentsDesc = styled.p`
  color: #d1d5db;
  font-size: 14px;
  line-height: 2;
`;

export const AppFieldsTitle = styled.h2`
  font-size: 30px;
  font-weight: 500;
  color: #000;
  margin-bottom: 1rem;
`;

export const AppGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;

  ${media.md} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const AppCard = styled.div`
  background: #f1f1f1;
  border-radius: 0.5rem;
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const AppIcon = styled(Image)`
  flex-shrink: 0;
`;

export const AppCardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #000;
`;

export const AppCardDesc = styled.p`
  color: #666;
  font-size: 14px;
  margin-top: 0.5rem;
`;

export const DevSection = styled.section`
  padding: 4rem 0;
  background: ${colors.dark};
  color: #fff;
  text-align: center;
`;

export const DevTitle = styled.h2`
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 1rem;
`;

export const DevDesc = styled.p`
  color: #d1d5db;
  font-size: 14px;
  margin-bottom: 2rem;
`;

export const GithubLink = styled(Link)`
  display: inline-block;
  background: ${colors.teal};
  color: #fff;
  padding: 0.75rem 2rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 14px;
  font-weight: 600;
  transition: opacity 0.15s;

  &:hover {
    opacity: 0.9;
  }
`;
