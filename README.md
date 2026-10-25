# Agentic Marketplace — Evidence-first agent registry

A GitHub-native **static registry** for proposed AI agents, bots, models, skills, frameworks and MCP servers. Maintained by [CodesbyFebin](https://github.com/CodesbyFebin).

[![CI](https://github.com/CodesbyFebin/Agentic-Marketplace/actions/workflows/ci.yml/badge.svg)](https://github.com/CodesbyFebin/Agentic-Marketplace/actions)
![Status](https://img.shields.io/badge/status-early_development-orange)
![License](https://img.shields.io/badge/license-not_declared-yellow)

## Implemented

- Next.js static homepage, listing directory and submission guide.
- Source-linked YAML intake, structural checks and an editorial-only approval path.
- Read-only GitHub Actions CI.
- No database, authenticated user accounts or transaction service.

**Not yet implemented:** buying, renting, royalty payouts, affiliate accounting, live paid agents, independently certified security scans or a verified production deployment. These are proposals, not current features.

## Start

```bash
gh repo clone CodesbyFebin/Agentic-Marketplace
cd Agentic-Marketplace
npm install
npm run dev
npm run verify
```

Node 22+ is required. The initial scaffold does not yet include a committed package lock. Before stable release, commit the lockfile and switch CI to `npm ci`.

## Submission

Copy [submissions/TEMPLATE.yaml](submissions/TEMPLATE.yaml) to `submissions/<type>s/<slug>.yaml`. Replace placeholders with real evidence and request review by pull request. Approval does not imply independent security, performance or pricing verification.

## Roadmap and trust

[Roadmap](docs/ROADMAP.md) · [Security](SECURITY.md) · [AI coding agent contract](AGENTS.md) · [GitHub CI](.github/workflows/ci.yml).

Companion: [BestAIAgent.in](https://bestaiagent.in) and [BEST-AI-AGENT-MASTER](https://github.com/CodesbyFebin/BEST-AI-AGENT-MASTER). These are independent repos without demonstrated data synchronization or commercial integrations.

This project is publicly readable **but has no declared repository-wide software license**. No redistribution rights are implied.
