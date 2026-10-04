---
description: Comprehensive portfolio engineering standards, modular architecture, responsive invariants, and UI patterns
globs: ["*.html", "*.css", "*.js", "*.py"]
always_on: true
---

# Portfolio Engineering & Design Standards

## 1. Brand Identity & Header Conventions
- **Brand Logo**: The top navigation brand must render as `>_ prudhvi [.ai]`:
  ```html
  <a href="#hero" class="brand-terminal" aria-label="prudhvi.ai">
    <span class="prompt">&gt;_</span>
    <span>prudhvi</span><span class="site-box">.ai</span>
  </a>
  ```
- **Navigation Invariants**:
  - `header#top-nav .container` must use fluid padding: `0 clamp(12px, 1.6vw, 24px)`.
  - On laptop screens (<= 1280px), the search trigger hides the word "SEARCH" (`.cmd-k-trigger span:not(.badge) { display: none; }`), and `.btn-angled-lime` uses `padding: 8px 14px; font-size: 0.82rem;` so the button maintains a healthy right margin and never clips.

## 2. Responsive Invariants & Viewport Boundaries (100% Zoom Laptop & Mobile)
- **Laptop Screens (1100px – 1280px at 100% Zoom)**:
  - Global Container: `.container` must have `padding: 0 16px;` on <= 1280px to prevent horizontal page scrolling (`scrollWidth <= window.innerWidth`).
  - Skills Arsenal Grid:
    - Sidebar column: `minmax(180px, 230px)` with `overflow: hidden; text-overflow: ellipsis; white-space: nowrap;`.
    - Cards grid: `repeat(3, minmax(0, 1fr))` with `gap: 12px; min-width: 0;`.
    - Card titles: `font-size: clamp(0.78rem, 0.88vw, 0.92rem); line-height: 1.25; word-break: break-word; hyphens: auto;` to prevent text from forcing grid expansion.
- **Mobile Viewports (< 768px)**:
  - Multi-card technical sections must use a compact 2-column layout (`grid-template-columns: repeat(2, 1fr)`) instead of tall 1-column stacks.
- **Hero & About Viewport Sizing**:
  - Use fluid typography with `clamp()` (e.g., `clamp(1.5rem, 4vw, 3rem)`) and restrained padding so the entire section remains visible in the initial viewport.

## 3. Project Showcase & Timeless Presentation
- **No Year Numbers**: Do NOT display year numbers (e.g., 2024, 2026) on project cards. Projects must be identified solely by their technical category badge (`AGENTIC AI`, `HYBRID RAG`, `MACHINE LEARNING`) to ensure a timeless, evergreen showcase.
- **Two-Button Action Pattern**: Every project card with an active deployment must feature:
  1. Primary Button: `<a class="btn-project-primary"><i class="fa-solid fa-arrow-up-right-from-square"></i> VIEW DEMO ↗</a>`
  2. Secondary Button: `<a class="btn-project-secondary"><i class="fa-brands fa-github"></i> SOURCE ↗</a>`
- **Corner Links**: The top-right `.arrow-external-link` must link directly to the live demo (fallback to GitHub only if no demo exists).
- **Command Palette (CMD + K) Synchronization**: Any addition or modification of projects, demo links, or career items must also be updated in `searchDirectory` inside `js/modules/command-palette.js`.

## 4. Contact, Forms & Professional Profiles
- **Form Dispatch Reliability**: Contact forms must attempt AJAX submission and gracefully fall back to a pre-filled direct `mailto:` link on any network or API error so messages are never dropped.
- **Email Typography**: Contact emails must always have `white-space: nowrap;` to prevent breaking mid-address.
- **Action Copy**: Maintain clear, professional action labels (e.g., "Send a Message", "Direct Email", "Send Message ✈") rather than cryptic metaphors.
- **Developer Social Profiles**: In the collaboration section, include LeetCode (`https://leetcode.com/u/prudhvi_28/`) with its official SVG alongside HackerRank, GitHub, and LinkedIn.

## 5. Modular Codebase Maintenance Workflow
- **Component Synchronization**: When modifying HTML layout or copy, update the appropriate partial in `components/*.html` and re-compile using:
  ```bash
  python scripts/build.py
  ```
- **Static Hosting Guarantee**: Always verify that scripts and stylesheets load cleanly without build runners or bundlers so the site deploys instantaneously to GitHub Pages.
