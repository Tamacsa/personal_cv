// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Contact button functionality
document.querySelector('.btn').addEventListener('click', function() {
    const recipientEmail = "tamacsa1998@gmail.com";
    const emailSubject = "Kapcsolatfelvétel";
    const emailBody = "Üdvözlöm, Tamás Attila Csaba!";

    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.open(mailtoLink, "_blank");
});

// Highlighting the current section in the navigation
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 70;
        if (pageYOffset >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
});

// Intersection Observer for revealing elements on scroll
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Animate business images on scroll
document.querySelectorAll('.business-image').forEach(image => {
    observer.observe(image);
});

// Initialize the navbar collapse
document.addEventListener('DOMContentLoaded', function () {
    var navbarCollapse = new bootstrap.Collapse(document.getElementById('navbarNav'), {
        toggle: false
    });
});
