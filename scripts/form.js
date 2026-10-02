// Product array provided in the assignment
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

// Wait until the DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  const selectElement = document.getElementById("product");

  // Loop through products and create <option> elements
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;       // value = product id
    option.textContent = product.name; // display = product name
    selectElement.appendChild(option);
  });
});


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
});


// Show last modification date in footer
document.addEventListener("DOMContentLoaded", () => {
  const lastModifiedElement = document.getElementById("lastModified");
  if (lastModifiedElement) {
    lastModifiedElement.textContent = "Last Modification: " + document.lastModified;
  }
});
