function changedSliderValue(value){
  $('#sliderLabel').html(`Range: ${value} km`);
}

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

function openInfoWindow(index) {
  infoWindows[index].open(map,markers[index]);
}

function closeAllInfoWindows(){
  infoWindows.forEach(infoWindow => {
    infoWindow.close();
  });
}

window.changedSliderValue = changedSliderValue;
window.selectResult = selectResult;
window.closeAllInfoWindows = closeAllInfoWindows;
window.openInfoWindow = openInfoWindow;
