import Image from "next/image";
import styled from "styled-components";

export const CardRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }
`;

export const CardFigure = styled.figure`
  position: relative;
  margin: 0;
  width: 100%;
  aspect-ratio: 520 / 549;
  overflow: hidden;
`;

export const CardImage = styled(Image)`
  object-fit: cover;
  object-position: center;
`;
