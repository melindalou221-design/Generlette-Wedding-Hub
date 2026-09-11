# Cory & Melinda Wedding Hub — Master Merge Audit

Updated: September 11, 2026

This package is based directly on the latest Wedding Hub ZIP supplied by Melinda and then reconciled with prior requested changes. It is intended to stop the regression problem where one fix accidentally removed earlier work.

## Restored / preserved guest features
- Persistent Back + Cory & Melinda + Menu header and mobile quick navigation.
- Faster/lazy image behavior and mobile-safe photo/audio memory cards.
- Know Before You Go, Wedding Weekend, schedule/Happening Now, ceremony, reception, directions, weather/parking, Passport, kids, drinks, messages, gifts and Costa Rica pages.
- No guest-facing **Our Story** or **First Date** page.
- **Our Girls** is the menu label; **The Heart of Our Family** is the page title.
- **Wedding Party** replaces the generic wedding-party title.
- Patricia Roberts and Patricia Generlette are correctly named.
- Guest food menu remains visible.
- Reception song titles remain private.
- Official Denver City Park Pavilion access map and floor plan.
- Correct Swan Boat / Adventure Hub information.
- Correct **Sopris Garden** cocktail-hour magic-surprise prompt.

## Restored / preserved private features
- Day-of Command Center and Vendor Directory.
- Bride/Groom, Nessa, Tammy, DJ and Bertram role pages.
- Detailed officiant speaking outline and traditional vows only.
- DJ cue sheet with the complete named introduction order.
- Wedding-party entrance, couple entrance and First Song titles/instructions live only in the private DJ data.
- Payment amounts are couple-only; coordinator/DJ/officiant/vendor views do not receive them.
- `WEDDING_COUPLE_PASSCODE` enables the Couple Money page and Bride/Groom payment checklist.
- Reception coordinator includes Sopris Garden magician operations while the public copy preserves the surprise.

## Later decisions override older files
Older planning documents may still mention personal vows, parent dances or earlier timing. The active app does not use those superseded items. For the complete item-by-item regression check, see `FINAL_REQUEST_AUDIT.md`.
