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

function setup() {
    createCanvas(600, 400)
}

function draw() {
    background(0)
    showCircle()
    moveCircle()
    checkCollisionBorder()
    showRect()
    moveRect()
    checkCollisionRect()
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

function showRect() {
    rect(xRect, yRect, wRect, hRect)
}

function moveRect() {
    if (keyIsDown(UP_ARROW) && yRect > 0) {
        yRect -= 10
    }

    if (keyIsDown(DOWN_ARROW) && yRect + hRect < 400) {
        yRect += 10
    }
}

function checkCollisionRect() {

}