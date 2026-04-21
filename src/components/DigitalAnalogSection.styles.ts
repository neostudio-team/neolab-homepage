import styled from "styled-components";
import { media } from "@/styles/theme";

export const Section = styled.section`
  padding-top: 54px;
  padding-bottom: 0;
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
  color: #000;
  margin-bottom: 3rem;
`;

export const Grid = styled.div`
  display: grid;
  gap: 3rem;
  grid-template-columns: 1fr;

  ${media.md} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const ColRight = styled.div`
  text-align: right;
`;

export const ColLeft = styled.div`
  text-align: left;
`;

export const Subtitle = styled.h3`
  font-size: 22px;
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;
`;

export const Desc = styled.p`
  color: #666;
  font-size: 14px;
  line-height: 2;
`;
