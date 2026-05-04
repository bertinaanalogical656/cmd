# Security Policy

## Reporting a vulnerability

If you find a security issue in Autmzr, **please don't open a public GitHub issue**. Instead, email:

**security@autmzr.com**

Include:
- A description of the issue and its impact
- Steps to reproduce (proof of concept if possible)
- Affected version (`git rev-parse HEAD` or release tag)
- Your contact info

We aim to respond within **72 hours** with an initial assessment, and to release a fix or workaround within **30 days** for confirmed issues.

If you don't get a response in 72 hours, follow up — your email may have been lost.

## Scope

In scope:
- The master server (`apps/master`)
- The agent (`apps/agent`)
- The shared protocol (`packages/protocol`)
- The remote-FS MCP server (`packages/rfs-mcp`)
- The connect-script and installer (`apps/master/public/connect.sh`, `cmd.autmzr.com/install`)
- The hosted cloud version (`*.autmzr.com`)

Out of scope:
- Third-party CLIs we integrate with (Claude Code, Gemini CLI, etc.) — report those upstream
- User-deployed instances we don't operate (please report to the operator)
- Vulnerabilities requiring physical access to a user's device
- Social engineering of project maintainers

## Disclosure policy

- We follow **coordinated disclosure**: report privately, we fix, then we publish.
- After a fix ships, we publish a security advisory on GitHub describing the issue, affected versions, and remediation.
- We credit reporters by name (or pseudonym) unless you ask us not to.
- We don't currently run a paid bug-bounty program. We do offer public credit and our genuine thanks.

## Security model — what to expect

A few things that are **by design** and not vulnerabilities:

- **The agent runs arbitrary commands on the device it's installed on.** That's its job. Anyone with access to the master node + a logged-in user account can drive that. Run agents only on machines you own.
- **API keys and OAuth tokens stored in your Postgres are visible to anyone with DB access.** Lock down your DB. The hosted version uses encryption-at-rest; self-host responsibility is on you.
- **The master ↔ agent WebSocket is authenticated by token.** If an attacker steals the agent token, they can impersonate the agent. Tokens rotate on `connect.sh` re-run.

Things we treat as real vulnerabilities:
- Auth bypass (login, session, agent token)
- RCE on master not requiring an authenticated user
- Path-traversal letting an agent read files outside an explicitly-declared project root (the protocol blocks `~/.claude/*` etc. — bypassing that is a vuln)
- Cross-tenant data leaks in the cloud version
- Anything that lets one user's agent be driven by a different user's session
- Secret leakage in logs, error messages, or telemetry

## Updates

Subscribe to GitHub Releases or watch the repo for security advisories. The auto-update channel (when shipped) will deliver patched agents within hours of a release.
