import styled from "styled-components";
import Image from "next/image";
import { media } from "@/styles/theme";

export const Section = styled.section`
  padding-top: 0;
  padding-bottom: 0;
  background: #fff;
`;

export const Inner = styled.div`
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;
  padding: 54px 1rem;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;

  ${media.lg} {
    flex-direction: row;
  }
`;

export const TextCol = styled.div`
  width: 100%;

  ${media.lg} {
    width: 37%;
  }
`;

export const ImageCol = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.lg} {
    width: 58%;
  }
`;

export const Category = styled.p`
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: #9ca3af;
  margin-bottom: 0.75rem;
`;

export const Title = styled.h2`
  font-size: 22px;
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;
  line-height: 1.375;
`;

export const Desc = styled.p`
  color: #666;
  font-size: 14px;
  line-height: 2;
`;

export const FutureImage = styled(Image)`
  width: 100%;
  height: auto;
`;
