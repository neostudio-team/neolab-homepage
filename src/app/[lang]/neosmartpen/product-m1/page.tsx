import { Metadata } from "next";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import Image from "next/image";

const IMG = "/images/neosmartpen/products/m1";

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.neosmartpen.productM1.metadata;
  return { title: t.title, description: t.description };
}

export default async function ProductM1Page({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.neosmartpen.productM1;

  return (
    <>
      {/* S0: Hero - warm gray bg */}
      <section className="bg-[#ebe7e5]">
        <div className="max-w-[1080px] mx-auto px-4 pt-16 pb-8 flex flex-col items-center text-center">
          <Image src={`${IMG}/M1LOGO.png`} alt="M1+" width={200} height={60} className="mb-6 object-contain" />
          <h1 className="text-[32px] lg:text-[40px] font-light text-[#333] leading-tight mb-8">
            {t.hero.subtitle}
          </h1>
          <Image src={`${IMG}/M1_status-1-3.png`} alt="M1+" width={600} height={300} className="mb-8 object-contain max-h-[300px]" />
        </div>
        <div className="max-w-[1080px] mx-auto px-4 pb-16 flex flex-col items-center text-center">
          <h1 className="text-[22px] lg:text-[28px] font-light text-[#555] leading-snug mb-2">
            {t.hero.photoQuestion}
          </h1>
          <h1 className="text-[22px] lg:text-[28px] font-light text-[#555] leading-snug mb-6">
            {t.hero.appManage}
          </h1>
          <h1 className="text-[26px] lg:text-[34px] font-medium text-[#333] leading-snug mb-2">
            {t.hero.penFeel}
          </h1>
          <h1 className="text-[26px] lg:text-[34px] font-medium text-[#333] leading-snug mb-8">
            {t.hero.digitalAction}
          </h1>
          <Image src={`${IMG}/M1threeIcons.png`} alt="M1+ icons" width={300} height={60} className="object-contain" />
        </div>
      </section>

      {/* S1: Digital twin - bg image */}
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

      {/* S2: Find Out More button */}
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

      {/* S3: Full-width divider image */}
      <section className="bg-white">
        <Image src={`${IMG}/Layer-593.jpg`} alt="" width={1920} height={600} className="w-full object-cover" style={{ maxHeight: 600 }} />
      </section>

      {/* S4: 3-column specs */}
      <section className="bg-white py-12" style={{ minHeight: 334 }}>
        <div className="max-w-[1080px] mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* BATTERY */}
          <div className="text-center">
            <Image src={`${IMG}/N2-exp02.png`} alt={t.specs3col.battery} width={300} height={300} className="w-full object-contain mb-4" />
            <h4 className="text-[18px] font-bold text-[#333] mb-2">{t.specs3col.battery}</h4>
            <p className="text-[13px] text-[#666] leading-relaxed">{t.specs3col.batteryDesc1}</p>
            <p className="text-[13px] text-[#666] leading-relaxed">{t.specs3col.batteryDesc2}</p>
          </div>
          {/* AUTO ON/OFF */}
          <div className="text-center">
            <Image src={`${IMG}/N2-exp03.png`} alt={t.specs3col.autoOnOff} width={300} height={300} className="w-full object-contain mb-4" />
            <h4 className="text-[18px] font-bold text-[#333] mb-2">{t.specs3col.autoOnOff}</h4>
            <p className="text-[13px] text-[#666] leading-relaxed">{t.specs3col.autoOnOffDesc1}</p>
            <p className="text-[13px] text-[#666] leading-relaxed">{t.specs3col.autoOnOffDesc2}</p>
          </div>
          {/* CLIP */}
          <div className="text-center">
            <Image src={`${IMG}/N2-exp01.png`} alt={t.specs3col.clip} width={300} height={300} className="w-full object-contain mb-4" />
            <h4 className="text-[18px] font-bold text-[#333] mb-2">{t.specs3col.clip}</h4>
            <p className="text-[13px] text-[#666] leading-relaxed">{t.specs3col.clipDesc}</p>
          </div>
        </div>
      </section>

      {/* S5: Composition - 2 cols */}
      <section className="bg-white py-16">
        <div className="max-w-[1080px] mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <Image src={`${IMG}/구성품.jpg`} alt="M1+ Composition" width={540} height={400} className="w-full object-contain" />
          </div>
          <div className="w-full lg:w-1/2">
            <h3 className="text-[16px] text-[#333] leading-loose">
              {t.composition.map((item: string, i: number) => (
                <span key={i}>
                  {item}
                  {i < t.composition.length - 1 && <br />}
                </span>
              ))}
            </h3>
          </div>
        </div>
      </section>

      {/* S6: Dimensions - warm bg */}
      <section className="bg-[#fdfaf8] py-12">
        <div className="max-w-[1080px] mx-auto px-4 flex justify-center">
          <Image src={`${IMG}/M1size01.png`} alt="M1+ Dimensions" width={600} height={300} className="object-contain" />
        </div>
      </section>

      {/* S7: Spacer */}
      <div style={{ height: 80 }} className="bg-white" />

      {/* S8: Use cases - 3 columns */}
      <section className="bg-white py-12">
        <div className="max-w-[1080px] mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Col 1: Touch */}
          <div>
            <Image src={`${IMG}/showtell01.jpg`} alt={t.useCases.touch.title} width={340} height={250} className="w-full object-cover mb-4" />
            <p className="text-[12px] text-[#39d2cc] mb-1">{t.useCases.touch.tag}</p>
            <h3 className="text-[16px] font-bold text-[#333] mb-2">{t.useCases.touch.title}</h3>
            <p className="text-[13px] text-[#666] leading-relaxed">{t.useCases.touch.desc}</p>
          </div>

          {/* Col 2: Store + Convenience */}
          <div>
            <Image src={`${IMG}/N2_promo01.jpg`} alt={t.useCases.store.title} width={340} height={250} className="w-full object-cover mb-4" />
            <p className="text-[12px] text-[#39d2cc] mb-1">{t.useCases.store.tag}</p>
            <h3 className="text-[16px] font-bold text-[#333] mb-2">{t.useCases.store.title}</h3>
            <p className="text-[13px] text-[#666] leading-relaxed mb-6">{t.useCases.store.desc}</p>
            <Image src={`${IMG}/showtell02.jpg`} alt={t.useCases.convenience.title} width={340} height={250} className="w-full object-cover mb-4" />
            <p className="text-[12px] text-[#39d2cc] mb-1">{t.useCases.convenience.tag}</p>
            <h3 className="text-[16px] font-bold text-[#333] mb-2">{t.useCases.convenience.title}</h3>
            <p className="text-[13px] text-[#666] leading-relaxed">{t.useCases.convenience.desc}</p>
          </div>

          {/* Col 3: Smart work */}
          <div>
            <Image src={`${IMG}/grida_13.jpg`} alt={t.useCases.smartwork.title} width={340} height={250} className="w-full object-cover mb-4" />
            <p className="text-[12px] text-[#39d2cc] mb-1">{t.useCases.smartwork.tag}</p>
            <h3 className="text-[16px] font-bold text-[#333] mb-2">{t.useCases.smartwork.title}</h3>
            <p className="text-[13px] text-[#666] leading-relaxed">{t.useCases.smartwork.desc}</p>
          </div>
        </div>
      </section>
    </>
  );
}
