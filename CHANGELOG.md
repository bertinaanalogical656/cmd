# Changelog

All notable changes to Autmzr will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Planned
- Codex CLI integration
- Push notifications (PWA)
- Plugin API for community CLIs
- Auto-update channel via GitHub Releases

## [0.1.0] — 2026-05-XX (initial public release)

First public release. Project rebranded from `pocket-claude` to `autmzr`.

### Added
- Master server (Next.js 14 + custom WebSocket hub) on port 3100
- Standalone Node agent (`apps/agent`) with WS reconnect, claude/gemini handlers
- Shared protocol package (`packages/protocol`) — JSON-over-WS message types
- Remote-FS MCP server (`packages/rfs-mcp`) for proxy mode
- Email/password auth
- Devices: add / list / remove with online status
- Projects bound to devices
- Streaming chat → Claude Code or Gemini CLI on-device
- Bash terminal through agent
- File tree + file editor through agent
- Voice input via Web Speech API (Chrome, Edge, Safari iOS 14.5+, Samsung Internet)
- Three themes: soft / light / dark
- Docker Compose with optional Caddy SSL termination
- One-line installer (`curl https://cmd.autmzr.com/install | bash`)
- Connect script for adding devices (`connect.sh`)
- iOS-style mobile bottom-tab navigation
- Per-project default model + per-chat override (Haiku / Sonnet / Opus / Flash / Pro)
- Region-aware Gemini availability notice (geo-block warning)
- AGPL-3.0 license

### Notes
- Single-user, self-hosted MVP. Multi-user / teams / SSO are on the roadmap (v0.4+).
- Gemini CLI is geo-blocked from some regions (Russia, China, others) by Google. Self-hosting on a server outside those regions works.

[Unreleased]: https://github.com/autmzr/cmd/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/autmzr/cmd/releases/tag/v0.1.0
