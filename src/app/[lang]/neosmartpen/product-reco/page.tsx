import { Metadata } from "next";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import Image from "next/image";

const IMG = "/images/neosmartpen/products/reco";

const WIN_DOWNLOAD = "https://storage.googleapis.com/neolab_common/PenManager_Setup.exe";
const MAC_DOWNLOAD = "https://storage.googleapis.com/neolab_common/PenManager.dmg";
const SYS_REQ_URL = "https://neolabdev.gitbook.io/pen-manager/help/penmanager/system-requirements";

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.neosmartpen.productReco.metadata;
  return { title: t.title, description: t.description };
}

export default async function ProductRecoPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.neosmartpen.productReco;

  return (
    <>
      {/* S0: Hero */}
      <section className="bg-[#1a1a1a]" style={{ minHeight: 600 }}>
        <div className="max-w-[1080px] mx-auto px-4 py-20 flex flex-col items-center text-center">
          <Image
            src={`${IMG}/h1_white-1.png`}
            alt="RECO"
            width={200}
            height={60}
            className="object-contain mb-4"
          />
          <p className="text-[14px] text-[#aaa] tracking-wider uppercase mb-3">
            {t.hero.subtitle}
          </p>
          <h1 className="text-[32px] lg:text-[44px] font-bold text-white mb-4">
            {t.hero.title}
          </h1>
          <p className="text-[15px] text-[#ccc] leading-relaxed max-w-[600px] mb-10">
            {t.hero.desc}
          </p>
          <Image
            src={`${IMG}/reco.png`}
            alt="RECO product"
            width={600}
            height={400}
            className="object-contain"
            priority
          />
        </div>
      </section>

      {/* S1: Download */}
      <section className="bg-white" style={{ minHeight: 250 }}>
        <div className="max-w-[1080px] mx-auto px-4 flex flex-col items-center justify-center py-14" style={{ minHeight: 250 }}>
          <h2 className="text-[22px] lg:text-[26px] font-semibold text-[#333] mb-8">
            {t.download.title}
          </h2>
          <div className="flex flex-row gap-12 items-center">
            <a
              href={WIN_DOWNLOAD}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 hover:opacity-70 transition-opacity"
            >
              <Image
                src={`${IMG}/donwload_icon_windows.png`}
                alt="Windows"
                width={60}
                height={60}
                className="object-contain"
              />
              <span className="text-[13px] text-[#333] font-medium">[{t.download.windows}]</span>
            </a>
            <a
              href={MAC_DOWNLOAD}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 hover:opacity-70 transition-opacity"
            >
              <Image
                src={`${IMG}/donwload_icon_mac.png`}
                alt="Mac"
                width={60}
                height={60}
                className="object-contain"
              />
              <span className="text-[13px] text-[#333] font-medium">[{t.download.mac}]</span>
            </a>
          </div>
        </div>
      </section>

      {/* S2: Auto Connect feature */}
      <section className="bg-[#f5f5f5]">
        <div className="max-w-[1080px] mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <h3 className="text-[22px] lg:text-[26px] font-bold text-[#333] mb-4">
                {t.features.autoConnect}
              </h3>
              <p className="text-[15px] text-[#666] leading-relaxed">
                {t.features.autoConnectDesc}
              </p>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${IMG}/쓰고.gif`}
                alt="Writing with RECO"
                className="w-full max-w-[480px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* S3: Timestamp feature */}
      <section className="bg-white">
        <div className="max-w-[1080px] mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="w-full lg:w-1/2 flex justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${IMG}/터치하면.gif`}
                alt="Touch to play"
                className="w-full max-w-[480px] object-contain"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h3 className="text-[22px] lg:text-[26px] font-bold text-[#333] mb-4">
                {t.features.timestamp}
              </h3>
              <p className="text-[15px] text-[#666] leading-relaxed">
                {t.features.timestampDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S4: Voice Bookmark */}
      <section className="bg-[#1a1a1a]">
        <div className="max-w-[1080px] mx-auto px-4 py-24">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 flex justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${IMG}/음성이재생.gif`}
                alt="Voice playback"
                className="w-full max-w-[460px] object-contain rounded"
              />
            </div>
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h2 className="text-[28px] lg:text-[36px] font-bold text-white mb-6">
                {t.voiceBookmark.title}
              </h2>
              <p className="text-[15px] text-[#ccc] leading-relaxed">
                {t.voiceBookmark.desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S5: Pen Manager */}
      <section className="bg-white">
        <div className="max-w-[1080px] mx-auto px-4 py-20">
          {/* Top: logo + info | screenshot */}
          <div className="flex flex-col lg:flex-row items-start gap-12 mb-16">
            <div className="w-full lg:w-1/2">
              <Image
                src={`${IMG}/penmanager-logo-500x131-1.png`}
                alt="Pen Manager"
                width={300}
                height={79}
                className="object-contain mb-6"
              />
              <h3 className="text-[22px] font-bold text-[#333] mb-3">{t.penManager.title}</h3>
              <p className="text-[15px] text-[#666] leading-relaxed mb-4">{t.penManager.desc}</p>
              <a
                href={SYS_REQ_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-[#39d2cc] hover:underline"
              >
                {t.penManager.sysReq}
              </a>
              <div className="flex flex-row gap-4 mt-6">
                <a href={WIN_DOWNLOAD} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={`${IMG}/donwload_icon_windows.png`}
                    alt="Windows"
                    width={40}
                    height={40}
                    className="object-contain hover:opacity-70 transition-opacity"
                  />
                </a>
                <a href={MAC_DOWNLOAD} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={`${IMG}/donwload_icon_mac.png`}
                    alt="Mac"
                    width={40}
                    height={40}
                    className="object-contain hover:opacity-70 transition-opacity"
                  />
                </a>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <Image
                src={`${IMG}/Pen_Manager_Slide_05-1.jpg`}
                alt="Pen Manager screenshot"
                width={540}
                height={414}
                className="w-full object-contain rounded"
              />
            </div>
          </div>

          {/* How-to heading */}
          <div className="text-center mb-10">
            <h3 className="text-[20px] font-bold text-[#333] mb-2">{t.penManager.howTo}</h3>
            <p className="text-[14px] text-[#666]">{t.penManager.howToDesc}</p>
          </div>

          {/* 4 steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { img: "Pen_Manager_Slide_06_01-300x300-1.jpg", step: "step 1", text: t.penManager.step1 },
              { img: "Pen_Manager_Slide_06_02-1-300x300-1.jpg", step: "step 2", text: t.penManager.step2 },
              { img: "Pen_Manager_Slide_06_03-1-300x300-1.jpg", step: "step 3", text: t.penManager.step3 },
              { img: "Pen_Manager_Slide_06_04-300x300-1.jpg", step: "step 4", text: t.penManager.step4 },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <Image
                  src={`${IMG}/${item.img}`}
                  alt={item.step}
                  width={250}
                  height={250}
                  className="w-full object-contain mb-3"
                />
                <p className="text-[14px] font-bold text-[#39d2cc] mb-1">{item.step}</p>
                <p className="text-[13px] text-[#666] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S6: Use Cases */}
      <section className="bg-[#f5f5f5]">
        <div className="max-w-[1080px] mx-auto px-4 py-20">
          <p className="text-[14px] text-[#39d2cc] mb-4 text-center">{t.useCases.tag1}</p>
          <h3 className="text-[24px] lg:text-[28px] font-bold text-[#333] mb-12 text-center">
            {t.useCases.useCase1}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${IMG}/해외영업1.gif`}
                alt="Conference call"
                className="w-full max-w-[500px] object-contain rounded"
              />
            </div>
            <div className="flex justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${IMG}/해외영업2.gif`}
                alt="Customer notes"
                className="w-full max-w-[500px] object-contain rounded"
              />
            </div>
          </div>
        </div>
      </section>

      {/* S7: Specs */}
      <section className="bg-white">
        <div className="max-w-[1080px] mx-auto px-4 py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: `${IMG}/장점1.png`, title: t.specs.memory, desc: t.specs.memoryDesc },
              { icon: `${IMG}/장점2.png`, title: t.specs.quality, desc: t.specs.qualityDesc },
              { icon: `${IMG}/장점4.png`, title: t.specs.weight, desc: t.specs.weightDesc },
              { icon: `${IMG}/장점4.png`, title: t.specs.battery, desc: t.specs.batteryDesc },
            ].map((spec) => (
              <div key={spec.title} className="text-center">
                <Image
                  src={spec.icon}
                  alt={spec.title}
                  width={60}
                  height={60}
                  className="mx-auto mb-4 object-contain"
                />
                <h4 className="text-[16px] font-bold text-[#333] mb-2">{spec.title}</h4>
                <p className="text-[13px] text-[#666] leading-relaxed">{spec.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S8: Purchase CTA */}
      <section className="bg-[#f5f5f5]">
        <div className="max-w-[1080px] mx-auto px-4 py-20 flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src={`${IMG}/Pen_Manager_Slide_09_Transparent_Background-768x768-1.png`}
              alt="RECO product"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h3 className="text-[24px] lg:text-[28px] font-bold text-[#333] mb-4">
              {t.purchase.title}
            </h3>
            <p className="text-[15px] text-[#666] leading-relaxed mb-6">
              {t.purchase.desc}
            </p>
            <a
              href={lang === "ko" ? "https://smartstore.naver.com/neosmartpen" : lang === "ja" ? "https://neosmartpenjp.com/" : "https://shop.neosmartpen.com/"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-[#333] text-white text-[14px] font-medium hover:bg-[#555] transition-colors rounded"
            >
              {t.purchase.button}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
