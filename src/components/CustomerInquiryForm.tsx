"use client";

import Link from "next/link";

export default function CustomerInquiryForm() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#FCF9F9]">
      {/* Background decorations */}
      <div className="absolute top-16 left-8 w-20 h-20 bg-[#D39B9B] rounded-full opacity-60 pointer-events-none"></div>
      <div className="absolute top-36 right-16 w-10 h-10 bg-[#D39B9B] rounded-full opacity-60 pointer-events-none"></div>
      <div className="absolute -bottom-32 -left-16 w-[500px] h-[500px] bg-[#F1EDED] rounded-full opacity-40 pointer-events-none"></div>
      <div className="absolute -bottom-16 -right-16 w-[400px] h-[400px] bg-[#F1EDED] rounded-full opacity-40 pointer-events-none"></div>
      <div className="absolute bottom-16 right-10 w-24 h-24 bg-[#2CDBD4] rounded-full border-8 border-white shadow-lg pointer-events-none"></div>

      <div className="max-w-[680px] mx-auto px-4 relative z-10 text-center">
        <h2 className="text-[46px] font-bold text-[#333] mb-4 tracking-tight">문의하기</h2>
        <p className="text-[#666] mb-8 leading-relaxed text-[15px]">
          해당하는 제품의 자주 묻는 질문에서 원하는 답변을 찾을 수 없는 경우<br />
          에는 아래의 전화번호, 이메일, 혹은 문의하기 폼을 이용하여 주세요
        </p>
        <p className="text-[#666] text-sm mb-12">
          (주)네오랩컨버전스의 개인정보 취급방침을 확인 하시려면 상세 보기를 눌러 주세요{" "}
          <Link href="https://www.neolab.kr/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-[#2ea3f2] hover:underline">
            상세보기
          </Link>
        </p>

        <form className="space-y-0 text-left" onSubmit={(e) => e.preventDefault()}>
          <div className="border-b border-gray-300">
            <input
              type="text"
              placeholder="성함"
              className="w-full bg-transparent py-4 px-2 text-[15px] focus:outline-none transition-colors placeholder-gray-400"
            />
          </div>
          <div className="border-b border-gray-300">
            <input
              type="tel"
              placeholder="전화번호"
              className="w-full bg-transparent py-4 px-2 text-[15px] focus:outline-none transition-colors placeholder-gray-400"
            />
          </div>
          <div className="border-b border-gray-300">
            <input
              type="email"
              placeholder="이메일 주소"
              className="w-full bg-transparent py-4 px-2 text-[15px] focus:outline-none transition-colors placeholder-gray-400"
            />
          </div>
          <div className="border-b border-gray-300">
            <input
              type="text"
              placeholder="제품명"
              className="w-full bg-transparent py-4 px-2 text-[15px] focus:outline-none transition-colors placeholder-gray-400"
            />
          </div>
          <div className="border-b border-gray-300">
            <input
              type="text"
              placeholder="구매시기"
              className="w-full bg-transparent py-4 px-2 text-[15px] focus:outline-none transition-colors placeholder-gray-400"
            />
          </div>
          <div className="border-b border-gray-300">
            <textarea
              placeholder="증상"
              rows={4}
              className="w-full bg-transparent py-4 px-2 text-[15px] focus:outline-none transition-colors resize-none placeholder-gray-400"
            ></textarea>
          </div>

          <div className="pt-6 pb-4">
            <p className="text-[13px] text-[#666] mb-3">개인정보 수집·이용에 동의합니다.</p>
            <label className="flex items-center gap-2 cursor-pointer text-[13px] text-[#666]">
              <input type="checkbox" className="w-4 h-4 accent-[#ff4e00]" required />
              <span>동의(필수)</span>
            </label>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="bg-[#222] text-white font-bold tracking-[0.2em] py-4 px-12 uppercase hover:bg-[#333] transition-colors rounded-sm"
            >
              보내기
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
