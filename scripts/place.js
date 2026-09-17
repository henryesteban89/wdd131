// Footer year + last modified
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Static values for temperature and wind speed (match your HTML content)
const tempC = 25;       // Temperature in °C
const speedKmh = 10;    // Wind speed in km/h

// Wind chill calculation function (metric formula)
function calculateWindChill(temp, speed) {
  return (
    13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) +
    0.3965 * temp * Math.pow(speed, 0.16)
  ).toFixed(1);
}

// Check conditions before calling the function
let windChill = "N/A";
if (tempC <= 10 && speedKmh > 4.8) {
  windChill = calculateWindChill(tempC, speedKmh) + "°C";
}

// Display result in the Weather section
document.getElementById("windChill").textContent = windChill;
