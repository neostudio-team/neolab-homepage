"use client";

import { useEffect, useRef, useState } from "react";

interface StatItem {
  label: string;
  count: number;
  unit: string;
  desc: string;
}

interface StatsSectionProps {
  dict: {
    tag: string;
    title: string;
    subtitle: string;
    items: readonly StatItem[];
  };
}

function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return { count, ref };
}

function StatCard({ item }: { item: StatItem }) {
  const { count, ref } = useCountUp(item.count, 2000);
  return (
    <div
      ref={ref}
      className="relative overflow-hidden text-center group"
      style={{
        background: "#f7f7f5",
        padding: "48px 40px",
        borderLeft: "1px solid rgba(0,0,0,.06)",
      }}
    >
      <div
        className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#E63B2E] origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100"
      />
      <div
        className="font-medium uppercase mb-4"
        style={{
          fontSize: "11px",
          letterSpacing: "2px",
          color: "rgba(0,0,0,.35)",
        }}
      >
        {item.label}
      </div>
      <div className="flex items-end justify-center gap-1">
        <span
          className="font-bold leading-none"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(40px, 5vw, 72px)",
            letterSpacing: "-2px",
            color: "#0a0a0a",
          }}
        >
          {count}
        </span>
        <span
          className="font-normal mb-1"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "24px",
            color: "rgba(0,0,0,.3)",
          }}
        >
          {item.unit}
        </span>
      </div>
      <div
        className="mt-3 leading-[1.5]"
        style={{ fontSize: "12px", color: "rgba(0,0,0,.35)" }}
      >
        {item.desc}
      </div>
    </div>
  );
}

export default function StatsSection({ dict }: StatsSectionProps) {
  return (
    <section
      className="bg-white text-[#0a0a0a]"
      style={{ padding: "80px 80px 0", borderTop: "1px solid rgba(0,0,0,.06)" }}
    >
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2.5 mb-5">
          <div className="w-6 h-0.5 bg-[#E63B2E]" />
          <span
            className="font-semibold uppercase text-[#E63B2E]"
            style={{ fontSize: "11px", letterSpacing: "2.5px" }}
          >
            {dict.tag}
          </span>
        </div>
        <h2
          className="font-bold mx-auto"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(32px, 3.2vw, 52px)",
            letterSpacing: "-1px",
            lineHeight: 1.1,
            color: "#0a0a0a",
          }}
        >
          {dict.title}
        </h2>
        <p
          className="font-light mx-auto mt-3.5"
          style={{ fontSize: "15px", color: "rgba(0,0,0,.4)", maxWidth: "520px" }}
        >
          {dict.subtitle}
        </p>
      </div>

      <div
        className="grid"
        style={{ gridTemplateColumns: "repeat(4, 1fr)", gap: "2px" }}
      >
        {dict.items.map((item, i) => (
          <div key={i} style={i === 0 ? { borderLeft: "none" } : {}}>
            <StatCard item={item} />
          </div>
        ))}
      </div>
    </section>
  );
}
