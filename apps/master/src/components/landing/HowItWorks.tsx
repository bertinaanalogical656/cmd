'use client';

import { Download, Plug, Smartphone } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section
      className="relative w-full"
      style={{ background: 'var(--bg)' }}
    >
      <div className="mx-auto w-full max-w-[1100px] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-[700px] text-center">
          <p
            className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em]"
            style={{ color: 'var(--vibrant)' }}
          >
            How it works
          </p>
          <h2 className="text-[28px] font-semibold leading-[1.15] tracking-tight sm:text-[36px] md:text-[44px]">
            Three steps and you’re running.
          </h2>
          <p
            className="mx-auto mt-4 max-w-[520px] text-[14.5px] leading-[1.55]"
            style={{ color: 'var(--fg-2)' }}
          >
            One curl on each box, one web app on every screen.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3 md:gap-6">
          <Step
            number={1}
            icon={Download}
            title="Install on any server"
            body="One curl. Self-host on your own VPS — free forever, no telemetry, no limits."
          >
            <CodeBlock>
              <span style={{ color: 'var(--muted)' }}>$ </span>
              curl https://cmd.autmzr.com/install | bash
              {'\n'}
              <span style={{ color: 'var(--ok)' }}>
                {'->'} master ready on https://your-domain
              </span>
            </CodeBlock>
          </Step>

          <Step
            number={2}
            icon={Plug}
            title="Plug in your CLIs"
            body="Install Claude Code, Gemini CLI or any other agent on your servers. Authenticate once — then drive everything from the app."
          >
            <DeviceList />
          </Step>

          <Step
            number={3}
            icon={Smartphone}
            title="Open it on your phone"
            body="All your VPS and projects in one place. Kick off tasks, monitor progress, dictate prompts by voice."
          >
            <ChatPreview />
          </Step>
        </div>
      </div>
    </section>
  );
}

function Step({
  number,
  icon: Icon,
  title,
  body,
  children,
}: {
  number: number;
  icon: typeof Plug;
  title: string;
  body: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="flex flex-col rounded-[var(--radius)] border p-5 sm:p-6"
      style={{
        background: 'var(--surface)',
        borderColor: 'var(--border)',
      }}
    >
      <div className="flex items-center gap-3">
        <div
          className="flex h-7 w-7 items-center justify-center rounded-full font-mono text-[12px] font-semibold"
          style={{
            background: 'var(--vibrant)',
            color: 'var(--vibrant-fg)',
          }}
        >
          {number}
        </div>
        <Icon
          size={18}
          strokeWidth={2.2}
          style={{ color: 'var(--muted)' }}
        />
        <h3 className="text-[16px] font-semibold tracking-tight">{title}</h3>
      </div>
      <p
        className="mt-3 text-[13.5px] leading-[1.55]"
        style={{ color: 'var(--fg-2)' }}
      >
        {body}
      </p>
      <div className="mt-5 flex-1">{children}</div>
    </div>
  );
}

function CodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <pre
      className="font-mono overflow-x-auto rounded-lg border p-3 text-[11.5px] leading-[1.55] whitespace-pre-wrap break-words"
      style={{
        background: 'var(--code-bg)',
        borderColor: 'var(--border)',
        color: 'var(--fg)',
      }}
    >
      {children}
    </pre>
  );
}

function DeviceList() {
  const devices = [
    { name: 'prod-fra-1', status: 'ok', label: 'claude · online' },
    { name: 'home-mac', status: 'ok', label: 'gemini · online' },
    { name: 'staging-vps', status: 'muted', label: 'offline' },
  ];
  return (
    <div
      className="rounded-lg border p-2"
      style={{
        background: 'var(--bg)',
        borderColor: 'var(--border)',
      }}
    >
      {devices.map((d) => (
        <div
          key={d.name}
          className="flex items-center justify-between px-2.5 py-2"
        >
          <div className="flex items-center gap-2">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{
                background:
                  d.status === 'ok' ? 'var(--ok)' : 'var(--muted)',
              }}
            />
            <span className="font-mono text-[12px]">{d.name}</span>
          </div>
          <span
            className="text-[10.5px]"
            style={{ color: 'var(--muted)' }}
          >
            {d.label}
          </span>
        </div>
      ))}
    </div>
  );
}

function ChatPreview() {
  return (
    <div className="space-y-2">
      <div
        className="ml-auto max-w-[85%] rounded-2xl rounded-tr-md px-3 py-2 text-[12.5px]"
        style={{
          background: 'var(--accent)',
          color: 'var(--bg)',
        }}
      >
        Roll back the last deploy on prod-fra-1
      </div>
      <div
        className="max-w-[90%] rounded-2xl rounded-tl-md border px-3 py-2 text-[12.5px] leading-[1.5]"
        style={{
          background: 'var(--bg)',
          borderColor: 'var(--border)',
        }}
      >
        On it. Reverting to <code className="font-mono">v1.4.2</code>{' '}
        and re-running migrations. I’ll keep going if you close the app.
      </div>
    </div>
  );
}
