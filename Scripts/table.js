  
  
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

  

