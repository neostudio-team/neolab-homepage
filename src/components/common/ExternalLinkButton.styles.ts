import styled from "styled-components";
import { media } from "@/styles/theme";

export const ExternalLinkAnchor = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 8px;
  padding: 0 clamp(20px, 2.5vw, 32px);
  height: clamp(56px, 6vw, 80px);
  width: 100%;
  max-width: 350px;
  border: 1px solid #fff;
  border-radius: 8px;
  font-size: clamp(14px, 1.3vw, 20px);
  font-weight: 600;
  color: #fff;
  white-space: nowrap;
  text-decoration: none;
  transition: background 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  ${media.sm} {
    width: auto;
    min-width: clamp(200px, 20vw, 350px);
  }
`;
