// temples.js

// Footer year and last modified
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

// Hamburger menu toggle
const menuButton = document.getElementById("menu");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("open");
  menuButton.textContent = nav.classList.contains("open") ? "✖" : "☰";
});

