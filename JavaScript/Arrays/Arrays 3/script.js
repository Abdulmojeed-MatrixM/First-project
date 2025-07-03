function storeData() {
    let values = [];
    let inputs = document.querySelectorAll('.input-contatiner input[type="number"]');
    inputs.forEach(function(input) {
        values.push(parseFloat(input.value));
    });

    plotGraph(values);
}

function plotGraph(values) {
    let canvas = document.getElementById("graphCanvas");
    let ctx = canvas.getContext("2d");
    let width = canvas.width;
    let height = canvas.height;

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

    //Plot values on graph
    let step = width / (values.length + 1);
    let x = step;
    values.forEach(function(value, index) {
        let y = height / 2 - value * 10; // Scale the value for the graph
        ctx.fillRect(x, y, step - 2, value * 10);
        x += step;
    });
}