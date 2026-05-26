import { getTranslations } from 'next-intl/server';

const MARQUEE_ITEMS = [
  'Java', 'Spring Boot', 'Spring WebFlux', 'Kafka', 'MongoDB', 'AWS',
  'Terraform', 'Docker', 'Kubernetes', 'Angular', 'TypeScript', 'Quarkus',
  'Reactive Programming', 'Pix', 'Open Banking', 'Microservices', 'Selenium', 'Cucumber',
  'GitHub Copilot', 'Claude Code', 'LLMs',
];

const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

export default async function Skills() {
  const t = await getTranslations('Skills');

  const GROUPS = [
    { n: '01', label: t('g01'),  items: ['Java 17+', 'Spring Boot / WebFlux', 'Quarkus', 'EJB · JSF (legacy)', 'Reactive Programming', 'Spring Batch'] },
    { n: '02', label: t('g02'),  items: ['Apache Kafka', 'MongoDB', 'PostgreSQL', 'Oracle / DB2', 'Redis', t('g02i5')] },
    { n: '03', label: t('g03'),  items: ['AWS (ECS, Lambda, SQS)', 'Docker · Kubernetes', 'Terraform · IaC', 'GitHub Actions', 'Observability stack'] },
    { n: '04', label: t('g04'),  items: ['Angular 12+', 'TypeScript', 'React / Next.js', 'Tailwind CSS', 'RxJS'] },
    { n: '05', label: t('g05'),  items: ['Selenium · Appium', 'Cucumber (BDD)', 'JUnit · Mockito', t('g05i4'), t('g05i5')] },
    { n: '06', label: t('g06'),  items: ['Pix (BACEN)', t('g06i2'), t('g06i3'), 'Open Banking', t('g06i5')] },
    { n: '07', label: t('g07'),  items: ['GitHub Copilot', 'Claude Code', t('g07i3'), t('g07i4')] },
  ];

  return (
    <section id="skills">
      <div className="container">
        <div className="reveal">
          <div className="eyebrow">{t('eyebrow')}</div>
          <h2 className="section-title">{t('title')}</h2>
          <p className="section-lede">{t('lede')}</p>
        </div>
      </div>

      <div className="skills-strip" aria-label="Skills" role="marquee">
        <div className="skills-track" aria-hidden="true">
          {doubled.map((item, i) => (
            <span key={i} className="skill-pill">
              <span className="accent-dot" />
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="skills-grid">
          {GROUPS.map((g) => (
            <div key={g.n} className="skill-card reveal">
              <h3>
                <span className="num">{g.n}</span> {g.label}
              </h3>
              <ul>
                {g.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
