import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomerInquiryForm from "@/components/CustomerInquiryForm";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { adminDb } from "@/lib/firebase-admin";

export const dynamic = "force-dynamic";

interface CustomerNotice {
  id: string;
  isPinned: boolean;
  titleKo: string;
  titleEn: string;
  titleJa: string;
  author: string;
  views: number;
  externalUrl: string;
  createdAt: string;
}

async function getCustomerNotices(): Promise<CustomerNotice[]> {
  try {
    const snapshot = await adminDb
      .collection("customer_notices")
      .orderBy("createdAt", "desc")
      .get();
    const docs = snapshot.docs.map((doc) => ({
      id: doc.id,
      isPinned: doc.data().isPinned ?? false,
      titleKo: doc.data().titleKo ?? "",
      titleEn: doc.data().titleEn ?? "",
      titleJa: doc.data().titleJa ?? "",
      author: doc.data().author ?? "NeoLAB_CS",
      views: doc.data().views ?? 0,
      externalUrl: doc.data().externalUrl ?? "",
      createdAt: doc.data().createdAt?.toDate().toISOString() ?? new Date().toISOString(),
    }));
    return [...docs.filter(d => d.isPinned), ...docs.filter(d => !d.isPinned)];
  } catch {
    return [];
  }
}

export default async function CustomerPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const notices = await getCustomerNotices();

  function getTitle(n: CustomerNotice) {
    if (lang === "en") return n.titleEn || n.titleKo;
    if (lang === "ja") return n.titleJa || n.titleKo;
    return n.titleKo;
  }

  const regularNotices = notices.filter(n => !n.isPinned);

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
                {notices.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="py-12 text-center text-gray-400 text-sm">등록된 공지사항이 없습니다.</td>
                  </tr>
                ) : (
                  notices.map((n) => {
                    const href = n.externalUrl || `/${lang}/customer/${n.id}`;
                    const isExternal = !!n.externalUrl;
                    return (
                      <tr key={n.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors text-[13px] text-[#666]">
                        <td className="py-3 px-3 text-center">
                          {n.isPinned ? (
                            <span className="inline-block bg-[#f0a500] text-white text-[11px] font-bold px-2 py-0.5 rounded-sm">공지</span>
                          ) : (
                            String(regularNotices.length - regularNotices.indexOf(n))
                          )}
                        </td>
                        <td className="py-3 px-3 hover:text-[#ff4e00] cursor-pointer">
                          <Link href={href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined}>
                            {getTitle(n)}
                          </Link>
                        </td>
                        <td className="py-3 px-3 text-center">{n.author}</td>
                        <td className="py-3 px-3 text-center">{new Date(n.createdAt).toLocaleDateString("ko-KR")}</td>
                        <td className="py-3 px-3 text-center">{n.views}</td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </section>

        {/* Product Categories Section */}
        <section className="py-20 bg-white">
          <div className="max-w-[1080px] mx-auto px-4 text-center">
            <h2 className="text-[32px] font-bold mb-16 text-[#333]">각 제품군의 상세 설명</h2>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 max-w-[860px] mx-auto">
              {/* 소리펜 */}
              <div className="flex flex-col items-center gap-4">
                <div className="w-[150px] h-[150px] flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/customer/Neo-soripen.png" alt="소리펜" className="w-full h-full object-fill" />
                </div>
                <h4 className="text-[17px] font-bold text-[#333]">소리펜</h4>
                <Link
                  href={`/${lang}/customer/support-sori`}
                  className="bg-black text-white text-[12px] px-5 py-[10px] rounded-full hover:opacity-80 transition-opacity"
                >
                  자세히 알아보기
                </Link>
              </div>

              {/* 미디어플레이어 */}
              <div className="flex flex-col items-center gap-4">
                <div className="w-[150px] h-[150px] flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/customer/Neo-mediaplayer.png" alt="미디어플레이어" className="w-full h-full object-fill" />
                </div>
                <h4 className="text-[17px] font-bold text-[#333]">미디어플레이어</h4>
                <Link
                  href={`/${lang}/customer/support-mediaplayer`}
                  className="bg-black text-white text-[12px] px-5 py-[10px] rounded-full hover:opacity-80 transition-opacity"
                >
                  자세히 알아보기
                </Link>
              </div>

              {/* 빔프로젝터 */}
              <div className="flex flex-col items-center gap-4">
                <div className="w-[150px] h-[150px] flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/customer/Neo-beam.png" alt="빔프로젝터" className="w-full h-full object-fill" />
                </div>
                <h4 className="text-[17px] font-bold text-[#333]">빔프로젝터</h4>
                <Link
                  href={`/${lang}/customer/support-beam`}
                  className="bg-black text-white text-[12px] px-5 py-[10px] rounded-full hover:opacity-80 transition-opacity"
                >
                  자세히 알아보기
                </Link>
              </div>

              {/* 네오스마트펜 */}
              <div className="flex flex-col items-center gap-4">
                <div className="w-[150px] h-[150px] flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/customer/Neo-smartpen.png" alt="네오스마트펜" className="w-full h-full object-fill" />
                </div>
                <h4 className="text-[17px] font-bold text-[#333]">네오스마트펜</h4>
                <Link
                  href={`/${lang}/customer/support-smartpen`}
                  className="bg-black text-white text-[12px] px-5 py-[10px] rounded-full hover:opacity-80 transition-opacity"
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
