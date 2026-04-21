"use client";

import { useState, useEffect, useCallback } from "react";
import {
  DotButton,
  DotsRow,
  NavButtonNext,
  NavButtonPrev,
  NavIcon,
  Root,
  SlideImage,
  SlideLayer,
} from "./HeroSlider.styles";

interface HeroSliderProps {
  slides: string[];
  interval?: number;
}

function SliderDot({
  index,
  current,
  onSelect,
}: {
  index: number;
  current: number;
  onSelect: (i: number) => void;
}) {
  function handleClick() {
    onSelect(index);
  }

  return (
    <DotButton
      type="button"
      $active={index === current}
      onClick={handleClick}
      aria-label={`Go to slide ${index + 1}`}
    />
  );
}

export default function HeroSlider({ slides, interval = 5000 }: HeroSliderProps) {
  const [current, setCurrent] = useState(0);

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const goPrev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(goNext, interval);
    return () => clearInterval(timer);
  }, [goNext, interval]);

  function handleDotSelect(index: number) {
    setCurrent(index);
  }

  return (
    <Root>
      {slides.map((src, i) => (
        <SlideLayer key={src} $visible={i === current}>
          <SlideImage src={src} alt={`Slide ${i + 1}`} fill priority={i === 0} />
        </SlideLayer>
      ))}
      <NavButtonPrev type="button" onClick={goPrev} aria-label="Previous">
        <NavIcon fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </NavIcon>
      </NavButtonPrev>
      <NavButtonNext type="button" onClick={goNext} aria-label="Next">
        <NavIcon fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </NavIcon>
      </NavButtonNext>
      <DotsRow>
        {slides.map((src, i) => (
          <SliderDot key={src} index={i} current={current} onSelect={handleDotSelect} />
        ))}
      </DotsRow>
    </Root>
  );
}
