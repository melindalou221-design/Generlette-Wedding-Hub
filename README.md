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


## September 10 City Park + mobile reception update
- Replaced the generic City Park activities link with Denver Parks & Recreation's official Adventure Hub rental page.
- Added wedding-day swan-pedal-boat details for Monday, Sept. 28: 3:30–8:00 PM, last rental 7:00 PM, $35/hour for a 4-person swan, first-come/first-served, no reservation required, PFDs included.
- Added a City Park/Pavilion map section plus direct Google Maps, Apple Maps and official Denver Pavilion access-map buttons.
- Added City Park and swan-boat imagery to the guest directions section.
- Reworked the reception photo/audio guestbook cards so they render as normal mobile cards instead of oversized pill/oval shapes.
- Bumped the service-worker cache to v11 so the visual changes replace older cached styles after deployment.
