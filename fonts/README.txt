HABÄNE FONT SETUP

This package does not redistribute font files.

To activate the requested typefaces everywhere, add your properly licensed webfont files here using these exact names:

- Conthrax-SemiBold.woff2
- Tungsten-Bold.woff2

Montserrat is loaded from Google Fonts in index.html and also uses a local fallback when installed.

The CSS already contains the @font-face references. No further code change is needed after adding the licensed files.

Fallback behavior:
- Conthrax → Montserrat → Arial
- Tungsten → Arial Narrow → Impact
- Montserrat → Arial
