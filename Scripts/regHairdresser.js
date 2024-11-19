// Get the checkbox and the content elements
const toggleCheckbox = document.getElementById('hairdresserCheckBox');
const toggleContent = document.getElementById('hairdresserFields');

// Add an event listener to the checkbox
toggleCheckbox.addEventListener('change', function() {
    // Toggle display based on checkbox state
    if (toggleCheckbox.checked) {
        toggleContent.style.display = 'block';
    } else {
        toggleContent.style.display = 'none';
    }
});