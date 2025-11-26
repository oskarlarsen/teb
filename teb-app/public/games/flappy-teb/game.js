const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreElement = document.getElementById('score');
const gameOverScreen = document.getElementById('gameOver');
const startScreen = document.getElementById('startScreen');
const finalScoreElement = document.getElementById('finalScore');
const restartBtn = document.getElementById('restartBtn');

// Canvas settings
canvas.width = 400;
canvas.height = 600;

// Game settings
const GRAVITY = 0.5;
const JUMP_STRENGTH = -8;
const PIPE_WIDTH = 60;
const PIPE_GAP = 120;
const PIPE_SPEED = 2;

// Load image for Jarritos
const jarritosImg = new Image();
jarritosImg.src = '/images/flappy/Jarritos-PNG-Pic-for-flappy.png';
let jarritosLoaded = false;
jarritosImg.onload = () => {
    jarritosLoaded = true;
};

// Game state
let gameState = 'start'; // 'start', 'playing', 'gameOver'
let score = 0;
let frames = 0;

// Bird
const bird = {
    x: 80,
    y: canvas.height / 2,
    width: 34,
    height: 24,
    velocity: 0,
    
    draw() {
        ctx.fillStyle = '#FFD700';
        ctx.fillRect(this.x, this.y, this.width, this.height);
        
        // Eye
        ctx.fillStyle = '#000';
        ctx.fillRect(this.x + 20, this.y + 5, 5, 5);
        
        // Beak
        ctx.fillStyle = '#FF6347';
        ctx.beginPath();
        ctx.moveTo(this.x + this.width, this.y + 10);
        ctx.lineTo(this.x + this.width + 10, this.y + 12);
        ctx.lineTo(this.x + this.width, this.y + 14);
        ctx.fill();
    },
    
    update() {
        this.velocity += GRAVITY;
        this.y += this.velocity;
        
        // Ground collision
        if (this.y + this.height > canvas.height - 50) {
            this.y = canvas.height - 50 - this.height;
            this.velocity = 0;
            if (gameState === 'playing') {
                endGame();
            }
        }
        
        // Ceiling collision
        if (this.y < 0) {
            this.y = 0;
            this.velocity = 0;
        }
    },
    
    jump() {
        this.velocity = JUMP_STRENGTH;
    },
    
    reset() {
        this.y = canvas.height / 2;
        this.velocity = 0;
    }
};

// Pipes
let pipes = [];

function createPipe() {
    const minHeight = 50;
    const maxHeight = canvas.height - PIPE_GAP - 100;
    const height = Math.random() * (maxHeight - minHeight) + minHeight;
    
    pipes.push({
        x: canvas.width,
        topHeight: height,
        bottomY: height + PIPE_GAP,
        scored: false
    });
}

function drawPipes() {
    ctx.fillStyle = '#5CB85C';
    
    pipes.forEach(pipe => {
        if (jarritosLoaded) {
            // Top pipe - stretch single bottle upside down
            ctx.save();
            ctx.translate(pipe.x + PIPE_WIDTH / 2, pipe.topHeight / 2);
            ctx.rotate(Math.PI);
            ctx.drawImage(jarritosImg, -PIPE_WIDTH / 2, -pipe.topHeight / 2, PIPE_WIDTH, pipe.topHeight);
            ctx.restore();

            // Bottom pipe - stretch single bottle
            const bottomHeight = canvas.height - pipe.bottomY - 50;
            ctx.drawImage(jarritosImg, pipe.x, pipe.bottomY, PIPE_WIDTH, bottomHeight);
        } else {
            // Fallback rectangles if image not loaded
            ctx.fillStyle = '#5CB85C';
            ctx.fillRect(pipe.x, 0, PIPE_WIDTH, pipe.topHeight);
            ctx.fillRect(pipe.x, pipe.bottomY, PIPE_WIDTH, canvas.height - pipe.bottomY - 50);
        }
        
        // Pipe borders
        //ctx.strokeStyle = '#2E7D32';
        //ctx.lineWidth = 3;
        //ctx.strokeRect(pipe.x, 0, PIPE_WIDTH, pipe.topHeight);
        //ctx.strokeRect(pipe.x, pipe.bottomY, PIPE_WIDTH, canvas.height - pipe.bottomY - 50);
        
    });
}

function updatePipes() {
    pipes.forEach((pipe, index) => {
        pipe.x -= PIPE_SPEED;
        
        // Check collision
        if (
            bird.x < pipe.x + PIPE_WIDTH &&
            bird.x + bird.width > pipe.x &&
            (bird.y < pipe.topHeight || bird.y + bird.height > pipe.bottomY)
        ) {
            endGame();
        }
        
        // Score
        if (!pipe.scored && pipe.x + PIPE_WIDTH < bird.x) {
            pipe.scored = true;
            score++;
            scoreElement.textContent = score;
        }
        
        // Remove off-screen pipes
        if (pipe.x + PIPE_WIDTH < 0) {
            pipes.splice(index, 1);
        }
    });
    
    // Add new pipes
    if (frames % 100 === 0) {
        createPipe();
    }
}

function drawGround() {
    ctx.fillStyle = '#DEB887';
    ctx.fillRect(0, canvas.height - 50, canvas.width, 50);
    
    ctx.fillStyle = '#8B4513';
    for (let i = 0; i < canvas.width; i += 20) {
        ctx.fillRect(i, canvas.height - 50, 2, 50);
    }
}

function drawBackground() {
    // Sky gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, '#4ec0ca');
    gradient.addColorStop(1, '#87ceeb');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function startGame() {
    gameState = 'playing';
    score = 0;
    frames = 0;
    pipes = [];
    bird.reset();
    startScreen.classList.add('hidden');
    gameOverScreen.classList.add('hidden');
    scoreElement.textContent = '0';
}

function endGame() {
    gameState = 'gameOver';
    finalScoreElement.textContent = score;
    gameOverScreen.classList.remove('hidden');
}

function gameLoop() {
    drawBackground();
    drawGround();
    
    if (gameState === 'playing') {
        frames++;
        bird.update();
        updatePipes();
    }
    
    drawPipes();
    bird.draw();
    
    requestAnimationFrame(gameLoop);
}

// Controls
function handleInput() {
    if (gameState === 'start') {
        startGame();
    } else if (gameState === 'playing') {
        bird.jump();
    }
}

document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        e.preventDefault();
        handleInput();
    }
});

canvas.addEventListener('click', handleInput);
restartBtn.addEventListener('click', startGame);

// Start game loop
gameLoop();