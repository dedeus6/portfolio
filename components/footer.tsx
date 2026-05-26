import { getTranslations } from 'next-intl/server';

export default async function Footer() {
  const t = await getTranslations('Footer');

  return (
    <footer className="site-footer">
      <div className="container footer-row">
        <span className="footer-copy">{t('copy')}</span>
        <span className="footer-built">
          {t('built')}{' '}
          <span className="accent">Next.js 16 · Tailwind v4 · TypeScript</span>
        </span>
      </div>
    </footer>
  );
}
