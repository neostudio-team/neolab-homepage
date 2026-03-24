import { Metadata } from "next";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import Image from "next/image";

const IMG = {
  hero: "https://shop.neosmartpen.com/cdn/shop/files/F45.png?v=1748305970",
  feature1: "https://shop.neosmartpen.com/cdn/shop/files/221104-neolab_smartpen_-2234_1.png?v=1756790290",
  feature2: "https://shop.neosmartpen.com/cdn/shop/files/221104-neolab_smartpen_-2378_1.png?v=1756790344",
  lifestyle: "https://shop.neosmartpen.com/cdn/shop/products/221104-neolab_smartpen_-2171-592434.jpg?v=1756790863",
  penMouse: "https://shop.neosmartpen.com/cdn/shop/files/221104-neolab_smartpen_-2408_1.png?v=1756790437",
  box: "https://shop.neosmartpen.com/cdn/shop/files/1_bf147d36-cecc-47e6-89bc-d6bd0c372927.jpg?v=1756790863",
  neoStudio: "https://shop.neosmartpen.com/cdn/shop/files/25.png?v=1756700568",
  gridaboard: "https://shop.neosmartpen.com/cdn/shop/files/26.png?v=1756700529",
};

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.neosmartpen.productR1.metadata;
  return { title: t.title, description: t.description };
}

export default async function ProductR1Page({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.neosmartpen.productR1;

  const storeUrl =
    lang === "ko"
      ? "https://store.neosmartpen.com/goods/goods_view.php?goodsNo=454"
      : lang === "ja"
      ? "https://neosmartpenjp.com/"
      : "https://shop.neosmartpen.com/products/neo-smartpen-r1";

  return (
    <>
      {/* S1: Hero */}
      <section className="bg-[#111] text-white">
        <div className="max-w-[1200px] mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 flex justify-center order-2 lg:order-1">
            <Image
              src={IMG.hero}
              alt="Neo Smartpen R1"
              width={500}
              height={500}
              className="object-contain w-full max-w-[420px]"
              unoptimized
            />
          </div>
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <p className="text-[#ff4e00] text-xs font-bold tracking-[0.2em] uppercase mb-5">Neo Smartpen R1</p>
            <h1 className="text-[40px] lg:text-[56px] font-black leading-tight mb-6 whitespace-pre-line">
              {t.hero.headline}
            </h1>
            <p className="text-gray-400 text-[16px] leading-relaxed mb-10 max-w-[440px]">{t.hero.desc}</p>
            <a
              href={storeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#ff4e00] text-white font-bold px-10 py-4 hover:bg-[#e04400] transition-colors text-sm tracking-widest uppercase"
            >
              {t.hero.buyBtn}
            </a>
          </div>
        </div>
      </section>

      {/* S2: Digitize & Transcribe */}
      <section className="bg-white">
        <div className="max-w-[1200px] mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <Image
              src={IMG.feature1}
              alt="Digitize and Transcribe"
              width={600}
              height={500}
              className="w-full object-contain rounded-lg"
              unoptimized
            />
          </div>
          <div className="w-full lg:w-1/2">
            <p className="text-[#ff4e00] text-xs font-bold tracking-[0.2em] uppercase mb-4">{t.digitize.tag}</p>
            <h2 className="text-[30px] lg:text-[38px] font-black text-[#111] leading-tight mb-5">{t.digitize.title}</h2>
            <p className="text-[#555] text-[16px] leading-relaxed mb-6">{t.digitize.desc}</p>
            <span className="inline-block bg-[#f0f0f0] text-[#333] text-sm font-semibold px-4 py-2 rounded-full">
              {t.digitize.badge}
            </span>
          </div>
        </div>
      </section>

      {/* S3: Edit & Export */}
      <section className="bg-[#f7f7f7]">
        <div className="max-w-[1200px] mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <p className="text-[#ff4e00] text-xs font-bold tracking-[0.2em] uppercase mb-4">{t.edit.tag}</p>
            <h2 className="text-[30px] lg:text-[38px] font-black text-[#111] leading-tight mb-5">{t.edit.title}</h2>
            <p className="text-[#555] text-[16px] leading-relaxed">{t.edit.desc}</p>
          </div>
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <Image
              src={IMG.feature2}
              alt="Edit and Export"
              width={600}
              height={500}
              className="w-full object-contain rounded-lg"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* S4: Stats bar */}
      <section className="bg-[#111] text-white py-14">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-[48px] font-black text-[#ff4e00] leading-none mb-2">{t.stats.battery}</p>
              <p className="text-sm text-gray-400 uppercase tracking-widest">{t.stats.batteryLabel}</p>
            </div>
            <div>
              <p className="text-[48px] font-black text-[#ff4e00] leading-none mb-2">{t.stats.pages}</p>
              <p className="text-sm text-gray-400 uppercase tracking-widest">{t.stats.pagesLabel}</p>
            </div>
            <div>
              <p className="text-[48px] font-black text-[#ff4e00] leading-none mb-2">{t.stats.weight}</p>
              <p className="text-sm text-gray-400 uppercase tracking-widest">{t.stats.weightLabel}</p>
            </div>
            <div>
              <p className="text-[48px] font-black text-[#ff4e00] leading-none mb-2">{t.stats.charging}</p>
              <p className="text-sm text-gray-400 uppercase tracking-widest">{t.stats.chargingLabel}</p>
            </div>
          </div>
        </div>
      </section>

      {/* S5: Lifestyle full-width */}
      <section>
        <Image
          src={IMG.lifestyle}
          alt="Neo Smartpen R1 lifestyle"
          width={1920}
          height={900}
          className="w-full object-cover"
          unoptimized
        />
      </section>

      {/* S6: Pen Mouse Mode */}
      <section className="bg-white">
        <div className="max-w-[1200px] mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <Image
              src={IMG.penMouse}
              alt="Pen Mouse Mode"
              width={600}
              height={500}
              className="w-full object-contain rounded-lg"
              unoptimized
            />
          </div>
          <div className="w-full lg:w-1/2">
            <p className="text-[#ff4e00] text-xs font-bold tracking-[0.2em] uppercase mb-4">{t.penMouse.tag}</p>
            <h2 className="text-[30px] lg:text-[38px] font-black text-[#111] leading-tight mb-5">{t.penMouse.title}</h2>
            <p className="text-[#555] text-[16px] leading-relaxed">{t.penMouse.desc}</p>
          </div>
        </div>
      </section>

      {/* S7: Specs table */}
      <section className="bg-[#f7f7f7] py-20">
        <div className="max-w-[760px] mx-auto px-6">
          <h2 className="text-[28px] font-black text-[#111] text-center mb-12">{t.specs.title}</h2>
          <table className="w-full text-[15px]">
            <tbody>
              {[
                [t.specs.model, t.specs.modelVal],
                [t.specs.weight, t.specs.weightVal],
                [t.specs.size, t.specs.sizeVal],
                [t.specs.bluetooth, t.specs.bluetoothVal],
                [t.specs.battery, t.specs.batteryVal],
                [t.specs.usage, t.specs.usageVal],
                [t.specs.memory, t.specs.memoryVal],
                [t.specs.charging, t.specs.chargingVal],
                [t.specs.apps, t.specs.appsVal],
                [t.specs.os, t.specs.osVal],
                [t.specs.colors, t.specs.colorsVal],
              ].map(([label, value]) => (
                <tr key={label} className="border-b border-gray-200">
                  <td className="py-4 pr-8 text-[#888] font-semibold w-[180px]">{label}</td>
                  <td className="py-4 text-[#333]">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* S8: Box contents */}
      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src={IMG.box}
              alt="Box contents"
              width={560}
              height={420}
              className="w-full max-w-[500px] object-contain rounded-xl"
              unoptimized
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-[28px] font-black text-[#111] mb-8">{t.boxTitle}</h2>
            <div className="space-y-4">
              {t.composition.map((item: string, i: number) => (
                <p key={i} className="text-[16px] text-[#444] leading-relaxed border-b border-gray-100 pb-3">{item}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* S9: Companion Apps */}
      <section className="bg-[#f7f7f7] py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[28px] font-black text-[#111] text-center mb-12">{t.appsTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <Image
                src={IMG.neoStudio}
                alt="Neo Studio 2"
                width={600}
                height={360}
                className="w-full object-cover"
                unoptimized
              />
              <div className="p-8">
                <h3 className="text-[20px] font-black text-[#111] mb-3">{t.neoStudio.title}</h3>
                <p className="text-[#666] text-[15px] leading-relaxed">{t.neoStudio.desc}</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <Image
                src={IMG.gridaboard}
                alt="Grida Board"
                width={600}
                height={360}
                className="w-full object-cover"
                unoptimized
              />
              <div className="p-8">
                <h3 className="text-[20px] font-black text-[#111] mb-3">{t.gridaboard.title}</h3>
                <p className="text-[#666] text-[15px] leading-relaxed">{t.gridaboard.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S10: CTA */}
      <section className="bg-[#111] py-24 text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-[#ff4e00] text-xs font-bold tracking-[0.2em] uppercase mb-4">Neo Smartpen R1</p>
          <h2 className="text-white text-[36px] lg:text-[48px] font-black mb-6 whitespace-pre-line">
            {t.hero.headline}
          </h2>
          <p className="text-gray-400 text-[16px] mb-10 max-w-[480px] mx-auto">{t.hero.desc}</p>
          <a
            href={storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#ff4e00] text-white font-bold px-12 py-4 hover:bg-[#e04400] transition-colors text-sm tracking-widest uppercase"
          >
            {t.findOutMore}
          </a>
        </div>
      </section>
    </>
  );
}
