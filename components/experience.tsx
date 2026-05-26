import { getTranslations } from 'next-intl/server';

function Tag({ label }: { label: string }) {
  return <span className="tl-tag">{label}</span>;
}

const rich = (chunks: React.ReactNode) => <strong>{chunks}</strong>;

export default async function Experience() {
  const t = await getTranslations('Experience');

  return (
    <section id="experience">
      <div className="container">
        <div className="reveal">
          <div className="eyebrow">{t('eyebrow')}</div>
          <h2 className="section-title">{t('title')}</h2>
          <p className="section-lede">{t('lede')}</p>
        </div>

        <div className="timeline">

          <div className="tl-entry current reveal">
            <div className="year">2025 →</div>
            <div className="marker" aria-hidden="true" />
            <div className="tl-card">
              <div className="tl-head">
                <div className="co">Cielo <span className="role-label">· {t('cielo1Role')}</span></div>
                <div className="dur">{t('cielo1Dur')}</div>
              </div>
              <div className="tl-summary">
                {t.rich('cielo1Summary', { strong: rich })}
              </div>
              <div className="tl-tags">
                {['Java', 'Spring Boot', 'AWS', 'Kafka', 'Reactive', 'Terraform', 'IaC'].map(tag => <Tag key={tag} label={tag} />)}
              </div>
            </div>
          </div>

          <div className="tl-entry reveal">
            <div className="year">2023</div>
            <div className="marker" aria-hidden="true" />
            <div className="tl-card">
              <div className="tl-head">
                <div className="co">Cielo <span className="role-label">· {t('cielo2Role')}</span></div>
                <div className="dur">{t('cielo2Dur')}</div>
              </div>
              <div className="tl-summary">
                {t.rich('cielo2Summary', { strong: rich })}
              </div>
              <div className="tl-tags">
                {['Java', 'Spring Boot', 'AWS', 'Kafka', 'MongoDB', 'Docker', 'IaC'].map(tag => <Tag key={tag} label={tag} />)}
              </div>
            </div>
          </div>

          <div className="tl-entry reveal">
            <div className="year">2022</div>
            <div className="marker" aria-hidden="true" />
            <div className="tl-card">
              <div className="tl-head">
                <div className="co">act digital <span className="role-label">· {t('act1Role')}</span></div>
                <div className="dur">{t('act1Dur')}</div>
              </div>
              <div className="tl-summary">
                {t.rich('act1Summary', { strong: rich })}
              </div>
              <div className="tl-tags">
                {['Java', 'Spring Boot', 'Angular', 'Kafka', 'AWS'].map(tag => <Tag key={tag} label={tag} />)}
              </div>
            </div>
          </div>

          <div className="tl-entry reveal">
            <div className="year">2021</div>
            <div className="marker" aria-hidden="true" />
            <div className="tl-card">
              <div className="tl-head">
                <div className="co">act digital <span className="role-label">· {t('act2Role')}</span></div>
                <div className="dur">{t('act2Dur')}</div>
              </div>
              <div className="tl-summary">
                {t.rich('act2Summary', { strong: rich })}
              </div>
              <div className="tl-tags">
                {['Java', 'EJB', 'JSF', 'Angular', 'DB2'].map(tag => <Tag key={tag} label={tag} />)}
              </div>
            </div>
          </div>

          <div className="tl-entry reveal">
            <div className="year">2021</div>
            <div className="marker" aria-hidden="true" />
            <div className="tl-card">
              <div className="tl-head">
                <div className="co">Stefanini Brasil <span className="role-label">· {t('stefan1Role')}</span></div>
                <div className="dur">{t('stefan1Dur')}</div>
              </div>
              <div className="tl-summary">
                {t.rich('stefan1Summary', { strong: rich })}
              </div>
              <div className="tl-tags">
                {['Java', 'Quarkus', 'Microservices', 'Oracle', 'Angular 12'].map(tag => <Tag key={tag} label={tag} />)}
              </div>
            </div>
          </div>

          <div className="tl-entry reveal">
            <div className="year">2020</div>
            <div className="marker" aria-hidden="true" />
            <div className="tl-card">
              <div className="tl-head">
                <div className="co">Stefanini Brasil <span className="role-label">· {t('stefan2Role')}</span></div>
                <div className="dur">{t('stefan2Dur')}</div>
              </div>
              <div className="tl-summary">
                {t.rich('stefan2Summary', { strong: rich })}
              </div>
              <div className="tl-tags">
                {['Selenium', 'Appium', 'Cucumber', 'Java', 'Banco do Brasil'].map(tag => <Tag key={tag} label={tag} />)}
              </div>
            </div>
          </div>

          <div className="tl-entry reveal">
            <div className="year">2020</div>
            <div className="marker" aria-hidden="true" />
            <div className="tl-card">
              <div className="tl-head">
                <div className="co">Atacadista Super Adega <span className="role-label">· {t('superRole')}</span></div>
                <div className="dur">{t('superDur')}</div>
              </div>
              <div className="tl-summary">
                {t.rich('superSummary', { strong: rich })}
              </div>
              <div className="tl-tags">
                {['Python', 'React Native', 'Delphi', 'Oracle'].map(tag => <Tag key={tag} label={tag} />)}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
