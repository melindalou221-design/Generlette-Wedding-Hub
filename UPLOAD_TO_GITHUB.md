# Upload this master Wedding Hub to GitHub

Use the repository `Generlette-Wedding-Hub` and keep it **Private** because the project contains private wedding-team planning logic.

## Safest method
1. Download and unzip the master package.
2. In GitHub, open the repository root.
3. Choose **Add file → Upload files**.
4. Upload the **contents inside** the unzipped folder so `package.json`, `index.html`, `netlify.toml`, `src/`, `public/`, and `netlify/` remain at the repository root.
5. Allow the changed files to replace the older copies.
6. Commit to `main`.
7. Wait for Netlify to redeploy.
8. Confirm Netlify Functions includes both `private-dashboard` and `public-config`.

Because this master merge adds new images, table-sign assets, PWA files and a second Netlify function, uploading the **full package** is safer than uploading only App.jsx/data.js/styles.css.

## After deploy
Check these guest pages:
- `/`
- `/story`
- `/first-date`
- `/reception`
- `/directions`
- `/weather-parking`

Then check `/day-of` with both the wedding-team code and the couple-only code.
