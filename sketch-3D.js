

// function itsLoaded(){
// 	console.log("yeahhhh");
// }

// function setup() {
// 	createCanvas(600,600, WEBGL);
// }


// function draw() {

// 	ambientMaterial(color(54, 118, 59));


// 	// aa checker
// 	// https://editor.p5js.org/haschdl/sketches/KIv7nuGx7
// 	// noStroke();
  
// 	// beginShape();
// 	// 	fill(255,0,0);
// 	// 	vertex(50,50);
// 	// 	fill(0,255,0);
// 	// 	vertex(300,50);
// 	// 	fill(0,255,255);
// 	// 	vertex(300,300);
// 	// 	fill(0,0,250);
// 	// 	vertex(50,300);
// 	// endShape(CLOSE);

// 	rect(100,100,100,100);
// }

const s = ( sketch ) => {
	let model3D;
	let loadedImage;

	sketch.preload = () => {
		model3D = sketch.loadModel("/assets/models/forme_1.obj", true);
		updateImage();
	}

	sketch.setup = () => {
		sketch.createCanvas(600,600, sketch.WEBGL);
	};

	sketch.draw = () => {
		sketch.background(245);

		if(imageIsUpdated){
			sketch.texture(loadedImage);
		}

		// sketch.rect(100,100,100,100);
		sketch.model(model3D);

		if(imageIsUpdated){
			updateImage();
		}
	};

	let imageIsUpdated = false;

	updateImage = () => {
		imageIsUpdated = false;
		let image = document.getElementById('defaultCanvas0').toDataURL();
		// let image = "http://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg";
		loadedImage = sketch.loadImage(image, imageLoaded);
	}

	imageLoaded = () => {
		// console.log(imageLoaded);
		imageIsUpdated = true;
	}
};




let myp5 = new p5(s);