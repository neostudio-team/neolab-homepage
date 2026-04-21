import styled from "styled-components";
import { media } from "@/styles/theme";

const accent = "#f8da2f";
const heroBg = "#0a0a0a";
const historyBg = "#111";
const teamBg = "#0f0f1e";
const officeAccent = "#c8a800";
const officeTitleHover = "#b89600";

export const Container = styled.div`
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  width: 100%;
`;

export const HeroSection = styled.section`
  background: ${heroBg};
  min-height: 80vh;
  display: flex;
  align-items: center;
  padding-top: 7rem;
  padding-bottom: 7rem;
`;

export const HeroEyebrow = styled.p`
  color: ${accent};
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
`;

export const HeroTitle = styled.h1`
  font-size: 44px;
  font-weight: 900;
  color: #fff;
  line-height: 1;
  margin-bottom: 2.5rem;

  ${media.sm} {
    font-size: 60px;
  }

  ${media.md} {
    font-size: 80px;
  }

  ${media.lg} {
    font-size: 96px;
  }
`;

export const HeroAccent = styled.span`
  color: ${accent};
`;

export const HeroDivider = styled.div`
  width: 3rem;
  height: 1px;
  background: ${accent};
  margin-bottom: 2.5rem;
`;

export const SectionHistory = styled.section`
  padding: 6rem 0;
  background: ${historyBg};
`;

export const SectionHeader = styled.div`
  margin-bottom: 3.5rem;
`;

export const Eyebrow = styled.p<{ $variant?: "light" | "gold" }>`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
  color: ${({ $variant }) => ($variant === "gold" ? officeAccent : accent)};
`;

export const HistoryHeading = styled.h2`
  font-size: 48px;
  font-weight: 900;
  color: #fff;
  line-height: 1;

  ${media.md} {
    font-size: 64px;
  }
`;

export const SectionTeam = styled.section`
  padding: 6rem 0;
  background: ${teamBg};
`;

export const TeamHeader = styled.div`
  margin-bottom: 3rem;
`;

export const TeamHeading = styled.h2`
  font-size: 24px;
  font-weight: 900;
  color: #fff;
  line-height: 1.25;
  max-width: 580px;

  ${media.md} {
    font-size: 32px;
  }

  ${media.lg} {
    font-size: 40px;
  }
`;

export const BrDesktopOnly = styled.br`
  display: none;

  ${media.md} {
    display: block;
  }
`;

export const TeamGrid = styled.div`
  display: grid;
  gap: 3rem;
  align-items: start;

  ${media.lg} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 4rem;
  }
`;

export const TeamTextCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const TeamLead = styled.p`
  color: #d1d5db;
  font-size: 14px;
  line-height: 2;

  ${media.md} {
    font-size: 16px;
  }
`;

export const TeamMuted = styled.p`
  color: #6b7280;
  font-size: 14px;
  line-height: 2;
`;

export const DeptList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const DeptCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: border 0.2s, background 0.2s;

  &:hover {
    border-color: rgba(248, 218, 47, 0.3);
    background: rgba(255, 255, 255, 0.03);
  }
`;

export const DeptBar = styled.div`
  width: 4px;
  align-self: stretch;
  border-radius: 9999px;
  background: ${accent};
  flex-shrink: 0;
  min-height: 20px;
`;

export const DeptName = styled.p`
  color: #fff;
  font-weight: 600;
  font-size: 14px;
`;

export const DeptDesc = styled.p`
  color: #9ca3af;
  font-size: 14px;
  margin-top: 0.125rem;
  line-height: 1.625;
`;

export const SectionOffice = styled.section`
  padding: 6rem 0;
  background: #fff;
`;

export const OfficeHeader = styled.div`
  margin-bottom: 3.5rem;
`;

export const OfficeHeading = styled.h2`
  font-size: 48px;
  font-weight: 900;
  color: #000;
  line-height: 1;

  ${media.md} {
    font-size: 64px;
  }
`;

export const OfficeGrid = styled.div`
  display: grid;
  gap: 1.5rem;

  ${media.md} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const OfficeCard = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 1rem;
  padding: 2rem;
  transition: border 0.2s, box-shadow 0.2s;

  &:hover {
    border-color: ${accent};
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
  }
`;

export const OfficeSublabel = styled.p`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.25em;
  color: #9ca3af;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
`;

export const OfficeTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 900;
  color: #000;
  margin-bottom: 1.25rem;
  transition: color 0.2s;

  ${OfficeCard}:hover & {
    color: ${officeTitleHover};
  }
`;

export const OfficeDivider = styled.div`
  width: 2rem;
  height: 1px;
  background: ${accent};
  margin-bottom: 1.25rem;
`;

export const OfficeAddress = styled.p`
  color: #6b7280;
  font-size: 14px;
  line-height: 1.85;
  white-space: pre-line;
`;
