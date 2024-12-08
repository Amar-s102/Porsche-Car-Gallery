document.addEventListener('DOMContentLoaded', function () {
    let links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            let target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    let buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.transform = 'scale(1.1)';
        });
        button.addEventListener('mouseout', () => {
            button.style.transform = 'scale(1)';
        });
    });
});


let themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('change', () => {
    document.body.classList.toggle('light-theme');
});
let backToTopBtn = document.querySelector('.backToTop-btn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTopBtn.style.display = 'block';
        backToTopBtn.style.opacity = '1';
    } else {
        backToTopBtn.style.opacity = '0';
        setTimeout(() => {
            backToTopBtn.style.display = 'none';
        }, 300);
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
function toggleMenu() {
    let navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", () => {
    let themeToggle = document.querySelector(".theme-checkbox");
    let footer = document.getElementById("main-footer");

    themeToggle.addEventListener("change", () => {
        if (themeToggle.checked) {
            footer.style.backgroundColor = "#ffffff";
            footer.style.color = "#000000";

            let headings = footer.querySelectorAll("h1, h2, h3, h4, h5, h6");
            headings.forEach(heading => {
                heading.style.color = "#000000";
            });

            let links = footer.querySelectorAll("a");
            links.forEach(link => {
                link.style.color = "#000000";
                link.addEventListener("mouseover", () => link.style.color = "#555555");
                link.addEventListener("mouseout", () => link.style.color = "#000000");
            });
        } else {
            footer.style.backgroundColor = "#000000";
            footer.style.color = "#ffffff";

            let headings = footer.querySelectorAll("h1, h2, h3, h4, h5, h6");
            headings.forEach(heading => {
                heading.style.color = "#ffffff";
            });

            let links = footer.querySelectorAll("a");
            links.forEach(link => {
                link.style.color = "#a8a8a8"; 
                link.addEventListener("mouseover", () => link.style.color = "#ffffff");
                link.addEventListener("mouseout", () => link.style.color = "#a8a8a8");
            });
        }
    });
});

