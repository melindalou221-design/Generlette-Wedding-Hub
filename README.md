# Generlette Wedding Hub

Cory & Melinda’s interactive wedding hub for September 28, 2026.

## What is included

### Guest-facing hub
- Ceremony and reception information
- Wedding-day schedule
- Directions and Sunrise Amphitheater parking-payment guidance
- Wedding-day weather planning/live forecast behavior
- Wedding Passport and unlocks
- Cory & Melinda story pages and real photo scrapbook
- Wedding party / parents page
- Thank-you note
- Signature drinks and dessert signage
- Kids Corner with Catch the Bouquet, Colorado trivia and photo scavenger hunt
- Disposable Camera: https://finallygenerlette2026.netlify.app/
- Messages of Love: https://messages-of-love-melinda-cory.netlify.app/

### Protected day-of binder
Routes are intentionally kept out of the main guest navigation:
- `/day-of`
- `/day-of/bride`
- `/day-of/groom`
- `/day-of/ceremony`
- `/day-of/reception`
- `/day-of/dj`
- `/day-of/officiant`

The private binder includes bride/groom timelines, ceremony processional + music cues, coordinator checklists, vendors/payment reminders, food delivery plan, printable DJ/MC sheet, Bertram’s officiant outline, floral guides and reception décor visuals.

## Current reception planning flow
- 3:30 PM ceremony at Sunrise Amphitheater
- approximately 4:00–4:05 PM ceremony end
- 4:05–4:35 PM family/wedding-party photos
- 4:45 PM early reception arrivals if setup is ready
- 5:00 PM official cocktail hour
- 6:00 PM grand entrance
- 6:05 PM First Song
- 6:15 PM Frank Roberts dinner blessing + remarks
- 6:20 PM dinner
- about 6:55–7:00 PM toasts: Shalee → Michael → Miah & Londyn together

Recheck actual Monday traffic on the wedding day.

## Included coordinator décor references
The project now contains the current visual binder assets in `public/images`:
- `decor-reception-vision.jpg`
- `decor-welcome-seating.jpg`
- `decor-reception-shopping-list.jpg`
- `decor-sweetheart-table.png` — **current final mockup**
- `bridal-bouquet-guide.jpg`
- `wedding-flower-ordering-guide.jpg`

### Current sweetheart-table direction
- Gold **Mr & Mrs** tabletop sign
- Ivory/champagne linen
- Hydrangea-forward white + soft-blue florals
- White roses + baby’s breath
- Only a few light-blue delphinium stems
- Light eucalyptus/greenery across the front
- Warm-gold vine fairy lights woven through the front greenery
- Restrained floating LED cylinders/votives
- No fairy-light backdrop behind the table
- Less greenery and fewer candles than the original concept

Closer to the wedding, stage the real décor and add a photo named `final-sweetheart-setup.jpg` to `public/images`. The Reception Coordinator page already contains a placeholder for that photo.

### Decoration boxes
The private Reception Coordinator binder recommends packing and labeling décor by setup zone:
- Sweetheart Table
- Welcome + Seating Chart
- Guest Tables
- Cake + Dessert
- Bar + Signs
- Buffet
- Kids Table
- Emergency / Extras

A photo booth is **not currently planned** and is excluded from the active setup plan.

## Floral binder
The Bride page now displays the uploaded **Bridal Bouquet Complete Guide** and **Wedding Flower Ordering Guide**. The written bouquet recipe and wearable notes have been reconciled to those current guides rather than the older estimated counts.

## Private access / Netlify
The browser does **not** contain the access code. Authentication is performed by the Netlify Function `private-dashboard`.

In Netlify, add the environment variable:

`WEDDING_PRIVATE_PASSCODE`

Use a long passcode that is not reused anywhere else. Do not commit the real passcode to GitHub.

Sensitive phone numbers, private addresses and credentials should remain server-side or in Netlify environment variables rather than React/browser source.

## Local development
```bash
npm install
npm run dev
```

For private-area testing, use Netlify Dev so the function is available.

## Netlify deployment
Connect the GitHub repository to Netlify. `netlify.toml` already contains the build configuration.

- Build command: `npm run build`
- Publish directory: `dist`

After deployment, add `WEDDING_PRIVATE_PASSCODE` in Netlify environment variables and redeploy.

## GitHub upload
See `UPLOAD_TO_GITHUB.md` for the easiest upload sequence.
