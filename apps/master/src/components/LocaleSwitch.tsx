'use client';

/**
 * LocaleSwitch — dropdown для переключения языка.
 * Записывает cookie pc_locale и перезагружает страницу,
 * чтобы серверный resolver подтянул новые messages.
 *
 * Стиль: минималистичный, без флагов — короткие коды (en/cn/ru).
 */

import { useState, useTransition } from 'react';
import { LOCALES, LOCALE_LABELS, LOCALE_COOKIE, type Locale } from '@/i18n/locales';
import { useLocale } from 'next-intl';
import { Check } from 'lucide-react';

export default function LocaleSwitch() {
  const current = useLocale() as Locale;
  const [open, setOpen] = useState(false);
  const [, startTransition] = useTransition();

  function setLocale(locale: Locale) {
    document.cookie = `${LOCALE_COOKIE}=${locale};path=/;max-age=${60 * 60 * 24 * 365};samesite=lax`;
    setOpen(false);
    startTransition(() => {
      window.location.reload();
    });
  }

  const label = LOCALE_LABELS[current];

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          padding: '7px 10px',
          background: 'transparent',
          border: '1px solid var(--border)',
          borderRadius: 8,
          color: 'var(--fg-2)',
          fontSize: 12,
          fontFamily: 'var(--font-mono, ui-monospace)',
          textTransform: 'uppercase',
          letterSpacing: '0.04em',
          cursor: 'pointer',
          minHeight: 32,
        }}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label="Language"
      >
        {label.code}
      </button>
      {open && (
        <>
          <div
            onClick={() => setOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 40,
            }}
          />
          <div
            role="listbox"
            style={{
              position: 'absolute',
              top: 'calc(100% + 4px)',
              right: 0,
              minWidth: 110,
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 10,
              boxShadow: 'var(--shadow-lg, 0 12px 32px rgba(0,0,0,.4))',
              zIndex: 50,
              padding: 4,
              overflow: 'hidden',
            }}
          >
            {LOCALES.map((l) => {
              const lbl = LOCALE_LABELS[l];
              const active = l === current;
              return (
                <button
                  key={l}
                  type="button"
                  role="option"
                  aria-selected={active}
                  onClick={() => setLocale(l)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '8px 10px',
                    background: active ? 'rgba(255,255,255,.04)' : 'transparent',
                    border: 'none',
                    borderRadius: 6,
                    color: 'var(--fg)',
                    fontSize: 12.5,
                    fontFamily: 'var(--font-mono, ui-monospace)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <span style={{ flex: 1 }}>{lbl.code}</span>
                  {active && <Check size={12} color="var(--vibrant)" strokeWidth={2.4} />}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
