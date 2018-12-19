import { addMarker } from './add-map-markers';

// Searches for places around certain center
function searchPlaces(request){
  let service = new google.maps.places.PlacesService(request.map);

  service.nearbySearch(request.query, processResults);

  // Process the results of the place queries
  function processResults(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK){
      results.forEach((result, i) => {
        let options = {
          map: request.map,
          coords: result.geometry.location
        };
        addMarker(options);
        console.log(result);
      })
    }
    else {
      alert(`Search status: ${status}`);
    }

    // if (status == google.maps.places.PlacesServiceStatus.OK) {
    //   for (var i = 0; i < results.length; i++) {
    //     var place = results[i];
    //     // createMarker(results[i]);
    //     console.log(place);
    //   }
    // }
  }


}

export { searchPlaces };
