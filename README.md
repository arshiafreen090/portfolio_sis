# Sabiha — Personal Creative Portfolio

React + Vite + Tailwind CSS v4 + Lucide + Framer Motion. Single page: Hero, About, Projects (AI UGC / Scripting + Content / Blogs + Case Study + SEO), Skills, Contact, Footer.

## Run it

```bash
npm install
npm run dev      # local preview
npm run build    # production build in /dist
```

Deploys as-is on Vercel or Netlify (framework preset: Vite).

## Updating content

All content lives in `src/data/`. Components never need editing for a content change.

| What | File |
| --- | --- |
| Name, intro, bio, photos, resume link, social links | `src/data/socialLinks.js` |
| The two AI UGC Instagram accounts + their 3 videos each | `src/data/ugcAccounts.js` |
| Scripting account, static posts gallery, scripts | `src/data/scriptingProjects.js` |
| Blog articles | `src/data/blogs.js` |
| Case study + SEO showcase | `src/data/caseStudies.js` |
| Skills and tools | `src/data/skills.js` |

Anything in `[square brackets]` is a placeholder waiting for real info. No metrics, rankings or achievements are invented anywhere.

### Images, videos, documents

1. Drop files into `public/images`, `public/videos` or `public/documents`.
2. Point the matching field at it, e.g. `thumbnail: "/images/ugc/video-1.jpg"`.

While an image field is `""` the site shows a styled placeholder, so it can be filled in gradually.

- Video thumbnails: 9:16. Optional `preview: "/videos/clip.mp4"` plays muted on hover (keep clips short and compressed).
- Hero photo: portrait, about 4:5. Instagram screenshots: any ratio, shown uncropped.
- Resume: put the PDF in `public/documents` and set `profile.resumeUrl`.
- Social share image: add `public/images/og-cover.jpg` (1200x630).

## Design tokens

Colours, fonts and shadows are in the `@theme` block at the top of `src/index.css`. Fonts (Fraunces, DM Sans, Caveat) load from Google Fonts in `index.html`.
