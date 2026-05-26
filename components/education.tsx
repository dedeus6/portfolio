import { getTranslations } from 'next-intl/server';

export default async function Education() {
  const t = await getTranslations('Education');

  const ITEMS = [
    { deg: t('edu0deg'), school: t('edu0school'), when: t('edu0when') },
    { deg: t('edu1deg'), school: t('edu1school'), when: t('edu1when') },
    { deg: t('edu2deg'), school: t('edu2school'), when: t('edu2when') },
    { deg: t('edu3deg'), school: t('edu3school'), when: t('edu3when') },
  ];

  return (
    <section id="education">
      <div className="container">
        <div className="reveal">
          <div className="eyebrow">{t('eyebrow')}</div>
          <h2 className="section-title">{t('title')}</h2>
          <p className="section-lede">{t('lede')}</p>
        </div>

        <div className="edu-grid">
          {ITEMS.map((item) => (
            <div key={item.deg} className="edu-card reveal">
              <div className="deg">{item.deg}</div>
              <div className="school">{item.school}</div>
              <div className="when">{item.when}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
