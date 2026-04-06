import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import JaCompanyPage from "./JaCompanyPage";
import CompanyHistoryTimeline from "./CompanyHistoryTimeline";
import CompanyHeroContent from "./CompanyHeroContent";

export const metadata: Metadata = {
  title: "회사소개 - 네오랩컨버전스",
  description: "Write the Future, Connect the World — 아날로그와 디지털을 연결하는 네오랩컨버전스",
};

const departments = [
  {
    name: "기획 & 디자인",
    desc: "사용자의 경험을 설계합니다.",
  },
  {
    name: "HW / FW / 기구 개발",
    desc: "세상에 없던 스마트 디바이스를 탄생시킵니다.",
  },
  {
    name: "SW 개발",
    desc: "데이터를 가치 있게 만드는 플랫폼을 구축합니다.",
  },
  {
    name: "사업",
    desc: "고객의 숨겨진 니즈까지 발굴하여 최적의 솔루션을 찾아드립니다.",
  },
  {
    name: "생산 & 경영지원",
    desc: "최고의 품질과 전략으로 시장의 신뢰를 확보합니다.",
  },
];

const offices = [
  {
    label: "서울 사무실",
    sublabel: "본사",
    address: "서울특별시 구로구 디지털로30길 28\n마리오타워 1501호, 1503호",
  },
  {
    label: "수원 사무실",
    sublabel: "생산 HUB",
    address: "경기도 수원시 권선구 서부로 1433-20\n델리스 4층",
  },
  {
    label: "도쿄 사무실",
    sublabel: "일본지사",
    address: "4-16-47-203, Shimorenjyaku\nMitaka city, Tokyo, Japan",
  },
];

export default async function CompanyPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  if (lang === "ja") {
    return <JaCompanyPage lang={lang} dict={dict} />;
  }

  return (
    <>
      <Header lang={lang} dict={dict.common.header} />
      <main>

        {/* ─── Hero ─── */}
        <section className="bg-[#0a0a0a] min-h-[80vh] flex items-center py-28">
          <div className="max-w-[1080px] mx-auto px-6 w-full">
            <p className="text-[#f8da2f] text-xs font-semibold tracking-[0.35em] uppercase mb-6">
              NeoLAB Convergence
            </p>
            <h1 className="text-[44px] sm:text-[60px] md:text-[80px] lg:text-[96px] font-black text-white leading-[1.0] mb-10">
              Write the Future,<br />
              <span className="text-[#f8da2f]">Connect</span> the World
            </h1>
            <div className="w-12 h-px bg-[#f8da2f] mb-10" />
            <CompanyHeroContent />
          </div>
        </section>

        {/* ─── History ─── */}
        <section className="py-24 bg-[#111]">
          <div className="max-w-[1080px] mx-auto px-6">
            <div className="mb-14">
              <p className="text-[#f8da2f] text-xs font-semibold tracking-[0.35em] uppercase mb-3">
                Our Journey
              </p>
              <h2 className="text-[48px] md:text-[64px] font-black text-white leading-none">
                HISTORY
              </h2>
            </div>
            <CompanyHistoryTimeline />
          </div>
        </section>

        {/* ─── People ─── */}
        <section className="py-24 bg-[#0f0f1e]">
          <div className="max-w-[1080px] mx-auto px-6">
            <div className="mb-12">
              <p className="text-[#f8da2f] text-xs font-semibold tracking-[0.35em] uppercase mb-3">
                Our Team
              </p>
              <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-black text-white leading-tight max-w-[580px]">
                "하드웨어의 견고함과 소프트웨어의 유연함,<br className="hidden md:block" />
                그 사이의 완벽한 밸런스"
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div className="space-y-5">
                <p className="text-gray-300 text-sm md:text-base leading-[2]">
                  하드웨어를 잘 아는 소프트웨어 개발자, 소프트웨어의 흐름을 이해하는 하드웨어 개발자.
                  네오랩컨버전스의 전문가들은 자신의 영역을 넘어 제품의 &apos;본질적 가치&apos;를 위해 협업합니다.
                </p>
                <p className="text-gray-500 text-sm leading-[2]">
                  개발, 제조의 복잡함은 네오랩이 해결합니다.<br />
                  고객은 비즈니스의 본질에만 집중하십시오.
                </p>
              </div>

              <div className="space-y-3">
                {departments.map((dept) => (
                  <div
                    key={dept.name}
                    className="flex items-start gap-4 p-4 rounded-xl border border-white/8 hover:border-[#f8da2f]/30 hover:bg-white/3 transition-all duration-200"
                  >
                    <div className="w-1 self-stretch rounded-full bg-[#f8da2f] shrink-0 min-h-[20px]" />
                    <div>
                      <p className="text-white font-semibold text-sm">{dept.name}</p>
                      <p className="text-gray-400 text-sm mt-0.5 leading-relaxed">{dept.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── Office ─── */}
        <section className="py-24 bg-white">
          <div className="max-w-[1080px] mx-auto px-6">
            <div className="mb-14">
              <p className="text-[#c8a800] text-xs font-semibold tracking-[0.35em] uppercase mb-3">
                Find Us
              </p>
              <h2 className="text-[48px] md:text-[64px] font-black text-black leading-none">
                OFFICE
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {offices.map((office) => (
                <div
                  key={office.label}
                  className="border border-gray-200 rounded-2xl p-8 hover:border-[#f8da2f] hover:shadow-lg transition-all duration-200 group"
                >
                  <p className="text-xs font-semibold tracking-[0.25em] text-gray-400 uppercase mb-2">
                    {office.sublabel}
                  </p>
                  <h3 className="text-xl font-black text-black mb-5 group-hover:text-[#b89600] transition-colors">
                    {office.label}
                  </h3>
                  <div className="w-8 h-px bg-[#f8da2f] mb-5" />
                  <p className="text-gray-500 text-sm leading-[1.85] whitespace-pre-line">
                    {office.address}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer lang={lang} dict={dict.common.footer} />
    </>
  );
}
