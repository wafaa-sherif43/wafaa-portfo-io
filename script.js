// =========================
// SCROLL REVEAL ANIMATION
// =========================

const animatedElements = document.querySelectorAll(
    "section h2, section > p, .skill, .project-card, .service-card, .social-links, form"
);

animatedElements.forEach((element) => {
    element.classList.add("reveal");
});

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

animatedElements.forEach((element) => {
    observer.observe(element);
});


// =========================
// CONTACT FORM
// =========================

const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        alert("Thank you! Your message has been sent successfully ❤️");

        form.reset();
    });
}


// =========================
// NAVBAR SMOOTH SCROLL
// =========================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
    link.addEventListener("click", function(event) {

        const targetId = this.getAttribute("href");

        if (targetId && targetId.startsWith("#")) {

            event.preventDefault();

            const target = document.querySelector(targetId);

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }
    });
});


// =========================
// TYPING ANIMATION
// =========================

const typingText = document.getElementById("typing-text");

const words = [
    "Front-End Developer",
    "Computer Science Student",
    "Computer Teacher"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    if (!typingText) return;

    const currentWord = words[wordIndex];

    if (isDeleting) {
        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

    } else {
        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;
    }

    let speed = isDeleting ? 60 : 100;

    if (!isDeleting && charIndex === currentWord.length) {

        speed = 1800;
        isDeleting = true;

    } else if (isDeleting && charIndex === 0) {

        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 500;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// =========================
// CURSOR GLOW
// =========================

const cursorGlow = document.createElement("div");

cursorGlow.className = "cursor-glow";

document.body.appendChild(cursorGlow);

document.addEventListener("mousemove", function(event) {

    cursorGlow.style.left = event.clientX + "px";
    cursorGlow.style.top = event.clientY + "px";

});


// =========================
// 3D CARD EFFECT
// =========================

const cards = document.querySelectorAll(
    ".project-card, .service-card"
);

cards.forEach((card) => {

    card.addEventListener("mousemove", function(event) {

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -6;

        const rotateY =
            ((x - centerX) / centerX) * 6;

        card.style.transform =
            `perspective(800px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;
    });

    card.addEventListener("mouseleave", function() {

        card.style.transform =
            "perspective(800px) rotateX(0) rotateY(0) translateY(0)";

    });

});


// =========================
// RIPPLE EFFECT
// =========================

const rippleButtons = document.querySelectorAll(
    ".cv-button, .project-card a, .social-links a, form button"
);

rippleButtons.forEach((button) => {

    button.addEventListener("click", function(event) {

        const ripple = document.createElement("span");

        ripple.classList.add("ripple");

        const rect = button.getBoundingClientRect();

        const size =
            Math.max(rect.width, rect.height);

        ripple.style.width = size + "px";
        ripple.style.height = size + "px";

        ripple.style.left =
            event.clientX - rect.left - size / 2 + "px";

        ripple.style.top =
            event.clientY - rect.top - size / 2 + "px";

        button.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);

    });

});


// =========================
// ACTIVE NAVBAR
// =========================

const sections = document.querySelectorAll("section");

const navigationLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", function() {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });

    navigationLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {
            link.classList.add("active");
        }

    });

});


// =========================
// CREATE PARTICLES
// =========================

const header = document.querySelector("header");

if (header) {

    for (let i = 0; i < 25; i++) {

        const particle =
            document.createElement("span");

        particle.classList.add("particle");

        particle.style.left =
            Math.random() * 100 + "%";

        particle.style.animationDuration =
            5 + Math.random() * 8 + "s";

        particle.style.animationDelay =
            Math.random() * 5 + "s";

        particle.style.width =
            3 + Math.random() * 5 + "px";

        particle.style.height =
            particle.style.width;

        header.appendChild(particle);
    }
}
