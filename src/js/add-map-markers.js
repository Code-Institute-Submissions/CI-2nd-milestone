function addMarker(options) {
  // The location of Uluru

  // The marker, positioned at Uluru
  return new google.maps.Marker({
    map: options.map,
    position: options.coords,
    icon: './src/img/icons/map-marker-small.png'
  });
}

export {
  addMarker
};
