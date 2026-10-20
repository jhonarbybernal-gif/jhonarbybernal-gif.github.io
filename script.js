// Set dynamic current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu toggle logic
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Simple Form Submission Handler
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const response = document.getElementById('form-response');
        
        contactForm.reset();
        if (response) {
            response.classList.remove('hidden');
            
            setTimeout(() => {
                response.classList.add('hidden');
            }, 4000);
        }
    });
}