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

// ============================
// Last Updated Date
// ============================
function showLastUpdated() {
  const lastModifiedElement = document.getElementById("lastModified");
  if (lastModifiedElement) {
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-US', options);
    lastModifiedElement.textContent = `Last Updated: ${formattedDate}`;
  }
}
showLastUpdated();

