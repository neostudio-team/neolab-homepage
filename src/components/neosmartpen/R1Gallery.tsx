"use client";

import { useState } from "react";
import Image from "next/image";

const GALLERY_IMAGES = [
  { src: "https://shop.neosmartpen.com/cdn/shop/files/F45.png?v=1748305970", alt: "Neo Smartpen R1 – Black" },
  { src: "https://shop.neosmartpen.com/cdn/shop/files/KakaoTalk_20250103_114024634.png?v=1756790863", alt: "Neo Smartpen R1 – Sky Blue" },
  { src: "https://shop.neosmartpen.com/cdn/shop/products/221104-neolab_smartpen_-2147-278110.jpg?v=1756790863", alt: "Neo Smartpen R1 lifestyle" },
  { src: "https://shop.neosmartpen.com/cdn/shop/products/221104-neolab_smartpen_-2171-592434.jpg?v=1756790863", alt: "Neo Smartpen R1 writing" },
  { src: "https://shop.neosmartpen.com/cdn/shop/products/221104-neolab_smartpen_-2216-408424.jpg?v=1756790863", alt: "Neo Smartpen R1 detail" },
  { src: "https://shop.neosmartpen.com/cdn/shop/products/221104-neolab_smartpen_-2459.jpg?v=1756790863", alt: "Neo Smartpen R1 product" },
  { src: "https://shop.neosmartpen.com/cdn/shop/files/neo-smartpen-r1-extra-001.png?v=1756790863", alt: "Neo Smartpen R1 extra view 1" },
  { src: "https://shop.neosmartpen.com/cdn/shop/files/neo-smartpen-r1-extra-002.png?v=1756790863", alt: "Neo Smartpen R1 extra view 2" },
  { src: "https://shop.neosmartpen.com/cdn/shop/files/neo-smartpen-r1-extra-003.png?v=1756790863", alt: "Neo Smartpen R1 extra view 3" },
];

interface R1GalleryProps {
  tagline: string;
  price: string;
  colorBlack: string;
  colorSkyBlue: string;
  buyBtn: string;
  buyUrl: string;
  eyebrow: string;
}

export default function R1Gallery({ tagline, price, colorBlack, colorSkyBlue, buyBtn, buyUrl, eyebrow }: R1GalleryProps) {
  const [active, setActive] = useState(0);
  const [color, setColor] = useState<"black" | "skyblue">("black");

  const handleColor = (c: "black" | "skyblue") => {
    setColor(c);
    setActive(c === "skyblue" ? 1 : 0);
  };

  return (
    <section className="bg-white py-10">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left: Gallery */}
          <div className="w-full lg:w-1/2 flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-y-auto md:max-h-[560px]">
              {GALLERY_IMAGES.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`flex-shrink-0 w-[70px] h-[70px] border rounded-lg overflow-hidden transition-colors ${
                    i === active ? "border-[#171717] border-2" : "border-gray-200 hover:border-gray-400"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={70}
                    height={70}
                    className="w-full h-full object-contain bg-gray-50"
                    unoptimized
                  />
                </button>
              ))}
            </div>
            {/* Main image */}
            <div className="flex-1 bg-gray-50 rounded-xl flex items-center justify-center min-h-[400px] lg:min-h-[560px]">
              <Image
                src={GALLERY_IMAGES[active].src}
                alt={GALLERY_IMAGES[active].alt}
                width={560}
                height={560}
                className="w-full max-w-[480px] object-contain p-4"
                unoptimized
              />
            </div>
          </div>

          {/* Right: Product info */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <p className="text-sm text-gray-500 uppercase tracking-widest mb-2">{eyebrow}</p>
            <h1 className="text-[32px] lg:text-[40px] font-bold text-[#171717] leading-tight mb-3">
              NEO SMARTPEN R1
            </h1>
            <p className="text-[22px] font-semibold text-[#171717] mb-1">{tagline}</p>
            <p className="text-[24px] font-bold text-[#171717] mb-6">{price}</p>

            {/* Color selector */}
            <div className="mb-6">
              <p className="text-sm font-semibold text-[#171717] mb-3 uppercase tracking-wide">
                {color === "black" ? colorBlack : colorSkyBlue}
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => handleColor("black")}
                  className={`w-9 h-9 rounded-full border-2 transition-all bg-[#1a1a1a] ${
                    color === "black" ? "border-[#171717] ring-2 ring-offset-2 ring-[#171717]" : "border-gray-300"
                  }`}
                  title={colorBlack}
                />
                <button
                  onClick={() => handleColor("skyblue")}
                  className={`w-9 h-9 rounded-full border-2 transition-all bg-[#87CEEB] ${
                    color === "skyblue" ? "border-[#171717] ring-2 ring-offset-2 ring-[#171717]" : "border-gray-300"
                  }`}
                  title={colorSkyBlue}
                />
              </div>
            </div>

            {/* Buy button */}
            <a
              href={buyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#171717] text-white text-center font-semibold px-10 py-4 rounded-full hover:bg-[#333] transition-colors text-[15px] w-full lg:w-auto"
            >
              {buyBtn}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
