import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { adminDb } from "@/lib/firebase-admin";

interface PressRelease {
  id: string;
  titleKo: string;
  titleEn: string;
  titleJa: string;
  excerptKo: string;
  excerptEn: string;
  excerptJa: string;
  author: string;
  category: string;
  externalUrl: string;
  createdAt: string;
}

async function getPressReleases(): Promise<PressRelease[]> {
  try {
    const snapshot = await adminDb
      .collection("press_releases")
      .orderBy("createdAt", "desc")
      .get();
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      titleKo: doc.data().titleKo ?? "",
      titleEn: doc.data().titleEn ?? "",
      titleJa: doc.data().titleJa ?? "",
      excerptKo: doc.data().excerptKo ?? "",
      excerptEn: doc.data().excerptEn ?? "",
      excerptJa: doc.data().excerptJa ?? "",
      author: doc.data().author ?? "NeoLAB",
      category: doc.data().category ?? "press",
      externalUrl: doc.data().externalUrl ?? "",
      createdAt: doc.data().createdAt?.toDate().toISOString() ?? new Date().toISOString(),
    }));
  } catch {
    return [];
  }
}

export default async function PressPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const pressReleases = await getPressReleases();

  function getTitle(p: PressRelease) {
    if (lang === "en") return p.titleEn || p.titleKo;
    if (lang === "ja") return p.titleJa || p.titleKo;
    return p.titleKo;
  }

  function getExcerpt(p: PressRelease) {
    if (lang === "en") return p.excerptEn || p.excerptKo;
    if (lang === "ja") return p.excerptJa || p.excerptKo;
    return p.excerptKo;
  }

  return (
    <>
      <Header lang={lang} dict={dict.common.header} />
      <div className="bg-white min-h-screen font-sans">
        {/* Hero */}
        <section className="relative w-full bg-[#f8f9fa] pt-[100px] mb-16 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-bl from-[#7fb3f5] to-transparent opacity-30 blur-3xl rounded-full"></div>
            <div className="absolute top-20 left-10 w-[300px] h-[300px] bg-gradient-to-br from-[#f2a99d] to-transparent opacity-40 blur-3xl rounded-full"></div>
          </div>
          <div className="max-w-[1080px] mx-auto px-4 relative z-10 py-16">
            <h4 className="text-[#000000] text-[18px] font-bold tracking-[0.05em] uppercase mb-4">NEWSROOM</h4>
            <h1 className="text-[60px] font-extrabold text-[#000000] leading-tight drop-shadow-sm">Press release</h1>
            <p className="mt-6 text-[#333] font-medium text-[15px]">
              홍보 및 보도자료 문의:{" "}
              <a href="mailto:korbiz@neolab.net" className="text-[#2ea3f2] hover:underline">korbiz@neolab.net</a>
            </p>
          </div>
          <div className="absolute bottom-[-2px] left-0 w-full overflow-hidden leading-[0] z-20">
            <svg className="block w-[calc(110%+1.3px)] h-[80px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C71.37,20.44,151.72,42.71,213.9,50.75,249.23,55.33,285.4,59.35,321.39,56.44Z" className="fill-white"></path>
            </svg>
          </div>
        </section>

        {/* List */}
        <section className="max-w-[1080px] mx-auto px-4 pb-32">
          {pressReleases.length === 0 ? (
            <div className="text-center py-20 text-gray-400 text-sm">등록된 기업뉴스가 없습니다.</div>
          ) : (
            <div className="max-w-[900px]">
              {pressReleases.map((post) => (
                <article key={post.id} className="mb-14 border-b border-gray-100 pb-12 last:border-0">
                  <h2 className="text-[26px] font-medium text-[#333333] mb-3 leading-snug hover:text-[#2ea3f2] transition-colors tracking-tight">
                    <Link href={post.externalUrl || `/${lang}/company/press/${post.id}`} target={post.externalUrl ? "_blank" : undefined} rel={post.externalUrl ? "noopener noreferrer" : undefined}>
                      {getTitle(post)}
                    </Link>
                  </h2>
                  <div className="text-[14px] text-[#666666] mb-5 font-medium">
                    by <span className="text-[#888]">{post.author}</span> | {new Date(post.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })} | <span>{post.category}</span>
                  </div>
                  {getExcerpt(post) && (
                    <p className="text-[14px] text-[#666666] leading-[1.7] mb-4 text-justify break-keep">{getExcerpt(post)}</p>
                  )}
                  <Link
                    href={post.externalUrl || `/${lang}/company/press/${post.id}`}
                    target={post.externalUrl ? "_blank" : undefined}
                    rel={post.externalUrl ? "noopener noreferrer" : undefined}
                    className="text-[14px] text-[#2ea3f2] font-medium hover:underline"
                  >
                    read more
                  </Link>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
      <Footer lang={lang} dict={dict.common.footer} />
    </>
  );
}
