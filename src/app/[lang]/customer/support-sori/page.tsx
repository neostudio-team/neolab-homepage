import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModalTrigger from "@/components/ContactModalTrigger";
import SupportFaqAccordion from "@/components/support/SupportFaqAccordion";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

const WARRANTY_POLICY = `제품 구입 후 품질보증기간(1년) 이내에 정상적인 사용상태에서 발생한 성능 기능상의 하자가 발생 시 무상으로 품질보증을 합니다. 보증기간 이내라도 파손 및 침수 등 과실로 인한 부분은 유상 AS대상 입니다.`;
const WARRANTY_POLICY2 = `품질보증기간은 구입 후 1년이며, 정확한 품질보증 혜택을 받으시기 위해서는 상품을 구입하신 영수증 또는, 인터넷 쇼핑몰 구입 내역 화면 캡쳐 등이 필요합니다. 부득이 확인이 어려운 경우 제품 고유 번호를 통해 확인되는 제조일 기준으로 보증기간을 적용 받게 됩니다.`;

const PRODUCT_LIST_1 = [
  "구몬스마트펜(C134,5)", "구몬스마트펜(D100,1)", "교원올스토리펜(C132,3)",
  "대교눈높이펜(C17X)", "T-Box(C300)", "핑크퐁펜(C200)",
];
const PRODUCT_LIST_2 = [
  "플링펜(C18X)", "뉴에그펜(C30)", "팝펜 프로(초기버전 C170)",
  "팝펜 프라임(C17X)", "팝펜(C30)", "팝펜 비디오(C30)",
];
const PRODUCT_LIST_3 = [
  "라라펜(C170)", "피쉬톡(C16X)", "핀덴카(C19X)",
  "한솔플러스 팝펜(C30)", "씽씽펜(C120)", "씽씽펜(C17X)", "쫑알이펜(C30)",
];

const FAQ_ITEMS = [
  {
    q: "전원이 켜지지 않아요.",
    a: [
      "전용USB 케이블선을 확인 하여 충전을 해주세요. 정상 충전 시 빨간색 LED가 점등됩니다. 완충 시 빨간색 LED가 꺼집니다.",
      "전원 버튼을 2초 이상 눌러주셔야 켜집니다.",
      "안전 상 전원이 차단 되었을 수 있으니, 매뉴얼에 기재된 리셋 버튼을 눌러 주시거나 제품에 따라 전원 버튼을 길게 10초 이상 눌러주신 후 충전도 30분정도 해주신 후 켜주세요.",
    ],
  },
  {
    q: "전원이 꺼지지 않아요.",
    a: [
      "전원 버튼을 살짝 누르면 배터리 잔량을 알려주고(일부 펜 제외), 2초정도 길게 누르면 전원이 꺼집니다. (일부 펜은 HOLD상태의 경우 꺼지지 않습니다.)",
      "일시적인 오동작 가능성으로 매뉴얼에 기재된 리셋 버튼을 눌러 주시거나 제품에 따라 전원 버튼을 길게 10초 이상 눌러 초기화 후 정상 유무 확인해주세요.",
    ],
  },
  {
    q: "저절로 꺼져요.",
    a: [
      "절전 기능이 있는 소리펜의 경우 10분간 아무런 입력(사용)이 없을 경우 절전을 위해 자동으로 꺼집니다.",
      "배터리 잔량이 부족할 수 있으니, 충전하여 주세요.",
    ],
  },
  {
    q: "콘텐츠 인식이 안 돼요.",
    a: [
      "code 적용 교재인지 확인하여 주세요.",
      "맞는 콘텐츠가 SD카드에 저장되어 있는지 확인하여 주세요.",
      "대부분 인식이 되는데 특정부분에서 인식이 안 된다면 판매처에서 교재를 교환해 주세요. (구매처로 교재 교환관련 문의를 해주세요.)",
      "맞는 교재인지? 그리고 콘텐츠 저장 폴더에 파일이 있는지? 새로 저장한 콘텐츠인 경우 압축파일 형태, 콘텐츠 이름 수정, 이중 폴더로 저장을 한 경우 인식이 안될 수 있습니다. ※ NCP2 유형의 파일만 CONTENTS(BOOK)폴더 안에 담아주세요.",
      "실외나 직사광선이 강하면 LED반사 빛이 센서에 들어오지 않을 수 있습니다. 실내에서 사용하여 주세요.",
      "펜의 센서부위에 이물질이 들어가거나, 손상이 있는지 확인하여 주세요.",
    ],
  },
  {
    q: "다른 교재와 호환이 되나요?",
    a: "네오랩과 협의 되어 패밀리 소리펜군에 속하는 타 출판사 교재는 활용이 가능할 수 있습니다. 관련 확인은 네이버 팝펜팩토리 공식 카페 가입하여 공지사항에서 원하는 콘텐츠 정보 확인 후 업데이트 하여 활용을 권장합니다.",
  },
  {
    q: "콘텐츠(펌웨어) 업데이트가 안 돼요.",
    a: "고객센터로 문의해 주세요.",
  },
  {
    q: "티박스 펜 인식이 안 돼요.",
    a: [
      "펜 입구에 이물질이 들어간 경우 제거 후 확인해주세요.",
      "학생증 인식이나 학생증을 정상적으로 삽입되었는지 확인해 주세요.",
      "AS센터 문의 메시지 발생의 경우 공유기 설정을 확인 후 공유기 근처에서 티박스를 재부팅 해주세요.",
      "티박스 바닥 커버 오픈 후 SD카드 재장착 후 확인해 주세요. (티박스 바닥쪽 커버를 열어 SD카드를 재장착 한 후 전원을 켜주세요. 특정교재만 인식이 안되는 경우 SD카드의 콘텐츠가 저장되어 있는지 확인해주세요)",
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
    a: "고객센터로 문의해 주세요.",
  },
];

export default async function SupportSoriPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
      <Header lang={lang} dict={dict.common.header} />
      <div className="bg-white min-h-screen text-[#333] pt-[80px]">

        {/* Hero */}
        <section className="bg-[#FFF8F2] py-20">
          <div className="max-w-[1080px] mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <p className="text-[#E1A02E] text-sm font-bold tracking-widest uppercase mb-3">Customer Support</p>
              <h1 className="text-5xl font-serif text-[#333] mb-4">소리펜</h1>
              <p className="text-gray-600 text-lg mb-8">소리펜은 책을 읽어주는 펜입니다.</p>
              <ContactModalTrigger
                buttonText="문의하기"
                variant="pill"
                defaultCategory="소리펜 문의"
                pillClassName="inline-block bg-black text-white text-sm px-6 py-3 rounded-full hover:opacity-80 transition-opacity"
              />
            </div>
            <div className="flex-shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/customer/Neo-soripen.png" alt="소리펜" className="w-[220px] h-[220px] object-contain" />
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

        {/* 소리펜 제품 리스트 */}
        <section className="py-14 bg-[#F5F8F8]">
          <div className="max-w-[1080px] mx-auto px-4">
            <h2 className="text-[22px] font-bold text-[#333] mb-8">소리펜 제품 리스트</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <ul className="space-y-2">
                {PRODUCT_LIST_1.map((p, i) => (
                  <li key={i} className="flex items-center gap-2 text-[14px] text-[#555]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E1A02E] flex-shrink-0"></span>{p}
                  </li>
                ))}
              </ul>
              <ul className="space-y-2">
                {PRODUCT_LIST_2.map((p, i) => (
                  <li key={i} className="flex items-center gap-2 text-[14px] text-[#555]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E1A02E] flex-shrink-0"></span>{p}
                  </li>
                ))}
              </ul>
              <ul className="space-y-2">
                {PRODUCT_LIST_3.map((p, i) => (
                  <li key={i} className="flex items-center gap-2 text-[14px] text-[#555]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E1A02E] flex-shrink-0"></span>{p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 bg-white">
          <div className="max-w-[1080px] mx-auto px-4">
            <div className="mb-2 text-[#E1A02E] text-sm font-bold tracking-widest">F.A.Q.</div>
            <h2 className="text-[22px] font-bold text-[#333] mb-8">자주 묻는 질문</h2>
            <SupportFaqAccordion items={FAQ_ITEMS} />
            <div className="mt-6 pt-4 border-t border-gray-100 text-[14px] text-[#555] space-y-2">
              <p>다른 교재와 호환 확인: <Link href="https://cafe.naver.com/dotcotory" target="_blank" className="text-[#ff4e00] underline">팝펜팩토리 커뮤니티로 이동하기</Link></p>
            </div>
          </div>
        </section>

        {/* 관련 액세서리 구입하기 */}
        <section className="py-14 bg-[#F5F8F8]">
          <div className="max-w-[1080px] mx-auto px-4">
            <h2 className="text-[22px] font-bold text-[#333] mb-8">관련 액세서리 구입하기</h2>
            <div className="flex justify-center">
              <div className="bg-white rounded-2xl p-8 shadow-sm flex flex-col md:flex-row items-center gap-8 max-w-[600px] w-full">
                <div className="flex-shrink-0 w-20 h-20 bg-[#E8F0F5] rounded-xl flex items-center justify-center">
                  <span className="text-3xl">🔌</span>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-[18px] font-bold text-[#333] mb-2">USB 케이블</h3>
                  <p className="text-[13px] text-[#666] leading-relaxed mb-4">
                    소리펜(네오랩컨버전스 제조)의 데이터 전송을 위한 USB 케이블입니다. *건전지 충전 불가
                  </p>
                  <Link href="https://smartstore.naver.com/neolab/products/356557401" target="_blank" rel="noopener noreferrer"
                    className="inline-block bg-black text-white text-[13px] px-6 py-2.5 rounded-full hover:opacity-80 transition-opacity">
                    구매 사이트로 이동하기
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 문의하기 */}
        <section className="py-16 bg-white">
          <div className="max-w-[600px] mx-auto px-4 text-center">
            <p className="text-[#E1A02E] text-sm font-bold tracking-widest uppercase mb-3">Contact Us</p>
            <h2 className="text-[24px] font-bold text-[#333] mb-3">문의하기</h2>
            <p className="text-[14px] text-[#666] mb-8">소리펜 관련 문의사항이 있으시면 아래 버튼을 통해 문의해 주세요.<br />담당자 확인 후 빠르게 답변드리겠습니다.</p>
            <ContactModalTrigger
              buttonText="문의하기"
              variant="pill"
              defaultCategory="소리펜 문의"
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
