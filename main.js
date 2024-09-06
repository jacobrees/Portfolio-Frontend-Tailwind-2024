import "./style.css";

const openNavButton = document.querySelector(".navigation-menu");
const mobileNav = document.querySelector(".mobile-nav");
const closeNavButton = document.querySelector(".mobile-close-navbar");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.add("translate-x-[-100%]");
    setTimeout(() => {
      mobileNav.classList.add("hidden");
    }, 500); // Wait for the transition to finish before hiding
  });
});

openNavButton.addEventListener("click", () => {
  mobileNav.classList.remove("hidden");
  setTimeout(() => {
    mobileNav.classList.remove("translate-x-[-100%]");
  }, 10); // Small delay to ensure the hidden class is removed before starting transition
});

closeNavButton.addEventListener("click", () => {
  mobileNav.classList.add("translate-x-[-100%]");
  setTimeout(() => {
    mobileNav.classList.add("hidden");
  }, 500); // Wait for the transition to finish before hiding
});
