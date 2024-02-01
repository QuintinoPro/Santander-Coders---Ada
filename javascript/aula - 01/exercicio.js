
// 1.

let a = true;
let b = false;


if (a && b) {
    console.log("Ambas são verdadeiras.");
} else {
    console.log("Pelo menos uma das variáveis é falsa.");
}



// 2.

let c = 5;
let d = 3;


let resultado = c + d;
console.log("Resultado da operação matemática:", resultado);



// 3.

let e = "Olá, ";
e += "mundo!";
console.log(e);



// 4.

let f = undefined;
let g = undefined;
console.log(f === g);



// 5.

let objC = {};
objC.nome = "João";
objC.idade = 30;
console.log(objC);


// 6.

let arrD = [];
arrD.push("elemento1", "elemento2");
console.log("Comprimento da array:", arrD.length);



// 7.
let e = null;
console.log("Tipo de e:", typeof e);


// 8.
let temp = c;
c = d;
d = temp;


// 9.
let combinacao = 42 + " é a resposta para a vida, o universo e tudo.";
console.log(combinacao);
