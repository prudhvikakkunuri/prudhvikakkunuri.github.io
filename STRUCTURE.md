# Codebase Architecture & Modular File Structure

This repository is organized into a clean, zero-build, modular architecture designed for instant deployment on GitHub Pages (`https://prudhvikakkunuri.github.io/`) and offline viewing.

```
prudhvikakkunuri.github.io/
├── index.html                   # Main production entry point (semantic HTML skeleton)
├── STRUCTURE.md                 # Architecture documentation
├── assets/
│   └── images/                  # Profile pictures, preview graphics, favicon
│       ├── favicon.png
│       ├── image.png
│       └── workspace.jpg
├── components/                  # Isolated HTML component partials
│   ├── navbar.html              # Sticky navigation & mobile hamburger
│   ├── hero.html                # Hero banner & live status pill
│   ├── stats.html               # Stats strip & animated counters
│   ├── work.html                # Featured projects grid & category filters
│   ├── skills.html              # Tech arsenal & interactive category sidebar
│   ├── about.html               # Subject profile card, photo & terminal bio
│   ├── career.html              # Professional experience timeline
│   ├── contact.html             # Let's collab console, transmission form & socials
│   ├── modal.html               # Command Palette (CMD + K) search dialog
│   └── footer.html              # Site footer & copyright
├── css/
│   ├── variables.css            # Design tokens, color palette, fonts (:root)
│   ├── main.css                 # Master stylesheet importing all component styles
│   └── components/              # Component-scoped styling
│       ├── nav.css
│       ├── hero.css
│       ├── stats.css
│       ├── work.css
│       ├── skills.css
│       ├── about.css
│       ├── career.css
│       ├── contact.css
│       ├── modal.css
│       ├── footer.css
│       ├── animations.css       # Keyframes, scanlines, spotlight tracking
│       └── responsive.css       # Laptop (1200-1440px) & mobile breakpoints
├── js/
│   ├── main.js                  # Main orchestrator
│   └── modules/                 # Modular, encapsulated scripts
│       ├── navigation.js        # Mobile toggle & sticky scroll state
│       ├── canvas-bg.js         # Neural constellation particle physics canvas
│       ├── scroll-progress.js   # Reading progress indicator bar
│       ├── hero-typewriter.js   # Animated rotating role typewriter
│       ├── work-filter.js       # Real-time search & category pill filtering
│       ├── skills-sidebar.js    # Tech arsenal dynamic category switcher
│       ├── command-palette.js   # CMD + K modal & keyboard navigation
│       ├── stats-counter.js     # Animated number counter on scroll
│       ├── card-spotlight.js    # Cursor radial spotlight tracking
│       ├── scroll-reveal.js     # IntersectionObserver reveal animations
│       └── contact-form.js      # AJAX transmission dispatcher with fallback
└── scripts/
    └── build.py                 # Assembly script to regenerate index.html from components
```

---

## How to Work With This Project

### 1. Direct Static Hosting (Zero Build Required)
Because all CSS and JS files are modular static assets referenced natively:
- Opening [index.html](file:///c:/Users/kakku/Downloads/New%20folder/prudhvikakkunuri.github.io/index.html) in your browser works immediately.
- Pushing to GitHub deploys to GitHub Pages without needing any external build step or CI runner.

### 2. Editing Components
- **HTML Layouts**: Edit any HTML component directly in [`components/`](file:///c:/Users/kakku/Downloads/New%20folder/prudhvikakkunuri.github.io/components/).
- **Recompiling**: After modifying files in `components/`, run:
  ```bash
  python scripts/build.py
  ```
- **CSS Styles**: Edit specific styles in [`css/components/`](file:///c:/Users/kakku/Downloads/New%20folder/prudhvikakkunuri.github.io/css/components/) or tokens in [`css/variables.css`](file:///c:/Users/kakku/Downloads/New%20folder/prudhvikakkunuri.github.io/css/variables.css).
- **Interactive Logic**: Edit specific features in [`js/modules/`](file:///c:/Users/kakku/Downloads/New%20folder/prudhvikakkunuri.github.io/js/modules/).
