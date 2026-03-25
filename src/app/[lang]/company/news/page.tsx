import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { adminDb } from "@/lib/firebase-admin";

interface Notice {
  id: string;
  isPinned: boolean;
  titleKo: string;
  titleEn: string;
  titleJa: string;
  author: string;
  views: number;
  createdAt: string;
}

async function getNotices(): Promise<Notice[]> {
  try {
    const snapshot = await adminDb
      .collection("notices")
      .orderBy("createdAt", "desc")
      .get();
    const docs = snapshot.docs.map((doc) => ({
      id: doc.id,
      isPinned: doc.data().isPinned ?? false,
      titleKo: doc.data().titleKo ?? "",
      titleEn: doc.data().titleEn ?? "",
      titleJa: doc.data().titleJa ?? "",
      author: doc.data().author ?? "NeoLAB",
      views: doc.data().views ?? 0,
      createdAt: doc.data().createdAt?.toDate().toISOString() ?? new Date().toISOString(),
    }));
    return [...docs.filter(d => d.isPinned), ...docs.filter(d => !d.isPinned)];
  } catch {
    return [];
  }
}

export default async function NoticePage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const notices = await getNotices();

  function getTitle(n: Notice) {
    if (lang === "en") return n.titleEn || n.titleKo;
    if (lang === "ja") return n.titleJa || n.titleKo;
    return n.titleKo;
  }

  return (
    <>
      <Header lang={lang} dict={dict.common.header} />
      <div className="bg-white min-h-screen font-sans">
        {/* Hero Section */}
        <section className="relative w-full bg-[#f8f9fa] pt-[100px] mb-20">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-br from-[#ffdbe0] to-transparent opacity-40 blur-3xl"></div>
            <div className="absolute top-20 right-0 w-1/3 h-full bg-gradient-to-bl from-[#dbebff] to-transparent opacity-40 blur-3xl"></div>
          </div>
          <div className="max-w-[1080px] mx-auto px-4 relative z-10 py-16">
            <h4 className="text-[#666666] text-[14px] font-sans tracking-[0.1em] uppercase mb-4">ANNOUNCEMENT</h4>
            <h1 className="text-[60px] font-extrabold text-[#000000] leading-tight font-sans">
              {lang === "en" ? "Notice" : lang === "ja" ? "お知らせ" : "공지 사항"}
            </h1>
          </div>
          <div className="absolute bottom-[-2px] left-0 w-full overflow-hidden leading-[0] z-20">
            <svg className="block w-[calc(110%+1.3px)] h-[80px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C71.37,20.44,151.72,42.71,213.9,50.75,249.23,55.33,285.4,59.35,321.39,56.44Z" className="fill-white"></path>
            </svg>
          </div>
        </section>

        {/* Board */}
        <section className="max-w-[1080px] mx-auto px-4 pb-32">
          {notices.length === 0 ? (
            <div className="text-center py-20 text-gray-400 text-sm">등록된 공지사항이 없습니다.</div>
          ) : (
            <div className="border-t-[1.5px] border-black border-b border-b-gray-300">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-300 bg-[#FAFAFA] text-[#6a6a6a] text-[13px] font-medium">
                    <th className="py-3 px-2 text-center w-[8%] font-medium">번호</th>
                    <th className="py-3 px-2 text-center w-auto font-medium">제목</th>
                    <th className="py-3 px-2 text-center w-[12%] font-medium">작성자</th>
                    <th className="py-3 px-2 text-center w-[12%] font-medium">날짜</th>
                    <th className="py-3 px-2 text-center w-[8%] font-medium">조회</th>
                  </tr>
                </thead>
                <tbody>
                  {notices.map((n, idx) => (
                    <tr key={n.id} className={`border-b border-gray-200 hover:bg-[#FDFDFD] transition-colors text-[13px] text-[#6a6a6a] h-[38px] ${n.isPinned ? "bg-[#FAFAFA]" : ""}`}>
                      <td className={`py-2 px-2 text-center ${n.isPinned ? "font-bold text-[#333]" : ""}`}>{n.isPinned ? "공지" : notices.filter(x => !x.isPinned).length - notices.filter(x => !x.isPinned).indexOf(n)}</td>
                      <td className="py-2 px-6">
                        <Link href={`/${lang}/company/news/${n.id}`} className={`hover:underline block truncate max-w-[500px] ${n.isPinned ? "font-bold text-[#333]" : ""}`}>
                          {getTitle(n)}
                        </Link>
                      </td>
                      <td className="py-2 px-2 text-center">{n.author}</td>
                      <td className="py-2 px-2 text-center text-[#999]">{new Date(n.createdAt).toLocaleDateString("ko-KR")}</td>
                      <td className="py-2 px-2 text-center text-[#999]">{n.views}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
      <Footer lang={lang} dict={dict.common.footer} />
    </>
  );
}
