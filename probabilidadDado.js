// Correr con el comando node probabilidadDado (para que pida el input)

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let one = [],
  two = [],
  three = [],
  four = [],
  five = [],
  six = [];
let faces = [one, two, three, four, five, six];

readline.question('Cuantas veces lanzarás el dado? ', (attempts) => {
  diceProbability(attempts, faces);
  readline.close();
});

function diceProbability(attempts, faces) {
  // imperativa
  for (let i = 0; i < attempts; i++) {
    let random = (Math.random() * 100 + 1).toFixed(3);
    if (random <= 16.666667) {
      faces[0].push(i);
    } else if (random > 16.666667 && random <= 33.333334) {
      faces[1].push(i);
    } else if (random > 33.333334 && random <= 50.000001) {
      faces[2].push(i);
    } else if (random > 50.000001 && random <= 66.666668) {
      faces[3].push(i);
    } else if (random > 66.666668 && random <= 83.333335) {
      faces[4].push(i);
    } else {
      faces[5].push(i);
    }
  }

  // declarativa
  faces.map((face, index) => {
    console.log(
      `Cayó en cara ${index + 1}: ${face.length} veces, osea ${
        (face.length / attempts) * 100
      }%`
    );
  });
}
