"use client";

import { useEffect, useRef } from "react";
import {
  BgDecoration,
  CardImage,
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

const cards = [
  { src: "/images/home/figma/tech-card-1.png", alt: "Digitalization" },
  { src: "/images/home/figma/tech-card-2.png", alt: "Interaction" },
  { src: "/images/home/figma/tech-card-3.png", alt: "Integration" },
  { src: "/images/home/figma/tech-card-4.png", alt: "Scalability" },
] as const;

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
            <RevealGroup stagger={0.18} amount={0.1}>
              <CardTrack>
                {cards.map((card, index) => (
                  <RevealItem
                    key={card.alt}
                    y={100}
                    duration={1.1}
                  >
                    <TechCard $offset={index % 2 === 1}>
                      <CardImage
                        src={card.src}
                        alt={card.alt}
                        fill
                        sizes="(max-width: 767px) 86vw, 38vw"
                        priority={index === 0}
                      />
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
