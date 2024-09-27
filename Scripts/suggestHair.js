document.getElementById('customerHairForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    var hairType = document.getElementById('hair-type').value;
    var hairLength = document.getElementById('hair-length').value;
    var hairColour = document.getElementById('hair-colour').value;
    var gender = document.getElementById('gender').value;
    var imageDisplay = document.getElementById('imageDisplay');
    imageDisplay.innerHTML = ''; // Clear previous images

    var img1 = document.createElement('img');
    img1.src = "./Images/manBrown.jpg";
    console.log('img1', img1);
    imageDisplay.appendChild(img1);
    console.log('imagedisplay', imageDisplay);
    console.log('hairType', hairType);

    var img2 = document.createElement('img');
    img2.src = './Images/womanBlack.jpg';
    imageDisplay.appendChild(img2);
    //console.log('hairLength', hairLength);

    var img3 = document.createElement('img');
    img3.src = './Images/womanBlondShort.jpg';
    imageDisplay.appendChild(img3);
    //console.log('hairColour', hairColour);

    var img4 = document.createElement('img');
    img4.src = './Images/WomanBrownShort.jpg';
    imageDisplay.appendChild(img4);
    //console.log('gender', gender);
    //alert('Thank you for your feedback!');

});