import styled from "styled-components";
import Image from "next/image";
import { media } from "@/styles/theme";

export const ink = "#171717";

export const Container = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;

export const ContainerNarrow = styled.div`
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;

export const ContainerManual = styled.div`
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;

export const ContainerFeatureRich = styled.div`
  position: relative;
  z-index: 10;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 5rem 1.5rem;
  color: #fff;
`;

export const ContainerSearch = styled.div`
  position: relative;
  z-index: 10;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  padding: 5rem 1.5rem;
  color: #fff;
  text-align: center;
`;

export const SectionFreedom = styled.section`
  background: #171717;
  color: #fff;
  padding: 4rem 0;
`;

export const SectionWhite = styled.section`
  background: #fff;
  padding: 4rem 0;
`;

export const SectionGray = styled.section`
  background: #f7f7f7;
  padding: 4rem 0;
`;

export const SectionGraySoft = styled.section`
  background: #ececec;
  padding: 4rem 0;
`;

export const SectionNotebooksTop = styled.section`
  background: #ececec;
  padding: 1rem 0 4rem;
`;

export const SectionBgImage = styled.section`
  position: relative;
  min-height: 500px;
  display: flex;
  align-items: center;
`;

export const SectionSearchBg = styled.section`
  position: relative;
  min-height: 460px;
  display: flex;
  align-items: center;
`;

export const BgImage = styled(Image)`
  object-fit: cover;
  object-position: center;
`;

export const BgOverlay50 = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
`;

export const BgOverlay40 = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
`;

export const Title28 = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: ${ink};
  margin-bottom: 0.75rem;
  text-align: center;

  ${media.lg} {
    font-size: 36px;
  }
`;

export const Title28Left = styled(Title28)`
  text-align: left;
  margin-bottom: 0.75rem;
`;

export const Title32Black = styled.h2`
  font-size: 32px;
  font-weight: 900;
  color: #fff;
  margin-bottom: 0.75rem;

  ${media.lg} {
    font-size: 48px;
  }
`;

export const Title32Search = styled.h2`
  font-size: 32px;
  font-weight: 900;
  margin-bottom: 1rem;

  ${media.lg} {
    font-size: 44px;
  }
`;

export const SubGray = styled.p`
  color: #9ca3af;
  font-size: 16px;
  line-height: 1.625;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

export const SubMutedCenter = styled.p`
  text-align: center;
  color: #6b7280;
  font-size: 15px;
  margin-bottom: 3rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`;

export const SubMuted = styled.p`
  color: #6b7280;
  font-size: 15px;
  margin-bottom: 2.5rem;
`;

export const FreedomGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  text-align: left;

  ${media.md} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const FreedomCard = styled.div`
  border: 1px solid #404040;
  border-radius: 0.75rem;
  padding: 1.5rem;
`;

export const FreedomMain = styled.p`
  font-weight: 700;
  color: #fff;
  font-size: 15px;
  margin-bottom: 0.25rem;
`;

export const FreedomSub = styled.p`
  color: #9ca3af;
  font-size: 13px;
`;

export const FeatureRichSub = styled.p`
  font-size: 18px;
  color: #d1d5db;
  margin-bottom: 2.5rem;
`;

export const CheckList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CheckItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
`;

export const CheckMark = styled.span`
  margin-top: 0.25rem;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.2);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`;

export const CheckTextBold = styled.span`
  font-weight: 600;
`;

export const CheckTextMuted = styled.span`
  color: #d1d5db;
`;

export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  ${media.md} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const AboutCard = styled.div`
  border-radius: 1rem;
  overflow: hidden;
  background: #f7f7f7;
`;

export const AboutImg = styled(Image)`
  width: 100%;
  object-fit: cover;
`;

export const AboutLabel = styled.p`
  text-align: center;
  font-weight: 600;
  color: ${ink};
  font-size: 14px;
  padding: 1.25rem 1rem;
`;

export const DigitizeGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  ${media.md} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const DigitizeCard = styled.div`
  background: #fff;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
`;

export const DigitizeCardTitle = styled.h3`
  font-weight: 700;
  color: ${ink};
  font-size: 16px;
  margin-bottom: 0.75rem;
`;

export const DigitizeCardDesc = styled.p`
  color: #6b7280;
  font-size: 13px;
  line-height: 1.625;
`;

export const NumberedList = styled.ul`
  display: inline-flex;
  flex-direction: column;
  gap: 1rem;
  text-align: left;
`;

export const NumberedItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 15px;
  color: ${ink};
`;

export const NumberBadge = styled.span`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 9999px;
  background: ${ink};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  flex-shrink: 0;
`;

export const SplitRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  ${media.lg} {
    flex-direction: row;
  }
`;

export const Half = styled.div`
  width: 100%;

  ${media.lg} {
    width: 50%;
  }
`;

export const HalfTextFirstDesktop = styled.div`
  width: 100%;
  order: 2;

  ${media.lg} {
    order: 1;
    width: 50%;
  }
`;

export const HalfImageSecondDesktop = styled.div`
  width: 100%;
  order: 1;

  ${media.lg} {
    order: 2;
    width: 50%;
  }
`;

export const RoundedCoverImg = styled(Image)`
  width: 100%;
  border-radius: 1rem;
  object-fit: cover;
`;

export const BlockHeading = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: ${ink};
  line-height: 1.25;
  margin-bottom: 0.75rem;

  ${media.lg} {
    font-size: 36px;
  }
`;

export const BlockTagline = styled.p`
  color: ${ink};
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 1rem;
  font-style: italic;
`;

export const BlockTaglineNoItalic = styled(BlockTagline)`
  font-style: normal;
`;

export const BlockBody = styled.p`
  color: #6b7280;
  font-size: 15px;
  line-height: 1.625;
`;

export const BlockBodyDark = styled.p`
  color: #4b5563;
  font-size: 15px;
  line-height: 1.625;
  margin-bottom: 1rem;
`;

export const BlockBodySmall = styled.p`
  font-size: 13px;
  color: #6b7280;
`;

export const SearchTagline = styled.p`
  font-size: 18px;
  color: #e5e7eb;
  font-weight: 600;
  margin-bottom: 1rem;
  font-style: italic;
`;

export const SearchDesc = styled.p`
  color: #d1d5db;
  font-size: 15px;
  line-height: 1.625;
`;

export const NotebooksIntroRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  margin-bottom: 4rem;

  ${media.lg} {
    flex-direction: row;
  }
`;

export const NotebooksSubheading = styled.h3`
  font-size: 22px;
  font-weight: 700;
  color: ${ink};
  margin-bottom: 1rem;
`;

export const NotebooksDesc = styled.p`
  color: #4b5563;
  font-size: 14px;
  line-height: 1.625;
`;

export const NotebooksFindTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: ${ink};
  text-align: center;
  margin-bottom: 2rem;
`;

export const NotebookProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;

  ${media.md} {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

export const NotebookCard = styled.a`
  background: #fff;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
  transition: box-shadow 0.15s;
  color: inherit;
  text-decoration: none;

  &:hover {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }
`;

export const NotebookThumb = styled.div`
  aspect-ratio: 1;
  background: #f9fafb;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;
`;

export const NotebookThumbImg = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.2s;

  ${NotebookCard}:hover & {
    transform: scale(1.05);
  }
`;

export const NotebookCardBody = styled.div`
  padding: 0.75rem;
`;

export const NotebookName = styled.p`
  font-size: 11px;
  font-weight: 600;
  color: ${ink};
  line-height: 1.25;
  margin-bottom: 0.25rem;
`;

export const NotebookPrice = styled.p`
  font-size: 12px;
  color: #6b7280;
`;

export const AppsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  ${media.md} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const AppCard = styled.div`
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
  border: 1px solid #f3f4f6;
`;

export const AppCardImg = styled(Image)`
  width: 100%;
  object-fit: cover;
`;

export const AppCardBody = styled.div`
  padding: 2rem;
`;

export const AppCardTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: ${ink};
  margin-bottom: 0.75rem;
`;

export const AppCardDesc = styled.p`
  color: #6b7280;
  font-size: 14px;
  line-height: 1.625;
`;

export const SpecSectionRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3rem;

  ${media.lg} {
    flex-direction: row;
  }
`;

export const SpecTable = styled.table`
  width: 100%;
  font-size: 14px;
`;

export const SpecTr = styled.tr`
  border-bottom: 1px solid #e5e7eb;
`;

export const SpecTdLabel = styled.td`
  padding: 0.75rem 1.5rem 0.75rem 0;
  color: #6b7280;
  font-weight: 500;
  width: 160px;
  vertical-align: top;
`;

export const SpecTdVal = styled.td`
  padding: 0.75rem 0;
  color: ${ink};
`;

export const SpecImg = styled(Image)`
  width: 100%;
  object-fit: contain;
  border-radius: 0.75rem;
`;

export const BoxList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const BoxItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  border-bottom: 1px solid #f3f4f6;
  padding-bottom: 1.25rem;
`;

export const BoxNum = styled.span`
  width: 2rem;
  height: 2rem;
  border-radius: 9999px;
  background: ${ink};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
  flex-shrink: 0;
`;

export const BoxText = styled.p`
  font-size: 15px;
  color: ${ink};
  padding-top: 0.25rem;
`;

export const BoxNote = styled.p`
  margin-top: 1.5rem;
  font-size: 13px;
  color: #9ca3af;
  font-style: italic;
`;

export const CompareSection = styled(SectionGray)`
  overflow-x: auto;
`;

export const CenterInlineBlock = styled.div`
  text-align: center;
`;

export const CompareWrap = styled.div`
  overflow-x: auto;
  border-radius: 1rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
`;

export const CompareTable = styled.table`
  width: 100%;
  font-size: 13px;
  background: #fff;
`;

export const CompareTh = styled.th<{ $align?: "left" | "center" }>`
  padding: 1rem;
  text-align: ${({ $align }) => ($align === "left" ? "left" : "center")};
  font-weight: 600;
  color: #fff;
  background: #171717;
`;

export const CompareThR1 = styled(CompareTh)`
  font-weight: 700;
  background: #404040;
`;

export const CompareTr = styled.tr<{ $even: boolean }>`
  background: ${({ $even }) => ($even ? "#fff" : "#f9fafb")};
`;

export const CompareTdSpec = styled.td`
  padding: 0.75rem 1rem;
  color: #6b7280;
  font-weight: 500;
`;

export const CompareTd = styled.td`
  padding: 0.75rem 1rem;
  text-align: center;
  color: ${ink};
`;

export const CompareTdR1 = styled(CompareTd)`
  font-weight: 700;
  background: #fffbeb;
`;

export const ManualStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ManualLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  padding: 1rem 1.5rem;
  transition: background 0.15s;
  color: inherit;
  text-decoration: none;

  &:hover {
    background: #f9fafb;
  }
`;

export const ManualLinkLabel = styled.span`
  font-size: 14px;
  color: ${ink};
  font-weight: 500;
  text-align: left;
`;

export const ManualIcon = styled.svg`
  width: 1.25rem;
  height: 1.25rem;
  color: #9ca3af;
  flex-shrink: 0;
  transition: color 0.15s;

  ${ManualLink}:hover & {
    color: ${ink};
  }
`;
