// Hamburger toggle for Services page
const menuButton = document.getElementById("menu");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("open");
  menuButton.textContent = nav.classList.contains("open") ? "✖" : "☰";
});

// Highlight current page
const currentPage = window.location.pathname.split("/").pop();
document.querySelectorAll("nav a").forEach(link => {
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
