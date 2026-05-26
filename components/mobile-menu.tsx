'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

export default function MobileMenu() {
  const t = useTranslations('Nav');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <button
        className={`hamburger${open ? ' open' : ''}`}
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={open}
        aria-controls="mobile-nav"
      >
        <span /><span /><span />
      </button>

      {open && (
        <div id="mobile-nav" className="mobile-nav-drawer" onClick={close}>
          <nav onClick={(e) => e.stopPropagation()}>
            <a href="#about"      onClick={close}>{t('about')}</a>
            <a href="#experience" onClick={close}>{t('experience')}</a>
            <a href="#skills"     onClick={close}>{t('skills')}</a>
            <a href="#cases"      onClick={close}>{t('cases')}</a>
            <a href="#contact"    onClick={close} className="mobile-nav-cta">
              {t('contact')}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
