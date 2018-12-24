import { addMarker } from './add-map-markers';

// Searches for places around certain center
function searchPlaces(request){
  let service = new google.maps.places.PlacesService(request.map);

  service.nearbySearch(request.query, processResults);

  // Process the results of the place queries
  function processResults(results, status) {
    // When status is ok
    if (status === google.maps.places.PlacesServiceStatus.OK){
      // Create new arrays
      let markers = new Array();
      let infoWindows = new Array();

      results.forEach((result, i) => {
        let options = {
          map: request.map,
          coords: result.geometry.location
        };

        // Add marker
        let marker = addMarker(options);
        markers.push(marker);

        // Add InfoWindow
        let infoWindow = new google.maps.InfoWindow({
          content: `<div class='map-result-header'>${result.name}</div>`
        });
        infoWindows.push(infoWindow);

        // Add click listener
        marker.addListener('click', () => {
          // Close all other infoWindows
          closeAllInfoWindows();

          // Open selected infoWindow
          infoWindow.open(map, marker);
        });
      });

      // Add markers to global
      window.markers = markers;
      window.infoWindows = infoWindows;
    }
    else {
      alert(`Search status: ${status}`);
    }

    // Update result list
    let listHTML = '';
    results.forEach((result, i) => {
      let resultHTML =
      `<div class='map-result' onclick='selectResult(${i},this)'>
          <div class='map-result-header'><h1>${result.name}</h1></div>
          <div class='map-result-address'>${result.vicinity}</div>
          <div class='map-result-rating'>${result.rating}/5.0</div>
        </div>`;

      // Append listHMLT
      listHTML += resultHTML
    });

    // Change innerHTML of container
    $('.map-results-container').html(listHTML);

    // Store results global
    window.searchResults = results;

    // if (status == google.maps.places.PlacesServiceStatus.OK) {
    //   for (var i = 0; i < results.length; i++) {
    //     var place = results[i];
    //     // createMarker(results[i]);
    //     console.log(place);
    //   }
    // }
  }
}

function clearMarkers(){
  markers.forEach(marker => {
    marker.setMap(null);
  });
}


export { searchPlaces, clearMarkers };
