const menuButton = document.getElementById("menu");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("open");
  // Change icon ☰ ↔ ✖
  menuButton.textContent = nav.classList.contains("open") ? "✖" : "☰";
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

