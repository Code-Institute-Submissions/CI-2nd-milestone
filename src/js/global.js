import { directionsService, directionsDisplay } from './init-directions';

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
  let resHtml = `<div class='infowindow-container'>
              <div class='infowindow-left'>
                <div class='map-result-header'><strong>${result.photos[0].html_attributions[0]}</strong></div>
                <div>${result.vicinity}</div>
                <div>Rating: ${result.rating}/5.0</div>
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

            </div>`;
  $('#selected-restaurant').html(resHtml);

  let buttonsHtml = `<button type="submit" class="btn btn-primary" onclick="planRoute(${index})">Plan Route!</button>&nbsp;&nbsp;&nbsp;
                    <button type="submit" class="btn btn-light" onclick="closeRouteWindow()">Return</button>`;
  $('#route-buttons').html(buttonsHtml);

}

// ----------------------------------------------------------------------------- CLOSE ROUTE WINDOW
function closeRouteWindow(){
  $('#route-window').css('visibility','hidden');
}

// ----------------------------------------------------------------------------- CLOSE ROUTE WINDOW
function planRoute(index){
  // Query the route
  directionsService.route({
        origin: 'Amsterdam',
        destination: searchResults[index].vicinity,
        travelMode: 'DRIVING'
      }, function(response, status) {
        if (status === 'OK') {
          directionsDisplay.setDirections(response);
        } else {
          window.alert('Directions request failed due to ' + status);
        }
      });

  // Close infoWindow
  closeAllInfoWindows();

  // Remove all markers
  markers.forEach(marker => {
    marker.setMap(null);
  });

  // Close route WINDOW
  closeRouteWindow();

}

window.changedSliderValue = changedSliderValue;
window.selectResult = selectResult;
window.closeAllInfoWindows = closeAllInfoWindows;
window.openInfoWindow = openInfoWindow;
window.openPlanRoute = openPlanRoute;
window.closeRouteWindow = closeRouteWindow;
window.planRoute = planRoute;
