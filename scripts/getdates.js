// Output current year
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Output last modified date with label
document.getElementById("lastModified").textContent = "Last modification: " + document.lastModified;

