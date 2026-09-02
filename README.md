# Generlette Wedding Hub

Cory & Melinda’s interactive wedding hub for September 28, 2026.

## Guest experience

- Ceremony and reception information
- Wedding-day schedule
- Directions and Sunrise Amphitheater parking-payment guidance
- Wedding-day weather cards that switch from planning normals to live forecast data when the date enters the forecast window
- Wedding Passport and unlocks
- Cory & Melinda story pages and photo scrapbook
- Wedding party / parents page
- Thank-you note
- Signature drinks and dessert signage
- Kids Corner with Catch the Bouquet, Colorado trivia and photo scavenger hunt
- External Disposable Camera: https://finallygenerlette2026.netlify.app/
- External Messages of Love: https://messages-of-love-melinda-cory.netlify.app/

## Recommended reception timing

The public schedule currently uses this planning flow:

- 3:30 PM ceremony at Sunrise Amphitheater
- approximately 4:00–4:05 PM ceremony end
- 4:05–4:35 PM family/wedding-party photos
- 5:00 PM cocktail hour at City Park Pavilion
- 6:00 PM grand entrance
- 6:05 PM First Song
- 6:15 PM welcome/blessing
- 6:20 PM dinner

This intentionally builds in a generous Boulder/Flagstaff Mountain → Denver transition cushion. Recheck traffic on the wedding day.

## Private day-of area

Routes are intentionally not in the main bottom navigation:

- `/day-of`
- `/day-of/bride`
- `/day-of/groom`
- `/day-of/ceremony`
- `/day-of/reception`

The browser does **not** contain the access code. Authentication is performed by the Netlify Function `private-dashboard`.

In Netlify, create the environment variable:

`WEDDING_PRIVATE_PASSCODE`

Use a long passcode that is not reused anywhere else. Do not commit it to GitHub.

The current coordinator/vendor content contains placeholders only. When real phone numbers, the private getting-ready address, or other sensitive logistics are added, keep those values server-side via `WEDDING_PRIVATE_DATA` or another server-side data store. Do not import sensitive data directly into React source because anything shipped to the browser is public even when the GitHub repository is private.

## Local development

```bash
npm install
npm run dev
```

The guest pages work locally. The protected area expects the Netlify Function; use Netlify Dev when testing private access locally.

## Netlify deployment

Connect this repository to a new Netlify site. Build settings are already included in `netlify.toml`.

- Build command: `npm run build`
- Publish directory: `dist`

After deployment, add `WEDDING_PRIVATE_PASSCODE` in Netlify environment variables and redeploy.
