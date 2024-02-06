const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let numero;

do{
    readline.question("Digite um Numero: ", numero => {
        numero = num;
    })

}while (numero<=5);

console.log("Numero Digitado: ", numero);