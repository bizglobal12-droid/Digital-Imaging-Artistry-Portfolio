
"use strict";

// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

if (menuToggle && navigation) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "✕" : "☰";
  });

  navigation.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navigation.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "☰";
    });
  });
}

// Current year in footer
const footer = document.querySelector(".footer");

if (footer) {
  const yearText = footer.querySelector("p");

  if (yearText) {
    yearText.textContent =
      `© ${new Date().getFullYear()} Imran Ahmad Auwal. Portfolio and creative work.`;
  }
}

// Reveal sections as they enter the viewport
const revealElements = document.querySelectorAll(
  ".section-heading, .project-card, .skill-item, .about-content"
);

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach(element => {
    element.classList.add("reveal");
    observer.observe(element);
  });
}

