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

    // Coditions to move circle 
    if (xCircle > width || xCircle < 0) {
        xSpeed *= -1
    }
    if (yCircle > height || yCircle < 0) {
        ySpeed *= -1
    }
}