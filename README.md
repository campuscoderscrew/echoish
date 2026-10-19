# Echoish at UMD

Website for **Echoish**, a student-run music and service club at the University of Maryland.
Built by Campus Coders Crew from the CCC website boilerplate (Vite + React 19 + TypeScript + Tailwind v4 + React Router).

Use Prettier for formatting.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # type-check, build, 404 fallback, short-link redirects
```

## Deploying

Pushing to `main` deploys. `.github/workflows/deploy.yml` builds the site and
publishes it to GitHub Pages (one-time setup: Settings → Pages → Source =
"GitHub Actions"). You can also redeploy from the Actions tab → Run workflow.

The workflow picks the base path from the Pages settings: `/` when a custom
domain (echoish.lol) is set, `/echoish/` on `github.io`. Locally, `npm run build`
defaults to `/echoish/`; build with `VITE_BASE=/` to test the root-domain version.
`vite.config.ts` → `base` and `main.tsx` → `BrowserRouter basename` read the
same value, so routing follows automatically.

## Where to edit things

| What                                            | File                                           |
| ----------------------------------------------- | ---------------------------------------------- |
| Discord, calendar, Instagram, email, Linktree   | `src/data/links.ts` **and** `drive-links.json` |
| "What we do" cards                              | `src/data/tracks.ts`                           |
| Past events ("setlist")                         | `src/data/setlist.ts` (newest at the top)      |
| Colors, fonts, paper/tape/sticker/button styles | `src/index.css`                                |
| Page sections                                   | `src/components/HomePage/*`                    |

### Short links

`drive-links.json` generates redirect pages at build time, e.g.
`/echoish/discord`, `/echoish/calendar`, `/echoish/instagram`, `/echoish/linktree`.
Put those on flyers and QR codes: when the Discord invite changes, update the
JSON and redeploy, and every printed flyer keeps working.

## Design notes

The look comes from the club's Instagram flyers: a scrapbook / album-sleeve feel
with cream paper, washi tape, stickers, handwriting, vinyl, and warm poster colors
(turtle green, rust, marigold, blush, plum). The page is laid out like an album:
cover (hero) → liner notes (about) → tracklist (what we do) → B-side (past events)
→ on tour (calendar) → back cover (contact).

- Fonts are self-hosted from npm (`@fontsource`): Fraunces (display), DM Sans (body),
  Caveat (handwriting), DM Mono (labels).
- Animations only use `transform`/`opacity` on small elements and are all turned
  off under `prefers-reduced-motion`.
- The calendar embed needs the Google Calendar to be **public**. If it isn't, the
  embed shows "no access"; the "Add to my calendar" button still works.
