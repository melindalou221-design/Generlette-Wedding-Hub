# Generlette Wedding Hub

Cory & Melinda · September 28, 2026 · #FinallyGenerlette

A mobile-first wedding guest hub plus a protected day-of binder for Cory, Melinda, coordinators, DJ/MC and officiant.

## Guest experience
- Persistent Back + Menu navigation and five-button mobile quick bar
- Know Before You Go guest FAQ
- Wedding-day schedule with Colorado-time “Happening Now” behavior
- Ceremony details, directions, weather + Flagstaff Mountain parking guidance
- Reception food menu while surprise music cues stay off guest pages
- Find My Table: search by guest name, actual seating-chart image, Colorado table-sign visuals and Table 9 fallback
- Our Story + full First Date story
- Our Crew + Our People
- Wedding Passport, Colorado trivia, Junior Wedding Explorers and Catch the Bouquet
- Signature drinks, dessert signage, Messages of Love, disposable camera and honeymoon pages
- Add-to-calendar links for ceremony/reception
- Larger-text accessibility option
- Installable PWA / offline shell after first load

## Protected day-of binder
Private routes:
- `/day-of`
- `/day-of/vendors`
- `/day-of/bride`
- `/day-of/groom`
- `/day-of/ceremony`
- `/day-of/reception`
- `/day-of/dj`
- `/day-of/officiant`
- `/day-of/money` — couple-code only

The private binder includes quick-mode day-of cues, vendor directory, bride/groom plans, ceremony processional + music cues, reception setup/decor guide, floral guides, DJ/MC introduction order, and Bertram’s expanded officiant speaking sheet.

### Ceremony decisions reflected here
- Traditional repeat-after-me vows; no personal vows
- Opening reflection / blessing addressed to everyone gathered
- Mother rose presentation names Patricia Generlette and Patricia Roberts; current working placement is before the vows and should be confirmed at rehearsal
- Family joining moment with Miah + Londyn and Daughter Pandora charms

### Reception decor direction
- Gold **Mr & Mrs** sign
- Ivory/champagne linen
- Hydrangea-forward white + soft-blue florals
- White roses + baby’s breath, only a few light-blue delphinium stems
- Light greenery across the front
- Warm-gold vine fairy lights woven through the front greenery only
- Restrained LED floating cylinders/votives
- No light backdrop behind the sweetheart table
- No photo booth currently planned
- Decor packed in labeled boxes by setup zone; real setup photos can be added closer to the wedding

## Security — important
**Keep the GitHub repository Private before uploading this package.** The protected binder is served through a Netlify Function, but the function source contains wedding-team planning details that should not live in a public repository.

Configure in Netlify:
- `WEDDING_PRIVATE_PASSCODE` — wedding-team access
- `WEDDING_COUPLE_PASSCODE` — separate Cory & Melinda access; unlocks the couple-only Money + Payments page
- `WEDDING_VENDOR_CONTACTS` — optional JSON containing private vendor phone/email information
- `WEDDING_GUEST_ALERT` — optional guest-facing alert banner; leave blank normally
- `WEDDING_GUEST_ALERT_LINK` — optional link paired with the alert

After changing Netlify environment variables, trigger a new deploy.

## Current visual assets
Optimized images live under `public/images`, including:
- `decor-sweetheart-table.webp`
- `decor-reception-vision.webp`
- `decor-welcome-seating.webp`
- `decor-reception-shopping-list.webp`
- `bridal-bouquet-guide.webp`
- `wedding-flower-ordering-guide.webp`
- `city-park-pavilion-seating-chart.webp`
- `table-signs/table-1.webp` through `table-9.webp`

Closer to the wedding, add a real staged sweetheart-table photo and update the Reception Coordinator visual reference.

## Local development
```bash
npm install
npm run dev
```

For private-area testing, use Netlify Dev so serverless functions are available.

## Netlify deployment
`netlify.toml` is included.
- Build command: `npm run build`
- Publish directory: `dist`

See `UPLOAD_TO_GITHUB.md` for the upload checklist.
