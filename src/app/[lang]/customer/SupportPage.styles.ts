import styled from "styled-components";
import Link from "next/link";
import { media } from "@/styles/theme";

export const Wrap = styled.div`background:#fff;min-height:100vh;color:#333;padding-top:80px;`;
export const Hero = styled.section<{ $bg: string }>`background:${({ $bg }) => $bg};padding:5rem 0;`;
export const Container = styled.div`max-width:1080px;margin:0 auto;padding:0 1rem;`;
export const HeroInner = styled(Container)`display:flex;flex-direction:column;align-items:center;gap:3rem;${media.md}{flex-direction:row;}`;
export const HeroLeft = styled.div`flex:1;`;
export const HeroLabel = styled.p<{ $color: string }>`color:${({ $color }) => $color};font-size:14px;font-weight:700;letter-spacing:.15em;text-transform:uppercase;margin-bottom:.75rem;`;
export const HeroTitle = styled.h1`font-size:3rem;font-family:serif;color:#333;margin-bottom:1rem;`;
export const HeroDesc = styled.p`color:#4b5563;font-size:1.125rem;margin-bottom:2rem;`;
export const HeroImage = styled.img`width:220px;height:220px;object-fit:contain;`;

export const BlockWhite = styled.section`padding:3.5rem 0;background:#fff;`;
export const BlockGray = styled.section`padding:3.5rem 0;background:#f5f8f8;`;
export const BlockTitle = styled.h2`font-size:22px;font-weight:700;color:#333;margin-bottom:2rem;`;
export const PolicyBox = styled.div`background:#f9f9f9;border-radius:.75rem;padding:1.5rem;font-size:14px;color:#555;line-height:1.7;display:flex;flex-direction:column;gap:.75rem;`;

const DotList = styled.ul`display:grid;gap:.75rem;`;
export const DotListColumns = styled(DotList)`grid-template-columns:1fr;${media.md}{grid-template-columns:repeat(2,minmax(0,1fr));}`;
export const DotList3 = styled(DotList)`grid-template-columns:1fr;${media.md}{grid-template-columns:repeat(3,minmax(0,1fr));}`;
export const DotItem = styled.li`display:flex;align-items:center;gap:.5rem;font-size:14px;color:#555;`;
export const Dot = styled.span<{ $color: string }>`width:6px;height:6px;border-radius:9999px;background:${({ $color }) => $color};flex-shrink:0;`;

export const FaqLabel = styled.div<{ $color: string }>`margin-bottom:.5rem;color:${({ $color }) => $color};font-size:14px;font-weight:700;letter-spacing:.15em;`;
export const InlineLinks = styled.div`margin-top:1.5rem;padding-top:1rem;border-top:1px solid #f3f4f6;display:flex;flex-wrap:wrap;gap:1rem;font-size:14px;`;
export const InlineLink = styled(Link)`color:#ff4e00;text-decoration:underline;`;

export const CardGrid2 = styled.div`display:grid;grid-template-columns:1fr;gap:2rem;max-width:600px;${media.md}{grid-template-columns:repeat(2,minmax(0,1fr));}`;
export const CardSingle = styled.div`max-width:280px;`;
export const AccessoryCard = styled.div`background:#fff;border-radius:1rem;padding:1.5rem;box-shadow:0 1px 2px rgba(0,0,0,.08);`;
export const IconBox = styled.div<{ $bg: string }>`width:64px;height:64px;background:${({ $bg }) => $bg};border-radius:.75rem;display:flex;align-items:center;justify-content:center;margin-bottom:1rem;`;
export const Emoji = styled.span`font-size:2rem;`;
export const CardTitle = styled.h3`font-size:16px;font-weight:700;color:#333;margin-bottom:.75rem;`;
export const CardDesc = styled.p`font-size:13px;color:#666;line-height:1.6;margin-bottom:1rem;`;
export const BuyLink = styled(Link)`display:inline-block;background:#000;color:#fff;font-size:12px;padding:.5rem 1rem;border-radius:9999px;transition:opacity .15s;&:hover{opacity:.8;}`;

export const ContactSection = styled.section`padding:4rem 0;background:#fff;`;
export const ContactInner = styled.div`max-width:600px;margin:0 auto;padding:0 1rem;text-align:center;`;
export const ContactTitle = styled.h2`font-size:24px;font-weight:700;color:#333;margin-bottom:.75rem;`;
export const ContactText = styled.p`font-size:14px;color:#666;margin-bottom:2rem;line-height:1.6;`;
export const BackRow = styled.div`max-width:1080px;margin:0 auto;padding:2rem 1rem;`;
export const BackLink = styled(Link)`font-size:14px;color:#9ca3af;transition:color .15s;&:hover{color:#4b5563;}`;
