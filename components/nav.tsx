import { getTranslations } from 'next-intl/server';
import ThemeToggle from '@/components/theme-toggle';
import LocaleSwitcher from '@/components/locale-switcher';
import MobileMenu from '@/components/mobile-menu';

export default async function Nav() {
  const t = await getTranslations('Nav');

  return (
    <nav className="site-nav">
      <div className="container nav-row">
        <a href="#top" className="logo">
          <span className="dot" />
          <span>
            filipe.deus
            <span style={{ color: 'var(--text-faint)' }}>.dev</span>
          </span>
        </a>
        <div className="navlinks">
          <a href="#about">{t('about')}</a>
          <a href="#experience">{t('experience')}</a>
          <a href="#skills">{t('skills')}</a>
          <a href="#cases">{t('cases')}</a>
          <a href="#contact" className="nav-cta" style={{ whiteSpace: 'nowrap' }}>
            {t('contact')}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0 }}>
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        <div className="nav-end">
          <LocaleSwitcher />
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}
