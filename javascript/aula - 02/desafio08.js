
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Informe o nome do Produto: ", (produto) => {

    const nomeFinal = produto ?? "Produto sem Nome";
    console.log("Nome do Produto: " + nomeFinal);
    readline.close();
} )