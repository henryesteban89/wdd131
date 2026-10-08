const menuButton = document.getElementById("menu");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("open");
  // Change icon ☰ ↔ ✖
  menuButton.textContent = nav.classList.contains("open") ? "✖" : "☰";
});
