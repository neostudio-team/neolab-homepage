"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface BusinessCase {
  label: string;
  href: string;
  image?: string;
  description?: string;
  badge?: string;
  system?: string;
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
  const [activeTab, setActiveTab] = useState(0);
  const [activeCase, setActiveCase] = useState(0);

  const tab = dict.tabs[activeTab];
  const isDocTab = tab.id === "doc";
  const currentCase = tab.cases[activeCase] ?? tab.cases[0];
  const displayImage = currentCase?.image ?? tab.image;
  const siteHref = currentCase?.href ?? "#";

  function handleTabChange(i: number) {
    setActiveTab(i);
    setActiveCase(0);
  }

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
          style={{ fontSize: "clamp(28px, 3vw, 48px)", letterSpacing: "-0.5px", lineHeight: 1.1 }}
        >
          {dict.tag}
        </h2>
      </div>

      {/* Tab bar */}
      <div className="flex mt-0 mb-0" style={{ borderBottom: "2px solid rgba(0,0,0,0.08)" }}>
        {dict.tabs.map((t, i) => (
          <button
            key={t.id}
            onClick={() => handleTabChange(i)}
            className="relative transition-all duration-200 whitespace-nowrap"
            style={{
              padding: "14px 28px",
              fontSize: "14px",
              fontWeight: activeTab === i ? 700 : 500,
              color: activeTab === i ? "#0a0a0a" : "rgba(0,0,0,0.38)",
              background: "none",
              border: "none",
              cursor: "pointer",
              borderBottom: activeTab === i ? "2px solid #F5A623" : "2px solid transparent",
              marginBottom: "-2px",
              letterSpacing: ".2px",
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* ── Document Mgmt 탭: 4카드 그리드 레이아웃 ── */}
      {isDocTab ? (
        <div style={{ paddingTop: "60px" }}>
          {/* 타이틀 + 설명 */}
          <div className="mb-10">
            <h3
              className="font-bold text-[#0a0a0a] mb-4"
              style={{ fontSize: "clamp(26px, 2.6vw, 40px)", letterSpacing: "-0.8px", lineHeight: 1.2, whiteSpace: "pre-line" }}
            >
              {tab.title}
            </h3>
            <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.8 }}>
              {tab.description}
            </p>
          </div>

          {/* 4개 카드 그리드 */}
          <div className="grid grid-cols-2 gap-5" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
            {tab.cases.map((c) => (
              <div
                key={c.label}
                className="rounded-2xl overflow-hidden flex flex-col"
                style={{ border: "1px solid rgba(0,0,0,0.08)", background: "#fff" }}
              >
                {/* 이미지 */}
                <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
                  {c.image && (
                    <Image
                      src={c.image}
                      alt={c.label}
                      fill
                      className="object-cover"
                    />
                  )}
                  {/* badge */}
                  {c.badge && (
                    <span
                      className="absolute top-3 left-3 text-white font-bold"
                      style={{ background: "#F5A623", fontSize: "11px", padding: "3px 10px", borderRadius: "100px", letterSpacing: ".3px" }}
                    >
                      {c.badge}
                    </span>
                  )}
                </div>
                {/* 텍스트 */}
                <div className="flex flex-col gap-2 p-4">
                  <div className="font-bold text-[#0a0a0a]" style={{ fontSize: "15px" }}>{c.label}</div>
                  <p style={{ fontSize: "13px", color: "#666", lineHeight: 1.7 }}>{c.description}</p>
                  {c.system && (
                    <div
                      className="flex items-center gap-1.5 mt-1"
                      style={{ fontSize: "12px", color: "#F5A623", fontWeight: 600 }}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <rect x="1" y="1" width="10" height="10" rx="2" stroke="#F5A623" strokeWidth="1.3"/>
                        <path d="M3.5 6h5M6 3.5v5" stroke="#F5A623" strokeWidth="1.3" strokeLinecap="round"/>
                      </svg>
                      {c.system}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      ) : (
        /* ── 일반 탭: 좌우 2컬럼 레이아웃 ── */
        <div
          className="grid items-center"
          style={{ gridTemplateColumns: "1fr 1fr", gap: "80px", paddingTop: "60px" }}
        >
          {/* Left: text + case pill buttons */}
          <div>
            <h3
              className="font-bold text-[#0a0a0a] mb-5"
              style={{ fontSize: "clamp(26px, 2.6vw, 40px)", letterSpacing: "-0.8px", lineHeight: 1.2, whiteSpace: "pre-line" }}
            >
              {tab.title}
            </h3>
            <p className="mb-8 leading-[1.8]" style={{ fontSize: "15px", color: "#555" }}>
              {tab.description}
            </p>

            {/* Case 버튼 */}
            <div className="flex flex-wrap gap-3">
              {tab.cases.map((c, i) => {
                const isActive = activeCase === i;
                return (
                  <button
                    key={c.label}
                    onClick={() => setActiveCase(i)}
                    className="font-semibold transition-all duration-200"
                    style={{
                      padding: "10px 22px",
                      borderRadius: "100px",
                      fontSize: "14px",
                      border: isActive ? "2px solid #F5A623" : "2px solid rgba(0,0,0,0.12)",
                      background: isActive ? "#F5A623" : "transparent",
                      color: isActive ? "#fff" : "#555",
                      cursor: "pointer",
                      letterSpacing: ".2px",
                    }}
                  >
                    {c.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: 사이트 스크린샷 + 사이트 가기 버튼 */}
          <div>
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{ aspectRatio: "16/10", background: "#f0f0ee" }}
            >
              <Image
                key={displayImage}
                src={displayImage}
                alt={tab.imageAlt}
                fill
                className="object-cover transition-opacity duration-300"
              />
              {/* 사이트 가기 버튼 */}
              <Link
                href={siteHref}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute flex items-center gap-2 font-bold text-white transition-all hover:brightness-90 active:scale-95"
                style={{
                  bottom: 20, right: 20,
                  background: "#F5A623",
                  fontSize: "14px",
                  padding: "12px 20px",
                  borderRadius: "100px",
                  letterSpacing: ".2px",
                  whiteSpace: "nowrap",
                }}
              >
                사이트 가기
                <span
                  className="inline-flex items-center justify-center rounded-full bg-white"
                  style={{ width: 24, height: 24 }}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 8L8 2M8 2H3M8 2V7" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
