'use client';

import { Lightbulb, AlarmClock, CreditCard, Bot } from 'lucide-react';

const PROBLEMS = [
  {
    icon: Lightbulb,
    title: 'Idea hits in transit.',
    body: 'You jot down "do it tonight" — by night you don’t even remember why.',
  },
  {
    icon: AlarmClock,
    title: 'Prod breaks at 2am.',
    body: 'Time to dig out the laptop, SSH in, debug by hand — long after you should be sleeping.',
  },
  {
    icon: CreditCard,
    title: 'One $200 sub, three servers.',
    body: 'You bought a CLI subscription. You have three servers. It only runs on one of them.',
  },
  {
    icon: Bot,
    title: 'Telegram bots fall over.',
    body: 'They crash, lose context, die after 5 minutes mid-task — and pretend they finished with a fake "✅ done".',
  },
];

export default function Problem() {
  return (
    <section
      className="relative w-full"
      style={{ background: 'var(--bg-2)' }}
    >
      <div className="mx-auto w-full max-w-[1100px] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-[700px] text-center">
          <p
            className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em]"
            style={{ color: 'var(--vibrant)' }}
          >
            The problem
          </p>
          <h2
            className="text-[28px] font-semibold leading-[1.15] tracking-tight sm:text-[36px] md:text-[44px]"
          >
            Sound familiar?
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 md:mt-16">
          {PROBLEMS.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-[var(--radius)] border p-5 transition-colors sm:p-6"
              style={{
                background: 'var(--surface)',
                borderColor: 'var(--border)',
              }}
            >
              <div
                className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg"
                style={{
                  background: 'var(--vibrant-tint)',
                  color: 'var(--vibrant)',
                }}
              >
                <Icon size={18} strokeWidth={2.2} />
              </div>
              <h3 className="text-[16px] font-semibold tracking-tight sm:text-[17px]">
                {title}
              </h3>
              <p
                className="mt-2 text-[13.5px] leading-[1.55]"
                style={{ color: 'var(--fg-2)' }}
              >
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
