# Cory & Melinda Wedding Hub — Master Merge Audit

Updated: September 10, 2026

This package was rebuilt as a merge of the earlier Wedding Hub versions rather than as another replacement. The route/feature sets in the GitHub-ready, binder, navigation-speed, parking, and photo/audio-priority packages were compared and the useful features were consolidated here.

## Guest-facing features preserved / restored
- Persistent sticky Back + Cory & Melinda + Menu header.
- Five-item mobile quick navigation.
- Faster image behavior: lazy loading and asynchronous image decoding remain in place.
- Strong photo + audio guestbook emphasis restored on Home, Reception, and Messages of Love.
- Know Before You Go FAQ.
- Wedding Weekend and Costa Rica honeymoon pages.
- Wedding-day schedule + Happening Now behavior in America/Denver time.
- Ceremony page with traditional vows, family joining, Daughter charms and mountain parking guidance.
- Reception page with the full food menu while private reception song titles stay hidden.
- Anniversary Dance included at 8:15 PM.
- Directions and weather/parking pages.
- Official Denver Parks & Recreation City Park Pavilion access/parking PDF embedded/linked instead of a homemade map.
- Pavilion reference photos and the supplied Pavilion floor plan included; reception restroom guidance points guests to facilities inside the Pavilion.
- Swan/pedal boat information restored for Ferril Lake / Adventure Hub, with same-day availability language.
- Wedding Passport, Colorado trivia, Junior Wedding Explorers and Catch the Bouquet.
- Our Story restored and rewritten with the detailed funny first-meeting story.
- Dedicated First Date page restored, including Jenga, running shoes/leggings, broken glasses, the puppy/bone ending, and the Dave & Buster’s Halo/Jurassic Park second date.
- Our Crew + Our People pages, including Patricia Roberts and Patricia Generlette.
- Signature Drinks, dessert and kids-sign content.
- Messages of Love written-note form.
- Gifts & Well Wishes / Costa Rica honeymoon fund.
- PWA manifest, service worker, install prompt support and offline shell restored.
- Guest-alert Netlify function restored.
- Image lightbox behavior for visual guides.

## Private wedding-team features preserved / updated
- Password-protected Day-of Command Center.
- Dedicated Vendor Directory.
- Bride and Groom guides.
- Ceremony Coordinator / Nessa guide.
- Reception Coordinator / Tammy guide and décor binder.
- DJ / MC cue sheet with the wedding party named in introduction order.
- Officiant / Bertram detailed speaking outline.
- Traditional vows only — personal vows removed.
- Couple-only payment amounts; team/coordinator/DJ/officiant views do not receive amounts.
- Couple access can see payment reminders on Bride and Groom views plus the Couple Money page.
- Updated vendors: Christian (makeup), Maggiano’s (Italian, 5:00 PM delivery), Kool Jamaican Kitchen.
- Private reception music retained only in the private function: wedding-party entrance, couple entrance, first dance and cake-cutting track.
- Anniversary Dance DJ instructions included.
- Reception coordinator notes now distinguish official Denver parking guidance from the venue-staff overnight-parking safety guidance.

## Intentionally NOT restored because newer decisions supersede it
- Personal vows from older planning documents.
- Mother-son / father-daughter dance blocks from older timelines.
- Older reception/ceremony timing that predates the current 3:30 PM ceremony / 5:00 PM cocktail-hour plan.
- Older Heartbeat first-song plan where it conflicts with the newer private DJ cue sheet.
- The homemade City Park parking diagram.
- Outside-Pavilion restroom callouts for reception guests.

## Verification performed
- Compared route/feature presence across all Wedding Hub ZIP versions available in the project workspace.
- Confirmed the merged app contains the union of the useful old and new routes.
- Confirmed all 27 image references in current source/private binder resolve to files in public/images.
- Confirmed no private reception song titles appear in public src files.
- Confirmed no payment amounts appear in public src files.
- TypeScript parser syntax check completed successfully for App.jsx, data.js and main.jsx.
- Node syntax checks completed successfully for private-dashboard.mjs and public-config.mjs.
- Full npm dependency installation could not be completed in this environment because npm install timed out; Netlify should perform the production Vite build after upload.


## September 10 follow-up merge
- Preserved the current master build from the uploaded `Generlette-Wedding-Hub-One-Zip-No-Seating-Chart` package.
- Corrected Ferril Lake / swan-boat guest information to use Denver Parks & Recreation's official Adventure Hub page and current fall 2026 hours/rates.
- Added a visible City Park destination map and strengthened the official Pavilion access-map placement.
- Added swan-boat photography beside the existing City Park Pavilion reference imagery.
- Fixed the mobile Reception memory cards so the camera and voice-message calls to action no longer appear as giant circles/ovals or clip their CTA text.
