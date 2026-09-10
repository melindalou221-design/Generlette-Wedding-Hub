# Generlette Wedding Hub

Cory & Melinda’s interactive wedding hub for Monday, September 28, 2026.

## Current master build
This package is a merge of the prior Wedding Hub versions rather than a replacement. See `MASTER_MERGE_AUDIT.md` and `APP_AUDIT.md` for the regression check.

### Guest experience
- Sticky Back + Menu navigation and mobile quick nav
- Wedding-day schedule / Happening Now
- Know Before You Go, directions, weather and parking
- Official Denver Parks City Park Pavilion access map
- Pavilion floor plan with inside-restroom guidance
- Ferril Lake / swan-pedal-boat information
- Strong Add Your Wedding Photos + Leave a Voice Message actions
- Full guest food menu
- Wedding Passport, kids activities and Colorado trivia
- Our Story + First Date
- Our Crew + Our People
- Signature drinks, dessert, written messages, honeymoon and gifts pages
- Install/offline support

### Private day-of binder
Protected routes include:
- `/day-of`
- `/day-of/vendors`
- `/day-of/money` (couple code only)
- `/day-of/bride`
- `/day-of/groom`
- `/day-of/ceremony`
- `/day-of/reception`
- `/day-of/dj`
- `/day-of/officiant`

The private binder contains the full vendor directory, bride/groom timelines, floral binder, ceremony processional/music cues, Nessa and Tammy operational pages, reception décor binder, DJ cue sheet with named introductions, Bertram’s detailed officiant script, and couple-only money reminders.

## Important privacy behavior
Guest pages do not reveal the private reception song titles. Payment amounts are not sent to normal wedding-team access. The separate `WEDDING_COUPLE_PASSCODE` enables couple-only money information.

## Netlify environment variables
Configure these in Netlify rather than committing real values:
- `WEDDING_PRIVATE_PASSCODE`
- `WEDDING_COUPLE_PASSCODE`
- `WEDDING_GETTING_READY_ADDRESS`
- `WEDDING_VENDOR_CONTACTS`
- `WEDDING_GUEST_ALERT_MESSAGE` (optional)
- `WEDDING_GUEST_ALERT_LINK` (optional)
- `WEDDING_PRIVATE_DATA` (optional advanced override)

After changing environment variables, redeploy the site.

## Deployment
- Build: `npm run build`
- Publish: `dist`
- Netlify Functions: `netlify/functions`

See `UPLOAD_TO_GITHUB.md` for upload instructions.
