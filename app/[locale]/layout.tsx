import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';

const BASE_URL = 'https://filipedeus.dev';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Meta' });
  const isEn = locale === 'en';
  const canonicalUrl = isEn ? `${BASE_URL}/en` : BASE_URL;

  return {
    metadataBase: new URL(BASE_URL),
    title: {
      default: t('title'),
      template: `%s · Filipe Deus`,
    },
    description: t('description'),
    keywords: ['Java', 'Spring Boot', 'Kafka', 'AWS', 'Pix', 'fintech', 'microservices', 'Senior Software Engineer'],
    authors: [{ name: 'Filipe Deus', url: BASE_URL }],
    creator: 'Filipe Deus',
    openGraph: {
      type: 'website',
      locale: isEn ? 'en_US' : 'pt_BR',
      url: canonicalUrl,
      siteName: 'Filipe Deus',
      title: t('title'),
      description: t('ogDescription'),
      images: [{ url: '/og.png', width: 1200, height: 630, alt: t('title') }],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: ['/og.png'],
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'pt-BR': BASE_URL,
        'en': `${BASE_URL}/en`,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
