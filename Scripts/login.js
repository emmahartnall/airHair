document.addEventListener('DOMContentLoaded', function() {
    
    const loginButton = document.getElementById('loginButton');
    const loggedIn = sessionStorage.getItem("loggedIn");
    const displayUsername = document.getElementById("displayUsername");
    //alert("session value of loggodIn: " + loggedIn)
    
    if (loggedIn === "true"){
        const username = sessionStorage.getItem("username");
        if(displayUsername){
            displayUsername.textContent = username;
        }
        //alert("logged in");
        loginButton.style.display = 'none';
    } else {
        //alert("not logged in");
        loginButton.style.display = 'block';
    }
});

function login(){
    usernameElement = document.getElementById("userName");
    passwordElement = document.getElementById("password");
    if(!usernameElement || !passwordElement){
        alert("Username or password not found");
        return;
    } else{
        const username = usernameElement.value;
        const password = passwordElement.value;
        sessionStorage.setItem("loggedIn", "true");
        sessionStorage.setItem("username", username);
        sessionStorage.setItem("password", password);
        alert("Login successful");
        window.location.href = "./home.html";
    }
}

function logout(){
    sessionStorage.setItem("loggedIn", "false");
    sessionStorage.setItem("username", "");
    sessionStorage.setItem("password", "");
    alert("Logout successful");

    window.location.href = "./home.html";
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