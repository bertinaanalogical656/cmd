'use client';

import { Download, Plug, Smartphone } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function HowItWorks() {
  const t = useTranslations('howItWorks');
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
          <p className="mx-auto mt-4 max-w-[520px] text-[14.5px] leading-[1.55]" style={{ color: 'var(--fg-2)' }}>
            {t('lede')}
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3 md:gap-6">
          <Step number={1} icon={Download} title={t('step1.title')} body={t('step1.body')}>
            <CodeBlock>
              <span style={{ color: 'var(--muted)' }}>{t('step1.cmdPrompt')}</span>
              {t('step1.cmd')}
              {'\n'}
              <span style={{ color: 'var(--ok)' }}>{t('step1.cmdResult')}</span>
            </CodeBlock>
          </Step>

          <Step number={2} icon={Plug} title={t('step2.title')} body={t('step2.body')}>
            <DeviceList />
          </Step>

          <Step number={3} icon={Smartphone} title={t('step3.title')} body={t('step3.body')}>
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
      style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
    >
      <div className="flex items-center gap-3">
        <div
          className="flex h-7 w-7 items-center justify-center rounded-full font-mono text-[12px] font-semibold"
          style={{ background: 'var(--vibrant)', color: 'var(--vibrant-fg)' }}
        >
          {number}
        </div>
        <Icon size={18} strokeWidth={2.2} style={{ color: 'var(--muted)' }} />
        <h3 className="text-[16px] font-semibold tracking-tight">{title}</h3>
      </div>
      <p className="mt-3 text-[13.5px] leading-[1.55]" style={{ color: 'var(--fg-2)' }}>
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
      style={{ background: 'var(--code-bg)', borderColor: 'var(--border)', color: 'var(--fg)' }}
    >
      {children}
    </pre>
  );
}

function DeviceList() {
  const t = useTranslations('howItWorks.step2');
  const devices = [
    { name: 'prod-fra-1', status: 'ok', label: t('device1Label') },
    { name: 'home-mac', status: 'ok', label: t('device2Label') },
    { name: 'staging-vps', status: 'muted', label: t('device3Label') },
  ];
  return (
    <div className="rounded-lg border p-2" style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}>
      {devices.map((d) => (
        <div key={d.name} className="flex items-center justify-between px-2.5 py-2">
          <div className="flex items-center gap-2">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: d.status === 'ok' ? 'var(--ok)' : 'var(--muted)' }}
            />
            <span className="font-mono text-[12px]">{d.name}</span>
          </div>
          <span className="text-[10.5px]" style={{ color: 'var(--muted)' }}>
            {d.label}
          </span>
        </div>
      ))}
    </div>
  );
}

function ChatPreview() {
  const t = useTranslations('howItWorks.step3');
  return (
    <div className="space-y-2">
      <div
        className="ml-auto max-w-[85%] rounded-2xl rounded-tr-md px-3 py-2 text-[12.5px]"
        style={{ background: 'var(--accent)', color: 'var(--bg)' }}
      >
        {t('chatUser')}
      </div>
      <div
        className="max-w-[90%] rounded-2xl rounded-tl-md border px-3 py-2 text-[12.5px] leading-[1.5]"
        style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}
      >
        {t('chatAsstPrefix')} <code className="font-mono">v1.4.2</code> {t('chatAsstSuffix')}
      </div>
    </div>
  );
}
