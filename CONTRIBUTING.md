# Contributing to Autmzr

Thanks for your interest. This is a small, open project — every PR matters. Read this first to make the process smooth for both of us.

## Code of conduct

Be respectful. Read [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md). One-line summary: don't be a jerk.

## Reporting issues

Before opening an issue:

1. **Search existing issues** — yours might already be filed.
2. **Reproduce on `main`** — bugs are sometimes already fixed.
3. **Use the right template** — bug report / feature request / question.

Include in bug reports:
- Autmzr version (`git rev-parse HEAD`)
- OS and Node.js version
- Steps to reproduce
- Expected vs actual behavior
- Logs (`docker compose logs master agent`)

For security issues, **don't open a public issue** — see [SECURITY.md](SECURITY.md).

## Development setup

```bash
git clone https://github.com/autmzr/cmd.git
cd cmd
npm install
npm run setup   # interactive wizard
npm run dev
```

Requirements:
- Node.js >= 20
- Postgres 14+ (Docker compose includes one)
- A working Claude Code or Gemini CLI install for end-to-end tests

## Project structure

```
apps/master/      # Next.js 14 — UI + API + WS hub (port 3100)
apps/agent/       # Standalone Node binary — runs on user's devices
packages/protocol # Shared types, JSON-over-WS message contracts
packages/rfs-mcp  # Remote-FS MCP server for proxy mode
docs/             # Architecture & user docs
scripts/          # setup wizard, helpers
```

Architecture deep-dive: [docs/architecture.md](docs/architecture.md).

## Adding a new CLI integration

This is where we want the most contributions. The architecture is designed for it.

1. **Read** `apps/agent/src/handlers/` — see how `claude.ts` and `gemini.ts` work.
2. **Add a new handler** following the same shape: spawn the CLI, stream stdout/stderr to the master, handle stop/abort.
3. **Add the CLI to `apps/master/src/lib/models.ts`** — include label, icon, model list, default model.
4. **Add detection logic** to the connect-script (`apps/master/public/connect.sh`) — check if the CLI is installed, give a friendly message if not.
5. **Add tests** to `apps/agent/test/` — mock the spawned process, verify the protocol output.
6. **Update docs**: README's "supported CLIs", and create `docs/cli/<name>.md` with auth/setup notes.

A good first integration to mirror is Gemini CLI (`packages/protocol/src/types.ts` + `apps/agent/src/handlers/gemini.ts`).

## Pull requests

- **Branch from `main`**, name it like `feat/<scope>` or `fix/<scope>`.
- **One PR = one concern.** Smaller PRs land faster.
- **Write a description**: what changes, why, how to test.
- **Run `npm run build`** locally — CI will check the same.
- **No bulk reformatting** of files you didn't touch — it pollutes the diff.
- **Tests where it makes sense.** Don't gold-plate, but don't ship without coverage for new logic.

We do not require sign-off / DCO. License is AGPL-3.0; by submitting a PR you agree that your contribution is covered by the same.

## Coding style

- TypeScript everywhere except shell scripts.
- Functional and small. If a function passes 80 lines, see if it should be split.
- Don't add comments that restate the code. Comments should explain *why*, not *what*.
- File length under ~500 lines is a soft target.
- React: hooks-based, no class components. Server components by default in `app/`.
- API routes: prefer streams (SSE/WS) over long-poll.

## Translations

The landing has three languages today: EN (default), RU, ZH. To add another:

1. Copy `LANDING_EN.md` to `LANDING_<XX>.md`.
2. Translate, keeping the structure and code blocks intact.
3. Update the language switcher links in all four `LANDING_*.md` files plus README.

Native speakers welcome — we'd rather ship a polished translation than a Google-Translate one.

## Communication

- **Issues / Discussions** on GitHub for almost everything.
- **Quick questions** — open a discussion, not an issue.
- **Larger ideas / RFCs** — open a discussion first to avoid throwaway PRs.

---

Thanks. See you in the PR queue.
