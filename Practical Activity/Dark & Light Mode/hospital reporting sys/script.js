// Dark/Light mode toggle functionality for Hospital Reporting System

const toggleButton = document.getElementById('toggleButton');
const body = document.body;

// Toggle between light and dark mode
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

// Event listener for the toggle button
toggleButton.addEventListener('click', toggleMode);

// Highlight active navigation link on click
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        document.querySelectorAll('nav ul li a').forEach(a => a.classList.remove('active'));
        this.classList.add('active');
    });
});

// Optional: Save mode preference in localStorage
window.addEventListener('DOMContentLoaded', () => {
    const savedMode = localStorage.getItem('mode');
    if (savedMode) {
        body.classList.remove('light-mode', 'dark-mode');
        body.classList.add(savedMode);
        toggleButton.textContent = savedMode === 'dark-mode' ? "Switch to Light Mode" : "Switch to Dark Mode";
    }
});

toggleButton.addEventListener('click', () => {
    localStorage.setItem('mode', body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode');
});