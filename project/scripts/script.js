// Theme toggle
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn?.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Form validation
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    formMessage.textContent = "✅ Message sent successfully!";
    formMessage.style.color = "green";
    form.reset();
  } else {
    formMessage.textContent = "❌ Please fill out all fields.";
    formMessage.style.color = "red";
  }
});
