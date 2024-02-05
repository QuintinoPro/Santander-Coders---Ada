

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


const eMaiordeIdade = (idade) => 18 ? "Acesso Permitido" : "Acesso Negado!";

const idade = readline.question("Qual su a Idade: ", (idade) => {
    console.log(eMaiordeIdade(idade));
});