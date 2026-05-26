import { Geist, Geist_Mono } from 'next/font/google';
import { getLocale } from 'next-intl/server';
import './globals.css';

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans', display: 'swap' });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono', display: 'swap' });

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Filipe Deus',
  jobTitle: 'Senior Software Engineer',
  url: 'https://filipedeus.dev',
  email: 'mailto:filipedeus2015@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Brasília',
    addressRegion: 'DF',
    addressCountry: 'BR',
  },
  worksFor: { '@type': 'Organization', name: 'Cielo' },
  knowsLanguage: ['pt-BR', 'en'],
  sameAs: ['https://www.linkedin.com/in/filipededeus', 'https://filipedeus.dev'],
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light')document.documentElement.setAttribute('data-theme','light');}catch(e){}})();` }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
