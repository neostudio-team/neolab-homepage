import styled from "styled-components";

export const Wrap = styled.div`min-height:100vh;display:flex;`;
export const Left = styled.div`display:none;@media (min-width:1024px){display:flex;width:50%;background:#fff;flex-direction:column;align-items:center;justify-content:center;padding:4rem;}`;
export const Logo = styled.img`width:16rem;margin-bottom:2rem;`;
export const LeftTitle = styled.p`color:#1a1a2e;font-size:1.875rem;font-weight:700;letter-spacing:-.02em;`;
export const Right = styled.div`flex:1;background:#1a1a2e;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:3rem;padding-top:8rem;`;
export const Box = styled.div`width:100%;max-width:28rem;`;
export const Title = styled.h2`font-size:3rem;font-weight:700;color:#fff;margin-bottom:1rem;`;
export const Desc = styled.p`color:rgba(255,255,255,.6);font-size:16px;margin-bottom:2.5rem;`;
export const ErrorBox = styled.div`background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.3);border-radius:.75rem;padding:.75rem 1rem;margin-bottom:1.5rem;`;
export const ErrorText = styled.p`color:#f87171;font-size:14px;white-space:pre-line;`;
export const GoogleBtn = styled.button`width:100%;background:#fff;border-radius:.75rem;padding:1rem;font-size:14px;font-weight:600;color:#374151;display:flex;align-items:center;justify-content:center;gap:.75rem;box-shadow:0 10px 15px rgba(0,0,0,.15);transition:background .15s;&:hover{background:#f3f4f6;}&:disabled{opacity:.5;}`;
export const Help = styled.p`text-align:center;font-size:14px;color:rgba(255,255,255,.3);margin-top:1.5rem;`;
