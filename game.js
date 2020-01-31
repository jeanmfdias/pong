let xCircle = 300
let yCircle = 200
let dCircle = 15
let radius = dCircle / 2

let xSpeed = 5
let ySpeed = 5

let xRect = 5
let yRect = 150
let hRect = 90
let wRect = 10

let collide = false

let xOpponentRect = 585
let yOpponentRect = 150
let speedOpponent

let myPoints = 0
let opponentPoints = 0

function setup() {
    createCanvas(600, 400)
}

function draw() {
    background(0)
    showCircle()
    moveCircle()
    checkCollisionBorder()
    showRect(xRect, yRect)
    showRect(xOpponentRect, yOpponentRect)
    moveRect()
    checkCollisionRect(xRect, yRect)
    moveOpponentRect()
    checkCollisionRect(xOpponentRect, yOpponentRect)
    addPoints()
    sumPoints()
}

function showCircle() {
    circle(xCircle, yCircle, dCircle)
}

function moveCircle() {
    xCircle += xSpeed
    yCircle += ySpeed
}

function checkCollisionBorder() {
    // Coditions to move circle 
    if (xCircle > width - radius || xCircle < radius) {
        xSpeed *= -1
    }
    if (yCircle > height - radius || yCircle < radius) {
        ySpeed *= -1
    }
}

function showRect(x, y) {
    rect(x, y, wRect, hRect)
}

function moveRect() {
    if (keyIsDown(UP_ARROW) && yRect > 0) {
        yRect -= 10
    }

    if (keyIsDown(DOWN_ARROW) && yRect + hRect < 400) {
        yRect += 10
    }
}

// function checkCollisionRect() {
//     if (xCircle - radius < xRect + wRect &&
//         yCircle - radius < yRect + hRect &&
//         yCircle + radius > yRect) {
//         xSpeed *= -1
//     }
// }

function checkCollisionRect(x, y) {
    collide = collideRectCircle(x, y, wRect, hRect, xCircle, yCircle, dCircle)
    if (collide) {
        xSpeed *= -1
    }
}

function moveOpponentRect() {
    speedOpponent = yCircle - yOpponentRect - (wRect / 2) - 30
    yOpponentRect += speedOpponent
}

function addPoints() {
    fill(255)
    text(myPoints, 278, 26)
    text(opponentPoints, 321, 26)
}

function sumPoints() {
    if (xCircle + radius > 599) {
        myPoints++
    }
    if (xCircle - radius < 1) {
        opponentPoints++
    }
}