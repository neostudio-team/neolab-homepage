import { Metadata } from "next";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.neosmartpen.knowledgeBase.metadata;
  return { title: t.title, description: t.description };
}

export default async function KnowledgeBasePage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.neosmartpen.knowledgeBase;

  const categories = [
    { key: "gettingStarted", icon: "🚀" },
    { key: "troubleshooting", icon: "🔧" },
    { key: "compatibility", icon: "🔗" },
    { key: "faq", icon: "❓" },
  ] as const;

  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-[#1a1a2e] text-white text-center">
        <div className="max-w-[1080px] mx-auto px-4">
          <h1 className="text-[40px] font-black mb-4">{t.hero.title}</h1>
          <p className="text-lg text-gray-300">{t.hero.subtitle}</p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-[1080px] mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <div key={cat.key} className="bg-[#f5f5f5] rounded-xl p-8 text-center hover:shadow-lg transition-shadow cursor-pointer">
                <div className="text-4xl mb-4">{cat.icon}</div>
                <h3 className="font-bold text-black">{t.categories[cat.key]}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
