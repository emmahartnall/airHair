  function createTable(results){
    const tableContainer = document.getElementById('tableContainer');
    //alert('start create table');
    
    // Clear any existing table
    tableContainer.innerHTML = '';

    const formImitation = document.createElement('div');
    formImitation.className = 'formImitation';
    tableContainer.appendChild(formImitation);
    //alert('Create table');
    
    const table = document.createElement('table');
    table.className = 'booking-table';
    
    // Create the table body
    const tbody = table.createTBody();

    for (let i = 0; i < 2; i++) {
      createRowContent(tbody);
    }

    results.forEach(place => {
      alert('results api call');
      createRowContent(tbody);
    });

    formImitation.appendChild(table);
  }

  function createRowContent(tbody){
    alert('Create Row function');
    const row = tbody.insertRow();

    // Create the main container div
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('complex-div');  // Add a class for styling
    mainDiv.style.display = 'flex';
    mainDiv.style.flexDirection = 'column';
    mainDiv.style.border = '1px solid #ccc';
    mainDiv.style.padding = '20px';
    mainDiv.style.margin = '10px';
    mainDiv.style.backgroundColor = '#f9f9f9';

    // Create a header div
    const headerDiv = document.createElement('div');
    headerDiv.classList.add('header-div');
    headerDiv.style.display = 'flex';
    headerDiv.style.justifyContent = 'space-between';
    headerDiv.style.alignItems = 'center';

    // Add some text to the header
    const title = document.createElement('span');
    title.textContent = 'Example Hairdresser';
    title.style.fontSize = '20px';
    title.style.fontWeight = 'bold';
    headerDiv.appendChild(title);

    // Add header div to the main container
    mainDiv.appendChild(headerDiv);

    // Create a content div
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('content-div');
    contentDiv.style.marginTop = '10px';

    // Add a paragraph of text to the content div
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Bit of a desciption goes here.';
    contentDiv.appendChild(paragraph);

    // Add a button to the content div
    const button = document.createElement('button');
    button.textContent = 'Book Appointment';
    button.style.padding = '10px 20px';
    button.style.backgroundColor = '#007bff';
    button.style.color = '#fff';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';

    // Button click event
    button.addEventListener('click', function() {
      //alert('Button clicked!');
    });

    // Append the button to the content div
    contentDiv.appendChild(button);

    // Append the content div to the main container
    mainDiv.appendChild(contentDiv);

    // Finally, append the main div to the row
    row.appendChild(mainDiv);
    //alert('end of loop');
  }

  function createTable2(results){
    const tableContainer = document.getElementById('tableContainer');
    
    // Clear any existing table
    tableContainer.innerHTML = '';

    const formImitation = document.createElement('div');
    formImitation.className = 'formImitation';
    tableContainer.appendChild(formImitation);
    
    const table = document.createElement('table');
    table.className = 'booking-table';
    
    // Create the table header
    const header = table.createTHead();
    const headerRow = header.insertRow();
    const headers = ['Hair professional','Info','Distance from you (km)', 'Estimated price (AUD)','Availability','Book Appointment'];
    
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
    
    formImitation.appendChild(table);
  }

  

