window.addEventListener('load', function() {
    //manually add values to the array
    let myArray = [80, -70, 30, 80, 10, -50, 60, 80];
    plotGraph(myArray);
});

function plotGraph(myArray) {
    let canvas = document.getElementById('graphCanvas');
    let ctx = canvas.getContext('2d');
    let width = canvas.width;
    let height = canvas.height;
    let maxVal = Math.max(...myArray);
    let barWidth = canvas.width / myArray.length;

    ctx.clearRect(0, 0, width, height);
    //Draw x-axis
    ctx.beginPath();
    ctx.moveTo(0, height / 2);
    ctx.lineTo(width, height / 2);
    ctx.stroke();

    //Draw y-axis
    ctx.beginPath();
    ctx.moveTo(width / 2, 0);
    ctx.lineTo(width / 2, height);
    ctx.stroke();

    // Plot values on graph
    let step = width / (myArray.length + 1);
    let x = step;
    myArray.forEach(function(value, index) {
        let y = height / 2 - value / 100 * height / 2; //convert percentage to y-coordinate
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, 2 * Math.PI);
        ctx.fill();
        x += step;
    });
}