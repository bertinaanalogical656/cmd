# Landing EN — Autmzr

*v1, 2026-05-04. English is the default language. Adapted for global dev audience (HN / Product Hunt / Reddit). Tone: human, direct, dev-first vocabulary.*

---

## 1. Hero

### All your VPS and CLIs in one mobile interface

Plug any CLI into one server — and use it across all the others. Examples: ship a deploy from a cab, check prod logs in the coffee line, fix a config from the couch — by voice.

✓ Open source for self-host
✓ Mobile-first
✓ Voice input

**[⭐ Star on GitHub]**   **[Cloud version — $4.99/mo, 14-day free trial]**

---

## 2. The problem — sound familiar?

- An idea hits you in transit. You jot down "do it tonight" — by night you don't even remember why.
- Prod breaks at 2am. Time to dig out the laptop, SSH in, debug by hand.
- You bought a $200 CLI subscription — you have 3 servers, but it only runs on one.
- You set up a Telegram bot. It crashes, loses context, dies after 5 minutes mid-task.

---

## 3. How it works — 3 steps

### Step 1. Install Autmzr on any server you own

```bash
curl https://cmd.autmzr.com/install | bash
```

Or run it via `docker compose`. Self-host is free, with no limits and no telemetry.

### Step 2. Plug in your CLIs

In the web UI, install Claude Code, Gemini CLI, or any other agent on your servers. Authenticate once — everything else goes through the app.

### Step 3. Open it on your phone

All your VPS and projects, in one place. Kick off tasks, monitor progress, dictate prompts by voice.

---

## 4. What it does

### One CLI across your whole fleet

Plug a CLI into one server — it works on every other server through a built-in proxy. One subscription instead of three. Nobody else does this — because it cuts against the way they monetize.

### Async — fire and forget

Kick off a task from your phone, close the app, walk away. The agent keeps running on your server for as long as needed — an hour, two, all night. Come back when you want, look at the result.

Unlike Telegram bots that die at the 5-minute mark with a fake "✅ done."

### Voice input

Typing long prompts on a phone is painful. Hit the mic button, dictate, send. Voice is processed in-browser via Web Speech API — your audio doesn't go to our servers.

Works on iOS Safari 14.5+, Chrome, Edge, Samsung Internet. Firefox doesn't yet, but that's ~3% of users.

### Multi-project, multi-vendor

Any number of projects on any number of servers with any agent.

Today: **Claude Code** and **Gemini CLI**. Up next: Codex CLI, Aider, Cursor CLI — and anything the community asks for (PRs welcome).

### Self-hosted: your keys stay yours

OAuth tokens, API keys, agent context, session history — all stored only in your infrastructure. No third-party sync server, no broker proxy. It's open-source — `git clone` and verify.

---

## 5. Real scenarios — how you'll actually use this

### In transit

An idea hits you in a cab. Open the app, dictate by voice: "create branch feature/dark-mode, add a dark theme to Settings, open a PR." By the time you arrive, Claude has done the work and opened the PR. You walk in, open your laptop, review, merge.

### At the gym

Between sets you check prod logs. Something's smoking. Kick off Claude to investigate from your phone. Go back to your last set. Half an hour later — push notification: it's fixed.

### In line for coffee

Five minutes is enough to update an nginx config across three servers and trigger a deploy. Coffee's ready. So are you.

### From the couch

Lying around, no desire to walk to a desk. Dictate: "what's new in project X, what's pending in Y, deploy Z to staging." The agent walks the fleet and does the work. You didn't move.

---

## 6. Security — your stuff stays yours

If you self-host, we have none of your data. None.

- **API keys and OAuth tokens** are stored only in your Postgres DB. They never reach us, never reach an Anthropic-side broker, never leave your infrastructure except for the actual call to Claude/Gemini.
- **Agent context and session history** — same: only in your DB.
- **The agent on your server physically can't read `~/.claude/*`** — that's blocked at the protocol level, even if you or the agent ask for it.
- **No exposed ports.** The agent initiates an outbound WebSocket to the master node. Nothing inbound, no dangerous publish, no Cloudflare-tunnel magic.
- **Open source, AGPL-3.0.** Don't take our word for it — `git clone` and audit how we handle your keys.

In the cloud version: same model plus encryption-at-rest. Keys are encrypted in our DB and decrypted only at agent-launch time. If you don't trust us, run self-host.

---

## 7. Pricing

> *Honest note: this is built by one person. Monetization is optional. Self-host is free forever, with no feature-gating.*

### Self-host — free forever

- Every feature, no limits
- Any number of servers, projects, CLIs
- Your domain, your data, your backups
- Open source — fork, contribute, modify
- AGPL-3.0 license

**[Install in 2 commands →]**

### Cloud version — $4.99/mo

- We host it, you don't fight with VPSes
- Auto-updates
- Session backups
- Email/Telegram support
- 14 days free, no credit card

**[Try it free →]**

> Your Claude/Gemini key or subscription always stays yours, in either tier. We don't resell anyone's tokens.

---

## 8. FAQ

### Is it secure? Where do my API keys go?

Nowhere. In self-host they live only in your Postgres DB. In the cloud version they're encrypted in our DB and only decrypted at the moment an agent starts. It's open source — you can verify.

### Does it work without a VPN?

Yes. Self-host on your own VPS — the UI talks directly to your server. The cloud version is also accessible without a VPN.

One caveat: Google geo-blocks Gemini CLI for some regions (Russia, China, others). If your server isn't in a blocked region, Gemini works fine. Nothing happens on the device side (your phone) — the call goes server ↔ Anthropic/Google.

### Which CLIs are supported?

Today: **Claude Code** and **Gemini CLI** in production.

In progress: Codex CLI (OpenAI), Aider, Cursor CLI.

Want to add your own? Open an issue or a PR. The architecture is extensible by design.

### How is this different from Anthropic Remote Control?

Anthropic is bound to Claude only and to an Anthropic subscription. Autmzr supports any CLI, any server, no vendor lock-in. Plus we're self-hosted — Anthropic Remote Control runs only through their infrastructure.

If Claude on a single device is enough for you, Anthropic Remote Control is fine. If you have multiple servers or want other CLIs, that's where we come in.

### Do I need to expose ports on my servers?

No. The agent initiates an outbound WebSocket connection to the master. Nothing inbound, no exposed ports, no Cloudflare tunnel.

### What if Anthropic ships their own Claude Code Web?

They already did. It runs on their sandboxes, not your servers, and only with Claude. That's a different category — theirs is "cloud sandbox for casual use," ours is "self-hosted control plane for your fleet."

### What about teams?

Right now: single user, single infrastructure. Teams, SSO, audit — on the roadmap, not today.

---

## 9. Open source + roadmap

- **GitHub:** [github.com/AUTMZR/cmd](https://github.com/AUTMZR/cmd) *(repo URL TBD)*
- **License:** AGPL-3.0

### Doing now (Q2 2026)

- Codex CLI integration
- Push notifications (PWA)
- Plugin API for community CLIs

### Discussing

- Aider, Cursor CLI
- Multi-tenant team edition
- Native mobile apps (iOS/Android)

---

## 10. Final CTA

### Ready to try?

**[⭐ Star on GitHub]**   **[Cloud version — 14 days free]**

---

## Footer (minimal)

- Made with ☕ in 2026
- [Docs] · [GitHub]
- [Privacy] · [Terms] · [autmzr.com]

---

**Other languages:** [Русский](LANDING_RU.md) · [中文](LANDING_ZH.md)
