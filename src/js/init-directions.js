function initDirections() {
    if (!google) return false;

    // Initialize directions google maps
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;

    // Initialize directions
    directionsDisplay.setMap(map);

    // Add to global space
    window.directionsService = directionsService;
    window.directionsDisplay = directionsDisplay;

    return {
        directionsService: directionsService,
        directionsDisplay: directionsDisplay
    };
}


export { initDirections };
