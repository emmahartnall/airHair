document.addEventListener('DOMContentLoaded', function() {

    // Set the minimum date for the date picker to today
    var today = new Date();
    today = new Date().toISOString().split('T')[0];
    document.getElementById('datePicker').value = today;
  });