'use client';

import { Server, Clock, Mic, Plug2, ShieldCheck, Layers } from 'lucide-react';
import { useTranslations } from 'next-intl';

const FEATURES = [
  { key: 'oneCli', icon: Server },
  { key: 'async', icon: Clock },
  { key: 'voice', icon: Mic },
  { key: 'multiVendor', icon: Plug2 },
  { key: 'yourKeys', icon: ShieldCheck },
  { key: 'multiProject', icon: Layers },
] as const;

export default function Features() {
  const t = useTranslations('features');
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

        <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:mt-16">
          {FEATURES.map(({ key, icon: Icon }) => (
            <div
              key={key}
              className="rounded-[var(--radius)] border p-5 transition-colors sm:p-6"
              style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
            >
              <div
                className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg border"
                style={{
                  background: 'var(--surface-2)',
                  borderColor: 'var(--border)',
                  color: 'var(--fg)',
                }}
              >
                <Icon size={17} strokeWidth={2.2} />
              </div>
              <h3 className="text-[15.5px] font-semibold tracking-tight">
                {t(`items.${key}.title`)}
              </h3>
              <p className="mt-2 text-[13px] leading-[1.55]" style={{ color: 'var(--fg-2)' }}>
                {t(`items.${key}.body`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
