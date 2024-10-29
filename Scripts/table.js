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

    const headerDiv = document.createElement('div');
    headerDiv.classList.add('header-div');
    headerDiv.style.display = 'flex';
    headerDiv.style.justifyContent = 'space-between';
    headerDiv.style.alignItems = 'center';

    // Hairdresser name
    const title = document.createElement('span');
    title.textContent = 'Example Hairdresser';
    title.style.fontSize = '20px';
    title.style.fontWeight = 'bold';
    headerDiv.appendChild(title);
    mainDiv.appendChild(headerDiv);

    const contentDiv = document.createElement('div');
    contentDiv.classList.add('content-div');
    contentDiv.style.marginTop = '10px';

    const verifiedDiv = document.createElement('div');
    verifiedDiv.classList.add('Verified');
    verifiedDiv.textContent = 'Verified';
    contentDiv.appendChild(verifiedDiv);

    // verified icon
    const verifiedSVG = document.createElement('svg');
    verifiedSVG.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    verifiedSVG.setAttribute('width', '16');
    verifiedSVG.setAttribute('height', '16');
    verifiedSVG.setAttribute('viewBox', '0 0 24 24');
    verifiedSVG.setAttribute('fill', 'none');
     
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', '12');
    circle.setAttribute('cy', '12');
    circle.setAttribute('r', '12');
    circle.setAttribute('stroke', '#FFF');
    circle.setAttribute('stroke-width', '2');
    circle.setAttribute('line-cap', 'round');
    circle.setAttribute('line-join', 'round');
    verifiedSVG.appendChild(circle);

    const path = document.createElementNS('XXXXXXXXXXXXXXXXXXXXXXXXXX', 'path');
    path.setAttribute('d', 'M9 12l2 2 4-4');
    path.setAttribute('stroke', '#FFF');
    path.setAttribute('stroke-width', '2');
    path.setAttribute('line-cap', 'round');
    path.setAttribute('line-join', 'round');
    verifiedSVG.appendChild(path);

    contentDiv.appendChild(verifiedSVG);

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
    button.onclick = function(){
      window.location.href = 'bookAppointment.html';
    };

    // Append the button to the content div
    contentDiv.appendChild(button);

    // Append the content div to the main container
    mainDiv.appendChild(contentDiv);

    // Finally, append the main div to the row
    row.appendChild(mainDiv);
    //alert('end of loop');
  }
  

