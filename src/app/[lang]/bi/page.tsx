import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "CI/BI (브랜드 가이드라인) | 네오스마트펜",
  description: "네오랩 컨버전스의 브랜드 가이드라인",
};

export default async function BiPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
      <Header lang={lang} dict={dict.common.header} />
      <div className="bg-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative w-full bg-[#f8f9fa] pt-[100px] overflow-hidden border-b border-gray-200">
        <div className="absolute inset-0 z-0">
            {/* CI/BI style background blur pattern */}
            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-[#ffcccb] via-[#e2d5f8] to-transparent opacity-60 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-gradient-to-t from-[#f0f4f8] to-transparent opacity-80 blur-2xl"></div>
        </div>

        <div className="max-w-[1080px] mx-auto px-4 relative z-10 py-16 pb-24">
          <h1 className="text-[80px] font-extrabold text-[#000000] leading-tight font-sans tracking-tight">
            브랜드 가이드 라인
          </h1>
        </div>
        
        {/* Soft bottom wave divider overlay */}
        <div className="absolute bottom-[-2px] left-0 w-full overflow-hidden leading-[0] z-20">
          <svg className="block w-[calc(110%+1.3px)] h-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C71.37,20.44,151.72,42.71,213.9,50.75,249.23,55.33,285.4,59.35,321.39,56.44Z" className="fill-white"></path>
          </svg>
        </div>
      </section>

      {/* CI Section */}
      <section className="max-w-[1080px] mx-auto px-4 py-24 border-b border-gray-300">
        <h2 className="text-[40px] font-bold text-[#333] mb-12">네오랩 컨버전스 Corporate Identity</h2>
        
        <div className="mb-20">
          <h3 className="text-[24px] font-medium text-[#444] mb-8">COLOR SYSTEM</h3>
          <div className="flex gap-8">
            <div className="w-[300px] h-[160px] bg-[#ff6720] rounded-[30px] shadow-[0_15px_30px_rgba(255,103,32,0.3)] flex items-center p-8 transition-transform hover:-translate-y-1">
              <p className="text-white text-[24px] font-medium leading-relaxed">Pantone 165 C<br/>/ #ff6720</p>
            </div>
            <div className="w-[300px] h-[160px] bg-[#53565A] rounded-[30px] shadow-[0_15px_30px_rgba(83,86,90,0.3)] flex items-center p-8 transition-transform hover:-translate-y-1">
              <p className="text-white text-[24px] font-medium leading-relaxed">Pantone<br/>COOL GRAY<br/>11 / #53565A</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-[24px] font-medium text-[#444] mb-8">LOGO</h3>
          <div className="grid grid-cols-4 gap-4 items-stretch border border-gray-100">
            <div className="p-8 flex justify-center items-center bg-white">
               <img src="/images/bi/NeoLAB-CI-2.png" alt="NeoLAB Logo — Gray" className="max-h-[60px] w-auto" />
            </div>
            <div className="p-8 flex justify-center items-center bg-white">
               <img src="/images/bi/NeoLAB-CI-4.png" alt="NeoLAB Logo — Dark" className="max-h-[60px] w-auto" />
            </div>
            <div className="p-8 flex justify-center items-center bg-white">
               <img src="/images/bi/NeoLAB-CI-3.png" alt="NeoLAB Logo — Color" className="max-h-[60px] w-auto" />
            </div>
            <div className="p-8 flex justify-center items-center bg-[#53565A]">
               <img src="/images/bi/NeoLAB-CI-1.png" alt="NeoLAB Logo — White" className="max-h-[60px] w-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* BI Section */}
      <section className="max-w-[1080px] mx-auto px-4 py-24 pb-32">
        <h2 className="text-[40px] font-bold text-[#333] mb-12">네오 스마트펜 Brand Identity</h2>
        
        <div className="mb-20">
          <h3 className="text-[24px] font-medium text-[#444] mb-8">브랜드 스토리</h3>
          <div className="flex justify-center py-8">
            <img src="/images/bi/bi01.jpg" alt="브랜드 스토리 — 나무 + 펜 + 앱 = Neo Symbol" className="max-w-full w-auto" />
          </div>
        </div>
        
        <div className="mb-20">
          <h3 className="text-[24px] font-medium text-[#444] mb-8">COLOR SYSTEM</h3>
          <div className="flex rounded-[16px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
            <div className="flex-1 h-[220px] bg-[#48a9c5] flex flex-col justify-center p-8 items-center text-center">
              <p className="text-white text-[24px] font-medium leading-[1.6]">PANTON<br/>7702C /<br/>#48a9c5</p>
            </div>
            <div className="flex-1 h-[220px] bg-[#00778b] flex flex-col justify-center p-8 items-center text-center">
              <p className="text-white text-[24px] font-medium leading-[1.6]">PANTON<br/>3145C /<br/>#00778b</p>
            </div>
            <div className="flex-1 h-[220px] bg-[#1d252d] flex flex-col justify-center p-8 items-center text-center">
              <p className="text-white text-[24px] font-medium leading-[1.6]">PANTON<br/>433C /<br/>#1d252d</p>
            </div>
            <div className="flex-1 h-[220px] bg-[#9ea2a2] flex flex-col justify-center p-8 items-center text-center">
              <p className="text-white text-[24px] font-medium leading-[1.6]">PANTON<br/>422C /<br/>#9ea2a2</p>
            </div>
            <div className="flex-1 h-[220px] bg-[#dbe2e9] flex flex-col justify-center p-8 items-center text-center">
              <p className="text-[#666] text-[24px] font-medium leading-[1.6]">PANTON<br/>649C /<br/>#dbe2e9</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-[24px] font-medium text-[#444] mb-8">LOGO</h3>

          <div className="flex flex-col gap-6">
              {/* Grey logos on white background */}
              <div className="grid grid-cols-4 gap-4 p-8 items-center bg-white border border-gray-100">
                 <div className="flex justify-center"><img src="/images/bi/logo_01.png" className="max-h-12 w-auto" alt="NEO SMARTPEN grey_01"/></div>
                 <div className="flex justify-center"><img src="/images/bi/logo_02.png" className="max-h-12 w-auto" alt="NEO SMARTPEN grey_02"/></div>
                 <div className="flex justify-center"><img src="/images/bi/logo_03.png" className="max-h-12 w-auto" alt="NEO SMARTPEN grey_03"/></div>
                 <div className="flex justify-center"><img src="/images/bi/logo_04.png" className="max-h-12 w-auto" alt="NEO SMARTPEN grey_04"/></div>
              </div>

              {/* White logos on dark background */}
              <div className="grid grid-cols-4 gap-4 p-8 items-center bg-[#53565A]">
                 <div className="flex justify-center"><img src="/images/bi/logo_05.png" className="max-h-12 w-auto" alt="NEO SMARTPEN white_01"/></div>
                 <div className="flex justify-center"><img src="/images/bi/logo_06.png" className="max-h-12 w-auto" alt="NEO SMARTPEN white_02"/></div>
                 <div className="flex justify-center"><img src="/images/bi/logo_07.png" className="max-h-12 w-auto" alt="NEO SMARTPEN white_03"/></div>
                 <div className="flex justify-center"><img src="/images/bi/logo_08.png" className="max-h-12 w-auto" alt="NEO SMARTPEN white_04"/></div>
              </div>

              {/* Symbol — grey on white */}
              <div className="flex justify-between p-8 items-center border border-gray-100 bg-white">
                 <div className="text-[24px] font-medium text-[#444]">Symbol</div>
                 <div className="flex gap-16 pr-16">
                    <img src="/images/bi/logo_09.png" className="max-h-[60px] w-auto" alt="Symbol grey_02"/>
                    <img src="/images/bi/logo_10.png" className="max-h-[60px] w-auto" alt="Symbol grey_01"/>
                 </div>
              </div>

              {/* Symbol — white on dark */}
              <div className="flex justify-between p-8 items-center bg-[#53565A]">
                 <div className="text-[24px] font-medium text-white">Symbol</div>
                 <div className="flex gap-16 pr-16">
                    <img src="/images/bi/logo_11.png" className="max-h-[60px] w-auto" alt="Symbol white_02"/>
                    <img src="/images/bi/logo_12.png" className="max-h-[60px] w-auto" alt="Symbol white_01"/>
                 </div>
              </div>
          </div>
        </div>
      </section>
    </div>
    <Footer lang={lang} dict={dict.common.footer} />
    </>
  );
}
