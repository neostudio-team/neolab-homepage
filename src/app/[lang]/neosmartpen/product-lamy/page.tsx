import { Metadata } from "next";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import Image from "next/image";

const IMG = "/images/neosmartpen/products/lamy";

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.neosmartpen.productLamy.metadata;
  return { title: t.title, description: t.description };
}

export default async function ProductLamyPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.neosmartpen.productLamy;

  return (
    <>
      {/* S0: Hero - white bg, Collaboration intro */}
      <section className="bg-white">
        <div className="max-w-[1080px] mx-auto px-4 py-16 flex flex-col lg:flex-row items-center gap-8">
          {/* Left: text content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <Image
              src={`${IMG}/lamy_fullname.png`}
              alt="LAMY safari all black ncode"
              width={758}
              height={53}
              className="mb-6 object-contain max-w-[380px]"
            />
            <h3 className="text-[12px] text-[#999] uppercase tracking-wider mb-1">
              {t.hero.collaboration}
            </h3>
            <p className="text-[14px] text-[#666] font-medium mb-4">
              {t.hero.collab}
            </p>
            <h3 className="text-[12px] text-[#999] uppercase tracking-wider mb-1">
              {t.hero.slogan}
            </h3>
            <h1 className="text-[20px] lg:text-[24px] font-light text-[#333] leading-tight mb-3">
              {t.hero.subtitle}
            </h1>
            <h3 className="text-[28px] lg:text-[36px] font-light text-[#333] leading-tight mb-4">
              {t.hero.desc}
            </h3>
            <p className="text-[13px] text-[#888] leading-relaxed max-w-[450px] mb-6">
              {t.hero.heroDesc}
            </p>
            <Image
              src={`${IMG}/lamy_neolab_logo.png`}
              alt="LAMY x NeoLAB"
              width={232}
              height={27}
              className="object-contain"
            />
          </div>
          {/* Right: pen image shot */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src={`${IMG}/lamy_imageshot.png`}
              alt="LAMY safari all black ncode"
              width={807}
              height={578}
              className="object-contain max-w-[500px] w-full"
            />
          </div>
        </div>
      </section>

      {/* S1: LAMY safari as-is connected to digital - bg black, 2 cols */}
      <section className="bg-black" style={{ minHeight: 420 }}>
        <div className="max-w-[1080px] mx-auto px-4 flex flex-col lg:flex-row items-center" style={{ minHeight: 420 }}>
          {/* Left: fullname + heading */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center py-8 px-8">
            <Image
              src={`${IMG}/lamy_fullname.png`}
              alt="LAMY safari all black ncode"
              width={758}
              height={53}
              className="mb-6 object-contain max-w-[380px] brightness-0 invert"
            />
            <h1 className="text-[28px] lg:text-[36px] text-white font-medium leading-tight whitespace-pre-line">
              {t.s2.heading}
            </h1>
          </div>
          {/* Right: pen image */}
          <div className="w-full lg:w-1/2 flex justify-center py-8">
            <Image
              src={`${IMG}/lamy_pen2.png`}
              alt="LAMY pen"
              width={976}
              height={779}
              className="object-contain max-w-[488px] w-full"
            />
          </div>
        </div>
      </section>

      {/* LAMY meets digital - full-width centered heading */}
      <section className="bg-black py-16">
        <div className="max-w-[1080px] mx-auto px-4 text-center">
          <h1 className="text-[36px] lg:text-[48px] font-bold text-white leading-tight mb-4">
            {t.lamyMeetsDigital.heading}
          </h1>
          <h2 className="text-[18px] lg:text-[22px] text-[#c6c6c6] leading-relaxed">
            {t.lamyMeetsDigital.sub}
          </h2>
        </div>
      </section>

      {/* S2a: LAMY writes the first page to digital - fullwidth with image */}
      <section className="bg-white">
        <div className="max-w-[1080px] mx-auto px-4 py-16 flex flex-col lg:flex-row items-center gap-8">
          {/* Left: large image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src={`${IMG}/lamy_third01.png`}
              alt="LAMY digital"
              width={500}
              height={501}
              className="object-contain w-full max-w-[500px]"
            />
          </div>
          {/* Right: text */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center">
            <h1 className="text-[28px] lg:text-[36px] font-medium text-[#333] leading-tight mb-4 whitespace-pre-line">
              {t.s2a.heading}
            </h1>
            <h2 className="text-[16px] lg:text-[20px] text-[#999] leading-relaxed">
              {t.s2a.sub}
            </h2>
          </div>
        </div>
      </section>

      {/* S3: #THINKING TOOL - bg white */}
      <section className="bg-white" style={{ minHeight: 598 }}>
        <div className="max-w-[1080px] mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <h3 className="text-[14px] text-[#39d2cc] font-medium mb-2">{t.thinkingTool.tag}</h3>
            <h2 className="text-[26px] lg:text-[32px] font-medium text-[#333] whitespace-pre-line">
              {t.thinkingTool.heading}
            </h2>
          </div>

          {/* 2x2 grid of thinking icons with text */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-[900px] mx-auto">
            {[
              { img: "think1.png", text: t.thinkingTool.items[0] },
              { img: "think3.png", text: t.thinkingTool.items[1] },
              { img: "think2.png", text: t.thinkingTool.items[2] },
              { img: "think4.png", text: t.thinkingTool.items[3] },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <Image
                  src={`${IMG}/${item.img}`}
                  alt={item.text}
                  width={269}
                  height={247}
                  className="object-contain mb-3 w-full max-w-[200px]"
                />
                <p className="text-[12px] text-[#666] leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S4: #POINTS OF SPECIAL - bg black */}
      <section className="bg-black" style={{ minHeight: 729 }}>
        <div className="max-w-[1080px] mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <h3 className="text-[14px] text-[#39d2cc] font-medium mb-2">{t.special.tag}</h3>
            <h2 className="text-[22px] lg:text-[26px] font-medium text-white mb-2">
              {t.special.highlightsSubheading}
            </h2>
            <h2 className="text-[26px] lg:text-[32px] font-medium text-white whitespace-pre-line">
              {t.special.heading}
            </h2>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { img: "special1.png", title: t.special.writeAndGo, sub: "", desc: t.special.writeAndGoDesc },
              { img: "special2.png", title: t.special.digitalPaper, sub: "", desc: t.special.digitalPaperDesc },
              { img: "special3.png", title: t.special.grip, sub: t.special.gripSub, desc: t.special.gripDesc },
              { img: "special4.png", title: t.special.theme, sub: "", desc: t.special.themeDesc },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <Image
                  src={`${IMG}/${item.img}`}
                  alt={item.title}
                  width={240}
                  height={240}
                  className="object-contain mb-4 w-full"
                />
                <h4 className="text-[16px] font-bold text-white mb-1">{item.title}</h4>
                {item.sub && (
                  <p className="text-[13px] text-[#ccc] mb-2">{item.sub}</p>
                )}
                <p className="text-[12px] text-[#999] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S5: What You Need - bg #efefef */}
      <section className="bg-[#efefef]" style={{ minHeight: 711 }}>
        <div className="max-w-[1080px] mx-auto px-4 py-16">
          <div className="text-center mb-4">
            <h3 className="text-[14px] text-[#39d2cc] font-medium mb-2">{t.whatYouNeed.tag}</h3>
            <h2 className="text-[26px] lg:text-[32px] font-medium text-[#333] whitespace-pre-line">
              {t.whatYouNeed.heading}
            </h2>
          </div>

          {/* Required image */}
          <div className="flex justify-center mb-12">
            <Image
              src={`${IMG}/required.png`}
              alt="What you need"
              width={800}
              height={400}
              className="object-contain w-full max-w-[800px]"
            />
          </div>

          {/* Icons row with descriptions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[800px] mx-auto">
            {[
              { img: "required_icon1.png", label: t.whatYouNeed.app, desc: t.whatYouNeed.appDesc },
              { img: "required_icon2.png", label: t.whatYouNeed.pen, desc: t.whatYouNeed.penDesc },
              { img: "special_icon3.png", label: t.whatYouNeed.paper, desc: t.whatYouNeed.paperDesc },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <Image
                  src={`${IMG}/${item.img}`}
                  alt={item.label}
                  width={120}
                  height={120}
                  className="object-contain mx-auto mb-3"
                />
                <h4 className="text-[14px] font-bold text-[#333] mb-1">{item.label}</h4>
                <p className="text-[12px] text-[#666] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Find Out More button */}
          <div className="text-center mt-12">
            <a
              href={t.whatYouNeed.findOutMoreLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white text-[14px] font-medium px-8 py-3 rounded-xl hover:bg-[#333] transition-colors"
            >
              {t.whatYouNeed.findOutMore}
            </a>
          </div>
        </div>
      </section>

      {/* S6: Use cases - bg white, 3 columns */}
      <section className="bg-white py-12">
        <div className="max-w-[1080px] mx-auto px-4">
          {/* Section tag */}
          <div className="text-center mb-8">
            <h3 className="text-[14px] text-[#39d2cc] font-medium">{t.useCases.sectionTag}</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
        </div>
      </section>

      {/* User Guide Download */}
      <section className="bg-white py-16">
        <div className="max-w-[1080px] mx-auto px-4 text-center">
          <h1 className="text-[28px] lg:text-[36px] font-bold mb-4">
            <a
              href={t.userGuide.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0000ff] hover:underline"
            >
              {t.userGuide.title}
            </a>
          </h1>
          <h2 className="text-[18px] lg:text-[22px]">
            <a href={t.userGuide.espanolLink} target="_blank" rel="noopener noreferrer" className="text-[#00ccff] hover:underline">
              {t.userGuide.espanol}
            </a>
            {" / "}
            <a href={t.userGuide.italianoLink} target="_blank" rel="noopener noreferrer" className="text-[#00ccff] hover:underline">
              {t.userGuide.italiano}
            </a>
            {" / "}
            <a href={t.userGuide.francaisLink} target="_blank" rel="noopener noreferrer" className="text-[#00ccff] hover:underline">
              {t.userGuide.francais}
            </a>
            {" / "}
            <a href={t.userGuide.nederlandseLink} target="_blank" rel="noopener noreferrer" className="text-[#00ccff] hover:underline">
              {t.userGuide.nederlandse}
            </a>
          </h2>
        </div>
      </section>
    </>
  );
}
