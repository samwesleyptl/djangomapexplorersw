// Initialize the map
var map = L.map('map').setView([51.505, -0.09], 13);

// Add a tile layer (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Customize map container
document.getElementById('map').style.height = '600px';
document.getElementById('map').style.width = '100%';

// Add any additional JavaScript code here
