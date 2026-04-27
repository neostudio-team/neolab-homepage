import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { media } from "@/styles/theme";

export const FooterRoot = styled.footer`
  background: #f4f4f4;
  padding: 40px 0 24px;
`;

export const FooterInner = styled.div`
  margin: 0 auto;
  max-width: 1920px;
  padding: 0 1rem 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  ${media.md} {
    padding: 0 2.5rem 24px;
  }

  ${media.lg} {
    padding: 0 clamp(40px, 8.3vw, 160px) 24px;
  }
`;

export const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

export const BrandRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  ${media.md} {
    gap: 48px;
  }
`;

export const LogoImage = styled(Image)`
  width: auto;
  height: 50px;
  object-fit: contain;
`;

export const AddressText = styled.p`
  margin: 0;
  color: #111111;
  font-family: "Noto Sans", sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.6;
  white-space: pre-line;

  ${media.md} {
    font-size: 15px;
  }

  ${media.lg} {
    font-size: 16px;
  }
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid #dddddd;
  margin: 0;
`;

export const BottomRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 16px 0;
  flex-wrap: wrap;
`;

export const CopyrightText = styled.p`
  margin: 0;
  color: #757575;
  font-family: "Noto Sans", sans-serif;
  font-size: 14px;

  ${media.md} {
    font-size: 16px;
  }
`;

export const BottomRight = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
`;

export const SocialRow = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const SocialLink = styled(Link)`
  width: 18px;
  height: 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #757575;
  transition: color 0.15s;

  &:hover {
    color: #111;
  }
`;

export const SocialIcon = styled.svg`
  width: 18px;
  height: 18px;
`;

export const LegalRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const LegalLink = styled(Link)`
  color: #757575;
  font-family: "Pretendard", sans-serif;
  font-size: 14px;
  text-decoration: none;
  transition: color 0.15s;

  &:hover {
    color: #111;
  }
`;

export const LegalDivider = styled.span`
  color: #dddddd;
  font-size: 14px;
  line-height: 1;
`;

export const ToTopButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 999px;
  background: #333333;
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  transition: background-color 0.2s;

  &:hover {
    background: #111111;
  }

  &:focus-visible {
    outline: 2px solid #111;
    outline-offset: 2px;
  }

  svg {
    color: #ffffff;
  }
`;
