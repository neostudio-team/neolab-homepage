import styled from "styled-components";
import Link from "next/link";
import { media } from "@/styles/theme";

/* ── Page wrapper ───────────────────────────────── */
export const Page = styled.main`
  background: #fff;
  min-height: 100vh;
`;

/* ──────────────────────────────────────────────────
 * Top section — info (left) + inquiry form (right)
 * ────────────────────────────────────────────────── */
export const TopSection = styled.section`
  padding: clamp(60px, 10vw, 200px) clamp(24px, 7vw, 140px);
  display: flex;
  flex-direction: column;
  gap: clamp(40px, 5vw, 80px);

  ${media.lg} {
    flex-direction: row;
    align-items: flex-start;
    gap: clamp(40px, 5vw, 80px);
  }
`;

export const InfoCol = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: clamp(40px, 4vw, 64px);
`;

export const InfoHeading = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(16px, 2vw, 24px);
`;

export const InfoTitle = styled.h2`
  margin: 0;
  font-size: clamp(28px, 3.4vw, 48px);
  font-weight: 700;
  color: #111;
  letter-spacing: -0.005em;
  line-height: 1.3;
  white-space: pre-line;
`;

export const InfoSubtitle = styled.p`
  margin: 0;
  font-size: clamp(14px, 1.3vw, 20px);
  color: #555;
  line-height: 1.5;
  letter-spacing: -0.005em;
`;

export const PhoneRow = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(12px, 1.5vw, 20px);

  svg {
    width: clamp(28px, 3vw, 40px);
    height: auto;
    color: #ff9900;
    flex-shrink: 0;
  }
`;

export const PhoneNumber = styled.p`
  margin: 0;
  font-size: clamp(28px, 3.5vw, 48px);
  font-weight: 800;
  color: #111;
  letter-spacing: -0.005em;
  line-height: 1;
`;

/* Info grid — 2 columns at md+, single column on mobile */
export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(20px, 2vw, 32px);

  ${media.md} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-top: 1px solid #ddd;
  padding-top: clamp(12px, 1.5vw, 16px);
`;

export const InfoLabel = styled.p`
  margin: 0;
  font-size: clamp(13px, 1.1vw, 16px);
  font-weight: 700;
  color: #ff9900;
  letter-spacing: -0.005em;
`;

export const InfoValue = styled.div`
  font-size: clamp(14px, 1.2vw, 18px);
  font-weight: 600;
  color: #111;
  line-height: 1.5;
  letter-spacing: -0.005em;

  & > *:not(:first-child) {
    margin-top: 4px;
  }
`;

export const InfoValueLine = styled.p`
  margin: 0;
`;

/* ──────────────────────────────────────────────────
 * Inquiry form (right column)
 * ────────────────────────────────────────────────── */
export const FormCol = styled.div`
  flex: 1;
  min-width: 0;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 16px;
  padding: clamp(24px, 3vw, 40px);
  display: flex;
  flex-direction: column;
  gap: clamp(20px, 2.5vw, 32px);
`;

export const FormTitle = styled.h3`
  margin: 0;
  font-size: clamp(20px, 2vw, 28px);
  font-weight: 700;
  color: #111;
  letter-spacing: -0.005em;
`;

export const FormBody = styled.form`
  display: flex;
  flex-direction: column;
  gap: clamp(12px, 1.4vw, 16px);
`;

const fieldStyles = `
  width: 100%;
  padding: clamp(12px, 1.3vw, 16px) clamp(14px, 1.4vw, 20px);
  background: #fafafa;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: clamp(14px, 1.2vw, 18px);
  font-family: inherit;
  color: #111;
  letter-spacing: -0.005em;
  outline: none;
  transition:
    border-color 0.15s,
    background 0.15s;

  &:focus {
    border-color: #ff9900;
    background: #fff;
  }

  &::placeholder {
    color: #aaa;
  }
`;

export const FormSelect = styled.select`
  ${fieldStyles}
  appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%23111' stroke-width='2'><polyline points='6 9 12 15 18 9'/></svg>");
  background-repeat: no-repeat;
  background-position: right 16px center;
  padding-right: 44px;
`;

export const FormInput = styled.input`
  ${fieldStyles}
`;

export const FormTextarea = styled.textarea`
  ${fieldStyles}
  resize: vertical;
  min-height: 120px;
  font-family: inherit;
`;

export const FileRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`;

export const FileButton = styled.button`
  padding: clamp(10px, 1.2vw, 14px) clamp(16px, 1.5vw, 24px);
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: clamp(13px, 1.1vw, 15px);
  font-weight: 500;
  color: #555;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #f5f5f5;
  }
`;

export const FileName = styled.span`
  font-size: clamp(13px, 1.1vw, 15px);
  color: #555;
  word-break: break-all;
  flex: 1;
  min-width: 0;
`;

export const HiddenFile = styled.input.attrs({ type: "file" })`
  display: none;
`;

export const AgreeRow = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
  font-size: clamp(13px, 1.1vw, 15px);
  color: #555;
`;

export const AgreeBox = styled.input.attrs({ type: "checkbox" })`
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: #ff9900;
`;

export const SubmitBtn = styled.button`
  padding: clamp(14px, 1.6vw, 18px) clamp(28px, 3vw, 40px);
  background: #111;
  color: #fff;
  border: none;
  border-radius: 999px;
  font-size: clamp(15px, 1.3vw, 18px);
  font-weight: 600;
  letter-spacing: -0.005em;
  cursor: pointer;
  align-self: flex-start;
  transition: opacity 0.2s;

  &:hover:not(:disabled) {
    opacity: 0.85;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const FormError = styled.p`
  margin: 0;
  color: #d33;
  font-size: clamp(12px, 1vw, 14px);
`;

export const FormSuccess = styled.div`
  padding: 32px 16px;
  text-align: center;
  color: #2e8540;
  font-size: clamp(14px, 1.2vw, 18px);
  font-weight: 600;
  background: #f0fdf4;
  border-radius: 8px;
`;

/* ──────────────────────────────────────────────────
 * Notice table
 * ────────────────────────────────────────────────── */
export const NoticeSection = styled.section`
  padding: 0 clamp(24px, 7vw, 140px) clamp(60px, 8vw, 160px);
`;

export const NoticeTable = styled.div`
  width: 100%;
  border-top: 2px solid #111;
`;

export const NoticeRow = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: clamp(16px, 1.5vw, 20px) clamp(8px, 1vw, 16px);
  border-bottom: 1px solid #eee;
  font-size: clamp(14px, 1.2vw, 18px);
  color: #111;
  text-decoration: none;
  letter-spacing: -0.005em;
  transition: background 0.15s;

  &:hover {
    background: #fafafa;
  }
`;

export const NoticeTitle = styled.span`
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const NoticeDate = styled.span`
  flex-shrink: 0;
  font-size: clamp(12px, 1vw, 16px);
  color: #757575;
`;

export const NoticeEmpty = styled.div`
  padding: 60px 16px;
  text-align: center;
  color: #757575;
  font-size: clamp(14px, 1.2vw, 16px);
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-top: 32px;
`;

export const PageBtn = styled.button<{ $active?: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  background: ${({ $active }) => ($active ? "#111" : "transparent")};
  color: ${({ $active }) => ($active ? "#fff" : "#555")};
  font-size: 14px;
  font-weight: ${({ $active }) => ($active ? 700 : 500)};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s;

  &:hover:not(:disabled) {
    background: ${({ $active }) => ($active ? "#111" : "#f0f0f0")};
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

/* ──────────────────────────────────────────────────
 * Product cards (제품군 상세 설명)
 * ────────────────────────────────────────────────── */
export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(20px, 2.5vw, 40px);
  width: 100%;

  ${media.lg} {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

export const ProductCard = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: clamp(16px, 1.8vw, 24px);
  align-items: center;
  text-align: center;
  padding: clamp(20px, 2.5vw, 32px);
  border-radius: 16px;
  background: #fff;
  text-decoration: none;
  transition: transform 0.25s ease;

  &:hover {
    transform: translateY(-6px);

    .product-cta {
      color: #ff9900;
    }
  }
`;

export const ProductImg = styled.img`
  width: 100%;
  max-width: 250px;
  aspect-ratio: 1;
  object-fit: contain;
  display: block;
`;

export const ProductName = styled.p`
  margin: 0;
  font-size: clamp(18px, 1.8vw, 24px);
  font-weight: 700;
  color: #111;
  letter-spacing: -0.005em;
`;

export const ProductCta = styled.span.attrs({ className: "product-cta" })`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: clamp(14px, 1.2vw, 18px);
  font-weight: 600;
  color: #555;
  letter-spacing: -0.005em;
  transition: color 0.2s;

  svg {
    width: clamp(20px, 1.7vw, 24px);
    height: auto;
  }
`;

export const Divider = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid #ddd;
  margin: 0;
`;

/* ──────────────────────────────────────────────────
 * Bottom CTA — "제품 문의하기"
 * ────────────────────────────────────────────────── */
export const BottomCta = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(20px, 2.5vw, 32px);
  align-items: flex-start;
  width: 100%;

  ${media.md} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const BottomCtaText = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const BottomCtaTitle = styled.h3`
  margin: 0;
  font-size: clamp(20px, 2vw, 28px);
  font-weight: 700;
  color: #111;
  letter-spacing: -0.005em;
`;

export const BottomCtaDesc = styled.p`
  margin: 0;
  font-size: clamp(14px, 1.2vw, 18px);
  color: #555;
  line-height: 1.5;
  letter-spacing: -0.005em;
  white-space: pre-line;
`;
