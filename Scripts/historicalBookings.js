  document.addEventListener('DOMContentLoaded', function() {
    //alert("historical bookings");
    historicalBookings();  
  });
  
  function historicalBookings(){
    const tableContainer = document.getElementById('historicalBookingTable');
    
    // Clear any existing table
    tableContainer.innerHTML = '';
  //  alert("historical bookings");
    const formImitation = document.createElement('div');
    formImitation.className = 'formImitation';
    tableContainer.appendChild(formImitation);
    const tableHeader = document.createElement('h1');
    tableHeader.textContent = 'Previous Hair appointments';
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
   // alert("historical booking row");

    const mainDiv = document.createElement('div');
    mainDiv.classList.add('complex-div');  
    mainDiv.style.display = 'flex';
    mainDiv.style.flexDirection = 'column';
    mainDiv.style.border = '1px solid #ccc';
    mainDiv.style.padding = '20px';
    mainDiv.style.margin = '10px';
    mainDiv.style.backgroundColor = '#f9f9f9';

    const contentDiv = document.createElement('div');
    contentDiv.classList.add('content-div');
    contentDiv.style.marginTop = '10px';

    const hairDresser = document.createElement('div');
    hairDresser.textContent = 'Hairdresser: Hairdresser Name';
    contentDiv.appendChild(hairDresser);

    const DateDiv = document.createElement('div');
    DateDiv.textContent = '2024-11-20';
    contentDiv.appendChild(DateDiv);

    const services = document.createElement('div');
    services.textContent = 'Services selected: Haircut, Shampoo';
    contentDiv.appendChild(services);

    const comments = document.createElement('div');
    comments.textContent = 'Great hair cut';
    contentDiv.appendChild(comments);

    const photo = document.createElement('div');
    photo.textContent = 'photo';
    contentDiv.appendChild(photo);

    // Add a button to the content div
    const button = document.createElement('button');
    button.textContent = 'Review haircut';
    button.addEventListener('click', function () {
      window.location.href = 'reviewHaircut.html';
  });

    // Append the button to the content div
    contentDiv.appendChild(button);

    // Append the content div to the main container
    mainDiv.appendChild(contentDiv);

    // Finally, append the main div to the row
    row.appendChild(mainDiv);
  }
  

