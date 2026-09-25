// footer
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

// Hamburger menu toggle
const menuButton = document.getElementById("menu");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("open");
});


// Temple data
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005-08-07",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888-05-21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015-06-07",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020-05-02",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974-11-19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986-01-10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983-12-02",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
  templeName: "Miraflores Guatemala City Temple",
  location: "Guatemala City, Guatemala",
  dedicated: "2026-10-11", // Dedication date by Elder Gerrit W. Gong
  area: 30000, // Approximate area (update if exact figure is available)
  imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/miraflores-guatemala-city-guatemala-temple/miraflores-guatemala-city-guatemala-temple-72192.jpg"
},
{
  templeName: "Quetzaltenango Guatemala Temple",
  location: "Quetzaltenango, Guatemala",
  dedicated: "2011-12-11", // Dedication date by President Dieter F. Uchtdorf
  area: 21085,
  imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/quetzaltenango-guatemala-temple/quetzaltenango-guatemala-temple-3959.jpg"
},
  {
  templeName: "Guatemala City Temple",
  location: "Guatemala City, Guatemala",
  dedicated: "1984-12-14",
  area: 11600,
  imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/guatemala-city-guatemala-temple/guatemala-city-guatemala-temple-68580.jpg"
}
];

function getYear(dateString) {
  return new Date(dateString).getFullYear();
}


// Utility: render temple cards
function renderTemples(filteredTemples) {
  const container = document.getElementById("temple-cards");
  container.innerHTML = ""; // clear previous
  filteredTemples.forEach(t => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <h2>${t.templeName}</h2>
      <p><strong>Location:</strong> ${t.location}</p>
      <p><strong>Dedicated:</strong> ${t.dedicated}</p>
      <p><strong>Area:</strong> ${t.area.toLocaleString()} sq ft</p>
      <img src="${t.imageUrl}" alt="${t.templeName}" loading="lazy">
    `;
    container.appendChild(card);
  });
}

// Filters
document.getElementById("home").addEventListener("click", () => renderTemples(temples));
document.getElementById("old").addEventListener("click", () => renderTemples(temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900)));
document.getElementById("new").addEventListener("click", () => renderTemples(temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000)));
document.getElementById("large").addEventListener("click", () => renderTemples(temples.filter(t => t.area > 90000)));
document.getElementById("small").addEventListener("click", () => renderTemples(temples.filter(t => t.area < 10000)));

// Initial load
renderTemples(temples);

// Footer year and last modified
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
