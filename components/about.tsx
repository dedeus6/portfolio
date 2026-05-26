import { getTranslations } from 'next-intl/server';

export default async function About() {
  const t = await getTranslations('About');

  return (
    <section id="about">
      <div className="container">
        <div className="reveal">
          <div className="eyebrow">{t('eyebrow')}</div>
          <h2 className="section-title">{t('title')}</h2>
          <p className="section-lede">{t('lede')}</p>
        </div>

        <div className="about-grid">
          <div className="about-meta reveal">
            <div className="item">
              <div className="k">{t('metaBase')}</div>
              <div className="v">{t('metaBaseVal')}</div>
            </div>
            <div className="item">
              <div className="k">{t('metaRole')}</div>
              <div className="v">
                {t('metaRoleVal')} <span className="accent">{t('metaAt')}</span>
              </div>
            </div>
            <div className="item">
              <div className="k">{t('metaLang')}</div>
              <div className="v">{t('metaLangVal')}</div>
            </div>
            <div className="item">
              <div className="k">{t('metaFocus')}</div>
              <div className="v">{t('metaFocusVal')}</div>
            </div>
          </div>

          <div className="about-body reveal">
            <p>
              {t.rich('p1', { strong: (chunks) => <strong>{chunks}</strong> })}
            </p>
            <p>
              {t.rich('p2', { strong: (chunks) => <strong>{chunks}</strong> })}
            </p>
            <p className="muted">
              {t.rich('p3', { strong: (chunks) => <strong>{chunks}</strong> })}
            </p>
            <p>
              {t.rich('p4', { strong: (chunks) => <strong>{chunks}</strong> })}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
