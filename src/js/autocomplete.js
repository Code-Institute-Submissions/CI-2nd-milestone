// Initialize the autocomplete function
function initAutocomplete(map) {

  if (!map) return 'No input arguments found.';

  // Select input field for autocomplete
  var input = document.getElementById('city');
  var input2 = document.getElementById('address_dep');

  // Initialize autocomplete
  var autocomplete = new google.maps.places.Autocomplete(input);
  var autocomplete2 = new google.maps.places.Autocomplete(input2);

  // Bind autocomplete results to map
  autocomplete.bindTo('bounds', map);

  // Set the data fields to return when the user selects a place.
  autocomplete.setFields(['address_components', 'geometry', 'icon', 'name']);

  return autocomplete;
}


// Export Autocomplet
export { initAutocomplete };
