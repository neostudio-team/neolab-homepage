import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { colors, media } from "@/styles/theme";

export const Section = styled.section`
  padding-top: 54px;
  padding-bottom: 0;
  background: #fff;
`;

export const Inner = styled.div`
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const PageTitle = styled.h2`
  font-size: clamp(1.375rem, 1.9vw, 1.875rem);
  font-weight: 500;
  text-align: center;
  color: #333;
  margin-bottom: 4rem;
`;

export const BlockList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

export const BlockRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;

  ${media.lg} {
    flex-direction: row;
  }
`;

export const ImageCol = styled.div<{ $orderAfter: boolean }>`
  width: 100%;

  ${media.lg} {
    width: 58%;
    order: ${({ $orderAfter }) => ($orderAfter ? 2 : 1)};
  }
`;

export const TextCol = styled.div<{ $orderAfter: boolean }>`
  width: 100%;

  ${media.lg} {
    width: 37%;
    order: ${({ $orderAfter }) => ($orderAfter ? 1 : 2)};
  }
`;

export const BlockImage = styled(Image)`
  width: 100%;
  height: auto;
`;

export const Category = styled.p`
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: #9ca3af;
  margin-bottom: 0.75rem;
`;

export const BlockTitle = styled.h3`
  font-size: clamp(1rem, 1.4vw, 1.375rem);
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;
  line-height: 1.375;
`;

export const BlockDesc = styled.p`
  color: #666;
  font-size: 0.875rem;
  line-height: 2;
  margin-bottom: 1.5rem;
`;

export const CaseList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const CaseLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const CaseIcon = styled.span`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 0.25rem;
  background: rgba(242, 101, 34, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.primary};
  font-weight: 700;
  font-size: 0.625rem;
  flex-shrink: 0;
`;

export const CaseLabel = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #333;
  transition: color 0.15s;

  ${CaseLink}:hover & {
    color: ${colors.primary};
  }
`;

export const CaseRowStatic = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transform: translateY(2px);
`;

export const CaseIconMuted = styled.span`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 0.25rem;
  background: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9ca3af;
  font-weight: 700;
  font-size: 0.625rem;
  flex-shrink: 0;
`;

export const CaseLabelMuted = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #666;
`;
