// Elements HTML
const container = document.querySelector('#container');
const paddle = document.querySelector('#paddle');
const ball = document.querySelector('#ball');
const bricks = [];



// Variable globales

// Paddle config
let moveLeft = false;
let moveRight = false;  

// Ball config
let ballRadius = 10;
let ballDx = -4;
let ballDy = -4;
        
    
/**
* Keyboard event
*/
function initKeyboardListener() {
    document.addEventListener('keydown', onKeyDown, false);
    document.addEventListener('keyup', onKeyUp, false);
}

/**
* On key down keyboard
*/
function onKeyDown(event) {

    console.log(event);

    switch (event.key) {

        case "ArrowLeft":
            moveLeft = true;
            break;
        case "ArrowRight":
            moveRight = true;
            break;
            
        default:
            break;

    }

}

/**
* On key up keyboard
*/
function onKeyUp(event) {

    switch (event.key) {

        case "ArrowLeft":
            moveLeft = false;
            break;
        case "ArrowRight":
            moveRight = false;
            break;
            
        default:
            break;

    }    

}


/**
* Move Paddle
*/
function movePaddle() {
    const step = 4;
    let currentPaddlePositionX = paddle.offsetLeft;
    let paddleWidth = parseInt(window.getComputedStyle(paddle,null).getPropertyValue("width"),10);
    let paddleLeft = parseInt(window.getComputedStyle(paddle,null).getPropertyValue("left"),10);
    let paddleRight = paddleLeft + paddleWidth;
    let containerWidth = container.offsetWidth;
    

    if (moveLeft) {
        currentPositionLeft = currentPaddlePositionX -= step;
    }

    if (moveRight) {
        currentPositionRight = currentPaddlePositionX += step;
    }

    if (currentPaddlePositionX < 0) {
        currentPaddlePositionX = 0;
    } 

    if (currentPaddlePositionX + paddleWidth > containerWidth) {
        currentPaddlePositionX = containerWidth - paddleWidth;
    }
    

    paddle.style.left = currentPaddlePositionX + 'px';
}

/**
* moveBall
*/ 
function moveBall(){
    let currentBallPositionX = ball.offsetLeft;
    let currentBallPositionY = ball.offsetTop;
    let containerWidth = container.offsetWidth;
    let containerHeight = container.offsetHeight;
    let ballWidth = ballRadius * 2; 

    currentBallPositionX += ballDx;
    currentBallPositionY += ballDy;

    //left
    if (currentBallPositionX < 0) {
        ballDx = -ballDx;
    }

    //right
    if (currentBallPositionX + ballWidth > containerWidth) {
        ballDx = -ballDx;
    }

    //top
    if (currentBallPositionY < 0) {
        ballDy = -ballDy;
    }

    //bottom
    if (currentBallPositionY + ballWidth > containerHeight ) {
        ballDy = -ballDy;
    }

    ball.style.left = currentBallPositionX + 'px';
    ball.style.top = currentBallPositionY + 'px';
}

/**
* checkCollisionPaddle
*/ 
function checkCollisionPaddle() {
    let ballCenterX = ball.offsetLeft + ballRadius;
    let ballCenterY = ball.offsetTop + ballRadius;

    let paddleWidth = paddle.offsetWidth;
    let paddleHeight = paddle.offsetHeight;

    let paddleLeftX = paddle.offsetLeft;
    let paddleRightX = paddleLeftX + paddleWidth;
    let paddleTopY = paddle.offsetTop;
    let paddleBottomY = paddleTopY + paddleHeight;

    if (ballCenterX > paddleLeftX && 
        ballCenterX < paddleLeftX + (paddleWidth / 2) && 
        ballCenterY > paddleTopY && 
        ballCenterY < paddleBottomY
        ) {
            ballDy = -ballDy;
        ballDx = -Math.abs(ballDx);
    }

    if (ballCenterX > (paddleLeftX + paddleWidth / 2) && 
        ballCenterX < paddleRightX && 
        ballCenterY > paddleTopY && 
        ballCenterY < paddleBottomY
    ) {
        ballDy = -ballDy;
        ballDx = Math.abs(ballDx);
    }
}

/**
* createBrick 
*/ 
function createBrick(){
    // Brick config
    let brickWidth = 100; // largeur d'une brique
    let brickHeight = 22; // hauteur d'une brique
    let brickMargin = 10; // espacement entre les briques
    
    let numberBrickPerLine = 5; // nombre de brique par ligne
    let numberBrickPerColumn = 5; // nombre de brique par colonne
    
    let positionX = 0; // position x de la brique en cours de création
    let positionY = 0; // position y de la brique en cours de création


    for (let i = 0; i < numberBrickPerLine; i++) {
        
        for (let j = 0; j < numberBrickPerColumn; j++) {

            let brick = document.createElement('div'); // creation d'un élément div
            brick.className = 'brick'; // ajout de la class css .brick

            brick.style.width = brickWidth + 'px'; //attribution du style
            brick.style.height = brickHeight + 'px';
            brick.style.left = positionX + 'px';
            brick.style.top = positionY + 'px';

            container.appendChild(brick); // on ajoute l'élément div à notre container

            positionX += brickWidth + brickMargin; // la position X de la brique suivante, sera la largeur d'une brique + la margin

            bricks.push(brick); // on ajoute la brick au tableau de briques créé dans les variables globales

            if (numberBrickPerLine > 5) {
                bricks.push("<br>");
            }

        }
    }
}
        
/**
* 60 FPS rendering 
*/ 
function loop(){
    window.requestAnimationFrame(function() {
        movePaddle();
        moveBall();
        checkCollisionPaddle();

        loop();
    })
}

/**
* Init game
*/
function init() {
    //Init
    initKeyboardListener();
    createBrick();
    
    loop();
}

init();    