import styled from "styled-components";
import Image from "next/image";
import { media } from "@/styles/theme";

export const Main = styled.main``;
export const Section = styled.section``;
export const Container = styled.div`max-width:1080px;margin:0 auto;padding:0 1rem;`;

export const Hero = styled(Section)`background:#1a1a2e;color:#fff;padding:4rem 0;`;
export const HeroGrid = styled.div`display:grid;gap:2.5rem;align-items:center;${media.lg}{grid-template-columns:repeat(2,minmax(0,1fr));}`;
export const SmallLabel = styled.p`font-size:12px;text-transform:uppercase;letter-spacing:.3em;color:#39d2cc;margin-bottom:.75rem;`;
export const HeroTitle = styled.h1`font-size:32px;font-weight:900;line-height:1.2;margin-bottom:1.25rem;${media.lg}{font-size:44px;}`;
export const HeroSub = styled.p`color:#9ca3af;font-size:14px;letter-spacing:.1em;`;
export const HeroImageGrid = styled.div`display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:.75rem;`;
export const RoundBox = styled.div`border-radius:32px;overflow:hidden;`;
export const Circle80 = styled.div`border-radius:9999px;overflow:hidden;width:80px;height:80px;`;
export const Circle64 = styled.div`border-radius:9999px;overflow:hidden;width:64px;height:64px;`;
export const FullImage = styled(Image)`width:100%;height:auto;object-fit:cover;`;

export const GraySection = styled(Section)`padding:4rem 0;background:#f4f4f4;`;
export const WhiteSection = styled(Section)`padding:4rem 0;background:#fff;`;
export const DarkSection = styled(Section)`padding:4rem 0;background:#1a1a2e;color:#fff;`;
export const TitleXl = styled.h2`font-size:36px;font-weight:800;color:#000;line-height:1.2;margin-bottom:1.5rem;${media.lg}{font-size:52px;}`;
export const Body = styled.p`font-size:14px;color:#666;line-height:2;`;
export const TwoCol = styled.div`display:grid;gap:3rem;align-items:center;${media.lg}{grid-template-columns:repeat(2,minmax(0,1fr));}`;
export const TwoImageCol = styled.div`display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1rem;`;

export const Center = styled.div`text-align:center;`;
export const VisionLead = styled.p`font-size:18px;font-weight:300;line-height:1.7;margin:0 auto 2rem;color:#e5e7eb;font-style:italic;${media.lg}{font-size:22px;}`;
export const VisionBody = styled.p`font-size:14px;line-height:2;color:#9ca3af;max-width:760px;margin:0 auto;`;

export const MidTitle = styled.h2`font-size:36px;font-weight:800;color:#000;margin-bottom:2.5rem;text-align:center;`;
export const InfoTableWrap = styled.div`max-width:640px;margin:0 auto 3.5rem;`;
export const Table = styled.table`width:100%;font-size:14px;border-collapse:collapse;`;
export const Tr = styled.tr`border-bottom:1px solid #e5e7eb;`;
export const TdLabel = styled.td`padding:.75rem 1.5rem .75rem 0;color:#888;font-weight:500;width:140px;vertical-align:top;`;
export const TdValue = styled.td`padding:.75rem 0;color:#333;`;

export const ProfileGrid = styled.div`display:grid;gap:2.5rem;${media.lg}{grid-template-columns:repeat(2,minmax(0,1fr));}`;
export const ProfileCard = styled.div`background:#f8f8f8;border-radius:.5rem;padding:1.5rem;`;
export const ProfileHead = styled.div`display:flex;align-items:center;gap:.75rem;margin-bottom:1rem;`;
export const ProfileTitle = styled.h3`font-size:18px;font-weight:700;color:#333;`;
export const ProfileBody = styled.div`display:flex;gap:1rem;align-items:flex-start;`;
export const ProfileImage = styled(Image)`border-radius:.25rem;object-fit:cover;flex-shrink:0;`;
export const Name = styled.p`font-weight:700;color:#333;margin-bottom:.25rem;`;
export const TinyBody = styled.p`font-size:12px;color:#666;line-height:1.7;`;

export const PartnerGrid = styled.div`display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:.5rem;max-width:800px;margin:0 auto;${media.md}{grid-template-columns:repeat(3,minmax(0,1fr));}`;
export const PartnerItem = styled.p`font-size:14px;color:#555;text-align:center;padding:.25rem 0;border-bottom:1px solid #e5e7eb;`;
export const FootNote = styled.p`font-size:12px;color:#888;text-align:center;margin-top:1rem;`;

export const Gallery = styled.section`padding:1rem 0;background:#fff;overflow:hidden;`;
export const GalleryGrid = styled.div`display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:.75rem;${media.md}{grid-template-columns:repeat(4,minmax(0,1fr));}`;
export const GalleryLarge = styled.div`grid-column:span 2;grid-row:span 2;`;

export const Heading28 = styled.h2`font-size:28px;font-weight:700;color:#000;margin-bottom:1.5rem;`;
export const ListText = styled.div`display:flex;flex-direction:column;gap:1rem;font-size:14px;color:#555;line-height:2;max-width:840px;margin:0 auto;`;
export const BusinessCards = styled.div`margin-top:3rem;display:grid;gap:2rem;${media.md}{grid-template-columns:repeat(2,minmax(0,1fr));}`;
export const BizCard = styled.div`background:#f8f8f8;border-radius:.5rem;padding:1.5rem;`;
export const BizTitle = styled.h3`font-weight:700;color:#333;margin-bottom:.75rem;`;

export const StrengthGrid = styled.div`display:grid;gap:2.5rem;${media.md}{grid-template-columns:repeat(3,minmax(0,1fr));}`;
export const StrengthText = styled.p`font-size:14px;color:#d1d5db;line-height:1.6;`;
export const StrengthSub = styled.span`display:block;font-size:12px;color:#9ca3af;margin-top:.25rem;`;

export const HistoryWrap = styled.div`position:relative;`;
export const HistoryLine = styled.div`position:absolute;left:60px;top:0;bottom:0;width:1px;background:#e5e7eb;`;
export const HistoryList = styled.div`display:flex;flex-direction:column;gap:1.5rem;`;
export const HistoryItem = styled.div`display:flex;gap:1.5rem;position:relative;`;
export const HistoryYear = styled.div`width:60px;flex-shrink:0;text-align:right;`;
export const YearText = styled.span`font-size:14px;font-weight:700;color:#39d2cc;`;
export const HistoryBody = styled.div`position:relative;padding-left:1.5rem;flex:1;`;
export const Dot = styled.div`position:absolute;left:0;top:.4rem;width:8px;height:8px;border-radius:9999px;background:#39d2cc;transform:translateX(-4px);`;
export const HistoryText = styled.p`font-size:14px;color:#555;line-height:1.8;`;

export const LocationGrid = styled.div`display:grid;gap:3rem;align-items:flex-start;margin-bottom:2.5rem;${media.lg}{grid-template-columns:repeat(2,minmax(0,1fr));}`;
export const AddressList = styled.div`display:flex;flex-direction:column;gap:1.5rem;font-size:14px;`;
export const OfficeName = styled.p`font-weight:700;color:#333;margin-bottom:.25rem;`;
export const OfficeSub = styled.p`font-size:12px;color:#888;margin-bottom:.25rem;`;
export const AddressText = styled.p`color:#555;`;
