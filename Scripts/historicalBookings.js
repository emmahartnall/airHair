  document.addEventListener('DOMContentLoaded', function() {
    historicalBookings();  
    alert("on load");
  });
  
  function historicalBookings(){
    const tableContainer = document.getElementById('historicalBookingTable');
    
    // Clear any existing table
    tableContainer.innerHTML = '';

    const formImitation = document.createElement('div');
    formImitation.className = 'formImitation';
    tableContainer.appendChild(formImitation);
    const tableHeader = document.createElement('h1');
    tableHeader.textContent = 'My past bookings';
    tableHeader.className = 'table-header';
    formImitation.appendChild(tableHeader);
    
    const table = document.createElement('table');
    table.className = 'booking-table';
    
    const tbody = table.createTBody();

    for (let i = 0; i < 2; i++) {
      historicalBookingRow(tbody);
    }

    formImitation.appendChild(table);
  }

  function historicalBookingRow(tbody){
    const row = tbody.insertRow();
    alert("historical booking row");

    const mainDiv = document.createElement('div');
    mainDiv.classList.add('complex-div');  // Add a class for styling
    mainDiv.style.display = 'flex';
    mainDiv.style.flexDirection = 'column';
    mainDiv.style.border = '1px solid #ccc';
    mainDiv.style.padding = '20px';
    mainDiv.style.margin = '10px';
    mainDiv.style.backgroundColor = '#f9f9f9';

    const contentDiv = document.createElement('div');
    contentDiv.classList.add('content-div');
    contentDiv.style.marginTop = '10px';

    const timeAndDateDiv = document.createElement('div');
    timeAndDateDiv.textContent = '9:00 AM 2024-11-20';
    contentDiv.appendChild(timeAndDateDiv);

    const hairDresser = document.createElement('div');
    hairDresser.textContent = 'Hairdresser: Hairdresser Name';
    contentDiv.appendChild(hairDresser);

    const salon = document.createElement('div');
    salon.textContent = 'Salon: Salon Name';
    contentDiv.appendChild(salon);

    const locationDiv = document.createElement('div');
    locationDiv.textContent = 'Latitude, Longitude: 37°4629.64N, 122°259.84W';
    contentDiv.appendChild(locationDiv);

    const services = document.createElement('div');
    services.textContent = 'Services selected: Haircut, Shampoo';
    contentDiv.appendChild(services);

    const priceDiv = document.createElement('div');
    priceDiv.classList.add('price');
    priceDiv.textContent = 'Price: $25';
    contentDiv.appendChild(priceDiv);

    const appointmentLengthDiv = document.createElement('div');
    appointmentLengthDiv.textContent = 'Appointment Length: 1 hour';
    contentDiv.appendChild(appointmentLengthDiv);

    const appointmentStatusDiv = document.createElement('div');
    appointmentStatusDiv.textContent = 'Booking status: requested';
    contentDiv.appendChild(appointmentStatusDiv);

    // Append the content div to the main container
    mainDiv.appendChild(contentDiv);

    // Finally, append the main div to the row
    row.appendChild(mainDiv);
  }
  

