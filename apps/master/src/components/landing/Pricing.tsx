'use client';

import { Check, Github, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Pricing() {
  const t = useTranslations('pricing');
  return (
    <section className="relative w-full" style={{ background: 'var(--bg)' }}>
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
          <p className="mx-auto mt-4 max-w-[560px] text-[14.5px] leading-[1.55]" style={{ color: 'var(--fg-2)' }}>
            {t('lede')}
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-[920px] gap-5 md:grid-cols-2 md:mt-16">
          <div
            className="flex flex-col rounded-[var(--radius-lg)] border p-6 sm:p-7"
            style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-[18px] font-semibold tracking-tight">{t('selfHost.name')}</h3>
              <span
                className="rounded-full border px-2 py-0.5 font-mono text-[10.5px] uppercase tracking-wider"
                style={{ borderColor: 'var(--border)', color: 'var(--muted)' }}
              >
                {t('selfHost.tag')}
              </span>
            </div>
            <div className="mt-3 flex items-baseline gap-1.5">
              <span className="text-[40px] font-semibold tracking-tight">{t('selfHost.price')}</span>
              <span className="text-[13px]" style={{ color: 'var(--muted)' }}>
                {t('selfHost.period')}
              </span>
            </div>
            <p className="mt-2 text-[13px] leading-[1.5]" style={{ color: 'var(--fg-2)' }}>
              {t('selfHost.blurb')}
            </p>

            <ul className="mt-6 space-y-2.5 text-[13.5px]">
              <Bullet>{t('selfHost.bullet1')}</Bullet>
              <Bullet>{t('selfHost.bullet2')}</Bullet>
              <Bullet>{t('selfHost.bullet3')}</Bullet>
              <Bullet>{t('selfHost.bullet4')}</Bullet>
              <Bullet>{t('selfHost.bullet5')}</Bullet>
            </ul>

            <a
              href="https://github.com/autmzr/cmd"
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-full border px-5 py-2.5 text-[13.5px] font-semibold transition-colors"
              style={{
                background: 'var(--surface-2)',
                borderColor: 'var(--border)',
                color: 'var(--fg)',
              }}
            >
              <Github size={15} />
              {t('selfHost.cta')}
            </a>
          </div>

          <div
            className="relative flex flex-col rounded-[var(--radius-lg)] border-2 p-6 sm:p-7"
            style={{
              background: 'var(--surface)',
              borderColor: 'var(--vibrant)',
              boxShadow: 'var(--shadow-lg)',
            }}
          >
            <div
              className="absolute -top-3 left-6 rounded-full px-2.5 py-0.5 font-mono text-[10.5px] font-semibold uppercase tracking-wider"
              style={{ background: 'var(--vibrant)', color: 'var(--vibrant-fg)' }}
            >
              {t('cloud.badge')}
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-[18px] font-semibold tracking-tight">{t('cloud.name')}</h3>
              <span
                className="rounded-full border px-2 py-0.5 font-mono text-[10.5px] uppercase tracking-wider"
                style={{ borderColor: 'var(--vibrant)', color: 'var(--vibrant)' }}
              >
                {t('cloud.tag')}
              </span>
            </div>
            <div className="mt-3 flex items-baseline gap-1.5">
              <span className="text-[40px] font-semibold tracking-tight">{t('cloud.price')}</span>
              <span className="text-[13px]" style={{ color: 'var(--muted)' }}>
                {t('cloud.period')}
              </span>
            </div>
            <p className="mt-2 text-[13px] leading-[1.5]" style={{ color: 'var(--fg-2)' }}>
              {t('cloud.blurb')}
            </p>

            <ul className="mt-6 space-y-2.5 text-[13.5px]">
              <Bullet>{t('cloud.bullet1')}</Bullet>
              <Bullet>{t('cloud.bullet2')}</Bullet>
              <Bullet>{t('cloud.bullet3')}</Bullet>
              <Bullet>{t('cloud.bullet4')}</Bullet>
              <Bullet>{t('cloud.bullet5')}</Bullet>
            </ul>

            <a
              href="/login"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-[13.5px] font-semibold transition-colors"
              style={{ background: 'var(--vibrant)', color: 'var(--vibrant-fg)' }}
            >
              {t('cloud.cta')}
              <ArrowRight size={15} />
            </a>
          </div>
        </div>

        <p
          className="mx-auto mt-8 max-w-[560px] text-center font-mono text-[11.5px]"
          style={{ color: 'var(--muted)' }}
        >
          {t('footer')}
        </p>
      </div>
    </section>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <Check size={15} strokeWidth={2.4} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--vibrant)' }} />
      <span style={{ color: 'var(--fg)' }}>{children}</span>
    </li>
  );
}
