
'use strict';

// ---------------------- Navbar Scroll Effect ----------------------
const navbar = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if (!navbar) return;
  if (window.scrollY > 50) {
    navbar.classList.add("bg-blue-950", "shadow-lg");
    navbar.classList.remove("bg-transparent");
  } else {
    navbar.classList.add("bg-transparent");
    navbar.classList.remove("bg-blue-950", "shadow-lg");
  }
});

// ---------------------- Mobile Menu Toggle ----------------------
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
});


// ---------------------- Slide Show ----------------------
let currentSlide = 0;
const slides = [
  {
    title: "Your Hygienic Home Our Responsibility",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "assets/slide1.jpg",
  },
  {
    title: "Professional Cleaning Services",
    description:
      "Experience top-quality cleaning solutions tailored to your needs. Our expert team ensures your home sparkles with cleanliness.",
    image: "assets/slide2.jpg",
  },
  {
    title: "Trusted by Thousands",
    description:
      "Join our satisfied customers who trust us with their homes. We deliver exceptional results every time with attention to detail.",
    image: "assets/slide3.jpg",
  },
];

function updateSlide() {
  const titleEl = document.getElementById("slideTitle");
  const descEl = document.getElementById("slideDescription");
  const imageEl = document.getElementById("slideImage");

  if (titleEl) titleEl.textContent = slides[currentSlide].title;
  if (descEl) descEl.textContent = slides[currentSlide].description;
  if (imageEl) imageEl.style.backgroundImage = `url('${slides[currentSlide].image}')`;

  slides.forEach((_, i) => {
    const indicator = document.getElementById(`indicator${i}`);
    if (!indicator) return;
    indicator.className =
      i === currentSlide
        ? "h-3 w-8 rounded-full bg-white transition-all duration-300"
        : "h-3 w-3 rounded-full bg-white/50 transition-all duration-300 hover:bg-white/70";
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlide();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlide();
}

function goToSlide(index) {
  if (typeof index !== "number" || index < 0 || index >= slides.length) return;
  currentSlide = index;
  updateSlide();
}

// expose to HTML onclick
window.nextSlide = nextSlide;
window.prevSlide = prevSlide;
window.goToSlide = goToSlide;

// Auto-slide every 5s
document.addEventListener('DOMContentLoaded', () => {
  updateSlide();
  setInterval(nextSlide, 5000);
});

