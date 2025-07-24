// Dark/Light mode toggle functionality for Data Analysis Visualization UI

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

// Simple chart rendering using Canvas API
window.addEventListener('DOMContentLoaded', () => {
    // Bar Chart
    const barChart = document.getElementById('barChart').getContext('2d');
    const barData = [120, 180, 90, 150, 200, 170, 220];
    const barColors = ['#1abc9c', '#16a085', '#1976d2', '#fbc02d', '#388e3c', '#d32f2f', '#e67e22'];
    barChart.clearRect(0, 0, 300, 180);
    for (let i = 0; i < barData.length; i++) {
        barChart.fillStyle = barColors[i % barColors.length];
        barChart.fillRect(30 + i * 35, 180 - barData[i], 25, barData[i]);
        barChart.fillStyle = "#222";
        barChart.font = "12px Segoe UI";
        barChart.fillText(barData[i], 30 + i * 35, 175 - barData[i]);
    }
    // Pie Chart
    const pieChart = document.getElementById('pieChart').getContext('2d');
    const pieData = [40, 25, 20, 15];
    const pieColors = ['#1abc9c', '#1976d2', '#e67e22', '#d32f2f'];
    let total = pieData.reduce((a, b) => a + b, 0);
    let startAngle = 0;
    for (let i = 0; i < pieData.length; i++) {
        let sliceAngle = (pieData[i] / total) * 2 * Math.PI;
        pieChart.beginPath();
        pieChart.moveTo(150, 90);
        pieChart.arc(150, 90, 70, startAngle, startAngle + sliceAngle);
        pieChart.closePath();
        pieChart.fillStyle = pieColors[i];
        pieChart.fill();
        startAngle += sliceAngle;
    }
});