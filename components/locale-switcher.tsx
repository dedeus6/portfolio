'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { useTransition, useState, useRef, useEffect } from 'react';

const locales = [
  { code: 'pt-BR', label: 'Português', flag: <FlagBR /> },
  { code: 'en',    label: 'English',   flag: <FlagUS /> },
] as const;

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function selectLocale(next: string) {
    setOpen(false);
    if (next === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  }

  const current = locales.find((l) => l.code === locale) ?? locales[0];

  return (
    <div ref={ref} className="locale-menu">
      <button
        onClick={() => setOpen((v) => !v)}
        disabled={isPending}
        className={`locale-toggle${open ? ' active' : ''}`}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Selecionar idioma"
      >
        <span className="locale-flag">{current.flag}</span>
        <svg
          className={`locale-chevron${open ? ' open' : ''}`}
          width="10" height="10" viewBox="0 0 10 10"
          fill="none" stroke="currentColor" strokeWidth="1.8"
          strokeLinecap="round" strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M2 3.5l3 3 3-3" />
        </svg>
      </button>

      {open && (
        <ul className="locale-dropdown" role="listbox" aria-label="Idiomas disponíveis">
          {locales.map((l) => (
            <li
              key={l.code}
              role="option"
              aria-selected={l.code === locale}
              className={`locale-option${l.code === locale ? ' active' : ''}`}
              onClick={() => selectLocale(l.code)}
            >
              <span className="locale-flag">{l.flag}</span>
              <span className="locale-label">{l.label}</span>
              {l.code === locale && (
                <svg className="locale-check" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M2 6l3 3 5-5" />
                </svg>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function FlagBR() {
  return (
    <svg width="22" height="15" viewBox="0 0 22 15" aria-label="Português (Brasil)">
      <rect width="22" height="15" fill="#009c3b" rx="2" />
      <polygon points="11,1.5 20.5,7.5 11,13.5 1.5,7.5" fill="#FFDF00" />
      <circle cx="11" cy="7.5" r="3.8" fill="#002776" />
      <path d="M7.4 7.1 Q11 5.5 14.6 7.1" stroke="white" strokeWidth="0.7" fill="none" />
    </svg>
  );
}

function FlagUS() {
  return (
    <svg width="22" height="15" viewBox="0 0 22 15" aria-label="English">
      <rect width="22" height="15" fill="#B22234" rx="2" />
      {[1, 3, 5, 7, 9, 11].map((y) => (
        <rect key={y} x="0" y={y} width="22" height="1.15" fill="white" />
      ))}
      <rect width="9" height="8" fill="#3C3B6E" rx="0" />
      {[1.2, 3.6, 6].map((y) =>
        [1.2, 3, 4.8, 6.6, 8.4].map((x) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="0.55" fill="white" />
        ))
      )}
    </svg>
  );
}
