// ===================================
// Navigation Scroll Effect
// ===================================
const nav = document.querySelector('.nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ===================================
// Mobile Menu Toggle
// ===================================
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navLinkItems = document.querySelectorAll('.nav-links a');
    navLinkItems.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target)) {
            navLinks.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        }
    });
}

// ===================================
// Smooth Scrolling for Anchor Links
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Intersection Observer for Fade-in Animations
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements
const animatedElements = document.querySelectorAll('.service-card, .highlight-item, .hero-content');
animatedElements.forEach(el => {
    observer.observe(el);
});

// ===================================
// Contact Form Handling
// ===================================
// Form is now handled by Formspree - no custom JS needed
// The form will submit directly to Formspree and redirect to a thank you page

// ===================================
// Active Navigation Link Highlighting
// ===================================
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollPosition = window.pageYOffset + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);

        if (navLink) {
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLink.style.color = 'var(--color-accent)';
            } else {
                navLink.style.color = '';
            }
        }
    });
}

window.addEventListener('scroll', highlightNavigation);
window.addEventListener('load', highlightNavigation);

// ===================================
// Performance Optimization: Debounce
// ===================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll events if needed
const debouncedHighlight = debounce(highlightNavigation, 10);
window.addEventListener('scroll', debouncedHighlight);

// ===================================
// Apple-style Parallax Scroll Effects
// ===================================
function appleParallaxEffect() {
    const scrolled = window.pageYOffset;

    // Parallax effect for background dunes
    const bodyAfter = document.querySelector('body');
    if (bodyAfter) {
        bodyAfter.style.setProperty('--scroll-position', scrolled * 0.5 + 'px');
    }

    // Fade and scale effect for hero on scroll
    const hero = document.querySelector('.hero');
    if (hero) {
        const heroHeight = hero.offsetHeight;
        const scrollPercent = Math.min(scrolled / heroHeight, 1);
        const opacity = 1 - scrollPercent * 0.8;
        const scale = 1 - scrollPercent * 0.1;

        hero.style.opacity = opacity;
        hero.style.transform = `scale(${scale})`;
    }

    // Subtle parallax for sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionScroll = scrolled - sectionTop;

        if (sectionScroll > -window.innerHeight && sectionScroll < window.innerHeight) {
            const speed = 0.1 + (index * 0.05);
            const yPos = -(sectionScroll * speed);
            section.style.transform = `translateY(${yPos}px)`;
        }
    });

    // Service cards stagger effect
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (cardTop < windowHeight * 0.8) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
            card.style.transitionDelay = `${index * 0.1}s`;
        }
    });
}

// Smooth scroll with RAF for better performance
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            appleParallaxEffect();
            ticking = false;
        });
        ticking = true;
    }
});

// ===================================
// Initialize on DOM Load
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('JurAI Website loaded successfully');

    // Add initial animation to hero
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        setTimeout(() => {
            heroContent.classList.add('fade-in-up');
        }, 100);
    }

    // Initialize parallax
    appleParallaxEffect();

    // Set initial state for service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });
});
