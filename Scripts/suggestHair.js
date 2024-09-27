document.getElementById('customerHairForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    var hairType = document.getElementById('hair-type').value;
    var hairLength = document.getElementById('hair-length').value;
    var hairColour = document.getElementById('hair-colour').value;
    var gender = document.getElementById('gender').value;
    var imageDisplay = document.getElementById('imageDisplay');
    imageDisplay.innerHTML = ''; // Clear previous images

    var img = document.createElement('img');
    img.src = 'images/people.png';
    img.alt = 'Loading...';
    imageDisplay.appendChild(img);

});