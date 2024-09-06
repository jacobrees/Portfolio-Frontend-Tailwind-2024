import "./style.css";

const openNavButton = document.querySelector(".navigation-menu");
const mobileNav = document.querySelector(".mobile-nav");
const closeNavButton = document.querySelector(".mobile-close-navbar");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.add("translate-x-[-100%]");
  });
});

openNavButton.addEventListener("click", () => {
  mobileNav.classList.remove("translate-x-[-100%]");
});

closeNavButton.addEventListener("click", () => {
  mobileNav.classList.add("translate-x-[-100%]");
});
