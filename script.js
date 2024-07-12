  function findHairdressers(){

    const map = new google.maps.Map(document.createElement('div'), {
      center: { lat: 40.7128, lng: -74.0060 }, // New York City
      zoom: 15
    });

    // Set up the Places service
    const service = new google.maps.places.PlacesService(map);

    // Define the request
    const request = {
        location: map.getCenter(),
        radius: '1500',
        type: ['hair_care']
    };

    // Perform the search
    service.nearbySearch(request, function(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
           // displayResults(results);
            createTable(results);
        } else {
            console.error('Error with Places service:', status);
        }
    });

    
  }

  function displayResults(results) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous results

    results.forEach(place => {
        const placeDiv = document.createElement('div');
        placeDiv.textContent = place.name;
        resultsDiv.appendChild(placeDiv);
    });
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
    const headers = ['Name', 'address', 'website'];
    
    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    
    // Create the table body
    const tbody = table.createTBody();
    

    results.forEach(place => {
      const row = tbody.insertRow();
      const namecell = row.insertCell();
      namecell.textContent = place.name;
    });
    
    // Append the table to the container
    tableContainer.appendChild(table);

  }

  

