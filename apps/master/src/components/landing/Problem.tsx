'use client';

import { Lightbulb, AlarmClock, CreditCard, Bot } from 'lucide-react';
import { useTranslations } from 'next-intl';

const CARDS = [
  { key: 'transit', icon: Lightbulb },
  { key: 'prod2am', icon: AlarmClock },
  { key: 'sub200', icon: CreditCard },
  { key: 'botsFail', icon: Bot },
] as const;

export default function Problem() {
  const t = useTranslations('problem');
  return (
    <section className="relative w-full" style={{ background: 'var(--bg-2)' }}>
      <div className="mx-auto w-full max-w-[1100px] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-[700px] text-center">
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

        <div className="mt-12 grid gap-4 sm:grid-cols-2 md:mt-16">
          {CARDS.map(({ key, icon: Icon }) => (
            <div
              key={key}
              className="rounded-[var(--radius)] border p-5 transition-colors sm:p-6"
              style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
            >
              <div
                className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg"
                style={{ background: 'var(--vibrant-tint)', color: 'var(--vibrant)' }}
              >
                <Icon size={18} strokeWidth={2.2} />
              </div>
              <h3 className="text-[16px] font-semibold tracking-tight sm:text-[17px]">
                {t(`cards.${key}.title`)}
              </h3>
              <p className="mt-2 text-[13.5px] leading-[1.55]" style={{ color: 'var(--fg-2)' }}>
                {t(`cards.${key}.body`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
