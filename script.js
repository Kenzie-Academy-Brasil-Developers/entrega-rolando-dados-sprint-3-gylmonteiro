function rolagemDosDados(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//  let dado1 = rolagemDosDados(1,6);
//  console.log(dado1)
//  let dado2 = rolagemDosDados(1,6);
//  console.log(dado2)
// Lógica para gerar o array contendo os valores de frequencias.
let frequencias = [[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],[9,0],[10,0],[11,0],[12,0]];
for (let i = 0; i < 1000; i++) {
  let dado1 = rolagemDosDados(1,6);
  let dado2 = rolagemDosDados(1,6);
  let somaDados = dado1 + dado2;
  if (somaDados === 2) {
      frequencias[0][1] += 1;
  } else if (somaDados === 3) {
      frequencias[1][1] += 1;
  } else if(somaDados === 4) {
    frequencias[2][1]+= 1;
  } else if(somaDados === 5) {
    frequencias[3][1]+= 1;
  } else if(somaDados === 6) {
    frequencias[4][1]+= 1;
  } else if(somaDados === 7) {
    frequencias[5][1]+= 1;
  } else if(somaDados === 8) {
    frequencias[6][1]+= 1;
  } else if(somaDados === 9) {
    frequencias[7][1]+= 1;
  } else if(somaDados === 10) {
    frequencias[8][1]+= 1;
  } else if(somaDados === 11) {
    frequencias[9][1]+= 1;
  } else {
    frequencias[10][1]+= 1;
  }
}

// Usando o dom para implementar o conteudo;
const result = document.getElementById('resultado');
const conteudo = document.createElement('p');

// Formatando a saída com um for
let position = 0;
for (i = 2; i<=12; i++) {
  conteudo.innerHTML += i + ": " + frequencias[position][1] + "<br>"
  position++
}

result.appendChild(conteudo);


// contruindo a saida por barras:

function criarBarras() {

  positionArray = 0;
  for (i = 2; i<=12; i++) {
    const barras = document.getElementById("resultado");
    const barra = document.createElement("div");
    barra.style.width = `${frequencias[positionArray][1]}`+"px";
    barra.innerHTML += i + ": " + frequencias[positionArray][1] + "<br>";
    barra.style.backgroundColor = "red";
    barras.appendChild(barra);
    positionArray++;
    

  }
  

}

criarBarras();