import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { adminDb } from "@/lib/firebase-admin";
import ReactMarkdown from "react-markdown";

const DEFAULT_CONTENT = `# 이용약관

> 본 약관은 「약관의 규제에 관한 법률」, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 등 관련 법령 및 일반적인 웹사이트 이용약관 작성 원칙을 참고하여 작성되었습니다.

**제1조 (목적)**

이 약관은 주식회사 네오랩컨버전스(이하 "회사")가 운영하는 홈페이지(https://neolab.kr 이하 "홈페이지")에서 제공하는 정보 서비스(이하 "서비스")의 이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.

**제2조 (정의)**

- "홈페이지"란 회사가 운영하는 웹사이트로, 회원가입 없이 회사 및 제품에 대한 정보, 공지사항, 콘텐츠 등을 이용자에게 제공하는 인터넷 공간을 말합니다.
- "이용자"란 개인, 법인, 단체 등 홈페이지에 접속하여 이 약관에 따라 회사가 제공하는 서비스를 이용하는 자를 말합니다.
- "콘텐츠"란 회사가 홈페이지를 통해 제공하는 텍스트, 이미지, 동영상, 기타 정보 일체를 의미합니다.

**제3조 (약관의 게시와 개정)**

- 회사는 본 약관의 내용을 이용자가 쉽게 확인할 수 있도록 홈페이지 초기화면에 게시합니다.
- 회사는 관계 법령을 위반하지 않는 범위에서 이 약관을 개정할 수 있습니다.
- 회사가 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행 약관과 함께 홈페이지에 적용일자 7일 전부터 공지합니다.

**제4조 (서비스의 제공 및 변경)**

회사는 다음과 같은 서비스를 제공합니다.

- 회사 및 제품 관련 소개
- 뉴스, 공지사항, 이벤트 등 정보 제공
- 기타 회사가 정하는 서비스

**제5조 (서비스의 중단)**

회사는 시스템 점검, 유지보수, 기술상 장애, 천재지변 등의 사유가 발생한 경우 서비스의 제공을 일시적으로 중단할 수 있습니다.

**제6조 (저작권 및 이용제한)**

- 홈페이지에 게시된 모든 콘텐츠의 저작권은 회사에 있으며, 관련 법령에 따라 보호받습니다.
- 이용자는 회사의 사전 서면 동의 없이 홈페이지에 게시된 자료를 복제, 전송, 출판, 배포하거나 제3자에게 이용하게 하여서는 안 됩니다.
- 이용자가 본 약관을 위반하여 회사에 손해가 발생한 경우, 회사는 그에 대한 손해배상을 청구할 수 있습니다.

**제7조 (링크 사이트에 대한 책임)**

회사는 홈페이지에서 연결된 외부 웹사이트에 대해 통제 권한이 없으며, 그로부터 제공받는 제품 또는 정보에 대한 책임을 지지 않습니다.

**제8조 (개인정보 보호)**

회사는 관계 법령이 정하는 바에 따라 이용자의 개인정보를 보호하기 위해 노력하며, 개인정보의 수집·이용·보호에 대해서는 별도로 정한 「개인정보처리방침」에 따릅니다.

**제9조 (이용자의 의무)**

이용자는 다음 행위를 하여서는 안 됩니다.

- 홈페이지의 콘텐츠를 무단 복제하거나 배포하는 행위
- 홈페이지의 정상적인 운영을 방해하는 행위
- 타인의 명예를 훼손하거나 권리를 침해하는 행위
- 악성코드, 해킹, 도박, 불법광고 등 정보통신망법상 금지된 행위
- 기타 법령에 위반되는 행위

**제10조 (보안조치 및 면책조항)**

- 회사는 SSL 인증서 기반의 암호화 통신, 접근 권한 관리, 접속 기록 보관 등의 기술적·관리적 보호조치를 통해 서비스와 개인정보를 보호하기 위해 노력합니다.
- 회사는 천재지변, 시스템 장애, 정기 점검 등 부득이한 사유로 인한 서비스 중단에 대하여 책임을 지지 않습니다.

**제11조 (게시물 및 자료의 관리)**

이용자가 홈페이지에 등록한 게시물은 작성자 본인에게 저작권이 있으며, 회사는 이를 운영, 홍보, 콘텐츠 개선 목적의 범위에서 사용할 수 있습니다.

**제12조 (금지행위)**

이용자는 홈페이지에서 다음 각 호에 해당하는 행위를 해서는 안 됩니다.

- 자동화된 수단(스크립트, 봇, 크롤러 등)을 이용하여 정보에 접근하거나 수집하는 행위
- 홈페이지 코드 및 데이터 무단 변경 시도
- 타인의 개인정보를 무단 수집하거나 유포하는 행위

**제13조 (비회원 정보의 수집 및 보호)**

회사는 홈페이지 이용자가 회원가입 없이 서비스를 이용하더라도, 서비스 제공 및 품질 개선, 보안 유지를 위해 다음과 같은 정보가 자동으로 수집될 수 있습니다.

- 접속 IP 주소, 브라우저 종류, 방문 일시, 방문 페이지, 쿠키 정보 등

**제14조 (관할법원 및 준거법)**

- 이 약관의 해석 및 적용에 관하여는 대한민국 법령을 적용합니다.
- 이 서비스 이용과 관련하여 회사와 이용자 간에 발생한 분쟁에 대해서는 서울중앙지방법원을 제1심 전속 관할법원으로 합니다.

**제15조 (약관의 효력 및 해석)**

본 약관은 대한민국 법률에 따라 해석되며, 본 약관에 명시되지 않은 사항에 대해서는 관계 법령 및 일반 상관례에 따릅니다.

---

**[부칙]**

- 제정일: 2022년 12월 21일
- 1차 개정: 2025년 7월 01일
- 시행일: 2025년 7월 01일
`;

async function getContent() {
  try {
    const doc = await adminDb.collection("legal_docs").doc("terms").get();
    if (doc.exists && doc.data()?.content) {
      return doc.data()!.content as string;
    }
  } catch {}
  return DEFAULT_CONTENT;
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const content = await getContent();

  return (
    <>
      <Header lang={lang as Locale} dict={dict} />
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
            <div className="prose prose-gray max-w-none prose-headings:font-bold prose-h1:text-2xl prose-h1:text-gray-900 prose-h2:text-xl prose-h2:text-gray-800 prose-strong:text-gray-800 prose-table:w-full prose-th:bg-gray-50 prose-th:px-3 prose-th:py-2 prose-td:px-3 prose-td:py-2 prose-td:border prose-th:border">
              <ReactMarkdown>{content}</ReactMarkdown>
            </div>
          </div>
        </div>
      </main>
      <Footer lang={lang as Locale} dict={dict} />
    </>
  );
}
