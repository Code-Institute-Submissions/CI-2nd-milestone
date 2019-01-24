import { initAutocomplete } from './autocomplete';
import { clearMarkers } from './places';

function initGoogleMaps() {


  // Initialize autocomplete
  const autocomplete = initAutocomplete(window.map);

  // var infowindow = new google.maps.InfoWindow();
  // var infowindowContent = document.getElementById('infowindow-content');
  // infowindow.setContent(infowindowContent);


  autocomplete.addListener('place_changed', () => {
    // Clear clearmarkers
    clearMarkers();

    // Get place
    var place = autocomplete.getPlace();

    // When no valid place has been selected
    if (!place.geometry) {
      // User entered the name of a Place that was not suggested and
      // pressed the Enter key, or the Place Details request failed.
      window.alert(`No details available for input: ${place.name}`);
      window.place = undefined;
      return;
    }

    window.place = place;

    // // If the place has a geometry, then present it on a map.
    // if (place.geometry.viewport) {
    //  map.fitBounds(place.geometry.viewport);
    // } else {
    //  map.setCenter(place.geometry.location);
    //  map.setZoom(11);  // Why 17? Because it looks good.
    // }

    // Do search query
    searchQuery();

  });

}

export { initGoogleMaps };