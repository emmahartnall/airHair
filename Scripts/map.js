let map;
let marker;

function initMap() {
    // Set the initial location for the map (latitude and longitude)
    const initialLocation = { lat: -34.397, lng: 150.644 };

    // Create the map
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: initialLocation,
    });

    // Create a marker
    marker = new google.maps.Marker({
        position: initialLocation,
        map: map,
        draggable: true, // Allow the marker to be dragged
    });

    // Update latitude and longitude fields on marker drag
    google.maps.event.addListener(marker, 'dragend', function(event) {
        document.getElementById('latitude').value = event.latLng.lat();
        document.getElementById('longitude').value = event.latLng.lng();
    });

    // Update latitude and longitude when clicking on the map
    map.addListener('click', function(event) {
        marker.setPosition(event.latLng);
        document.getElementById('latitude').value = event.latLng.lat();
        document.getElementById('longitude').value = event.latLng.lng();
    });
}

// Handle form submission
document.getElementById('locationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert(`Location Submitted:\nLatitude: ${document.getElementById('latitude').value}\nLongitude: ${document.getElementById('longitude').value}`);
});
