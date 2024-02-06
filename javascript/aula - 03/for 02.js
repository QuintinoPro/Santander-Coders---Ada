
const notas = [8, 7, 6, 9, 5];
let soma = 0;

for(let i = 0; i < notas.length; i++){
    soma = soma + notas[i]
}

console.log("Media: ", soma / notas.length);