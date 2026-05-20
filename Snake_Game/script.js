const gameBoard = document.querySelector("#game_board");
const ctx = gameBoard.getContext("2d");
const scoreText = document.querySelector("#score_counter");
const resetButton = document.querySelector("#reset-button");
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height; 
const snakeColor =  "#689f8c";
const snakeBorder = "#96bfaf";
const foodColor = "#f83b52";
const foodBorder = "#ffa0a7";
const boardBackground = "#30314a"
const unitSize = 25;
let running = false; 
let xVelocity = unitSize; 
let yVelocity = 0; 
let foodXCore;
let foodYCore;
let score = 0; 
let snake = [
    {x:0, y:0},
    {x:unitSize * 4, y:0},
    {x:unitSize * 3, y:0},
    {x:unitSize * 2, y:0},
    {x:unitSize, y:0}
];
window.addEventListener("keydown", changeDirection);
resetButton.addEventListener("click", resetGame); 
gameStart();
function gameStart(){
    running = true;
    displayGameOverCheck = false;
    scoreText.textContent = score;
    createFood();
    drawFood(); 
    nextTick();
};
function nextTick(){
    if(running){
        setTimeout(() => {
            clearBoard();
            drawFood(); 
            moveSnake(); 
            drawSnake();
            checkGameOver(); 
            nextTick();
            console.log("next tick")
        }, 75)
    } else {
        displayGameOver();
    }
};
function clearBoard(){
    ctx.fillStyle = boardBackground; 
    ctx.fillRect(0, 0, gameWidth, gameHeight);
}
function createFood(){
    function randomFood(min, max){
        const randNum = Math.round((Math.random() * (max - min) + min) / unitSize) * unitSize; 
        return randNum;
    }
    foodXCore = randomFood(0, gameWidth - unitSize);
    foodYCore = randomFood(0, gameHeight - unitSize);
    console.log(foodXCore, foodYCore);
};
function drawFood(){
    ctx.fillStyle = foodColor; 
    ctx.strokeStyle = foodBorder; 
    ctx.fillRect(foodXCore, foodYCore, unitSize, unitSize);
    ctx.strokeRect(foodXCore, foodYCore, unitSize, unitSize);
};
function moveSnake(){
    const head = {x:snake[0].x + xVelocity, y:snake[0].y + yVelocity};
    snake.unshift(head);
    if(snake[0].x == foodXCore && snake[0].y == foodYCore){
        score += 5; 
        scoreText.textContent = score; 
        createFood();
    } else {
        snake.pop();
    }
};
function drawSnake(){
    ctx.fillStyle = snakeColor; 
    ctx.strokeStyle = snakeBorder; 
    snake.forEach(snakePart => {
        ctx.fillRect(snakePart.x, snakePart.y, unitSize, unitSize);
        ctx.strokeRect(snakePart.x, snakePart.y, unitSize, unitSize);
    })
};
function changeDirection(e){
    const keyPress = e.keyCode;
    const leftKey = 37; 
    const upKey = 38; 
    const rightKey = 39; 
    const downKey = 40; 
    
    const goingUp = (yVelocity == -unitSize); 
    const goingDown = (yVelocity == unitSize); 
    const goingRight = (xVelocity == unitSize); 
    const goingLeft = (xVelocity == -unitSize); 

    switch(true){
        case(keyPress == leftKey && !goingRight):
            xVelocity = -unitSize; 
            yVelocity = 0;
            break;
        case(keyPress == upKey && !goingDown):
            yVelocity = -unitSize; 
            xVelocity = 0;
            break;
        case(keyPress == downKey && !goingUp):
            yVelocity = unitSize; 
            xVelocity = 0;
            break;
        case(keyPress == rightKey && !goingLeft):
            xVelocity = unitSize; 
            yVelocity = 0;
            break;        
    }
};
function checkGameOver(){
    switch(true){
        case(snake[0].x < 0):
            running = false;
            break; 
        case(snake[0].x >= gameWidth):
            running = false;
            break;         
        case(snake[0].y >= gameHeight):
            running = false;
            break;         
        case(snake[0].y < 0):
            running = false;
            break;         
    }
    for(let i = 1; i < snake.length; i += 1) {
        if(snake[i].x === snake[0].x && snake[i].y === snake[0].y){
        running = false;
    } }

};
function displayGameOver(){
    ctx.font = "50px MV Boli";
    ctx.fillStyle = "#fff1f2";
    ctx.textAlign = "center";
    ctx.fillText("Game Over", gameWidth/2, gameHeight/2)
    running = false
}; 
function resetGame(){
    score = 0; 
    xVelocity = unitSize; 
    yVelocity = 0;
    snake = [
    {x:0, y:0}, 
    {x:unitSize, y:0 }, 
    {x:unitSize * 2, y:0 }, 
    {x:unitSize * 3, y:0 }, 
    {x:unitSize * 4, y:0 } 
    ];
    gameStart();
};