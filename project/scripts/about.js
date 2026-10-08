// ===========================
// Hamburger Menu Toggle
// ===========================
const menuButton = document.getElementById("menu");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("open");
  // Swap icon ☰ ↔ ✖
  menuButton.textContent = nav.classList.contains("open") ? "✖" : "☰";
});

// ===========================
// Highlight Current Page
// ===========================
const currentPage = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.style.textDecoration = "underline";
    link.style.fontWeight = "bold";
  }
});
