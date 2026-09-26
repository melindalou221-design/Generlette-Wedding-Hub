# Seating visibility

Guest seating is now available through **Find My Table** (`/tables`, also a bottom-nav tab).

- Guests type the first few letters of their first or last name and see their table number, table name and table-sign artwork.
- The guest-to-table list lives only in `netlify/functions/find-table.mjs` and is served from `/api/find-table`. It is not bundled into the public app; a lookup needs at least two letters and returns only the matching names.
- The full City Park Pavilion layout + seating chart image is kept in the private Reception Coordinator binder.
- To change a seat, edit the `tables` list in `netlify/functions/find-table.mjs`.
