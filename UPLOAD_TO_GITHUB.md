# Upload this project to GitHub

Repository: `Generlette-Wedding-Hub`

## Easiest method
1. Download and unzip the supplied Wedding Hub ZIP.
2. Open your `Generlette-Wedding-Hub` repository on GitHub.
3. Choose **Add file → Upload files**.
4. Open the unzipped project folder and select **the contents inside the folder** (not the outer folder itself).
5. Drag those files/folders into the GitHub upload page.
6. GitHub may show `README.md` as being replaced; that is expected.
7. Commit directly to `main` with a message such as: `Upload current Generlette Wedding Hub`.
8. Confirm the repository root contains `package.json`, `index.html`, `netlify.toml`, `src/`, `public/`, and `netlify/`.

## After upload
Before putting private vendor phone numbers, private addresses, or passwords into any source-controlled file, switch the repository back to **Private**.

Then connect the repository to Netlify and configure private values in **Netlify**, not GitHub:
- `WEDDING_PRIVATE_PASSCODE` — wedding-team code (coordinators/DJ/officiant; no payment amounts)
- `WEDDING_COUPLE_PASSCODE` — a different Cory & Melinda code (payment sections visible)
- `WEDDING_VENDOR_CONTACTS` — optional JSON with private vendor phone/email details

After adding/changing any Netlify environment variable, trigger a new deploy.

## Important image check
After upload, confirm these appear under `public/images`:
- `decor-sweetheart-table.png`
- `decor-reception-vision.jpg`
- `decor-welcome-seating.jpg`
- `decor-reception-shopping-list.jpg`
- `bridal-bouquet-guide.jpg`
- `wedding-flower-ordering-guide.jpg`

Closer to the wedding, add your real staged sweetheart-table photo as:
`public/images/final-sweetheart-setup.jpg`


## Private vendor directory
The app now has `/day-of/vendors`. Vendor names, roles, arrival targets and unresolved tasks are included in the project. Real phone numbers/emails are intentionally not committed to source. Add them in Netlify using `WEDDING_VENDOR_CONTACTS`.

## Couple-only money
Use a separate `WEDDING_COUPLE_PASSCODE`. If someone signs in with the wedding-team code, the server removes the `payments` sections before sending the private dashboard data to the browser.


## September 2 guest-hub expansion
- Replaced the unreliable bouquet mini-game with Junior Wedding Explorers, a persistent real-world challenge + scavenger/trivia activities.
- Added Wedding Weekend page: Sunday 4:30 PM Chautauqua Park, around 6:00 PM Sunrise Amphitheater rehearsal.
- Added public Costa Rica honeymoon teaser while keeping the 5:00 AM flight and Arvada getting-ready address private.
- Added Messages of Love written Netlify form plus existing voice guestbook and disposable camera links.
- Added Gifts & Well Wishes page with Cash App/Venmo fields intentionally blank until the couple supplies the exact links.
- Added Add-to-Calendar downloads for ceremony and reception.
- Added larger-text accessibility toggle.
- Expanded photo use and compressed story photos for better mobile load speed.
- Added Colorado reception-place cards and richer wedding-party descriptions.
- Bride/Groom private guides now include 6005 Nelson St, Arvada; Sunday rehearsal timing; and the 5:00 AM Costa Rica honeymoon flight reminder.
