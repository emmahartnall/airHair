  document.addEventListener('DOMContentLoaded', function() {
    customerBookings();  
  });
  
  function customerBookings(){
    const tableContainer = document.getElementById('custBookingTable');
    
    // Clear any existing table
    tableContainer.innerHTML = '';

    const formImitation = document.createElement('div');
    formImitation.className = 'formImitation';
    tableContainer.appendChild(formImitation);
    alert('Create table');
    
    const table = document.createElement('table');
    table.className = 'booking-table';
    
    // Create the table body
    alert('Create table body');
    const tbody = table.createTBody();

    for (let i = 0; i < 2; i++) {
      createRowContent(tbody);
    }
    alert("end of create table");

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

    const headerDiv = document.createElement('div');
    headerDiv.classList.add('header-div');
    headerDiv.style.display = 'flex';
    headerDiv.style.justifyContent = 'space-between';
    headerDiv.style.alignItems = 'center';

    // Hairdresser name
    const title = document.createElement('span');
    title.textContent = 'Customer Name';
    title.style.fontSize = '20px';
    title.style.fontWeight = 'bold';
    headerDiv.appendChild(title);
    mainDiv.appendChild(headerDiv);
    alert('after hairdresser name');

    const contentDiv = document.createElement('div');
    contentDiv.classList.add('content-div');
    contentDiv.style.marginTop = '10px';

    const appointmentLengthDiv = document.createElement('div');
    appointmentLengthDiv.textContent = 'Appointment Length: 1 hour';
    contentDiv.appendChild(appointmentLengthDiv);
    alert('after appointment length');

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
    button.onclick = function(){
      window.location.href = 'bookAppointment.html';
    };

    // Append the button to the content div
    contentDiv.appendChild(button);

    // Append the content div to the main container
    mainDiv.appendChild(contentDiv);

    // Finally, append the main div to the row
    row.appendChild(mainDiv);
    alert('end of loop');
  }
  

