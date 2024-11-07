// Set data
sessionStorage.setItem("loggedIn", "false");

// Get data
const loggedIn = sessionStorage.getItem("loggedIn");



function checkIfLoggedIn(){
    if (loggedIn === "true"){
        alert("You are already logged in");
    } else {
        window.location.href = "Login.html"; 
    }
}





// Storing an object
const myObject = { name: 'Alice', age: 25 };
localStorage.setItem('myObject', JSON.stringify(myObject));

// Retrieving the object
const retrievedObject = JSON.parse(localStorage.getItem('myObject'));
console.log(retrievedObject.name); // Outputs: Alice



// Set data
localStorage.setItem("sharedVariable", "someValue");

// Get data (on another page or later time)
const sharedVariable = localStorage.getItem("sharedVariable");
