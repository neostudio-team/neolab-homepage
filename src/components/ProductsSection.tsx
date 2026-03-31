"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface Product {
  name: string;
  desc: string;
  href: string;
  image: string;
}

interface ProductsSectionProps {
  dict: {
    tag: string;
    items: readonly Product[];
  };
}

export default function ProductsSection({ dict }: ProductsSectionProps) {
  const items = dict.items;
  const total = items.length;
  const [active, setActive] = useState(0);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % total);
  }, [total]);

  /* 자동 슬라이드 — 3초마다 왼→오른쪽 */
  useEffect(() => {
    const id = setInterval(next, 3000);
    return () => clearInterval(id);
  }, [next]);

  /* 각 카드의 상대적 위치 계산 */
  function offset(i: number) {
    let d = i - active;
    // 원형 처리
    if (d > total / 2) d -= total;
    if (d < -total / 2) d += total;
    return d;
  }

  return (
    <section className="bg-white overflow-hidden" style={{ padding: "80px 0 100px" }}>
      {/* 헤더 — 가운데 정렬 */}
      <div className="flex items-center justify-center gap-3 mb-14">
        <div
          className="rounded-full border-2 flex-shrink-0"
          style={{ width: 18, height: 18, borderColor: "#F5A623" }}
        />
        <h2
          className="font-bold text-[#0a0a0a]"
          style={{ fontSize: "clamp(28px, 3vw, 48px)", letterSpacing: "-0.5px", lineHeight: 1.1 }}
        >
          {dict.tag}
        </h2>
      </div>

      {/* 캐러셀 */}
      <div className="relative flex items-center justify-center" style={{ height: "clamp(380px, 40vw, 560px)" }}>
        {items.map((product, i) => {
          const d = offset(i);
          const isCenter = d === 0;
          const isAdjacent = Math.abs(d) === 1;
          const isVisible = Math.abs(d) <= 2;

          if (!isVisible) return null;

          /* 위치/스타일 계산 */
          const cardW = isCenter ? 340 : 280;
          const translateX = d * (isCenter ? 360 : 300);
          const opacity = isCenter ? 1 : isAdjacent ? 0.45 : 0.2;
          const scale = isCenter ? 1 : isAdjacent ? 0.9 : 0.8;
          const zIndex = isCenter ? 10 : isAdjacent ? 5 : 1;

          return (
            <div
              key={i}
              onClick={() => setActive(i)}
              className="absolute rounded-2xl overflow-hidden cursor-pointer"
              style={{
                width: cardW,
                background: "#F5F5F5",
                transform: `translateX(${translateX}px) scale(${scale})`,
                opacity,
                zIndex,
                transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                boxShadow: isCenter ? "0 8px 40px rgba(0,0,0,0.12)" : "none",
              }}
            >
              {/* 카드 제목 — 상단 */}
              <div className="px-6 pt-6 pb-3">
                <div
                  className="font-bold text-[#0a0a0a] text-center"
                  style={{ fontSize: isCenter ? "22px" : "18px", letterSpacing: "-0.3px" }}
                >
                  {product.name}
                </div>
                {isCenter && product.desc && (
                  <div
                    className="text-[#888] text-center mt-1"
                    style={{ fontSize: "13px", lineHeight: 1.5 }}
                  >
                    {product.desc}
                  </div>
                )}
              </div>

              {/* 이미지 */}
              <div
                className="flex items-center justify-center overflow-hidden"
                style={{
                  height: isCenter ? "clamp(220px, 22vw, 320px)" : "clamp(180px, 18vw, 260px)",
                  padding: product.name === "Service" ? "0" : "20px",
                  background: product.name === "Service" ? "#3880EF" : "#F5F5F5",
                }}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={320}
                  height={320}
                  className="w-full h-full transition-transform duration-500"
                  style={{
                    objectFit: product.name === "Service" ? "cover" : "contain",
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* 인디케이터 도트 */}
      <div className="flex justify-center gap-2 mt-8">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="rounded-full transition-all duration-300"
            style={{
              width: active === i ? 24 : 8,
              height: 8,
              background: active === i ? "#F5A623" : "#D0D0D0",
            }}
          />
        ))}
      </div>
    </section>
  );
}
