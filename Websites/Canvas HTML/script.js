const canvas = document.getElementById("canvasGame");
const ctx = canvas.getContext("2d");

const playerImg = new Image();
playerImg.src = "ship.jpg";

const player = {
    x: 50,
    y: canvas.height / 2 - 25,
    width: 50,
    height: 50,
    speed: 5
};

const obstacle = {
    x: canvas.width,
    y: Math.random() * (canvas.height - 20),
    width: 20,
    height: 20,
    speed: 3
};

let collision = false;

function drawPlayer() {
    if (playerImg.complete) {
        ctx.drawImage(playerImg, player.x, player.y, player.width, player.height);
    }
}

function drawObstacle() {
    ctx.fillStyle = collision ? "red" : "grey";
    ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
}

function moveObstacle() {
    obstacle.x -= obstacle.speed;
    if (obstacle.x + obstacle.width < 0) {
        obstacle.x = canvas.width;
        obstacle.y = Math.random() * (canvas.height - obstacle.height);
        collision = false; // Reset collision for new obstacle
    }
}

function checkCollision() {
    if (
        player.x < obstacle.x + obstacle.width &&
        player.x + player.width > obstacle.x &&
        player.y < obstacle.y + obstacle.height &&
        player.y + player.height > obstacle.y
    ) {
        collision = true;
    }
}

function updateGameArea() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer();
    drawObstacle();
    moveObstacle();
    checkCollision();
    requestAnimationFrame(updateGameArea);
}

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp" && player.y > 0) {
        player.y -= player.speed;
    } else if (event.key === "ArrowDown" && player.y + player.height < canvas.height) {
        player.y += player.speed;
    }
});

updateGameArea();