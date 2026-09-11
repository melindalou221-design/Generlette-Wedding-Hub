# Wedding Hub Final Request Audit — September 11, 2026

This checklist was completed against the latest ZIP supplied by Melinda plus the later corrections made in chat. Later decisions take precedence over older planning documents.

## Navigation + mobile
- [x] Persistent Back control and Menu on interior pages.
- [x] Five-item mobile quick navigation remains available.
- [x] Image lazy loading / async decoding retained for speed.
- [x] Reception photo/voice-message cards use normal mobile card sizing rather than giant circles/ovals.
- [x] Service-worker cache version bumped so phones are less likely to keep an obsolete page after deployment.

## Public story + people pages
- [x] No **Our Story** or **First Date** guest page; both were removed at Melinda’s request.
- [x] Story includes Melinda arriving from work in running shoes/leggings, the mutually chosen low-key college-hangout setting, Jenga and the disputed win, the broken-glass pile Cory quietly handled, the puppy/bone snarl, and the Halo/Jurassic Park Dave & Buster’s second date.
- [x] Story keeps the tone light/funny without losing the real details.
- [x] Generic **Our Crew** / names-as-title replaced with **Our Girls**, with page title **The Heart of Our Family**.
- [x] Generic **Our People** page title replaced with **Wedding Party**.
- [x] Miah and Londyn remain identified as Cory & Melinda’s daughters and as bridesmaids.
- [x] Bride’s mother is Patricia Roberts. Groom’s mother is Patricia Generlette.

## Ceremony
- [x] Traditional vows only; no personal-vow language on the active ceremony or private officiant sheet.
- [x] Detailed Bertram/officiant speaking outline retained: welcome, opening reflection, mothers’ roses, marriage transition, declaration of intent, repeat-after-me vows, rings, family joining, pronouncement, kiss, final blessing and presentation/recessional cue.
- [x] Family joining centers Miah and Londyn and the two Pandora “Daughter” charms.
- [x] Current mothers’ rose working placement is before vows, with rehearsal note acknowledging the older binder placement after the kiss.
- [x] Current processional order and ceremony music cues retained.

## Reception + guest visibility
- [x] Guest food menu remains public: Italian menu plus jerk chicken and rice & peas.
- [x] Guests can see there is a special First Song moment, but **not the song title**.
- [x] Wedding-party entrance song and couple entrance song are absent from public source.
- [x] Private DJ sheet retains the actual entrance songs and the First Song instructions.
- [x] DJ sheet includes the full named wedding-party introduction order.
- [x] No mother-son or father-daughter dance blocks.
- [x] Anniversary Dance remains at 8:15 PM.
- [x] Glow-stick send-off remains at 10:40 PM.
- [x] Late-night snack remains 9:30 PM with food still unconfirmed.

## City Park / cocktail hour
- [x] Generic City Park Alliance activity link removed from the Swan Boat experience.
- [x] Official Denver Adventure Hub link used for Ferril Lake rentals.
- [x] Wedding-day Swan Boat card includes Monday fall hours, last-rental timing, 4-person swan-boat rate, first-come/first-served language, life jackets, waiver and weather/lightning caveat.
- [x] City Park Pavilion exterior image retained.
- [x] Official City Park Pavilion access/parking PDF is embedded and linked.
- [x] Google Maps and Apple Maps still route guests to City Park Pavilion.
- [x] **Sopris Garden** is named correctly. Public copy invites guests to stroll there during cocktail hour for a little “magic surprise” without revealing the performer.
- [x] Reception-coordinator notes include the operational Sopris Garden magician cue.

## Private binder / vendors / money
- [x] Dedicated private Vendor Directory remains visible from the Day-of Command Center.
- [x] Bride, Groom, Ceremony Coordinator, Reception Coordinator, DJ and Officiant pages remain available.
- [x] Vendor/payment amounts are not returned to normal team access and do not appear on coordinator, DJ, officiant or Vendor Directory views.
- [x] Couple-only code (`WEDDING_COUPLE_PASSCODE`) exposes the Couple Money page and adds the payment checklist to Bride + Groom views.
- [x] Vendor roster retains Nessa, Vio, Gio, Bertram, Olivia, Tammy, Michael Lancaster, Alfredo Junior, magician placeholder, Sara D Hair, Christian, Maggiano’s and Kool Jamaican Kitchen.
- [x] Olivia invoice-date correction remains an open couple item.

## Other preserved requested features
- [x] Signature drinks: Something Blue / Blue Skies and Something Old / Old Fashioned.
- [x] Photo-sharing disposable-camera link and Messages of Love audio guestbook.
- [x] Wedding Passport, kids activities, Colorado trivia and honeymoon content.
- [x] Private getting-ready location stays off guest pages.
- [x] Floral binder and reception décor binder remain in the private team area.

## Verification
- Public source searched for private reception song titles; none are present.
- Public source searched for payment amounts; none are present.
- Local image references were checked against `public/images`.
- Netlify functions were syntax-checked with Node.
- A full production Vite build is still best verified by Netlify after upload because dependency installation has previously timed out in this environment.
