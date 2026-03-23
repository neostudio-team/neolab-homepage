import { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import LazySection from "@/components/LazySection";
import JaCompanyPage from "./JaCompanyPage";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Company Introduction - NeoLAB Convergence Inc.",
  description: "A gateway company to bridge the physical and virtual worlds",
};

const cultureIcons = [
  "/images/company/co-wroking-icon-8-light.png",
  "/images/company/co-wroking-icon-10-light.png",
  "/images/company/co-wroking-icon-9-light.png",
  "/images/company/co-wroking-icon-7-light.png",
  "/images/company/co-wroking-icon-5-light.png",
  "/images/company/co-wroking-icon-6-light.png",
];

const galleryImages = [
  { src: "/images/company/PPL020.jpg", alt: "Team at work" },
  { src: "/images/company/PPL016.jpg", alt: "Team dining" },
  { src: "/images/company/PPL017.jpg", alt: "Team celebration" },
  { src: "/images/company/PPL019.jpg", alt: "Exhibition" },
  { src: "/images/company/PPL014.jpg", alt: "Team photo" },
];

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

  const t = dict.company;

  return (
    <>
      <Header lang={lang} dict={dict.common.header} />
      <main>
        {/* Hero Section */}
        <section className="bg-[#f1f1f1] py-[54px]">
          <div className="max-w-[1080px] mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[500px]">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-[40px] overflow-hidden">
                    <Image src="/images/company/impression01.jpg" alt="NeoLAB presentation" width={400} height={500} className="w-full h-auto object-cover" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="rounded-full overflow-hidden w-24 h-24">
                    <Image src="/images/company/Face01-write.jpeg" alt="Writing with smartpen" width={96} height={96} className="w-full h-full object-cover" />
                  </div>
                  <div className="rounded-[40px] overflow-hidden">
                    <Image src="/images/company/impression02.jpg" alt="NeoLAB team" width={400} height={500} className="w-full h-auto object-cover" />
                  </div>
                  <div className="rounded-full overflow-hidden w-20 h-20">
                    <Image src="/images/company/Face04-logo.png" alt="NeoLAB Logo Badge" width={80} height={80} className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              <div>
                <h1 className="text-[80px] lg:text-[135px] font-extrabold text-black leading-[0.95] mb-6 whitespace-pre-line">
                  {t.hero.title}
                </h1>
                <p className="text-base text-[#666]">{t.hero.subtitle}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Moon Shot Thinkers */}
        <section className="py-[54px] bg-[#f1f1f1]">
          <div className="max-w-[1080px] mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-[40px] lg:text-[60px] font-extrabold text-black leading-tight mb-6">{t.moonShot.title}</h2>
                <p className="text-[#666] text-sm leading-[2]">{t.moonShot.description}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Image src="/images/company/co-working-space-61.png" alt="Co-working space" width={400} height={300} className="w-full h-auto rounded-lg" />
                <Image src="/images/company/PPL_talk.jpg" alt="Team discussion" width={400} height={300} className="w-full h-auto rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <LazySection>
        <section className="py-[54px] bg-[#f1f1f1] relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-[120px] lg:text-[209px] font-extrabold text-black/5 select-none">NEOLAB</span>
          </div>
          <div className="max-w-[1080px] mx-auto px-4 relative z-10">
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
              {galleryImages.map((img, i) => (
                <div key={img.alt} className={`rounded-lg overflow-hidden ${i === 0 ? "col-span-2 row-span-2" : ""}`}>
                  <Image src={img.src} alt={img.alt} width={i === 0 ? 600 : 300} height={i === 0 ? 400 : 200} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>

        </LazySection>

        {/* Our Culture */}
        <LazySection>
        <section className="py-[54px] bg-[#2d2d3f] text-white">
          <div className="max-w-[1080px] mx-auto px-4">
            <h2 className="text-[40px] lg:text-[60px] font-extrabold mb-12 text-center">{t.culture.title}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.culture.items.map((item, i) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 shrink-0">
                    <Image src={cultureIcons[i]} alt={item.title} width={48} height={48} className="w-full h-full" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        </LazySection>

        {/* Location */}
        <LazySection>
        <section className="py-[54px] bg-[#f8da2f]/30">
          <div className="max-w-[1080px] mx-auto px-4">
            <h2 className="text-[40px] lg:text-[60px] font-extrabold text-black mb-8">{t.location.title}</h2>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <div className="mb-6">
                  <h3 className="font-bold text-black mb-2">{t.location.headquarters}</h3>
                  <p className="text-[#666] text-sm">{t.location.hqAddress}</p>
                  <p className="text-[#666] text-sm mt-1">{t.location.hqPhone}</p>
                  <p className="text-[#666] text-sm">{t.location.hqFax}</p>
                </div>
                <div>
                  <h3 className="font-bold text-black mb-2">{t.location.overseasOffices}</h3>
                  <p className="text-[#666] text-sm">{t.location.dallas}</p>
                  <p className="text-[#666] text-sm">{t.location.tokyo}</p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden">
                <Image src="/images/company/bottom.png" alt="NeoLAB Exhibition Booth" width={600} height={400} className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>
        </section>

        </LazySection>

        {/* Contact Form */}
        <LazySection>
        <section className="py-[54px] bg-white" id="contact">
          <div className="max-w-[1080px] mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ContactForm showInterest dict={dict.common.contactForm} />
              <div className="flex justify-center">
                <Image src="/images/NeoLAB-CI_01.png" alt="NeoLAB" width={250} height={75} className="opacity-30" />
              </div>
            </div>
          </div>
        </section>
        </LazySection>
      </main>
      <Footer lang={lang} dict={dict.common.footer} />
    </>
  );
}
