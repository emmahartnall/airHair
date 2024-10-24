var latitude;
var longitude;

document.addEventListener('DOMContentLoaded', function() {
  findHairdressers();  
});

function findHairdressers(){

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;
  
  const map = new google.maps.Map(document.createElement('div'), {
    center: { lat: latitude, lng: longitude }, 
    zoom: 15
  });

  // Set up the Places service
  const service = new google.maps.places.PlacesService(map);

  // Define the request
  const request = {
      location: map.getCenter(),
      radius: '1000',
      type: ['hair_care']
  };

  // Perform the search
  service.nearbySearch(request, function(results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
          createTable(results);
      } else {
          console.error('Error with Places service:', status);
      }
  });
}

function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      alert("User denied the request for Geolocation.");
      break;
    case error.POSITION_UNAVAILABLE:
      alert("Location information is unavailable.");
      break;
    case error.TIMEOUT:
      alert("The request to get user location timed out.");
      break;
    case error.UNKNOWN_ERROR:
      alert("An unknown error occurred.");
      break;
  }
}