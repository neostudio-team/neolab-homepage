import styled from "styled-components";
import Link from "next/link";
import { media } from "@/styles/theme";

export const Page = styled.div`background:#fff;min-height:100vh;color:#333;`;
export const Hero = styled.section`background:#fcf9f9;position:relative;overflow:hidden;padding:6rem 0;`;
export const Container = styled.div`max-width:1080px;margin:0 auto;padding:0 1rem;`;
export const HeroInner = styled(Container)`display:flex;flex-direction:column;position:relative;z-index:10;${media.md}{flex-direction:row;}`;
export const Left = styled.div`width:100%;padding-top:2.5rem;${media.md}{width:50%;}`;
export const AccentRow = styled.div`display:flex;align-items:center;gap:1rem;margin-bottom:1rem;`;
export const AccentLine = styled.div`width:2.5rem;height:2px;background:#e1a02e;`;
export const AccentText = styled.span`color:#e1a02e;font-weight:700;font-size:14px;letter-spacing:.15em;text-transform:uppercase;`;
export const H1 = styled.h1`font-size:3.75rem;font-family:serif;color:#333;margin-bottom:1.5rem;`;
export const Lead = styled.p`color:#4b5563;font-size:1.125rem;margin-bottom:4rem;line-height:1.7;`;
export const Phone = styled.h2`font-size:2.25rem;font-weight:700;color:#333;margin-bottom:1.5rem;`;
export const Info = styled.div`color:#4b5563;font-size:15px;line-height:1.7;display:flex;flex-direction:column;gap:1rem;`;
export const Divider = styled.div`height:1px;width:100%;background:#e5e7eb;margin:.5rem 0;`;
export const Right = styled.div`display:none;position:relative;min-height:480px;${media.md}{display:block;width:50%;}`;
export const Shape = styled.div`position:absolute;top:2.5rem;right:0;width:380px;height:460px;background:#c4b5a8;opacity:.75;border-radius:40% 60% 70% 30% / 40% 50% 60% 50%;`;
export const Dot1 = styled.div`position:absolute;top:1rem;right:3.5rem;width:2rem;height:2rem;background:#e87b00;border-radius:9999px;`;
export const Dot2 = styled.div`position:absolute;bottom:6rem;left:3rem;width:3.5rem;height:3.5rem;background:#32e8e1;border-radius:9999px;border:4px solid #fff;box-shadow:0 1px 2px rgba(0,0,0,.12);`;
export const HeartWrap = styled.div`position:absolute;top:30%;right:28%;transform:rotate(-8deg);`;
export const Heart = styled.div`position:relative;width:150px;height:150px;`;
export const CircleA = styled.div`position:absolute;top:0;left:25px;width:100px;height:100px;background:#ebb4bc;border-radius:9999px;`;
export const CircleB = styled.div`position:absolute;top:25px;left:0;width:100px;height:100px;background:#ebb4bc;border-radius:9999px;`;
export const Tri = styled.div`position:absolute;top:40px;left:12px;width:126px;height:110px;background:#ebb4bc;clip-path:polygon(50% 100%,0% 20%,100% 20%);`;
export const Stick = styled.div`width:6px;height:180px;background:#d7aa6a;margin: -20px auto 0;transform:rotate(5deg);`;

export const Section = styled.section`max-width:1080px;margin:0 auto;padding:4rem 1rem;`;
export const TableWrap = styled.div`border-top:2px solid #000;overflow-x:auto;`;
export const Table = styled.table`width:100%;text-align:left;border-collapse:collapse;min-width:760px;`;
export const HeadRow = styled.tr`border-bottom:1px solid #d1d5db;background:#f9f9f9;color:#333;font-size:13px;font-weight:600;`;
export const Th = styled.th`padding:.75rem;text-align:center;`;
export const Row = styled.tr`border-bottom:1px solid #f3f4f6;font-size:13px;color:#666;transition:background .15s;&:hover{background:#f9fafb;}`;
export const Td = styled.td`padding:.75rem;text-align:center;`;
export const NoticeTag = styled.span`display:inline-block;background:#f0a500;color:#fff;font-size:11px;font-weight:700;padding:.125rem .5rem;border-radius:.125rem;`;
export const TitleTd = styled.td`padding:.75rem;`;
export const TitleLink = styled(Link)`color:#666;&:hover{color:#ff4e00;}`;

export const Categories = styled.section`padding:5rem 0;background:#fff;`;
export const SectionTitle = styled.h2`font-size:32px;font-weight:700;margin-bottom:4rem;color:#333;text-align:center;`;
export const CatGrid = styled.div`display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:2.5rem;max-width:860px;margin:0 auto;${media.lg}{grid-template-columns:repeat(4,minmax(0,1fr));}`;
export const CatCard = styled.div`display:flex;flex-direction:column;align-items:center;gap:1rem;`;
export const CatImageWrap = styled.div`width:150px;height:150px;display:flex;align-items:center;justify-content:center;`;
export const CatImage = styled.img`width:100%;height:100%;object-fit:fill;`;
export const CatName = styled.h4`font-size:17px;font-weight:700;color:#333;`;
export const CatBtn = styled(Link)`background:#000;color:#fff;font-size:12px;padding:10px 20px;border-radius:9999px;transition:opacity .15s;&:hover{opacity:.8;}`;

export const ContactSection = styled.section`padding:4rem 0;background:#fcf9f9;`;
export const ContactInner = styled.div`max-width:600px;margin:0 auto;padding:0 1rem;text-align:center;`;
export const ContactTitle = styled.h2`font-size:24px;font-weight:700;color:#333;margin-bottom:.75rem;`;
export const ContactText = styled.p`font-size:14px;color:#666;margin-bottom:2rem;line-height:1.6;`;

export const InfoSection = styled.section`padding:4rem 0;background:#fff;`;
export const InfoTitle = styled.h3`font-size:28px;font-weight:700;color:#333;margin-bottom:2.5rem;text-align:center;`;
export const InfoListRow = styled.div`display:flex;flex-wrap:wrap;justify-content:center;gap:2rem 4rem;font-size:15px;color:#555;`;
export const InfoItem = styled.div`display:flex;align-items:center;gap:.5rem;`;
export const Icon = styled.svg`width:20px;height:20px;`;
export const MailLink = styled.a`transition:color .15s;&:hover{color:#ff4e00;}`;
