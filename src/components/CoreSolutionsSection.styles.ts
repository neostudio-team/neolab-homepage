import styled from "styled-components";
import Image from "next/image";
import { media } from "@/styles/theme";

export const Section = styled.section`
  padding-top: 54px;
  padding-bottom: 54px;
  background: #fff;
`;

export const Inner = styled.div`
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 500;
  text-align: center;
  color: #333;
  margin-bottom: 3rem;
`;

export const Grid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;

  ${media.sm} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  ${media.lg} {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

export const Card = styled.div`
  text-align: left;
`;

export const IconWrap = styled.div`
  margin-bottom: 1rem;
`;

export const SolutionIcon = styled(Image)``;

export const CardTitle = styled.h4`
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #333;
  margin-bottom: 1rem;
`;

export const CardDesc = styled.p`
  color: #666;
  font-size: 14px;
  line-height: 2;
`;
