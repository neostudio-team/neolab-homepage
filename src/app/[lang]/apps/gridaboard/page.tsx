import { Metadata } from "next";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModalTrigger from "@/components/ContactModalTrigger";

const IMG = "/images/neosmartpen/apps/gridaboard";

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.neosmartpen.gridaboard.metadata;
  return { title: t.title, description: t.description };
}

export default async function GridaBoardPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.neosmartpen.gridaboard;

  return (
    <>
      <Header lang={lang} dict={dict.common.header} />

      <main>
        {/* S0: Hero - white bg, 2 cols: logo left, text right */}
        <section className="bg-white" style={{ minHeight: 480 }}>
          <div className="max-w-[1080px] mx-auto px-4 py-16 flex flex-col lg:flex-row items-center gap-8">
            {/* Left: Logo */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <Image
                src={`${IMG}/gridaboard_logo.png`}
                alt="GRIDA BOARD"
                width={400}
                height={200}
                className="object-contain"
              />
            </div>
            {/* Right: Text + CTA */}
            <div className="w-full lg:w-1/2">
              <h1 className="text-[36px] lg:text-[48px] font-bold text-[#333] mb-4 tracking-wider">
                {t.hero.title}
              </h1>
              <h2 className="text-[22px] lg:text-[28px] font-light text-[#333] mb-6">
                {t.hero.subtitle}
              </h2>
              <h2 className="text-[18px] text-[#666] mb-1">{t.hero.forLabel}</h2>
              <h2 className="text-[22px] font-bold text-[#333] mb-6">{t.hero.forBold}</h2>
              <p className="text-[14px] text-[#666] leading-relaxed mb-8">
                {t.hero.desc}
              </p>
              <a
                href="https://gridaboard.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-[#2d2d2d] text-white text-[14px] font-medium hover:bg-[#444] transition-colors uppercase tracking-wider"
              >
                {t.hero.cta}
              </a>
            </div>
          </div>
        </section>

        {/* S1: Feature title - centered */}
        <section className="bg-white py-16">
          <div className="max-w-[1080px] mx-auto px-4 text-center">
            <h2 className="text-[28px] lg:text-[36px] font-bold text-[#333] mb-6">
              {t.s1.title}
            </h2>
            {"desc" in t.s1 && (
              <div className="max-w-[700px] mx-auto text-left">
                <p className="text-[14px] text-[#666] leading-relaxed mb-4">
                  {(t.s1 as { desc?: string }).desc}
                </p>
                {(t.s1 as { desc2?: string }).desc2 && (
                  <p className="text-[14px] text-[#666] leading-relaxed mb-4">
                    {(t.s1 as { desc2?: string }).desc2}
                  </p>
                )}
                {(t.s1 as { desc3?: string }).desc3 && (
                  <p className="text-[14px] text-[#666] leading-relaxed mb-4">
                    {(t.s1 as { desc3?: string }).desc3}
                  </p>
                )}
                {(t.s1 as { note?: string }).note && (
                  <p className="text-[12px] text-[#999] leading-relaxed">
                    {(t.s1 as { note?: string }).note}
                  </p>
                )}
              </div>
            )}
          </div>
        </section>

        {/* S2: Grida Guide - 2 cols: text left, image right */}
        <section className="bg-white py-12">
          <div className="max-w-[1080px] mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/3">
              <h2 className="text-[36px] lg:text-[48px] font-light text-[#333] leading-tight">
                {t.s2.guideLabel}
                {t.s2.guideBold && (
                  <>
                    <br />
                    <span className="font-bold">{t.s2.guideBold}</span>
                  </>
                )}
              </h2>
              {"controllerDownload" in t.s2 && (
                <div className="mt-6">
                  <h2 className="text-[18px] font-semibold text-[#333] mb-2">
                    {(t.s2 as { controllerDownload?: string }).controllerDownload}
                  </h2>
                  <p className="text-[12px] text-[#999]">
                    {(t.s2 as { controllerNote?: string }).controllerNote}
                  </p>
                </div>
              )}
            </div>
            <div className="w-full lg:w-2/3">
              <Image
                src={`${IMG}/gridaboard_desc01.jpg`}
                alt="Grida Guide"
                width={700}
                height={400}
                className="w-full object-contain rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Remote Education section */}
        {"remoteEdu" in t && (
          <section className="bg-[#f9f9f9] py-16">
            <div className="max-w-[1080px] mx-auto px-4 text-center">
              <p className="text-[14px] text-[#666] mb-4">
                {(t as { remoteEdu: { label: string; title: string } }).remoteEdu.label}
              </p>
              <h1 className="text-[22px] lg:text-[28px] font-bold text-[#333]">
                {(t as { remoteEdu: { label: string; title: string } }).remoteEdu.title}
              </h1>
            </div>
          </section>
        )}

        {/* S3: Requirements + Chrome download + Role cards */}
        <section className="bg-white py-16">
          <div className="max-w-[1080px] mx-auto px-4">
            {/* Browser requirements */}
            <div className="flex flex-col lg:flex-row items-start gap-8 mb-16">
              <div className="w-full lg:w-1/2">
                <p className="text-[14px] text-[#666] leading-relaxed mb-4">
                  {t.s3.requirement}
                </p>
                <p className="text-[12px] text-[#999] mb-1">{t.s3.osNote}</p>
                <p className="text-[12px] text-[#999] mb-6">{t.s3.versionNote}</p>
              </div>
              <div className="w-full lg:w-1/2 flex items-center gap-4">
                <Image
                  src={`${IMG}/Chrome-Logo01.png`}
                  alt="Chrome"
                  width={60}
                  height={60}
                  className="object-contain"
                />
                <a
                  href="https://www.google.com/chrome/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] text-[#333] font-medium hover:underline"
                >
                  {t.s3.downloadChrome}
                </a>
              </div>
            </div>

            {/* Role cards - 3 columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { img: "gridaboard_student.png", title: t.s3.student, desc: t.s3.studentDesc },
                { img: "gridaboard_teacher.png", title: t.s3.teacher, desc: t.s3.teacherDesc },
                { img: "gridaboard_business.png", title: t.s3.business, desc: t.s3.businessDesc },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <Image
                    src={`${IMG}/${item.img}`}
                    alt={item.title}
                    width={300}
                    height={300}
                    className="w-full object-contain mb-6"
                  />
                  <h4 className="text-[18px] font-bold text-[#333] mb-2">{item.title}</h4>
                  <p className="text-[13px] text-[#666] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* S4: CTA section - light gray bg with meeting image */}
        <section className="bg-[#f4f4f4] py-20">
          <div className="max-w-[1080px] mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <Image
                src={`${IMG}/compare-fibre-fRGoTJFQAHM-unsplash.jpg`}
                alt="Remote meeting"
                width={540}
                height={360}
                className="w-full object-cover rounded-lg"
              />
            </div>
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h1 className="text-[24px] lg:text-[30px] font-bold text-[#333] mb-4">
                {t.s4.title}
              </h1>
              <h3 className="text-[16px] text-[#666] mb-8">
                {t.s4.subtitle}
              </h3>
              <a
                href="https://gridaboard.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-[#2d2d2d] text-white text-[14px] font-medium hover:bg-[#444] transition-colors uppercase tracking-wider"
              >
                {t.s4.cta}
              </a>
            </div>
          </div>
        </section>

        {/* Bulk Purchase section */}
        {"bulkPurchase" in t && (
          <section className="bg-white py-16">
            <div className="max-w-[1080px] mx-auto px-4 text-center">
              <h1 className="text-[28px] lg:text-[36px] font-bold text-[#333] mb-4">
                {(t as { bulkPurchase: { title: string; desc: string; cta: string } }).bulkPurchase.title}
              </h1>
              <p className="text-[15px] text-[#666] mb-8">
                {(t as { bulkPurchase: { title: string; desc: string; cta: string } }).bulkPurchase.desc}
              </p>
              <ContactModalTrigger
                buttonText={(t as { bulkPurchase: { title: string; desc: string; cta: string } }).bulkPurchase.cta}
                variant="pill"
                defaultCategory="그리다보드 문의"
                pillClassName="inline-block px-8 py-3 bg-[#2d2d2d] text-white text-[14px] font-medium hover:bg-[#444] transition-colors uppercase tracking-wider rounded-none"
              />
            </div>
          </section>
        )}
      </main>

      <Footer lang={lang} dict={dict.common.footer} />
    </>
  );
}
