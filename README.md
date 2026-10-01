# SHLAVEX — Official Digital Flagship

> **PRECISION BEYOND MARKETS.**

The official digital flagship web application for **SHLAVEX**, a global institution structured around people, strategy, quantitative research, technology, trading, engineering, finance, risk, and operations.

---

## Design System & Architecture

- **Aesthetic Direction**: Luxury house × quantitative technology × high-performance engineering × editorial magazine.
- **Brand Palette**:
  - Primary Background: `#050505` (Pure Void)
  - Secondary Background: `#0B0B0B`
  - Graphite & Surfaces: `#151515` / `#1A1A1A`
  - Typography: `#F4F4F4` (Primary) / `#858585` (Muted)
  - Architectural Borders: `rgba(255, 255, 255, 0.12)`
  - Accent: Metallic Silver & Subtle Champagne
- **Typographic System**:
  - Display: `Cinzel` (Architectural Roman serif)
  - UI / Body: `Inter` (Geometric sans-serif)
  - Monogram & Micro-labels: High-tracking monospace (`tracking-mega`, `tracking-ultra`)
- **Core Monogram**:
  - `SLX` secondary geometric monogram integrated across loading transitions, navigation, footers, watermarks, and high-DPI favicons.
  - Text-based `SHLAVEX` wordmark.

---

## Route Architecture

| Route | Purpose | Features |
|---|---|---|
| `/` | Flagship Homepage | Exact 9-step story sequence: 01 Hero → 02 The House → 03 The Philosophy → 04 The People → 05 The Departments → 06 The System → 07 The Future → 08 Engagement → 09 Footer |
| `/about` | Institutional Dossier | Concise editorial sections: *Who We Are*, *What We Build*, *How We Think*, *How We Work*, *Where We Are Going* |
| `/people` | The People Directory | Editorial directory with 10 filter channels (*All, Leadership, Trading, Quantitative Research, Technology, Risk, Finance, Operations, Marketing, Creative*), real-time search, and layout switcher (Grid vs Ledger) |
| `/people/[slug]` | Individual Executive Dossiers | Fullscreen portrait hero, identity headers, executive profile, guiding mandate quote, core responsibilities, expertise tags, and clear return navigation |
| `/departments` | All 10 Divisions Index | Comprehensive listing of the 10 operational divisions with numbers, creeds, summaries, and leadership links |
| `/departments/[slug]` | Dedicated Division Pages | Division number, philosophy quote, mandate description, key responsibilities, interfacing areas, and division personnel with empty-state safety fallbacks |
| `/leadership` | Executive Stewardship | Dedicated spotlight on **Lavesh Dobriyal** (*Founder & CEO*) and **Shreya Sharma** (*Chief Financial Officer*), followed by senior executive officers |
| `/philosophy` | Canonical Treatise | The 5 pillars: *Precision, Discipline, Research, Adaptation, Execution* with empirical verification parameters |
| `/contact` | Institutional Engagement | Categorized inquiry channels (*General, Partnerships, Careers, Media*), strict validation, and status messaging |
| `/journal` | Research Monographs | Future-ready research dissertations and technical monographs |
| `/archive` | Institutional Ledger | Chronological milestones and architectural commissions |
| `/sitemap.xml` & `/robots.txt` | Production SEO | Auto-generated indexing of all static and dynamic paths |

---

## Structured Data Model

All employee and department information is decoupled from UI components:
- `src/data/team.ts`: Type-safe `TeamMember` records with editable fields (`[ADD BIO]`, `portrait`, `responsibilities`, `expertise`, `philosophy`). Zero invented credentials or unsubstantiated claims.
- `src/data/departments.ts`: Scalable `Department` records with numbers, creeds, leadership references, and mandates.
- `src/data/philosophy.ts`: Canonical principles with analytical verification parameters.

---

## Local Development & Execution

```bash
# Install dependencies
npm install

# Build production bundle (Static Generation)
npm run build

# Start production server
npm run start -- -p 3000
```

The flagship will be live at `http://localhost:3000`.
