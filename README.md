# HABÄNE Ecommerce Experience V2

A responsive, dependency-light ecommerce UI concept for a 10-product HABÄNE travel-tech collection.

## Open

For the fastest preview, open `HABANE_ecommerce_v2_standalone.html`.

For the editable source version, open `index.html`. A local server is recommended:

```bash
python3 -m http.server 8080
```

Then visit:

```text
http://localhost:8080/HABANE_ECOMMERCE_V2/
```

## Typography

- **Tungsten**: oversized editorial and campaign headlines
- **Conthrax**: brand codes, technical labels, product names and status language
- **Montserrat**: navigation, body copy, product information and ecommerce controls

Conthrax and Tungsten are not included. Add your licensed `.woff2` files to the `fonts` folder using the filenames described in `fonts/README.txt`.

## Product experience features

- 10-product collection with filtering and sorting
- Guided “Find your object” recommendation flow
- Full-screen product experience for every product
- Product-specific scene switcher
- Product Mood DNA
- Virtual packing simulator
- Product-specific “Departure Frequencies” playlist interface
- Focused, Electric and Unhurried mood versions for every playlist
- Persistent simulated audio player
- Product Passport with materials, service, care and role
- Product comparison for up to three objects
- Search, favourites, cart and quantity controls
- Responsive mobile navigation
- Reduced-motion support

## Production notes

- The ten names, prices, specifications and product claims are editable concept data in `assets/app.js`; replace them with the confirmed catalogue.
- Playlist titles and tracks are original placeholders. Connect approved Spotify, Apple Music or original HABÄNE audio links before launch.
- The audio player is a UI simulation and does not stream copyrighted music.
- Replace the typographic HABÄNE fallback with the approved official SVG logo.
- Connect customer accounts, inventory, tax, consent management, checkout, legal pages and analytics to the production ecommerce platform.
- Verify airline, cabin, battery and compatibility guidance against final product architecture and current carrier rules before publishing.
