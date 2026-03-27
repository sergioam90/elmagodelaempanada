// Mobile navigation toggle
const toggle = document.getElementById('nav-toggle');
const menu = document.getElementById('nav-menu');
let overlay;

function createOverlay() {
    overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);
    overlay.addEventListener('click', closeMenu);
}

function openMenu() {
    menu.classList.add('open');
    toggle.classList.add('active');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Cerrar menu');
    if (!overlay) createOverlay();
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    menu.classList.remove('open');
    toggle.classList.remove('active');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menu');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
}

toggle.addEventListener('click', () => {
    menu.classList.contains('open') ? closeMenu() : openMenu();
});

// Close menu on link click
menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
});

// Close menu on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('open')) {
        closeMenu();
        toggle.focus();
    }
});

// Reviews slider
const track = document.getElementById('reviews-track');
const prevBtn = document.getElementById('reviews-prev');
const nextBtn = document.getElementById('reviews-next');

if (track && prevBtn && nextBtn) {
    const scrollAmount = 360;
    prevBtn.addEventListener('click', () => {
        track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
    nextBtn.addEventListener('click', () => {
        track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
}

// Header scroll effect
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 100) {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
    lastScroll = currentScroll;
}, { passive: true });
