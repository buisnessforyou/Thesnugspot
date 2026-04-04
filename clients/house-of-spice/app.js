// House of Spice — app.js

document.addEventListener('DOMContentLoaded', () => {
  initGate();
  initTheme();
  initNavbar();
  initMenuTabs();
  initMobileMenu();
});

/* ── PASSWORD GATE ── */
function initGate() {
  const gate = document.getElementById('passwordGate');
  if (sessionStorage.getItem('hos-auth') === '1') {
    gate.classList.add('hidden');
    return;
  }
  document.getElementById('gateForm').addEventListener('submit', e => {
    e.preventDefault();
    const val = document.getElementById('gateInput').value.trim().toLowerCase();
    if (val === 'luk') {
      sessionStorage.setItem('hos-auth', '1');
      gate.classList.add('hidden');
    } else {
      document.getElementById('gateError').textContent = 'Incorrect password.';
    }
  });
}

/* ── THEME ── */
function initTheme() {
  const saved = localStorage.getItem('hos-theme') || 'dark';
  applyTheme(saved);
  document.getElementById('themeSwitch').addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark', true);
  });
}

function applyTheme(theme, animate = false) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('hos-theme', theme);
  const lever = document.getElementById('switchLever');
  const led   = document.getElementById('switchLed');
  const label = document.getElementById('switchLabel');

  if (theme === 'light') {
    if (animate) {
      lever.classList.remove('snap-off');
      lever.classList.add('snap-on');
      lever.addEventListener('animationend', () => {
        lever.classList.remove('snap-on');
        lever.classList.add('is-on');
      }, { once: true });
    } else {
      lever.classList.add('is-on');
    }
    led && led.classList.add('led-on');
    label.textContent = 'Light';
  } else {
    if (animate) {
      lever.classList.remove('snap-on');
      lever.classList.add('snap-off');
      lever.addEventListener('animationend', () => {
        lever.classList.remove('snap-off');
        lever.classList.remove('is-on');
      }, { once: true });
    } else {
      lever.classList.remove('is-on');
    }
    led && led.classList.remove('led-on');
    label.textContent = 'Dark';
  }
}

/* ── NAVBAR ── */
function initNavbar() {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      nav.style.borderBottomColor = 'rgba(139,0,0,0.6)';
      nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.3)';
    } else {
      nav.style.borderBottomColor = '';
      nav.style.boxShadow = '';
    }
  }, { passive: true });
}

/* ── MENU TABS ── */
function initMenuTabs() {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.menu-grid').forEach(g => g.classList.remove('active'));
      tab.classList.add('active');
      const grid = document.getElementById('tab-' + tab.dataset.tab);
      if (grid) grid.classList.add('active');
    });
  });
}

/* ── MOBILE MENU ── */
function initMobileMenu() {
  const btn = document.getElementById('hamburger');
  const menu = document.getElementById('mobileMenu');
  if (!btn || !menu) return;
  btn.addEventListener('click', () => menu.classList.toggle('open'));
  menu.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => menu.classList.remove('open'))
  );
}
