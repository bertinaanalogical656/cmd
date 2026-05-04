# Architecture

> **Status:** stub. Expand before public launch.

This is a high-level overview. For protocol message formats, see [`packages/protocol/src/types.ts`](../packages/protocol/src/types.ts).

## Three components

```
Browser          Master                    Agent
                 (apps/master)             (apps/agent — runs on user device)
─────────        ──────────                ────────────
Next.js 14   ──► REST + SSE          ◄──► WebSocket (WSS)
                 + WebSocket hub          + spawned CLIs (claude, gemini, ...)
                                          + spawned bash terminals
                                          + file ops via MCP
```

### Master (`apps/master`)

- Next.js 14 App Router on port 3100
- Custom WebSocket server alongside Next (in `src/server/`) — used for both Browser↔Master (UI streams) and Master↔Agent (control plane)
- Postgres for users, devices, projects, sessions, messages
- Migrations in `apps/master/migrations/`
- Auth via email/password (bcrypt) + cookie session
- Never spawns `claude` / `gemini`. Never reads user CLI auth tokens.
- Serves `agent.js` (bundled agent binary, ~2 MB) for `connect.sh` to download

### Agent (`apps/agent`)

- Standalone Node binary, single-file bundle
- Connects outbound to `wss://master/ws/agent` with a per-device token
- On master command:
  - Spawns `claude` / `gemini` (or another configured CLI) with `--print` / streaming flags
  - Streams stdout/stderr back to master in chunks
  - Spawns bash terminals (separate channel)
  - Handles file ops through the embedded `rfs-mcp` server (Remote-FS MCP)
- Reconnects with exponential backoff
- Crash-resistant — runs as systemd user unit (Linux) or launchd plist (macOS)

### Protocol (`packages/protocol`)

Shared TypeScript types for messages between master and agent. JSON over WebSocket.

Key message families:
- `device.*` — registration, heartbeat
- `cli.*` — spawn, stream, abort, model-switch
- `term.*` — terminal spawn / input / output
- `fs.*` — file tree, read, write (proxied through `rfs-mcp` for safety)
- `error.*` — structured error reports

## Security boundaries

| Boundary | Enforcement |
|---|---|
| Browser ↔ Master | TLS, session cookie, CSRF on mutating ops |
| Master ↔ Agent | TLS, per-device token, agent-initiated outbound only |
| Agent ↔ CLI | Direct local spawn; CLI auth lives in CLI's own config (`~/.claude/`, etc.) and is **never** read by the agent |
| Agent file ops | Routed through `rfs-mcp` which whitelists project roots; **paths matching `~/.claude/*` and similar are rejected at the protocol layer** |

## Multi-server proxy mode

The killer feature. One device acts as the "CLI host" — the CLI is installed and authenticated there. Other devices ("project hosts") only host code/files. When a user opens a project on a project host, the agent there spawns a Remote-FS MCP server, and the agent on the CLI host spawns the CLI configured to use that MCP server as its file access. Result: one CLI subscription drives work on many machines, without any CLI binary needing to be installed on the project hosts.

See `pc.projects.claude_device_id` (links project to CLI host) and the `rfs-mcp` package.

## Adding a new CLI

See [CONTRIBUTING.md](../CONTRIBUTING.md#adding-a-new-cli-integration).

## TODO (this doc)

- [ ] Sequence diagrams for: login, device-add, project-create, chat-message, file-edit
- [ ] Database schema overview
- [ ] Migration strategy
- [ ] Per-CLI auth flow (claude login, gemini config, future codex auth)
- [ ] Cloud-version deployment topology
