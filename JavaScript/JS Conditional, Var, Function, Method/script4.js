// Variable declared inside a function
function myFunction() {
    var localVar = 10; //variable declared within a function
    console.log("The value of the local variable: " + localVar + "."); //output is 10
    // This variable is only accessible within this function
}
// Calling the function to execute it
myFunction(); // This will output: The value of the local variable: 10.