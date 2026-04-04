# House of Spice Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a pristine, showcase-first single-page website for House of Spice Indian restaurant in Raynes Park, with a Rich & Traditional aesthetic, full menu, Sunday buffet section, and a 3D light switch dark/light mode toggle.

**Architecture:** Three-file static site (index.html / style.css / app.js) following the same pattern as `clients/yayhouse/`. CSS custom properties drive the dark/light theme. Vanilla JS handles tab switching, navbar scroll behaviour, and the light switch toggle.

**Tech Stack:** HTML5, CSS3 (custom properties, CSS columns, perspective/3D transforms), Vanilla JS, Google Fonts (Playfair Display + Inter), Unsplash image URLs.

**Spec:** `docs/superpowers/specs/2026-03-25-house-of-spice-website-design.md`
**Reference project:** `clients/yayhouse/` (index.html, style.css, app.js)

---

## File Map

| File | Responsibility |
|---|---|
| `clients/house-of-spice/index.html` | Full page markup — all 9 sections |
| `clients/house-of-spice/style.css` | All styles — theme variables, layout, components, responsive |
| `clients/house-of-spice/app.js` | Interactivity — light switch, menu tabs, sticky navbar, mobile menu |

---

## Task 1: Project Scaffold + CSS Foundation

**Files:**
- Create: `clients/house-of-spice/index.html`
- Create: `clients/house-of-spice/style.css`
- Create: `clients/house-of-spice/app.js`

- [ ] **Step 1: Create index.html shell**

```html
<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="House of Spice — Authentic Halal Indian Cuisine in Raynes Park, SW20. Dine in, takeaway & delivery. Open Tue–Sun from 5pm." />
  <title>House of Spice | Authentic Indian Cuisine · Raynes Park</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <!-- sections go here -->
  <script src="app.js"></script>
</body>
</html>
```

- [ ] **Step 2: Write CSS custom properties (theme foundation)**

Add to top of `style.css`:

```css
/* ── THEME TOKENS ── */
:root {
  --color-dark:     #1a0a00;
  --color-crimson:  #8B0000;
  --color-gold:     #D4A017;
  --color-wheat:    #f5deb3;
  --color-light-bg: #fff8f0;
  --color-light-text: #1a0a00;

  /* Active theme tokens (dark default) */
  --bg:        #1a0a00;
  --bg-2:      #2d0a0a;
  --bg-3:      #3d1a1a;
  --text:      #f5deb3;
  --text-muted:#c4975a;
  --border:    rgba(212,160,23,0.2);
  --card-bg:   rgba(255,255,255,0.04);
  --nav-bg:    rgba(26,10,0,0.92);
}

[data-theme="light"] {
  --bg:        #fff8f0;
  --bg-2:      #f5ebe0;
  --bg-3:      #e8d5c0;
  --text:      #1a0a00;
  --text-muted:#6b3a1f;
  --border:    rgba(139,0,0,0.2);
  --card-bg:   rgba(0,0,0,0.04);
  --nav-bg:    rgba(255,248,240,0.92);
}

/* ── RESET & BASE ── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; }

body {
  background: var(--bg);
  color: var(--text);
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  line-height: 1.6;
  transition: background 0.3s ease, color 0.3s ease;
}

h1, h2, h3, h4 {
  font-family: 'Playfair Display', serif;
  line-height: 1.2;
}

a { color: var(--color-gold); text-decoration: none; }
a:hover { color: var(--color-wheat); }

img { display: block; width: 100%; object-fit: cover; }

.container { max-width: 1160px; margin: 0 auto; padding: 0 24px; }

/* ── SECTION HEADERS ── */
.section-tag {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--color-gold);
  display: block;
  margin-bottom: 12px;
}
.ornament {
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 12px 0 32px;
}
.ornament::before,
.ornament::after {
  content: '';
  flex: 1;
  height: 1px;
  background: linear-gradient(to right, transparent, var(--color-gold), transparent);
}
.ornament span {
  color: var(--color-gold);
  font-size: 1.2rem;
}

/* ── BUTTONS ── */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  border-radius: 2px;
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  transition: all 0.2s ease;
  text-decoration: none;
}
.btn-primary {
  background: var(--color-gold);
  color: #1a0a00;
}
.btn-primary:hover {
  background: #e6b520;
  color: #1a0a00;
}
.btn-outline {
  background: transparent;
  color: var(--color-gold);
  border: 1.5px solid var(--color-gold);
}
.btn-outline:hover {
  background: var(--color-gold);
  color: #1a0a00;
}
```

- [ ] **Step 3: Create empty app.js**

```js
// House of Spice — app.js
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavbar();
  initMenuTabs();
  initMobileMenu();
});
```

- [ ] **Step 4: Open index.html in browser, verify dark background renders, no console errors**

- [ ] **Step 5: Commit**

```bash
git add clients/house-of-spice/
git commit -m "feat: scaffold House of Spice site with theme CSS foundation"
```

---

## Task 2: Navbar + 3D Light Switch

**Files:**
- Modify: `clients/house-of-spice/index.html` — add `<nav>`
- Modify: `clients/house-of-spice/style.css` — navbar + 3D switch styles
- Modify: `clients/house-of-spice/app.js` — theme toggle + sticky nav

- [ ] **Step 1: Add navbar HTML inside `<body>` before the script tag**

```html
<!-- NAV -->
<nav id="navbar">
  <div class="nav-inner">
    <a href="#" class="logo">
      <span class="logo-icon">🪔</span>
      <span class="logo-text">House of <em>Spice</em></span>
    </a>
    <ul class="nav-links">
      <li><a href="#menu">Menu</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#buffet">Sunday Buffet</a></li>
      <li><a href="#find-us">Find Us</a></li>
    </ul>
    <div class="switch-wrap" id="themeSwitch" title="Toggle light/dark mode">
      <div class="switch-plate">
        <div class="switch-lever" id="switchLever"></div>
      </div>
      <span class="switch-label" id="switchLabel">Dark</span>
    </div>
    <button class="hamburger" id="hamburger" aria-label="Open menu">&#9776;</button>
  </div>
  <div class="mobile-menu" id="mobileMenu">
    <a href="#menu">Menu</a>
    <a href="#about">About</a>
    <a href="#buffet">Sunday Buffet</a>
    <a href="#find-us">Find Us</a>
  </div>
</nav>
```

- [ ] **Step 2: Add navbar CSS to style.css**

```css
/* ── NAVBAR ── */
#navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  background: var(--nav-bg);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);
  transition: background 0.3s ease;
}
.nav-inner {
  display: flex;
  align-items: center;
  gap: 32px;
  max-width: 1160px;
  margin: 0 auto;
  padding: 0 24px;
  height: 68px;
}
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--color-gold);
  font-family: 'Playfair Display', serif;
  font-size: 1.15rem;
  font-weight: 700;
  text-decoration: none;
  white-space: nowrap;
}
.logo em { font-style: italic; color: var(--color-wheat); }
.logo-icon { font-size: 1.3rem; }
.nav-links {
  display: flex;
  list-style: none;
  gap: 32px;
  margin-left: auto;
}
.nav-links a {
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--text-muted);
  transition: color 0.2s;
}
.nav-links a:hover { color: var(--color-gold); }

/* ── 3D LIGHT SWITCH ── */
.switch-wrap {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
  margin-left: 16px;
}
.switch-plate {
  width: 28px;
  height: 46px;
  background: #2a1200;
  border: 2px solid var(--color-crimson);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 120px;
  box-shadow:
    inset 0 2px 4px rgba(0,0,0,0.6),
    0 0 0 1px rgba(212,160,23,0.15),
    2px 2px 6px rgba(0,0,0,0.5);
}
[data-theme="light"] .switch-plate {
  background: #e8d5c0;
  border-color: var(--color-crimson);
}
.switch-lever {
  width: 16px;
  height: 28px;
  background: linear-gradient(180deg, #D4A017 0%, #a07810 100%);
  border-radius: 3px;
  transform-style: preserve-3d;
  transform: rotateX(-25deg);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow:
    0 2px 4px rgba(0,0,0,0.4),
    inset 0 1px 0 rgba(255,255,255,0.3);
}
.switch-lever.is-on {
  transform: rotateX(25deg);
}
.switch-label {
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--text-muted);
  min-width: 28px;
}

/* ── HAMBURGER ── */
.hamburger {
  display: none;
  background: none;
  border: none;
  color: var(--color-gold);
  font-size: 1.4rem;
  cursor: pointer;
  margin-left: auto;
}
.mobile-menu {
  display: none;
  flex-direction: column;
  background: var(--bg-2);
  border-top: 1px solid var(--border);
  padding: 16px 24px;
  gap: 16px;
}
.mobile-menu a {
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--text-muted);
}
.mobile-menu.open { display: flex; }

@media (max-width: 768px) {
  .nav-links { display: none; }
  .hamburger { display: block; }
  .switch-wrap { margin-left: 0; }
}
```

- [ ] **Step 3: Add theme toggle + sticky nav + mobile menu to app.js**

```js
function initTheme() {
  const saved = localStorage.getItem('hos-theme') || 'dark';
  applyTheme(saved);

  document.getElementById('themeSwitch').addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('hos-theme', theme);
  const lever = document.getElementById('switchLever');
  const label = document.getElementById('switchLabel');
  if (theme === 'light') {
    lever.classList.add('is-on');
    label.textContent = 'Light';
  } else {
    lever.classList.remove('is-on');
    label.textContent = 'Dark';
  }
}

function initNavbar() {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    nav.style.borderBottomColor = window.scrollY > 60
      ? 'var(--color-crimson)'
      : 'var(--border)';
  });
}

function initMobileMenu() {
  const btn = document.getElementById('hamburger');
  const menu = document.getElementById('mobileMenu');
  btn.addEventListener('click', () => menu.classList.toggle('open'));
  menu.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => menu.classList.remove('open'))
  );
}
```

- [ ] **Step 4: Open in browser — verify navbar renders, light switch flips with 3D animation, theme toggles between dark/warm-cream, persists on refresh**

- [ ] **Step 5: Commit**

```bash
git add clients/house-of-spice/
git commit -m "feat: add navbar with 3D light switch theme toggle"
```

---

## Task 3: Hero Section

**Files:**
- Modify: `clients/house-of-spice/index.html` — add `<section id="hero">`
- Modify: `clients/house-of-spice/style.css` — hero styles

- [ ] **Step 1: Add hero HTML after `<nav>`**

```html
<!-- HERO -->
<section id="hero">
  <div class="hero-bg" style="background-image: url('https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1800&auto=format&fit=crop')"></div>
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <span class="section-tag">Raynes Park, SW20</span>
    <div class="ornament"><span>✦</span></div>
    <h1>House of<br/><em>Spice</em></h1>
    <p class="hero-sub">Authentic Indian Cuisine · Halal Certified</p>
    <div class="hero-badges">
      <span class="badge">🌿 Halal Certified</span>
      <span class="badge">🚗 Free Delivery 2mi</span>
      <span class="badge">🏆 10% Off Takeaway</span>
    </div>
    <div class="hero-ctas">
      <a href="#menu" class="btn btn-primary">Explore Our Menu</a>
      <a href="#buffet" class="btn btn-outline">Sunday Buffet</a>
    </div>
  </div>
  <div class="hero-scroll">
    <span>Scroll to discover</span>
    <div class="scroll-arrow"></div>
  </div>
</section>
```

- [ ] **Step 2: Add hero CSS**

```css
/* ── HERO ── */
#hero {
  position: relative;
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.hero-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  transform: scale(1.05);
  transition: transform 8s ease;
}
#hero:hover .hero-bg { transform: scale(1); }
.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(26,10,0,0.5) 0%,
    rgba(26,10,0,0.75) 60%,
    rgba(26,10,0,0.95) 100%
  );
}
.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 0 24px;
  max-width: 700px;
}
.hero-content h1 {
  font-size: clamp(3.5rem, 10vw, 7rem);
  font-weight: 900;
  color: var(--color-wheat);
  line-height: 1.0;
  margin-bottom: 16px;
  text-shadow: 0 2px 20px rgba(0,0,0,0.5);
}
.hero-content h1 em {
  font-style: italic;
  color: var(--color-gold);
}
.hero-sub {
  font-size: 1rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: 28px;
  font-weight: 600;
}
.hero-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-bottom: 36px;
}
.badge {
  background: rgba(212,160,23,0.15);
  border: 1px solid rgba(212,160,23,0.3);
  color: var(--color-wheat);
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.5px;
}
.hero-ctas {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}
.hero-scroll {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: var(--color-gold);
  font-size: 0.72rem;
  letter-spacing: 2px;
  text-transform: uppercase;
}
.scroll-arrow {
  width: 20px;
  height: 20px;
  border-right: 2px solid var(--color-gold);
  border-bottom: 2px solid var(--color-gold);
  transform: rotate(45deg);
  animation: bounce 1.6s infinite;
}
@keyframes bounce {
  0%, 100% { transform: rotate(45deg) translateY(0); }
  50%       { transform: rotate(45deg) translateY(5px); }
}
```

- [ ] **Step 3: Open in browser — verify full-viewport hero with photo, dark overlay, gold title, badges, bouncing scroll arrow. Light mode should show same hero (overlay keeps it dark)**

- [ ] **Step 4: Commit**

```bash
git add clients/house-of-spice/
git commit -m "feat: add hero section with atmospheric background"
```

---

## Task 4: Info Bar

**Files:**
- Modify: `clients/house-of-spice/index.html`
- Modify: `clients/house-of-spice/style.css`

- [ ] **Step 1: Add info bar HTML after hero section**

```html
<!-- INFO BAR -->
<div class="info-bar">
  <div class="info-item">
    <span class="info-icon">🕐</span>
    <div>
      <strong>Open Tues–Sun</strong>
      <span>From 5:00pm · Closed Mondays</span>
    </div>
  </div>
  <div class="info-item">
    <span class="info-icon">📞</span>
    <div>
      <strong>020 8542 4838</strong>
      <span>Call to order or enquire</span>
    </div>
  </div>
  <div class="info-item">
    <span class="info-icon">🎁</span>
    <div>
      <strong>10% Off Takeaway</strong>
      <span>Discount on all collection orders</span>
    </div>
  </div>
  <div class="info-item">
    <span class="info-icon">🚗</span>
    <div>
      <strong>Free Delivery</strong>
      <span>Within 2 miles of SW20</span>
    </div>
  </div>
</div>
```

- [ ] **Step 2: Add info bar CSS**

```css
/* ── INFO BAR ── */
.info-bar {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0;
  background: var(--color-crimson);
  border-bottom: 2px solid var(--color-gold);
}
.info-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 20px 36px;
  border-right: 1px solid rgba(212,160,23,0.2);
  flex: 1;
  min-width: 200px;
}
.info-item:last-child { border-right: none; }
.info-icon { font-size: 1.5rem; }
.info-item strong {
  display: block;
  color: var(--color-gold);
  font-size: 0.88rem;
  font-weight: 600;
  letter-spacing: 0.5px;
}
.info-item span {
  display: block;
  color: rgba(255,255,255,0.8);
  font-size: 0.78rem;
  margin-top: 2px;
}
@media (max-width: 600px) {
  .info-item { border-right: none; border-bottom: 1px solid rgba(212,160,23,0.2); }
}
```

- [ ] **Step 3: Verify crimson bar with 4 items renders correctly in both modes**

- [ ] **Step 4: Commit**

```bash
git add clients/house-of-spice/
git commit -m "feat: add info bar with hours, phone, offers"
```

---

## Task 5: Menu Section

**Files:**
- Modify: `clients/house-of-spice/index.html`
- Modify: `clients/house-of-spice/style.css`
- Modify: `clients/house-of-spice/app.js`

- [ ] **Step 1: Add menu section HTML (full menu data from spec appendix)**

```html
<!-- MENU -->
<section id="menu" class="menu-section">
  <div class="container">
    <div class="section-header">
      <span class="section-tag">What We Serve</span>
      <h2>Our Menu</h2>
      <div class="ornament"><span>✦</span></div>
      <p class="section-sub">Authentic recipes, finest halal ingredients, cooked fresh every evening.</p>
    </div>

    <div class="menu-tabs" id="menuTabs">
      <button class="tab active" data-tab="starters">Starters</button>
      <button class="tab" data-tab="specials">Spice Specials</button>
      <button class="tab" data-tab="mains">Mains</button>
      <button class="tab" data-tab="tandoori">Tandoori</button>
      <button class="tab" data-tab="seafood">Seafood</button>
      <button class="tab" data-tab="veg">Vegetable</button>
      <button class="tab" data-tab="breads">Breads & Rice</button>
    </div>

    <!-- STARTERS -->
    <div class="menu-grid active" id="tab-starters">
      <div class="menu-card"><div class="menu-info"><h3>Onion Spinach Bhajee</h3><p>Deep fried onion fritter with house spices</p><div class="menu-footer"><span class="price">£4.95</span></div></div></div>
      <div class="menu-card"><div class="menu-info"><h3>Royal Chat Puri</h3><p>Juicy chicken in hot and sour sauce</p><div class="menu-footer"><span class="price">£5.50</span></div></div></div>
      <div class="menu-card"><div class="menu-info"><h3>Royal Nawabi Kebab</h3><p>Minced lamb seekh kebab char-grilled in tandoor</p><div class="menu-footer"><span class="price">£5.25</span></div></div></div>
      <div class="menu-card"><div class="menu-info"><h3>Samosa Vegetable</h3><p>Triangular pastry with spiced vegetables</p><div class="menu-footer"><span class="price">£4.50</span></div></div></div>
      <div class="menu-card"><div class="menu-info"><h3>Samosa Lamb</h3><p>Triangular pastry with spiced minced lamb</p><div class="menu-footer"><span class="price">£4.50</span></div></div></div>
      <div class="menu-card"><div class="menu-info"><h3>Murgh Tikka</h3><p>Tender chicken marinated and clay oven cooked</p><div class="menu-footer"><span class="price">£5.95</span></div></div></div>
      <div class="menu-card"><div class="menu-info"><h3>Chingry Puri</h3><p>Prawns on light shell Bengal bread</p><div class="menu-footer"><span class="price">£5.95</span></div></div></div>
      <div class="menu-card"><div class="menu-info"><h3>Chingry Puri King</h3><p>King prawns on light shell Bengal bread</p><div class="menu-footer"><span class="price">£6.95</span></div></div></div>
      <div class="menu-card featured"><div class="menu-info"><h3>Mixed Starters</h3><p>Chicken tikka, seekh kebab, onion bhaji</p><div class="menu-footer"><span class="price">£6.50</span><span class="tag">Popular</span></div></div></div>
    </div>

    <!-- SPICE SPECIALS -->
    <div class="menu-grid" id="tab-specials">
      <div class="menu-card featured"><div class="menu-info"><h3>Papra <span class="heat">🌶🌶</span></h3><p>Charcoal-toasted boneless in fresh yogurt, cumin seeds, array of spices</p><div class="menu-footer"><span class="price">£9.95–£10.95</span><span class="tag">Chef's Special</span></div></div></div>
      <div class="menu-card"><div class="menu-info"><h3>Tava</h3><p>Diced tikka tossed on a glowing iron skillet in light fresh tomato and green pepper sauce</p><div class="menu-footer"><span class="price">£10.95–£14.95</span></div></div></div>
      <div class="menu-card"><div class="menu-info"><h3>Green Masala <span class="heat">🌶🌶</span></h3><p>Cooked in fresh green herbs, ginger and lime juice</p><div class="menu-footer"><span class="price">£10.95</span></div></div></div>
      <div class="menu-card"><div class="menu-info"><h3>Kerala <span class="heat">🌶🌶</span></h3><p>Charcoal toasted in Southern Frontier herbs with coconut cream and curry leaf</p><div class="menu-footer"><span class="price">£10.95</span></div></div></div>
      <div class="menu-card"><div class="menu-info"><h3>Shuruchi</h3><p>Chicken or lamb with mango pieces in medium spice sauce</p><div class="menu-footer"><span class="price">£10.95</span></div></div></div>
      <div class="menu-card"><div class="menu-info"><h3>Ghorma Sabjee</h3><p>Tender lamb or chicken marinated in lemon and lime with fresh coriander</p><div class="menu-footer"><span class="price">£10.95</span></div></div></div>
    </div>

    <!-- MAINS -->
    <div class="menu-grid" id="tab-mains">
      <div class="menu-card featured"><div class="menu-info"><h3>Tikka Masala</h3><p>Charcoal toasted, simmered in butter saffron cream masala — mild</p><div class="menu-footer"><span class="price">£9.50</span><span class="tag">Popular</span></div></div></div>
      <div class="menu-card"><div class="menu-info"><h3>Rogon</h3><p>Charcoal-grilled with eleven herbs and eleven spices</p><div class="menu-footer"><span class="price">£9.95</span></div></div></div>
      <div class="menu-card"><div class="menu-info"><h3>Sag Wala</h3><p>With fresh baby spinach and fragrant herbs. Available with chicken, lamb, prawn or king prawn</p><div class="menu-footer"><span class="price">£9.95–£14.95</span></div></div></div>
      <div class="menu-card"><div class="menu-info"><h3>Dansak <span class="heat">🌶</span></h3><p>Cooked with special lentils in thick sauce</p><div class="menu-footer"><span class="price">£8.95–£9.95</span></div></div></div>
      <div class="menu-card"><div class="menu-info"><h3>Jalfrezi <span class="heat">🌶🌶</span></h3><p>Sautéed with finely chopped green peppers, tomatoes, green chillies</p><div class="menu-footer"><span class="price">£9.95–£14.95</span></div></div></div>
      <div class="menu-card"><div class="menu-info"><h3>Balti</h3><p>Fine flavours enhanced by special herb and spice marination</p><div class="menu-footer"><span class="price">£9.95–£14.95</span></div></div></div>
      <div class="menu-card"><div class="menu-info"><h3>Almond Korma</h3><p>Diced chicken in fresh cream and almond — mild</p><div class="menu-footer"><span class="price">£9.50</span></div></div></div>
      <div class="menu-card"><div class="menu-info"><h3>Madras <span class="heat">🌶🌶🌶</span></h3><p>Very spicy preparation</p><div class="menu-footer"><span class="price">£9.50</span></div></div></div>
      <div class="menu-card"><div class="menu-info"><h3>Vindaloo <span class="heat">🌶🌶🌶</span></h3><p>Fiery hot curry</p><div class="menu-footer"><span class="price">£9.50</span></div></div></div>
    </div>

    <!-- TANDOORI -->
    <div class="menu-grid" id="tab-tandoori">
      <div class="menu-card featured"><div class="menu-info"><h3>Tandoori Mixed Grill</h3><p>Assortment of tandoori kebabs, tikka and lamb tikka; served with naan and salad</p><div class="menu-footer"><span class="price">£14.95</span><span class="tag">Signature</span></div></div></div>
      <div class="menu-card"><div class="menu-info"><h3>Murgh Tikka</h3><p>Diced breast chicken with peppers, tomatoes, onions</p><div class="menu-footer"><span class="price">£9.95</span></div></div></div>
      <div class="menu-card"><div class="menu-info"><h3>Tandoori King Prawns Sizzler</h3><p>King prawns with spices, onions, capsicum, tomatoes</p><div class="menu-footer"><span class="price">£14.95</span></div></div></div>
    </div>

    <!-- SEAFOOD -->
    <div class="menu-grid" id="tab-seafood">
      <div class="menu-card"><div class="menu-info"><h3>Machli Kata Masala</h3><p>Salmon chunks with ginger, garlic, mustard seeds</p><div class="menu-footer"><span class="price">£14.95</span></div></div></div>
      <div class="menu-card"><div class="menu-info"><h3>Shahi Jhinga</h3><p>King prawns in eleven herbs and spices with tomatoes</p><div class="menu-footer"><span class="price">£14.95</span></div></div></div>
      <div class="menu-card"><div class="menu-info"><h3>Jhinga Kadhai</h3><p>Grilled king prawns in fresh tomato and pepper sauce</p><div class="menu-footer"><span class="price">£14.95</span></div></div></div>
      <div class="menu-card"><div class="menu-info"><h3>Jhinga Makhni</h3><p>King prawns simmered in butter, saffron, creamy masala</p><div class="menu-footer"><span class="price">£14.95</span></div></div></div>
      <div class="menu-card"><div class="menu-info"><h3>Machli Fayzee</h3><p>Boneless salmon with peppers, coriander, spiced garlic</p><div class="menu-footer"><span class="price">£14.95</span></div></div></div>
    </div>

    <!-- VEGETABLE -->
    <div class="menu-grid" id="tab-veg">
      <div class="menu-card"><div class="menu-info"><h3>Royal Sabzi</h3><p>Mix of vegetables and paneer on glowing iron skillet</p><div class="menu-footer"><span class="price">£8.95</span></div></div></div>
      <div class="menu-card"><div class="menu-info"><h3>Papra Ki Sabzi <span class="heat">🌶🌶</span></h3><p>Charcoal toasted vegetables in yogurt and spice blend</p><div class="menu-footer"><span class="price">£8.95</span></div></div></div>
      <div class="menu-card"><div class="menu-info"><h3>Sabzi Sizzler</h3><p>Roasted vegetables with fried potato strips</p><div class="menu-footer"><span class="price">£8.95</span></div></div></div>
    </div>

    <!-- BREADS & RICE -->
    <div class="menu-grid" id="tab-breads">
      <div class="menu-card"><div class="menu-info"><h3>Plain Naan</h3><p>Freshly baked in tandoor</p><div class="menu-footer"><span class="price">£3.25</span></div></div></div>
      <div class="menu-card"><div class="menu-info"><h3>Garlic Naan</h3><p>With fresh garlic and butter</p><div class="menu-footer"><span class="price">£3.95</span></div></div></div>
      <div class="menu-card"><div class="menu-info"><h3>Keema Naan</h3><p>Stuffed with spiced minced lamb</p><div class="menu-footer"><span class="price">£3.95</span></div></div></div>
      <div class="menu-card featured"><div class="menu-info"><h3>Peshwari Naan</h3><p>Almonds, pistachios and raisins — lightly sweet</p><div class="menu-footer"><span class="price">£3.95</span><span class="tag">Popular</span></div></div></div>
      <div class="menu-card"><div class="menu-info"><h3>Pilau Rice</h3><p>Fragrant basmati with whole spices</p><div class="menu-footer"><span class="price">£3.50</span></div></div></div>
      <div class="menu-card featured"><div class="menu-info"><h3>Biryani</h3><p>Aromatic basmati with chicken, lamb or prawn</p><div class="menu-footer"><span class="price">£12.95</span><span class="tag">Signature</span></div></div></div>
      <div class="menu-card"><div class="menu-info"><h3>Vegetable Biryani</h3><p>Fragrant rice with seasonal vegetables and whole spices</p><div class="menu-footer"><span class="price">£11.50</span></div></div></div>
    </div>

    <div class="menu-cta">
      <p>Full menu and online ordering available at</p>
      <a href="https://houseofspiceonline.co.uk" class="btn btn-primary" target="_blank" rel="noopener">Order Online →</a>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Add menu CSS**

```css
/* ── MENU SECTION ── */
.menu-section { padding: 100px 0 80px; }
.section-header { text-align: center; margin-bottom: 48px; }
.section-header h2 { font-size: clamp(2rem, 5vw, 3rem); color: var(--color-gold); }
.section-sub { color: var(--text-muted); font-size: 0.95rem; max-width: 520px; margin: 0 auto; }

/* TABS */
.menu-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  margin-bottom: 40px;
}
.tab {
  padding: 9px 20px;
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 2px;
  color: var(--text-muted);
  font-family: 'Inter', sans-serif;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s;
}
.tab:hover { border-color: var(--color-gold); color: var(--color-gold); }
.tab.active {
  background: var(--color-crimson);
  border-color: var(--color-crimson);
  color: var(--color-wheat);
}

/* MENU GRID */
.menu-grid {
  display: none;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
  animation: fadeIn 0.3s ease;
}
.menu-grid.active { display: grid; }

@keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }

.menu-card {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 4px;
  overflow: hidden;
  transition: border-color 0.2s, transform 0.2s;
}
.menu-card:hover {
  border-color: var(--color-gold);
  transform: translateY(-2px);
}
.menu-card.featured { border-color: rgba(212,160,23,0.4); }
.menu-info { padding: 20px; }
.menu-info h3 {
  font-family: 'Playfair Display', serif;
  font-size: 1.05rem;
  color: var(--color-wheat);
  margin-bottom: 6px;
}
[data-theme="light"] .menu-info h3 { color: var(--color-dark); }
.menu-info p { font-size: 0.82rem; color: var(--text-muted); line-height: 1.5; }
.menu-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
}
.price {
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-gold);
  font-family: 'Playfair Display', serif;
}
.tag {
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  background: rgba(212,160,23,0.15);
  color: var(--color-gold);
  padding: 3px 10px;
  border-radius: 10px;
  border: 1px solid rgba(212,160,23,0.3);
}
.heat { font-size: 0.75rem; }

.menu-cta { text-align: center; margin-top: 52px; }
.menu-cta p { color: var(--text-muted); font-size: 0.88rem; margin-bottom: 16px; }
```

- [ ] **Step 3: Add menu tab switching to app.js**

```js
function initMenuTabs() {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.menu-grid').forEach(g => g.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById('tab-' + tab.dataset.tab).classList.add('active');
    });
  });
}
```

- [ ] **Step 4: Verify all 7 tabs switch correctly, cards render in both dark/light mode, featured cards have gold border**

- [ ] **Step 5: Commit**

```bash
git add clients/house-of-spice/
git commit -m "feat: add full menu section with 7 tabs and real menu data"
```

---

## Task 6: Sunday Buffet Banner

**Files:**
- Modify: `clients/house-of-spice/index.html`
- Modify: `clients/house-of-spice/style.css`

- [ ] **Step 1: Add buffet banner HTML after menu section**

```html
<!-- SUNDAY BUFFET -->
<section id="buffet" class="buffet-section">
  <div class="buffet-overlay"></div>
  <div class="buffet-content container">
    <span class="buffet-badge">Every Sunday</span>
    <span class="section-tag">All You Can Eat</span>
    <h2>Sunday Buffet</h2>
    <div class="ornament"><span>✦</span></div>
    <p>Join us every Sunday for our legendary all-you-can-eat buffet. Sample the full breadth of our kitchen — from sizzling tandoori to rich curries, fresh breads, and more. The perfect Sunday feast.</p>
    <div class="buffet-features">
      <span>🍗 Tandoori & Kebabs</span>
      <span>🍛 Rich Curries</span>
      <span>🫓 Fresh Breads</span>
      <span>🌿 Vegetarian Options</span>
    </div>
    <a href="tel:02085424838" class="btn btn-primary">Reserve Your Table — 020 8542 4838</a>
  </div>
</section>
```

- [ ] **Step 2: Add buffet CSS**

```css
/* ── SUNDAY BUFFET ── */
.buffet-section {
  position: relative;
  background: var(--color-crimson);
  padding: 100px 0;
  text-align: center;
  overflow: hidden;
}
.buffet-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background: url('https://images.unsplash.com/photo-1567188040759-fb8a883dc6d6?w=1400&auto=format&fit=crop') center/cover no-repeat;
  opacity: 0.12;
}
.buffet-overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at center, transparent 0%, rgba(139,0,0,0.7) 100%);
}
.buffet-content {
  position: relative;
  z-index: 2;
  max-width: 700px;
}
.buffet-badge {
  display: inline-block;
  background: var(--color-gold);
  color: #1a0a00;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 6px 18px;
  border-radius: 20px;
  margin-bottom: 16px;
}
.buffet-content h2 {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  color: var(--color-gold);
  margin-bottom: 0;
}
.buffet-content p {
  color: rgba(255,255,255,0.9);
  font-size: 1.05rem;
  line-height: 1.7;
  margin-bottom: 28px;
  max-width: 560px;
  margin-left: auto;
  margin-right: auto;
}
.buffet-features {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  margin-bottom: 36px;
}
.buffet-features span {
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.2);
  color: #fff;
  padding: 8px 18px;
  border-radius: 20px;
  font-size: 0.82rem;
  font-weight: 500;
}
```

- [ ] **Step 3: Verify full-width crimson buffet banner with gold heading, features, CTA button**

- [ ] **Step 4: Commit**

```bash
git add clients/house-of-spice/
git commit -m "feat: add Sunday buffet banner section"
```

---

## Task 7: About Section

**Files:**
- Modify: `clients/house-of-spice/index.html`
- Modify: `clients/house-of-spice/style.css`

- [ ] **Step 1: Add about HTML after buffet section**

```html
<!-- ABOUT -->
<section id="about" class="about-section">
  <div class="container about-grid">
    <div class="about-photos">
      <div class="about-photo ap-1" style="background-image: url('https://images.unsplash.com/photo-1701579231305-0754b29946c5?w=800&auto=format&fit=crop')"></div>
      <div class="about-photo ap-2" style="background-image: url('https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&auto=format&fit=crop')"></div>
      <div class="about-photo ap-3" style="background-image: url('https://images.unsplash.com/photo-1596797038530-2c107229654b?w=800&auto=format&fit=crop')"></div>
    </div>
    <div class="about-text">
      <span class="section-tag">Our Story</span>
      <h2>Authentic Flavours, Warmly Served</h2>
      <div class="ornament"><span>✦</span></div>
      <p>House of Spice has been bringing the rich, complex flavours of the Indian subcontinent to Raynes Park for years. Every dish is prepared with care — using traditional recipes, the finest halal ingredients, and a passion for authentic cooking.</p>
      <p>From our signature Tava sizzlers to our fragrant biryanis, we take pride in every plate. Whether you dine with us, collect, or order for delivery — we bring the restaurant experience to you.</p>
      <div class="about-stats">
        <div class="stat">
          <strong>🌿</strong>
          <span>Halal<br/>Certified</span>
        </div>
        <div class="stat">
          <strong>🕐</strong>
          <span>Open<br/>Tues–Sun</span>
        </div>
        <div class="stat">
          <strong>📍</strong>
          <span>Raynes Park<br/>SW20</span>
        </div>
        <div class="stat">
          <strong>🚗</strong>
          <span>Free<br/>Delivery</span>
        </div>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Add about CSS**

```css
/* ── ABOUT ── */
.about-section { padding: 100px 0; background: var(--bg-2); }
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
}
.about-photos {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 200px 200px;
  gap: 12px;
}
.about-photo {
  border-radius: 4px;
  background-size: cover;
  background-position: center;
}
.ap-1 { grid-row: 1 / 3; border-radius: 4px; }
.ap-2, .ap-3 { }
.about-text h2 {
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  color: var(--color-gold);
  margin-bottom: 8px;
}
.about-text p {
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.8;
  margin-bottom: 18px;
}
.about-stats {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  margin-top: 32px;
  padding-top: 32px;
  border-top: 1px solid var(--border);
}
.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  text-align: center;
  min-width: 60px;
}
.stat strong { font-size: 1.4rem; }
.stat span {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: var(--color-gold);
  line-height: 1.4;
}
@media (max-width: 768px) {
  .about-grid { grid-template-columns: 1fr; }
  .about-photos { grid-template-columns: 1fr 1fr; grid-template-rows: 160px 160px; }
  .ap-1 { grid-row: auto; }
}
```

- [ ] **Step 3: Verify two-column about layout, 3-photo collage, stats row in both themes**

- [ ] **Step 4: Commit**

```bash
git add clients/house-of-spice/
git commit -m "feat: add about/story section with photo collage"
```

---

## Task 8: Gallery Section

**Files:**
- Modify: `clients/house-of-spice/index.html`
- Modify: `clients/house-of-spice/style.css`

- [ ] **Step 1: Add gallery HTML after about section**

```html
<!-- GALLERY -->
<section id="gallery" class="gallery-section">
  <div class="container">
    <div class="section-header">
      <span class="section-tag">From Our Kitchen</span>
      <h2>A Feast for the Eyes</h2>
      <div class="ornament"><span>✦</span></div>
    </div>
  </div>
  <div class="gallery-masonry">
    <div class="g-item">
      <div class="g-img" style="background-image: url('https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=800&auto=format&fit=crop')"></div>
      <div class="g-overlay"><span>Biryani</span></div>
    </div>
    <div class="g-item">
      <div class="g-img" style="background-image: url('https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&auto=format&fit=crop')"></div>
      <div class="g-overlay"><span>Tikka Skewers</span></div>
    </div>
    <div class="g-item">
      <div class="g-img" style="background-image: url('https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&auto=format&fit=crop')"></div>
      <div class="g-overlay"><span>Rich Curry</span></div>
    </div>
    <div class="g-item">
      <div class="g-img" style="background-image: url('https://images.unsplash.com/photo-1532347231146-80afc9e3df2b?w=800&auto=format&fit=crop')"></div>
      <div class="g-overlay"><span>Spices</span></div>
    </div>
    <div class="g-item">
      <div class="g-img" style="background-image: url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&auto=format&fit=crop')"></div>
      <div class="g-overlay"><span>Restaurant Ambience</span></div>
    </div>
    <div class="g-item">
      <div class="g-img" style="background-image: url('https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&auto=format&fit=crop')"></div>
      <div class="g-overlay"><span>Fresh Naan</span></div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Add gallery CSS**

```css
/* ── GALLERY ── */
.gallery-section { padding: 100px 0; }
.gallery-masonry {
  columns: 3;
  column-gap: 12px;
  padding: 0 24px;
  max-width: 1160px;
  margin: 0 auto;
}
.g-item {
  position: relative;
  break-inside: avoid;
  margin-bottom: 12px;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
}
.g-img {
  width: 100%;
  padding-bottom: 75%;
  background-size: cover;
  background-position: center;
  transition: transform 0.5s ease;
}
.g-item:nth-child(2) .g-img { padding-bottom: 110%; }
.g-item:nth-child(5) .g-img { padding-bottom: 110%; }
.g-item:hover .g-img { transform: scale(1.04); }
.g-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(26,10,0,0.8) 0%, transparent 50%);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: flex-end;
  padding: 20px;
}
.g-item:hover .g-overlay { opacity: 1; }
.g-overlay span {
  color: var(--color-gold);
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
}
@media (max-width: 768px) { .gallery-masonry { columns: 2; } }
@media (max-width: 480px) { .gallery-masonry { columns: 1; } }
```

- [ ] **Step 3: Verify masonry gallery renders with 3 columns, hover overlays show captions**

- [ ] **Step 4: Commit**

```bash
git add clients/house-of-spice/
git commit -m "feat: add masonry gallery section"
```

---

## Task 9: Find Us + Footer

**Files:**
- Modify: `clients/house-of-spice/index.html`
- Modify: `clients/house-of-spice/style.css`

- [ ] **Step 1: Add Find Us + Footer HTML**

```html
<!-- FIND US -->
<section id="find-us" class="find-us-section">
  <div class="container find-us-grid">
    <div class="find-us-details">
      <span class="section-tag">Visit Us</span>
      <h2>Find House of Spice</h2>
      <div class="ornament"><span>✦</span></div>
      <div class="loc-list">
        <div class="loc-item">
          <span class="loc-icon">📍</span>
          <div>
            <strong>Address</strong>
            <p>507 Kingston Road, Raynes Park<br/>London, SW20 8SF</p>
          </div>
        </div>
        <div class="loc-item">
          <span class="loc-icon">🕐</span>
          <div>
            <strong>Opening Hours</strong>
            <p>Tuesday – Sunday</p>
            <p>Delivery from 5:00pm · Collection from 5:30pm</p>
            <p>Closed Mondays</p>
          </div>
        </div>
        <div class="loc-item">
          <span class="loc-icon">📞</span>
          <div>
            <strong>Phone</strong>
            <p><a href="tel:02085424838">020 8542 4838</a></p>
          </div>
        </div>
        <div class="loc-item">
          <span class="loc-icon">🚗</span>
          <div>
            <strong>Delivery Area</strong>
            <p>CR4 · KT1–5 · KT17 · KT19 · SM1 · SM3–5 · SW15 · SW17–20</p>
          </div>
        </div>
      </div>
      <div style="display:flex; gap: 12px; flex-wrap: wrap; margin-top: 32px;">
        <a href="https://maps.google.com/?q=507+Kingston+Road+SW20+8SF" target="_blank" rel="noopener" class="btn btn-primary">Open in Google Maps</a>
        <a href="https://houseofspiceonline.co.uk" target="_blank" rel="noopener" class="btn btn-outline">Order Online</a>
      </div>
    </div>
    <div class="map-card">
      <div class="map-card-inner">
        <div class="map-pin-icon">📍</div>
        <h3>House of Spice</h3>
        <p>507 Kingston Road</p>
        <p>Raynes Park, SW20 8SF</p>
        <div class="map-divider"></div>
        <p class="map-note">Near Raynes Park Station · SW20</p>
        <a href="https://maps.google.com/?q=507+Kingston+Road+SW20+8SF" target="_blank" rel="noopener" class="btn btn-primary" style="margin-top: 20px; width: 100%; justify-content: center;">Get Directions →</a>
      </div>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="container footer-inner">
    <div class="footer-brand">
      <a href="#" class="logo">
        <span class="logo-icon">🪔</span>
        <span class="logo-text">House of <em>Spice</em></span>
      </a>
      <p>Authentic Halal Indian Cuisine<br/>Raynes Park, SW20</p>
      <span class="halal-badge">🌿 Halal Certified</span>
    </div>
    <div class="footer-links">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="#menu">Our Menu</a></li>
        <li><a href="#buffet">Sunday Buffet</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#find-us">Find Us</a></li>
        <li><a href="https://houseofspiceonline.co.uk" target="_blank" rel="noopener">Order Online</a></li>
      </ul>
    </div>
    <div class="footer-links">
      <h4>Contact</h4>
      <ul>
        <li><a href="tel:02085424838">020 8542 4838</a></li>
        <li>507 Kingston Road</li>
        <li>Raynes Park, SW20 8SF</li>
        <li>Tues–Sun from 5:00pm</li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© 2026 House of Spice · Raynes Park · All rights reserved</p>
  </div>
</footer>
```

- [ ] **Step 2: Add Find Us + Footer CSS**

```css
/* ── FIND US ── */
.find-us-section { padding: 100px 0; background: var(--bg-2); }
.find-us-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: start;
}
.find-us-details h2 { font-size: clamp(1.6rem, 3vw, 2.4rem); color: var(--color-gold); }
.loc-list { display: flex; flex-direction: column; gap: 24px; margin-top: 8px; }
.loc-item { display: flex; gap: 16px; align-items: flex-start; }
.loc-icon { font-size: 1.3rem; margin-top: 2px; }
.loc-item strong { display: block; color: var(--color-gold); font-size: 0.82rem; letter-spacing: 0.5px; margin-bottom: 4px; }
.loc-item p { color: var(--text-muted); font-size: 0.88rem; line-height: 1.6; }
.loc-item a { color: var(--color-wheat); font-size: 1rem; font-weight: 600; }
[data-theme="light"] .loc-item a { color: var(--color-dark); }

.map-card {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 4px;
  overflow: hidden;
  position: sticky;
  top: 90px;
}
.map-card-inner { padding: 40px; text-align: center; }
.map-pin-icon { font-size: 3rem; margin-bottom: 16px; }
.map-card-inner h3 { font-size: 1.4rem; color: var(--color-gold); margin-bottom: 8px; }
.map-card-inner p { color: var(--text-muted); font-size: 0.88rem; line-height: 1.6; }
.map-divider { height: 1px; background: var(--border); margin: 20px 0; }
.map-note { font-size: 0.8rem; color: var(--color-gold); font-weight: 600; }

@media (max-width: 768px) { .find-us-grid { grid-template-columns: 1fr; } }

/* ── FOOTER ── */
footer { background: #0d0303; border-top: 2px solid var(--color-crimson); padding: 64px 0 0; }
.footer-inner {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  gap: 48px;
  padding-bottom: 48px;
}
.footer-brand p { color: var(--text-muted); font-size: 0.88rem; margin: 12px 0 16px; line-height: 1.6; }
.halal-badge {
  display: inline-block;
  background: rgba(212,160,23,0.1);
  border: 1px solid rgba(212,160,23,0.3);
  color: var(--color-gold);
  font-size: 0.75rem;
  font-weight: 600;
  padding: 5px 14px;
  border-radius: 20px;
}
.footer-links h4 {
  font-family: 'Playfair Display', serif;
  color: var(--color-gold);
  font-size: 0.95rem;
  margin-bottom: 16px;
}
.footer-links ul { list-style: none; display: flex; flex-direction: column; gap: 10px; }
.footer-links li, .footer-links a { color: var(--text-muted); font-size: 0.85rem; }
.footer-links a:hover { color: var(--color-gold); }
.footer-bottom {
  border-top: 1px solid var(--border);
  padding: 20px 24px;
  text-align: center;
  color: var(--text-muted);
  font-size: 0.78rem;
}
@media (max-width: 768px) { .footer-inner { grid-template-columns: 1fr; gap: 32px; } }
```

- [ ] **Step 3: Verify Find Us two-column layout, sticky map card, footer with 3 columns. Check both themes.**

- [ ] **Step 4: Commit**

```bash
git add clients/house-of-spice/
git commit -m "feat: add find us section and footer"
```

---

## Task 10: Mobile Responsiveness + Final Polish

**Files:**
- Modify: `clients/house-of-spice/style.css`
- Modify: `clients/house-of-spice/index.html` — add padding-top to first section after nav

- [ ] **Step 1: Add top padding to hero to account for fixed navbar**

In the hero CSS, ensure `#hero` has enough top clearance. The nav is 68px tall:

```css
/* Already covered by hero being 100vh — no change needed.
   Add padding-top to info-bar so it clears the navbar: */
.info-bar { scroll-margin-top: 68px; }
#menu, #buffet, #about, #find-us { scroll-margin-top: 68px; }
```

- [ ] **Step 2: Add final responsive breakpoints sweep**

```css
/* ── RESPONSIVE FINAL SWEEP ── */
@media (max-width: 480px) {
  .hero-ctas { flex-direction: column; align-items: center; }
  .hero-ctas .btn { width: 100%; justify-content: center; }
  .buffet-features { flex-direction: column; align-items: center; }
  .about-stats { justify-content: center; }
  .menu-tabs { gap: 6px; }
  .tab { padding: 7px 14px; font-size: 0.72rem; }
  .footer-inner { grid-template-columns: 1fr; }
}
```

- [ ] **Step 3: Resize browser to 375px width — verify no horizontal overflow, all sections readable, nav hamburger works**

- [ ] **Step 4: Toggle light mode on mobile — verify all sections look correct in warm-cream theme**

- [ ] **Step 5: Final check — scroll through full page in both themes, check all 7 menu tabs, click all CTAs, verify phone link works**

- [ ] **Step 6: Final commit**

```bash
git add clients/house-of-spice/
git commit -m "feat: House of Spice website complete — responsive, dark/light mode, full menu"
```

---

## Done

The site is complete at `clients/house-of-spice/index.html`. Open it directly in a browser — no build step required.
