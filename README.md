# Adriana Groomer — Landing Page

Single-page, fully responsive landing page for Adriana, a dog groomer in Manhattan
(studio + house calls). Static HTML/CSS/JS — no build step, deploy-ready for Vercel.

## Files
- `index.html` — page content
- `styles.css` — styles (brand colors + Franci / Inter fonts, no shadows)
- `script.js` — mobile menu, scroll reveal, footer year
- `assets/` — logos, self-hosted Franci fonts, and the brand "bolha" (bubble) graphics
- `Logos/` — original brand logos, bubbles + color palette reference

## Run locally
```bash
python3 -m http.server 5050
# open http://localhost:5050
```

## ⚠️ Before going live — fill in the placeholders
Search the code for these and replace:

1. **Prices** — every `$[XX]` in `index.html` (Spa & Bath, Mini Grooming,
   Puppy's first spa, and the Anal gland / Teeth cleaning add-ons).
   Full Grooming ($180 my place / $250 house call) is already set.
2. **Instagram handle** — replace every `adrianagroomer` in the Instagram
   section (and footer, if added) with the real handle.
3. **Live Instagram feed** (optional) — the Instagram section currently shows
   placeholder tiles. To show the real feed, swap the `<div class="insta__grid">…</div>`
   for a free widget embed. No server needed — easiest options:
   - **LightWidget** (https://lightwidget.com) → gives an `<iframe>` you paste in.
   - **Behold.so** (https://behold.so) → gives a `<script>` + web component.
   Both have free tiers; see the comment block in the Instagram section of `index.html`.
4. **Photos** — real photo slots ready to fill:
   - Hero (`.photo--hero`) — **done** (`assets/dog-adriana.png`)
   - About (`.photo--tall`) — Adriana with a pup (still a placeholder)
   - Size cards — **done** (`assets/{small,medium,large,x-large}-dog.png`)
   Drop real images into `assets/` and replace the `.photo` block with
   `<img src="assets/your-photo.jpg" alt="..." class="photo photo--tall" />`.

Contact is now call / text / WhatsApp only (no form), all wired to `(631) 565-9953`.

## Brand
- Colors: ink `#14110f`, paper `#f6f3ee`, soft pink `#f4739e`, gray `#d1d1d1`
- Fonts: **Franci** (display headings, self-hosted in `assets/fonts/`) + **Inter** (body)
  - Note: the supplied Franci is a *trial* cut covering A–Z, a–z, 0–9 and basic
    punctuation. Glyphs it lacks (apostrophes, `&`, `$`, parentheses) fall back to
    Inter automatically. Swap in the full licensed Franci files (same file names)
    when available for perfect consistency.
- Bubbles: brand "bolha" graphics used as decorative floating accents
- Phone: (631) 565-9953 · Area: Manhattan, NYC

## Design notes
- No drop shadows anywhere (per brand direction).
- Buttons are single-action, max two words, and never wrap to two lines.
- Reveal animations are progressive enhancement and respect
  `prefers-reduced-motion`.
