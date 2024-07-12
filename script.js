  function findHairdressers(){

    //initMap();
    createTable();

    // Example output for debugging
    console.log("table created");
  }

  function createTable(){
    const tableContainer = document.getElementById('tableContainer');
    
    // Clear any existing table
    tableContainer.innerHTML = '';
    
    // Create a table element
    const table = document.createElement('table');
    
    // Create the table header
    const header = table.createTHead();
    const headerRow = header.insertRow();
    const headers = ['Name', 'address', 'website'];
    
    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    
    // Create the table body
    const tbody = table.createTBody();
    
    for (let i = 0; i < 5; i++) {
        const row = tbody.insertRow();
        const namecell = row.insertCell();
        namecell.textContent = `Name ${i + 1}`;
        const addresscell = row.insertCell();
        addresscell.textContent = `Address ${i + 1}`;
        const websitecell = row.insertCell();
        websitecell.textContent = `Website ${i + 1}`;
    }
    
    // Append the table to the container
    tableContainer.appendChild(table);

  }

  function initMap() {
    var location = { lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE };

    //console.log(location);

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

