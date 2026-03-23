import { Metadata } from "next";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import Image from "next/image";

const IMG = "/images/neosmartpen/apps/papertube";

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.neosmartpen.papertube.metadata;
  return { title: t.title, description: t.description };
}

export default async function PaperTubePage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.neosmartpen.papertube;

  const keywordItems = [
    { keyword: t.keywords.easy, desc: t.keywords.easyDesc },
    { keyword: t.keywords.short, desc: t.keywords.shortDesc },
    { keyword: t.keywords.light, desc: t.keywords.lightDesc },
    { keyword: t.keywords.save, desc: t.keywords.saveDesc },
    { keyword: t.keywords.simple, desc: t.keywords.simpleDesc },
    { keyword: t.keywords.quick, desc: t.keywords.quickDesc },
    { keyword: t.keywords.free, desc: t.keywords.freeDesc },
  ];

  const stepItems = [
    { num: "\u2776", label: t.steps.step1 },
    { num: "\u2777", label: t.steps.step2 },
    { num: "\u2778", label: t.steps.step3 },
    { num: "\u2779", label: t.steps.step4 },
  ];

  const hashtagItems = [
    t.hashtags.tag1,
    t.hashtags.tag2,
    t.hashtags.tag3,
    t.hashtags.tag4,
  ].filter(Boolean);

  return (
    <>
      {/* Hero section - dark background with parallax style */}
      <section className="relative bg-[#1a1a2e] text-white" style={{ minHeight: 500 }}>
        <div className="max-w-[1080px] mx-auto px-4 py-20 flex flex-col items-center text-center">
          <Image
            src={`${IMG}/papertube_hero.png`}
            alt="PaperTube"
            width={300}
            height={100}
            className="object-contain mb-8"
          />
          <h1 className="text-[36px] lg:text-[46px] font-bold mb-4">
            {t.hero.title}
          </h1>
          <h2 className="text-[18px] lg:text-[22px] font-medium text-gray-300 mb-8">
            {t.hero.subtitle}
          </h2>

          {/* Suspension notice (JA only) */}
          {t.suspensionNotice && (
            <div className="bg-red-600/90 text-white px-6 py-3 rounded-lg mb-8 max-w-[700px]">
              <p className="text-[14px] font-medium">{t.suspensionNotice}</p>
            </div>
          )}

          <p className="text-[16px] text-gray-200 leading-relaxed max-w-[700px] mb-3">
            {t.hero.desc}
          </p>
          <p className="text-[15px] text-gray-400 leading-relaxed max-w-[700px]">
            {t.hero.descSub}
          </p>
        </div>
      </section>

      {/* App download buttons */}
      <section className="bg-white py-12">
        <div className="max-w-[1080px] mx-auto px-4 flex flex-wrap justify-center items-center gap-6">
          <a
            href="https://play.google.com/store/apps/details?id=kr.neolab.papertube"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={`${IMG}/btn_googleplay.png`}
              alt="Google Play"
              width={180}
              height={54}
              className="object-contain hover:opacity-80 transition-opacity"
            />
          </a>
          <a
            href="https://itunes.apple.com/app/papertube/id1317169114"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={`${IMG}/btn_appstore.png`}
              alt="App Store"
              width={180}
              height={54}
              className="object-contain hover:opacity-80 transition-opacity"
            />
          </a>
        </div>
      </section>

      {/* Keywords feature grid: EASY / SHORT / LIGHT / SAVE / SIMPLE / QUICK / FREE */}
      <section className="bg-[#f7f7f7] py-16 lg:py-20">
        <div className="max-w-[1080px] mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {keywordItems.map((item) => (
              <div
                key={item.keyword}
                className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-[22px] lg:text-[26px] font-extrabold text-[#333] mb-2">
                  {item.keyword}
                </h3>
                <p className="text-[13px] text-[#666] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PIP - Picture in Picture */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-[1080px] mx-auto px-4 text-center">
          <h2 className="text-[28px] lg:text-[36px] font-bold text-[#333] mb-4">
            {t.pip.title}
          </h2>
          <p className="text-[16px] text-[#666] leading-relaxed max-w-[700px] mx-auto">
            {t.pip.desc}
          </p>
        </div>
      </section>

      {/* Content creation modes */}
      <section className="bg-[#f7f7f7] py-16 lg:py-20">
        <div className="max-w-[1080px] mx-auto px-4 text-center">
          <p className="text-[16px] text-[#555] leading-relaxed max-w-[800px] mx-auto mb-4">
            {t.content.desc}
          </p>
          <p className="text-[14px] text-[#777] leading-relaxed max-w-[800px] mx-auto">
            {t.content.descDetail}
          </p>
        </div>
      </section>

      {/* Hashtags section: #Create / #Explainer / #Video / #Like a boss */}
      {hashtagItems.length > 0 && (
        <section className="bg-[#222] py-14">
          <div className="max-w-[1080px] mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-8">
              {hashtagItems.map((tag) => (
                <span
                  key={tag}
                  className="text-[20px] lg:text-[28px] font-bold text-white/90"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Step-by-step usage guide */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-[1080px] mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stepItems.map((step) => (
              <div key={step.num} className="flex flex-col items-center text-center">
                <span className="text-[48px] text-[#4a90d9] mb-4">{step.num}</span>
                <p className="text-[15px] text-[#444] font-medium leading-snug">
                  {step.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S1: Studio in your hand */}
      <section className="bg-[#f7f7f7] py-16 lg:py-20">
        <div className="max-w-[1080px] mx-auto px-4 text-center">
          <h2 className="text-[24px] lg:text-[32px] font-bold text-[#333] mb-6 leading-snug">
            {t.s1.title}
          </h2>
          <p className="text-[15px] text-[#666] leading-relaxed max-w-[700px] mx-auto mb-4">
            {t.s1.desc}
          </p>
          <p className="text-[14px] text-[#888] leading-relaxed max-w-[700px] mx-auto mb-4">
            {t.s1.note}
          </p>
          <p className="text-[12px] text-[#999] max-w-[700px] mx-auto">
            {t.s1.bgNote}
          </p>
        </div>
      </section>

      {/* S2: Background color change */}
      <section className="bg-white py-16">
        <div className="max-w-[1080px] mx-auto px-4 text-center">
          <h3 className="text-[20px] lg:text-[26px] font-bold text-[#333] mb-4">
            {t.s2.bgChangeTitle}
          </h3>
          <p className="text-[14px] text-[#666] leading-relaxed max-w-[600px] mx-auto">
            {t.s2.bgChangeDesc}
          </p>
        </div>
      </section>

      {/* S3: Default supported features - 3 columns */}
      <section className="bg-[#f7f7f7] py-16 lg:py-20">
        <div className="max-w-[1080px] mx-auto px-4">
          <h2 className="text-[24px] lg:text-[32px] font-bold text-[#333] mb-12 text-center">
            {t.s3.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: t.s3.pip, desc: t.s3.pipDesc },
              { title: t.s3.mp4, desc: t.s3.mp4Desc },
              { title: t.s3.share, desc: t.s3.shareDesc },
            ].map((feat) => (
              <div key={feat.title} className="text-center px-4">
                <h3 className="text-[18px] font-semibold text-[#333] mb-3">{feat.title}</h3>
                <p className="text-[14px] text-[#666] leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S4: Package - Ncode A4 */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-[1080px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-[22px] lg:text-[28px] font-bold text-[#333] mb-6 leading-snug">
              {t.s4.title}
            </h2>
            <p className="text-[14px] text-[#666] leading-relaxed max-w-[700px] mx-auto">
              {t.s4.desc}
            </p>
          </div>
          {/* Package items - 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { label: t.s4.ncodeA4 },
              { label: t.s4.controller },
              { label: t.s4.stand },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center">
                <div className="w-full h-[200px] bg-[#f7f7f7] rounded-lg flex items-center justify-center mb-4">
                  <span className="text-[16px] text-[#999]">{item.label}</span>
                </div>
                <h3 className="text-[16px] font-semibold text-[#333]">{item.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S5: Controller */}
      <section className="bg-[#f7f7f7] py-16 lg:py-20">
        <div className="max-w-[1080px] mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <Image
                src={`${IMG}/controller.png`}
                alt="PaperTube Controller"
                width={818}
                height={601}
                className="object-contain w-full"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-[22px] lg:text-[28px] font-bold text-[#333] mb-6 leading-snug">
                {t.s5.title}
              </h2>
              <p className="text-[14px] text-[#666] leading-relaxed mb-6">
                {t.s5.desc}
              </p>
              <div className="space-y-2">
                <p className="text-[12px] text-[#999]">{t.s5.note}</p>
                <p className="text-[12px] text-[#999]">{t.s5.printerNote}</p>
                <p className="text-[12px] text-[#999]">{t.s5.deviceNote}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S6: CTA - PaperTube channel */}
      <section className="bg-[#111]" style={{ minHeight: 300 }}>
        <div className="max-w-[1080px] mx-auto px-4 py-20 flex flex-col items-center justify-center text-center">
          <h2 className="text-[24px] lg:text-[30px] font-bold text-white mb-4">
            {t.s6.title}
          </h2>
          <p className="text-[16px] text-gray-400 mb-8">
            {t.s6.subtitle}
          </p>
          <a
            href="https://www.youtube.com/@PaperTube"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border border-white text-white text-[14px] font-medium hover:bg-white hover:text-[#111] transition-colors"
          >
            {t.s6.cta}
          </a>
        </div>
      </section>
    </>
  );
}
