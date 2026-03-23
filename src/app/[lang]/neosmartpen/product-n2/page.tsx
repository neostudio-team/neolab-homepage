import { Metadata } from "next";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import Image from "next/image";

const IMG = "/images/neosmartpen/products/n2";

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.neosmartpen.productN2.metadata;
  return { title: t.title, description: t.description };
}

export default async function ProductN2Page({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.neosmartpen.productN2;

  return (
    <>
      {/* S0: Hero - bg image, 2 cols */}
      <section
        className="bg-white bg-cover bg-center"
        style={{ backgroundImage: `url(${IMG}/N2_header_BG.jpg)`, padding: "54px 0" }}
      >
        <div className="max-w-[1080px] mx-auto px-4 flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 flex flex-col items-center">
            <Image src={`${IMG}/N2.png`} alt="N2" width={200} height={60} className="mb-6" />
            <h1 className="text-[32px] lg:text-[40px] font-light text-[#333] leading-tight text-center">
              {t.hero.line1}
            </h1>
            <h1 className="text-[32px] lg:text-[40px] font-semibold text-[#333] leading-tight text-center">
              {t.hero.line2}
            </h1>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image src={`${IMG}/img-copy.png`} alt="Neo smartpen N2" width={500} height={400} className="object-contain" />
          </div>
        </div>
      </section>

      {/* S1: First class - black bg, 2 cols */}
      <section className="bg-black" style={{ minHeight: 489 }}>
        <div className="max-w-[1080px] mx-auto px-4 flex flex-col lg:flex-row items-center" style={{ minHeight: 489 }}>
          <div className="w-full lg:w-1/2 py-8">
            <Image src={`${IMG}/airplaneWindow01.jpg`} alt="First class" width={540} height={360} className="w-full object-cover" />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center py-8 px-8">
            <Image src={`${IMG}/icons-n2.png`} alt="N2 icons" width={300} height={80} className="mb-8 object-contain" />
            <h1 className="text-[26px] text-[#d3d3d3] font-medium text-center leading-snug mb-4">
              {t.firstClass.heading}
            </h1>
            <h2 className="text-[18px] text-[#999] text-center leading-relaxed">
              {t.firstClass.sub}
            </h2>
          </div>
        </div>
      </section>

      {/* S2: Digital twin - bg image, large text */}
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

      {/* S3: Product images - New Normal + N2 purple, with bg image */}
      <section
        className="bg-cover bg-center"
        style={{ backgroundImage: `url(${IMG}/Rectangle-4.jpg)`, minHeight: 900 }}
      >
        <div className="max-w-[1080px] mx-auto px-4 py-16 flex flex-col items-center gap-12">
          <Image src={`${IMG}/New-Normal-.png`} alt="New Normal" width={267} height={37} className="object-contain" />
          <Image src={`${IMG}/N2-purple.png`} alt="N2 Purple" width={110} height={53} className="object-contain" />
        </div>
      </section>

      {/* S4: 3-column specs - BODY / PROCESSOR / GRIP */}
      <section className="bg-white py-12">
        <div className="max-w-[1080px] mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { img: "N2-exp02.png", title: t.specs3col.body, desc: t.specs3col.bodyDesc },
            { img: "N2-exp03.png", title: t.specs3col.processor, desc: t.specs3col.processorDesc },
            { img: "N2-exp01.png", title: t.specs3col.grip, desc: t.specs3col.gripDesc },
          ].map((item) => (
            <div key={item.title} className="text-center">
              <Image src={`${IMG}/${item.img}`} alt={item.title} width={300} height={300} className="w-full object-contain mb-4" />
              <h4 className="text-[18px] font-bold text-[#333] mb-2">{item.title}</h4>
              <p className="text-[13px] text-[#666] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* S5: Dimensions - warm bg */}
      <section className="bg-[#fdfaf8] py-16">
        <div className="max-w-[1080px] mx-auto px-4 flex flex-col items-center">
          <Image src={`${IMG}/n2_dimension.png`} alt="N2 Dimensions" width={841} height={157} className="w-full max-w-[841px] object-contain" />
        </div>
      </section>

      {/* S6: N2 purple accessory image */}
      <section className="bg-white py-16">
        <div className="max-w-[1080px] mx-auto px-4 flex flex-col items-center">
          <Image src={`${IMG}/N2-purple.png`} alt="N2 Purple accessories" width={110} height={53} className="object-contain" />
        </div>
      </section>

      {/* S7: Use cases - 3 columns */}
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
