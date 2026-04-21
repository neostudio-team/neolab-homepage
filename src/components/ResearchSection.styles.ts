import styled from "styled-components";
import Link from "next/link";
import { colors } from "@/styles/theme";

export const Section = styled.section`
  padding-top: 4rem;
  padding-bottom: 4rem;
  background: #000;
  color: #fff;
`;

export const Inner = styled.div`
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 1.5rem;
`;

export const Subtitle = styled.p`
  color: #9ca3af;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 12px;
  margin-bottom: 2rem;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  color: #9ca3af;
  font-size: 14px;
`;

export const ExternalLink = styled(Link)`
  color: #60a5fa;
  text-decoration: underline;
  transition: color 0.15s;

  &:hover {
    color: #93c5fd;
  }
`;

export const CtaWrap = styled.div`
  margin-top: 2rem;
`;

export const GithubButton = styled(Link)`
  display: inline-block;
  background: ${colors.teal};
  color: #fff;
  padding: 0.75rem 2rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 14px;
  font-weight: 600;
  transition: opacity 0.15s;

  &:hover {
    opacity: 0.9;
  }
`;
