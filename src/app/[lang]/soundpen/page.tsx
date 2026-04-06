import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LazySection from "@/components/LazySection";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Sound Pen - NeoLAB Convergence Inc.",
  description: "Sound Pen, THE ULTIMATE WAY TO LISTEN TO BOOKS",
};

const productImages = [
  "/images/soundpen/Neo_poppen.png",
  "/images/soundpen/Neo_poppen_prime.png",
  "/images/soundpen/Neo_poppen_video.png",
  "/images/soundpen/Neo_c72nc.png",
];

export default async function SoundPenPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.soundpen;

  return (
    <>
      <Header lang={lang} dict={dict.common.header} />
      <main>
        {/* Hero */}
        <section
          className="relative py-20 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/soundpen/Neo-04_01-1024x684-1.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 max-w-[1080px] mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="text-white w-full lg:w-[50%]">
                <p className="text-primary uppercase tracking-widest text-sm mb-4">{t.hero.label}</p>
                <h1 className="text-[32px] lg:text-[40px] font-black mb-6 leading-tight">{t.hero.title}</h1>
                <p className="text-gray-200 text-sm leading-[2] mb-8">{t.hero.description}</p>
                <div className="flex gap-4 flex-wrap">
                  {lang === 'ko' && (
                    <>
                      <Link href="https://smartstore.naver.com/neolab" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-primary border border-primary px-8 py-3 rounded font-semibold hover:bg-gray-50 transition-colors uppercase tracking-wider text-sm">
                        팝펜 공식몰
                      </Link>
                      <Link href="https://cafe.naver.com/dotcotory" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#03c75a] text-white px-8 py-3 rounded font-semibold hover:opacity-90 transition-opacity uppercase tracking-wider text-sm">
                        팝펜 팩토리
                      </Link>
                    </>
                  )}
                </div>
              </div>
              <div className="w-full lg:w-[50%] flex justify-center">
                <Image src="/images/soundpen/poppen_soundpen_001.png" alt="NeoLAB Sound Pen" width={400} height={400} className="drop-shadow-2xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Fun with books */}
        <section className="py-[54px] bg-white">
          <div className="max-w-[1080px] mx-auto px-4 text-center">
            <h2 className="text-[30px] font-medium text-black mb-6">{t.funWithBooks.title}</h2>
            <p className="text-[#666] text-sm leading-[2] mb-4">{t.funWithBooks.p1}</p>
            <p className="text-[#666] text-sm leading-[2]">{t.funWithBooks.p2}</p>
          </div>
        </section>

        {/* Product Lineup */}
        <LazySection>
        <section className="py-[54px] bg-[#f1f1f1]">
          <div className="max-w-[1080px] mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {t.products.map((product, i) => (
                <div key={product.name} className="bg-white rounded-xl p-8 text-center shadow-sm">
                  <div className="mb-6 flex justify-center">
                    <Image src={productImages[i]} alt={product.name} width={200} height={200} className="h-48 w-auto object-contain" />
                  </div>
                  <h3 className="text-xl font-bold text-black">{product.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        </LazySection>

        {/* Sticker & Books */}
        <LazySection>
        <section className="py-[54px] bg-white">
          <div className="max-w-[1080px] mx-auto px-4">
            <h2 className="text-[30px] font-medium text-center text-black mb-4">{t.stickerBooks.title}</h2>
            <p className="text-center text-[#999] text-sm mb-12">{t.stickerBooks.subtitle}</p>
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="w-full lg:w-[45%]">
                <Image src="/images/soundpen/Neo-04_03-1.png" alt="Pop Pen Stickers and Books" width={490} height={508} className="w-full max-w-md h-auto mx-auto" />
              </div>
              <div className="w-full lg:w-[55%] space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-black mb-3">{t.stickerBooks.sticker}</h3>
                  <p className="text-[#666] text-sm leading-[2]">{t.stickerBooks.stickerDesc}</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-3">{t.stickerBooks.video}</h3>
                  <p className="text-[#666] text-sm leading-[2]">{t.stickerBooks.videoDesc}</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-3">{t.stickerBooks.books}</h3>
                  <p className="text-[#666] text-sm leading-[2]">{t.stickerBooks.booksDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        </LazySection>

        {/* Software */}
        <LazySection>
        <section className="py-[54px] bg-[#f1f1f1]">
          <div className="max-w-[1080px] mx-auto px-4">
            <h2 className="text-[30px] font-medium text-center text-black mb-4">{t.software.title}</h2>
            <p className="text-center text-[#999] text-sm mb-12">{t.software.subtitle}</p>
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="w-full lg:w-[50%] space-y-8">
                <div className="flex items-start gap-4">
                  <Image src="/images/soundpen/icon-stamp.png" alt={t.software.smartReaderEditor} width={64} height={64} className="shrink-0" />
                  <div>
                    <h3 className="font-bold text-black mb-2">{t.software.smartReaderEditor}</h3>
                    <p className="text-[#666] text-sm leading-[2]">{t.software.smartReaderEditorDesc}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Image src="/images/soundpen/icon-moretube02.png" alt={t.software.moreTube} width={64} height={64} className="shrink-0" />
                  <div>
                    <h3 className="font-bold text-black mb-2">{t.software.moreTube}</h3>
                    <p className="text-[#666] text-sm leading-[2]">{t.software.moreTubeDesc}</p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-[50%] flex justify-center">
                <Image src="/images/soundpen/Neo-05_3-1.png" alt="Companion Apps" width={500} height={500} className="w-full max-w-md h-auto" />
              </div>
            </div>
          </div>
        </section>

        </LazySection>

        {/* Smart Reader Friends */}
        <LazySection>
        <section className="py-[54px] bg-white">
          <div className="max-w-[1080px] mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="w-full lg:w-[45%] flex justify-center">
                <Image src="/images/soundpen/Neo-04_02.png" alt="Smart Reader Partners" width={490} height={508} className="w-full max-w-md h-auto" />
              </div>
              <div className="w-full lg:w-[55%]">
                <h2 className="text-[30px] font-medium text-black mb-6">{t.smartReaderFriends.title}</h2>
                <p className="text-[#666] text-sm leading-[2] mb-4">{t.smartReaderFriends.p1}</p>
                <p className="text-[#666] text-sm leading-[2]">{t.smartReaderFriends.p2}</p>
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
