# Wedding Hub Master Audit — September 10, 2026

This is the consolidated build. It was checked against the earlier GitHub-ready, binder-update, navigation-speed, parking-map, and photo/audio-priority packages so newer changes would not erase older requested features.

## Guest-facing
- Cory & Melinda branding, date, Colorado editorial/scrapbook styling
- Sticky Back + Menu header and five-item mobile quick navigation
- Strong Photo + Audio Guestbook actions on Home, Reception and Messages of Love
- Know Before You Go FAQ
- Wedding Weekend + Costa Rica honeymoon pages
- Day-of schedule + Denver-time Happening Now card
- Ceremony page with traditional vows only, mothers’ roses, family joining and Daughter charms
- Reception food menu visible to guests; private music titles hidden
- Anniversary Dance at 8:15 PM
- Directions to both venues
- Official Denver Parks City Park Pavilion access/parking PDF embedded + linked
- Pavilion exterior/garden reference and supplied floor plan, including inside-Pavilion restroom guidance
- Ferril Lake / Adventure Hub swan-pedal-boat information restored
- Weather + Boulder parking / ParkMobile guidance
- Wedding Passport, Colorado trivia, Junior Wedding Explorers and Catch the Bouquet
- Our Story + detailed funny First Date page restored
- Our Crew + Our People with Patricia Roberts and Patricia Generlette
- Signature drinks / dessert content
- Messages of Love written-note form
- Gifts & Well Wishes / honeymoon-fund page
- Installable/offline shell support and guest-alert function
- Image lightboxes and lazy-loaded media

## Private wedding-team area
- Day-of Command Center with role tabs
- Vendor Directory
- Bride and Groom pages
- Ceremony Coordinator / Nessa page
- Reception Coordinator / Tammy page + décor binder
- DJ / MC printable sheet with every named wedding-party introduction
- Officiant / Bertram detailed speaking outline
- Couple-only payment details; amounts are not returned to normal team access
- Current food/vendor corrections: Christian, Maggiano’s 5:00 PM delivery, Kool Jamaican Kitchen
- Current private DJ cues retained only in the private Netlify function

## Superseded content intentionally excluded
Older planning versions contained personal vows, parent dances, old reception timing and the older Heartbeat plan. Those are not restored because later decisions superseded them. The homemade City Park parking diagram and outdoor-restroom callouts were also removed.

## Technical checks
- Merged route set contains all useful routes found across the prior versions.
- All currently referenced local image assets exist.
- Public source contains no private reception song titles and no payment amounts.
- JSX/JS syntax passed TypeScript parser validation.
- Netlify functions passed Node syntax validation.
- Full local npm install timed out in this environment, so Netlify should perform the production Vite build after upload.
