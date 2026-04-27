import styled from "styled-components";
import { media } from "@/styles/theme";

/**
 * Shared pill-tab primitives used by CI/BI and Technology pages (and any future
 * page that needs the same tab pattern).
 *
 * Usage:
 *   <TabSection>
 *     <TabBarWrap>
 *       <TabBar>
 *         <TabBtn $active={...}>Label</TabBtn>
 *       </TabBar>
 *     </TabBarWrap>
 *     {tabContent}
 *   </TabSection>
 */

export const TabSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(40px, 6.25vw, 120px);
  padding: clamp(60px, 10.4vw, 200px) clamp(16px, 4vw, 40px);

  & > div {
    width: 100%;
  }
`;

export const TabBarWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

/**
 * Flex-wrap based tab bar — works for any number of tabs.
 * Tabs stay at their natural width (clamped) and wrap when out of space.
 */
export const TabBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  width: 100%;
  max-width: 1080px;

  ${media.sm} {
    gap: 16px;
  }
`;

export const TabBtn = styled.button<{ $active: boolean }>`
  font-size: clamp(14px, 1.25vw, 24px);
  font-weight: 600;
  padding: clamp(14px, 1.6vw, 24px) clamp(16px, 1.6vw, 24px);
  flex: 1 1 calc(50% - 6px);
  min-width: 140px;
  border-radius: 999px;
  cursor: pointer;
  transition:
    background 0.2s,
    color 0.2s,
    border-color 0.2s;
  white-space: nowrap;
  background: ${({ $active }) => ($active ? "#FF9900" : "#fff")};
  color: ${({ $active }) => ($active ? "#fff" : "#111")};
  border: 1px solid
    ${({ $active }) => ($active ? "transparent" : "#ddd")};

  &:hover {
    background: ${({ $active }) => ($active ? "#FF9900" : "#f8f8f8")};
  }

  ${media.sm} {
    flex: 0 0 auto;
    width: clamp(160px, 14vw, 240px);
  }
`;
