import styled from "styled-components";

export const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: clamp(360px, 50vw, 580px);
  background-image: url("/images/company/figma/hero-bg.png");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
`;

export const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.45));
  pointer-events: none;
`;

export const HeroTitle = styled.h1`
  position: relative;
  margin: 0;
  font-family: "Pretendard", sans-serif;
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 700;
  letter-spacing: -0.01em;
  text-align: center;
  color: #ffffff;
`;
