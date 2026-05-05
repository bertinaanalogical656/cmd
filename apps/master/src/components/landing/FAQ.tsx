'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useTranslations } from 'next-intl';

const ITEMS = [
  { key: 'security', hasA2: true },
  { key: 'noVpn', hasA2: true },
  { key: 'cliSupport', hasA2: true },
  { key: 'anthropic', hasA2: true },
  { key: 'ports', hasA2: false },
  { key: 'asyncTask', hasA2: false },
  { key: 'teams', hasA2: false },
] as const;

export default function FAQ() {
  const t = useTranslations('faq');
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative w-full" style={{ background: 'var(--bg-2)' }}>
      <div className="mx-auto w-full max-w-[820px] px-6 py-20 md:py-28">
        <div className="text-center">
          <p
            className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em]"
            style={{ color: 'var(--vibrant)' }}
          >
            {t('eyebrow')}
          </p>
          <h2 className="text-[28px] font-semibold leading-[1.15] tracking-tight sm:text-[36px] md:text-[44px]">
            {t('title')}
          </h2>
        </div>

        <div className="mt-12 space-y-2.5 md:mt-16">
          {ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.key}
                className="rounded-[var(--radius)] border transition-colors"
                style={{
                  background: 'var(--surface)',
                  borderColor: isOpen ? 'var(--border-strong)' : 'var(--border)',
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                >
                  <span className="text-[14.5px] font-semibold tracking-tight sm:text-[15.5px]">
                    {t(`items.${item.key}.q`)}
                  </span>
                  <span
                    className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full"
                    style={{
                      background: isOpen ? 'var(--vibrant-tint)' : 'var(--surface-2)',
                      color: isOpen ? 'var(--vibrant)' : 'var(--muted)',
                    }}
                  >
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>
                {isOpen && (
                  <div
                    className="space-y-2.5 px-5 pb-5 text-[13.5px] leading-[1.6] animate-fadeUp sm:px-6 sm:pb-6"
                    style={{ color: 'var(--fg-2)' }}
                  >
                    <p>{t(`items.${item.key}.a1`)}</p>
                    {item.hasA2 && <p>{t(`items.${item.key}.a2`)}</p>}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
