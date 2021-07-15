function rolagemDosDados(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

//  let dado1 = rolagemDosDados(1,6);
//  console.log(dado1)

//  let dado2 = rolagemDosDados(1,6);
//  console.log(dado2)

let frequencias = [[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],[9,0],[10,0],[11,0],[12,0]]

 for (let i = 0; i < 10; i++) {
    let dado1 = rolagemDosDados(1,6);
    let dado2 = rolagemDosDados(1,6);
    let somaDados = dado1 + dado2;
    if (somaDados === 2) {
        frequencias[0[0]] += 1
    }
   
 }