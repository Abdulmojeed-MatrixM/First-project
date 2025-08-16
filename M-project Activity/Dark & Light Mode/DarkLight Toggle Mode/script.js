// Select the toggle button and body element
const toggleButton = document.getElementById('toggleButton');
const body = document.body;

// Function to toggle between light and dark mode
function toggleMode() {
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        toggleButton.textContent = "Switch to Light Mode";
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        toggleButton.textContent = "Switch to Dark Mode";
    }
}

// Add event listener to the button
toggleButton.addEventListener('click', toggleMode);

// Optional: Set initial mode based on user preference (localStorage or prefers-color-scheme)
// You can add this feature for enhancement.