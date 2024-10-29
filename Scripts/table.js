  function createTable(results){
    const tableContainer = document.getElementById('tableContainer');
    
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
      //alert('results api call');
      createRowContent(tbody);
    });
   // alert("end of create table");

    formImitation.appendChild(table);
  }

  function createRowContent(tbody){
    //alert('Create Row function');
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

    const starDiv = document.createElement('div');
    starDiv.classList.add('rating');
    starDiv.textContent = '⭐⭐⭐⭐☆ (4.2)';
    contentDiv.appendChild(starDiv);

    const numBookDiv = document.createElement('div');
    numBookDiv.classList.add('Booking');
    numBookDiv.textContent = '45 bookings';
    contentDiv.appendChild(numBookDiv);

    const distanceDiv = document.createElement('div');
    distanceDiv.classList.add('distance');
    distanceDiv.textContent = 'Distance from you (meters): 250';
    contentDiv.appendChild(distanceDiv);

    const timesDiv = document.createElement('div');
    timesDiv.classList.add('available-times');
    contentDiv.appendChild(timesDiv);

    const timeSlotDiv = document.createElement('div');
    timeSlotDiv.classList.add('time-slot');
    timeSlotDiv.textContent = '9:00 AM';
    timesDiv.appendChild(timeSlotDiv);

    const priceDiv = document.createElement('div');
    priceDiv.classList.add('price');
    priceDiv.textContent = 'Price: $25';
    contentDiv.appendChild(priceDiv);

    // Add a button to the content div
    const button = document.createElement('button');
    button.textContent = 'Book Appointment';
    button.href = '#bookAppointment';
    button.className = 'button';
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
  

