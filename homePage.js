document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add interactive hover effects
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.transform = 'scale(1.1)';
        });
        button.addEventListener('mouseout', () => {
            button.style.transform = 'scale(1)';
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll("[data-animate]");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible");
            }
        });
    });

    elements.forEach((el) => observer.observe(el));
});
document.addEventListener("DOMContentLoaded", () => {
    const section = document.querySelector('.image-section h2');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    });

    observer.observe(section);
});
document.addEventListener("DOMContentLoaded", () => {
    const nextSection = document.querySelector(".next-section");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    });
    observer.observe(nextSection);
});
// Select the theme toggle checkbox
const themeToggle = document.getElementById('theme-toggle');

// Add an event listener to the checkbox
themeToggle.addEventListener('change', () => {
    // Toggle the light theme class on the body
    document.body.classList.toggle('light-theme');
});
// Select the Back to Top button
const backToTopBtn = document.querySelector('.backToTop-btn');

// Add an event listener for scrolling
window.addEventListener('scroll', () => {
    // Show the button when scrolled down 200px, hide when at the top
    if (window.scrollY > 200) {
        backToTopBtn.style.display = 'block'; // Show the button
        backToTopBtn.style.opacity = '1'; // Fade in
    } else {
        backToTopBtn.style.opacity = '0'; // Fade out
        setTimeout(() => {
            backToTopBtn.style.display = 'none'; // Hide completely
        }, 300); // Matches the fade-out duration
    }
});

// Add an event listener for the button click
backToTopBtn.addEventListener('click', () => {
    // Smoothly scroll back to the top
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

