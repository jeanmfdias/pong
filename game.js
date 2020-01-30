let xCircle = 300
let yCircle = 200
let dCircle = 15
let radius = dCircle / 2

let xSpeed = 5
let ySpeed = 5

function setup() {
    createCanvas(600, 400)
}

function draw() {
    background(0)
    showCircle()
    moveCircle()
    checkCollisionBorder()
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