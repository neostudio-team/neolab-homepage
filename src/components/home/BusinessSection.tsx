"use client";

import { memo } from "react";
import Section from "@/components/common/Section";
import { RevealGroup, RevealItem } from "@/components/common/Reveal";
import {
  Card,
  CardRow,
  CardTitle,
  DashedDivider,
  LogoImage,
  LogoGroup,
  LogoImageWrap,
  LogoItem,
  LogoLabel,
  LogoList,
} from "./BusinessSection.styles";

interface BusinessSectionProps {
  dict?: unknown;
}

interface CardLogo {
  key: string;
  src: string;
  label: string;
  imageWidth: number;
  imageHeight: number;
}

interface BusinessCard {
  key: string;
  title: string;
  logos: CardLogo[];
}

interface BusinessLogoItemProps {
  logo: CardLogo;
  showDivider: boolean;
}

interface BusinessCardItemProps {
  card: BusinessCard;
}

const cards: BusinessCard[] = [
  {
    key: "smart-study",
    title: "스마트 러닝",
    logos: [
      {
        key: "megastudy",
        src: "/images/home/figma/business/logo-megastudy.png",
        label: "메가스터디(엘리하이, 엠베스트)",
        imageWidth: 182,
        imageHeight: 40,
      },
      {
        key: "smart-kumon",
        src: "/images/home/figma/business/logo-smartkumon.svg",
        label: "스마트 구몬",
        imageWidth: 117,
        imageHeight: 56,
      },
      {
        key: "cake",
        src: "/images/home/figma/business/logo-cake.png",
        label: "CAKE (하이브)\n- Learn Korean with BTS",
        imageWidth: 127,
        imageHeight: 48,
      },
    ],
  },
  {
    key: "digital-transform",
    title: "디지털 트랜스폼",
    logos: [
      {
        key: "moleskin",
        src: "/images/home/figma/business/logo-moleskin.svg",
        label: "몰스킨 - MOLESKIN SMART",
        imageWidth: 200,
        imageHeight: 20,
      },
      {
        key: "monami",
        src: "/images/home/figma/business/logo-monami.png",
        label: "모나미 153 에디션",
        imageWidth: 138,
        imageHeight: 36,
      },
      {
        key: "yangji",
        src: "/images/home/figma/business/logo-yangji.png",
        label: "양지솔루션 스마트펜",
        imageWidth: 182,
        imageHeight: 36,
      },
    ],
  },
  {
    key: "document-management",
    title: "스마트 문서 솔루션",
    logos: [
      {
        key: "lgchem",
        src: "/images/home/figma/business/logo-lgchem.svg",
        label: "LG화학 - 설비 점검 솔루션",
        imageWidth: 128,
        imageHeight: 34,
      },
      {
        key: "informds",
        src: "/images/home/figma/business/logo-informds.png",
        label: "인도 INFORM DS - 의료처방전/문진 솔루션",
        imageWidth: 110,
        imageHeight: 45,
      },
      {
        key: "hyundai",
        src: "/images/home/figma/business/logo-hyundai.png",
        label: "현대자동차 - 품질완결시스템(MES 연동)",
        imageWidth: 197,
        imageHeight: 32,
      },
    ],
  },
];

const BusinessLogoItem = memo(function BusinessLogoItem({
  logo,
  showDivider,
}: BusinessLogoItemProps) {
  return (
    <LogoGroup>
      {showDivider && <DashedDivider aria-hidden />}
      <LogoItem $withTopPadding={showDivider}>
        <LogoImageWrap>
          <LogoImage
            src={logo.src}
            alt={logo.label}
            width={logo.imageWidth}
            height={logo.imageHeight}
          />
        </LogoImageWrap>
        <LogoLabel>{logo.label}</LogoLabel>
      </LogoItem>
    </LogoGroup>
  );
});

const BusinessCardItem = memo(function BusinessCardItem({
  card,
}: BusinessCardItemProps) {
  const renderLogo = (logo: CardLogo, index: number) => (
    <BusinessLogoItem key={logo.key} logo={logo} showDivider={index > 0} />
  );

  return (
    <RevealItem key={card.key} y={80} duration={1.1}>
      <Card>
        <CardTitle>{card.title}</CardTitle>
        <LogoList>{card.logos.map(renderLogo)}</LogoList>
      </Card>
    </RevealItem>
  );
});

export default function BusinessSection({ dict }: BusinessSectionProps) {
  void dict;

  const renderCard = (card: BusinessCard) => (
    <BusinessCardItem key={card.key} card={card} />
  );

  return (
    <Section
      backgroundImage="/images/home/figma/business-bg.png"
      title="BUSINESS"
      tone="light"
    >
      <RevealGroup stagger={0.2}>
        <CardRow>{cards.map(renderCard)}</CardRow>
      </RevealGroup>
    </Section>
  );
}
