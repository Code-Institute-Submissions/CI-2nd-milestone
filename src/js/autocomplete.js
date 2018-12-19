// Initialize the autocomplete function
function initAutocomplete(map){
  // Select input field for autocomplete
  var input = document.getElementById('city');

  // Initialize autocomplete
  var autocomplete = new google.maps.places.Autocomplete(input);

  // Bind autocomplete results to map
  autocomplete.bindTo('bounds', map);

  // Set the data fields to return when the user selects a place.
  autocomplete.setFields(['address_components', 'geometry', 'icon', 'name']);

  return autocomplete;
}


// Export Autocomplet
export { initAutocomplete };
