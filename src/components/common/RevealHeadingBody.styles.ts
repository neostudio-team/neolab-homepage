import styled from "styled-components";

/**
 * Layout for the title + description + (optional) contents block.
 * Figma 63:2693 reference:
 *   - section padding: 200px 140px
 *   - gap between heading-group and contents: 120px
 *   - gap between title and description: 48px
 *   - title 80px Bold, tracking -0.8px, line 1.2
 *   - description 28px Medium, line 1.6
 *   - contents fills width, 16px border-radius
 */
export const Root = styled.section<{ $pt?: boolean; $pb?: boolean }>`
  width: 100%;
  padding-top: ${({ $pt = true }) =>
    $pt ? "clamp(80px, 10.4vw, 200px)" : "0"};
  padding-bottom: ${({ $pb = true }) =>
    $pb ? "clamp(80px, 10.4vw, 200px)" : "0"};
  padding-left: clamp(24px, 7.3vw, 140px);
  padding-right: clamp(24px, 7.3vw, 140px);
  display: flex;
  flex-direction: column;
  gap: clamp(48px, 6.25vw, 120px);
`;

export const HeadingGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: clamp(20px, 2.5vw, 48px);
`;

export const RevealTitle = styled.h2`
  font-size: clamp(3rem, 4.2vw, 5rem); /* 48 → 80 */
  font-weight: 700;
  white-space: pre-line;
`;

export const RevealDescription = styled.p`
  font-size: clamp(1.125rem, 1.46vw, 1.75rem); /* ~15 → 28 */
  white-space: pre-line;
`;

export const ContentsSlot = styled.div`
  width: 100%;
`;
