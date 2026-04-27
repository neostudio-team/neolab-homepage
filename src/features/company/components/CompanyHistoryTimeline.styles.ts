import styled from "styled-components";
import { media } from "@/styles/theme";

export const TimelineRoot = styled.div`
  position: relative;
`;

export const TimelineLine = styled.div`
  position: absolute;
  left: 6rem;
  top: 0;
  bottom: 0;
  width: 1px;
  background: rgba(255, 255, 255, 0.15);
`;

export const TimelineRow = styled.div<{ $index: number }>`
  display: flex;
  padding: 1.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.55s ease ${({ $index }) => $index * 45}ms,
    transform 0.55s ease ${({ $index }) => $index * 45}ms;

  &[data-visible="true"] {
    opacity: 1;
    transform: translateY(0);
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const YearCol = styled.div`
  width: 6rem;
  flex-shrink: 0;
  text-align: right;
  padding-right: 1.25rem;
  padding-top: 0.125rem;
`;

export const YearText = styled.span`
  color: #f8da2f;
  font-weight: 900;
  font-size: 1.25rem;
  line-height: 1;
  font-variant-numeric: tabular-nums;

  ${media.md} {
    font-size: 1.5rem;
  }
`;

export const ContentCol = styled.div`
  flex: 1;
  padding-left: 2rem;
  position: relative;
`;

export const Dot = styled.div`
  position: absolute;
  left: 0;
  top: 0.5rem;
  width: 0.625rem;
  height: 0.625rem;
  border-radius: 9999px;
  background: #f8da2f;
  border: 2px solid #111;
  transform: translateX(-50%);
`;

export const EventList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const EventItem = styled.li`
  display: flex;
  gap: 0.5rem;
  font-size: 14px;
  color: #d1d5db;
  line-height: 1.625;

  ${media.md} {
    font-size: 1rem;
  }
`;

export const EventDash = styled.span`
  color: rgba(248, 218, 47, 0.5);
  flex-shrink: 0;
  margin-top: 0.125rem;
`;
