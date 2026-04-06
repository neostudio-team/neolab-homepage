import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LazySection from "@/components/LazySection";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Pokoro - Ignite creative thinking with an Interactive learning mate",
  description: "POKORO - Digital Learning 2.0, Screen free smart AI device for kids",
};

const featureIcons = [
  "/images/pokoro/sec01-ico01.png",
  "/images/pokoro/sec01-ico02.png",
  "/images/pokoro/sec01-ico03.png",
  "/images/pokoro/sec01-ico04.png",
  "/images/pokoro/sec01-ico05.png",
  "/images/pokoro/sec01-ico06.png",
  "/images/pokoro/sec01-ico07.png",
  "/images/pokoro/sec01-ico08.png",
  "/images/pokoro/sec01-ico09.png",
];

export default async function PokoroPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.pokoro;

  return (
    <>
      <Header lang={lang} dict={dict.common.header} />
      <main className="font-[Montserrat,sans-serif]">
        {/* ===== HERO (#main) ===== */}
        <section
          className="relative py-40 flex items-center justify-center overflow-hidden"
          style={{
            backgroundColor: "#f8e581",
            backgroundImage: "url('/images/pokoro/main_bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "70% 50%",
            backgroundRepeat: "no-repeat",
            minHeight: "900px",
          }}
        >
          <div className="relative z-10 text-center">
            <h1 className="text-[48px] font-bold text-black leading-[67px] mb-4">
              POKORO<sup className="text-[16px] align-super">TM</sup>
            </h1>
            <p className="text-[20px] font-semibold text-black mb-1">{t.hero.subtitle1}</p>
            <p className="text-[28px] font-semibold text-black mb-10">{t.hero.subtitle2}</p>
            <Link href="https://smartstore.naver.com/pokoro?n_media=27758&n_query=%ED%8F%AC%EC%BD%94%EB%A1%9C&n_rank=1&n_ad_group=grp-a001-04-000000057244674&n_ad=nad-a001-04-000000479444805&n_keyword_id=nkw-a001-04-000007651633461&n_keyword=%ED%8F%AC%EC%BD%94%EB%A1%9C&n_campaign_type=4&n_contract=tct-a001-04-000000001228285&n_ad_group_type=5&NaPm=ct%3Dmn2obx2f%7Cci%3DER1927f3db%2D266f%2D11f1%2D952e%2D3ac0aae6ed3f%7Ctr%3Dbrnd%7Chk%3D3ed989dad874bfc1fe716527012b0a5af32115ba%7Cnacn%3DMJuAB0AtEIMQ" target="_blank" rel="noopener noreferrer" className="inline-block bg-black text-white text-[20px] px-6 py-5 rounded-full font-normal hover:bg-black/80 transition-colors">
              포코로 구입하기
            </Link>
          </div>
        </section>

        {/* ===== SEC01: Digital Learning 2.0 ===== */}
        <section className="py-40">
          <div className="max-w-[1400px] mx-auto px-4 flex flex-col items-center gap-20">
            <div className="text-center">
              <h3 className="text-[34px] font-bold text-black mb-4">{t.sec01.heading}</h3>
              <h2 className="text-[40px] font-bold text-black mb-12">
                {t.sec01.subheading}<sup className="text-[16px] align-super">TM</sup>
              </h2>
              <div className="flex justify-center">
                <Image src="/images/pokoro/sec01-img01.png" alt="POKORO Device" width={500} height={657} className="w-[500px] h-auto" />
              </div>
            </div>
            <ul className="flex flex-wrap justify-center gap-10">
              {t.sec01.features.map((f, i) => (
                <li key={f.label} className="flex flex-col items-center gap-2 w-[120px]">
                  <Image src={featureIcons[i]} alt={f.label} width={120} height={120} className="w-[120px] h-[120px] rounded-2xl" />
                  <span className="text-[16px] font-bold text-black text-center leading-tight">{f.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ===== SEC02: Screen Problem ===== */}
        <LazySection>
        <section className="py-40">
          <div className="max-w-[1400px] mx-auto px-4 flex flex-col gap-40">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="w-full lg:w-[50%]">
                <Image src="/images/pokoro/sec02-img01.png" alt="Child with tablet" width={600} height={500} className="w-full h-auto rounded-lg" />
              </div>
              <div className="w-full lg:w-[50%]">
                <p className="text-[24px] text-black leading-[34px] mb-6">
                  {t.sec02.p1}
                </p>
                <p className="text-[20px] text-black/60 leading-[28px] mb-8">
                  {t.sec02.p2}
                </p>
              </div>
            </div>
            <div className="text-center">
              <h2 className="text-[40px] font-bold text-black leading-tight mb-4">
                {t.sec02.question}
              </h2>
              <p className="text-[28px] font-bold mt-6">
                <span className="bg-[linear-gradient(transparent_50%,#f8e581_50%)] inline">
                  {t.sec02.answer}<sup className="text-[12px] align-super">TM</sup>
                </span>
              </p>
            </div>
          </div>
        </section>
        </LazySection>

        {/* ===== SEC03: Foster creativity (Yellow BG) ===== */}
        <LazySection>
        <section className="bg-[#f8e581]">
          <div className="py-40 text-center max-w-[1400px] mx-auto px-4">
            <h2 className="text-[40px] font-bold text-black mb-4">
              {t.sec03.creativity.heading}
            </h2>
            <p className="text-[24px] font-semibold text-black mb-4">{t.sec03.creativity.subheading}</p>
            <p className="text-[20px] text-black/60 max-w-4xl mx-auto leading-[28px]">
              {t.sec03.creativity.description}
            </p>
          </div>

          <div className="py-20 text-center max-w-[1400px] mx-auto px-4">
            <h3 className="text-[34px] font-bold text-black mb-4">{t.sec03.screenFree.heading}</h3>
            <p className="text-[20px] text-black/60 max-w-3xl mx-auto leading-[28px] mb-12">
              {t.sec03.screenFree.description}
            </p>
            <Image src="/images/pokoro/Group39.png" alt="POKORO Device Features" width={1400} height={903} className="w-full max-w-[1400px] mx-auto h-auto hidden md:block" />
            <Image src="/images/pokoro/Group39_mo.png" alt="POKORO Device Features" width={1024} height={786} className="w-full max-w-md mx-auto h-auto md:hidden" />
          </div>

          <div className="py-20 max-w-[1400px] mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="w-full lg:w-[50%]">
                <Image src="/images/pokoro/sec03-cont03-img01.png" alt="POKORO - Remote-sized Friend" width={660} height={694} className="w-full h-auto hidden md:block" />
                <Image src="/images/pokoro/sec03-cont03-img01_mo.png" alt="POKORO - Remote-sized Friend" width={720} height={725} className="w-full h-auto md:hidden" />
              </div>
              <div className="w-full lg:w-[50%] space-y-8">
                <div>
                  <h3 className="text-[34px] font-bold text-black mb-2">{t.sec03.remoteFriend.heading}</h3>
                  <p className="text-[24px] font-bold text-black mb-1">{t.sec03.remoteFriend.subject}</p>
                  <p className="text-[20px] text-black/60 leading-[28px]">{t.sec03.remoteFriend.description}</p>
                </div>
                <Image src="/images/pokoro/sec03-cont03-img02.png" alt="POKORO Side View" width={201} height={557} className="h-[400px] w-auto" />
              </div>
            </div>
          </div>

          <div className="py-20 max-w-[1400px] mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="w-full lg:w-[50%]">
                <p className="text-[20px] font-semibold text-black mb-2">{t.sec03.boundlessEnergy.subtitle}</p>
                <h3 className="text-[34px] font-bold text-black mb-4">{t.sec03.boundlessEnergy.heading}</h3>
                <h4 className="text-[24px] font-bold text-black mt-8 mb-2">{t.sec03.boundlessEnergy.cuteCases}</h4>
                <p className="text-[20px] text-black/60">{t.sec03.boundlessEnergy.cuteCasesDesc}</p>
              </div>
              <div className="w-full lg:w-[50%]">
                <Image src="/images/pokoro/sec03-cont03-img03.png" alt="POKORO Cute Cases" width={304} height={355} className="w-full max-w-sm h-auto mx-auto" />
              </div>
            </div>
          </div>

          <div className="py-20 max-w-[1400px] mx-auto px-4 flex flex-col gap-20">
            <div><h2 className="text-[40px] font-bold text-black mb-4">{t.sec03.whenNeeded.heading}</h2></div>
            <div className="space-y-4">
              <h3 className="text-[34px] font-bold text-black">{t.sec03.whenNeeded.foreignLanguage}</h3>
              <p className="text-[20px] text-black/60 leading-[28px]">{t.sec03.whenNeeded.foreignLanguageDesc}</p>
              <h3 className="text-[34px] font-bold text-black mt-6">{t.sec03.whenNeeded.stem}</h3>
              <h3 className="text-[34px] font-bold text-black">{t.sec03.whenNeeded.smartphone}</h3>
              <h3 className="text-[34px] font-bold text-black">{t.sec03.whenNeeded.reading}</h3>
            </div>
          </div>

          <div className="py-20 max-w-[1400px] mx-auto px-4 flex flex-col gap-20">
            <div className="text-center">
              <h2 className="text-[40px] font-bold text-black mb-4">
                {t.sec03.handsOn.heading}
              </h2>
              <p className="text-[20px] text-black/60 leading-[28px]">{t.sec03.handsOn.description}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { img: "/images/pokoro/sec03-cont05-img01.png", label: "TAP." },
                { img: "/images/pokoro/sec03-cont05-img02.png", label: "TALK." },
                { img: "/images/pokoro/sec03-cont05-img03.png", label: "CONNECT." },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <Image src={item.img} alt={item.label} width={430} height={432} className="w-full h-auto rounded-lg" />
                  <h3 className="text-[34px] font-bold text-black mt-4">{item.label}</h3>
                </div>
              ))}
            </div>
          </div>

          <div className="py-20 max-w-[1400px] mx-auto px-4 flex flex-col gap-20">
            <div>
              <h2 className="text-[40px] font-bold text-black mb-4">{t.sec03.familyFun.heading}</h2>
              <p className="text-[20px] text-black/60 leading-[28px] mb-4">{t.sec03.familyFun.p1}</p>
              <p className="text-[20px] text-black/60 leading-[28px]">{t.sec03.familyFun.p2}</p>
            </div>
            <Image src="/images/pokoro/sec03-cont06-img01.png" alt="POKORO for Kids" width={971} height={466} className="w-full h-auto" />
            <Image src="/images/pokoro/sec03-cont06-img02.png" alt="POKORO for Adults" width={971} height={433} className="w-full h-auto" />
          </div>
        </section>
        </LazySection>

        {/* ===== SEC04: Educational Features (White BG) ===== */}
        <LazySection>
        <section className="py-40 flex flex-col gap-40">
          <div className="max-w-[1400px] mx-auto px-4">
            <h2 className="text-[40px] font-bold text-black">{t.sec04.wellRead.heading}</h2>
            <p className="text-[20px] text-black/60 leading-[28px] mt-4">{t.sec04.wellRead.description}</p>
          </div>

          <div className="bg-[#f5f5f5] py-20">
            <div className="max-w-[1400px] mx-auto px-4">
              <h2 className="text-[40px] font-bold text-black mb-4">
                {t.sec04.askQuestions.heading}
              </h2>
              <p className="text-[20px] text-black/60 leading-[28px] mb-8">{t.sec04.askQuestions.description}</p>
            </div>
            <div className="flex justify-center">
              <Image src="/images/pokoro/sec04-cont02-img01.png" alt="POKORO Ask Questions" width={680} height={651} className="w-[680px] max-w-full h-auto" />
            </div>
          </div>

          <div className="max-w-[1400px] mx-auto px-4 flex flex-col gap-20">
            <div>
              <h2 className="text-[40px] font-bold text-black mb-4">
                {t.sec04.flashcards.heading}
              </h2>
              <p className="text-[20px] text-black/60 leading-[28px]">{t.sec04.flashcards.description}</p>
            </div>
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <Image src="/images/pokoro/sec04-cont03-img01.png" alt="POKORO Flashcard" width={692} height={587} className="w-full lg:w-1/2 h-auto" />
              <div>
                <h3 className="text-[34px] font-bold text-black mb-4">
                  {t.sec04.turnWhy.heading}
                </h3>
                <p className="text-[20px] text-black/60 leading-[28px]">{t.sec04.turnWhy.description}</p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <Image src="/images/pokoro/sec04-cont03-img02.png" alt="POKORO Flashcard Topics" width={692} height={465} className="w-full lg:w-1/2 h-auto" />
              <div>
                <h3 className="text-[34px] font-bold text-black mb-4">
                  {t.sec04.extraCurious.heading}
                </h3>
                <p className="text-[20px] text-black/60 leading-[28px]">{t.sec04.extraCurious.description}</p>
              </div>
            </div>
          </div>

          <div className="bg-[#f5f5f5] rounded-[40px] mx-4 lg:mx-auto max-w-[1400px] p-20">
            <h2 className="text-[40px] font-bold text-black mb-4">{t.sec04.languagePractice.heading}</h2>
            <p className="text-[20px] text-black/60 leading-[28px] mb-4">{t.sec04.languagePractice.p1}</p>
            <p className="text-[20px] text-black/60 leading-[28px] mb-4">{t.sec04.languagePractice.p2}</p>
            <p className="text-[20px] text-black/60 leading-[28px] mb-8">{t.sec04.languagePractice.p3}</p>
            <div className="flex flex-col md:flex-row gap-8 justify-center">
              <Image src="/images/pokoro/sec04-cont04-img01.png" alt="POKORO Language Practice 1" width={600} height={695} className="w-full md:w-[600px] h-auto" />
              <Image src="/images/pokoro/sec04-cont04-img02.png" alt="POKORO Language Practice 2" width={600} height={695} className="w-full md:w-[600px] h-auto" />
            </div>
          </div>

          <div className="max-w-[1400px] mx-auto px-4 flex flex-col gap-40">
            <div>
              <h3 className="text-[34px] font-bold text-black mb-4">{t.sec04.privacy.heading}</h3>
              <p className="text-[20px] text-black/60 leading-[28px] mb-8">{t.sec04.privacy.description}</p>
              <Image src="/images/pokoro/sec04-cont04_2-img01.png" alt="Privacy Design" width={680} height={481} className="w-full max-w-[680px] h-auto" />
            </div>
            <div>
              <h3 className="text-[34px] font-bold text-black mb-4">{t.sec04.engaging.heading}</h3>
              <p className="text-[20px] text-black/60 leading-[28px] mb-8">{t.sec04.engaging.description}</p>
              <Image src="/images/pokoro/sec04-cont04_2-img03.png" alt="Engaging Experience" width={680} height={751} className="w-full max-w-[680px] h-auto" />
            </div>
          </div>

          <div className="max-w-[1400px] mx-auto px-4">
            <h2 className="text-[40px] font-bold text-black mb-4">
              {t.sec04.parentalGuidance.heading}
            </h2>
            <p className="text-[20px] text-black/60 leading-[28px] mb-4">{t.sec04.parentalGuidance.p1}</p>
            <p className="text-[20px] text-black/60 leading-[28px] mb-8">{t.sec04.parentalGuidance.p2}</p>
            <Image src="/images/pokoro/sec04-cont05.png" alt="Parental Guidance Tool" width={1400} height={700} className="w-full h-auto" />
          </div>
        </section>
        </LazySection>

        {/* ===== SEC06: About NEOLAB ===== */}
        <LazySection>
        <section className="bg-[#a781f8] py-40" id="contact">
          <div className="max-w-[1400px] mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-10">
              <div className="w-full lg:w-1/2 flex flex-col gap-4">
                <h2 className="text-[40px] font-bold text-black">{t.sec06.whyPokoro.heading}</h2>
                <p className="text-[20px] text-black leading-[28px]">{t.sec06.whyPokoro.p1}</p>
                <p className="text-[20px] text-black leading-[28px]">{t.sec06.whyPokoro.p2}</p>
                <p className="text-[20px] text-black leading-[28px]">{t.sec06.whyPokoro.p3}</p>
              </div>
              <div className="w-full lg:w-1/2 flex flex-col gap-10">
                <Image src="/images/pokoro/sec06-img.png" alt="POKORO by NEOLAB" width={680} height={596} className="w-full h-auto" />
              </div>
            </div>
          </div>
        </section>
        </LazySection>
      </main>
      <Footer lang={lang} dict={dict.common.footer} />
    </>
  );
}
