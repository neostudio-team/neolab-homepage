import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DigitalAnalogSection from "@/components/DigitalAnalogSection";
import LazySection from "@/components/LazySection";
import PartnersSection from "@/components/PartnersSection";
import CoreSolutionsSection from "@/components/CoreSolutionsSection";
import ConnectBusinessSection from "@/components/ConnectBusinessSection";
import ResearchSection from "@/components/ResearchSection";
import FutureSection from "@/components/FutureSection";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";
import DevShowcase from "@/components/DevShowcase";
import Footer from "@/components/Footer";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
      <Header lang={lang} dict={dict.common.header} />
      <main>
        <HeroSection dict={dict.home.hero} />
        <DigitalAnalogSection dict={dict.home.digitalAnalog} />
        <LazySection>
          <PartnersSection />
        </LazySection>
        <LazySection>
          <CoreSolutionsSection dict={dict.home.coreSolutions} />
        </LazySection>
        <LazySection>
          <ConnectBusinessSection dict={dict.home.connectBusiness} />
        </LazySection>
        <LazySection>
          <ResearchSection dict={dict.home.research} />
        </LazySection>
        <LazySection>
          <FutureSection dict={dict.home.future} />
        </LazySection>
        <LazySection>
          <StatsSection dict={dict.home.stats} />
        </LazySection>
        <LazySection>
          <CTASection dict={dict.home.cta} />
        </LazySection>
        <LazySection>
          <DevShowcase />
        </LazySection>
      </main>
      <Footer lang={lang} dict={dict.common.footer} />
    </>
  );
}
