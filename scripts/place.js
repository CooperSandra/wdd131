// Get year and last modified
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Static weather variables
const temp = parseFloat(document.getElementById('temp').textContent);
const wind = parseFloat(document.getElementById('wind').textContent);
const windChill = document.getElementById('windChill');

// Calculate windchill
function calculateWindChill(t, w) {
    return (35.74 + 0.6215 * t - 35.74 * Math.pow(w, 0.16) + 0.3965 * t * Math.pow(wind, 0.16)).toFixed(1);
}

if (temp <= 50 && wind > 3) {
    windChill.textContent = '${calculateWindChill(temp, wind)}°F';
}
else {
    windChill.textContent = 'N/A';
}

