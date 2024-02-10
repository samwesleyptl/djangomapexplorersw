// Initialize the map
var map = L.map('map').setView([51.505, -0.09], 13);

// Add the base OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add a GeoJSON layer for displaying spatial data
var geojsonLayer = L.geoJSON().addTo(map);

// Make a GET request to fetch GeoJSON data from the server
fetch('/api/data/')  // Replace this URL with the endpoint that serves your GeoJSON data
    .then(response => response.json())
    .then(data => {
        // Add the fetched GeoJSON data to the map
        geojsonLayer.addData(data);
    });
