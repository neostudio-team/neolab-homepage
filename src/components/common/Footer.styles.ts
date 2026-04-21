import styled from "styled-components";
import Link from "next/link";
import { colors, media } from "@/styles/theme";

export const FooterRoot = styled.footer`
  background: #ffffff;
  border-top: 1px solid #e5e7eb;
`;

export const Inner = styled.div`
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
  padding: 3rem 1rem;
`;

export const TopGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  ${media.md} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const Col = styled.div``;

export const FollowTitle = styled.h3`
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
`;

export const SocialRow = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
`;

export const SocialLink = styled(Link)`
  width: 2.5rem;
  height: 2.5rem;
  background: #111827;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  transition: background-color 0.2s;

  &:hover {
    background: ${colors.primary};
  }
`;

export const SocialIcon = styled.svg`
  width: 1rem;
  height: 1rem;
`;

export const BottomBar = styled.div`
  margin-top: 2.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e5e7eb;
`;

export const BottomRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;

  ${media.md} {
    flex-direction: row;
    align-items: center;
  }
`;

export const AddressText = styled.p`
  font-size: 14px;
  color: #6b7280;
`;

export const LegalRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 14px;
`;

export const LegalLink = styled(Link)`
  color: #6b7280;
  transition: color 0.15s;

  &:hover {
    color: #1f2937;
    text-decoration: underline;
  }
`;

export const Divider = styled.span`
  color: #d1d5db;
`;

export const CopyrightText = styled.p`
  color: #6b7280;
`;
