// Hamburger toggle
const menuButton = document.getElementById("menu");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("open");
  menuButton.textContent = nav.classList.contains("open") ? "✖" : "☰";
});

// Reviews array from localStorage
const reviews = JSON.parse(localStorage.getItem("reviews")) || [];

// Review form handler
document.getElementById("reviewForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const review = {
    service: document.getElementById("product").value,
    rating: document.querySelector("input[name='rating']:checked").value,
    text: document.getElementById("review").value,
    user: document.getElementById("username").value
  };

  reviews.push(review);
  localStorage.setItem("reviews", JSON.stringify(reviews));

  alert(`Thanks, ${review.user}! Your ${review.service} review was saved.`);
  this.reset();
});

