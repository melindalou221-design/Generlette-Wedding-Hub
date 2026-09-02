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

Then connect the repository to Netlify and set the environment variable `WEDDING_PRIVATE_PASSCODE` in Netlify rather than GitHub.

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
