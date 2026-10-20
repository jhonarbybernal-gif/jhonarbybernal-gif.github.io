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

// Live Functional Contact Form Handler (Web3Forms API)
const contactForm = document.getElementById('contact-form');
const responseMsg = document.getElementById('form-response');
const submitBtn = document.getElementById('submit-btn');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Update button UI while sending
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';

        const formData = new FormData(contactForm);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let resJson = await response.json();
            if (response.status == 200) {
                responseMsg.className = "mt-4 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm text-center";
                responseMsg.textContent = "Thank you! Your message has been sent successfully.";
                contactForm.reset();
            } else {
                responseMsg.className = "mt-4 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-sm text-center";
                responseMsg.textContent = resJson.message || "Failed to send message. Please check your access key.";
            }
        })
        .catch(error => {
            responseMsg.className = "mt-4 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-sm text-center";
            responseMsg.textContent = "Something went wrong. Please try again later.";
        })
        .then(function() {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
            responseMsg.classList.remove('hidden');

            setTimeout(() => {
                responseMsg.classList.add('hidden');
            }, 6000);
        });
    });
}