import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LazySection from "@/components/LazySection";
import ContactModalTrigger from "@/components/ContactModalTrigger";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "AiGLE (아이글) - 손글씨로 작성하는 서·논술 AI 평가 지원 서비스",
  description: "네오랩컨버전스가 개발한 종이 기반 서·논술형 AI 평가 및 피드백 서비스. 스마트펜으로 글쓰기 전 과정을 기록하고 AI가 분석합니다.",
};

const AIGLE_URL = "https://aigle.neolab.net";

export default async function AiglePage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.aigle;

  return (
    <>
      <Header lang={lang} dict={dict.common.header} />
      <main>

        {/* ━━━ 1. HERO ━━━ */}
        <section
          className="relative flex items-center justify-center overflow-hidden"
          style={{ minHeight: "680px", background: "linear-gradient(135deg, #0f2235 0%, #1a3a5c 50%, #0d3347 100%)" }}
        >
          {/* 배경 패턴 */}
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #4fa8d5 0%, transparent 50%), radial-gradient(circle at 80% 30%, #2a7ab5 0%, transparent 50%)" }}
          />
          <div className="relative z-10 text-center px-6 max-w-[800px] mx-auto">
            <p className="text-[13px] font-semibold text-[#4fa8d5] uppercase tracking-[5px] mb-6">
              {t.hero.label}
            </p>
            <h1 className="text-[64px] md:text-[80px] font-black text-white leading-none mb-6 tracking-tight">
              Ai<span className="text-[#4fa8d5]">GLE</span>
            </h1>
            <p className="text-[20px] md:text-[24px] text-white/80 leading-[1.6] mb-10 whitespace-pre-line">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={AIGLE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#4fa8d5] text-white text-[17px] px-10 py-4 rounded-full font-semibold hover:bg-[#3a94c0] transition-colors"
              >
                {t.hero.cta}
              </Link>
              <ContactModalTrigger
                buttonText={t.hero.ctaSub}
                variant="pill"
                defaultCategory="아이글 문의"
              />
            </div>
          </div>
        </section>

        {/* ━━━ 2. 제품 소개 ━━━ */}
        <LazySection>
        <section className="py-24 bg-white">
          <div className="max-w-[1100px] mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="w-full lg:w-[48%]">
                <Image
                  src="/images/home/aigle-service.jpg"
                  alt="AiGLE 서비스 화면"
                  width={600}
                  height={420}
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
              <div className="w-full lg:w-[52%]">
                <p className="text-[13px] font-semibold text-[#4fa8d5] uppercase tracking-[4px] mb-3">
                  About AiGLE
                </p>
                <h2 className="text-[36px] font-bold text-gray-900 mb-6 leading-tight">
                  {t.intro.heading}
                </h2>
                <p className="text-[17px] text-gray-500 leading-[1.9] mb-6">
                  {t.intro.desc}
                </p>
                <div className="border-l-4 border-[#4fa8d5] pl-5 py-1">
                  <p className="text-[17px] text-gray-700 leading-[1.8] font-medium">
                    {t.intro.highlight}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        </LazySection>

        {/* ━━━ 3. 핵심 기능 ━━━ */}
        <LazySection>
        <section className="py-24 bg-[#f4f8fb]">
          <div className="max-w-[1100px] mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-[13px] font-semibold text-[#4fa8d5] uppercase tracking-[4px] mb-3">
                Key Features
              </p>
              <h2 className="text-[38px] font-bold text-gray-900">{t.features.heading}</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {t.features.items.map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-white font-bold text-[18px]"
                    style={{ background: "linear-gradient(135deg, #1a3a5c, #4fa8d5)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-[19px] font-bold text-gray-900 mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[15px] text-gray-500 leading-[1.8]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        </LazySection>

        {/* ━━━ 4. 이용 방법 ━━━ */}
        <LazySection>
        <section className="py-24 bg-white">
          <div className="max-w-[1100px] mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-[13px] font-semibold text-[#4fa8d5] uppercase tracking-[4px] mb-3">
                How It Works
              </p>
              <h2 className="text-[38px] font-bold text-gray-900">{t.howItWorks.heading}</h2>
            </div>

            <div className="relative">
              {/* 연결선 (데스크탑) */}
              <div className="hidden md:block absolute top-10 left-[16.66%] right-[16.66%] h-px bg-[#4fa8d5]/30" />
              <div className="grid md:grid-cols-3 gap-8">
                {t.howItWorks.steps.map((step, i) => (
                  <div key={i} className="flex flex-col items-center text-center">
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center mb-6 text-white font-black text-[22px] relative z-10"
                      style={{ background: "linear-gradient(135deg, #0f2235, #4fa8d5)" }}
                    >
                      {step.step}
                    </div>
                    <h3 className="text-[18px] font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-[15px] text-gray-500 leading-[1.8]">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>
        </LazySection>

        {/* ━━━ 5. 활용 대상 ━━━ */}
        <LazySection>
        <section className="py-24 bg-[#0f2235]">
          <div className="max-w-[1100px] mx-auto px-6">
            <div className="text-center mb-14">
              <p className="text-[13px] font-semibold text-[#4fa8d5] uppercase tracking-[4px] mb-3">
                Target Users
              </p>
              <h2 className="text-[38px] font-bold text-white">{t.target.heading}</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-10">
              {/* 학교급 */}
              <div>
                <h3 className="text-[13px] font-semibold text-[#4fa8d5] uppercase tracking-[3px] mb-4">
                  학교급
                </h3>
                <div className="flex flex-wrap gap-2">
                  {t.target.grades.map((g) => (
                    <span key={g} className="px-4 py-2 bg-white/10 text-white text-[14px] rounded-full border border-white/20">
                      {g}
                    </span>
                  ))}
                </div>
              </div>
              {/* 교과목 */}
              <div>
                <h3 className="text-[13px] font-semibold text-[#4fa8d5] uppercase tracking-[3px] mb-4">
                  활용 교과목
                </h3>
                <div className="flex flex-wrap gap-2">
                  {t.target.subjects.map((s) => (
                    <span key={s} className="px-4 py-2 bg-[#4fa8d5]/20 text-[#4fa8d5] text-[14px] rounded-full border border-[#4fa8d5]/40">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              {/* 지원 환경 */}
              <div>
                <h3 className="text-[13px] font-semibold text-[#4fa8d5] uppercase tracking-[3px] mb-4">
                  지원 환경
                </h3>
                <ul className="space-y-2">
                  {t.target.env.map((e) => (
                    <li key={e} className="flex items-center gap-2 text-white/70 text-[15px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4fa8d5] shrink-0" />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        </LazySection>

        {/* ━━━ 6. 이용 요금 ━━━ */}
        <LazySection>
        <section className="py-24 bg-[#f4f8fb]">
          <div className="max-w-[1100px] mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-[13px] font-semibold text-[#4fa8d5] uppercase tracking-[4px] mb-3">Pricing</p>
              <h2 className="text-[38px] font-bold text-gray-900 mb-3">{t.pricing.heading}</h2>
              <p className="text-[14px] text-gray-400">학교 인원에 관계없이, 각 학교별 계획에 따라 원하시는 상품을 선택하여 이용하실 수 있습니다.</p>
            </div>

            {/* 상품 안내 */}
            <div className="mb-4 space-y-1 text-[14px] text-gray-600">
              <p>• 1년차에는 <strong>스마트펜이 포함된 가격</strong>입니다.</p>
              <p>• 2년차부터는 스마트펜을 제외한 <strong>순수 서비스 가격</strong>으로 책정됩니다.</p>
            </div>

            {/* 메인 요금표 */}
            <div className="overflow-x-auto rounded-2xl shadow-sm mb-10">
              <table className="w-full text-[14px] text-center border-collapse">
                <thead>
                  <tr>
                    <th rowSpan={2} className="bg-gray-100 border border-gray-200 px-4 py-3 text-gray-700 font-semibold w-[100px]">상품명</th>
                    <th rowSpan={2} className="bg-gray-100 border border-gray-200 px-4 py-3 text-gray-700 font-semibold">요금제(원)</th>
                    <th colSpan={2} className="bg-[#f8e581] border border-gray-200 px-4 py-3 text-gray-800 font-semibold">1년차 서비스(기본)</th>
                    <th colSpan={2} className="bg-[#e8f4fd] border border-gray-200 px-4 py-3 text-[#1a3a5c] font-semibold">2년차부터 지불하는 요금</th>
                  </tr>
                  <tr>
                    <th className="bg-[#fdf4c0] border border-gray-200 px-4 py-2 text-gray-700 font-medium">스마트펜 지급 수량</th>
                    <th className="bg-[#fdf4c0] border border-gray-200 px-4 py-2 text-gray-700 font-medium">크레딧 제공량</th>
                    <th className="bg-[#d6edf9] border border-gray-200 px-4 py-2 text-gray-700 font-medium">요금제</th>
                    <th className="bg-[#d6edf9] border border-gray-200 px-4 py-2 text-gray-700 font-medium">크레딧 제공량</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "아이글 30",  price: "3,700,000원",  pen: "30",  credit1: "1,500", price2: "1,000,000원", credit2: "1,500" },
                    { name: "아이글 60",  price: "7,300,000원",  pen: "60",  credit1: "3,000", price2: "1,500,000원", credit2: "3,000" },
                    { name: "아이글 100", price: "10,600,000원", pen: "100", credit1: "5,000", price2: "2,000,000원", credit2: "4,500" },
                    { name: "아이글 150", price: "16,400,000원", pen: "150", credit1: "7,500", price2: "3,000,000원", credit2: "7,500" },
                  ].map((row) => (
                    <tr key={row.name} className="bg-white hover:bg-gray-50 transition-colors">
                      <td className="border border-gray-200 px-4 py-3 font-medium text-gray-800">{row.name}</td>
                      <td className="border border-gray-200 px-4 py-3 font-bold text-gray-900">{row.price}</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-600">{row.pen}</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-600">{row.credit1}</td>
                      <td className="border border-gray-200 px-4 py-3 font-semibold text-[#1a3a5c]">{row.price2}</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-600">{row.credit2}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 크레딧 추가 구매 */}
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div>
                <h3 className="text-[16px] font-bold text-gray-800 mb-4">크레딧 추가 구매</h3>
                <p className="text-[13px] text-gray-500 mb-3">기본 제공 크레딧 소진 후, 추가 크레딧을 구매하여 계속 이용할 수 있습니다.</p>
                <div className="overflow-hidden rounded-xl border border-gray-200">
                  <table className="w-full text-[14px] text-center">
                    <thead>
                      <tr className="bg-[#f8e581]">
                        <th className="px-4 py-2 font-semibold text-gray-800 border-r border-gray-200">추가 크레딧 제공가격</th>
                        <th className="px-4 py-2 font-semibold text-gray-800">추가 크레딧 제공량</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      {[
                        { price: "1,000,000원", credit: "1,500" },
                        { price: "1,500,000원", credit: "2,500" },
                        { price: "2,000,000원", credit: "4,000" },
                        { price: "2,500,000원", credit: "6,000" },
                      ].map((row) => (
                        <tr key={row.price} className="border-t border-gray-100">
                          <td className="px-4 py-2.5 font-semibold text-gray-900 border-r border-gray-100">{row.price}</td>
                          <td className="px-4 py-2.5 text-gray-600">{row.credit}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 스마트펜 & 크래들 단독 구매 */}
              <div>
                <h3 className="text-[16px] font-bold text-gray-800 mb-4">스마트펜 &amp; 크래들 단독 구매</h3>
                <p className="text-[13px] text-gray-500 mb-3">스마트펜과 크래들을 별도로 구매하실 경우, 1세트당 <strong>990,000원</strong>(부가세 포함)입니다.</p>
                <Link
                  href="https://www.s2b.kr/S2BNCustomer/S2B/scrweb/remu/rema/searchengine/s2bCustomerSearch.jsp?actionType=MAIN_SEARCH&searchField=&startIndex=&viewCount=50&viewType=LIST&sortField=RANK&priceMin=0&priceMax=0&priceMinSet=0&priceMaxSet=0&categoryLevel1Code=&categoryLevel2Code=&categoryLevel3Code=&categoryLevel3Name=&areaCode=&categoryWinStatus=none&companyCodeParam=&priceNewSet=true&publicPurchaseCode=&f_edufine_code=&submit_yn=Y&searchQuery=202603107261750&searchRequery=&locationGbn=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#1a3a5c] text-white text-[14px] px-6 py-3 rounded-xl font-semibold hover:bg-[#0f2235] transition-colors"
                >
                  S2B에서 구매하기 →
                </Link>
              </div>
            </div>
          </div>
        </section>
        </LazySection>

        {/* ━━━ 7. 도입 문의 CTA ━━━ */}
        <section style={{ background: "linear-gradient(135deg, #0f2235 0%, #1a3a5c 100%)" }} className="py-24">
          <div className="max-w-[700px] mx-auto px-6 text-center">
            <h2 className="text-[40px] font-bold text-white mb-4">{t.cta.heading}</h2>
            <p className="text-[17px] text-white/60 mb-10">{t.cta.desc}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Link
                href={AIGLE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#4fa8d5] text-white text-[17px] px-10 py-4 rounded-full font-semibold hover:bg-[#3a94c0] transition-colors"
              >
                {t.cta.btn}
              </Link>
              <ContactModalTrigger
                buttonText={t.cta.btnSub}
                variant="pill"
                defaultCategory="아이글 문의"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-white/50 text-[15px]">
              <a href={`tel:${t.cta.phone}`} className="hover:text-white/80 transition-colors">
                📞 {t.cta.phone}
              </a>
              <a href={`mailto:${t.cta.email}`} className="hover:text-white/80 transition-colors">
                ✉ {t.cta.email}
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer lang={lang} dict={dict.common.footer} />
    </>
  );
}
