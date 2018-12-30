// Initialize directions google maps
var directionsService = new google.maps.DirectionsService;
var directionsDisplay = new google.maps.DirectionsRenderer;

// Initialize directions
directionsDisplay.setMap(map);

export { directionsService, directionsDisplay };

// directionsService.route({
//       origin: 'Amsterdam',
//       destination: 'Delft',
//       travelMode: 'DRIVING'
//     }, function(response, status) {
//       if (status === 'OK') {
//         directionsDisplay.setDirections(response);
//       } else {
//         window.alert('Directions request failed due to ' + status);
//       }
//     });
