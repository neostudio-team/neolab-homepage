import styled from "styled-components";
import Link from "next/link";

export const Wrap = styled.div`background:#fff;min-height:100vh;padding-top:100px;`;
export const Inner = styled.div`max-width:780px;margin:0 auto;padding:4rem 1rem;`;
export const BackLink = styled(Link)`font-size:14px;color:#9ca3af;display:inline-block;margin-bottom:2rem;&:hover{color:#4b5563;}`;
export const Pin = styled.span`display:inline-block;background:#f0a500;color:#fff;font-size:12px;font-weight:700;padding:.125rem .5rem;border-radius:.125rem;margin-bottom:.75rem;`;
export const Title = styled.h1`font-size:28px;font-weight:700;color:#111827;margin-bottom:1rem;line-height:1.4;`;
export const Meta = styled.div`display:flex;align-items:center;gap:1rem;font-size:14px;color:#9ca3af;margin-bottom:2.5rem;padding-bottom:1.5rem;border-bottom:1px solid #f3f4f6;`;
export const HtmlContent = styled.div`font-size:15px;line-height:1.8;color:#374151;& p{margin-bottom:.75rem;} & ul{list-style:disc;padding-left:1.25rem;} & ol{list-style:decimal;padding-left:1.25rem;} & li{margin-bottom:.25rem;} & a{color:#2563eb;text-decoration:underline;} & img{max-width:100%;border-radius:.25rem;} & h1{font-size:1.5rem;font-weight:700;} & h2{font-size:1.25rem;font-weight:700;} & h3{font-size:1.125rem;font-weight:600;} & strong{font-weight:700;} & em{font-style:italic;} & blockquote{border-left:4px solid #d1d5db;padding-left:1rem;color:#6b7280;}`;
export const FooterBox = styled.div`margin-top:4rem;padding-top:2rem;border-top:1px solid #f3f4f6;`;
export const BorderBtn = styled(Link)`display:inline-block;border:1px solid #d1d5db;color:#4b5563;font-size:14px;padding:.75rem 1.5rem;border-radius:.5rem;transition:background .15s;&:hover{background:#f9fafb;}`;
