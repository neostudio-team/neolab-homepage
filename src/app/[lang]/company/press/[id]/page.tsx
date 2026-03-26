import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { adminDb } from "@/lib/firebase-admin";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function PressDetailPage({
  params,
}: {
  params: Promise<{ lang: Locale; id: string }>;
}) {
  const { lang, id } = await params;
  const dict = await getDictionary(lang);

  let press: Record<string, string> | null = null;
  try {
    const doc = await adminDb.collection("press").doc(id).get();
    if (!doc.exists) notFound();
    press = {
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data()?.createdAt?.toDate().toISOString(),
    } as Record<string, string>;
  } catch {
    notFound();
  }

  const title =
    lang === "en" ? press.titleEn || press.titleKo :
    lang === "ja" ? press.titleJa || press.titleKo :
    press.titleKo;

  // contentKo 필드에 HTML이 저장됨 (Quill 에디터)
  const content =
    lang === "en" ? press.contentEn || press.contentKo :
    lang === "ja" ? press.contentJa || press.contentKo :
    press.contentKo;

  return (
    <>
      <Header lang={lang} dict={dict.common.header} />
      <div className="bg-white min-h-screen pt-[100px]">
        <div className="max-w-[780px] mx-auto px-4 py-16">
          <Link href={`/${lang}/company/press`} className="text-sm text-gray-400 hover:text-gray-600 mb-8 inline-block">
            ← Newsroom
          </Link>
          <p className="text-xs text-gray-400 uppercase tracking-wider mb-3">{press.category || "press"}</p>
          <h1 className="text-[28px] font-bold text-gray-900 mb-4 leading-snug">{title}</h1>
          <div className="flex items-center gap-4 text-sm text-gray-400 mb-10 pb-6 border-b border-gray-100">
            <span>{press.author}</span>
            <span>
              {press.createdAt
                ? new Date(press.createdAt).toLocaleDateString("ko-KR", { year: "numeric", month: "long", day: "numeric" })
                : ""}
            </span>
          </div>

          {press.externalUrl && (
            <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
              <a href={press.externalUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">
                🔗 원문 기사 보기
              </a>
            </div>
          )}

          {/* 본문 */}
          {content ? (
            <div className="prose prose-gray max-w-none text-[15px] leading-[1.8] [&_p]:mb-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_li]:mb-1 [&_a]:text-blue-600 [&_a]:underline [&_img]:max-w-full [&_img]:rounded [&_h1]:text-2xl [&_h1]:font-bold [&_h2]:text-xl [&_h2]:font-bold [&_h3]:text-lg [&_h3]:font-semibold [&_strong]:font-bold [&_em]:italic [&_blockquote]:border-l-4 [&_blockquote]:border-gray-300 [&_blockquote]:pl-4 [&_blockquote]:text-gray-500" dangerouslySetInnerHTML={{ __html: content }} />
          ) : (
            <p className="text-gray-400 text-sm">본문 내용이 없습니다.</p>
          )}

          <div className="mt-16 pt-8 border-t border-gray-100">
            <Link
              href={`/${lang}/company/press`}
              className="inline-block border border-gray-300 text-gray-600 text-sm px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              {lang === "en" ? "Back to Newsroom" : lang === "ja" ? "ニュースルームへ" : "목록으로"}
            </Link>
          </div>
        </div>
      </div>
      <Footer lang={lang} dict={dict.common.footer} />
    </>
  );
}
