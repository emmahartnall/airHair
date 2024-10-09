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
        radius: '5000',
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

  function createTable(results){
    const tableContainer = document.getElementById('tableContainer');
    
    // Clear any existing table
    tableContainer.innerHTML = '';
    
    // Create a table element
    const table = document.createElement('table');
    
    // Create the table header
    const header = table.createTHead();
    const headerRow = header.insertRow();
    const headers = ['Hair Service provider', '7:00am', '7:30am','8:00am', '8:30am', '9:00am', '9:30am', '10:00am', '10:30am', '11:00am', '11:30am', '12:00pm', '12:30pm', '1:00pm', '1:30pm', '2:00pm', '2:30pm', '3:00pm', '3:30pm', '4:00pm', '4:30pm', '5:00pm', '5:30pm', '6:00pm', '6:30pm', '7:00pm', '7:30pm', '8:00pm', '8:30pm', '9:00pm', '9:30pm', '10:00pm', '10:30pm', '11pm', '11:30pm'];
    
    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    
    // Create the table body
    const tbody = table.createTBody();
    
    results.forEach(place => {
      const row = tbody.insertRow();
      row.insertCell().textContent = place.name;
      for(let i = 0; i < (headers.length -2); i++){
        var button = document.createElement("button");
        button.innerHTML = "$$??";
        button.disabled = true;
        row.insertCell().appendChild(button);
      }
    });
    
    // Append the table to the container
    tableContainer.appendChild(table);

  }

  

