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

let rected
let point
let soundtrack

let errorChance = 0

function preload() {
    rected = loadSound("assets/raquetada.mp3")
    point = loadSound("assets/ponto.mp3")
    soundtrack = loadSound("assets/trilha.mp3")
}

function setup() {
    createCanvas(600, 400)
    soundtrack.loop()
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
        rected.play()
    }
}

function moveOpponentRect() {
    speedOpponent = yCircle - yOpponentRect - (wRect / 2)
    yOpponentRect += speedOpponent - errorChance
    calcErrorChance()
}

function addPoints() {
    stroke(255)
    textAlign(CENTER)
    textSize(16)
    fill(color(255, 140, 0))
    rect(130, 10, 40, 20)
    fill(255)
    text(myPoints, 150, 26)
    fill(color(255, 140, 0))
    rect(430, 10, 40, 20)
    fill(255)
    text(opponentPoints, 450, 26)
}

function sumPoints() {
    if (xCircle + radius > 599) {
        myPoints++
        point.play()
    }
    if (xCircle - radius < 1) {
        opponentPoints++
        point.play()
    }
}

function calcErrorChance() {
    if (opponentPoints >= myPoints) {
        if (errorChance < 150) {
            errorChance += 1
        }
    } else {
        if (errorChance >= 30) {
            errorChance -= 1
        } else {
            errorChance = 30
        }
    }
}