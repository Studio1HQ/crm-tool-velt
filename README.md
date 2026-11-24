<div align="center">

<img src="https://raw.githubusercontent.com/Studio1HQ/Studio1HQ/main/assets/banners/crm-tool-velt.webp" alt="Apollo-Style CRM Inbox with Velt: An Apollo-style CRM inbox with cell comments, presence and notifications" width="100%" />

<br />
<br />

# Apollo-Style CRM Inbox with Velt

### An Apollo-style CRM inbox with cell comments, presence and notifications

A v0-generated Next.js CRM inbox with a leads table and deal detail pane, extended with Velt cell comments, an inline comments section per deal, a comments sidebar, presence and notifications.

<br />

[![Built by Studio1](https://img.shields.io/badge/Built_by_Studio1-f97316?style=for-the-badge&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNjAgMTYwIiBmaWxsPSJub25lIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgMzVDMCAxNi42ODA3IDE0LjA3NDQgMS42NDg0NCAzMiAwLjEyNjk1M1YxNDFINTEuMDUyM0M1Mi40MzA4IDEzNy4zNDQgNTQuNzQ0NiAxMzMuNjg5IDU3Ljk5MzggMTMwLjAzM0M2MS4xNDQ2IDEyNi41MDggNjQuNjg5MiAxMjMuNDQgNjguNjI3NyAxMjAuODI5QzcyLjU2NjIgMTE4LjM0OSA3Ni4zNTY5IDExNi43ODIgODAgMTE2LjEyOVY4Ni43NTQ0Qzc1LjQ3MDggODcuOTI5MiA3MS4zODQ2IDg5LjY5MTkgNjcuNzQxNSA5Mi4wNDE1QzY0IDk0LjUyMjUgNjAuNzUwOCA5Ny40NiA1Ny45OTM4IDEwMC44NTRDNTYuNTM0NSAxMDIuNzIgNTUuMjU0NSAxMDQuNjU5IDU0LjE1MzkgMTA2LjY3MVYwSDEyNUMxNDQuMzMgMCAxNjAgMTUuNjY5OSAxNjAgMzVWMTI1QzE2MCAxNDQuMzMgMTQ0LjMzIDE2MCAxMjUgMTYwSDEyNFYxOEgxMDQuOTQ4QzEwMy41NjkgMjEuNjgxNiAxMDEuMjU1IDI1LjM2MjggOTguMDA2MiAyOS4wNDQ0Qzk0Ljg1NTQgMzIuNTk0MiA5MS4zMTA4IDM1LjY4NDEgODcuMzcyMyAzOC4zMTRDODMuNDMzOCA0MC44MTIgNzkuNjQzMSA0Mi4zODk2IDc2IDQzLjA0NzRWNzIuNjMwNEM4MC41MjkyIDcxLjQ0NzMgODQuNjE1NCA2OS42NzI0IDg4LjI1ODUgNjcuMzA1N0M5MiA2NC44MDc2IDk1LjI0OTIgNjEuODQ5MSA5OC4wMDYyIDU4LjQzMDdDOTkuNDY1NSA1Ni41NTEzIDEwMC43NDUgNTQuNTk4NiAxMDEuODQ2IDUyLjU3MjNWMTYwSDM1QzE1LjY3IDE2MCAwIDE0NC4zMyAwIDEyNVYzNVoiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4K)](https://studio1hq.com)
[![Built with Velt](https://img.shields.io/badge/Built_with_Velt-141414?style=for-the-badge)](https://velt.dev)
[![Live demo](https://img.shields.io/badge/Live_demo-1c1917?style=for-the-badge&logo=vercel&logoColor=white)](https://crm-tools-velt.vercel.app/)

[Velt docs](https://docs.velt.dev) &nbsp;·&nbsp; [Velt](https://velt.dev) &nbsp;·&nbsp; [More examples](https://github.com/Studio1HQ) &nbsp;·&nbsp; [studio1hq.com](https://studio1hq.com)

</div>

<br />

## Overview

A CRM inbox in the style of Apollo and Attio, built with Next.js and generated with [v0](https://v0.app/), then extended with [Velt](https://velt.dev) for collaboration. A sales team can comment on individual table cells, discuss a deal in an inline thread in the detail pane, see who is online and get notifications.

Velt provides the provider, the comment tool and comment layer, the comments sidebar, inline comment sections, presence and the notification bell.

<p align="center"><img src="https://github.com/user-attachments/assets/35784ad5-d683-4c6a-83d3-99c5a3f3dfa0" alt="CRM inbox generated with v0" width="100%" /></p>

<details>
<summary>More screenshots</summary>

<p align="center"><img src="https://github.com/user-attachments/assets/c3ae45d1-db6c-4612-9836-b45a923bd259" alt="CRM inbox with Velt comments" width="100%" /></p>

</details>

## Features

- **Cell comments**: `VeltCommentTool` on table cells lets users comment on specific values such as stage or deal value.
- **Deal comments**: `VeltInlineCommentsSection` in the deal detail pane keeps a thread per deal, keyed by the deal ID.
- **Comments sidebar**: `VeltCommentsSidebar` and `VeltSidebarButton` list all comments.
- **Presence**: `VeltPresence` in the navbar shows who is online, next to a user switcher.
- **Notifications**: `VeltNotificationsTool` provides in-app notifications.
- **CRM layout**: Navbar, segment sidebar, leads table and a deal detail pane.
- **Theme switcher**: Light and dark mode.

## Tech stack

| Layer | Tool |
| --- | --- |
| Framework | [Next.js](https://nextjs.org/) (App Router), [TypeScript](https://www.typescriptlang.org/) |
| Collaboration | [Velt](https://velt.dev/) (`@veltdev/react`) |
| UI generation | [v0](https://v0.app/) |
| UI | [Tailwind CSS](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/), [Radix UI](https://www.radix-ui.com/), [Recharts](https://recharts.org/) |
| Icons and fonts | [Lucide](https://lucide.dev/), [Geist](https://vercel.com/font) |

## Getting started

### Prerequisites

- Node.js 18 or newer
- pnpm (or npm)
- A Velt API key from the [Velt console](https://console.velt.dev)

### Installation

```bash
git clone https://github.com/Studio1HQ/crm-tool-velt.git
cd crm-tool-velt
pnpm install
```

### Environment variables

Create a `.env.local` file in the project root.

| Variable | Description |
| --- | --- |
| `NEXT_PUBLIC_VELT_API_KEY` | Your Velt API key, from the [Velt console](https://console.velt.dev). |

### Run

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). Other scripts: `pnpm build`, `pnpm start`, `pnpm lint`.

## How it works

`VeltAuth` identifies the selected user and sets the Velt document to `crm-dashboard-basepoint`. Velt components are loaded through `next/dynamic` wrappers so they render client-side only.

```text
crm-tool-velt/
├── app/                          # Next.js app directory
└── components/
    ├── velt-auth.tsx             # Identify user, set document
    ├── velt-wrapper.tsx          # Provider wrapper
    ├── velt-comments-dynamic.tsx # Dynamic imports of Velt components
    ├── velt-presence-dynamic.tsx # Dynamic VeltPresence
    ├── velt-comments-section.tsx # Inline comments per deal
    ├── navbar.tsx                # User switcher, presence, theme
    ├── crm-sidebar.tsx           # Segment navigation
    ├── main-table.tsx            # Leads table with cell comments
    └── deal-detail-pane.tsx      # Deal drawer
```

The UI was generated in v0 from a long prompt asking for an Apollo and Attio inspired inbox: navbar with user switching and presence, segment sidebar, a data-dense leads table with cell comments, a deal detail pane and light and dark themes.

## Resources

- [Velt documentation](https://docs.velt.dev): SDK guides and API reference.
- [Velt](https://velt.dev): Product site.
- [v0](https://v0.app/): The tool used to generate the base UI.

<br />

---

<div align="center">

<a href="https://studio1hq.com">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/Studio1HQ/website/main/brand/studio1-logo-on-dark.svg" />
    <img src="https://raw.githubusercontent.com/Studio1HQ/website/main/brand/studio1-logo-on-light.svg" alt="Studio1" width="160" />
  </picture>
</a>

Built by **[Studio1](https://studio1hq.com)**, the technical content and DevRel partner for devtool teams. Made with [Velt](https://velt.dev).<br />
Browse more open-source examples at [github.com/Studio1HQ](https://github.com/Studio1HQ).

[![Website](https://img.shields.io/badge/studio1hq.com-0b0807?style=for-the-badge&logo=googlechrome&logoColor=white)](https://studio1hq.com)
[![Book a call](https://img.shields.io/badge/Book_a_strategy_call-f97316?style=for-the-badge&logo=googlecalendar&logoColor=white)](https://cal.com/studio1/collab)
[![X](https://img.shields.io/badge/%40Studio1HQ-141414?style=for-the-badge&logo=x&logoColor=white)](https://x.com/Studio1HQ)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0a66c2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/company/studio1hq/)

<sub><a href="https://studio1hq.com">studio1hq.com</a> · Technical content, docs, video and DevRel for devtools</sub>

</div>
