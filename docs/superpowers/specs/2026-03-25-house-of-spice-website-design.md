# House of Spice — Website Design Spec
**Date:** 2026-03-25
**Client:** House of Spice, 507 Kingston Road, Raynes Park, SW20 8SF
**Phone:** 020 8542 4838
**Output:** `clients/house-of-spice/index.html` (+ `style.css`, `app.js`)

---

## Overview

A pristine, showcase-first single-page website for House of Spice — a Halal-certified Indian restaurant in Raynes Park. The site replaces their current minimal web presence with a high-quality, atmospheric design that showcases their full menu, Sunday buffet, story, and contact details.

---

## Visual Design

### Style
**Rich & Traditional** — premium Indian restaurant aesthetic.

### Colour Palette
| Token | Value | Usage |
|---|---|---|
| `--color-dark` | `#1a0a00` | Page background (dark mode) |
| `--color-crimson` | `#8B0000` | Accents, section dividers, CTAs |
| `--color-gold` | `#D4A017` | Headings, highlights, ornamental |
| `--color-wheat` | `#f5deb3` | Body text (dark mode) |
| `--color-light-bg` | `#fff8f0` | Page background (light mode) |
| `--color-light-text` | `#1a0a00` | Body text (light mode) |

### Typography
- **Headings:** Playfair Display (700, 900) — serif, elegant
- **Body / menu:** Inter (400, 500, 600) — clean, readable
- **Labels / tags:** Spaced uppercase caps (Inter 600, letter-spacing: 3px)

### Dark / Light Mode
- **Default:** Dark mode (near-black background, gold/wheat text)
- **Toggle:** 3D flip light switch mounted in the navbar — CSS 3D perspective flip animation. Dark = switch down, Light = switch up.
- **Light mode:** Warm off-white (`#fff8f0`) background, crimson and dark brown text, gold accents retained.
- Theme stored in `localStorage` and applied via a `data-theme="light"` attribute on `<html>`.

---

## Page Sections (top to bottom)

### 1. Navbar
- Logo: "House of Spice" in Playfair Display + decorative lamp/flame icon
- Links: Menu · About · Sunday Buffet · Find Us
- 3D light switch toggle (right side)
- Sticky on scroll with subtle background blur

### 2. Hero
- Full-viewport-height
- Background: rich atmospheric Indian restaurant photo (Unsplash) with dark overlay
- Content: decorative divider, "HOUSE OF SPICE" in large Playfair Display, tagline "Authentic Indian Cuisine · Raynes Park", Halal certified badge, scroll CTA
- Ornamental horizontal rule (CSS border pattern)

### 3. Info Bar
- 4 items: Open Tues–Sun from 5pm (closed Mon) · Phone (020 8542 4838) · 10% off takeaway · Free delivery within 2 miles
- Dark crimson background, gold icons

### 4. Menu Section
- Section header: "Our Menu" with ornamental divider
- **7 tabs:** Starters · Spice Specials · Mains · Tandoori · Seafood · Vegetable · Breads & Rice
- Each tab shows a grid of menu cards: dish name, description, price
- Real data from houseofspiceonline.co.uk (see Appendix)
- "View full menu / order online" CTA linking to houseofspiceonline.co.uk

### 5. Sunday Buffet Banner
- Full-width, crimson background, gold typography
- "All You Can Eat Sunday Buffet" in large Playfair Display
- Sunday-only badge
- Copy: "Join us every Sunday for our legendary all-you-can-eat buffet. Sample the full breadth of our kitchen — from sizzling tandoori to rich curries, fresh breads, and more. The perfect Sunday feast."
- Price: "Call to enquire" (no fixed price published online)
- CTA: "Reserve Your Table — 020 8542 4838"

### 6. About / Our Story
- Two-column: photo grid (left, 3 photos in a stacked collage) · text (right)
- Photo subjects (Unsplash): tandoor oven / chef cooking, plated curry dish, warm restaurant interior
- Copy: authentic Indian cuisine, Halal certified, family-run, Raynes Park community
- Highlight stats: Halal Certified · Open Tues–Sun · Raynes Park SW20

### 7. Gallery
- CSS `columns: 3` masonry approximation (no JS required, column-flow order acceptable)
- 6 atmospheric photos from Unsplash: biryani, tikka skewers, curry bowl, spice market, candlelit table, naan bread
- Hover overlay with subtle caption text

### 8. Find Us / Contact
- Two-column: details (left) · map placeholder (right)
- Address: 507 Kingston Road, Raynes Park, SW20 8SF
- Hours: Delivery Tues–Sun 5:00pm–9:30pm · Collection Tues–Sun 5:30pm–9:30pm · Closed Mondays
- Phone: 020 8542 4838
- Delivery area: CR4, KT1–5, KT17, KT19, SM1, SM3–5, SW15, SW17–20
- Map: styled placeholder card (dark/gold theme) with embedded Google Maps link — `https://maps.google.com/?q=507+Kingston+Road+SW20+8SF`. No API key required — just a link-out button "Open in Google Maps"

### 9. Footer
- Logo, short tagline, Halal badge
- Quick links column
- © 2026 House of Spice · Raynes Park

---

## Light Switch (3D Toggle)

A CSS-only (+ minimal JS class-toggle) 3D light switch in the navbar:

```
[  off  ]   ← dark mode  (switch lever flipped down)
[  on   ]   ← light mode (switch lever flipped up)
```

Implementation:
- Outer casing: CSS box with inset shadow, slightly rounded, crimson/dark plate
- Lever: child element with CSS `transform-style: preserve-3d`, `perspective`
- Toggle: JS adds/removes `data-theme="light"` on `<html>` + `is-on` class on switch
- Animation: `transition: transform 0.3s ease` on the lever (rotateX flip)
- Persisted in `localStorage('theme')`

---

## Technical Stack

- Pure HTML5 + CSS3 + vanilla JS (no frameworks)
- Google Fonts: Playfair Display + Inter
- Images: Unsplash direct URLs (no download required)
- Same pattern as `clients/yayhouse/` in this project
- Output: `clients/house-of-spice/index.html`, `style.css`, `app.js`

---

## Appendix: Menu Data

### Starters
| Dish | Description | Price |
|---|---|---|
| Onion Spinach Bhajee | Deep fried onion fritter with house spices | £4.95 |
| Royal Chat Puri | Juicy chicken in hot and sour sauce | £5.50 |
| Royal Nawabi Kebab | Minced lamb seekh kebab char-grilled in tandoor | £5.25 |
| Samosa Vegetable | Triangular pastry with spiced vegetables | £4.50 |
| Samosa Lamb | Triangular pastry with spiced minced lamb | £4.50 |
| Murgh Tikka | Tender chicken marinated and clay oven cooked | £5.95 |
| Chingry Puri Regular | Prawns on light shell Bengal bread | £5.95 |
| Chingry Puri King | King prawns on light shell Bengal bread | £6.95 |
| Mixed Starters | Chicken tikka, seekh kebab, onion bhaji | £6.50 |

### Spice Specials
| Dish | Description | Price |
|---|---|---|
| Papra (H) | Charcoal-toasted boneless in fresh yogurt, cumin seeds, array of spices | £9.95–£10.95 |
| Tava | Diced tikka tossed on a glowing iron skillet in light fresh tomato and green pepper sauce | £10.95–£14.95 |
| Green Masala (H) | Cooked in fresh green herbs, ginger and lime juice | £10.95 |
| Kerala (H) | Charcoal toasted in Southern Frontier herbs with coconut cream and curry leaf | £10.95 |
| Shuruchi | Chicken/lamb with mango pieces in medium spice sauce | £10.95 |
| Ghorma Sabjee | Tender lamb/chicken marinated in lemon and lime with fresh coriander | £10.95 |

### Traditional Mains
| Dish | Price |
|---|---|
| Tikka Masala | £9.50 |
| Rogon | £9.95 |
| Sag Wala (chicken/lamb/prawn/king prawn) | £9.95–£14.95 |
| Dansak (H) | £8.95–£9.95 |
| Jalfrezi (H) | £9.95–£14.95 |
| Balti | £9.95–£14.95 |
| Almond Korma | £9.50 |
| Madras (H) | £9.50 |
| Vindaloo (H) | £9.50 |

### Tandoori
| Dish | Price |
|---|---|
| Tandoori Mixed Grill | £14.95 |
| Murgh Tikka (main) | £9.95 |
| Tandoori King Prawns Sizzler | £14.95 |

### Seafood
| Dish | Price |
|---|---|
| Machli Kata Masala (salmon) | £14.95 |
| Shahi Jhinga (king prawns) | £14.95 |
| Jhinga Kadhai | £14.95 |
| Jhinga Makhni | £14.95 |
| Machli Fayzee (salmon) | £14.95 |

### Vegetable Mains
| Dish | Price |
|---|---|
| Royal Sabzi | £8.95 |
| Papra Ki Sabzi (H)(V) | £8.95 |
| Sabzi Sizzler (V) | £8.95 |

### Bread & Rice
| Dish | Price |
|---|---|
| Plain Naan | £3.25 |
| Garlic Naan | £3.95 |
| Keema Naan | £3.95 |
| Peshwari Naan | £3.95 |
| Pilau Rice | £3.50 |
| Biryani (Chicken/Lamb/Prawn) | £12.95 |
| Vegetable Biryani | £11.50 |
