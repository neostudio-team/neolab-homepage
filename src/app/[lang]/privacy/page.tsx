import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { adminDb } from "@/lib/firebase-admin";
import ReactMarkdown from "react-markdown";

const DEFAULT_CONTENT = `# 개인정보처리방침

**제1조(개인정보처리방침의 목적)**

㈜네오랩컨버전스(이하 "회사")는 「개인정보 보호법」 등 관련 법령에 따라 이용자의 개인정보를 안전하게 보호하며, 이를 위한 기준으로 본 개인정보처리방침을 수립·공개합니다.

회사는 이용자가 웹사이트 및 앱을 안심하고 이용할 수 있도록 개인정보 수집, 이용, 보관, 제공 등의 처리 기준과 이용자의 권리 보호에 대한 사항을 안내합니다.

또한, 회사의 웹사이트 및 앱에는 외부 사이트 또는 애플리케이션으로 연결되는 링크가 포함될 수 있으며, 해당 외부 서비스의 개인정보 보호 책임은 각 제공자에게 있습니다. 이용자는 연결된 외부 서비스의 개인정보 처리방침을 반드시 확인해야 합니다.

**제2조(개인정보 항목 및 자동 수집 장치 설치/운영에 관한 사항)**

회사는 서비스 제공 및 통계 분석, 맞춤형 광고 제공을 위해 자동으로 기기정보, 사용기록, 방문이력 등을 수집합니다.

- **이용자가 직접 제공한 개인정보**
  - 웹(Web): 문의하기, A/S 접수, 고객센터 이용 등으로 수집되는 정보 (성명, 이메일 주소, 비밀번호, 펜 ID, 사용이력, 연락처 등)
  - 앱(App): 앱 가입, 기기 연동, 콘텐츠 이용 등을 위해 수집되는 정보 (성명, 이메일 주소, 비밀번호, 펜 ID, 사용이력, 연락처 등)

- **자동으로 수집되는 정보**
  - 로그 정보: 기기 정보, OS 정보, 접속일시
  - 사용 정보: 이용자 행동 로그, 클릭 패턴 등
  - 위치 정보: MAC Address, IP 기반 지역 추정

- **Google Analytics 사용**
  - 앱 설치, 삭제, 업데이트 등의 이벤트
  - 스마트펜 맥어드레스
  - 사용 기기 및 운영체제
  - 이벤트 위치, 성별, 연령, 유입경로

- **쿠키 및 세션**: 회사는 맞춤형 서비스를 제공하기 위해 쿠키(cookie) 및 세션(session) 정보를 사용할 수 있습니다.

**제3조(개인정보의 이용 목적)**

- 웹(Web): 고객 문의 응대, 이벤트 및 콘텐츠 제공, 서비스 개선
- 앱(App): 회원 가입 및 이용자 확인, 앱 연동 제품 사용 이력 관리, 맞춤형 콘텐츠 및 통계 분석 제공

**제4조(개인정보 접근권한)**

회사는 안전한 서비스를 제공하기 위하여 접근권한이 필요한 경우, 이용자가 명확하게 인지할 수 있도록 알리고 이용자의 동의를 받습니다.

**제5조 (개인정보 제3자 제공 및 위탁)**

회사는 이용자의 별도 동의가 있는 경우나 법령에 규정된 경우를 제외하고는 이용자의 개인정보를 제3자에게 제공하지 않습니다.

| 수탁업체 | 위탁업무 | 처리항목 | 보유 및 이용기간 |
|---|---|---|---|
| CJ대한통운 | 상품 배송 | 성명, 주소, 연락처 | 목적 달성 후 즉시 파기 |
| A/S 처리업체 | A/S 접수 및 회수 처리 | 성명, 주 연락처, 제품정보 | A/S 완료 후 즉시 파기 |

**제6조(개인정보 보존기간 및 파기)**

- 보유항목: 성명, 이메일 주소
- 앱 이용 시: 이용계약에 따른 회원자격 유지 기간 동안 보유
- 웹 이용 시(비회원 문의 등): 수집 목적 달성 후 즉시 파기

**제7조(행태정보 수집 및 광고 활용 안내)**

회사는 아래 광고 사업자들이 이용자 행태정보를 수집하여 맞춤형 광고 서비스에 이용할 수 있도록 허용하고 있습니다.

- ㈜엔에이치엔에이스 (NHN ACE)
- Google LLC (Google Analytics): 방문자 분석 및 리타게팅 광고
- Meta Platforms, Inc. (Meta Pixel): 소셜미디어 기반 맞춤형 광고 제공
- Naver Analytics (Naver): 방문자 분석 및 리타게팅 광고

**제8조(이용자 및 법정대리인의 권리)**

이용자는 언제든지 자신의 개인정보 수집·이용에 대한 동의를 철회하거나 삭제·정정을 요청할 수 있으며, 요청은 고객센터(서면, 전화, 이메일)를 통해 가능합니다.

**제9조(유럽연합 일반 개인정보보호법 GDPR 관련 사항)**

회사는 유럽연합(EU) 거주자를 대상으로 서비스를 제공할 경우, GDPR을 준수합니다.

**제10조(개인정보 안전성 확보조치)**

회사는 「개인정보 보호법」 제29조에 따라 다음과 같은 내부관리계획을 수립·운영합니다.

- 개인정보에 대한 접근 권한의 제한 및 관리 체계 운영
- 개인정보의 안전한 저장 및 전송을 위한 암호화 적용
- 바이러스, 스파이웨어 등 악성 프로그램 점검·치료를 위한 보안 프로그램 설치 및 갱신

**제11조(개정 고지 의무)**

개인정보 처리방침이 변경되는 경우 회사는 변경 사항을 게시하며, 변경된 개인정보 처리방침은 게시한 날로부터 7일 후부터 효력이 발생합니다.

**제12조(개인정보 민원서비스)**

- **고객서비스담당**: 고객지원실 / cs@neolab.net / 02-1588-6239
- **개인정보관리책임자**: 경영지원팀 / shkim@neolab.net / 02-3462-2981

---

**[부칙]**

- 시행일: 2025년 7월 01일
- 1차 개정: 2025년 7월 01일
`;

async function getContent() {
  try {
    const doc = await adminDb.collection("legal_docs").doc("privacy").get();
    if (doc.exists && doc.data()?.content) {
      return doc.data()!.content as string;
    }
  } catch {}
  return DEFAULT_CONTENT;
}

export default async function PrivacyPage({
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
