// Function to perform calculations based on the selected operation
function calculate(operation) {
    // Retrieve and parse input values from the input fields
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    let result; // Variable to store the result or error message

    // Check if both inputs are valid numbers
    if (isNaN(number1) || isNaN(number2)) {
        result = 'Please enter valid numbers.'; // Error message for invalid input
    } else {
        // Perform the selected operation using a switch statement
        switch (operation) {
            case 'add':
                // Addition
                result = `${number1} + ${number2} = ${number1 + number2}`;
                break;
            case 'subtract':
                // Subtraction
                result = `${number1} - ${number2} = ${number1 - number2}`;
                break;
            case 'multiply':
                // Multiplication
                result = `${number1} * ${number2} = ${number1 * number2}`;
                break;
            case 'divide':
                // Division with zero check
                if (number2 === 0) {
                    result = 'Cannot divide by zero.'; // Error message for division by zero
                } else {
                    result = `${number1} / ${number2} = ${number1 / number2}`;
                }
                break;
            default:
                result = 'Unknown operation.'; // Error message for unknown operation
        }
    }

    // Update the result display area with the result or error message
    document.getElementById('result').innerText = result;
}