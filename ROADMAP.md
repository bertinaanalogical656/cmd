# Roadmap

This is the public plan for Autmzr. Items are intentionally aspirational — what we'd *like* to ship — not commitments. Reality moves things around.

If you want to influence the roadmap: open a [Discussion](https://github.com/AUTMZR/cmd/discussions) or thumbs-up an existing issue. Community voice changes priorities.

---

## v0.1 — single-user MVP (current)

**Status:** ✅ shipped, tagged `v0.1.0`.

What works today:
- Master + agent + shared protocol monorepo
- Email/password auth
- Devices: add / list / remove + online status
- Projects bound to devices
- Streaming chat → Claude Code / Gemini CLI on-device
- Bash terminal through agent
- File tree + file editor through agent
- Voice input (Web Speech API)
- Mobile-first UI with bottom-tab nav
- Three themes (soft / light / dark)
- Docker Compose + optional Caddy SSL
- One-line installer (`curl https://cmd.autmzr.com/install | bash`)

---

## v0.2 — DX & integrations (Q2-Q3 2026)

Theme: make the daily-driver experience smoother and add the most-requested CLI.

- [ ] **Codex CLI integration** (OpenAI). Highest demand after Claude/Gemini.
- [ ] **Push notifications** for task completion (PWA — iOS Safari, Android Chrome)
- [ ] **Plugin API** so community can add their own CLIs without forking core
- [ ] **Auto-update** for the agent via GitHub Releases
- [ ] **GitHub OAuth** + clone-as-project workflow
- [ ] **Improved error parser** — friendlier error cards for CLI auth failures, rate limits, geo-blocks

---

## v0.3 — multi-vendor expansion (Q3-Q4 2026)

Theme: become the obvious choice for people who use more than one AI coding CLI.

- [ ] **Aider** integration
- [ ] **Cursor CLI** integration
- [ ] **DeepSeek / Qwen / Kimi CLI** if/when their CLI surfaces stabilize
- [ ] **Generic CLI wrapper** — point Autmzr at any CLI binary and configure I/O patterns
- [ ] **Shared sessions across CLIs** — start a task in Claude, hand it off to Aider for refactoring

---

## v0.4 — multi-user (Q4 2026 - Q1 2027)

Theme: the cloud version becomes self-serve and stops being one-tenant-per-deployment.

- [ ] **Google / GitHub OAuth** login (in addition to email/password)
- [ ] **Self-serve registration** for the cloud tier
- [ ] **Account isolation** — strict tenancy boundaries in the master
- [ ] **Billing integration** — Stripe for paid plans
- [ ] **Usage dashboard** — agent-hours, sessions, tokens (where surfaceable)

---

## v0.5 — teams (further out, no commitments)

Theme: a team can use Autmzr without setting up parallel personal accounts.

- [ ] **Team workspaces**
- [ ] **SSO** (SAML / OIDC)
- [ ] **Audit log**
- [ ] **RBAC** — who can drive which devices
- [ ] **Shared servers** — one device shared across team members
- [ ] **Project-level permissions**

---

## Out of scope (probably forever)

To set expectations:

- ❌ **Editing code on the phone as primary surface.** Mobile is for control, not authoring. Long-form coding stays on a real keyboard.
- ❌ **Built-in LLM access.** We're not a Claude/Gemini reseller. Bring your own subscription or API key.
- ❌ **Custom model hosting.** Run Ollama / vLLM / whatever you want — but we're not going to embed model serving.
- ❌ **VPN for users.** No, we're not going to ship a baked-in VPN to defeat geo-blocks. Get a server in a supported region.
- ❌ **Closed-source enterprise edition.** AGPL-3.0 is the only license. Enterprise gets the same code.

---

## How to influence priorities

1. **Find or open an [issue](https://github.com/AUTMZR/cmd/issues).** Specific, actionable issues move first.
2. **Thumbs-up existing issues** — we use 👍 reactions as a rough demand signal.
3. **Open a [Discussion](https://github.com/AUTMZR/cmd/discussions)** for bigger ideas before writing code.
4. **Send a PR.** A working PR that passes CI almost always merges, even if it wasn't on the official roadmap.

---

*Last updated: 2026-05-04. Items here are sorted by intended priority, not deadline.*
