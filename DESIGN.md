# ai-ux.io — design.md

Source of truth for the **marketing surface** of [ai-ux.io](https://ai-ux.io). Visual
language, layout rhythm, and component patterns are taken from the live
[Need for Velocity](https://www.needforvelocity.com/) site (NFV), captured from
production CSS and page structure (October 2026).

When implementation and this document disagree, **this document wins** — then fix
the CSS.

**Related:** [DESIGN.md](./DESIGN.md) remains the contract for **NVIDIA Elements**
(`nve-*` components, `--nve-sys-*` tokens). Use Elements for controls and dense UI;
use this file for page layout, marketing typography, and NFV-style bands on top of
Elements.

## Principles

- **Apple-adjacent paper:** calm `#FBFBFD` / `#F5F5F7` bands, near-black ink, one
  system blue accent (`#0A84FF`), hairline dividers — not gradient-heavy marketing.
- **Satoshi everywhere** for reading and UI. Display type is heavy (900), tight
  tracking, short line lengths.
- **One column, 1120px max** (`--vc-maxw`), fullscreen sections for hero and key
  story beats.
- **Glass sticky nav** with backdrop blur; border appears on scroll.
- **Motion is optional and short** (`--vc-dur`, `--vc-dur-fast`); honour
  `prefers-reduced-motion`.
- **Accessible by default:** visible focus, sr-only duplicates for split hero lines,
  sr-only pipeline narrative, semantic sections with labels.

## Brand (ai-ux.io)

- **Wordmark:** `ai-ux.io` text lockup in header/footer (not NFV’s NEED/FOR/VELOCITY
  stack or New Transport).
- **Mark:** `app/icon.svg` monogram (also `public/icon.svg`), 32×32,
  `object-fit: cover`, 6px radius.
- **Wordmark:** **AI** (700) **& UX** (300), not the domain string in the nav lockup.
- **Do not** reuse NFV’s two-line NEEDFORVELOCITY wordmark or NFS sizing tokens
  (`--nfs-size`).

## Colour — CSS custom properties

Theme is driven by `data-theme="light" | "dark"` on `html` (NFV uses
`localStorage` key `vc-theme`). Map these to `--vc-*` in site CSS or bridge selected
values into Elements canvas/shell tokens where needed.

### Light (default)

| Token | Value | Use |
| --- | --- | --- |
| `--vc-bg` | `#FBFBFD` | Page background, final CTA base |
| `--vc-bg-2` | `#F5F5F7` | Alternate bands, chips, footer |
| `--vc-surface` | `#FFFFFF` | Cards, pipeline nodes, inputs |
| `--vc-ink` | `#1D1D1F` | Primary text |
| `--vc-ink-2` | `#6E6E73` | Secondary body, nav links default |
| `--vc-muted` | `#86868B` | Eyebrows, meta, hero support line |
| `--vc-accent` | `#0A84FF` | Links hover target, arrows, primary button |
| `--vc-accent-hover` | `#0060DF` | Primary button hover |
| `--vc-accent-soft` | `#0A84FF1A` | Aurora blobs, active pipeline glow |
| `--vc-line` | `#00000014` | Borders, dividers, rail |
| `--vc-glass` | `#FFFFFFB8` | Sticky nav background |
| `--vc-glass-border` | `#0000000F` | Nav border when scrolled |
| `--vc-shadow-sm` | `0 1px 3px #0000000F` | Cards at rest |
| `--vc-shadow` | `0 8px 30px #00000014` | Card hover, button hover |
| `--vc-shadow-lg` | `0 20px 60px #0000001F` | Rare emphasis |

`theme-color`: light `#FBFBFD`, dark `#000000`.

### Dark

| Token | Value |
| --- | --- |
| `--vc-bg` | `#000000` |
| `--vc-bg-2` | `#0A0A0C` |
| `--vc-surface` | `#1C1C1E` |
| `--vc-ink` | `#F5F5F7` |
| `--vc-ink-2` | `#A1A1A6` |
| `--vc-muted` | `#8E8E93` |
| `--vc-accent` | `#0A84FF` |
| `--vc-accent-hover` | `#409CFF` |
| `--vc-accent-soft` | `#0A84FF29` |
| `--vc-glass` | `#1C1C1EB8` |
| `--vc-glass-border` | `#FFFFFF14` |
| `--vc-line` | `#FFFFFF1A` |

## Typography

**Font:** self-hosted **Satoshi** (`public/fonts/satoshi/`, `styles/satoshi.css`,
token `--font-sans` / `lib/fonts.ts`) with system fallbacks. Elements
`--nve-ref-font-family` is overridden to Satoshi so `nve-*` UI matches marketing
type.

| Role | Class / token | Size | Weight | Notes |
| --- | --- | --- | --- | --- |
| Hero display | `.vc-display` / `--vc-display` | `clamp(2.75rem, 7vw, 6rem)` | 900 | letter-spacing `-0.03em`, line-height `1.02` |
| Section title | `.vc-h2` / `--vc-h2` | `clamp(1.75rem, 3.5vw, 2.75rem)` | 700 | line-height `1.1`, max ~16–18ch for punchy titles |
| Card / step title | `.vc-h3` / `--vc-h3` | `clamp(1.25rem, 2vw, 1.5rem)` | 700 | letter-spacing `-0.02em` |
| Lead | `.vc-lead` / `--vc-lead` | `clamp(1.125rem, 1.6vw, 1.5rem)` | 400 | line-height `1.5`, max ~36–38rem |
| Body | `--vc-body` | `1.0625rem` | 400 | line-height `1.6`, antialiased |
| Small / eyebrow | `.vc-eyebrow` / `--vc-small` | `0.875rem` | 500 | uppercase, letter-spacing `0.08em`, `--vc-muted` |
| Button label | `.btn` | `0.9375rem` | 500 | pill, min-width ~11.5rem on primary |
| Chip / timing | `.chip`, `.pipeline-timing` | `0.75rem` | 500 | pill on `--vc-bg-2` |

Body copy max width ~60ch where long reading is expected (`.vc-body`).

## Layout

| Token | Value | Use |
| --- | --- | --- |
| `--vc-maxw` | `1120px` | `.vc-container` |
| `--vc-gutter` | `max(1rem, 4.5vw)` | horizontal inset |
| `--vc-section` | `clamp(6rem, 14vw, 12rem)` | vertical section padding |
| `--vc-viewport-height` | `100dvh` | fullscreen sections |
| `--vc-nav-height` | set by JS | hero below nav: `min-height: calc(100dvh - nav)` |
| `--vc-gap` | `1.5rem` | grid gaps |
| `--vc-radius-sm` | `12px` | small surfaces |
| `--vc-radius` | `20px` | cards, pipeline nodes |
| `--vc-radius-lg` | `28px` | large panels |
| `--vc-radius-pill` | `980px` | buttons, chips |

### Section rhythm (NFV page)

1. **Hero** — fullscreen below nav, soft accent aurora (`.hero-aurora`), display +
   lead + primary CTA + muted cred line.
2. **Start from anywhere** — band on `--vc-bg-2`; input `.card` list → accent
   outcome card (`.start-outcome-card` with gradient surface and optional animated
   border stroke).
3. **How it works** — `.pipeline` fullscreen; header grid (copy + `.pipeline-meter`);
   five `.pipeline-node` columns on large screens with `.pipeline-rail` progress line.
4. **Why this way** — three-up articles on `--vc-bg-2`.
5. **Final CTA** — centered lockup (`.final-cta`), aurora, oversized headline.
6. **Footer** — `--vc-bg-2`, top border, wordmark + links.

Alternate bands with `bg-[var(--vc-bg-2)]` vs default `--vc-bg`.

## Components

### Nav (`.glass-nav`)

- Sticky top, `z-index: 50`, padding `py-3` / `md:py-4`.
- Background `--vc-glass`, `backdrop-filter: blur(20px)`.
- Bottom border transparent until `.is-scrolled`, then `--vc-glass-border`.
- Primary links: `text-sm`, `--vc-ink-2`, hover `--vc-ink`.
- Utility cluster: theme toggle, language (NFV only — omit on ai-ux.io unless i18n
  ships), mobile menu at `lg` breakpoint.

### Buttons (`.btn`)

- **Primary** (`.btn-primary`): `--vc-accent` fill, white text, `--vc-shadow-sm`;
  hover `--vc-accent-hover`, lift `-2px`, stronger shadow.
- **Secondary** (`.btn-secondary`): white/`--vc-surface`, `--vc-line` border.
- **Text** (`.btn-text`): accent colour, no fill; arrow nudges on hover
  (`.btn-text-arrow`).
- Shared: pill radius, `--vc-dur-fast` transitions.

### Cards (`.card`)

- Surface white, `--vc-radius`, 1px `--vc-line`, `--vc-shadow-sm`.
- Hover: `--vc-shadow`, `translateY(-2px)`.
- Used for “start anywhere” inputs (label + accent →).

### Pipeline (`.pipeline-*`)

- **Head:** two-column grid at `md+` — story left, progress meter right.
- **Meter:** stage fraction label, track + fill width, current stage name.
- **Board:** horizontal 5-column grid; each **node** min-height ~13.5rem, step index
  + timing **chip**, title, description.
- Active step: accent colour on index, pulsing dot (`pipeline-pulse` animation).
- **sr-only** block repeats full pipeline text for screen readers.

### Outcome card (`.start-outcome-card`)

- Large radius (~2rem), blue-tinted gradient surface, bold outcome copy.
- Optional SVG animated border (accent stroke); disable motion when reduced-motion.

### Footer

- Top border `--vc-line`, background `--vc-bg-2`.
- Wordmark + tagline + attribution link; secondary links column.

## Motion

| Token | Value |
| --- | --- |
| `--vc-ease` | `cubic-bezier(0.22, 1, 0.36, 1)` |
| `--vc-ease-inout` | `cubic-bezier(0.65, 0, 0.35, 1)` |
| `--vc-dur` | `0.6s` |
| `--vc-dur-fast` | `0.25s` |

- **Reveal:** sections use `.reveal` → `.is-visible` (opacity + translateY); keep
  static fallbacks for no-JS and reduced motion.
- **Parallax:** optional `.parallax-layer` on aurora only; pointer-events none.
- **Hero / CTA aurora:** large blurred radial gradient using `--vc-accent-soft`.

## Icons & PWA

Copied from uxdesigner.london (black circle, white play mark):

- `app/favicon.ico`, `app/icon.svg`, `app/apple-icon.png`
- `public/icon-192.png`, `public/icon-512.png`, `public/icon-maskable.png`
- Regenerate app copies after asset changes: `node scripts/generate-icons.mjs`

## Page mapping (ai-ux.io content)

Apply NFV **layout and components** to existing ai-ux.io sections without changing
substance:

| NFV pattern | ai-ux.io section |
| --- | --- |
| Hero + pipeline teaser | Hero + run-status strip |
| Start anywhere | Optional future “brief → prototype” strip |
| Pipeline | “The team” workflow / agent roster flow |
| Why three-up | Agentic UX principles grid |
| Proof cards | Proof / engineering bands |
| Final CTA | Contact / LinkedIn |

Keep in-page anchors: The team, Agentic UX, Proof.

## Out of scope (NFV-only)

- NEEDFORVELOCITY wordmark and New Transport stack
- Multilingual switcher and locale routes
- NFV-specific copy, pricing numerals, count-up hero effects
- Replacing Elements components with bespoke HTML controls inside operational UI

## Reference

- Live site: [needforvelocity.com](https://www.needforvelocity.com/)
- Sibling doc pattern: `interaction-dev/design.md`, `uxengineer/design.md`
