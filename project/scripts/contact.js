// Hamburger toggle
const menuButton = document.getElementById("menu");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("open");
  menuButton.textContent = nav.classList.contains("open") ? "✖" : "☰";
});

// Simple form validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill out all required fields.");
    event.preventDefault();
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

