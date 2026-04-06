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

const STORE_URL =
  "https://smartstore.naver.com/pokoro?n_media=27758&n_query=%ED%8F%AC%EC%BD%94%EB%A1%9C&n_rank=1&n_ad_group=grp-a001-04-000000057244674&n_ad=nad-a001-04-000000479444805&n_keyword_id=nkw-a001-04-000007651633461&n_keyword=%ED%8F%AC%EC%BD%94%EB%A1%9C&n_campaign_type=4&n_contract=tct-a001-04-000000001228285&n_ad_group_type=5&NaPm=ct%3Dmn2obx2f%7Cci%3DER1927f3db%2D266f%2D11f1%2D952e%2D3ac0aae6ed3f%7Ctr%3Dbrnd%7Chk%3D3ed989dad874bfc1fe716527012b0a5af32115ba%7Cnacn%3DMJuAB0AtEIMQ";

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

        {/* ━━━ 1. HERO ━━━ */}
        <section
          className="relative flex items-center justify-center overflow-hidden"
          style={{
            backgroundColor: "#f8e581",
            backgroundImage: "url('/images/pokoro/main_bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "70% 50%",
            backgroundRepeat: "no-repeat",
            minHeight: "900px",
          }}
        >
          <div className="relative z-10 text-center px-4">
            <h1 className="text-[52px] font-bold text-black leading-tight mb-4">
              POKORO<sup className="text-[18px] align-super">TM</sup>
            </h1>
            <p className="text-[22px] font-semibold text-black mb-1">{t.hero.subtitle1}</p>
            <p className="text-[30px] font-semibold text-black mb-12">{t.hero.subtitle2}</p>
            <Link
              href={STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white text-[20px] px-10 py-5 rounded-full font-semibold hover:bg-black/75 transition-colors"
            >
              포코로 구입하기
            </Link>
          </div>
        </section>

        {/* ━━━ 2. 제품 개요 — 디지털 러닝 2.0 ━━━ */}
        <LazySection>
        <section className="py-24 bg-white">
          <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center gap-16">
            {/* 헤드라인 */}
            <div className="text-center">
              <p className="text-[15px] font-semibold text-black/40 uppercase tracking-[4px] mb-3">
                {t.sec01.heading}
              </p>
              <h2 className="text-[42px] font-bold text-black">
                {t.sec01.subheading}<sup className="text-[16px] align-super">TM</sup>
              </h2>
            </div>
            {/* 제품 이미지 */}
            <Image
              src="/images/pokoro/sec01-img01.png"
              alt="POKORO Device"
              width={420}
              height={550}
              className="w-[320px] md:w-[420px] h-auto"
            />
            {/* 기능 아이콘 그리드 */}
            <ul className="flex flex-wrap justify-center gap-8">
              {t.sec01.features.map((f, i) => (
                <li key={f.label} className="flex flex-col items-center gap-2 w-[100px]">
                  <Image
                    src={featureIcons[i]}
                    alt={f.label}
                    width={100}
                    height={100}
                    className="w-[100px] h-[100px] rounded-2xl"
                  />
                  <span className="text-[13px] font-bold text-black text-center leading-tight">
                    {f.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
        </LazySection>

        {/* ━━━ 3. 문제 / 해결책 ━━━ */}
        <LazySection>
        <section className="py-24 bg-[#f5f5f5]">
          <div className="max-w-[1200px] mx-auto px-6">
            {/* 문제 제기 */}
            <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
              <div className="w-full lg:w-1/2">
                <Image
                  src="/images/pokoro/sec02-img01.png"
                  alt="Child with tablet"
                  width={600}
                  height={500}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="w-full lg:w-1/2">
                <p className="text-[22px] text-black leading-[1.6] mb-4">{t.sec02.p1}</p>
                <p className="text-[18px] text-black/55 leading-[1.7]">{t.sec02.p2}</p>
              </div>
            </div>
            {/* 해결책 강조 */}
            <div className="text-center bg-white rounded-3xl py-16 px-8 shadow-sm">
              <h2 className="text-[32px] md:text-[40px] font-bold text-black leading-snug mb-6">
                {t.sec02.question}
              </h2>
              <p className="text-[28px] font-bold">
                <span className="bg-[linear-gradient(transparent_50%,#f8e581_50%)]">
                  {t.sec02.answer}<sup className="text-[12px] align-super">TM</sup>
                </span>
              </p>
            </div>
          </div>
        </section>
        </LazySection>

        {/* ━━━ 4. 3대 핵심 강점 ━━━ */}
        <LazySection>
        <section className="py-24 bg-[#f8e581]">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="text-[40px] font-bold text-black text-center mb-16">
              {t.sec03.creativity.heading}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* 강점 1: 스크린 없는 AI */}
              <div className="bg-white rounded-3xl p-8 flex flex-col gap-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <span className="text-white text-xl font-bold">1</span>
                </div>
                <h3 className="text-[22px] font-bold text-black">{t.sec03.screenFree.heading}</h3>
                <p className="text-[16px] text-black/60 leading-[1.7]">{t.sec03.screenFree.description}</p>
              </div>
              {/* 강점 2: TAP · TALK · CONNECT */}
              <div className="bg-white rounded-3xl p-8 flex flex-col gap-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <span className="text-white text-xl font-bold">2</span>
                </div>
                <h3 className="text-[22px] font-bold text-black">{t.sec03.handsOn.heading}</h3>
                <p className="text-[16px] text-black/60 leading-[1.7]">{t.sec03.handsOn.description}</p>
              </div>
              {/* 강점 3: 리모컨 크기 */}
              <div className="bg-white rounded-3xl p-8 flex flex-col gap-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <span className="text-white text-xl font-bold">3</span>
                </div>
                <h3 className="text-[22px] font-bold text-black">{t.sec03.remoteFriend.heading}</h3>
                <p className="text-[16px] text-black/60 leading-[1.7]">{t.sec03.remoteFriend.description}</p>
              </div>
            </div>

            {/* TAP · TALK · CONNECT 시각화 */}
            <div className="grid md:grid-cols-3 gap-6 mt-16">
              {[
                { img: "/images/pokoro/sec03-cont05-img01.png", label: "TAP." },
                { img: "/images/pokoro/sec03-cont05-img02.png", label: "TALK." },
                { img: "/images/pokoro/sec03-cont05-img03.png", label: "CONNECT." },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <Image
                    src={item.img}
                    alt={item.label}
                    width={430}
                    height={432}
                    className="w-full h-auto rounded-2xl"
                  />
                  <h3 className="text-[28px] font-bold text-black mt-4">{item.label}</h3>
                </div>
              ))}
            </div>

            {/* 디바이스 기능 이미지 */}
            <div className="mt-16">
              <Image
                src="/images/pokoro/Group39.png"
                alt="POKORO Device Features"
                width={1400}
                height={903}
                className="w-full h-auto hidden md:block rounded-2xl"
              />
              <Image
                src="/images/pokoro/Group39_mo.png"
                alt="POKORO Device Features"
                width={1024}
                height={786}
                className="w-full max-w-md mx-auto h-auto md:hidden rounded-2xl"
              />
            </div>
          </div>
        </section>
        </LazySection>

        {/* ━━━ 5. AI 학습 기능 ━━━ */}
        <LazySection>
        <section className="py-24 bg-white">
          <div className="max-w-[1200px] mx-auto px-6 flex flex-col gap-24">

            {/* 5-1. 질문하고 답을 찾는 법 */}
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="w-full lg:w-1/2 flex justify-center">
                <Image
                  src="/images/pokoro/sec04-cont02-img01.png"
                  alt="POKORO Ask Questions"
                  width={540}
                  height={517}
                  className="w-full max-w-[480px] h-auto"
                />
              </div>
              <div className="w-full lg:w-1/2">
                <h2 className="text-[36px] font-bold text-black mb-4">{t.sec04.askQuestions.heading}</h2>
                <p className="text-[18px] text-black/60 leading-[1.8]">{t.sec04.askQuestions.description}</p>
              </div>
            </div>

            {/* 5-2. 외국어 연습 */}
            <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
              <div className="w-full lg:w-1/2 flex flex-col sm:flex-row gap-4 justify-center">
                <Image
                  src="/images/pokoro/sec04-cont04-img01.png"
                  alt="Language Practice 1"
                  width={380}
                  height={440}
                  className="w-full sm:w-[48%] h-auto"
                />
                <Image
                  src="/images/pokoro/sec04-cont04-img02.png"
                  alt="Language Practice 2"
                  width={380}
                  height={440}
                  className="w-full sm:w-[48%] h-auto"
                />
              </div>
              <div className="w-full lg:w-1/2">
                <h2 className="text-[36px] font-bold text-black mb-4">{t.sec04.languagePractice.heading}</h2>
                <p className="text-[18px] text-black/60 leading-[1.8] mb-3">{t.sec04.languagePractice.p1}</p>
                <p className="text-[18px] text-black/60 leading-[1.8] mb-3">{t.sec04.languagePractice.p2}</p>
                <p className="text-[18px] text-black/60 leading-[1.8]">{t.sec04.languagePractice.p3}</p>
              </div>
            </div>

            {/* 5-3. 플래시카드 */}
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="w-full lg:w-1/2">
                <Image
                  src="/images/pokoro/sec04-cont03-img01.png"
                  alt="POKORO Flashcard"
                  width={600}
                  height={509}
                  className="w-full h-auto"
                />
              </div>
              <div className="w-full lg:w-1/2">
                <h2 className="text-[36px] font-bold text-black mb-4">{t.sec04.flashcards.heading}</h2>
                <p className="text-[18px] text-black/60 leading-[1.8] mb-6">{t.sec04.flashcards.description}</p>
                <h3 className="text-[24px] font-bold text-black mb-2">{t.sec04.turnWhy.heading}</h3>
                <p className="text-[18px] text-black/60 leading-[1.8]">{t.sec04.turnWhy.description}</p>
              </div>
            </div>
          </div>
        </section>
        </LazySection>

        {/* ━━━ 6. 학부모 가이드 ━━━ */}
        <LazySection>
        <section className="py-24 bg-[#f5f5f5]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="w-full lg:w-1/2">
                <h2 className="text-[36px] font-bold text-black mb-4">{t.sec04.parentalGuidance.heading}</h2>
                <p className="text-[18px] text-black/60 leading-[1.8] mb-3">{t.sec04.parentalGuidance.p1}</p>
                <p className="text-[18px] text-black/60 leading-[1.8]">{t.sec04.parentalGuidance.p2}</p>
              </div>
              <div className="w-full lg:w-1/2">
                <Image
                  src="/images/pokoro/sec04-cont05.png"
                  alt="Parental Guidance Tool"
                  width={600}
                  height={300}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>
        </LazySection>

        {/* ━━━ 7. 구매 CTA ━━━ */}
        <section className="bg-[#f8e581] py-24">
          <div className="max-w-[800px] mx-auto px-6 text-center">
            <h2 className="text-[42px] font-bold text-black mb-4">
              POKORO<sup className="text-[16px] align-super">TM</sup>
            </h2>
            <p className="text-[20px] text-black/70 mb-10">{t.hero.subtitle2}</p>
            <Link
              href={STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white text-[20px] px-12 py-5 rounded-full font-semibold hover:bg-black/75 transition-colors"
            >
              포코로 구입하기
            </Link>
          </div>
        </section>

      </main>
      <Footer lang={lang} dict={dict.common.footer} />
    </>
  );
}
