'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const QUESTIONS: { q: string; a: React.ReactNode }[] = [
  {
    q: 'Is it secure? Where do my API keys go?',
    a: (
      <>
        <p>
          Nowhere. In self-host they live only in your Postgres DB and never
          leave your infrastructure. In the cloud version they’re encrypted in
          our DB and only decrypted at the moment an agent starts.
        </p>
        <p>
          The agent on your server physically can’t read{' '}
          <code className="font-mono">~/.claude/*</code> — that’s blocked at the
          protocol layer. Open source under AGPL-3.0 — verify it yourself.
        </p>
      </>
    ),
  },
  {
    q: 'Does it work without a VPN?',
    a: (
      <>
        <p>
          Yes. Self-host on your own VPS — the UI talks directly to your
          server. The cloud version is also accessible without a VPN.
        </p>
        <p>
          One caveat: Google geo-blocks Gemini CLI for some regions. If your
          server isn’t in a blocked region, Gemini works fine. Nothing happens
          on the device side — the call goes server ↔ Anthropic / Google.
        </p>
      </>
    ),
  },
  {
    q: 'Which CLIs are supported?',
    a: (
      <>
        <p>
          Today: <strong>Claude Code</strong> and <strong>Gemini CLI</strong>{' '}
          in production.
        </p>
        <p>
          In progress: Codex CLI (OpenAI), Aider, Cursor CLI. Want to add your
          own? Open an issue or a PR — the architecture is extensible by design.
        </p>
      </>
    ),
  },
  {
    q: 'How is this different from Anthropic Remote Control?',
    a: (
      <>
        <p>
          Anthropic is bound to Claude only and to an Anthropic subscription.
          Autmzr supports any CLI, any server, no vendor lock-in. Plus we’re
          self-hostable — Anthropic Remote Control runs only through their
          infrastructure.
        </p>
        <p>
          If Claude on a single device is enough for you, Anthropic Remote
          Control is fine. If you have multiple servers or want other CLIs,
          that’s where we come in.
        </p>
      </>
    ),
  },
  {
    q: 'Do I need to expose ports on my servers?',
    a: (
      <>
        <p>
          No. The agent initiates an outbound WebSocket connection to the
          master — nothing inbound, no exposed ports, no Cloudflare tunnel
          required.
        </p>
      </>
    ),
  },
  {
    q: 'What happens to my task if the agent disconnects?',
    a: (
      <>
        <p>
          The task keeps running on your server. When the device comes back
          online, you see the buffered output and current state. Unlike Telegram
          bots that die at the 5-minute mark with a fake “✅ done”.
        </p>
      </>
    ),
  },
  {
    q: 'What about teams?',
    a: (
      <>
        <p>
          Right now: single user, single infrastructure. Teams, SSO, audit log
          and RBAC are on the roadmap, not today.
        </p>
      </>
    ),
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative w-full" style={{ background: 'var(--bg-2)' }}>
      <div className="mx-auto w-full max-w-[820px] px-6 py-20 md:py-28">
        <div className="text-center">
          <p
            className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em]"
            style={{ color: 'var(--vibrant)' }}
          >
            FAQ
          </p>
          <h2 className="text-[28px] font-semibold leading-[1.15] tracking-tight sm:text-[36px] md:text-[44px]">
            Honest answers to honest questions.
          </h2>
        </div>

        <div className="mt-12 space-y-2.5 md:mt-16">
          {QUESTIONS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className="rounded-[var(--radius)] border transition-colors"
                style={{
                  background: 'var(--surface)',
                  borderColor: isOpen
                    ? 'var(--border-strong)'
                    : 'var(--border)',
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                >
                  <span className="text-[14.5px] font-semibold tracking-tight sm:text-[15.5px]">
                    {item.q}
                  </span>
                  <span
                    className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full"
                    style={{
                      background: isOpen
                        ? 'var(--vibrant-tint)'
                        : 'var(--surface-2)',
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
                    {item.a}
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
