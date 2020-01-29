let xCircle = 300
let yCircle = 200
let dCircle = 15

let xSpeed = 5
let ySpeed = 5

function setup() {
    createCanvas(600, 400)
}

function draw() {
    background(0)
    circle(xCircle, yCircle, dCircle)
    xCircle += xSpeed
    yCircle += ySpeed
}