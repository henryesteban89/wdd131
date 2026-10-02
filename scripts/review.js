document.addEventListener("DOMContentLoaded", () => {
  // Get current count from localStorage (or start at 0 if none exists)
  let count = localStorage.getItem("reviewCount");
  
  if (!count) {
    count = 0;
  }

  // Increment by one each time review.html loads
  count = parseInt(count) + 1;

  // Save updated count back to localStorage
  localStorage.setItem("reviewCount", count);

  // Display the count on the page
  document.getElementById("reviewCount").textContent = count;

  // Show last modification date in footer
  const lastModifiedElement = document.getElementById("lastModified");
  if (lastModifiedElement) {
    lastModifiedElement.textContent = "Last Modification: " + document.lastModified;
  }
});
