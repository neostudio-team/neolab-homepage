import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import PageHero from "@/components/common/PageHero";
import RevealHeadingBody from "@/components/common/RevealHeadingBody";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import CiBiTabs from "./components/CiBiTabs";
import {
  Page,
} from "./CiBiPage.styles";

export default async function CiBiPage({ lang }: { lang: Locale }) {
  const dict = await getDictionary(lang);

  return (
    <>
      <Header lang={lang} dict={dict.common.header} />
      <Page>
        <PageHero 
          title="CI/BI" 
          backgroundImage="/images/bi/hero-bg.jpg" 
        />
        <RevealHeadingBody
          title="브랜드 가이드."
          titleReveal={{ y: 40, once: false, amount: 0.2 }}
          description={
            "브랜드 가이드라인은 우리의 철학과 비전을 시각적으로 전달하는 핵심 기준입니다.\n모든 시각적 요소는 브랜드의 가치를 보호하고 강화하는 데 목적이 있습니다."
          }
          descriptionReveal={{ y: 32, delay: 0.15, once: false, amount: 0.2 }}
          paddingBottom={false}
        />
        <CiBiTabs />
      </Page>
      <Footer lang={lang} dict={dict.common.footer} />
    </>
  );
}
