"use client";

import {
  CardFigure,
  CardImage,
  CardRow,
  Inner,
  Overlay,
  Section,
} from "./BusinessSection.styles";
import SectionHeading from "../common/SectionHeading";

interface BusinessSectionProps {
  dict?: unknown;
}

const cards = [
  {
    key: "smart-study",
    src: "/images/home/figma/business-card-1.png",
    alt: "스마트 스터디 — 스마트 엠베스트, 스마트 구몬, CAKE (하이브)",
  },
  {
    key: "digital-transform",
    src: "/images/home/figma/business-card-2.png",
    alt: "디지털 트랜스폼 — 몰스킨, LAMY SAFARI, 모나미 153, 양지사",
  },
  {
    key: "document-management",
    src: "/images/home/figma/business-card-3.png",
    alt: "도큐먼트 매니지먼트 — LG 화학, 인도 INFORM DS, 현대자동차",
  },
];

export default function BusinessSection({ dict }: BusinessSectionProps) {
  void dict;
  return (
    <Section>
      <Overlay />
      <Inner>
        <SectionHeading tone="light">BUSINESS</SectionHeading>

        <CardRow>
          {cards.map((card) => (
            <CardFigure key={card.key}>
              <CardImage
                src={card.src}
                alt={card.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </CardFigure>
          ))}
        </CardRow>
      </Inner>
    </Section>
  );
}
