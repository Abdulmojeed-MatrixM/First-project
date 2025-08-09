let array = [];

// Display the array elements in the #arrayElements div
function displayArray() {
    const arrayContainer = document.getElementById("arrayElements");
    arrayContainer.innerHTML = ""; // Clear previous content
    if (array.length === 0) {
        arrayContainer.textContent = "Array is empty."; // Display a message if the array is empty
        return;
    }
    array.forEach((element, index) => {
        const elementDiv = document.createElement("div");
        elementDiv.className = "array-item"; // Add a class for styling
        elementDiv.textContent = `Element ${index}: ${element}`; // Display element with its index
        arrayContainer.appendChild(elementDiv); // Append the new div to the display
    });
}

// A function to addelement to the end (push)
function addElement() {
    const elementInput = document.getElementById("elementInput");
    const value = elementInput.value.trim();
    if (value === "") {
        alert("Please enter a value.");
        return;
    }
    array.push(value); // Add the value to the array
    elementInput.value = ""; // To clear the input field after adding
    displayArray();
}

// Add element to the beginning (unshift)
function addFirst() {
    const elementInput = document.getElementById("elementInput");
    const value = elementInput.value.trim(); 
    if (value === "") {
        alert("Please enter a value.");
        return;
    }
    array.unshift(value);
    elementInput.value = ""; // To clear the input field after adding
    displayArray();
}

// Remove last element (pop)
function removeLast() {
    if (array.length === 0) {
        alert("Array is already empty.");
        return;
    }
    array.pop(); // Remove the last element from the array
    displayArray();
}

// Remove first element (shift)
function removeFirst() {
    if (array.length === 0) {
        alert("Array is already empty.");
        return;
    }
    array.shift();
    displayArray();
}

// To remove element from the beginning or end of the array (at specific index (splice))
function removeAtIndex() {
    const indexInput = document.getElementById("removeIndex");
    const index = parseInt(indexInput.value, 10);
    if (isNaN(index) || index < 0 || index >= array.length) {
        alert("Please enter a valid index.");
        return;
    }
    array.splice(index, 1);
    indexInput.value = "";
    displayArray();
}

// Initial display
displayArray();