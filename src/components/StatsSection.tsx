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
      className="flex flex-col items-start"
      style={{
        border: "1px solid #DDDDDD",
        borderRadius: "50px",
        padding: "40px 48px",
        background: "#fff",
      }}
    >
      {/* Label */}
      <div
        className="font-medium mb-4"
        style={{
          fontSize: "12px",
          letterSpacing: "1.5px",
          color: "rgba(0,0,0,0.4)",
          textTransform: "uppercase",
        }}
      >
        {item.label}
      </div>
      {/* Big number + unit */}
      <div className="flex items-end gap-1 mb-2">
        <span
          className="font-bold leading-none"
          style={{
            fontSize: "clamp(44px, 5vw, 72px)",
            letterSpacing: "-2px",
            color: "#0a0a0a",
          }}
        >
          {count}
        </span>
        <span
          className="font-semibold mb-1"
          style={{
            fontSize: "clamp(18px, 2vw, 26px)",
            color: "#0a0a0a",
            letterSpacing: "-0.5px",
          }}
        >
          {item.unit}
        </span>
      </div>
      {/* Desc */}
      <div
        className="leading-[1.5]"
        style={{ fontSize: "13px", color: "rgba(0,0,0,0.4)" }}
      >
        {item.desc}
      </div>
    </div>
  );
}

// Vertical stripe background pattern
function VerticalStripes() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `repeating-linear-gradient(
          to right,
          rgba(0,0,0,0.035) 0px,
          rgba(0,0,0,0.035) 1px,
          transparent 1px,
          transparent 60px
        )`,
      }}
    />
  );
}

export default function StatsSection({ dict }: StatsSectionProps) {
  return (
    <section
      className="relative bg-white text-[#0a0a0a] overflow-hidden"
      style={{ padding: "100px 80px" }}
    >
      <VerticalStripes />

      <div className="relative grid items-center" style={{ gridTemplateColumns: "1fr 1fr", gap: "80px" }}>
        {/* Left: title */}
        <div>
          <h2
            className="font-bold"
            style={{
              fontSize: "clamp(32px, 3.5vw, 56px)",
              letterSpacing: "-1.5px",
              lineHeight: 1.15,
              color: "#0a0a0a",
              whiteSpace: "pre-line",
            }}
          >
            {dict.title}
          </h2>
          <p
            className="mt-5 font-light"
            style={{
              fontSize: "15px",
              color: "rgba(0,0,0,0.45)",
              lineHeight: 1.7,
            }}
          >
            {dict.subtitle}
          </p>
        </div>

        {/* Right: 2x2 grid of pill stat boxes */}
        <div
          className="grid"
          style={{ gridTemplateColumns: "1fr 1fr", gap: "16px" }}
        >
          {dict.items.map((item, i) => (
            <StatCard key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
