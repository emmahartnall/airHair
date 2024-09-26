const FileInput = document.getElementById('fileInput');
const imgPrev = document.getElementById('imgPreview');

FileInput.addEventListener('change', function(event) {
    // Check if a file is selected
    if (event.target.files && event.target.files[0]) {
        const file = event.target.files[0];

        console.log("Selected file: ", file);

        // Ensure the file is an image
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();

            reader.onerror = function(e) {
                console.error("Error reading file: ", e.target.error.name);
             //   alert(`Failed to read file. Error: ${e.target.error.name}`);
            };

            // Define the onload event for when the file is read
            reader.onload = function(e) {
                console.log("File content: ", e.target.result);

                imgPrev.src = e.target.result;
            };

            // Read the image file as a Data URL
            reader.readAsDataURL(file);
        } else {
          //  alert('Please upload an image file.');
        }
    } else {
     //   alert('No file selected.');
    }
});

// Form submission logic (you will need to handle it on the server-side)
document.getElementById('hairstyleForm').addEventListener('submit', function(event) {
    event.preventDefault();
});