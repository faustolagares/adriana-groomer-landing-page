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

## Status
- **Prices** — done. Size-based (Small/Medium/Large × my place / house call) for
  Full Grooming, Mini Grooming, Spa & Bath, and the Puppy package; add-ons
  (anal $25 / teeth $10 / combo $30); house-call $200 minimum; matting / shave-down
  ($400 min, signed waiver) note. X-Large removed per Adriana.
- **Instagram** — done. Six official embeds of @adrianadepinhoalves dog-grooming reels.
- **Contact** — call / text / WhatsApp only (no form), wired to `(631) 565-9953`.

### Still open
1. **About photo** (`.photo--tall`) — still a placeholder; drop a real photo of
   Adriana with a pup into `assets/` and replace the `.photo` block with
   `<img src="assets/your-photo.jpg" alt="..." class="photo photo--tall" />`.
2. **Liability waiver / terms / insurance** — separate (legal) task. When the waiver
   document exists, link it / add an e-sign step to the "Book now" flow.

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
