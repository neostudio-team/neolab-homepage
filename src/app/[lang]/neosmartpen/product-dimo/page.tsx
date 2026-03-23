import { Metadata } from "next";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import Image from "next/image";

const IMG = "/images/neosmartpen/products/dimo";

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.neosmartpen.productDimo.metadata;
  return { title: t.title, description: t.description };
}

export default async function ProductDimoPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.neosmartpen.productDimo;

  return (
    <>
      {/* S0: Hero - warm gray bg with bg image */}
      <section
        className="bg-[#ebe7e5] bg-cover bg-center"
        style={{ backgroundImage: `url(${IMG}/m1_bg01.png)` }}
      >
        <div className="max-w-[1080px] mx-auto px-4 pt-16 pb-8 flex flex-col items-center text-center">
          <Image src={`${IMG}/Dimo_letter.png`} alt="dimo" width={200} height={60} className="mb-6 object-contain" />
          <h1 className="text-[32px] lg:text-[40px] font-light text-[#333] leading-tight mb-4">
            {t.hero.subtitleLine1}
          </h1>
          <h1 className="text-[32px] lg:text-[40px] font-light text-[#333] leading-tight mb-8">
            {t.hero.subtitleLine2}
          </h1>
        </div>

        {/* S1: Memo intro texts */}
        <div className="max-w-[1080px] mx-auto px-4 pb-8 flex flex-col items-center text-center">
          <h2 className="text-[22px] lg:text-[28px] font-light text-[#555] leading-snug mb-2">
            {t.hero.descLine1}
          </h2>
          <h2 className="text-[22px] lg:text-[28px] font-light text-[#555] leading-snug mb-6">
            {t.hero.descLine2}
          </h2>

          {/* S2: Digital feel */}
          <h2 className="text-[26px] lg:text-[34px] font-medium text-[#333] leading-snug mb-2">
            {t.hero.descLine3}
          </h2>
          <h2 className="text-[26px] lg:text-[34px] font-medium text-[#333] leading-snug mb-8">
            {t.hero.descLine4}
          </h2>

          <Image src={`${IMG}/M1threeIcons.png`} alt="dimo icons" width={300} height={60} className="object-contain" />
        </div>
      </section>

      {/* S3: Digital twin - bg image */}
      <section
        className="bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${IMG}/BG-second03.jpg)`, minHeight: 925 }}
      >
        <div className="max-w-[1080px] mx-auto px-4 text-center py-24">
          <h1 className="text-[36px] lg:text-[55px] font-medium text-[#cecece] leading-tight mb-12">
            {t.digitalTwin.h1line1}
            <br /><br />
            {t.digitalTwin.h1line2}
          </h1>
          <h2 className="text-[18px] lg:text-[25px] font-medium text-[#f7f7f7] leading-relaxed">
            {t.digitalTwin.h2line1}
            <br />
            {t.digitalTwin.h2line2}
          </h2>
        </div>
      </section>

      {/* S4: Find Out More button */}
      <section className="bg-white py-12">
        <div className="max-w-[1080px] mx-auto px-4 flex justify-center">
          <a
            href={lang === "ko" ? "https://store.neosmartpen.com/" : lang === "ja" ? "https://neosmartpenjp.com/" : "https://shop.neosmartpen.com/"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-[#333] text-[#333] text-[14px] px-8 py-3 hover:bg-[#333] hover:text-white transition-colors"
          >
            {t.findOutMore}
          </a>
        </div>
      </section>

      {/* S5: Product carousel/slider */}
      <section className="bg-[#e8e8e8] py-16">
        <div className="max-w-[1080px] mx-auto px-4 flex flex-col items-center gap-8">
          <Image src={`${IMG}/dimo_display.jpg`} alt="dimo display" width={1000} height={622} className="w-full object-contain" />
          <Image src={`${IMG}/dimo_image02.jpg`} alt="dimo image" width={1000} height={622} className="w-full object-contain" />
        </div>
      </section>

      {/* S6: 3-column specs - BATTERY / D1 refill / CLIP */}
      <section className="bg-[#ddd] py-12">
        <div className="max-w-[1080px] mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { img: `${IMG}/건전지.png`, title: t.specs3col.battery, desc: t.specs3col.batteryDesc },
            { img: `${IMG}/펜심.png`, title: t.specs3col.refill, desc: t.specs3col.refillDesc },
            { img: `${IMG}/그립.png`, title: t.specs3col.grip, desc: t.specs3col.gripDesc },
          ].map((item) => (
            <div key={item.title} className="text-center">
              <Image src={item.img} alt={item.title} width={205} height={205} className="mx-auto object-contain mb-4" />
              <h4 className="text-[18px] font-bold text-[#333] mb-2">{item.title}</h4>
              <p className="text-[13px] text-[#666] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* S7: Composition */}
      <section className="bg-white py-16">
        <div className="max-w-[1080px] mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <Image src={`${IMG}/dimo_inside.png`} alt="dimo components" width={868} height={792} className="w-full object-contain" />
          </div>
          <div className="w-full lg:w-1/2">
            <h3 className="text-[16px] text-[#666] leading-loose whitespace-pre-line">
              {t.composition}
            </h3>
          </div>
        </div>
      </section>

      {/* S8: Dimensions */}
      <section className="bg-[#f8f4e8] py-12">
        <div className="max-w-[1080px] mx-auto px-4 flex justify-center">
          <Image src={`${IMG}/dimo_size.png`} alt="dimo Dimensions" width={1000} height={200} className="w-full max-w-[1000px] object-contain" />
        </div>
      </section>

      {/* S9: Spacer */}
      <div style={{ height: 80 }} className="bg-white" />

      {/* S10: Use cases - 3 columns */}
      <section className="bg-white py-12">
        <div className="max-w-[1080px] mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Col 1: Touch */}
          <div>
            <Image src={`${IMG}/showtell01.jpg`} alt="Share with one touch" width={340} height={250} className="w-full object-cover mb-4" />
            <p className="text-[12px] text-[#39d2cc] mb-1">{t.useCases.touch.tag}</p>
            <h3 className="text-[16px] font-bold text-[#333] mb-2">{t.useCases.touch.title}</h3>
            <p className="text-[13px] text-[#666] leading-relaxed">{t.useCases.touch.desc}</p>
          </div>

          {/* Col 2: Store + Convenience */}
          <div>
            <Image src={`${IMG}/N2_promo01.jpg`} alt="Easy to store" width={340} height={250} className="w-full object-cover mb-4" />
            <p className="text-[12px] text-[#39d2cc] mb-1">{t.useCases.store.tag}</p>
            <h3 className="text-[16px] font-bold text-[#333] mb-2">{t.useCases.store.title}</h3>
            <p className="text-[13px] text-[#666] leading-relaxed mb-6">{t.useCases.store.desc}</p>
            <Image src={`${IMG}/showtell02.jpg`} alt="Convenience" width={340} height={250} className="w-full object-cover mb-4" />
            <p className="text-[12px] text-[#39d2cc] mb-1">{t.useCases.convenience.tag}</p>
            <h3 className="text-[16px] font-bold text-[#333] mb-2">{t.useCases.convenience.title}</h3>
            <p className="text-[13px] text-[#666] leading-relaxed">{t.useCases.convenience.desc}</p>
          </div>

          {/* Col 3: Smart work */}
          <div>
            <Image src={`${IMG}/grida_13.jpg`} alt="Smart work" width={340} height={250} className="w-full object-cover mb-4" />
            <p className="text-[12px] text-[#39d2cc] mb-1">{t.useCases.smartwork.tag}</p>
            <h3 className="text-[16px] font-bold text-[#333] mb-2">{t.useCases.smartwork.title}</h3>
            <p className="text-[13px] text-[#666] leading-relaxed">{t.useCases.smartwork.desc}</p>
          </div>
        </div>
      </section>
    </>
  );
}
