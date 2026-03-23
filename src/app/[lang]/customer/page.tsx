import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomerInquiryForm from "@/components/CustomerInquiryForm";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "고객지원 - 네오랩컨버전스",
  description: "최고의 만족을 드릴 수 있도록 고객의 입장에서 최선을 다하겠습니다.",
};

const notices = [
  { id: "공지", title: "POKORO DB버전 업그레이드 작업 안내", author: "NeoLAB_CS", date: "2026-03-16", views: 2, isNotice: true },
  { id: "공지", title: "네오스튜디오2 DB버전 업그레이드 작업 안내", author: "NeoLAB_CS", date: "2026-03-16", views: 2, isNotice: true },
  { id: "공지", title: "(주) 네오랩컨버전스 고객지원 및 배송 업무 안내 <26년 임직원 조기 퇴근 및 설 연휴>", author: "NeoLAB_CS", date: "2026-02-12", views: 18, isNotice: true },
  { id: "공지", title: "네오스튜디오2 서버 점검 작업 및 앱 업데이트 필수 안내", author: "NeoLAB_CS", date: "2026-02-02", views: 31, isNotice: true },
  { id: "공지", title: "POKORO 서버 점검 작업에 따른 서비스 일시 중지 안내", author: "NeoLAB_CS", date: "2026-01-26", views: 25, isNotice: true },
  { id: "공지", title: "(주) 네오랩컨버전스 고객지원 및 배송 업무 안내 <25년 추석 연휴 >", author: "NeoLAB_CS", date: "2025-09-23", views: 42, isNotice: true },
  { id: "공지", title: "A/S 처리 비용 일부 조정 안내", author: "NeoLAB", date: "2025-06-19", views: 89, isNotice: true },
  { id: "공지", title: "A/S 처리 기준 및 택배비 부담 안내", author: "NeoLAB_CS", date: "2025-05-22", views: 89, isNotice: true },
  { id: "공지", title: "[공지] 네오랩컨버전스 홈페이지 이용약관 및 개인정보처리방침 개정 안내", author: "NeoLAB_CS", date: "2025-05-22", views: 35, isNotice: true },
  { id: "공지", title: "(주) 네오랩컨버전스 A/S 종료 제품 안내", author: "NeoLAB_CS", date: "2023-05-08", views: 500, isNotice: true },
  { id: "공지", title: "핑크퐁 펜(NSP-C200) 'USB 케이블' 리콜 신청 안내", author: "NeoLAB_CS", date: "2022-12-05", views: 310, isNotice: true },
  { id: 20, title: "(주) 네오랩컨버전스 고객지원 및 배송 업무 안내 <25년 추석 연휴 >", author: "NeoLAB_CS", date: "2025-09-23", views: 36, isNotice: false },
  { id: 15, title: "(주) 네오랩컨버전스 고객지원 및 배송 업무 안내 <25년 5월 징검다리 휴무>", author: "NeoLAB_CS", date: "2025-04-28", views: 35, isNotice: false },
  { id: 14, title: "(주) 네오랩컨버전스 고객지원 및 배송 업무 안내 <25년 설 연휴>", author: "NeoLAB_CS", date: "2025-01-22", views: 41, isNotice: false },
  { id: 13, title: "(주) 네오랩컨버전스 고객지원 및 배송 업무 안내 <24년 추석 연휴>", author: "NeoLAB_CS", date: "2024-09-05", views: 49, isNotice: false },
  { id: 12, title: "(주) 네오랩컨버전스 고객지원 및 배송 업무 안내 <24년 현충일 징검다리 휴무>", author: "NeoLAB_CS", date: "2024-06-04", views: 58, isNotice: false },
  { id: 11, title: "(주) 네오랩컨버전스 고객지원 및 배송 업무 안내 <24년 설 연휴>", author: "NeoLAB_CS", date: "2024-02-02", views: 71, isNotice: false },
  { id: 10, title: "(주) 네오랩컨버전스 고객지원 및 배송 업무 안내 <23년 종무식 관련>", author: "NeoLAB_CS", date: "2023-12-26", views: 75, isNotice: false },
  { id: 9, title: "(주) 네오랩컨버전스 고객지원 및 배송 업무 안내 <23년 추석 연휴>", author: "NeoLAB_CS", date: "2023-09-19", views: 65, isNotice: false },
  { id: 8, title: "(주) 네오랩컨버전스 고객지원 및 배송 업무 안내 <23년 광복절 징검다리 휴무>", author: "NeoLAB_CS", date: "2023-08-07", views: 70, isNotice: false },
  { id: 6, title: "N2 초기 모델(F110) 보상판매 종료 안내 <~2023년 4월30일까지>", author: "NeoLAB_CS", date: "2023-02-17", views: 159, isNotice: false },
  { id: 5, title: "(주) 네오랩컨버전스 고객지원 및 배송 업무 안내 <23년 설 연휴>", author: "NeoLAB_CS", date: "2023-01-10", views: 105, isNotice: false },
  { id: 4, title: "(주) 네오랩컨버전스 고객지원 및 배송 업무 안내 <22년 종무식 관련>", author: "NeoLAB_CS", date: "2022-12-21", views: 103, isNotice: false },
  { id: 3, title: "핑크퐁 펜(NSP-C200) 'USB 케이블' 리콜 FAQ 안내", author: "NeoLAB_CS", date: "2022-12-05", views: 207, isNotice: false },
];

export default async function CustomerPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
      <Header lang={lang} dict={dict.common.header} />
      <div className="bg-white min-h-screen text-[#333]">

        {/* Hero Section */}
        <section className="bg-[#FCF9F9] relative overflow-hidden py-24">
          <div className="max-w-[1080px] mx-auto px-4 flex flex-col md:flex-row relative z-10">
            <div className="w-full md:w-1/2 pt-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-[2px] bg-[#E1A02E]"></div>
                <span className="text-[#E1A02E] font-bold text-sm tracking-widest uppercase">Customer Support</span>
              </div>
              <h1 className="text-6xl font-serif text-[#333] mb-6">고객센터</h1>
              <p className="text-gray-600 text-lg mb-16 leading-relaxed">
                최고의 만족을 드릴 수 있도록 고객의 입장에서 최선을 다하겠습니다.
              </p>

              <h2 className="text-4xl font-bold text-[#333] mb-6">1588-6239</h2>
              <div className="text-gray-600 space-y-4 text-[15px] leading-relaxed">
                <p>네오랩컨버전스 상담시간 : 10:00~18:00(평일 / 점심시간 12:00~13:00)</p>
                <p>1661-2981 대교 눈높이</p>
                <p>1833-6239 엠베스트</p>
                <p>1661-1311 구몬</p>
                <div className="h-px w-full bg-gray-200 my-4"></div>
                <p>A/S 센터 : 경기도 수원시 권선구 서부로 1433-20 4층 401호</p>
                <p>네오랩컨버전스 A/S센터 지정택배 : CJ대한통운</p>
              </div>
            </div>

            {/* Hero right - decorative illustration */}
            <div className="hidden md:block w-full md:w-1/2 relative min-h-[480px]">
              <div
                className="absolute top-10 right-0 w-[380px] h-[460px] bg-[#C4B5A8] opacity-75"
                style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%' }}
              ></div>
              <div className="absolute top-4 right-14 w-8 h-8 bg-[#E87B00] rounded-full"></div>
              <div className="absolute bottom-24 left-12 w-14 h-14 bg-[#32E8E1] rounded-full border-4 border-white shadow"></div>
              {/* Heart shape */}
              <div className="absolute top-[30%] right-[28%]" style={{ transform: 'rotate(-8deg)' }}>
                <div className="relative w-[150px] h-[150px]">
                  <div className="absolute top-0 left-[25px] w-[100px] h-[100px] bg-[#EBB4BC] rounded-full"></div>
                  <div className="absolute top-[25px] left-0 w-[100px] h-[100px] bg-[#EBB4BC] rounded-full"></div>
                  <div
                    className="absolute top-[40px] left-[12px] w-[126px] h-[110px] bg-[#EBB4BC]"
                    style={{ clipPath: 'polygon(50% 100%, 0% 20%, 100% 20%)' }}
                  ></div>
                </div>
                <div className="w-[6px] h-[180px] bg-[#D7AA6A] mx-auto mt-[-20px]" style={{ transform: 'rotate(5deg)' }}></div>
              </div>
            </div>
          </div>
        </section>

        {/* Notice Board */}
        <section className="py-16 max-w-[1080px] mx-auto px-4">
          {/* Search bar */}
          <div className="flex justify-end mb-4 gap-2">
            <select className="border border-gray-300 text-sm px-2 py-1.5 text-[#333] focus:outline-none focus:border-gray-500">
              <option value="fn_title">제목</option>
              <option value="fn_content">내용</option>
              <option value="fn_writer">작성자</option>
            </select>
            <input
              type="text"
              className="border border-gray-300 text-sm px-3 py-1.5 w-40 focus:outline-none focus:border-gray-500"
              placeholder=""
            />
            <button className="bg-gray-600 text-white text-sm px-4 py-1.5 hover:bg-gray-700 transition-colors">검색</button>
          </div>

          <div className="border-t-2 border-black">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-300 bg-[#F9F9F9] text-[#333] text-[13px] font-semibold">
                  <th className="py-3 px-3 text-center w-16">번호</th>
                  <th className="py-3 px-3">제목</th>
                  <th className="py-3 px-3 text-center w-28">작성자</th>
                  <th className="py-3 px-3 text-center w-28">날짜</th>
                  <th className="py-3 px-3 text-center w-16">조회</th>
                </tr>
              </thead>
              <tbody>
                {notices.map((n, idx) => (
                  <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50 transition-colors text-[13px] text-[#666]">
                    <td className="py-3 px-3 text-center">
                      {n.isNotice ? (
                        <span className="inline-block bg-[#f0a500] text-white text-[11px] font-bold px-2 py-0.5 rounded-sm">공지</span>
                      ) : (
                        String(n.id)
                      )}
                    </td>
                    <td className="py-3 px-3 hover:text-[#ff4e00] cursor-pointer">
                      <Link href="https://www.neolab.kr/customer/" target="_blank" rel="noopener noreferrer">
                        {n.title}
                      </Link>
                    </td>
                    <td className="py-3 px-3 text-center">{n.author}</td>
                    <td className="py-3 px-3 text-center">{n.date}</td>
                    <td className="py-3 px-3 text-center">{n.views}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8 gap-1">
            <button className="w-8 h-8 flex items-center justify-center border border-gray-300 text-gray-400 text-xs hover:bg-gray-50">«</button>
            <button className="w-8 h-8 flex items-center justify-center border border-gray-300 text-gray-400 text-xs hover:bg-gray-50">‹</button>
            <button className="w-8 h-8 flex items-center justify-center border border-black bg-black text-white font-bold text-xs">1</button>
            <button className="w-8 h-8 flex items-center justify-center border border-gray-300 text-gray-600 text-xs hover:bg-gray-50">2</button>
            <button className="w-8 h-8 flex items-center justify-center border border-gray-300 text-gray-400 text-xs hover:bg-gray-50">›</button>
            <button className="w-8 h-8 flex items-center justify-center border border-gray-300 text-gray-400 text-xs hover:bg-gray-50">»</button>
          </div>
        </section>

        {/* Product Categories Section */}
        <section className="py-20 bg-[#F5F8F8]">
          <div className="max-w-[1080px] mx-auto px-4 text-center">
            <h2 className="text-[32px] font-bold mb-16 text-[#333]">각 제품군의 상세 설명</h2>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 max-w-[860px] mx-auto">
              {/* 소리펜 */}
              <div className="flex flex-col items-center">
                <Link href={`/${lang}/soundpen`} className="block w-[160px] h-[160px] rounded-full overflow-hidden mb-5 shadow-lg transition-transform hover:-translate-y-2 bg-[#FDE8C8] flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/soundpen/poppen_soundpen_001.png"
                    alt="소리펜"
                    className="w-full h-full object-cover"
                  />
                </Link>
                <h3 className="text-[17px] font-bold mb-4 text-[#333]">소리펜</h3>
                <Link
                  href={`/${lang}/soundpen`}
                  className="bg-[#222] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#ff4e00] transition-colors"
                >
                  자세히 알아보기
                </Link>
              </div>

              {/* 미디어플레이어 */}
              <div className="flex flex-col items-center">
                <div className="w-[160px] h-[160px] rounded-full overflow-hidden mb-5 shadow-lg transition-transform hover:-translate-y-2 bg-[#E8F0F5] flex items-center justify-center cursor-pointer">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/pokoro/sec01-img01.png"
                    alt="미디어플레이어"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-[17px] font-bold mb-4 text-[#333]">미디어플레이어</h3>
                <Link
                  href={`/${lang}/pokoro`}
                  className="bg-[#222] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#ff4e00] transition-colors"
                >
                  자세히 알아보기
                </Link>
              </div>

              {/* 빔프로젝터 */}
              <div className="flex flex-col items-center">
                <div className="w-[160px] h-[160px] rounded-full overflow-hidden mb-5 shadow-lg transition-transform hover:-translate-y-2 bg-[#EEF2F0] flex items-center justify-center cursor-pointer">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/technology/Neo-02.png"
                    alt="빔프로젝터"
                    className="w-full h-full object-contain p-4"
                  />
                </div>
                <h3 className="text-[17px] font-bold mb-4 text-[#333]">빔프로젝터</h3>
                <Link
                  href="https://www.neolab.kr/customer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#222] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#ff4e00] transition-colors"
                >
                  자세히 알아보기
                </Link>
              </div>

              {/* 네오스마트펜 */}
              <div className="flex flex-col items-center">
                <Link href={`/${lang}/neosmartpen`} className="block w-[160px] h-[160px] rounded-full overflow-hidden mb-5 shadow-lg transition-transform hover:-translate-y-2 bg-[#E8EAF0] flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/neosmartpen/main/hero_bg.jpg"
                    alt="네오스마트펜"
                    className="w-full h-full object-cover"
                  />
                </Link>
                <h3 className="text-[17px] font-bold mb-4 text-[#333]">네오스마트펜</h3>
                <Link
                  href={`/${lang}/neosmartpen`}
                  className="bg-[#222] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#ff4e00] transition-colors"
                >
                  자세히 알아보기
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Inquiry Form Section */}
        <CustomerInquiryForm />

        {/* Contact Info Section */}
        <section className="py-16 bg-white">
          <div className="max-w-[1080px] mx-auto px-4 text-center">
            <h3 className="text-[28px] font-bold text-[#333] mb-10">연락처</h3>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-[15px] text-[#555]">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#ff4e00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:cs@neolab.net" className="hover:text-[#ff4e00] transition-colors">cs@neolab.net</a>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#ff4e00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>1588-6239 네오랩</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>1833-6239 엠베스트</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>1661-2981 대교 눈높이</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>1661-1311 구몬</span>
              </div>
            </div>
          </div>
        </section>

      </div>
      <Footer lang={lang} dict={dict.common.footer} />
    </>
  );
}
