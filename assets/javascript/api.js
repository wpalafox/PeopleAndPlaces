//these two globals should be moved to the main js file
var map;
var infowindow;

//function to create map
function createMap(tagToSearch,area){
  function initMap() {
  geocoder = new google.maps.Geocoder();
  //placeholder latlng until we do the search
  var latlng = new google.maps.LatLng(53.3496, -6.3263);

  //creating the map object and assigning it to the "#map" on the page
  map = new google.maps.Map(document.getElementById('map'), {
    center: latlng,
    zoom: 15
  });

  //convert the string search into an address to search 
  geocoder.geocode( {address:area}, function(results, status) 
  {
    //if successful, 
    if (status == google.maps.GeocoderStatus.OK) 
    {
      //center the map over the result
      map.setCenter(results[0].geometry.location);

      //place a marker at the starting location
      var marker = new google.maps.Marker(
      {
          map: map,
          position: results[0].geometry.location
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
   }
   //displaying search results as markers
 infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch({
    location: results[0].geometry.location,
    radius: 500,
    //type is where we grab the tag to search 
    type: [tagToSearch]
  }, callback);


//in the callback we run through the list of results and create markers for each
function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });
  //if a marker is clicked, show the event window with the place name (can possibly add more here)
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });

  };

  
})

}
}
