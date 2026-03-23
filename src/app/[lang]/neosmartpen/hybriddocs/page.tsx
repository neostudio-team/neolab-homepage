import { Metadata } from "next";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import Image from "next/image";

const IMG = "/images/neosmartpen/solutions/hybriddocs";

const NEO_STUDIO_URL = "https://app.neostudio.io/";
const STORE_URL = "https://store.neosmartpen.com/goods/goods_list.php?NbParam=576c6f3d&cateCd=008";
const GITBOOK_URL = "https://neolabdev.gitbook.io/pen-manager/help/neostudio-web/Hybrid-Docs";
const BLOG_URL = "https://blog.naver.com/neosmartpen/222812826868";

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.neosmartpen.hybriddocs.metadata;
  return { title: t.title, description: t.description };
}

export default async function HybridDocsPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.neosmartpen.hybriddocs;

  return (
    <>
      {/* S0: Hero */}
      <section className="bg-[#1a1a2e] text-white overflow-hidden" style={{ minHeight: 560 }}>
        <div className="max-w-[1080px] mx-auto px-4 py-16 flex flex-col lg:flex-row items-center gap-8" style={{ minHeight: 560 }}>
          <div className="w-full lg:w-1/2 z-10 text-center lg:text-left">
            <h1 className="text-[36px] lg:text-[46px] font-bold leading-tight mb-6">
              {t.hero.subtitle}
              <br />
              <span className="text-[18px] lg:text-[20px] font-normal text-gray-400">
                {t.hero.title}&trade;
              </span>
            </h1>
            <p className="text-[15px] text-gray-300 leading-relaxed mb-8 max-w-[480px] mx-auto lg:mx-0">
              {t.hero.desc}
            </p>
            <a
              href={NEO_STUDIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-[#39d2cc] text-white text-[14px] font-medium hover:bg-[#2db8b3] transition-colors rounded"
            >
              {t.hero.cta}
            </a>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center z-10">
            <Image
              src={`${IMG}/hybriddocs_hero.png`}
              alt="HybridDocs"
              width={520}
              height={400}
              className="object-contain max-h-[400px]"
              priority
            />
          </div>
        </div>
      </section>

      {/* S1: What is HybridDocs */}
      <section className="bg-white">
        <div className="max-w-[1080px] mx-auto px-4 py-20 text-center">
          <h2 className="text-[26px] lg:text-[32px] font-bold text-[#333] mb-6">
            {t.about.title}
          </h2>
          <p className="text-[15px] text-[#666] leading-[1.8] max-w-[700px] mx-auto">
            {t.about.desc}
          </p>
        </div>
      </section>

      {/* S2: Feature - Freedom / Limitless */}
      <section className="bg-[#f5f5f5]">
        <div className="max-w-[1080px] mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 flex justify-center">
              <Image
                src={`${IMG}/03_자유도.png`}
                alt={t.features.bridge}
                width={480}
                height={360}
                className="w-full max-w-[480px] object-contain"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h5 className="text-[14px] text-[#39d2cc] font-semibold mb-2">
                {t.features.bridge}
              </h5>
              <h4 className="text-[22px] lg:text-[26px] font-bold text-[#333] mb-4">
                {t.features.bridgeTitle}
              </h4>
              <p className="text-[15px] text-[#666] leading-relaxed">
                {t.features.bridgeDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S3: Feature - Efficiency */}
      <section className="bg-white">
        <div className="max-w-[1080px] mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="w-full lg:w-1/2 flex justify-center">
              <Image
                src={`${IMG}/04_CnAezs.png`}
                alt={t.features.productivity}
                width={480}
                height={360}
                className="w-full max-w-[480px] object-contain"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h5 className="text-[14px] text-[#39d2cc] font-semibold mb-2">
                {t.features.productivity}
              </h5>
              <h4 className="text-[22px] lg:text-[26px] font-bold text-[#333] mb-2">
                {t.features.productivityTitle}
              </h4>
              <h4 className="text-[22px] lg:text-[26px] font-bold text-[#333] mb-4">
                {t.features.productivitySubtitle}
              </h4>
              <p className="text-[15px] text-[#666] leading-relaxed">
                {t.features.productivityDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S4: Storytelling */}
      <section className="bg-[#f5f5f5]">
        <div className="max-w-[1080px] mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 flex justify-center">
              <Image
                src={`${IMG}/05-胶配府炮傅-角荤抗矫-1.png`}
                alt={t.storytelling.tag}
                width={480}
                height={360}
                className="w-full max-w-[480px] object-contain"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h5 className="text-[14px] text-[#39d2cc] font-semibold mb-2">
                {t.storytelling.tag}
              </h5>
              <h4 className="text-[22px] lg:text-[26px] font-bold text-[#333] mb-4">
                {t.storytelling.title}
              </h4>
              <p className="text-[15px] text-[#666] leading-relaxed">
                {t.storytelling.desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S5: Purchase CTA */}
      <section className="bg-white">
        <div className="max-w-[1080px] mx-auto px-4 py-16 text-center">
          <p className="text-[15px] text-[#666] leading-relaxed mb-6 max-w-[600px] mx-auto">
            {t.purchase.desc}
          </p>
          <a
            href={STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-[#333] text-white text-[14px] font-medium hover:bg-[#555] transition-colors rounded"
          >
            {t.purchase.button}
          </a>
        </div>
      </section>

      {/* S6: Supported Programs / Compatible With */}
      <section className="bg-[#f5f5f5]">
        <div className="max-w-[1080px] mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 flex justify-center">
              <Image
                src={`${IMG}/Screen-Shot-2022-07-15-at-2.08.29-PM-1-1.png`}
                alt={t.supported.title}
                width={480}
                height={300}
                className="w-full max-w-[480px] object-contain rounded-lg"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-[22px] lg:text-[26px] font-bold text-[#333] mb-4">
                {t.supported.title}
              </h2>
              <p className="text-[15px] text-[#666] leading-relaxed mb-6">
                {t.supported.desc}
              </p>
              <a
                href={GITBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2.5 border border-[#333] text-[#333] text-[14px] font-medium hover:bg-[#333] hover:text-white transition-colors rounded"
              >
                {t.supported.link}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* S7: How to Use */}
      <section className="bg-white">
        <div className="max-w-[1080px] mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
            <div className="w-full lg:w-1/2 flex justify-center">
              <Image
                src={`${IMG}/사용방법_투명.png`}
                alt={t.howToUse.title}
                width={480}
                height={400}
                className="w-full max-w-[480px] object-contain"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-[26px] lg:text-[32px] font-bold text-[#333] mb-4">
                {t.howToUse.title}
              </h2>
              <p className="text-[15px] text-[#666] leading-relaxed mb-6">
                {t.howToUse.desc}
              </p>
              <a
                href={NEO_STUDIO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-[#39d2cc] text-white text-[14px] font-medium hover:bg-[#2db8b3] transition-colors rounded"
              >
                {t.howToUse.cta}
              </a>
            </div>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: t.howToUse.step1title, desc: t.howToUse.step1desc },
              { title: t.howToUse.step2title, desc: t.howToUse.step2desc },
              { title: t.howToUse.step3title, desc: t.howToUse.step3desc },
            ].map((step) => (
              <div key={step.title} className="text-center bg-[#f9f9f9] rounded-lg p-6">
                <h5 className="text-[16px] font-bold text-[#39d2cc] mb-3">
                  {step.title}
                </h5>
                <p className="text-[14px] text-[#666] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S8: Use Cases */}
      <section className="bg-[#f5f5f5]">
        <div className="max-w-[1080px] mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 flex justify-center">
              <Image
                src={`${IMG}/07-활용사례.png`}
                alt={t.useCases.title}
                width={480}
                height={360}
                className="w-full max-w-[480px] object-contain"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-[22px] lg:text-[26px] font-bold text-[#333] mb-4">
                {t.useCases.title}
              </h2>
              <p className="text-[15px] text-[#666] leading-relaxed mb-6">
                {t.useCases.desc}
              </p>
              <a
                href={BLOG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2.5 border border-[#333] text-[#333] text-[14px] font-medium hover:bg-[#333] hover:text-white transition-colors rounded"
              >
                {t.useCases.link}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* S9: DIY Ncode Template */}
      <section className="bg-white">
        <div className="max-w-[1080px] mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="w-full lg:w-1/2 flex justify-center">
              <Image
                src={`${IMG}/NcodeStoryBD_A4_ver1.png`}
                alt={t.diyNcode.title}
                width={400}
                height={300}
                className="w-full max-w-[400px] object-contain"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h1 className="text-[22px] lg:text-[26px] font-bold text-[#333] mb-4">
                {t.diyNcode.title}
              </h1>
              <p className="text-[15px] text-[#666] leading-relaxed mb-6">
                {t.diyNcode.desc}
              </p>
              <a
                href={`/${lang}/neosmartpen/ncode-pdf`}
                className="inline-block px-6 py-2.5 border border-[#333] text-[#333] text-[14px] font-medium hover:bg-[#333] hover:text-white transition-colors rounded"
              >
                {t.diyNcode.link}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
