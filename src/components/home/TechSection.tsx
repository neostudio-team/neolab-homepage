"use client";

import { useEffect, useRef } from "react";
import {
  BgDecoration,
  CardBgImage,
  CardContent,
  CardDesc,
  CardTitle,
  CardTrack,
  Heading,
  PinContent,
  PinSpacer,
  Section,
  SliderWrap,
  TechCard,
} from "./TechSection.styles";
import Reveal, { RevealGroup, RevealItem } from "@/components/common/Reveal";
import { readInnerHeight, subscribeResize, subscribeScrollPassive } from "@/lib/browser-runtime";

interface TechSectionProps {
  dict: {
    learnMore: string;
  };
}

interface TechCardData {
  key: string;
  title: string;
  desc: string;
  bg: string;
}

const cards: TechCardData[] = [
  {
    key: "digitalization",
    title: "Digitalization",
    desc: "독자 기술 Ncode를 이용한\n오프라인 공간의 스마트 디지털 구현",
    bg: "/images/home/figma/tech/card-1-bg.png",
  },
  {
    key: "interaction",
    title: "Interaction",
    desc: "스마트펜, 소리펜 등 전용 기기를 통한\n콘텐츠 경험 및 능동적 데이터 교감",
    bg: "/images/home/figma/tech/card-2-bg.png",
  },
  {
    key: "compatibility",
    title: "Compatibility",
    desc: "MS 오피스 등 외부 프로그램과의\n자유로운 데이터 연동",
    bg: "/images/home/figma/tech/card-3-bg.png",
  },
  {
    key: "scalability",
    title: "Scalability",
    desc: "전용 앱 개발 및 표준 포맷\n지원을 통한 AI 시스템 연동",
    bg: "/images/home/figma/tech/card-4-bg.png",
  },
];

export default function TechSection({ dict }: TechSectionProps) {
  void dict;
  const pinRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pin = pinRef.current;
    const slider = sliderRef.current;
    if (!pin || !slider) return;

    let rafId: number | null = null;
    let target = 0;

    const step = () => {
      const current = slider.scrollLeft;
      const diff = target - current;
      if (Math.abs(diff) < 0.3) {
        slider.scrollLeft = target;
        rafId = null;
        return;
      }
      slider.scrollLeft = current + diff * 0.08;
      rafId = requestAnimationFrame(step);
    };

    const update = () => {
      const rect = pin.getBoundingClientRect();
      const range = pin.offsetHeight - readInnerHeight();
      const maxScroll = slider.scrollWidth - slider.clientWidth;
      if (range <= 0 || maxScroll <= 0) return;

      const progress = Math.max(0, Math.min(1, -rect.top / range));
      target = progress * maxScroll;
      if (rafId == null) rafId = requestAnimationFrame(step);
    };

    update();
    const offScroll = subscribeScrollPassive(update);
    const offResize = subscribeResize(update);
    return () => {
      offScroll();
      offResize();
      if (rafId != null) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <Section>
      <BgDecoration />
      <Reveal>
        <Heading>
          어떠한 평면이라도
          <br />
          디지털화 할 수 있는 기술
        </Heading>
      </Reveal>

      <PinSpacer ref={pinRef}>
        <PinContent>
          <SliderWrap ref={sliderRef}>
            <RevealGroup once stagger={0.18} amount={0.1}>
              <CardTrack>
                {cards.map((card, index) => (
                  <RevealItem key={card.key} y={100} duration={1.1}>
                    <TechCard $offset={index % 2 === 1}>
                      <CardBgImage
                        src={card.bg}
                        alt=""
                        fill
                        sizes="(max-width: 767px) 86vw, 38vw"
                        priority={index === 0}
                        aria-hidden
                      />
                      <CardContent>
                        <CardTitle>{card.title}</CardTitle>
                        <CardDesc>{card.desc}</CardDesc>
                      </CardContent>
                    </TechCard>
                  </RevealItem>
                ))}
              </CardTrack>
            </RevealGroup>
          </SliderWrap>
        </PinContent>
      </PinSpacer>
    </Section>
  );
}
