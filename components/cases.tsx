import { getTranslations } from 'next-intl/server';
import PixPulse from '@/components/pix-pulse';

export default async function Cases() {
  const t = await getTranslations('Cases');

  return (
    <section id="cases">
      <div className="container">
        <div className="reveal">
          <div className="eyebrow">{t('eyebrow')}</div>
          <h2 className="section-title">{t('title')}</h2>
          <p className="section-lede">{t('lede')}</p>
        </div>

        <div className="cases-grid">

          <div className="case large reveal">
            <div className="glow" aria-hidden="true" />
            <div>
              <div className="kicker">{t('pix1Kicker')}</div>
              <h3>{t('pix1Title')}</h3>
              <p>{t('pix1Desc')}</p>
            </div>
            <div>
              <PixPulse />
              <div className="stack">
                {['Java', 'Spring WebFlux', 'Kafka', 'MongoDB', 'AWS'].map(s => <span key={s}>{s}</span>)}
              </div>
            </div>
          </div>

          <div className="case small reveal">
            <div className="glow" aria-hidden="true" />
            <div>
              <div className="kicker">{t('sicoobKicker')}</div>
              <h3>{t('sicoobTitle')}</h3>
              <p>{t('sicoobDesc')}</p>
            </div>
            <div className="stack">
              {['Angular', 'EJB', 'DB2'].map(s => <span key={s}>{s}</span>)}
            </div>
          </div>

          <div className="case small reveal">
            <div className="glow" aria-hidden="true" />
            <div>
              <div className="kicker">{t('pessoasKicker')}</div>
              <h3>{t('pessoasTitle')}</h3>
              <p>{t('pessoasDesc')}</p>
            </div>
            <div className="stack">
              {['Quarkus', 'Oracle', 'Angular 12'].map(s => <span key={s}>{s}</span>)}
            </div>
          </div>

          <div className="case small reveal">
            <div className="glow" aria-hidden="true" />
            <div>
              <div className="kicker">{t('pixAutoKicker')}</div>
              <h3>{t('pixAutoTitle')}</h3>
              <p>{t('pixAutoDesc')}</p>
            </div>
            <div className="stack">
              {['Java', 'Spring Boot', 'Kafka'].map(s => <span key={s}>{s}</span>)}
            </div>
          </div>

          <div className="case small reveal">
            <div className="glow" aria-hidden="true" />
            <div>
              <div className="kicker">{t('pixNfcKicker')}</div>
              <h3>{t('pixNfcTitle')}</h3>
              <p>{t('pixNfcDesc')}</p>
            </div>
            <div className="stack">
              {['Java', 'AWS', 'Kafka'].map(s => <span key={s}>{s}</span>)}
            </div>
          </div>

          <div className="case small reveal">
            <div className="glow" aria-hidden="true" />
            <div>
              <div className="kicker">{t('qaKicker')}</div>
              <h3>{t('qaTitle')}</h3>
              <p>{t('qaDesc')}</p>
            </div>
            <div className="stack">
              {['Selenium', 'Appium', 'Cucumber'].map(s => <span key={s}>{s}</span>)}
            </div>
          </div>

          <div className="case small reveal">
            <div className="glow" aria-hidden="true" />
            <div>
              <div className="kicker">{t('financeKicker')}</div>
              <h3>{t('financeTitle')}</h3>
              <p>{t('financeDesc')}</p>
            </div>
            <div className="stack">
              {['Claude API', 'PostgreSQL'].map(s => <span key={s}>{s}</span>)}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
