// Smooth scroll for browsers that don't support CSS scroll-behavior
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Highlight active nav link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('main section');
    let scrollPos = window.scrollY + 100;
    sections.forEach(section => {
        if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
            document.querySelectorAll('nav a').forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === `#${section.id}`);
            });
        }
    });
});

// Contact form thank you (if not using EmailJS)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        document.getElementById('form-status').textContent = "Thank you for your message!";
        contactForm.reset();
    });
}
// ✅ Initialize EmailJS
emailjs.init('FwovWVLdVl3woLwRo'); // ← your public key here

// ✅ Get form and status elements
const form = document.getElementById('contactForm'); // ← make sure your form has id="contactForm"
const statusText = document.getElementById('status'); // ← make sure your status element id="status"

// ✅ Handle form submission
form.addEventListener('submit', function (e) {
  e.preventDefault();
  statusText.textContent = "Sending...";

  emailjs.sendForm(
    'service_0y7tu1h',    // ← your service ID
    'template_dp99hr8',   // ← your template ID
    this
  )
    .then(() => {
      statusText.textContent = "✅ Message sent successfully!";
      form.reset();
    })
    .catch((error) => {
      statusText.textContent = "❌ Error sending message.";
      console.error('EmailJS Error:', error); // Logs the exact error
    });
});
