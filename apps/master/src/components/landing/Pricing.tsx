'use client';

import { Check, Github, ArrowRight, Bell, Lock } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Pricing() {
  const t = useTranslations('pricing');
  return (
    <section id="pricing" className="relative w-full" style={{ background: 'var(--bg)' }}>
      <div className="mx-auto w-full max-w-[1180px] px-6 py-20 md:py-28">
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

        <div className="mx-auto mt-12 grid max-w-[1100px] gap-5 md:mt-16 md:grid-cols-3">
          {/* Self-host */}
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
              href="https://github.com/AUTMZR/cmd"
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

          {/* Pro Cloud — featured */}
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
              {t('pro.badge')}
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-[18px] font-semibold tracking-tight">{t('pro.name')}</h3>
              <span
                className="rounded-full border px-2 py-0.5 font-mono text-[10.5px] uppercase tracking-wider"
                style={{ borderColor: 'var(--vibrant)', color: 'var(--vibrant)' }}
              >
                {t('pro.tag')}
              </span>
            </div>
            <div className="mt-3 flex items-baseline gap-1.5">
              <span className="text-[40px] font-semibold tracking-tight">{t('pro.price')}</span>
              <span className="text-[13px]" style={{ color: 'var(--muted)' }}>
                {t('pro.period')}
              </span>
            </div>
            <p className="mt-1 font-mono text-[11.5px]" style={{ color: 'var(--vibrant)' }}>
              {t('pro.priceYearly')}
            </p>
            <p className="mt-2 text-[13px] leading-[1.5]" style={{ color: 'var(--fg-2)' }}>
              {t('pro.blurb')}
            </p>

            <ul className="mt-6 space-y-2.5 text-[13.5px]">
              <Bullet>{t('pro.bullet1')}</Bullet>
              <Bullet>{t('pro.bullet2')}</Bullet>
              <Bullet>{t('pro.bullet3')}</Bullet>
              <Bullet>{t('pro.bullet4')}</Bullet>
              <Bullet>{t('pro.bullet5')}</Bullet>
            </ul>

            <a
              href="/login"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-[13.5px] font-semibold transition-colors"
              style={{ background: 'var(--vibrant)', color: 'var(--vibrant-fg)' }}
            >
              {t('pro.cta')}
              <ArrowRight size={15} />
            </a>
          </div>

          {/* Team — coming soon */}
          <div
            className="relative flex flex-col rounded-[var(--radius-lg)] border p-6 sm:p-7"
            style={{
              background: 'var(--surface)',
              borderColor: 'var(--border)',
              opacity: 0.92,
            }}
          >
            <div
              className="absolute -top-3 left-6 rounded-full border px-2.5 py-0.5 font-mono text-[10.5px] font-semibold uppercase tracking-wider"
              style={{ background: 'var(--surface-2)', borderColor: 'var(--border-strong)', color: 'var(--muted)' }}
            >
              {t('team.badge')}
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-[18px] font-semibold tracking-tight">{t('team.name')}</h3>
              <span
                className="rounded-full border px-2 py-0.5 font-mono text-[10.5px] uppercase tracking-wider"
                style={{ borderColor: 'var(--border)', color: 'var(--muted)' }}
              >
                {t('team.tag')}
              </span>
            </div>
            <div className="mt-3 flex items-baseline gap-1.5">
              <span className="text-[40px] font-semibold tracking-tight">{t('team.price')}</span>
              <span className="text-[13px]" style={{ color: 'var(--muted)' }}>
                {t('team.period')}
              </span>
            </div>
            <p className="mt-2 text-[13px] leading-[1.5]" style={{ color: 'var(--fg-2)' }}>
              {t('team.blurb')}
            </p>

            <ul className="mt-6 space-y-2.5 text-[13.5px]">
              <Bullet>{t('team.bullet1')}</Bullet>
              <Bullet>{t('team.bullet2')}</Bullet>
              <Bullet>{t('team.bullet3')}</Bullet>
              <Bullet>{t('team.bullet4')}</Bullet>
              <Bullet>{t('team.bullet5')}</Bullet>
            </ul>

            <a
              href="#team-waitlist"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-full border px-5 py-2.5 text-[13.5px] font-semibold transition-colors"
              style={{
                background: 'var(--surface-2)',
                borderColor: 'var(--border)',
                color: 'var(--fg-2)',
              }}
            >
              <Bell size={14} />
              {t('team.cta')}
            </a>
          </div>
        </div>

        {/* Lock-in reassurance */}
        <div className="mx-auto mt-10 flex max-w-[640px] items-start justify-center gap-2 text-center">
          <Lock size={13} strokeWidth={2.2} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--vibrant)' }} />
          <p className="font-mono text-[11.5px] leading-[1.55]" style={{ color: 'var(--muted)' }}>
            {t('lockInNote')}
          </p>
        </div>

        <p
          className="mx-auto mt-6 max-w-[560px] text-center font-mono text-[11.5px]"
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
