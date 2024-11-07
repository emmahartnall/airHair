// Set data
sessionStorage.setItem("loggedIn", "false");

// Get data
const loggedIn = sessionStorage.getItem("loggedIn");





// Set data
localStorage.setItem("sharedVariable", "someValue");

// Get data (on another page or later time)
const sharedVariable = localStorage.getItem("sharedVariable");

function checkIfLoggedIn(){
    if (loggedIn === "true"){
        alert("You are already logged in");
    } else {
        window.location.href = "login.html"; 
    }
}
