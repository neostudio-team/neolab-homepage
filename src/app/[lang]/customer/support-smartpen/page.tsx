import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomerInquiryForm from "@/components/CustomerInquiryForm";
import SupportFaqAccordion from "@/components/support/SupportFaqAccordion";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

const WARRANTY_POLICY = `제품 구입 후 품질보증기간(1년) 이내에 정상적인 사용상태에서 발생한 성능 기능상의 하자가 발생 시 무상으로 품질보증을 합니다. 보증기간 이내라도 파손 및 침수 등 과실로 인한 부분은 유상 AS대상 입니다.`;
const WARRANTY_POLICY2 = `품질보증기간은 구입 후 1년이며, 정확한 품질보증 혜택을 받으시기 위해서는 상품을 구입하신 영수증 또는, 인터넷 쇼핑몰 구입 내역 화면 캡쳐 등이 필요합니다. 부득이 확인이 어려운 경우 제품 고유 번호를 통해 확인되는 제조일 기준으로 보증기간을 적용 받게 됩니다.`;

const PRODUCT_LIST = [
  "스마트구몬 K펜, K지우개(F60, E100)",
  "엠베스트 스마트펜(F110, F121)",
  "스마트쎈 펜(F12X)",
  "네오스마트펜 N2(F11X)",
  "네오스마트펜 M1(F50)",
  "네오스마트펜 라인프렌즈 에디션(F50)",
];

const FAQ_ITEMS = [
  {
    q: "전원이 켜지지 않아요.",
    a: [
      "충전을 해주세요. 정상 충전 시 빨간색 LED가 점등됩니다. 완충 시 결과적으로 빨간색 LED가 꺼집니다.",
      "전원 버튼을 2초 이상 눌러주셔야 켜집니다.",
      "전원 버튼을 길게 10초 이상 눌러 초기화 후 켜주세요.",
      "일반적인 정격출력 5V의 USB 어댑터 연결을 권장하며, 충전 연결 상태에서 충전 램프 반응이 없는 경우 연결 상태에서 전원 버튼을 길게 10초 이상 눌러 주시고 다시 전원 버튼을 눌러 정상 유무 확인해 주세요.",
    ],
  },
  {
    q: "전원이 꺼지지 않아요.",
    a: "전원 버튼을 길게 10초 이상 눌러 초기화 후 정상 유무 확인해 주세요.",
  },
  {
    q: "저절로 꺼져요.",
    a: [
      "기본 설정 된 20분 동안 아무런 입력(사용)이 없을 경우 절전을 위해 자동으로 꺼집니다.",
      "배터리 잔량이 부족할 수 있으니, 충전하여 주세요.",
    ],
  },
  {
    q: "필기 인식이 안 돼요.",
    a: [
      "Ncode 적용 전용 노트를 권장하며, Ncode가 적용된 전용 노트가 맞는지 확인해주세요.",
      "Ncode PDF 인쇄 용지의 경우 인쇄 품질에 따라 인식이 안될 수 있습니다.",
      "네오스마트펜 홈페이지 안내 사항 참고해주세요.",
      "네오노트 앱과 펜이 연결 상태에서 정상으로 필기 인식이 되는데 오프라인 필기 만 앱으로 전송이 안되는 경우 고객지원실로 상담을 통해 해결이 될 수 있습니다.",
      "실외나 직사광선이 강하면 필기 인식 결과가 좋지 못할 수 있습니다. 일반적인 실내에서 확인하여 주세요.",
      "펜의 센서부위에 이물질이 들어가거나, 손상이 있는지 확인하여 주세요.",
      "네오노트 앱과 펜 연결 상태에서 필기 한 내용이 앱으로 표현이 정상적이지 못한 경우 AS접수 과정 진행하여 주세요.",
    ],
  },
  {
    q: "액체가 들어갔어요.",
    a: "즉시 마른 천으로 액체를 완전히 제거 후 통풍이 잘 되는 장소에서 건조(헤어드라이기 냉풍) 후 AS접수를 해주세요. 침수로 인한 고장은 무상 기간이라도 전액 유상 점검 대상입니다.",
  },
  {
    q: "파손 되었어요.",
    a: "민감한 전자기기 입니다. 높은 곳에서 딱딱한 바닥에 떨어뜨리는 등 과도한 충격은 제품이 손상되며, 충격으로 인한 제품 파손 등으로 기능상의 고장이 발생한 경우 무상 기간이라도 전액 유상 점검 대상입니다.",
  },
  {
    q: "분해 했어요.",
    a: "자가 수리를 위해 임의 분해 및 개조로 인한 손상 또는 파손의 경우 품질보증 혜택을 받을 수 없으며, 전액 유상으로 처리됩니다.",
  },
  {
    q: "더 자세한 질문이 있어요.",
    a: "고객센터로 문의하여 주세요. 또는 네오스마트펜 공식 홈페이지에서 확인하여 주세요.",
  },
];

export default async function SupportSmartpenPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
      <Header lang={lang} dict={dict.common.header} />
      <div className="bg-white min-h-screen text-[#333] pt-[80px]">

        {/* Hero */}
        <section className="bg-[#E8EAF0] py-20">
          <div className="max-w-[1080px] mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <p className="text-[#4A5BAB] text-sm font-bold tracking-widest uppercase mb-3">Customer Support</p>
              <h1 className="text-5xl font-serif text-[#333] mb-4">스마트펜</h1>
              <p className="text-gray-600 text-lg mb-8">종이에 필기한 내용을 디지털화 해주는 펜입니다.</p>
              <Link href="http://www.neosmartpen.com/" target="_blank" rel="noopener noreferrer"
                className="inline-block bg-black text-white text-sm px-6 py-3 rounded-full hover:opacity-80 transition-opacity">
                네오스마트펜 사이트로 가기
              </Link>
            </div>
            <div className="flex-shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/customer/Neo-smartpen.png" alt="네오스마트펜" className="w-[220px] h-[220px] object-contain" />
            </div>
          </div>
        </section>

        {/* 고객지원 정책 */}
        <section className="py-14 bg-white">
          <div className="max-w-[1080px] mx-auto px-4">
            <h2 className="text-[22px] font-bold text-[#333] mb-6 pb-3 border-b-2 border-black">고객지원 정책</h2>
            <div className="bg-[#F9F9F9] rounded-xl p-6 text-[14px] text-[#555] leading-relaxed space-y-3">
              <p>{WARRANTY_POLICY}</p>
              <p>{WARRANTY_POLICY2}</p>
            </div>
          </div>
        </section>

        {/* 제품 리스트 */}
        <section className="py-14 bg-[#F5F8F8]">
          <div className="max-w-[1080px] mx-auto px-4">
            <h2 className="text-[22px] font-bold text-[#333] mb-8">스마트펜 제품 리스트</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-[600px]">
              {PRODUCT_LIST.map((p, i) => (
                <li key={i} className="flex items-center gap-2 text-[14px] text-[#555]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4A5BAB] flex-shrink-0"></span>{p}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 bg-white">
          <div className="max-w-[1080px] mx-auto px-4">
            <div className="mb-2 text-[#4A5BAB] text-sm font-bold tracking-widest">F.A.Q.</div>
            <h2 className="text-[22px] font-bold text-[#333] mb-8">자주 묻는 질문</h2>
            <SupportFaqAccordion items={FAQ_ITEMS} />
            <div className="mt-6 pt-4 border-t border-gray-100 flex flex-wrap gap-4 text-[14px]">
              <Link href="https://www.neosmartpen.com/kr/ncode-pdf/" target="_blank" rel="noopener noreferrer"
                className="text-[#ff4e00] underline">안내사항 확인하기</Link>
              <Link href="https://www.neosmartpen.com/kr/support/" target="_blank" rel="noopener noreferrer"
                className="text-[#ff4e00] underline">공식 홈페이지가기</Link>
            </div>
          </div>
        </section>

        {/* 관련 악세서리 */}
        <section className="py-14 bg-[#F5F8F8]">
          <div className="max-w-[1080px] mx-auto px-4">
            <h2 className="text-[22px] font-bold text-[#333] mb-8">제품 관련 악세서리</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[600px]">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="w-16 h-16 bg-[#E8EAF0] rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">🛒</span>
                </div>
                <h3 className="text-[16px] font-bold text-[#333] mb-3">네오스마트펜 스토어</h3>
                <p className="text-[13px] text-[#666] leading-relaxed mb-4">
                  네오스마트펜 온라인몰에는 다양한 상품과 정보가 있습니다.
                </p>
                <Link href="http://store.neosmartpen.com/" target="_blank" rel="noopener noreferrer"
                  className="inline-block bg-black text-white text-[12px] px-4 py-2 rounded-full hover:opacity-80 transition-opacity">
                  구매 사이트로 이동하기
                </Link>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="w-16 h-16 bg-[#FFF0DC] rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">✏️</span>
                </div>
                <h3 className="text-[16px] font-bold text-[#333] mb-3">구몬용 악세서리</h3>
                <p className="text-[13px] text-[#666] leading-relaxed mb-4">
                  구몬 스마트펜의 다양한 악세사리를 구매할 수 있습니다.
                </p>
                <Link href="https://smartstore.naver.com/neolab/category/19c4320c7414449190cf86239353ed67?cp=1" target="_blank" rel="noopener noreferrer"
                  className="inline-block bg-black text-white text-[12px] px-4 py-2 rounded-full hover:opacity-80 transition-opacity">
                  구매 사이트로 이동하기
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 문의하기 */}
        <CustomerInquiryForm />

        {/* 뒤로 가기 */}
        <div className="max-w-[1080px] mx-auto px-4 py-8">
          <Link href={`/${lang}/customer`} className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
            ← 고객지원으로 돌아가기
          </Link>
        </div>
      </div>
      <Footer lang={lang} dict={dict.common.footer} />
    </>
  );
}
