import { mapStyle } from './map-style';
import { addMarker } from './add-map-markers';
import { initAutocomplete } from './autocomplete';
import { searchPlaces } from './places';

// Initialize and add the map
function initMap() {

    // The map, centered at Delft
    var map = new google.maps.Map(
      // document.getElementById
      document.getElementById('map'), {
        zoom: 11,
        center: {
          lat: 52.011577,
          lng: 4.357068
        },
        mapTypeIds: ['roadmap'],
        mapTypeControl: false,
        styles: mapStyle
      });

    // Initialize autocomplete
    const autocomplete = initAutocomplete(map);


    // var infowindow = new google.maps.InfoWindow();
    // var infowindowContent = document.getElementById('infowindow-content');
    // infowindow.setContent(infowindowContent);


    autocomplete.addListener('place_changed', () => {
      // Get place
      var place = autocomplete.getPlace();

      // When no valid place has been selected
      if (!place.geometry) {
       // User entered the name of a Place that was not suggested and
       // pressed the Enter key, or the Place Details request failed.
       window.alert(`No details available for input: ${place.name}`);
       return;
      }

      // If the place has a geometry, then present it on a map.
      if (place.geometry.viewport) {
       map.fitBounds(place.geometry.viewport);
      } else {
       map.setCenter(place.geometry.location);
       map.setZoom(17);  // Why 17? Because it looks good.
      }

      //Search for places
      let request = {
        map: map,
        query: {
           location: place.geometry.location,
           radius: '100',
           type: ['restaurant']
         }
      };
      searchPlaces(request);

      // let marker = addMarker({map:map, coords: place.geometry.location});
      // // marker.setPosition(place.geometry.location);
      // marker.setVisible(true);
      //
      // var address = '';
      // if (place.address_components) {
      //   address = [
      //     (place.address_components[0] && place.address_components[0].short_name || ''),
      //     (place.address_components[1] && place.address_components[1].short_name || ''),
      //     (place.address_components[2] && place.address_components[2].short_name || '')
      //   ].join(' ');
      // }
      //
      // infowindowContent.children['place-icon'].src = place.icon;
      // infowindowContent.children['place-name'].textContent = place.name;
      // infowindowContent.children['place-address'].textContent = address;
      // infowindow.open(map, marker);
    });
}


initMap();
