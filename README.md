# Generlette Wedding Hub

Cory & Melinda’s interactive wedding hub for Monday, September 28, 2026.

## September 11 restored master build
This build was made directly from the latest ZIP supplied by Melinda and then checked against the prior Wedding Hub requests before packaging. It is a merge, not a rollback to an older app. See `FINAL_REQUEST_AUDIT.md` for the regression checklist.

### Guest experience
- Sticky Back + Menu navigation and mobile quick nav
- Wedding-day schedule / Happening Now
- Know Before You Go, directions, weather and parking
- Official Denver Parks City Park Pavilion access map + Pavilion floor plan
- City Park Pavilion photo and official Ferril Lake / Adventure Hub swan-boat information
- Sopris Garden cocktail-hour “magic surprise” prompt
- Photo-sharing + voice-message actions with mobile-safe cards
- Full guest food menu
- Wedding Passport, kids activities and Colorado trivia
- No guest-facing **Our Story** or **First Date** page
- **Our Girls** page, titled **The Heart of Our Family**
- **Wedding Party** page
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
Guest pages do **not** reveal the wedding-party entrance song, couple entrance song, or First Song title. Those cues live in the private DJ sheet. Payment amounts are not sent to normal wedding-team access. The separate `WEDDING_COUPLE_PASSCODE` enables couple-only money information and adds the payment checklist to the Bride and Groom views.

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
