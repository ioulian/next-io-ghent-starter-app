import "../../components/styles/variables.linaria.global";
import "../../components/styles/styles.linaria.global";

import { Source_Sans_3 } from "next/font/google";
import { notFound } from "next/navigation";
import { getTranslator } from "next-intl/server";

import { GenerateMetadataWithLocaleProps, LayoutPropsWithLocale } from "@/@types/pages";

import { locales } from "../../../i18n.config";

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export async function generateMetadata({params: {locale}}: GenerateMetadataWithLocaleProps) {
  const t = await getTranslator(locale, 'page');

  return {
    title: t('home.metadata.title'),
    description: t('home.metadata.description')
  };
}

const sourceSansPro = Source_Sans_3({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  // Must be the same as in theme
  // We can't use function here to return the name...
  variable: "--theme-fonts-familyHeadings",
});

export default function RootLayout({
  children,
  params: { locale },
}: LayoutPropsWithLocale) {
  if (!locales.includes(locale)) {
    notFound();
  }

  return (
    <html lang={locale} className={sourceSansPro.variable}>
      <body>{children}</body>
    </html>
  );
}
