window.onload = function() {
    alert("Welcome to my new Dynamic Website, Hold on while its LOADS. Thanks!");
    console.log("The Website has LOADED successfully.");
    alert("The Website has LOADED successfully.");
};

function changeText() {
    var heading = document.getElementById("Hello World!");
    heading.textContent = "Hello, Dynamic World!";
}
