let forme, couleur, sound1, sound2, sound3;
let modele1, modele2, modele3;
let angle = 0;
let drawingform = false;

function preload() {
  sound1 = loadSound(
    "https://cdn.glitch.global/fd4fe7d5-c69c-453c-94b2-98b553065b1a/DigitalText.mp3?v=1714136925292"
  );
  sound2 = loadSound(
    "https://cdn.glitch.global/fd4fe7d5-c69c-453c-94b2-98b553065b1a/Organic.mp3?v=1714136926059"
  );
  sound3 = loadSound(
    "https://cdn.glitch.global/fd4fe7d5-c69c-453c-94b2-98b553065b1a/Water.mp3?v=1714136925735"
  );
  modele1 = loadModel(
    "https://cdn.glitch.global/fd4fe7d5-c69c-453c-94b2-98b553065b1a/forme_1.obj",
    true
  );
  modele2 = loadModel(
    "https://cdn.glitch.global/fd4fe7d5-c69c-453c-94b2-98b553065b1a/forme_2.obj",
    true
  );
  modele3 = loadModel(
    "https://cdn.glitch.global/fd4fe7d5-c69c-453c-94b2-98b553065b1a/forme_3.obj",
    true
  );
  // gradient1 = loadImage("https://cdn.glitch.global/fd4fe7d5-c69c-453c-94b2-98b553065b1a/de%CC%81grade%CC%81%20de%20couleur.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(255);
  noLoop(); // Ne pas boucler automatiquement
}


function draw() {
  let topColor1 = color(54, 118, 59);
  let bottomColor1 = color(72, 61, 139);
  
  for(let y=0; y<height; y++){
    n = map(y,0,height,0,1);
    let newc = lerpColor(topColor1,bottomColor1,n);
    stroke(newc);
    line(0,y,width, y);
  }
let newColor1 = lerpColor(topColor1, bottomColor1, 0.8);

  
  if (drawingform) {
    background(255);

    rotateY(angle);
    rotateX(angle);

    
    let topColor1 = color(54, 118, 59);
    let bottomColor1 = color(72, 61, 139);
    let newColor1 = lerpColor(topColor1, bottomColor1, 0.8);
    
    fill(newColor1);
    
    rect(100,100, 100, 100);
    //noFill();

    // Forme 3D
    switch (forme) {
      case 1:
        // noStroke();
        displaymodel(modele1);
        break;
      case 2:
        // noStroke();
        displaymodel(modele2);
        //box(150, 150, 150);
        break;
      case 3:
        displaymodel(modele3);
        // cone(85, 150);
        break;
    }

    angle += 0.01;
  }
}

function stopAllSounds() {
  sound1.stop();
  sound2.stop();
  sound3.stop();
}

function updateAndDraw() {
  //récupérer les éléments du html
  document.getElementById("message").style.display = "none";

  forme = parseInt(document.getElementById("inputForme").value);
  couleur = mapColor(parseInt(document.getElementById("inputCouleur").value));
  let soundOption = parseInt(document.getElementById("inputSound").value);

  stopAllSounds();

  // Sons
  switch (soundOption) {
    case 1:
      if (!sound1.isPlaying()) {
        sound1.loop();
      }
      break;
    case 2:
      if (!sound2.isPlaying()) {
        sound2.loop();
      }
      break;
    case 3:
      if (!sound3.isPlaying()) {
        sound3.loop();
      }
      break;
  }

  drawingform = true;
  loop(); // Redémarrer la boucle de dessin si elle était arrêtée
}

// Couleur
function getColor(num) {
  //Impossible de faire un dégradé sur une 3D --> essayer de remplacer par une image
  //topColor1 = color(54, 118, 59);
  //bottomColor1 = color(72, 61, 139);
  //newColor1 = lerpColor(topColor1, bottomColor1, 0.8);

  switch (num) {
    case 1:
      // return newColor1;
      // return gradient1;

      return color(255, 179, 235); // Pink
    case 2:
      return color(223, 255, 43); // Yellow
    case 3:
      return color(25, 112, 255); // Blue
    // default:
    // return color(0);  //Noir par défaut
  }
}

function keyPressed() {
  if (keyCode === ENTER) {
    updateAndDraw();
  }
}

function stopGenerate() {
  stopAllSounds();
  noLoop();
  drawingform = false;
  clear();
  document.getElementById("message").style.display = "block";
}
