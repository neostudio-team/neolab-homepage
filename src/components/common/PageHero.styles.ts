import styled from "styled-components";

export const HeroSection = styled.section<{
  $backgroundImage: string;
  $height: string;
}>`
  position: relative;
  width: 100%;
  height: ${({ $height }) => $height};
  background-image: url("${({ $backgroundImage }) => $backgroundImage}");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
`;

export const HeroOverlay = styled.div<{ $overlayBackground: string }>`
  position: absolute;
  inset: 0;
  background: ${({ $overlayBackground }) => $overlayBackground};
  pointer-events: none;
`;

export const HeroTitle = styled.h1`
  position: relative;
  font-size: clamp(3rem, 6vw, 6rem);
  font-weight: 700;
  text-align: center;
  color: #ffffff;
`;
