document.getElementById('customerHairForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    var hairType = document.getElementById('hair-type').value;
    var hairLength = document.getElementById('hair-length').value;
    var hairColour = document.getElementById('hair-colour').value;
    var gender = document.getElementById('gender').value;
    var imageDisplay = document.getElementById('imageDisplay');
    imageDisplay.innerHTML = ''; // Clear previous images

    const imageUrls = []

    console.log("hairtype: " + hairType);
    console.log("hairlength: " + hairLength);
    console.log("haircolour: " + hairColour);
    console.log("gender: " + gender);
    console.log('male', gender === 'male');
    console.log('female', gender === 'female');

    if(gender ==='male') {
        imageUrls.push('./Images/manBrown.jpg');
    }
    else if (gender === 'female'){
        if (hairType === 'straight') {
            imageUrls.push('./Images/womanBlondShort.jpg');
            imageUrls.push('./Images/WomanBrownShort.jpg');
        }
        if (hairType === 'coily' || hairColour === 'black'){
            imageUrls.push('./Images/womanBlack.jpg');
        }
    }
    else{
        imageUrls.push('./Images/manBrown.jpg');
        imageUrls.push('./Images/womanBlondShort.jpg');
        imageUrls.push('./Images/WomanBrownShort.jpg');
        imageUrls.push('./Images/womanBlack.jpg');
    }
    console.log(imageUrls);

    if (imageUrls.length === 0) {
        imageDisplay.textContent = "Sorry, no images have been added for this combination yet.  More to come!";
    }

    for (let i = 0; i < imageUrls.length; i++) {
        var img = document.createElement('img');
        img.src = imageUrls[i];
        img.className = 'image-style-size';
        imageDisplay.appendChild(img);
    }

});