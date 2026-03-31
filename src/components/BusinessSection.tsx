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
        className="font-bold text-[#0a0a0a]"
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "clamp(32px, 3.2vw, 52px)",
          letterSpacing: "-1px",
          lineHeight: 1.1,
        }}
      >
        {dict.title}
      </h2>

      {/* Tab bar */}
      <div
        className="flex mt-12 mb-0"
        style={{ borderBottom: "1px solid rgba(0,0,0,.1)" }}
      >
        {dict.tabs.map((t, i) => (
          <button
            key={t.id}
            onClick={() => setActive(i)}
            className="transition-all duration-200"
            style={{
              padding: "14px 28px",
              fontSize: "13px",
              fontWeight: active === i ? 700 : 500,
              color: active === i ? "#0a0a0a" : "rgba(0,0,0,.35)",
              borderBottom: active === i ? "2px solid #E63B2E" : "2px solid transparent",
              marginBottom: "-1px",
              letterSpacing: ".3px",
              background: "none",
              cursor: "pointer",
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Panel */}
      <div
        className="grid items-center"
        style={{ gridTemplateColumns: "1fr 1fr", gap: "80px", paddingTop: "64px" }}
      >
        <div>
          <div
            className="inline-block text-white font-semibold uppercase mb-5"
            style={{
              background: "#E63B2E",
              fontSize: "10px",
              letterSpacing: "2px",
              padding: "5px 12px",
            }}
          >
            {tab.badge}
          </div>
          <h3
            className="font-bold text-[#0a0a0a] mb-4"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(26px, 2.6vw, 40px)",
              letterSpacing: "-0.8px",
              lineHeight: 1.15,
            }}
          >
            {tab.title}
          </h3>
          <p className="mb-7 leading-[1.8]" style={{ fontSize: "14px", color: "#555" }}>
            {tab.description}
          </p>
          <div className="flex flex-col gap-2.5 mb-8">
            {tab.cases.map((c) => (
              <div key={c.label} className="flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] shrink-0" />
                {c.href !== "#" ? (
                  <Link
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[#0a0a0a] hover:text-[#E63B2E] transition-colors"
                    style={{ fontSize: "13px" }}
                  >
                    {c.label}
                  </Link>
                ) : (
                  <span className="font-medium text-[#666]" style={{ fontSize: "13px" }}>
                    {c.label}
                  </span>
                )}
              </div>
            ))}
          </div>
          <Link
            href="#"
            className="inline-flex items-center gap-2.5 text-white font-semibold transition-all hover:brightness-90"
            style={{ background: "#E63B2E", fontSize: "13px", letterSpacing: ".5px", padding: "15px 32px" }}
          >
            {dict.learnMore} →
          </Link>
        </div>
        <div>
          <div
            className="rounded overflow-hidden flex items-center justify-center"
            style={{ aspectRatio: "16/10", background: "linear-gradient(135deg,#f0f0ee,#e0e0de)" }}
          >
            <Image
              src={tab.image}
              alt={tab.imageAlt}
              width={600}
              height={375}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
