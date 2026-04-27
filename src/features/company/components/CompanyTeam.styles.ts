
import styled from "styled-components";
import { media } from "@/styles/theme";

const orange = "#FF9900";

export const TeamHeading = styled.h2`
  font-size: clamp(1.75rem, 4vw, 4rem);
  font-weight: 700;
  line-height: 1.2;
  text-align: center;
  white-space: pre-line;
`;

export const TeamDescription = styled.p`
  font-size: clamp(0.95rem, 1.5vw, 1.5rem);
  text-align: center;
  margin-top: 48px;
`;

export const OrgChart = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1.05;
  margin-top: clamp(40px, 4vw, 80px);

  ${media.md} {
    aspect-ratio: 1640 / 800;
  }
`;

/* Concentric center circles */
export const OrgRing = styled.div<{ $diameter: number; $alpha: number }>`
  position: absolute;
  top: 53.9%;
  left: 50.5%;
  width: ${({ $diameter }) => $diameter}%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: rgba(255, 153, 0, ${({ $alpha }) => $alpha});
  transform: translate(-50%, -50%);
  pointer-events: none;
`;

export const OrgCenter = styled.div`
  position: absolute;
  top: 53.9%;
  left: 50.5%;
  width: 20.1%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: ${orange};
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-family: "BM Dohyeon", "Pretendard", sans-serif;
  font-weight: 400;
  font-size: clamp(1.25rem, 3.05vw, 3.125rem);
  line-height: 1.2;
  text-align: center;
  white-space: pre-line;
`;

export const OrgNode = styled.div<{ $top: string; $left: string }>`
  position: absolute;
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  width: clamp(120px, 15.2vw, 250px);
  aspect-ratio: 1;
  border-radius: 999px;
  background: #ffffff;
  border: 2px solid ${orange};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 16px;
  text-align: center;
  transform: translate(-50%, -50%);
  transition: background-color 0.25s ease, border-color 0.25s ease;
  outline: none;

  img {
    width: clamp(32px, 3.7vw, 60px);
    height: clamp(32px, 3.7vw, 60px);
    object-fit: contain;
  }

  .nodeDefault,
  .nodeHover {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: clamp(6px, 0.8vw, 12px);
    transition: opacity 0.25s ease;
  }

  .nodeDefault {
    opacity: 1;
  }

  .nodeHover {
    position: absolute;
    inset: 0;
    opacity: 0;
    padding: clamp(12px, 1.3vw, 16px);
  }

  .nodeHover strong {
    font-size: clamp(1rem, 1.7vw, 1.5rem);
    font-weight: 600;
  }

  .nodeHover span {
    font-size: clamp(0.75rem, 0.95vw, 1rem);
  }

  &:hover,
  &:focus-visible {
    background: #FFCE84;
    border-color: #FFCE84;
  }

  &:hover .nodeDefault,
  &:focus-visible .nodeDefault {
    opacity: 0;
  }

  &:hover .nodeHover,
  &:focus-visible .nodeHover {
    opacity: 1;
  }
`;

export const OrgNodeLabel = styled.span`
  font-size: clamp(0.875rem, 1.22vw, 1.25rem);
  font-weight: 600;
`;
