import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "공지 사항 | 네오스마트펜",
  description: "네오랩 컨버전스의 공지 사항",
};

const notices = [
  { id: '공지', isNotice: true, title: "제 17기 정기주주총회 소집공고", author: "NeoLAB", date: "2026-03-12", views: 2 },
  { id: '공지', isNotice: true, title: "제 16기 정기주주총회 소집공고", author: "NeoLAB", date: "2025-03-14", views: 64 },
  { id: 12, isNotice: false, title: "2025년 11월 신주발행공고", author: "NeoLAB", date: "2025-11-20", views: 45 },
  { id: 11, isNotice: false, title: "2025년 9월 신주발행공고", author: "NeoLAB", date: "2025-09-25", views: 72 },
  { id: 9, isNotice: false, title: "제 15기 정기주주총회 소집공고", author: "NeoLAB_CS", date: "2024-03-14", views: 91 },
  { id: 8, isNotice: false, title: "정기주주총회 소집 통지의 건", author: "admined", date: "2023-03-16", views: 102 },
  { id: 6, isNotice: false, title: "임시주주총회 소집계획 변경 안내의 건", author: "admined", date: "2022-08-05", views: 92 },
  { id: 5, isNotice: false, title: "임시주주총회소집을 위한 기준일 및 주주명부 폐쇄기간 설정공고", author: "admined", date: "2022-08-03", views: 81 },
  { id: 3, isNotice: false, title: "전자증권 전환대상 주권 권리자(주주) 보호 및 조치사항 안내의 건", author: "admined", date: "2022-04-29", views: 94 },
  { id: 2, isNotice: false, title: "정기주주총회", author: "admined", date: "2022-03-23", views: 147 },
  { id: 1, isNotice: false, title: "통일규격주권교체 주식에 대한 입고계좌 요청의 건 (공문)", author: "admined", date: "2022-03-23", views: 234 },
];

export default async function NoticePage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
      <Header lang={lang} dict={dict.common.header} />
      <div className="bg-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative w-full bg-[#f8f9fa] pt-[100px] mb-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
             {/* Mimic the hero background blur gradient from original */}
            <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-br from-[#ffdbe0] to-transparent opacity-40 blur-3xl"></div>
            <div className="absolute top-20 right-0 w-1/3 h-full bg-gradient-to-bl from-[#dbebff] to-transparent opacity-40 blur-3xl"></div>
        </div>

        <div className="max-w-[1080px] mx-auto px-4 relative z-10 py-16">
          <h4 className="text-[#666666] text-[14px] font-sans tracking-[0.1em] uppercase mb-4">ANNOUNCEMENT</h4>
          <h1 className="text-[60px] font-extrabold text-[#000000] leading-tight font-sans">공지 사항</h1>
        </div>
        
        {/* Soft bottom wave divider overlay */}
        <div className="absolute bottom-[-2px] left-0 w-full overflow-hidden leading-[0] z-20">
          <svg className="block w-[calc(110%+1.3px)] h-[80px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C71.37,20.44,151.72,42.71,213.9,50.75,249.23,55.33,285.4,59.35,321.39,56.44Z" className="fill-white"></path>
          </svg>
        </div>
      </section>

      {/* Board Content */}
      <section className="max-w-[1080px] mx-auto px-4 pb-32">
        {/* Search & Filter */}
        <div className="flex justify-end mb-4">
          <div className="flex border border-gray-300 rounded-[2px] overflow-hidden">
            <select className="bg-[#f0f0f0] border-r border-gray-300 text-[13px] text-[#6a6a6a] px-3 py-2 outline-none">
              <option value="title">제목</option>
              <option value="content">내용</option>
              {/* Other options mock */}
            </select>
            <input type="text" className="bg-white min-w-[200px] text-[13px] px-3 py-2 outline-none placeholder:text-gray-400" />
            <button className="bg-[#f0f0f0] border-l border-gray-300 text-[13px] text-[#6a6a6a] font-bold px-4 py-2 hover:bg-gray-200 transition-colors">검색</button>
          </div>
        </div>

        {/* MangBoard Table UI */}
        <div className="border-t-[1.5px] border-black border-b border-b-gray-300">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-300 bg-[#FAFAFA] text-[#6a6a6a] text-[13px] font-medium">
                <th className="py-3 px-2 text-center w-[8%] font-medium">번호</th>
                <th className="py-3 px-2 text-center w-auto font-medium">제목</th>
                <th className="py-3 px-2 text-center w-[12%] font-medium">작성자</th>
                <th className="py-3 px-2 text-center w-[12%] font-medium">날짜</th>
                <th className="py-3 px-2 text-center w-[8%] font-medium">조회</th>
              </tr>
            </thead>
            <tbody>
              {notices.map((n, idx) => (
                <tr key={idx} className={`border-b border-gray-200 hover:bg-[#FDFDFD] transition-colors text-[13px] text-[#6a6a6a] h-[38px] ${n.isNotice ? 'bg-[#FAFAFA]' : ''}`}>
                  <td className={`py-2 px-2 text-center ${n.isNotice ? 'font-bold text-[#333]' : ''}`}>{n.id}</td>
                  <td className="py-2 px-6">
                    <Link href="#" className={`hover:underline block truncate max-w-[500px] ${n.isNotice ? 'font-bold text-[#333]' : ''}`}>
                      {n.title}
                      {n.title.includes('공고') && (
                        <span className="inline-block ml-2 w-3 h-3 bg-gray-300 text-[9px] text-white rounded-[2px] text-center leading-3 align-middle">📄</span>
                      )}
                    </Link>
                  </td>
                  <td className="py-2 px-2 text-center">
                    {n.author}
                    <span className="inline-block ml-1 w-3 h-3 bg-[#e8413b] text-white text-[9px] font-bold rounded-[2px] leading-3 text-center align-middle">M</span>
                  </td>
                  <td className="py-2 px-2 text-center text-[#999]">{n.date}</td>
                  <td className="py-2 px-2 text-center text-[#999]">{n.views}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination placeholder matching styling */}
        <div className="flex justify-center mt-12 space-x-1">
          <button className="w-7 h-7 flex items-center justify-center border border-gray-200 bg-white text-gray-400 cursor-not-allowed text-xs rounded-sm hover:bg-gray-50">«</button>
          <button className="w-7 h-7 flex items-center justify-center border border-gray-200 bg-white text-gray-400 cursor-not-allowed text-xs rounded-sm hover:bg-gray-50">‹</button>
          <button className="w-7 h-7 flex items-center justify-center border border-transparent bg-transparent text-[#333] font-bold cursor-default text-sm">1</button>
          <button className="w-7 h-7 flex items-center justify-center border border-gray-200 bg-white text-gray-400 cursor-not-allowed text-xs rounded-sm hover:bg-gray-50">›</button>
          <button className="w-7 h-7 flex items-center justify-center border border-gray-200 bg-white text-gray-400 cursor-not-allowed text-xs rounded-sm hover:bg-gray-50">»</button>
        </div>
      </section>
    </div>
    <Footer lang={lang} dict={dict.common.footer} />
    </>
  );
}
