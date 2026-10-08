// Hamburger toggle
const menuButton = document.getElementById("menu");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("open");
  menuButton.textContent = nav.classList.contains("open") ? "✖" : "☰";
});

// Simple review form handler
document.getElementById("reviewForm").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Thank you for your review! It has been submitted.");
  this.reset();
});
