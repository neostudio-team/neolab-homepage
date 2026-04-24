import { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import JaCompanyPage from "@/features/company/JaCompanyPage";
import CompanyHero from "./components/CompanyHero";
import CompanyVision from "./components/CompanyVision";
import CompanyJourney from "./components/CompanyJourney";
import CompanyTeam from "./components/CompanyTeam";
import CompanyOffice from "./components/CompanyOffice";
import { Page } from "./CompanyPage.styles";

export const metadata: Metadata = {
  title: "회사소개 - 네오랩컨버전스",
  description:
    "Write the Future, Connect the World — 아날로그와 디지털을 연결하는 네오랩컨버전스",
};

export default async function CompanyPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  if (lang === "ja") {
    return <JaCompanyPage lang={lang} dict={dict} />;
  }

  return (
    <>
      <Header lang={lang} dict={dict.common.header} />
      <Page>
        <CompanyHero />
        <CompanyVision />
        <CompanyJourney />
        <CompanyTeam />
        <CompanyOffice />
      </Page>
      <Footer lang={lang} dict={dict.common.footer} />
    </>
  );
}
