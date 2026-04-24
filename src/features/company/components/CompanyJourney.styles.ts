import { colors } from "@/styles/theme";
import styled from "styled-components";

const orange = "#FF9900";

export const PinSpacer = styled.div<{ $steps: number }>`
  position: relative;
  width: 100%;
  height: calc(100vh + ${({ $steps }) => $steps * 60}vh);
  background: #fcfcfc;

  @media (max-width: 1023px) {
    height: auto;
    background: transparent;
  }
`;

export const PinContent = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 0 clamp(20px, 6vw, 140px);
  background: #fcfcfc;

  @media (max-width: 1023px) {
    position: relative;
    top: auto;
    height: auto;
    overflow: visible;
    padding: clamp(80px, 12vw, 160px) clamp(20px, 6vw, 60px);
  }
`;

export const JourneyInner = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 2fr);
  gap: clamp(40px, 6vw, 80px);
  align-items: stretch;

  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
    align-items: start;
  }
`;

export const JourneyHeader = styled.div`
  position: relative;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr auto 1fr;
  row-gap: 16px;

  @media (max-width: 1023px) {
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 32px;
  }
`;

export const JourneyTitle = styled.h2`
  position: relative;
  margin: 0;
  grid-row: 1;
  align-self: end;
  font-size: clamp(2rem, 4.5vw, 5rem);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.01em;

  &::before {
    content: "";
    position: absolute;
    top: clamp(-30px, -2.5vw, -16px);
    left: clamp(-30px, -2.5vw, -16px);
    width: clamp(20px, 2.5vw, 40px);
    height: clamp(20px, 2.5vw, 40px);
    border-radius: 999px;
    border: clamp(5px, 0.6vw, 10px) solid ${colors.primary};
  }

  @media (max-width: 1023px) {
    align-self: auto;
  }
`;

export const JourneyYear = styled.div`
  font-size: clamp(4rem, 10vw, 12.5rem);
  font-weight: 700;
  color: ${colors.primary};
  line-height: 1;
  grid-row: 2;
  align-self: center;
  transition: opacity 0.3s ease;

  span {
    color: #b5b5b5;
  }
`;

export const JourneyViewport = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;

  @media (max-width: 1023px) {
    height: auto;
    overflow: visible;
  }

  /* fade masks at top/bottom for smooth visual */
  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    height: 30%;
    pointer-events: none;
    z-index: 1;
  }

  &::before {
    top: 0;
    background: linear-gradient(to bottom, #fcfcfc, rgba(252, 252, 252, 0));
  }

  &::after {
    bottom: 0;
    background: linear-gradient(to top, #fcfcfc, rgba(252, 252, 252, 0));
  }

  @media (max-width: 1023px) {
    &::before,
    &::after {
      display: none;
    }
  }
`;

export const JourneyList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  will-change: transform;
  transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);

  @media (max-width: 1023px) {
    transform: none !important;
    transition: none;
    gap: 24px;
  }
`;

export const JourneyEventItem = styled.li<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  height: clamp(80px, 12vh, 136px);
  padding: 0 16px;
  font-size: ${({ $active }) =>
    $active
      ? "clamp(1.25rem, 2.4vw, 2.5rem)"
      : "clamp(1rem, 1.5vw, 1.75rem)"};
  font-weight: ${({ $active }) => ($active ? 700 : 600)};
  opacity: ${({ $active }) => ($active ? 1 : 0.25)};
  transition:
    opacity 0.4s ease,
    font-size 0.4s ease,
    font-weight 0.4s ease;

  &::before {
    content: "•";
    flex-shrink: 0;
    margin-right: 16px;
  }

  @media (max-width: 1023px) {
    height: auto;
    padding: 0;
    opacity: 1;
    font-size: clamp(0.95rem, 1.4vw, 1.25rem);
    font-weight: 600;
  }
`;

export const JourneyYearTag = styled.span`
  display: none;

  @media (max-width: 1023px) {
    display: inline-block;
    margin-right: 12px;
    color: ${orange};
    font-weight: 700;
  }
`;
