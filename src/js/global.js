import { directionsService, directionsDisplay } from './init-directions';
import { processDirections } from './process-directions';
import { searchPlaces, clearMarkers} from './places';

// ----------------------------------------------------------------------------- CHANGE SLIDER VALUE
function changedSliderValue(value){
  $('#sliderLabel').html(`Range: ${value} km`);
}

// ----------------------------------------------------------------------------- SELECT RESULT
function selectResult(placeIndex, elem){
  if (window.selectedResult) {
    $(window.selectedResult).toggleClass("map-result-selected");
  }

  // Toggle new element
  $(elem).toggleClass("map-result-selected");

  // Set element as selected
  window.selectedResult = elem;

  // If the place has a geometry, then present it on a map.
  if (searchResults[placeIndex].geometry.viewport) {
   map.fitBounds(searchResults[placeIndex].geometry.viewport);

   // Close open infowindows
   closeAllInfoWindows();

   // Open selected markers infowindow
   openInfoWindow(placeIndex);
  }
}

// ----------------------------------------------------------------------------- OPEN INFO WINDOW
function openInfoWindow(index) {
  infoWindows[index].open(map,markers[index]);
}

// ----------------------------------------------------------------------------- CLOSE ALL INFO WINDOWS
function closeAllInfoWindows(){
  infoWindows.forEach(infoWindow => {
    infoWindow.close();
  });
}

// ----------------------------------------------------------------------------- PLAN ROUTE
function openPlanRoute(index){
  // Popup screen
  $('#route-window').css('visibility','visible');

  // Set address of selected restaurant
  let result = searchResults[index];
  let resHtml = `${result.name} <br> ${result.vicinity}`;
  $('#selected-restaurant').html(resHtml);

  let buttonsHtml = `<button type="submit" class="btn btn-primary" onclick="planRoute(${index})">Plan Route!</button>`;

                    // <button type="submit" class="btn btn-light" onclick="closeRouteWindow()">Return</button>
  $('#route-buttons').html(buttonsHtml);

}

// ----------------------------------------------------------------------------- CLOSE ROUTE WINDOW
function closeRouteWindow(){
  $('#route-window').css('visibility','hidden');
}

// ----------------------------------------------------------------------------- OPEN DIRECTION CONTROLS
function openDirectionControls(){
  $('.direction-container').css('visibility','visible');
}

// ----------------------------------------------------------------------------- CLOSE DIRECTION CONTROLS
function closeDirectionControls(){
  $('.direction-container').css('visibility','hidden');
}



// ----------------------------------------------------------------------------- CLOSE PLAN ROUTE
function planRoute(index){

  let origin = $('#address_dep')[0].value;

  // Check if address is empty
  if (origin === ''){
    alert('Please fill in an address of department');
    return;
  }

  // Query the route
  directionsService.route({
        origin: $('#address_dep')[0].value,
        destination: searchResults[index].vicinity,
        travelMode: 'DRIVING'
      }, function(response, status) {
        if (status === 'OK') {
          directionsDisplay.setDirections(response);

          // Process route
          processDirections(response);

          // Close infoWindow
          closeAllInfoWindows();


        } else {
          window.alert('Directions request failed due to ' + status);
        }
      });

  // Close route WINDOW
  closeRouteWindow();

  // Remove all markers
  clearMarkers();

  // Open directions controls
  openDirectionControls();
}

// ----------------------------------------------------------------------------- RESTART
function restart(){
  closeDirectionControls();
}

// ----------------------------------------------------------------------------- SEARCH QUERY
function searchQuery(){
  if (place == undefined){
    return;
  }

  // Get radius
  let radius = $('#formControlRange')[0].value;

  // Control zoomlevel
  let zoomlvl = 13;
  if (Number(radius) >= 4000){
    zoomlvl = 11;
  }
  else if (Number(radius) < 4000 && Number(radius) >= 3000){
    zoomlvl = 13;
  }
  else if (Number(radius) < 2000){
    zoomlvl = 14;
  }

  // Set zoomlevel
  map.setZoom(zoomlvl);
  
  //Search for places
  let request = {
    map: map,
    query: {
       location: place.geometry.location,
       radius: radius,
       type: ['restaurant','cafe']
     }
  };
  // clear markers
  clearMarkers();

  // Perform new search query
  searchPlaces(request);
}

window.changedSliderValue = changedSliderValue;
window.selectResult = selectResult;
window.closeAllInfoWindows = closeAllInfoWindows;
window.openInfoWindow = openInfoWindow;
window.openPlanRoute = openPlanRoute;
window.closeRouteWindow = closeRouteWindow;
window.planRoute = planRoute;
window.openDirectionControls = openDirectionControls;
window.restart = restart;
window.searchQuery = searchQuery;
window.clearMarkers = clearMarkers;
