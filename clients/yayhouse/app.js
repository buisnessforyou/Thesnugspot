// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// ===== HAMBURGER MENU =====
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

// Close mobile menu on link click
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// ===== MENU TABS =====
const tabs = document.querySelectorAll('.tab');
const menuGrids = document.querySelectorAll('.menu-grid');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    menuGrids.forEach(g => g.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('tab-' + tab.dataset.tab).classList.add('active');
  });
});

// ===== TOAST NOTIFICATION =====
function showToast(message) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ===== CLICK TRACKING =====
const clickMessages = {
  order_now:       '🛒 Opening order page...',
  book_table:      '📅 Redirecting to booking...',
  add_flatwhite:   '☕ Flat White added to order!',
  add_flatwhite2:  '☕ Flat White added to order!',
  add_matcha:      '🍵 Matcha Latte added!',
  add_matcha2:     '🍵 Matcha Latte added!',
  add_espresso:    '☕ Espresso added!',
  add_coldbrew:    '🧊 Cold Brew added!',
  add_chai:        '🍂 Chai added!',
  add_avo:         '🥑 Avo Toast added!',
  add_granola:     '🥣 Granola Bowl added!',
  add_sandwich:    '🥪 Club Sandwich added!',
  add_cake:        '🍰 Banana Loaf added!',
  add_salad:       '🥗 Yayhouse Salad added!',
  daily_special:   '🎉 Deal added! Great choice.',
  student_deal:    '🎓 Student deal claimed!',
  brunch_deal:     '🍳 Booking brunch for two...',
  loyalty:         '⭐ Setting up loyalty card...',
  full_menu:       '📋 Full menu loading...',
  full_food_menu:  '📋 Full menu loading...',
  get_directions:  '📍 Opening Google Maps...',
  order_pickup:    '🛵 Click & collect selected!',
  open_maps:       '🗺️ Opening Maps...',
  see_all_reviews: '⭐ Opening Google Reviews...',
  instagram:       '📸 Opening Instagram...',
  footer_instagram:'📸 Opening Instagram...',
  footer_facebook: '👍 Opening Facebook...',
  footer_tiktok:   '🎵 Opening TikTok...',
  sticky_order:    '🛒 Opening order page...',
};

function trackClick(action) {
  const msg = clickMessages[action] || '✓ Done!';
  showToast(msg);
  // In production: replace with analytics call e.g. gtag('event', action)
  console.log('[Yayhouse] Click tracked:', action);
}

// ===== EMAIL SIGNUP =====
function handleSignup(e) {
  e.preventDefault();
  const email = e.target.querySelector('input').value;
  showToast('🎉 Welcome to Yayhouse Rewards!');
  e.target.reset();
  console.log('[Yayhouse] Email signup:', email);
}

// ===== SCROLL ANIMATIONS =====
const observerOptions = {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Apply fade-up to key elements
document.querySelectorAll(
  '.menu-card, .review-card, .gallery-item, .about-img, .special-item, .loc-item, .coffee-card'
).forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(28px)';
  el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
  observer.observe(el);
});

// ===== SMOOTH ANCHOR NAV =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
    }
  });
});
