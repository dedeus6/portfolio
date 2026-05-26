import { getTranslations } from 'next-intl/server';

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

export default async function Contact() {
  const t = await getTranslations('Contact');

  const LINKS = [
    { k: t('labelEmail'),    v: 'filipedeus2015@gmail.com',     href: 'mailto:filipedeus2015@gmail.com' },
    { k: t('labelLinkedin'), v: 'linkedin.com/in/filipededeus', href: 'https://www.linkedin.com/in/filipededeus' },
    { k: t('labelLocal'),    v: t('valLocal'),                  href: undefined },
  ];

  return (
    <section id="contact">
      <div className="container">
        <div className="contact-card reveal">
          <h2>
            {t.rich('title', {
              accent: (chunks) => <span className="accent">{chunks}</span>,
            })}
          </h2>

          <div className="contact-links">
            {LINKS.map((link) =>
              link.href ? (
                <a
                  key={link.k}
                  className="contact-link"
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <span className="k">{link.k}</span>
                  <span className="v">{link.v}</span>
                  <span className="arrow"><ArrowIcon /></span>
                </a>
              ) : (
                <div key={link.k} className="contact-link" style={{ cursor: 'default' }}>
                  <span className="k">{link.k}</span>
                  <span className="v">{link.v}</span>
                  <span className="arrow"><ArrowIcon /></span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
