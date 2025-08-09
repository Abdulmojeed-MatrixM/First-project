let array = [];

// Display the array elements in the #arrayElements div
function displayArray() {
    const displayDiv = document.getElementById('arrayElements');
    displayDiv.innerHTML = '';
    if (array.length === 0) {
        displayDiv.textContent = "Array is empty.";
        return;
    }
    array.forEach((el, idx) => {
        const div = document.createElement('div');
        div.className = "array-item";
        div.textContent = `Element ${idx}: ${el}`;
        displayDiv.appendChild(div);
    });
}

// Add element to the end (push)
function addElement() {
    const input = document.getElementById('elementInput');
    const value = input.value.trim();
    if (value === "") {
        alert("Please enter a value.");
        return;
    }
    array.push(value);
    input.value = "";
    displayArray();
}

// Add element to the beginning (unshift)
function addFirst() {
    const input = document.getElementById('elementInput');
    const value = input.value.trim();
    if (value === "") {
        alert("Please enter a value.");
        return;
    }
    array.unshift(value);
    input.value = "";
    displayArray();
}

// Remove last element (pop)
function removeLast() {
    if (array.length === 0) {
        alert("Array is already empty.");
        return;
    }
    array.pop();
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

// Remove element at specific index (splice)
function removeAtIndex() {
    const indexInput = document.getElementById('removeIndex');
    const idx = parseInt(indexInput.value, 10);
    if (isNaN(idx) || idx < 0 || idx >= array.length) {
        alert("Please enter a valid index.");
        return;
    }
    array.splice(idx, 1);
    indexInput.value = "";
    displayArray();
}

// Initial display
displayArray();