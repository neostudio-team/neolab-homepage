import styled from "styled-components";
import { media } from "@/styles/theme";

export const HeroSection = styled.section`
  padding: 5rem 0;
  background: #1a1a2e;
  color: #fff;
  text-align: center;
`;

export const Container = styled.div`
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const HeroTitle = styled.h1`
  font-size: 40px;
  font-weight: 900;
  margin-bottom: 1rem;
`;

export const HeroSubtitle = styled.p`
  font-size: 18px;
  color: #d1d5db;
`;

export const CategoriesSection = styled.section`
  padding: 4rem 0;
  background: #fff;
`;

export const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  ${media.sm} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  ${media.lg} {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

export const CategoryCard = styled.div`
  background: #f5f5f5;
  border-radius: 0.75rem;
  padding: 2rem;
  text-align: center;
  transition: box-shadow 0.15s;
  cursor: pointer;

  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
  }
`;

export const CategoryIcon = styled.div`
  font-size: 2.25rem;
  margin-bottom: 1rem;
`;

export const CategoryTitle = styled.h3`
  font-weight: 700;
  color: #000;
`;
