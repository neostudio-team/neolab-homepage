"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface BusinessCase {
  label: string;
  href: string;
}

interface BusinessTab {
  id: string;
  label: string;
  badge: string;
  title: string;
  description: string;
  cases: readonly BusinessCase[];
  image: string;
  imageAlt: string;
}

interface BusinessSectionProps {
  dict: {
    tag: string;
    title: string;
    learnMore: string;
    tabs: readonly BusinessTab[];
  };
}

export default function BusinessSection({ dict }: BusinessSectionProps) {
  const [active, setActive] = useState(0);
  const tab = dict.tabs[active];

  return (
    <section className="bg-white text-[#0a0a0a]" style={{ padding: "100px 80px" }}>
      {/* Section heading */}
      <div className="flex items-center gap-4 mb-10">
        <div
          className="rounded-full flex-shrink-0"
          style={{ width: 20, height: 20, background: "#F5A623" }}
        />
        <h2
          className="font-bold text-[#0a0a0a]"
          style={{
            fontSize: "clamp(28px, 3vw, 48px)",
            letterSpacing: "-0.5px",
            lineHeight: 1.1,
          }}
        >
          {dict.tag}
        </h2>
      </div>

      {/* Tab bar */}
      <div
        className="flex mt-0 mb-0"
        style={{ borderBottom: "2px solid rgba(0,0,0,0.08)" }}
      >
        {dict.tabs.map((t, i) => (
          <button
            key={t.id}
            onClick={() => setActive(i)}
            className="relative transition-all duration-200 whitespace-nowrap"
            style={{
              padding: "14px 28px",
              fontSize: "14px",
              fontWeight: active === i ? 700 : 500,
              color: active === i ? "#0a0a0a" : "rgba(0,0,0,0.38)",
              background: "none",
              border: "none",
              cursor: "pointer",
              borderBottom: active === i ? "2px solid #F5A623" : "2px solid transparent",
              marginBottom: "-2px",
              letterSpacing: ".2px",
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Panel */}
      <div
        className="grid items-center"
        style={{ gridTemplateColumns: "1fr 1fr", gap: "80px", paddingTop: "60px" }}
      >
        {/* Left: text content */}
        <div>
          <h3
            className="font-bold text-[#0a0a0a] mb-5"
            style={{
              fontSize: "clamp(26px, 2.6vw, 40px)",
              letterSpacing: "-0.8px",
              lineHeight: 1.2,
              whiteSpace: "pre-line",
            }}
          >
            {tab.title}
          </h3>
          <p
            className="mb-8 leading-[1.8]"
            style={{ fontSize: "15px", color: "#555" }}
          >
            {tab.description}
          </p>

          {/* Case links */}
          <div className="flex flex-col gap-3 mb-10">
            {tab.cases.map((c) => (
              <div key={c.label} className="flex items-center gap-3">
                <div
                  className="flex-shrink-0 rounded-full"
                  style={{ width: 6, height: 6, background: "#F5A623" }}
                />
                {c.href !== "#" ? (
                  <Link
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[#0a0a0a] hover:text-[#F5A623] transition-colors"
                    style={{ fontSize: "14px" }}
                  >
                    {c.label}
                  </Link>
                ) : (
                  <span
                    className="font-medium text-[#888]"
                    style={{ fontSize: "14px" }}
                  >
                    {c.label}
                  </span>
                )}
              </div>
            ))}
          </div>

          <Link
            href="#"
            className="inline-flex items-center gap-2.5 font-semibold text-white transition-all hover:brightness-90"
            style={{
              background: "#F5A623",
              fontSize: "14px",
              letterSpacing: ".3px",
              padding: "14px 32px",
              borderRadius: "100px",
            }}
          >
            {dict.learnMore} →
          </Link>
        </div>

        {/* Right: image */}
        <div>
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              aspectRatio: "16/10",
              background: "linear-gradient(135deg,#f0f0ee,#e0e0de)",
            }}
          >
            <Image
              src={tab.image}
              alt={tab.imageAlt}
              width={640}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
