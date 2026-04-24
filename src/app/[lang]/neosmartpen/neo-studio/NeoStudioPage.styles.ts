import styled, { css } from "styled-components";
import Image from "next/image";
import { media } from "@/styles/theme";

export const Container = styled.div`max-width:1080px;margin:0 auto;padding:0 1rem;`;
const NarrowContainer = styled.div`max-width:900px;margin:0 auto;padding:0 1rem;`;
export const SectionWhite = styled.section`background:#fff;`;
export const SectionGray = styled.section`background:#f7f7f7;`;
export const HeroSection = styled(SectionWhite)`min-height:295px;`;
export const HeroInner = styled(Container)`padding:4rem 1rem;display:flex;flex-direction:column;align-items:center;text-align:center;`;
export const HeroTitle = styled.h1`font-size:40px;font-weight:700;color:#333;margin-bottom:1rem;${media.lg}{font-size:56px;}`;
export const HeroSubtitle = styled.h2`font-size:18px;color:#666;font-weight:300;line-height:1.6;max-width:700px;${media.lg}{font-size:22px;}`;
export const IntroSection = styled(SectionWhite)`min-height:304px;`;
export const IntroInner = styled(NarrowContainer)`padding:3rem 1rem;text-align:center;`;
export const IntroText = styled.p`font-size:15px;color:#555;line-height:1.8;${media.lg}{font-size:17px;}`;
export const Block = styled.div`padding:4rem 0;text-align:center;`;
export const BlockTitle = styled.h2`font-size:28px;font-weight:700;color:#333;margin-bottom:1.5rem;${media.lg}{font-size:36px;}`;
export const BlockDesc = styled.p`font-size:15px;color:#666;line-height:1.6;max-width:700px;margin:0 auto 2.5rem;`;
export const MainImage = styled(Image)`width:100%;object-fit:contain;border-radius:.5rem;`;
export const StoreRow = styled.div`display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:1rem;margin-bottom:1.5rem;`;
export const StoreBadge = styled(Image)`object-fit:contain;`;
export const DesktopLabel = styled.p`font-size:14px;color:#999;margin-bottom:1rem;`;
export const DesktopRow = styled.div`display:flex;justify-content:center;align-items:center;gap:1.5rem;`;
export const DesktopLink = styled.a`display:flex;flex-direction:column;align-items:center;gap:.25rem;transition:opacity .15s;&:hover{opacity:.7;}`;
export const DesktopIcon = styled(Image)`object-fit:contain;`;
export const DesktopText = styled.span`font-size:12px;color:#999;`;
export const TripleGrid = styled.div`padding:4rem 0;display:grid;grid-template-columns:1fr;gap:2rem;${media.md}{grid-template-columns:repeat(3,minmax(0,1fr));}`;
export const TripleCard = styled.div`text-align:center;padding:0 1rem;`;
export const TripleTitle = styled.h3`font-size:18px;font-weight:600;color:#333;margin-bottom:.75rem;line-height:1.4;${media.lg}{font-size:20px;}`;
export const TripleDesc = styled.p`font-size:14px;color:#666;line-height:1.6;`;
export const GifImage = styled.img`width:100%;max-width:800px;margin:0 auto;object-fit:contain;border-radius:.5rem;`;
export const Note = styled.p`font-size:12px;color:#999;margin-top:.75rem;font-style:italic;`;
export const Split = styled.div`padding:4rem 0;display:flex;flex-direction:column;align-items:center;gap:3rem;${media.lg}{flex-direction:row;}`;
export const SplitReverse = styled(Split)`${media.lg}{flex-direction:row-reverse;}`;
export const Half = styled.div`width:100%;${media.lg}{width:50%;}`;
export const HalfText = styled(Half)`text-align:left;`;
export const HalfImg = styled(Image)`width:100%;object-fit:contain;border-radius:.5rem;`;
export const SplitTitle = styled.h2`font-size:28px;font-weight:700;color:#333;margin-bottom:1rem;${media.lg}{font-size:36px;}`;
export const SplitDesc = styled.p`font-size:15px;color:#666;line-height:1.6;margin-bottom:1rem;`;
export const DetailsWrap = styled.div`padding:2rem 0;`;
export const Details = styled.details`border:1px solid #ddd;border-radius:.5rem;overflow:hidden;`;
export const Summary = styled.summary`padding:1rem 1.5rem;cursor:pointer;background:#f9f9f9;transition:background .15s;&:hover{background:#f0f0f0;}`;
export const SummaryTitle = styled.h3`display:inline;font-size:16px;font-weight:600;color:#333;`;
export const DetailsBody = styled.div`padding:1rem 1.5rem;`;
export const DetailsText = styled.p`font-size:14px;color:#666;line-height:1.6;`;
export const FeatureSection = styled(SectionWhite)`padding:4rem 0;`;
export const FeatureStack = styled.div`display:flex;flex-direction:column;gap:5rem;`;
export const FeatureItem = styled.div<{ $reverse: boolean }>`display:flex;flex-direction:column;align-items:center;gap:2.5rem;${media.lg}{${({ $reverse }) =>
  $reverse
    ? css`
          flex-direction: row-reverse;
        `
    : css`
          flex-direction: row;
        `}}`;
export const ShotWrap = styled.div`width:100%;display:flex;justify-content:center;${media.lg}{width:50%;}`;
export const Shot = styled(Image)`width:100%;max-width:360px;object-fit:contain;border-radius:1rem;box-shadow:0 10px 15px rgba(0,0,0,.15);`;
export const FeatureTextWrap = styled.div`width:100%;display:flex;flex-direction:column;align-items:center;text-align:center;${media.lg}{width:50%;align-items:flex-start;text-align:left;}`;
export const Icon = styled(Image)`object-fit:contain;margin-bottom:1rem;`;
export const FeatureTitle = styled.h4`font-size:22px;font-weight:700;color:#333;margin-bottom:.75rem;${media.lg}{font-size:26px;}`;
export const FeatureDesc = styled.p`font-size:15px;color:#666;line-height:1.6;max-width:440px;`;
export const DesktopShotGrid = styled.div`display:grid;grid-template-columns:1fr;gap:1.5rem;margin-bottom:4rem;${media.md}{grid-template-columns:repeat(3,minmax(0,1fr));}`;
export const DesktopShot = styled(Image)`width:100%;object-fit:contain;border-radius:.5rem;box-shadow:0 4px 6px rgba(0,0,0,.14);`;
export const CtaSection = styled.section`background:#111;min-height:453px;`;
export const CtaInner = styled(Container)`padding:6rem 1rem;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;`;
export const CtaText = styled.h2`font-size:20px;color:#fff;font-weight:300;line-height:1.6;max-width:700px;margin-bottom:2.5rem;${media.lg}{font-size:26px;}`;
export const CtaLink = styled.a`display:inline-block;padding:.75rem 2rem;border:1px solid #fff;color:#fff;font-size:14px;transition:all .15s;&:hover{background:#fff;color:#111;}`;
