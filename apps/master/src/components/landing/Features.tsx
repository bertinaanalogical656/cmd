'use client';

import {
  Server,
  Clock,
  Mic,
  Plug2,
  ShieldCheck,
  Layers,
} from 'lucide-react';

const FEATURES = [
  {
    icon: Server,
    title: 'One CLI, every server',
    body: 'Plug a CLI into one box — it works across the rest through a built-in proxy. One subscription instead of three.',
  },
  {
    icon: Clock,
    title: 'Async — fire and forget',
    body: 'Kick off a task, close the app, walk away. The agent keeps running on your server for as long as needed.',
  },
  {
    icon: Mic,
    title: 'Voice input',
    body: 'Typing long prompts on a phone is painful. Hold the mic, dictate, send. Audio stays in your browser.',
  },
  {
    icon: Plug2,
    title: 'Multi-vendor',
    body: 'Claude Code and Gemini CLI today. Codex, Aider, Cursor CLI on the roadmap. Same UI, different brains.',
  },
  {
    icon: ShieldCheck,
    title: 'Your keys, your servers',
    body: 'OAuth tokens, API keys, agent context — all stay in your infrastructure. No third-party broker, ever.',
  },
  {
    icon: Layers,
    title: 'Multi-project',
    body: 'Any number of projects on any number of servers, all in one mobile dashboard. Switch context with a tap.',
  },
];

export default function Features() {
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
            What it does
          </p>
          <h2 className="text-[28px] font-semibold leading-[1.15] tracking-tight sm:text-[36px] md:text-[44px]">
            Built for the way you actually work now.
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:mt-16">
          {FEATURES.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-[var(--radius)] border p-5 transition-colors sm:p-6"
              style={{
                background: 'var(--surface)',
                borderColor: 'var(--border)',
              }}
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
                {title}
              </h3>
              <p
                className="mt-2 text-[13px] leading-[1.55]"
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
