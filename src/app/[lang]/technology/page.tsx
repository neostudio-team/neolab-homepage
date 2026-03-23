import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LazySection from "@/components/LazySection";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Technology - NeoLAB Convergence Inc.",
  description: "Ncode Technology - The core technology behind NeoLAB products",
};

const ncodeIcons = [
  "/images/technology/icon-Ncode_1.png",
  "/images/technology/icon-Ncode_2.png",
];

const hwIcons = [
  "/images/technology/icon-Ncode_3-1.png",
  "/images/technology/icon-Ncode_4.png",
  "/images/technology/icon-Ncode_05-1.png",
];

export default async function TechnologyPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.technology;

  return (
    <>
      <Header lang={lang} dict={dict.common.header} />
      <main>
        {/* Hero */}
        <section className="py-16 bg-[#1a1a2e] text-white">
          <div className="max-w-[1080px] mx-auto px-4 text-center">
            <p className="text-primary uppercase tracking-widest text-sm mb-4">{t.hero.label}</p>
            <h1 className="text-[40px] font-black mb-6">{t.hero.title}</h1>
            <p className="text-gray-300 text-sm leading-[2] max-w-2xl mx-auto">{t.hero.description}</p>
          </div>
        </section>

        {/* What is Ncode */}
        <section className="py-[54px] bg-white">
          <div className="max-w-[1080px] mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="w-full lg:w-[37%]">
                <h2 className="text-[30px] font-medium text-black mb-6">{t.whatIsNcode.title}</h2>
                <p className="text-[#666] text-sm leading-[2] mb-4">{t.whatIsNcode.p1}</p>
                <p className="text-[#666] text-sm leading-[2]">{t.whatIsNcode.p2}</p>
              </div>
              <div className="w-full lg:w-[58%] flex justify-center">
                <Image src="/images/technology/Neo-05_2.png" alt="Ncode Pattern" width={500} height={400} className="w-full max-w-md h-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* Ncode Features */}
        <section className="py-[54px] bg-[#f1f1f1]">
          <div className="max-w-[1080px] mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              <div className="w-full lg:w-[50%] flex justify-center">
                <Image src="/images/technology/Neo-02.png" alt="Ncode Detail" width={500} height={400} className="w-full max-w-md h-auto" />
              </div>
              <div className="w-full lg:w-[50%] space-y-8">
                {t.ncodeFeatures.map((feature, i) => (
                  <div key={feature.title} className="flex items-start gap-4">
                    <Image src={ncodeIcons[i]} alt={feature.title} width={48} height={48} className="shrink-0" />
                    <div>
                      <h3 className="font-bold text-black mb-2">{feature.title}</h3>
                      <p className="text-[#666] text-sm leading-[2]">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Print Convenience */}
        <LazySection>
        <section className="py-[54px] bg-white">
          <div className="max-w-[1080px] mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="w-full lg:w-[37%]">
                <h2 className="text-[22px] font-bold text-black mb-4">{t.printing.title}</h2>
                <p className="text-[#666] text-sm leading-[2] mb-4">{t.printing.p1}</p>
                <h3 className="text-xl font-bold text-black mb-3 mt-8">{t.printing.printAtHome}</h3>
                <p className="text-[#666] text-sm leading-[2]">{t.printing.p2}</p>
              </div>
              <div className="w-full lg:w-[58%] space-y-4">
                <Image src="/images/technology/Neo-02_2.png" alt="Offset Printing" width={500} height={300} className="w-full h-auto" />
                <Image src="/images/technology/Neo-02_3.png" alt="Home Printing" width={500} height={300} className="w-full h-auto" />
              </div>
            </div>
          </div>
        </section>

        </LazySection>

        {/* Hardware Technology */}
        <LazySection>
        <section className="py-[54px] bg-[#f1f1f1]">
          <div className="max-w-[1080px] mx-auto px-4 text-center mb-12">
            <h2 className="text-[30px] font-medium text-black mb-4">{t.hardware.title}</h2>
            <p className="text-[#666] text-sm max-w-2xl mx-auto">{t.hardware.description}</p>
          </div>
          <div className="max-w-[1080px] mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {t.hardware.features.map((feature, i) => (
                <div key={feature.title} className="text-center">
                  <div className="mb-4 flex justify-center">
                    <Image src={hwIcons[i]} alt={feature.title} width={64} height={64} />
                  </div>
                  <h3 className="font-bold text-black mb-2">{feature.title}</h3>
                  <p className="text-[#666] text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <Image src="/images/technology/Neo-02_4-1.png" alt="Hardware Technology" width={800} height={400} className="w-full max-w-2xl h-auto" />
            </div>
            <div className="text-center mt-8">
              <Link
                href={lang === "ko" ? "https://neosmartpen.co.kr/" : lang === "ja" ? "https://neosmartpen.jp/" : "https://neosmartpen.com/"}
                className="inline-block bg-primary text-white px-8 py-3 rounded font-semibold hover:bg-primary-dark transition-colors uppercase tracking-wider text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.hardware.visitNeoSmartpen}
              </Link>
            </div>
          </div>
        </section>

        </LazySection>

        {/* Patents */}
        <LazySection>
        <section className="py-16 bg-[#1a1a2e] text-white">
          <div className="max-w-[1080px] mx-auto px-4 text-center">
            <h2 className="text-[30px] font-medium mb-6">{t.patents.title}</h2>
            <p className="text-gray-300 text-sm leading-[2]">{t.patents.description}</p>
          </div>
        </section>

        </LazySection>

        {/* Application Fields */}
        <LazySection>
        <section className="py-[54px] bg-white">
          <div className="max-w-[1080px] mx-auto px-4 text-center mb-12">
            <h2 className="text-[30px] font-medium text-black mb-4">{t.applicationFields.title}</h2>
          </div>
          <div className="max-w-[1080px] mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <Link href="https://www.neosmartpen.com" className="group bg-[#f1f1f1] rounded-lg p-8 flex items-center gap-6 hover:shadow-lg transition-shadow" target="_blank" rel="noopener noreferrer">
                <Image src="/images/technology/icon-smartpen.png" alt="Neo smartpen" width={80} height={80} className="shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-black group-hover:text-primary transition-colors">{t.applicationFields.neoSmartpen}</h3>
                  <p className="text-[#666] text-sm mt-2">{t.applicationFields.neoSmartpenDesc}</p>
                </div>
              </Link>
              <Link href={`/${lang}/soundpen`} className="group bg-[#f1f1f1] rounded-lg p-8 flex items-center gap-6 hover:shadow-lg transition-shadow">
                <Image src="/images/technology/icon-soripen.png" alt="Sound pen" width={80} height={80} className="shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-black group-hover:text-primary transition-colors">{t.applicationFields.soundPen}</h3>
                  <p className="text-[#666] text-sm mt-2">{t.applicationFields.soundPenDesc}</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        </LazySection>

        {/* Developers */}
        <LazySection>
        <section className="py-16 bg-[#1a1a2e] text-white text-center">
          <div className="max-w-[1080px] mx-auto px-4">
            <h2 className="text-[30px] font-medium mb-4">{dict.common.designedForDevelopers}</h2>
            <p className="text-gray-300 text-sm mb-8">{dict.common.developersDescAlt}</p>
            <Link
              href="https://github.com/NeoSmartpen"
              className="inline-block bg-teal text-white px-8 py-3 uppercase tracking-wider text-sm font-semibold hover:opacity-90 transition-opacity"
              target="_blank"
              rel="noopener noreferrer"
            >
              {dict.common.openSourceCode}
            </Link>
          </div>
        </section>
        </LazySection>
      </main>
      <Footer lang={lang} dict={dict.common.footer} />
    </>
  );
}
