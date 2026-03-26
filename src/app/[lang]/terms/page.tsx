import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { adminDb } from "@/lib/firebase-admin";
import { DEFAULT_TERMS } from "@/lib/legal-defaults";
import LegalPageClient from "@/components/LegalPageClient";

async function getData() {
  try {
    const snapshot = await adminDb
      .collection("legal_versions")
      .where("type", "==", "terms")
      .get();

    if (snapshot.empty) {
      return { activeContent: DEFAULT_TERMS, activeVersionId: null, versions: [] };
    }

    type DocData = { id: string; versionNumber: number; note: string; createdAt: { toDate: () => Date } | null; isActive: boolean; content: string; createdBy: string; };
    const docs = snapshot.docs
      .map(d => ({ id: d.id, ...d.data() } as DocData))
      .sort((a, b) => (b.versionNumber ?? 0) - (a.versionNumber ?? 0));

    const active = docs.find(d => d.isActive) ?? docs[0];
    return {
      activeContent: active.content,
      activeVersionId: active.id,
      versions: docs.map(d => ({
        id: d.id,
        versionNumber: d.versionNumber,
        note: d.note ?? "",
        createdAt: d.createdAt?.toDate().toISOString() ?? null,
        isActive: d.isActive ?? false,
      })),
    };
  } catch {
    return { activeContent: DEFAULT_TERMS, activeVersionId: null, versions: [] };
  }
}

export default async function TermsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const { activeContent, activeVersionId, versions } = await getData();

  return (
    <>
      <Header lang={lang as Locale} dict={dict.common.header} />
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
            <LegalPageClient
              type="terms"
              initialContent={activeContent}
              activeVersionId={activeVersionId}
              versions={versions}
            />
          </div>
        </div>
      </main>
      <Footer lang={lang as Locale} dict={dict.common.footer} />
    </>
  );
}
