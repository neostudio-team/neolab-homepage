"use client";

import { useState, useRef } from "react";
import {
  BodyText,
  CoverImage,
  Grid,
  Lead,
  NcodeBadge,
  NcodeText,
  PhotoGradient,
  PhotoLayerPrimary,
  PhotoLayerSecondary,
  SectorCard,
  SectorDesc,
  SectorGrid,
  SectorIconWrap,
  SectorTitle,
  VisualColumn,
} from "./CompanyHeroContent.styles";

const sectors = [
  {
    label: "교육",
    desc: "지식과 정보를 누구나 쉽게 누릴 수 있는 혁신적 학습 경험",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
        />
      </svg>
    ),
  },
  {
    label: "의료 · 법률",
    desc: "정확한 기록이 생명인 분야의 신뢰할 수 있는 디지털화",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z"
        />
      </svg>
    ),
  },
  {
    label: "건설 · 산업",
    desc: "안전과 효율이 직결되는 현장의 스마트 기록 솔루션",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
        />
      </svg>
    ),
  },
  {
    label: "AI 돌봄",
    desc: "AI와 결합한 따뜻한 돌봄으로 유아·노년층의 다정한 친구",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    ),
  },
];

function SectorCardItem({
  label,
  desc,
  icon,
}: {
  label: string;
  desc: string;
  icon: React.ReactNode;
}) {
  return (
    <SectorCard>
      <SectorIconWrap>{icon}</SectorIconWrap>
      <SectorTitle>{label}</SectorTitle>
      <SectorDesc>{desc}</SectorDesc>
    </SectorCard>
  );
}

export default function CompanyHeroContent() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMouse({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5,
    });
  }

  function handleMouseLeave() {
    setMouse({ x: 0, y: 0 });
  }

  return (
    <Grid>
      <VisualColumn ref={containerRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
        <PhotoLayerPrimary $tx={mouse.x} $ty={mouse.y}>
          <CoverImage src="/images/company/impression01.jpg" alt="NeoLAB workspace" fill />
          <PhotoGradient />
        </PhotoLayerPrimary>

        <PhotoLayerSecondary $tx={mouse.x} $ty={mouse.y}>
          <CoverImage src="/images/company/PPL_talk.jpg" alt="NeoLAB team" fill />
        </PhotoLayerSecondary>

        <NcodeBadge $tx={mouse.x} $ty={mouse.y}>
          <NcodeText>Ncode™</NcodeText>
        </NcodeBadge>
      </VisualColumn>

      <div>
        <Lead>아날로그의 익숙함 위에 디지털의 무한한 가능성을 더합니다.</Lead>
        <BodyText>
          네오랩컨버전스는 Ncode™ 기술을 통해 필기를 정교한 데이터로 변환하고,
          종이 위에서 살아 움직이는 소리로 지식과 정보를 누구나 쉽게 누릴 수 있는 세상을 만듭니다.
        </BodyText>
        <BodyText>
          우리는 세상의 모든 기록과 소리를 가치 있는 데이터로 연결하여,
          비즈니스와 라이프스타일의 새로운 기준을 세웁니다.
        </BodyText>

        <SectorGrid>
          {sectors.map((s) => (
            <SectorCardItem key={s.label} label={s.label} desc={s.desc} icon={s.icon} />
          ))}
        </SectorGrid>
      </div>
    </Grid>
  );
}
