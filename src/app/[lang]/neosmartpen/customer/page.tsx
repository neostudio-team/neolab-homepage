import { Metadata } from "next";
import Link from "next/link";
import type { Locale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "고객지원 | 네오스마트펜",
  description: "최고의 만족을 드릴 수 있도록 고객의 입장에서 최선을 다하겠습니다.",
};

const notices = [
  { id: 25, title: "POKORO DB버전 업그레이드 작업 안내", author: "NeoLAB_CS", date: "2024.02.20", views: 104 },
  { id: 24, title: "네오스튜디오2 DB버전 업그레이드 작업 안내", author: "NeoLAB_CS", date: "2024.01.15", views: 251 },
  { id: 23, title: "(주) 네오랩컨버전스 고객지원 및 배송 업무 안내 <26년 임직원 조기 퇴근 및 설 연휴>", author: "NeoLAB_CS", date: "2023.12.28", views: 520 },
  { id: 22, title: "네오스튜디오2 서버 점검 작업 및 앱 업데이트 필수 안내", author: "NeoLAB_CS", date: "2023.11.10", views: 410 },
  { id: 21, title: "POKORO 서버 점검 작업에 따른 서비스 일시 중지 안내", author: "NeoLAB_CS", date: "2023.10.05", views: 88 },
  { id: 20, title: "(주) 네오랩컨버전스 고객지원 및 배송 업무 안내 <25년 추석 연휴 >", author: "NeoLAB_CS", date: "2023.09.12", views: 320 },
  { id: 19, title: "A/S 처리 비용 일부 조정 안내", author: "NeoLAB", date: "2023.08.01", views: 1105 },
  { id: 18, title: "A/S 처리 기준 및 택배비 부담 안내", author: "NeoLAB_CS", date: "2023.07.15", views: 2410 },
  { id: 17, title: "[공지] 네오랩컨버전스 홈페이지 이용약관 및 개인정보처리방침 개정 안내", author: "NeoLAB_CS", date: "2023.06.20", views: 900 },
  { id: 16, title: "(주) 네오랩컨버전스 A/S 종료 제품 안내", author: "NeoLAB_CS", date: "2023.05.10", views: 4500 },
];

export default async function CustomerPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;

  return (
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
              최고의 만족을 드릴 수 있도록 고객의 입장에서 최선을 다하<br />겠습니다.
            </p>

            <h2 className="text-4xl font-serif text-[#333] mb-6">1588-6239</h2>
            <div className="text-gray-600 space-y-6 text-[15px] leading-relaxed">
              <p>네오랩컨버전스 상담시간 : 10:00~18:00(평일 / 점심시간<br/>12:00~13:00)</p>
              <p>1661-2981 대교 눈높이</p>
              <p>1833-6239 엠베스트</p>
              <p>1661-1311 구몬</p>
              <div className="h-px w-full bg-gray-200 my-6"></div>
              <p>A/S 센터 : 경기도 수원시 권선구 서부로 1433-20 4층 401호</p>
              <p>네오랩컨버전스 A/S센터 지정택배 : CJ대한통운</p>
            </div>
          </div>
          
          <div className="hidden md:block w-full md:w-1/2 relative min-h-[500px]">
            {/* CSS-based replication of the hero illustration */}
            <div className="absolute top-10 right-0 w-[400px] h-[500px] bg-[#B0A294] rounded-[100px_200px_150px_100px] opacity-80" style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%' }}></div>
            <div className="absolute top-0 right-10 w-10 h-10 bg-[#E87B00] rounded-full"></div>
            <div className="absolute bottom-20 left-10 w-16 h-16 bg-[#32E8E1] rounded-full border-4 border-white"></div>
            {/* Pink heart on stick */}
            <div className="absolute top-[40%] right-[30%] rotate-n12">
              <div className="w-[120px] h-[120px] bg-[#EBB4BC] transform rotate-45 relative before:absolute before:content-[''] before:w-[120px] before:h-[120px] before:bg-[#EBB4BC] before:-top-[60px] before:left-0 before:rounded-full after:absolute after:content-[''] after:w-[120px] after:h-[120px] after:bg-[#EBB4BC] after:top-0 after:-left-[60px] after:rounded-full"></div>
              <div className="w-[6px] h-[200px] bg-[#D7AA6A] absolute left-[56px] top-[100px] transform -rotate-45 z-[-1]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Notice Board (MangBoard) */}
      <section className="py-20 max-w-[1080px] mx-auto px-4">
        <div className="border-t-2 border-black border-b border-b-gray-300">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-300 bg-[#F9F9F9] text-[#333] text-[13px] font-semibold">
                <th className="py-4 px-2 text-center w-16">번호</th>
                <th className="py-4 px-2 text-center">제목</th>
                <th className="py-4 px-2 text-center w-32">작성자</th>
                <th className="py-4 px-2 text-center w-32">작성일</th>
                <th className="py-4 px-2 text-center w-24">조회</th>
              </tr>
            </thead>
            <tbody>
              {notices.map((n, idx) => (
                <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50 transition-colors text-[13px] text-[#666]">
                  <td className="py-4 px-2 text-center">{n.id}</td>
                  <td className="py-4 px-2 hover:underline cursor-pointer"><Link href="#">{n.title}</Link></td>
                  <td className="py-4 px-2 text-center">{n.author}</td>
                  <td className="py-4 px-2 text-center">{n.date}</td>
                  <td className="py-4 px-2 text-center">{n.views}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination placeholder */}
        <div className="flex justify-center mt-10 space-x-2">
          <div className="w-8 h-8 flex items-center justify-center border border-gray-300 bg-white text-gray-500 cursor-pointer text-xs">«</div>
          <div className="w-8 h-8 flex items-center justify-center border border-black bg-black text-white font-bold cursor-pointer text-xs">1</div>
          <div className="w-8 h-8 flex items-center justify-center border border-gray-300 bg-white text-gray-600 cursor-pointer text-xs hover:bg-gray-50">2</div>
          <div className="w-8 h-8 flex items-center justify-center border border-gray-300 bg-white text-gray-500 cursor-pointer text-xs">»</div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 relative">
        <div className="max-w-[1080px] mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-16 text-[#333]">각 제품군의 상세 설명</h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-[900px] mx-auto">
            {/* Category 1 */}
            <div className="flex flex-col items-center">
              <div className="w-[160px] h-[160px] rounded-full bg-black mb-6 flex items-center justify-center shadow-lg transition-transform hover:-translate-y-2">
                <span className="text-white font-bold text-lg">소리펜</span>
              </div>
              <h3 className="text-xl font-bold mb-4">소리펜</h3>
              <Link href={`/${lang}/soundpen`} className="bg-black text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#ff4e00] transition-colors inline-block">자세히 알아보기</Link>
            </div>
            {/* Category 2 */}
            <div className="flex flex-col items-center">
              <div className="w-[160px] h-[160px] rounded-full bg-black mb-6 flex items-center justify-center shadow-lg transition-transform hover:-translate-y-2">
                <span className="text-white font-bold text-lg text-center">미디어<br/>플레이어</span>
              </div>
              <h3 className="text-xl font-bold mb-4">미디어플레이어</h3>
              <Link href="#" className="bg-black text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#ff4e00] transition-colors inline-block">자세히 알아보기</Link>
            </div>
            {/* Category 3 */}
            <div className="flex flex-col items-center">
              <div className="w-[160px] h-[160px] rounded-full bg-black mb-6 flex items-center justify-center shadow-lg transition-transform hover:-translate-y-2">
                <span className="text-white font-bold text-lg text-center">빔프로젝터</span>
              </div>
              <h3 className="text-xl font-bold mb-4">빔프로젝터</h3>
              <Link href="#" className="bg-black text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#ff4e00] transition-colors inline-block">자세히 알아보기</Link>
            </div>
            {/* Category 4 */}
            <div className="flex flex-col items-center">
              <div className="w-[160px] h-[160px] rounded-full bg-black mb-6 flex items-center justify-center shadow-lg transition-transform hover:-translate-y-2">
                <span className="text-white font-bold text-lg text-center">네오스마트펜</span>
              </div>
              <h3 className="text-xl font-bold mb-4">네오스마트펜</h3>
              <Link href={`/${lang}/neosmartpen`} className="bg-black text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#ff4e00] transition-colors inline-block">자세히 알아보기</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-24 relative overflow-hidden bg-[#FCF9F9]">
        {/* Background Decos */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-[#D39B9B] rounded-full opacity-70"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-[#D39B9B] rounded-full opacity-70"></div>
        <div className="absolute -bottom-40 -left-20 w-[600px] h-[600px] bg-[#F1EDED] rounded-full opacity-50 z-0"></div>
        <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-[#F1EDED] rounded-full opacity-50 z-0"></div>

        <div className="max-w-[700px] mx-auto px-4 relative z-10 text-center">
          <h2 className="text-[50px] font-bold text-[#333] mb-6 tracking-tight">문의하기</h2>
          <p className="text-[#666] mb-12 leading-relaxed text-[15px]">
            해당하는 제품의 자주 묻는 질문에서 원하는 답변을 찾을 수 없는 경우<br/>
            에는 아래의 전화번호, 이메일, 혹은 문의하기 폼을 이용하여 주세요
          </p>
          <p className="text-[#666] text-sm mb-16">
            (주)네오랩컨버전스의 개인정보 취급방침을 확인 하시려면 상세 보기를 눌러 주세요 <Link href="#" className="text-[#0088cc] hover:underline">상세보기</Link>
          </p>

          <form className="space-y-6 text-left">
            <div>
              <input type="text" placeholder="성함" className="w-full bg-transparent border-b border-gray-300 py-4 px-2 focus:outline-none focus:border-black transition-colors" />
            </div>
            <div>
              <input type="text" placeholder="전화번호" className="w-full bg-transparent border-b border-gray-300 py-4 px-2 focus:outline-none focus:border-black transition-colors" />
            </div>
            <div>
              <input type="email" placeholder="이메일 주소" className="w-full bg-transparent border-b border-gray-300 py-4 px-2 focus:outline-none focus:border-black transition-colors" />
            </div>
            <div>
              <input type="text" placeholder="제품명" className="w-full bg-transparent border-b border-gray-300 py-4 px-2 focus:outline-none focus:border-black transition-colors" />
            </div>
            <div>
              <textarea placeholder="문의 내용" rows={4} className="w-full bg-transparent border-b border-gray-300 py-4 px-2 focus:outline-none focus:border-black transition-colors resize-none"></textarea>
            </div>
            <div className="pt-8">
              <button type="submit" className="w-full bg-black text-white font-bold tracking-[0.2em] py-5 uppercase hover:bg-[#333] transition-colors">
                Send
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
