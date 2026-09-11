# Upload this Wedding Hub to GitHub

This ZIP is the September 11 restored master build. It is based on the latest ZIP supplied by Melinda and includes the previous-request regression fixes.

1. Make sure the GitHub repository is **Private** before uploading because the server-side source contains vendor/planning information.
2. Unzip this package.
3. In the `Generlette-Wedding-Hub` repository, choose **Add file → Upload files**.
4. Upload the **contents inside** the unzipped folder so `package.json`, `index.html`, `netlify.toml`, `src/`, `public/`, and `netlify/` are at the repository root.
5. Commit to `main`. Netlify should redeploy automatically.
6. If you changed environment variables, trigger a fresh Netlify deploy.

## Netlify variables to keep
- `WEDDING_PRIVATE_PASSCODE` — wedding-team access
- `WEDDING_COUPLE_PASSCODE` — separate Cory/Melinda code; enables money/payment details
- `WEDDING_GETTING_READY_ADDRESS` — private prep address
- `WEDDING_VENDOR_CONTACTS` — private JSON contact data if used

After deployment, test `/`, `/family`, `/reception`, `/directions`, `/day-of`, `/day-of/vendors`, `/day-of/dj`, and `/day-of/officiant` on a phone.
