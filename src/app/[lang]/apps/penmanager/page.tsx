import { Metadata } from "next";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const IMG = "/images/neosmartpen/apps/penmanager";

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.neosmartpen.penmanager.metadata;
  return { title: t.title, description: t.description };
}

export default async function PenManagerPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.neosmartpen.penmanager;

  return (
    <>
      <Header lang={lang} dict={dict.common.header} />

      <main>
        {/* S0: Hero - white bg, centered: logo + title + desc + download buttons */}
        <section className="bg-white" style={{ minHeight: 480 }}>
          <div className="max-w-[1080px] mx-auto px-4 py-16 flex flex-col items-center text-center">
            <Image
              src={`${IMG}/penmanager-logo-500x131-1.png`}
              alt="Pen Manager"
              width={300}
              height={79}
              className="object-contain mb-8"
            />
            <h2 className="text-[24px] lg:text-[32px] font-bold text-[#333] mb-4">
              {t.hero.subtitle}
            </h2>
            <p className="text-[15px] text-[#666] leading-relaxed max-w-[700px] mb-8">
              {t.hero.desc}
            </p>

            {/* Download buttons - Windows & Mac */}
            <div className="flex justify-center items-center gap-10 mb-6">
              <a
                href="https://storage.googleapis.com/neolab_common/PenManager_Setup.exe"
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
                <span className="text-[14px] text-[#666]">Windows</span>
              </a>
              <a
                href="https://storage.googleapis.com/neolab_common/PenManager.dmg"
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
                <span className="text-[14px] text-[#666]">Mac</span>
              </a>
            </div>

            <p className="text-[13px] text-[#999]">{t.hero.sysReq}</p>
          </div>
        </section>

        {/* Screenshot of Pen Manager */}
        <section className="bg-white pb-16">
          <div className="max-w-[1080px] mx-auto px-4">
            <Image
              src={`${IMG}/Pen_Manager_Slide_03-1-1024x725-1.jpg`}
              alt="Pen Manager Screenshot"
              width={1024}
              height={725}
              className="w-full object-contain rounded-lg"
            />
          </div>
        </section>

        {/* S1: Convenient PC - Smartpen Connection */}
        <section className="bg-white py-16">
          <div className="max-w-[1080px] mx-auto px-4 text-center">
            <h2 className="text-[28px] lg:text-[36px] font-bold text-[#333] mb-4">
              {t.s1.title}
            </h2>
            <p className="text-[15px] text-[#666] leading-relaxed max-w-[700px] mx-auto mb-2">
              {t.s1.desc}
            </p>
            <p className="text-[14px] text-[#999] max-w-[700px] mx-auto">
              {t.s1.descSub}
            </p>
          </div>
        </section>

        {/* S2: Grida board integration - with GIF */}
        <section className="bg-[#f7f7f7] py-16 lg:py-20">
          <div className="max-w-[1080px] mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="w-full lg:w-1/2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${IMG}/gridaboard_usage_01.gif`}
                  alt="Grida board usage"
                  className="w-full object-contain rounded-lg"
                />
              </div>
              <div className="w-full lg:w-1/2">
                <h2 className="text-[22px] lg:text-[28px] font-bold text-[#333] mb-3">
                  {t.s2.title}
                </h2>
                <p className="text-[18px] text-[#555] mb-6">
                  {t.s2.subtitle}
                </p>
                <a
                  href="https://gridaboard.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-[#2d2d2d] text-white text-[14px] font-medium hover:bg-[#444] transition-colors mb-4"
                >
                  {t.s2.cta}
                </a>
                <p className="text-[12px] text-[#999] italic">
                  {t.s2.note}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* S3: Purchase CTA - gray bg */}
        <section className="bg-[#f4f4f4] py-20">
          <div className="max-w-[1080px] mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 flex justify-center">
              <Image
                src={`${IMG}/Pen_Manager_Slide_09_Transparent_Background-768x768-1.png`}
                alt="Neo Smartpen products"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h2 className="text-[24px] lg:text-[30px] font-bold text-[#333] mb-4">
                {t.s3.title}
              </h2>
              <p className="text-[15px] text-[#666] leading-relaxed mb-8">
                {t.s3.desc}
              </p>
              <a
                href="https://shop.neosmartpen.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-[#2d2d2d] text-white text-[14px] font-medium hover:bg-[#444] transition-colors"
              >
                {t.s3.cta}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer lang={lang} dict={dict.common.footer} />
    </>
  );
}
