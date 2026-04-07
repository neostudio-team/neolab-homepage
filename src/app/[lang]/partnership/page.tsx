import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModalTrigger from "@/components/ContactModalTrigger";
import LazySection from "@/components/LazySection";
import PartnershipCategories from "@/components/PartnershipCategories";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Partnership - NeoLAB Convergence Inc.",
  description: "Create new business opportunities with NeoLAB Convergence",
};

interface PartnerCard {
  name: string;
  description: string;
  image: string;
}

export default async function PartnershipPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.partnership;
  const p = t.partners;

  const stationery: PartnerCard[] = [
    { ...p.moleskine, image: "/images/partnership/Stationery_moleskine01.jpg" },
    { ...p.monami, image: "/images/partnership/Stationery_monami.jpg" },
    { ...p.lamy, image: "/images/partnership/Stationery_lamy.jpg" },
    { ...p.lineFriends, image: "/images/partnership/line.jpg" },
    { ...p.yangjisa, image: "/images/partnership/Stationery_yangjisa.jpg" },
  ];

  const education: PartnerCard[] = [
    { ...p.kyowonKumon, image: "/images/partnership/edu_kumon.jpg" },
    { ...p.mbest, image: "/images/partnership/edu_mbest.jpg" },
    { ...p.smartStudy, image: "/images/partnership/edu_study.jpg" },
    { ...p.englishEgg, image: "/images/partnership/edu_egg.jpg" },
    { ...p.hansolEdu, image: "/images/partnership/edu_whale.jpg" },
    { ...p.bts, image: "/images/partnership/edu_BTS.jpg" },
    { ...p.smartssen, image: "/images/partnership/edu_sinsa.jpg" },
    { ...p.echelon, image: "/images/partnership/edu_ech.jpg" },
    { ...p.chungnamEdu, image: "/images/partnership/edu_chungnam_edu.jpg" },
    { ...p.jeonbukEdu, image: "/images/partnership/edu_jeonbuk_edu.jpg" },
  ];

  const enterprise: PartnerCard[] = [
    { ...p.forestService, image: "/images/partnership/form_san.jpg" },
    { ...p.informDS, image: "/images/partnership/form_inform.jpg" },
    { ...p.lgChemical, image: "/images/partnership/form_LG.jpg" },
  ];

  const audioGuide: PartnerCard[] = [
    { ...p.culturalHeritage, image: "/images/partnership/munhaw.jpg" },
    { ...p.chuusonji, image: "/images/partnership/form_chuson.jpg" },
  ];

  const license: PartnerCard[] = [
    { ...p.snu, image: "/images/partnership/SNU.jpg" },
    { ...p.koreaUniv, image: "/images/partnership/kyo.jpg" },
    { ...p.kimJungGi, image: "/images/partnership/jung.jpg" },
    { ...p.johnMayer, image: "/images/partnership/john.jpg" },
  ];

  const media: PartnerCard[] = [
    { ...p.tvnBrainiacs, image: "/images/partnership/tv01.jpg" },
    { ...p.tvnCoolkkadang, image: "/images/partnership/tv02.jpg" },
    { ...p.heartSignal, image: "/images/partnership/tv03.jpg" },
    { ...p.hitman, image: "/images/partnership/tv04.jpg" },
    { ...p.secretLove, image: "/images/partnership/tv05.jpg" },
    { ...p.idolLeague, image: "/images/partnership/tv06.jpg" },
  ];

  return (
    <>
      <Header lang={lang} dict={dict.common.header} />
      <main>
        {/* Hero */}
        <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: "url('/images/partnership/shakeHands.jpg')" }}>
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 max-w-[1080px] mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="text-white w-full lg:w-[50%]">
                <p className="text-primary uppercase tracking-widest text-sm mb-4">{t.hero.label}</p>
                <h1 className="text-[32px] lg:text-[40px] font-black mb-6 leading-tight">{t.hero.title}</h1>
                <p className="text-gray-200 text-sm leading-[2]">{t.hero.description}</p>
              </div>
              <div className="w-full lg:w-[50%] flex justify-center">
                <Image src="/images/partnership/picWindow01.png" alt="Partnership" width={400} height={478} className="rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Diverse Applications */}
        <section className="py-[54px] bg-white text-center">
          <div className="max-w-[1080px] mx-auto px-4">
            <h2 className="text-[30px] font-medium text-black mb-4">{t.diverseApplications.title}</h2>
            <p className="text-[#666] text-sm mb-8">{t.diverseApplications.description}</p>
            <Link href="#collab" className="inline-block bg-primary text-white px-8 py-3 rounded font-semibold hover:bg-primary-dark transition-colors uppercase tracking-wider text-sm">
              {dict.common.contactUs}
            </Link>
          </div>
        </section>

        {/* Partner Categories */}
        <LazySection>
        <section className="py-[54px] bg-[#f1f1f1]">
          <div className="max-w-[1080px] mx-auto px-4">
            <PartnershipCategories categories={[
              { icon: "/images/partnership/icon-coll01.png", title: t.categories.stationery, cards: stationery },
              { icon: "/images/partnership/icon-coll02.png", title: t.categories.education, cards: education },
              { icon: "/images/partnership/icon-coll05.png", title: t.categories.enterpriseForm, cards: enterprise },
              { icon: "/images/partnership/icon-coll02.png", title: t.categories.audioGuide, cards: audioGuide },
              { icon: "/images/partnership/icon-coll03.png", title: t.categories.license, cards: license },
              { icon: "/images/partnership/icon-coll04.png", title: t.categories.media, cards: media },
            ]} />
          </div>
        </section>

        </LazySection>

        {/* Exhibitions & Events */}
        <LazySection>
        <section className="py-[54px] bg-white">
          <div className="max-w-[1080px] mx-auto px-4">
            <h2 className="text-[30px] font-medium text-black mb-4 text-center">{t.exhibitions.title}</h2>
            <p className="text-[#666] text-center text-sm mb-12 max-w-2xl mx-auto">{t.exhibitions.description}</p>
            <div className="grid md:grid-cols-3 gap-8">
              {t.exhibitions.events.map((event, i) => {
                const images = ["/images/partnership/g01.jpg", "/images/partnership/huyndai02.jpg", "/images/partnership/forum.jpg"];
                return (
                  <div key={event.title} className="rounded-lg overflow-hidden shadow-lg">
                    <div className="relative h-48">
                      <Image src={images[i]} alt={event.title} fill className="object-cover" />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-black mb-2">{event.title}</h3>
                      <p className="text-[#666] text-sm">{event.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        </LazySection>

        {/* Contact */}
        <LazySection>
        <section className="py-[54px] bg-[#f1f1f1]" id="collab">
          <div className="max-w-[1080px] mx-auto px-4 text-center">
            <h2 className="text-[30px] font-medium text-black mb-4">{dict.common.creatingNewValue}</h2>
            <p className="text-[#666] mb-8">
              {dict.common.contactUsAt}{" "}
              <a href="mailto:korbiz@neolab.net" className="text-primary hover:underline">korbiz@neolab.net</a>
            </p>
            <ContactModalTrigger
              buttonText={dict.common.contactUs}
              variant="pill"
              defaultCategory="제안사항"
              pillClassName="inline-block bg-primary text-white px-8 py-3 rounded font-semibold hover:bg-primary-dark transition-colors uppercase tracking-wider text-sm"
            />
          </div>
        </section>

        </LazySection>

        {/* Developers */}
        <LazySection>
        <section className="py-16 bg-[#1a1a2e] text-white text-center">
          <div className="max-w-[1080px] mx-auto px-4">
            <h2 className="text-[30px] font-medium mb-4">{dict.common.designedForDevelopers}</h2>
            <p className="text-gray-300 text-sm mb-8">{dict.common.developersDesc}</p>
            <Link
              href="https://github.com/NeoSmartpen"
              className="inline-block bg-teal text-white px-8 py-3 uppercase tracking-wider text-sm font-semibold hover:opacity-90 transition-opacity"
              target="_blank"
              rel="noopener noreferrer"
            >
              {dict.common.openSourceCode}
            </Link>
          </div>
        </section>
        </LazySection>
      </main>
      <Footer lang={lang} dict={dict.common.footer} />
    </>
  );
}
