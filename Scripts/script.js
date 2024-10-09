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
    const headers = ['Select', 'Hair Service provider', '9th', '10th', '11th', '12th', '13th', '14th', '15th', '16th', '17th', '18th', '19th', '20th', '21st', '22nd', '23rd', '24th', '25th', '26th', '27th', '28th', '29th', '30th'];
    
    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    
    // Create the table body
    const tbody = table.createTBody();
    
    results.forEach(place => {
      const row = tbody.insertRow();
      row.insertCell().innerHTML = '<input type="checkbox">';
      row.insertCell().textContent = place.name;
      for(let i = 0; i < (headers.length -2); i++){
        row.insertCell().textContent = '$20';
      }
    });
    
    // Append the table to the container
    tableContainer.appendChild(table);

  }

  

