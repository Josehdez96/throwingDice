// Correr con el comando node probabilidadDado (para que pida el input)

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Cuantas veces lanzarás el dado? ', (attempts) => {
  diceProbability(attempts);
  readline.close();
});

//diceProbability(100);
function diceProbability(attempts) {
  let rollPerFace = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
  };

  let faces = Object.keys(rollPerFace);

  rollingDice(attempts, rollPerFace, faces);
  showResults(attempts, rollPerFace);
}

function rollingDice(attempts, rollPerFace, faces) {
  for (let i = 0; i < attempts; i++) {
    let random = faces[Math.floor(Math.random() * faces.length)];
    rollPerFace[random].push(i);
  }
}

function showResults(attempts, rollPerFace) {
  for (const face in rollPerFace) {
    console.log(
      `Cayó en cara ${face}: ${rollPerFace[face].length} veces, osea ${
        (rollPerFace[face].length / attempts) * 100
      }%`
    );
  }

  // Show the data
  // for (const face in rollPerFace) {
  //   console.log(`Intentos que cayerón en ${face}: ${rollPerFace[face]}`);
  // }
}
