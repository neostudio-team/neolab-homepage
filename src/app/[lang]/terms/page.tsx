import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { adminDb } from "@/lib/firebase-admin";
import { DEFAULT_TERMS } from "@/lib/legal-defaults";

async function getContent() {
  try {
    const doc = await adminDb.collection("legal_docs").doc("terms").get();
    if (doc.exists && doc.data()?.content) {
      return doc.data()!.content as string;
    }
  } catch {}
  return DEFAULT_TERMS;
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const content = await getContent();

  return (
    <>
      <Header lang={lang as Locale} dict={dict} />
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
            <pre className="whitespace-pre-wrap font-sans text-sm text-gray-700 leading-relaxed">
              {content}
            </pre>
          </div>
        </div>
      </main>
      <Footer lang={lang as Locale} dict={dict} />
    </>
  );
}
