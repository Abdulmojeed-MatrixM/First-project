# Activity: Manipulating arrays.

## Objective:

Create a mini project to practice JavaScript array methods, focusing on creating, indexing, and using methods like push, pop, shift, unshift, splice, and forEach.

## Instructions:

## Setup:

Create a new folder for your project files.
Inside the folder, create index.html, styles.css (optional), and script.js files.

## HTML Structure:

In index.html, set up the basic structure with a header (<h1>), a container for displaying array elements, and input fields/buttons for adding, removing, and manipulating array elements.

## JavaScript Implementation:

## Setup:
- Open your script.js file in a text editor where you'll implement JavaScript functions for array manipulation.

# Initialize the Array:
Start by initializing an empty array using let array = [];. This array will store elements that you'll manipulate using different array methods

# Implementing Array Methods:
- Push Method: Write a function addElement() that retrieves an element from an input field (elementInput) and adds it to the end of the array using array.push(element).

- Pop Method: Implement a function to remove the last element from the array using array.pop() when a "Remove Last" button is clicked.

- Shift Method: Write a function to remove the first element from the array using array.shift() when a "Remove First" button is clicked.

- Unshift Method: Implement a function to add an element to the beginning of the array using array.unshift(element) when an "Add First" button is clicked.

- Splice Method: Create a function removeElement(index) that removes an element at a specific index from the array using array.splice(index, 1).

- ForEach Method: Write a function displayArray() that iterates through the array using array.forEach() to display each element in the designated HTML area (#arrayElements).

## Displaying Array State:
Implement a function displayArray() that updates the HTML to display all elements in the array after each operation (push, pop, shift, unshift, splice).
Use DOM manipulation to update the content of the #arrayElements div with the current state of the array. Each element should be displayed with an appropriate format (e.g., "Element 1: value").

## Testing and Validation:
Test each array method individually to ensure they correctly modify the array and update the displayed results
Validate user inputs and handle edge cases such as empty arrays or invalid operations gracefully.

## Styling (Optional):

Use styles.css to enhance the visual presentation of your mini project, focusing on clarity and user interaction.

## Testing and Validation:

Test each array method individually to ensure they correctly modify the array and update the displayed results.
Validate user inputs and handle edge cases such as empty arrays or invalid operations gracefully.