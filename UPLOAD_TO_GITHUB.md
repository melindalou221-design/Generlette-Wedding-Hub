# Upload the Generlette Wedding Hub to GitHub

## 1. Make the repository Private first
This package contains wedding-team planning details inside a Netlify Function. Before uploading, confirm the `Generlette-Wedding-Hub` repository is **Private**.

## 2. Upload the project
1. Download and unzip the supplied ZIP.
2. Open the `Generlette-Wedding-Hub` repository on GitHub.
3. Choose **Add file → Upload files**.
4. Select the **contents inside the unzipped folder**, not the outer folder itself.
5. Commit to `main`.
6. Confirm the repository root contains `package.json`, `index.html`, `netlify.toml`, `src/`, `public/`, and `netlify/`.

## 3. Netlify environment variables
In Netlify → Project configuration → Environment variables, configure:
- `WEDDING_PRIVATE_PASSCODE` — wedding-team code for coordinators, DJ and officiant
- `WEDDING_COUPLE_PASSCODE` — a different Cory & Melinda code; unlocks Couple Money + Payments
- `WEDDING_VENDOR_CONTACTS` — optional JSON containing private vendor phone/email details
- `WEDDING_GUEST_ALERT` — optional guest-facing banner; leave blank normally
- `WEDDING_GUEST_ALERT_LINK` — optional URL used with the guest alert

After any environment-variable change, trigger a new deploy.

## 4. Confirm Netlify Functions
After deployment, open Netlify → Functions and confirm these exist:
- `private-dashboard`
- `public-config`

If the private login says the dashboard is not configured, redeploy after setting the passcode variables.

## 5. Verify the guest experience
Check these routes on your phone:
- `/know-before-you-go`
- `/schedule`
- `/ceremony`
- `/reception`
- `/directions`
- `/tables`
- `/story`
- `/first-date`

On Find My Table, search a few guest names and confirm the correct Colorado table-sign image appears.

## 6. Verify private access
Open `/day-of` with the wedding-team code and confirm:
- Vendor Directory is visible
- Bride / Groom / Ceremony / Reception / DJ / Officiant tabs work
- payment amounts are **not** visible

Then sign out and use the separate couple code. Confirm **Couple Money** appears as its own tab.

## 7. Install/offline test
Open the deployed site once on your phone, navigate through the important guest pages, then briefly enable airplane mode and reopen the app. The saved Wedding Hub shell should remain usable. Browsers that support install prompts may also show **Install Wedding Hub** in the menu.

## 8. Final setup photos later
Closer to the wedding, stage each decor zone and replace/add real coordinator reference photos, especially the sweetheart table. Decorations should remain packed in clearly labeled setup-zone boxes.
