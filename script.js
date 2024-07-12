<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places"></script>
<script>
  function initMap() {
    var location = { lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE };

    var map = new google.maps.Map(document.getElementById('map'), {
      center: location,
      zoom: 15
    });

    var request = {
      location: location,
      radius: '5000', // 5 km radius
      type: ['hair_care'] // Type to search for
    };

    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);
  }

  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        createMarker(results[i]);
        console.log(results[i]);
        // Example output for debugging
        console.log("Name: " + results[i].name);
        console.log("Address: " + results[i].vicinity);
        console.log("Website: " + (results[i].website ? results[i].website : "No website provided"));
      }
    }
  }

  function createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
      map: map,
      position: placeLoc
    });
  }

  google.maps.event.addDomListener(window, 'load', initMap);
</script>
