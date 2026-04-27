import { colors, media } from "@/styles/theme";
import styled from "styled-components";

export const OfficeGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  ${media.lg} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const OfficeCard = styled.article`
  background: #ffffff;
  border: 1px solid #ddd;
  border-radius: 16px;
  padding: clamp(24px, 2vw, 32px);
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const OfficeCardHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const OfficeBadge = styled.span`
  font-size: clamp(1rem, 1.2vw, 1.25rem);
  color: ${colors.primary};
`;

export const OfficeName = styled.h3`
  font-size: clamp(1.5rem, 1.6vw, 1.75rem);
  font-weight: 700;
`;

export const OfficeAddress = styled.p`
  font-size: clamp(1rem, 1vw, 1.25rem);
  white-space: pre-line;
  text-align: center;
`;

export const OfficeMapLink = styled.a`
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1.25rem;
  text-decoration: none;
  text-align: center;
  transition:
    background-color 0.15s ease,
    border-color 0.15s ease;
  &:hover {
    background: #f6f6f6;
    border-color: #bbb;
  }
`;
