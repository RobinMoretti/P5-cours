let x = 100;
let direction = 1;
let speed = 5;

function setup() {
	createCanvas(600,600);
}

function draw() {
	background(245);
	if(x > width || x < 0) direction *= -1;
	x += direction * speed;

	fill(250, 0, 0);
	rect(x, 300, 100, 100);
}