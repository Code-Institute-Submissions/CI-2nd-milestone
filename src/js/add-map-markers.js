function addMarker(map,pos) {
  // The location of Uluru

  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({
      position: pos,
      map: map,
      icon: './src/img/icons/map-marker2-small.png'
  });
}

export {
  addMarker
};
