
// This code checks if the form fields are filled out correctly and prints messages accordingly.
var nameInput = document.getElementById("nameInputs");
var emailInput = document.getElementById("emailInputs");
var messageInput = document.getElementById("messageInputs");
var isFormValid = true;

if (nameInput.valuealue.trim() === "") {
    console.log("Name Field is Required.");
    isFormValid = false;
}
if (emailInput.value.trim() === "" || ! isValidEmail(emailInput.value)) {
    console.log("Email Field is Required and must be a valid email address.");
    console.log("Invalid email Address");
    isFormValid = false;
}
if (messageInput.value.trim() === "") {
    console.log("Message Field is Required.");
    isFormValid = false;
}
if (isFormValid) {
    console.log("Form Submitted Successfully.");
} else {
    console.log("Please fill out the form properly");
}
// Function to validate email format
function isValidEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

