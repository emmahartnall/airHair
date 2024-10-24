  var latitude;
  var longitude;

  document.addEventListener('DOMContentLoaded', function() {
    findHairdressers();  

    // Set the minimum date for the date picker to today
    var today = new Date();
    today = new Date().toISOString().split('T')[0];
    document.getElementById('datePicker').value = today;
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

  function createTable(results){
    const tableContainer = document.getElementById('tableContainer');
    
    // Clear any existing table
    tableContainer.innerHTML = '';
    
    // Create a table element
    const table = document.createElement('table');
    table.className = 'booking-table';
    
    // Create the table header
    const header = table.createTHead();
    const headerRow = header.insertRow();
    const headers = ['Hair professional', 'Distance from you (km)', 'Estimated price (AUD)','Availability','Book Appointment'];
    
    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    
    // Create the table body
    const tbody = table.createTBody();
    const row = tbody.insertRow();
    row.insertCell().textContent = 'example registered hair professional';
    row.insertCell().textContent = '20km';
    row.insertCell().textContent = '$100';
    row.insertCell().textContent = '9am to 5pm';
    var button = document.createElement("button");
    button.innerHTML = "Book appointment";
    button.onclick = function() {
        window.location.href = 'booking.html';
    };
    row.insertCell().appendChild(button);

    results.forEach(place => {
      const row = tbody.insertRow();
      row.insertCell().textContent = place.name;
      row.insertCell().textContent = 'unknown';
      row.insertCell().textContent = 'unknown';
      row.insertCell().textContent = 'unknown';

      var button = document.createElement("button");
      button.innerHTML = "Book appointment";
      button.disabled = true;
      button.onclick = function() {
        window.location.href = 'booking.html';
      };
      row.insertCell().appendChild(button);
    });
    
    // Append the table to the container
    tableContainer.appendChild(table);
  }

  

