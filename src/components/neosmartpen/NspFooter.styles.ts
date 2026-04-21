import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { media } from "@/styles/theme";

const link = "#666666";
const accent = "#39d2cc";

export const FooterRoot = styled.footer`
  background: #fff;
  border-top: 1px solid #e5e7eb;
`;

export const Inner = styled.div`
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;
  padding: 3rem 1rem;
`;

export const TopGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  ${media.md} {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

export const FooterLogo = styled(Image)``;

export const ColTitle = styled.h4`
  font-weight: 700;
  color: #000;
  font-size: 14px;
  margin-bottom: 1rem;
`;

export const LinkStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const FooterLink = styled(Link)`
  display: block;
  font-size: 13px;
  color: ${link};
  transition: color 0.15s;

  &:hover {
    color: ${accent};
  }
`;

export const FooterMuted = styled.span`
  display: block;
  font-size: 13px;
  color: ${link};
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
  color: #fff;
  transition: background 0.15s;

  &:hover {
    background: ${accent};
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: ${link};
  gap: 0.5rem;

  ${media.md} {
    flex-direction: row;
  }
`;
