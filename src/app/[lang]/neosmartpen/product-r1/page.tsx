import { Metadata } from "next";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import Image from "next/image";

const MAIN_IMG = "https://godomall.speedycdn.net/a3e0816e535b692bdb0c883cfc3696b7/goods/454/image/main/454_main_053.png";
const DETAIL_IMG_1 = "https://cdn-pro-web-250-117.cdn-nhncommerce.com/storetr9351_godomall_com/data/editor/goods/250707/fc98c66b4c804803b19152d2aac8d712_144131.jpg";
const DETAIL_IMG_2 = "https://cdn-pro-web-250-117.cdn-nhncommerce.com/storetr9351_godomall_com/data/editor/goods/250107/eb35ee60489825b55ea96495e7f1b321_142112.jpg";
const DETAIL_IMG_3 = "https://cdn-pro-web-250-117.cdn-nhncommerce.com/storetr9351_godomall_com/data/editor/goods/250707/1a219078c0dddef86b7e27a69d502697_152039.jpg";

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
      : "https://shop.neosmartpen.com/";

  return (
    <>
      {/* S0: Hero */}
      <section className="bg-[#1a1a1a] text-white">
        <div className="max-w-[1080px] mx-auto px-4 pt-16 pb-12 flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <p className="text-[#ff4e00] uppercase tracking-widest text-sm font-semibold mb-4">Neo Smartpen R1</p>
            <h1 className="text-[36px] lg:text-[52px] font-black leading-tight mb-4">
              {t.hero.subtitle}
            </h1>
            <p className="text-gray-400 text-[16px] leading-relaxed">{t.hero.tagline}</p>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src={MAIN_IMG}
              alt="Neo Smartpen R1"
              width={520}
              height={520}
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* S1: Key Features - 3 cols */}
      <section className="bg-white py-16">
        <div className="max-w-[1080px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="w-16 h-16 bg-[#f5f5f5] rounded-full flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-[#ff4e00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <h3 className="text-[16px] font-black text-[#333] uppercase tracking-wider mb-3">{t.features.lightweight}</h3>
              <p className="text-[13px] text-[#666] leading-relaxed">{t.features.lightweightDesc}</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-[#f5f5f5] rounded-full flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-[#ff4e00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-[16px] font-black text-[#333] uppercase tracking-wider mb-3">{t.features.battery}</h3>
              <p className="text-[13px] text-[#666] leading-relaxed">{t.features.batteryDesc1}</p>
              <p className="text-[13px] text-[#666] leading-relaxed">{t.features.batteryDesc2}</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-[#f5f5f5] rounded-full flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-[#ff4e00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
              </div>
              <h3 className="text-[16px] font-black text-[#333] uppercase tracking-wider mb-3">{t.features.bluetooth}</h3>
              <p className="text-[13px] text-[#666] leading-relaxed">{t.features.bluetoothDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* S2: Detail image 1 - full width */}
      <section className="bg-[#f8f8f8]">
        <Image src={DETAIL_IMG_1} alt="Neo Smartpen R1 detail" width={1920} height={800} className="w-full object-cover" />
      </section>

      {/* S3: Detail image 2 */}
      <section className="bg-white">
        <Image src={DETAIL_IMG_2} alt="Neo Smartpen R1 features" width={1920} height={800} className="w-full object-cover" />
      </section>

      {/* S4: Specs table */}
      <section className="bg-[#f8f8f8] py-16">
        <div className="max-w-[720px] mx-auto px-4">
          <h2 className="text-[24px] font-bold text-[#333] text-center mb-10">{t.specs.title}</h2>
          <table className="w-full text-[14px]">
            <tbody>
              {[
                [t.specs.model, t.specs.modelVal],
                [t.specs.weight, t.specs.weightVal],
                [t.specs.size, t.specs.sizeVal],
                [t.specs.bluetooth, t.specs.bluetoothVal],
                [t.specs.battery, t.specs.batteryVal],
                [t.specs.usage, t.specs.usageVal],
                [t.specs.memory, t.specs.memoryVal],
                [t.specs.apps, t.specs.appsVal],
                [t.specs.os, t.specs.osVal],
                [t.specs.colors, t.specs.colorsVal],
              ].map(([label, value]) => (
                <tr key={label} className="border-b border-gray-200">
                  <td className="py-3 pr-6 text-[#888] font-medium w-[160px]">{label}</td>
                  <td className="py-3 text-[#333]">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* S5: Composition */}
      <section className="bg-white py-16">
        <div className="max-w-[1080px] mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image src={DETAIL_IMG_3} alt="R1 composition" width={500} height={400} className="object-contain rounded-lg" />
          </div>
          <div className="w-full lg:w-1/2">
            <h3 className="text-[18px] font-bold text-[#333] mb-6">Box Contents</h3>
            <div className="text-[15px] text-[#555] leading-loose">
              {t.composition.map((item: string, i: number) => (
                <p key={i}>{item}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* S6: Use Cases */}
      <section className="bg-[#f8f8f8] py-16">
        <div className="max-w-[1080px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <p className="text-[11px] text-[#39d2cc] font-semibold mb-2">{t.useCases.touch.tag}</p>
              <h3 className="text-[16px] font-bold text-[#333] mb-3">{t.useCases.touch.title}</h3>
              <p className="text-[13px] text-[#666] leading-relaxed">{t.useCases.touch.desc}</p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <p className="text-[11px] text-[#39d2cc] font-semibold mb-2">{t.useCases.store.tag}</p>
              <h3 className="text-[16px] font-bold text-[#333] mb-3">{t.useCases.store.title}</h3>
              <p className="text-[13px] text-[#666] leading-relaxed">{t.useCases.store.desc}</p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <p className="text-[11px] text-[#39d2cc] font-semibold mb-2">{t.useCases.smartwork.tag}</p>
              <h3 className="text-[16px] font-bold text-[#333] mb-3">{t.useCases.smartwork.title}</h3>
              <p className="text-[13px] text-[#666] leading-relaxed">{t.useCases.smartwork.desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* S7: CTA */}
      <section className="bg-[#1a1a1a] py-16 text-center">
        <div className="max-w-[1080px] mx-auto px-4">
          <h2 className="text-white text-[28px] font-bold mb-4">Neo Smartpen R1</h2>
          <p className="text-gray-400 text-[15px] mb-8">{t.hero.subtitle}</p>
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
