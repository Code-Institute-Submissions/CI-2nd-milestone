import { addMarker } from './add-map-markers';
// Searches for places around certain center
function searchPlaces(request) {
  let service = new google.maps.places.PlacesService(request.map);

  service.nearbySearch(request.query, processResults);

  // Process the results of the place queries
  function processResults(results, status) {

    // When status is ok
    let listHTML = '';
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      // Sort results on rating
      results = results.sort((a, b) => b.rating - a.rating);

      // filter results
      results = results.filter(result => result.vicinity && result.rating && result.photos && result.rating >= 3.8);

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
        let openHours = '';
        if (result.opening_hours != undefined) {
          openHours = result.opening_hours.open_now ? '<span style="color:green;font-weight:500">Now open</span>' : '<span style="color:red;font-weight:500">Now closed</span>';
        }

        let infoWindow = new google.maps.InfoWindow({
          content: `<div class='infowindow-container'>
                        <div class='infowindow-left'>
                          <div class='map-result-header'><strong>${result.photos[0].html_attributions[0]}</strong></div>
                          <div>${result.vicinity}</div>
                          <div>Rating: ${result.rating}/5.0</div>
                          <div>${openHours}</div>
                          <div class='plan-route'>
                            <button type="button" class="btn btn-outline-dark btn-sm plan-route-btn" onclick="openPlanRoute(${i})">Plan route</button>
                          </div>
                        </div>
                        <div class='infowindow-right'>
                          <div class='infowindow-image'>
                            <div>
                              <a href='${result.photos[0].getUrl()}' target='_blank'>
                                <img src='${result.photos[0].getUrl()}' alt='${result.name}' width='100%'/>
                              </a>
                            </div>
                          </div>
                        </div>

                      </div>`
        });
        infoWindows.push(infoWindow);

        // Add click listener
        marker.addListener('click', () => {
          // Close all other infoWindows
          closeAllInfoWindows();

          // Open selected infoWindow
          infoWindow.open(map, marker);
        });

        // Make listHTML
        let resultHTML =
          `<div class="card shadow-sm map-result" onclick='selectResult(${i},this)'>
              <div class="card-body">
                <h5 class="card-title map-result-title">${result.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted map-result-subtitle">${result.vicinity}</h6>
                <p class="card-text">Rating: ${result.rating}/5.0</p>
              </div>
            </div>`;

        // `<li class='list-group-item' onclick='selectResult(${i},this)'>
        //   <div class="card">
        //     <div class="card-body">
        //       <h5 class="card-title" style="display:inline-block;">${result.name}</h5>
        //       <h6 class="card-subtitle mb-2 text-muted" style="display:inline-block;">&nbsp;${result.vicinity} (driving)</h6>
        //       <p class="card-text">${result.rating}</p>
        //     </div>
        //   </div>
        // </li>`;
        // Append listHMLT
        listHTML += resultHTML
      });

      // Add markers to global
      window.markers = markers;
      window.infoWindows = infoWindows;
    }
    else {
      alert(`Search status: ${status}`);
    }

    // Change innerHTML of container
    $('#map-results-list').html(listHTML);

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

function clearMarkers() {
  markers.forEach(marker => {
    marker.setMap(null);
  });
}


export { searchPlaces, clearMarkers };
