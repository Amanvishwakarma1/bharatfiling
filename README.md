# Bharat Filing — Coming Soon

Pre-launch website for **Bharat Filing** — *Compliance. Simplified.*

Built with React 19, Vite, Tailwind CSS v4 and Lucide icons.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
npm run preview   # serve the production build locally
```

> Don't open the root `index.html` with a static server such as VS Code Live Server. It points at the
> React source (`src/main.jsx`), which only Vite can compile. Use `npm run dev`, or run `npm run build`
> and open `dist/index.html`. The build uses relative paths, so it works from any folder or host.

## Configuration

| Where | What |
| --- | --- |
| `.env` → `VITE_SITE_URL` | Public URL (no trailing slash). Used for the canonical link, Open Graph and structured data. |
| `src/config/site.js` | Contact email (used by every "Contact Us" button), location, social profile URLs and navigation. Social icons without a URL show as "coming soon" (not clickable). |
| `src/components/LegalDialog.jsx` | Pre-launch Privacy Policy / Terms summaries shown in the footer. Have these reviewed before launch. |

## Structure

```
src/
  App.jsx                 page composition
  components/
    Navbar.jsx            floating sticky nav + accessible mobile menu
    Hero.jsx              headline, CTAs, trust line
    HeroVisual.jsx        scalable CSS/SVG documents + compliance composition
    Services.jsx          four "coming soon" service cards
    WhyUs.jsx             benefits (#about)
    Launch.jsx            launch announcement + roadmap
    Footer.jsx            contact, socials, legal (#contact)
    LegalDialog.jsx       native <dialog> policy summaries
    ui/                   Button, Logo, Reveal, SectionHeading, social icons
  lib/cn.js               class-name helper
  hooks/useScrolled.js
public/                   favicon, apple-touch-icon, og-image, robots.txt
```

Design tokens (colours, fonts, shadows, easing) live in the `@theme` block of `src/index.css`. All motion respects `prefers-reduced-motion`.
