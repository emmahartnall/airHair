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
   // alert('Create table');  
    const tableHeader = document.createElement('h1');
    tableHeader.textContent = 'Customer Bookings';
    tableHeader.className = 'table-header';
    formImitation.appendChild(tableHeader);
    
    const table = document.createElement('table');
    table.className = 'booking-table';
    
    // Create the table body
   // alert('Create table body');
    const tbody = table.createTBody();

    for (let i = 0; i < 2; i++) {
      createRowContent(tbody);
    }
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

    const headerDiv = document.createElement('div');
    headerDiv.classList.add('header-div');
    headerDiv.style.display = 'flex';
    headerDiv.style.justifyContent = 'space-between';
    headerDiv.style.alignItems = 'center';

    const title = document.createElement('span');
    title.textContent = 'Customer Name';
    title.style.fontSize = '20px';
    title.style.fontWeight = 'bold';
    headerDiv.appendChild(title);
    mainDiv.appendChild(headerDiv);
  //  alert('after hairdresser name');

    const contentDiv = document.createElement('div');
    contentDiv.classList.add('content-div');
    contentDiv.style.marginTop = '10px';

    const dateDiv = document.createElement('div');
    dateDiv.textContent = '2024-11-20';
    contentDiv.appendChild(dateDiv);

    const timeDiv = document.createElement('div');
    timeDiv.textContent = '9:00 AM';
    contentDiv.appendChild(timeDiv);

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

    // Add a button to the content div
    const button = document.createElement('button');
    button.textContent = 'Confirm appointment';

    // Append the button to the content div
    contentDiv.appendChild(button);

    // Append the content div to the main container
    mainDiv.appendChild(contentDiv);

    // Finally, append the main div to the row
    row.appendChild(mainDiv);
  //  alert('end of loop');
  }
  

