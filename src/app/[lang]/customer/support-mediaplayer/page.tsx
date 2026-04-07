import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModalTrigger from "@/components/ContactModalTrigger";
import SupportFaqAccordion from "@/components/support/SupportFaqAccordion";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

const WARRANTY_POLICY = `제품 구입 후 품질보증기간(1년) 이내에 정상적인 사용상태에서 발생한 성능 기능상의 하자가 발생 시 무상으로 품질보증을 합니다. 보증기간 이내라도 파손 및 침수 등 과실로 인한 부분은 유상 AS대상 입니다.`;
const WARRANTY_POLICY2 = `품질보증기간은 구입 후 1년이며, 정확한 품질보증 혜택을 받으시기 위해서는 상품을 구입하신 영수증 또는, 인터넷 쇼핑몰 구입 내역 화면 캡쳐 등이 필요합니다. 부득이 확인이 어려운 경우 제품 고유 번호를 통해 확인되는 제조일 기준으로 보증기간을 적용 받게 됩니다.`;

const PRODUCT_LIST = ["플링플링 플레이어(H13X)", "미디어웨일(H140)"];

const FAQ_ITEMS = [
  {
    q: "전원이 켜지지 않아요.",
    a: [
      "전원 버튼을 2초 이상 눌러주셔야 켜집니다.",
      "어댑터 콘센트 연결 상태와 플레이어 본체 뒤쪽으로 전원 연결 DC in 위치에 어댑터 연결상태를 점검하여 주세요.",
    ],
  },
  {
    q: "전원이 꺼지지 않아요.",
    a: "2초정도 길게 누르면 전원이 꺼집니다.",
  },
  {
    q: "재생이 안 돼요.",
    a: [
      "장착 된 팩&메모리 카드가 보드와 맞는 지 확인해주세요.",
      "HDMI 케이블 양끝 상태의 손상 여부 확인과 플레이어와 티비쪽 연결 위치 재연결하여 리모컨으로 외부 입력신호 확인해 주세요.",
      "컴포지트 케이블과 HDMI케이블 동시 사용은 비정상적인 동작이 되어 케이블 하나만 연결 사용이 필요하며, 일반적으로 HDMI케이블 1개만 사용을 권장합니다.",
    ],
  },
  {
    q: "플링펜 충전이 안 돼요.",
    a: [
      "플링플링의 어댑터 연결상태를 점검하여 주세요.",
      "플링펜의 충전 단자와 플링플링의 충전단자가 접촉되는지 점검해 주세요.",
      "충전 시에는 빨간색LED램프가 점등되고, 충전이 완료되면 램프가 꺼집니다.",
      "플링펜의 전원이 켜진다면 전원버튼을 짧게 눌러 잔량을 확인해주세요.",
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
    a: "고객센터로 문의하여 주세요.",
  },
];

export default async function SupportMediaplayerPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
      <Header lang={lang} dict={dict.common.header} />
      <div className="bg-white min-h-screen text-[#333] pt-[80px]">

        {/* Hero */}
        <section className="bg-[#EAF4FB] py-20">
          <div className="max-w-[1080px] mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <p className="text-[#3B8FBF] text-sm font-bold tracking-widest uppercase mb-3">Customer Support</p>
              <h1 className="text-5xl font-serif text-[#333] mb-4">미디어 플레이어</h1>
              <p className="text-gray-600 text-lg mb-8">소리펜으로 책을 콕 찍으면 미디어 플레이어를 통해 영상 콘텐츠가 재생 됩니다.</p>
            </div>
            <div className="flex-shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/customer/Neo-mediaplayer.png" alt="미디어플레이어" className="w-[220px] h-[220px] object-contain" />
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
            <h2 className="text-[22px] font-bold text-[#333] mb-8">미디어 플레이어 제품 리스트</h2>
            <ul className="flex flex-wrap gap-4">
              {PRODUCT_LIST.map((p, i) => (
                <li key={i} className="flex items-center gap-2 text-[14px] text-[#555]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3B8FBF] flex-shrink-0"></span>{p}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 bg-white">
          <div className="max-w-[1080px] mx-auto px-4">
            <div className="mb-2 text-[#3B8FBF] text-sm font-bold tracking-widest">F.A.Q.</div>
            <h2 className="text-[22px] font-bold text-[#333] mb-8">자주 묻는 질문</h2>
            <SupportFaqAccordion items={FAQ_ITEMS} />
          </div>
        </section>

        {/* 관련 악세서리 */}
        <section className="py-14 bg-[#F5F8F8]">
          <div className="max-w-[1080px] mx-auto px-4">
            <h2 className="text-[22px] font-bold text-[#333] mb-8">제품 관련 악세서리</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[600px]">
              {/* HDMI 케이블 */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="w-16 h-16 bg-[#E8F0F5] rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">🖥️</span>
                </div>
                <h3 className="text-[16px] font-bold text-[#333] mb-3">HDMI 케이블</h3>
                <p className="text-[13px] text-[#666] leading-relaxed mb-4">
                  네오랩컨버전스의 플링플링 및 미디어웨일을 TV 및 모니터에 연결을 위한 HDMI케이블 입니다.
                </p>
                <Link href="https://smartstore.naver.com/neolab/products/460451933" target="_blank" rel="noopener noreferrer"
                  className="inline-block bg-black text-white text-[12px] px-4 py-2 rounded-full hover:opacity-80 transition-opacity">
                  구매사이트로 이동하기
                </Link>
              </div>

              {/* 충전 어댑터 */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="w-16 h-16 bg-[#FFF0DC] rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">🔋</span>
                </div>
                <h3 className="text-[16px] font-bold text-[#333] mb-3">충전 어댑터</h3>
                <p className="text-[13px] text-[#666] leading-relaxed mb-4">
                  플링플링, 스마트콩, 핑크퐁빔, 드림큐브, 마법상자, 드림씨어터2, T-Box 2.0과 호환 됩니다.
                </p>
                <Link href="https://smartstore.naver.com/neolab/products/2669984891" target="_blank" rel="noopener noreferrer"
                  className="inline-block bg-black text-white text-[12px] px-4 py-2 rounded-full hover:opacity-80 transition-opacity">
                  구매 사이트로 이동하기
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 문의하기 */}
        <section className="py-16 bg-white">
          <div className="max-w-[600px] mx-auto px-4 text-center">
            <p className="text-[#E1A02E] text-sm font-bold tracking-widest uppercase mb-3">Contact Us</p>
            <h2 className="text-[24px] font-bold text-[#333] mb-3">문의하기</h2>
            <p className="text-[14px] text-[#666] mb-8">미디어플레이어 관련 문의사항이 있으시면 아래 버튼을 통해 문의해 주세요.<br />담당자 확인 후 빠르게 답변드리겠습니다.</p>
            <ContactModalTrigger
              buttonText="문의하기"
              variant="pill"
              defaultCategory="미디어플레이어 문의"
              pillClassName="inline-block bg-black text-white text-sm px-8 py-3 rounded-full hover:opacity-80 transition-opacity"
            />
          </div>
        </section>

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
