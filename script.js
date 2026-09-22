// Portfolio JavaScript Interactions

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Theme Toggle Logic
    const themeToggleBtn = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;

    // Check saved theme or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        htmlElement.classList.remove('dark');
    } else {
        htmlElement.classList.add('dark');
    }

    themeToggleBtn.addEventListener('click', () => {
        if (htmlElement.classList.contains('dark')) {
            htmlElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            htmlElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    });

    // 2. Mobile Menu Drawer
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // 3. Technical Skills Filter
    const filterBtns = document.querySelectorAll('.skill-filter-btn');
    const skillCards = document.querySelectorAll('.skill-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            filterBtns.forEach(b => {
                b.classList.remove('active', 'bg-brand-600', 'text-white');
                b.classList.add('bg-slate-900', 'text-slate-300');
            });

            // Set active class to clicked button
            btn.classList.add('active', 'bg-brand-600', 'text-white');
            btn.classList.remove('bg-slate-900', 'text-slate-300');

            const filterValue = btn.getAttribute('data-filter');

            skillCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                if (filterValue === 'all' || cardCategory === filterValue) {
                    card.style.display = 'block';
                    card.classList.add('animate-fadeIn');
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // 4. Contact Form Submission Handling
    const contactForm = document.getElementById('contactForm');
    const formFeedback = document.getElementById('formFeedback');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            formFeedback.classList.remove('hidden');
            contactForm.reset();
            setTimeout(() => {
                formFeedback.classList.add('hidden');
            }, 5000);
        });
    }

    // 5. Header Scroll Shadow
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('shadow-xl', 'bg-slate-950/95');
        } else {
            navbar.classList.remove('shadow-xl', 'bg-slate-950/95');
        }
    });

});
