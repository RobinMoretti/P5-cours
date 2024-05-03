
const s = ( sketch ) => {
	let model3D;
	let loadedImage;
	let rotation = 0;

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
		 
		sketch.rotateY(rotation);
    	sketch.rotateX(rotation);
		rotation += 0.01;

	 	//sketch.rect(100,100,100,100);
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