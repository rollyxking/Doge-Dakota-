# Doge Dakota landing page

A React + Vite landing page for the Doge Dakota ($DOGEDAKOTA) project.

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

This outputs a static site to `dist/` — upload that folder's contents to any
static host (Vercel, Netlify, GitHub Pages, Cloudflare Pages, your own
server, etc.).

## Project structure

```
src/
  App.jsx              top-level layout
  config.js             contract address + Telegram/X links — edit this to update them
  index.css             all styling
  assets/mascot.jpg      hero image
  components/
    Nav.jsx
    Marquee.jsx
    Hero.jsx
    About.jsx
    Join.jsx
    Footer.jsx
    CopyButton.jsx       "Copy CA" button with clipboard + fallback
```

## Editing content

- **Contract address / Telegram / X links:** edit `src/config.js`.
- **Headline, copy, section text:** edit the relevant file in `src/components/`.
- **Colors:** edit the CSS variables at the top of `src/index.css` (`--flash`,
  `--flash-2`, `--gold`, `--bg`, etc).
- **Mascot image:** replace `src/assets/mascot.jpg` with a new file of the
  same name, or update the import path in `src/components/Hero.jsx`.
