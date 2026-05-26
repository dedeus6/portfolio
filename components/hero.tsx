import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

export default async function Hero() {
  const t = await getTranslations('Hero');

  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero-grid">
          <div className="reveal">
            <div className="hero-status">
              <span className="live" aria-hidden="true" />
              {t('status')}
            </div>

            <h1>
              {t('h1line1')}{' '}
              <span style={{ color: 'var(--text-dim)' }}>{t('h1line2')}</span>
              <br />
              <span className="accent">{t('h1accent')}</span>
            </h1>

            <div className="role">
              {t('role')}
              <span className="sep">/</span>
              {t('stack')}
            </div>

            <p className="lede">
              {t.rich('lede', {
                strong: (chunks) => <strong>{chunks}</strong>,
                em: (chunks) => <em>{chunks}</em>,
                muted: (chunks) => <span className="muted">{chunks}</span>,
              })}
            </p>

            <div className="cta-row">
              <a href="#contact" className="btn btn-primary">
                {t('ctaPrimary')}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
              <a href="/filipe-deus-cv.pdf" className="btn btn-ghost" download>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                {t('ctaSecondary')}
              </a>
            </div>
          </div>

          <div className="reveal">
            <div className="portrait-card">
              <Image
                src="/images/profile_photo.jpeg"
                alt="Filipe Deus — Senior Software Engineer"
                fill
                sizes="(max-width: 880px) 100vw, 40vw"
                className="portrait-img"
                priority
              />
              <div className="overlay">
                <div className="chip">
                  <span className="accent-dot" aria-hidden="true" />
                  {t('chipRole')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
