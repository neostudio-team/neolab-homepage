import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LazySection from "@/components/LazySection";
import ProductsSection from "@/components/ProductsSection";
import TechSection from "@/components/TechSection";
import BusinessSection from "@/components/BusinessSection";
import PartnersSection from "@/components/PartnersSection";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";
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
        <LazySection>
          <TechSection dict={dict.home.tech} />
        </LazySection>
        <LazySection>
          <ProductsSection dict={dict.home.products} />
        </LazySection>
        <LazySection>
          <BusinessSection dict={dict.home.business} />
        </LazySection>
        <LazySection>
          <StatsSection dict={dict.home.stats} />
        </LazySection>
        <LazySection>
          <CTASection dict={dict.home.cta} />
        </LazySection>
        <LazySection>
          <PartnersSection />
        </LazySection>
      </main>
      <Footer lang={lang} dict={dict.common.footer} />
    </>
  );
}
