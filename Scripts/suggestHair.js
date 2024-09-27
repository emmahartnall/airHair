document.getElementById('hairForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get the selected hair type and length
    var hairType = document.getElementById('hair-type').value;
    var hairLength = document.getElementById('hair-length').value;
    var hairColour = document.getElementById('hair-colour').value;
    var gender = document.getElementById('gender').value;

    console.log("Gender:", gender); // Just for debugging purposes

    // Hide all images initially
    var images = document.querySelectorAll('.image-display img');
    images.forEach(function(img) {
        img.style.display = 'none';
    });

    // Display the corresponding image based on the selections
    var selectedImageId = hairType + hairLength.charAt(0).toUpperCase() + hairLength.slice(1);
    var selectedImage = document.getElementById(selectedImageId);
    if (selectedImage) {
        selectedImage.style.display = 'block';
    }
});