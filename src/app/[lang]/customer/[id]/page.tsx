import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { adminDb } from "@/lib/firebase-admin";
import { FieldValue } from "firebase-admin/firestore";
import { notFound } from "next/navigation";

export default async function CustomerNoticeDetailPage({
  params,
}: {
  params: Promise<{ lang: Locale; id: string }>;
}) {
  const { lang, id } = await params;
  const dict = await getDictionary(lang);

  let notice: Record<string, string | boolean | number> | null = null;
  try {
    const doc = await adminDb.collection("customer_notices").doc(id).get();
    if (!doc.exists) notFound();
    await adminDb.collection("customer_notices").doc(id).update({ views: FieldValue.increment(1) });
    notice = { id: doc.id, ...doc.data(), createdAt: doc.data()?.createdAt?.toDate().toISOString() } as Record<string, string | boolean | number>;
  } catch {
    notFound();
  }

  const title = lang === "en" ? (notice.titleEn || notice.titleKo) : lang === "ja" ? (notice.titleJa || notice.titleKo) : notice.titleKo;
  const content = lang === "en" ? (notice.contentEn || notice.contentKo) : lang === "ja" ? (notice.contentJa || notice.contentKo) : notice.contentKo;

  return (
    <>
      <Header lang={lang} dict={dict.common.header} />
      <div className="bg-white min-h-screen pt-[100px]">
        <div className="max-w-[780px] mx-auto px-4 py-16">
          <Link href={`/${lang}/customer`} className="text-sm text-gray-400 hover:text-gray-600 mb-8 inline-block">
            ← {lang === "en" ? "Back to Customer Support" : lang === "ja" ? "カスタマーサポートへ" : "목록으로"}
          </Link>
          {notice.isPinned && (
            <span className="inline-block bg-[#f0a500] text-white text-xs font-bold px-2 py-0.5 rounded-sm mb-3">공지</span>
          )}
          <h1 className="text-[28px] font-bold text-gray-900 mb-4 leading-snug">{title as string}</h1>
          <div className="flex items-center gap-4 text-sm text-gray-400 mb-10 pb-6 border-b border-gray-100">
            <span>{notice.author as string}</span>
            <span>{new Date(notice.createdAt as string).toLocaleDateString("ko-KR")}</span>
            <span>{lang === "en" ? "Views" : lang === "ja" ? "閲覧数" : "조회"} {notice.views as number}</span>
          </div>
          <div className="text-[15px] text-gray-700 leading-[1.8] whitespace-pre-wrap">{content as string}</div>
          <div className="mt-16 pt-8 border-t border-gray-100">
            <Link href={`/${lang}/customer`} className="inline-block border border-gray-300 text-gray-600 text-sm px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
              {lang === "en" ? "Back to list" : lang === "ja" ? "一覧へ戻る" : "목록으로"}
            </Link>
          </div>
        </div>
      </div>
      <Footer lang={lang} dict={dict.common.footer} />
    </>
  );
}
