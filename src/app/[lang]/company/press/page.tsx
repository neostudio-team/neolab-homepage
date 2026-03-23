import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "기업뉴스 | 네오스마트펜",
  description: "네오랩 컨버전스의 기업뉴스",
};

const pressReleases = [
  {
    title: "AI소리펜 포코로, iF 디자인 어워드 수상",
    author: "jylee",
    date: "Jul 7, 2025",
    category: "press",
    excerpt: "이데일리: 바로가기 김혜미 기자 등록 2025-03-09 오후 1:58:51 수정 2025-03-09 오후 1:59:03 네오랩컨버전스의 인공지능(AI) 소리펜 '포코로'가 세계 3대 디자인 어워드 중 하나인 iF 디자인 어워드 교육용 디지털 기기 부문에서 수상했다고 9일 밝혔다. AI 소리펜 포코로(사진=네오랩컨버전스) 포코로는 단순하고 직관적인 디자인을 비롯해 인체공학적 설계, 사용자 중심 이용경험(UX) 및 사용자 인터페이스(UI)를 갖춘 점을 높이 평가받았다....",
  },
  {
    title: "GPT 기반 AI 대화펜 ‘포코로’, 추석 특별 패키지 출시",
    author: "jylee",
    date: "Jul 7, 2025",
    category: "press",
    excerpt: "동아닷컴: 바로가기 업데이트 2024-09-13 10:00 2024년 9월 13일 10시 00분 입력 2024-09-13 10:00 포코로 AI 대화펜. 사진제공=네오랩컨버전스 네오랩컨버전스는 이번 추석을 맞아 포코로의 특별 패키지를 출시하고 진행 중인 무료 체험 프로모션을 확대 진행한다고 밝혔다. 포코로 무료 체험은 포코로 네이버 스마트스토어에서 신청할 수 있으며, 체험 후 구매를 원하는 경우 40% 할인 쿠폰도 제공된다. 네오랩컨버전스의 포코로는 AI 대화형 교육 기기...",
  },
  {
    title: "[조선에듀] [사용기] 끊임없이 대화하는 AI 소리펜 ‘포코로’",
    author: "neolabsuper",
    date: "Apr 5, 2024",
    category: "press",
    excerpt: "장희주 조선에듀 기자 기사 원문 (링크) 포코로 구성품. / 장희주 기자 현대 사회에서 교육은 더 이상 교실 안에서만 일어나는 것이 아니다. 디지털 시대의 도래로 함께 성장한 에듀테크 산업은 온라인 강의, 학습 앱, 가상 현실 학습 환경 등 학습자가 새로운 방식으로 지식을 습득하고, 능력을 향상할 수 있도록 돕는다. 초기 에듀테크 시장은 학습자에 알맞은 콘텐츠 구성이나, 교육적 가치를 생각하기보다 신기술을 적용하는 데 급급한 면이 있었다. 하지만 최근에는 더욱더 분명한 타겟과...",
  },
  {
    title: "2024년 최고의 스마트펜 리뷰: Neo 스마트펜 M1+",
    author: "admined",
    date: "Feb 5, 2024",
    category: "media, press",
    excerpt: "본 기사는 Android Police의 \"2024년 최고의 스마트펜\" 기사를 기반으로 합니다. 기사 원문 ( 링크 ) 21세기 디지털 시대에도 불구하고, 많은 이들은 여전히 전통적인 필기 방식을 선호합니다. 그러나 손으로 쓴 노트를 디지털화하는 것이 어려운 작업이 될 수 있습니다. 이러한 문제를 해결하기 위해 등장한 Neo 스마트펜 M1+는 사용자가 손쉽게 필기 내용을 디지털 데이터로 변환할 수 있게 해주는 혁신적인 기술을 탑재하고 있습니다. 특장점: 사용자 친화적인 앱:...",
  },
  {
    title: "[아이엠(I’M)] 이상규 네오랩컨버전스 대표 “AI소리펜 ‘포코로’ 교육시장 새 바람 불 것”",
    author: "pilsagong",
    date: "Jan 8, 2024",
    category: "press",
    excerpt: "아이뉴스24, 2024.01.08, [기사전문보기]",
  },
  {
    title: "펜 갖다 대면 음성이…한국어 교육도 ‘디지털’",
    author: "admined",
    date: "Dec 18, 2023",
    category: "press",
    excerpt: "Hello TV News.  2023.10.09 15 [기사원문보기] https://youtu.be/CxkvIt0z-f4",
  },
  {
    title: "창원시, 외국인 주민 한국어 학습 돕는다…소리펜 보급",
    author: "admined",
    date: "Dec 8, 2023",
    category: "press",
    excerpt: "연합뉴스 2023-09-08 [기사전문보기]",
  },
];

export default async function PressPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
      <Header lang={lang} dict={dict.common.header} />
      <div className="bg-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative w-full bg-[#f8f9fa] pt-[100px] mb-16 overflow-hidden">
         {/* Mimic the hero background blur gradient from original */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-bl from-[#7fb3f5] to-transparent opacity-30 blur-3xl rounded-full"></div>
          <div className="absolute top-20 left-10 w-[300px] h-[300px] bg-gradient-to-br from-[#f2a99d] to-transparent opacity-40 blur-3xl rounded-full"></div>
        </div>

        <div className="max-w-[1080px] mx-auto px-4 relative z-10 py-16">
          <h4 className="text-[#000000] text-[18px] font-bold tracking-[0.05em] uppercase mb-4 font-montserrat">NEWSROOM</h4>
          <h1 className="text-[60px] font-extrabold text-[#000000] leading-tight font-sans drop-shadow-sm">Press release</h1>
          <p className="mt-6 text-[#333] font-medium text-[15px]">홍보 및 보도자료 문의: <a href="mailto:korbiz@neolab.net" className="text-[#2ea3f2] hover:underline">korbiz@neolab.net</a></p>
        </div>
        
        {/* Soft bottom wave divider overlay */}
        <div className="absolute bottom-[-2px] left-0 w-full overflow-hidden leading-[0] z-20">
          <svg className="block w-[calc(110%+1.3px)] h-[80px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C71.37,20.44,151.72,42.71,213.9,50.75,249.23,55.33,285.4,59.35,321.39,56.44Z" className="fill-white"></path>
          </svg>
        </div>
      </section>

      {/* Blog List Section */}
      <section className="max-w-[1080px] mx-auto px-4 pb-32">
        <div className="max-w-[900px]">
          {pressReleases.map((post, index) => (
            <article key={index} className="mb-14 border-b border-gray-100 pb-12 last:border-0">
              <h2 className="text-[26px] font-medium text-[#333333] mb-3 leading-snug hover:text-[#2ea3f2] transition-colors cursor-pointer tracking-tight">
                <Link href="#">{post.title}</Link>
              </h2>
              
              <div className="text-[14px] text-[#666666] mb-5 font-medium">
                by <span className="text-[#888]">{post.author}</span> | {post.date} | <span className="hover:text-[#2ea3f2] cursor-pointer">{post.category}</span>
              </div>
              
              <p className="text-[14px] text-[#666666] leading-[1.7] mb-4 text-justify font-sans break-keep">
                {post.excerpt}
              </p>
              
              <Link href="#" className="text-[14px] text-[#2ea3f2] font-medium hover:underline inline-flex items-center">
                read more
              </Link>
            </article>
          ))}
          
          <div className="mt-8 pt-6 border-t border-gray-100">
            <Link href="#" className="text-[#2ea3f2] font-medium hover:underline text-sm flex items-center">
              <span className="mr-1">«</span> Older Entries
            </Link>
          </div>
        </div>
      </section>
    </div>
    <Footer lang={lang} dict={dict.common.footer} />
    </>
  );
}
