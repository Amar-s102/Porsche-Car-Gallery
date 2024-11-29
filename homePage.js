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
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('change', () => {
    document.body.classList.toggle('light-theme');
});
const backToTopBtn = document.querySelector('.backToTop-btn');

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
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.querySelector(".theme-checkbox");
    const footer = document.getElementById("main-footer");

    themeToggle.addEventListener("change", () => {
        if (themeToggle.checked) {
            footer.style.backgroundColor = "#ffffff";
            footer.style.color = "#000000";

            const headings = footer.querySelectorAll("h1, h2, h3, h4, h5, h6");
            headings.forEach(heading => {
                heading.style.color = "#000000";
            });

            const links = footer.querySelectorAll("a");
            links.forEach(link => {
                link.style.color = "#000000";
                link.addEventListener("mouseover", () => link.style.color = "#555555");
                link.addEventListener("mouseout", () => link.style.color = "#000000");
            });
        } else {
            footer.style.backgroundColor = "#000000";
            footer.style.color = "#ffffff";

            const headings = footer.querySelectorAll("h1, h2, h3, h4, h5, h6");
            headings.forEach(heading => {
                heading.style.color = "#ffffff";
            });

            const links = footer.querySelectorAll("a");
            links.forEach(link => {
                link.style.color = "#a8a8a8"; // Set link color to light gray
                link.addEventListener("mouseover", () => link.style.color = "#ffffff");
                link.addEventListener("mouseout", () => link.style.color = "#a8a8a8");
            });
        }
    });
});
// function ShowPopup() {
//     feedbackPopup.classList.toggle("show");
// }
// document.addEventListener("DOMContentLoaded", () => {
//     let showPopupButton = document.getElementById("showPopupButton");
//     let feedbackPopup = document.getElementById("feedback-popup");
//     let submitFeedback = document.getElementById("submit-feedback");
//     let feedbackText = document.getElementById("feedback-text");
//     let closePopup = document.getElementById("close-popup");

//     feedbackPopup.style.display = 'none';
    
//     showPopupButton.addEventListener("click",(){
//        feedbackPopup.style.display='flex';
//     });

//     closePopup.addEventListener("click", (event) => {
//         feedbackPopup.style.display = 'none';
//     });

//     feedbackPopup.addEventListener("click", (event) => {
//         if (event.target === feedbackPopup) {
//             feedbackPopup.style.display = 'none';
//         }
//     });

//     submitFeedback.addEventListener("click", () => {
//         let feedback = feedbackText.value.trim();
//         if (feedback) {
//             let feedbackList = JSON.parse(localStorage.getItem("feedback")) || [];
//             feedbackList.push(feedback);
//             localStorage.setItem("feedback", JSON.stringify(feedbackList));

//             alert("Thank you for your feedback!");
//             feedbackPopup.style.display = 'none';
//         }
//         else {
//             alert("Please enter your feedback before submiting!");
//         }
//     });
// });

