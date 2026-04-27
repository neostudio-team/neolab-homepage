import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import NeoStudioPage from "@/features/neostudio/NeoStudioPage";

export { generateMetadata } from "@/features/neostudio/NeoStudioPage";

export default async function AppsNeoStudioRoute({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
      <Header lang={lang} dict={dict.common.header} />
      <NeoStudioPage params={params} />
      <Footer lang={lang} dict={dict.common.footer} />
    </>
  );
}
