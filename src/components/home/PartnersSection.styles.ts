import Image from "next/image";
import Link from "next/link";
import styled, { keyframes } from "styled-components";

const scrollLeft = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

export const Section = styled.section`
  padding: 11px 0;
  background: #fff;
  overflow: hidden;
`;

export const Inner = styled.div`
  position: relative;
`;

export const LogoTrack = styled.div`
  display: flex;
  width: max-content;
  animation: ${scrollLeft} 40s linear infinite;
`;

export const PartnerLink = styled(Link)`
  flex-shrink: 0;
  margin: 0 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
`;

export const PartnerLogo = styled(Image)`
  object-fit: contain;
  opacity: 0.4;
  transition: opacity 0.2s ease, filter 0.2s ease;
  filter: grayscale(1);

  ${PartnerLink}:hover & {
    opacity: 1;
    filter: grayscale(0);
  }
`;
