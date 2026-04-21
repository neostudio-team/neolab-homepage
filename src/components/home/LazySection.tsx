"use client";

import { useRef, useState, useEffect, type ReactNode } from "react";
import { Shell, Placeholder } from "./LazySection.styles";

interface LazySectionProps {
  children: ReactNode;
  rootMargin?: string;
  minHeight?: string;
}

export default function LazySection({
  children,
  rootMargin = "200px",
  minHeight = "200px",
}: LazySectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <Shell ref={ref}>
      {isVisible ? children : <Placeholder $minHeight={minHeight} />}
    </Shell>
  );
}
