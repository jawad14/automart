# /public/parts — Category and product imagery

Drop product/category JPEGs or WebPs here. Files are served from `/parts/<filename>` at runtime.

## Expected files (used by the Shop All Parts page)

| Filename | Used on | Recommended size |
|---|---|---|
| `bumpers.jpg` | Quick tile + `<Categories />` block | 640×480, ~80–120KB |
| `headlights.jpg` | Quick tile + categories | 640×480 |
| `grilles.jpg` | Quick tile + categories | 640×480 |
| `mirrors.jpg` | Quick tile + categories | 640×480 |
| `hoods.jpg` | Quick tile + categories | 640×480 |
| `corner-lights.jpg` | Quick tile + categories | 640×480 |
| `fenders.jpg` | Categories block | 640×480 |
| `doors.jpg` | Categories block | 640×480 |
| `trunk.jpg` | Categories block | 640×480 |
| `radiator.jpg` | Categories block | 640×480 |
| `condenser.jpg` | Categories block | 640×480 |
| `fan.jpg` | Categories block | 640×480 |
| `splash.jpg` | Categories block | 640×480 |
| `frame.jpg` | Categories block | 640×480 |
| `fog.jpg` | Categories block | 640×480 |
| `hero.jpg` | (Optional) `/parts` hero background | 1920×1080, ~150–250KB |

## Where they get used

The quick-tile strip and the full category grid currently render the existing SVG icons
from `lib/automart/icons.tsx`. To swap to real photos, edit:

- `app/parts/page.tsx` — quick-tile strip (replace `<CategoryIcon />` with `<Image />`)
- `components/blocks/automart/Categories.tsx` — main category grid (same swap)

Both should use `next/image` with explicit `width`/`height` and a meaningful `alt`.

## Sourcing notes

Use your own photography, supplier-provided product shots you have rights to, or licensed
stock — not images scraped from competitor sites. Compress with `cwebp` or `mozjpeg` before
committing.
