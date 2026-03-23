import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import LazySection from "@/components/LazySection";
import HeroSlider from "./HeroSlider";

const IMG = "/images/neosmartpen/main";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.neosmartpen.home.metadata;
  return { title: t.title, description: t.description };
}

/* ── Locale-specific image maps ── */
const heroSlides: Record<string, string[]> = {
  ko: [`${IMG}/ko/hero_slide1.jpg`, `${IMG}/ko/hero_slide2.jpg`],
  ja: [`${IMG}/ja/hero_slide1.jpg`, `${IMG}/ja/hero_slide2.jpg`, `${IMG}/ja/hero_slide3.jpg`],
};

const benefitImg: Record<string, string> = {
  en: `${IMG}/benefit02.png`,
  ko: `${IMG}/ko/benefit.png`,
  ja: `${IMG}/ja/benefit.png`,
};

const usecaseImg: Record<string, { src: string; unoptimized: boolean }> = {
  en: { src: `${IMG}/usecase_01.gif`, unoptimized: true },
  ko: { src: `${IMG}/usecase_01.gif`, unoptimized: true },
  ja: { src: `${IMG}/ja/usecase.jpg`, unoptimized: false },
};

const featureGrid: Record<string, string[]> = {
  en: [
    `${IMG}/smartpenFeaturePressure.jpg`,
    `${IMG}/smartpenFeatureAuto.jpg`,
    `${IMG}/smartpenFeatureBattery.jpg`,
    `${IMG}/smartpenFeatureOffline.jpg`,
  ],
  ko: [
    `${IMG}/ko/feature1.jpg`,
    `${IMG}/ko/feature2.jpg`,
    `${IMG}/ko/feature3.jpg`,
    `${IMG}/ko/feature4.jpg`,
  ],
  ja: [
    `${IMG}/ja/feature1.jpg`,
    `${IMG}/ja/feature2.jpg`,
    `${IMG}/ja/feature3.jpg`,
    `${IMG}/ja/feature4.jpg`,
  ],
};

const puiImg: Record<string, { src: string; unoptimized: boolean }> = {
  en: { src: `${IMG}/email_pui.gif`, unoptimized: true },
  ko: { src: `${IMG}/email_pui.gif`, unoptimized: true },
  ja: { src: `${IMG}/ja/pui.jpg`, unoptimized: false },
};

const notebookImgs = (lang: string) => {
  const base = [
    { src: `${IMG}/note05-1.jpg`, alt: "Notebook 5" },
    { src: `${IMG}/note04-1.jpg`, alt: "Notebook 4" },
    { src: lang === "ja" ? `${IMG}/ja/notebook_square.jpg` : `${IMG}/note01-1.jpg`, alt: "Notebook 3" },
    { src: `${IMG}/note03-1.jpg`, alt: "Notebook 2" },
    { src: `${IMG}/note02-1.jpg`, alt: "Notebook 1" },
  ];
  return base;
};

/* ── JA product cards data ── */
const jaProductCards = [
  { img: `${IMG}/ja/product_lamy.png`, title: "LAMY safari all star スマートペン", desc: "ドイツLAMY社のロングセラーモデル「safari」がスマートペンになって登場！", href: "/ja/neosmartpen/product-lamy" },
  { img: `${IMG}/ja/product_a1.png`, title: "Neo smartpen A1", desc: "ゲルインキで最上の書き心地", href: "/ja/neosmartpen/product-n2" },
  { img: `${IMG}/ja/product_m1.png`, title: "Neo smartpen M1+", desc: "フルスペックモデル", href: "/ja/neosmartpen/product-m1" },
  { img: `${IMG}/ja/product_dimo.png`, title: "Neo smartpen dimo", desc: "一番お手頃なスマートペン", href: "/ja/neosmartpen/product-dimo" },
];

export default async function NeoSmartpenHome({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.neosmartpen.home;

  const storeUrl =
    lang === "ko"
      ? "https://store.neosmartpen.com/"
      : lang === "ja"
        ? "https://neosmartpenjp.com/"
        : "https://shop.neosmartpen.com/";

  const slides = heroSlides[lang];
  const features = featureGrid[lang] || featureGrid.en;
  const pui = puiImg[lang] || puiImg.en;
  const benefit = benefitImg[lang] || benefitImg.en;
  const usecase = usecaseImg[lang] || usecaseImg.en;
  const notes = notebookImgs(lang);

  return (
    <>
      {/* S0: Hero */}
      {slides ? (
        <HeroSlider slides={slides} />
      ) : (
        <section className="relative w-full" style={{ height: 600, backgroundColor: "#f3f1ec" }}>
          <Link href={storeUrl} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
            <Image
              src={`${IMG}/hero_bg.jpg`}
              alt="Neo Smartpen Hero"
              fill
              className="object-contain"
              priority
            />
          </Link>
        </section>
      )}

      {/* JA only: Product cards */}
      {lang === "ja" && (
        <section className="bg-white py-12">
          <div className="max-w-[1080px] mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {jaProductCards.map((card) => (
                <Link key={card.title} href={card.href} className="group text-center">
                  <div className="mb-4 overflow-hidden">
                    <Image
                      src={card.img}
                      alt={card.title}
                      width={300}
                      height={300}
                      className="w-full object-contain group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <h4 className="text-[14px] font-bold text-[#333] mb-1">{card.title}</h4>
                  <p className="text-[12px] text-[#666]">{card.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* S1: #digital writing */}
      <section className="bg-white" style={{ paddingTop: 54, paddingBottom: 11 }}>
        <div className="max-w-[1080px] mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/2">
              <h2 className="text-[26px] font-medium text-[#333] mb-6">
                <strong>{t.digitalWriting.title}</strong>
              </h2>
              <Image
                src={benefit}
                alt="benefit"
                width={400}
                height={316}
                className="w-full max-w-[400px]"
              />
            </div>
            <div className="w-full lg:w-1/2 flex items-center">
              <Image
                src={usecase.src}
                alt="Neo Smartpen in action"
                width={800}
                height={450}
                className="w-full"
                unoptimized={usecase.unoptimized}
              />
            </div>
          </div>
        </div>
      </section>

      {/* S2: Highlight title */}
      <LazySection>
      <section className="bg-white" style={{ paddingTop: 7, paddingBottom: 0 }}>
        <div className="max-w-[1080px] mx-auto px-4">
          <h1 className="text-[26px] font-medium text-[#333]">
            <strong>{t.highlight.title}</strong>
          </h1>
        </div>
      </section>

      </LazySection>

      {/* S3: Highlight images */}
      <LazySection>
      <section className="bg-white" style={{ paddingTop: 8, paddingBottom: 14 }}>
        <div className="max-w-[1080px] mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="w-full lg:w-1/2">
              <Image
                src={`${IMG}/smartpenFeature00.jpg`}
                alt="Neo Smartpen Feature"
                width={900}
                height={900}
                className="w-full"
              />
            </div>
            <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
              {features.map((src, i) => (
                <Image
                  key={src}
                  src={src}
                  alt={`Feature ${i + 1}`}
                  width={450}
                  height={450}
                  className="w-full"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      </LazySection>

      {/* S4 Row 0: #Utilize - Apps accordion */}
      <LazySection>
      <section className="bg-white" style={{ paddingTop: 22, paddingBottom: 0 }}>
        <div className="max-w-[1080px] mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="w-full lg:w-[225px] shrink-0">
              <h2 className="text-[23px] font-medium text-[#333] mb-2">
                <strong>{t.utilize.title1}</strong>
              </h2>
              <h2 className="text-[23px] font-medium text-[#333]">
                <strong>{t.utilize.title2}</strong>
              </h2>
            </div>
            <div className="w-full lg:flex-1 flex justify-center">
              <Image
                src={`${IMG}/neostudio_layers03.png`}
                alt="Neo Studio layers"
                width={800}
                height={800}
                className="w-full max-w-[510px]"
              />
            </div>
            <div className="w-full lg:w-[225px] shrink-0">
              <div className="border-t border-gray-300">
                <details open className="group">
                  <summary className="cursor-pointer py-3 text-[14px] font-semibold text-[#333] flex justify-between items-center">
                    <h3 className="text-[14px] font-semibold m-0">{t.utilize.neoStudio}</h3>
                    <svg className="w-3 h-3 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </summary>
                  <p className="text-[13px] text-[#666] pb-4 leading-relaxed">{t.utilize.neoStudioDesc}</p>
                </details>
              </div>
              <div className="border-t border-gray-300">
                <details className="group">
                  <summary className="cursor-pointer py-3 text-[14px] font-semibold text-[#333] flex justify-between items-center">
                    <h3 className="text-[14px] font-semibold m-0">{t.utilize.gridaBoard}</h3>
                    <svg className="w-3 h-3 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </summary>
                  <div className="text-[13px] text-[#666] pb-4 leading-relaxed">
                    <p>{t.utilize.gridaBoardDesc}</p>
                    <Link href="https://gridaboard.io/" className="block mt-2 text-[#333] hover:text-[#39d2cc]" target="_blank" rel="noopener noreferrer">
                      {lang === "ko" ? "그리다보드로 이동 →" : lang === "ja" ? "Grida board へ →" : "Go to Grida Board →"}
                    </Link>
                  </div>
                </details>
              </div>
              <div className="border-t border-b border-gray-300">
                <details className="group">
                  <summary className="cursor-pointer py-3 text-[14px] font-semibold text-[#333] flex justify-between items-center">
                    <h3 className="text-[14px] font-semibold m-0">{t.utilize.paperTube}</h3>
                    <svg className="w-3 h-3 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </summary>
                  <p className="text-[13px] text-[#666] pb-4 leading-relaxed">{t.utilize.paperTubeDesc}</p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </section>

      </LazySection>

      {/* S4 Row 1: Easy to Use */}
      <LazySection>
      <section className="bg-white" style={{ paddingTop: 20, paddingBottom: 12 }}>
        <div className="max-w-[1080px] mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="w-full lg:w-[65%]">
              <Image
                src={pui.src}
                alt="Easy to Use PUI"
                width={800}
                height={450}
                className="w-full"
                unoptimized={pui.unoptimized}
              />
            </div>
            <div className="w-full lg:w-[35%]">
              <h2 className="text-[23px] font-medium text-[#333] mb-4">
                <strong>{t.easyToUse.title}</strong>
              </h2>
              <p className="text-[14px] text-[#666] leading-relaxed mb-3">{t.easyToUse.p1}</p>
              <p className="text-[14px] text-[#666] leading-relaxed">{t.easyToUse.p2}</p>
            </div>
          </div>
        </div>
      </section>

      </LazySection>

      {/* S5: Notebooks title */}
      <LazySection>
      <section className="bg-white" style={{ paddingTop: 16, paddingBottom: 0 }}>
        <div className="max-w-[1080px] mx-auto px-4">
          <h2 className="text-[26px] font-medium text-[#333] text-center">
            <strong>{t.notebooks.title}</strong>
          </h2>
        </div>
      </section>

      {/* S6: Notebooks description (skip for JA since p1/p2/p3 are empty) */}
      {lang !== "ja" && (
        <section className="bg-white" style={{ paddingTop: 6, paddingBottom: 54 }}>
          <div className="max-w-[1080px] mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="w-full lg:w-2/3">
                <p className="text-[14px] text-[#666] leading-relaxed mb-4">
                  <strong>{t.notebooks.p1}</strong>
                </p>
                <p className="text-[14px] text-[#666] leading-relaxed mb-4">{t.notebooks.p2}</p>
                <p className="text-[14px] text-[#666] leading-relaxed">{t.notebooks.p3}</p>
              </div>
              <div className="w-full lg:w-1/3 flex justify-center">
                <Image
                  src={`${IMG}/Screen-Shot-2022-02-09-at-11.09.44-PM.png`}
                  alt="Ncode certification mark"
                  width={156}
                  height={180}
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* S6b: News section (EN only) */}
      {lang === "en" && (
        <section className="bg-white" style={{ paddingTop: 20, paddingBottom: 30 }}>
          <div className="max-w-[1080px] mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <a href="https://neosmartpen.com/meet-hybriddocs/" className="group" target="_blank" rel="noopener noreferrer">
                <Image src={`${IMG}/news_hybriddocs.jpg`} alt="HybridDocs" width={400} height={250} className="w-full object-cover mb-3" />
                <h2 className="text-[16px] font-bold text-[#333] group-hover:text-[#39d2cc] leading-snug">
                  Meet HybridDocs™, Neo Studio&apos;s new copy &amp; paste feature.
                </h2>
              </a>
              <a href="https://neosmartpen.com/45-of-frustrations/" className="group" target="_blank" rel="noopener noreferrer">
                <Image src={`${IMG}/news_frustrations.jpg`} alt="45% of frustrations" width={400} height={250} className="w-full object-cover mb-3" />
                <h2 className="text-[16px] font-bold text-[#333] group-hover:text-[#39d2cc] leading-snug">
                  45% of frustrations
                </h2>
              </a>
              <a href="https://neosmartpen.com/neo-smartpen-reaches-the-australian-market/" className="group" target="_blank" rel="noopener noreferrer">
                <Image src={`${IMG}/news_australian.jpg`} alt="Australian market" width={400} height={250} className="w-full object-cover mb-3" />
                <h2 className="text-[16px] font-bold text-[#333] group-hover:text-[#39d2cc] leading-snug">
                  Neo smartpen reaches the Australian market
                </h2>
              </a>
            </div>
          </div>
        </section>
      )}

      </LazySection>

      {/* S7: Notebook images gallery */}
      <LazySection>
      <section className="bg-white" style={{ paddingTop: lang === "ja" ? 16 : 0, paddingBottom: 30 }}>
        <div className="max-w-[1080px] mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {notes.map((note) => (
              <Image
                key={note.src}
                src={note.src}
                alt={note.alt}
                width={450}
                height={450}
                className="w-full"
              />
            ))}
          </div>
        </div>
      </section>
      </LazySection>
    </>
  );
}
