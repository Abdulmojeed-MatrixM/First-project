// Initialize the DOM elements using getElementById for reuse
const imageUrlInput = document.getElementById('imageUrlInput'); // Input field for image URL
const addImageBtn = document.getElementById('addImageBtn');     // Button to add image
const gallery = document.getElementById('gallery');             // Gallery section

// Function to add an image to the gallery
function addImage() {
    // Get the value from the input field
    const url = imageUrlInput.value.trim();

    // Check if the input is not empty
    if (url) {
        // Create a new div for the gallery item
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item'); // Add CSS class for styling

        // Create an image element and set its src attribute
        const img = document.createElement('img');
        img.src = url;
        img.alt = "Gallery Image";

        // Create a remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.classList.add('remove-btn'); // Add CSS class for styling

        // Set up the remove button to delete the gallery item when clicked
        removeBtn.onclick = () => {
            gallery.removeChild(galleryItem);
        };

        // Append the image and remove button to the gallery item
        galleryItem.appendChild(img);
        galleryItem.appendChild(removeBtn);

        // Append the gallery item to the gallery section
        gallery.appendChild(galleryItem);

        // Clear the input field for the next entry
        imageUrlInput.value = "";
    }
    // Optionally, you could add an else block to alert for empty input
}

// Add an event listener to the "Add Image" button to call addImage on click
addImageBtn.addEventListener('click', addImage);

// Optionally, allow pressing Enter in the input field to add an image
imageUrlInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') addImage();
});