// Initialize directions google maps
var directionsService = new google.maps.DirectionsService;
var directionsDisplay = new google.maps.DirectionsRenderer;

// Initialize directions
directionsDisplay.setMap(map);

export { directionsService, directionsDisplay };
