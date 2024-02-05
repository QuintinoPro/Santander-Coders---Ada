
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


function calDesc(valorCompra, tipoCliente){
    let desPerce;

    switch (tipoCliente.toLowerCase()) {
        case "normal":
            desPerce = 5;
            break;
        case "premium":
            desPerce = 10;
            break;
        case "vip":
            desPerce = 15;
            break;
        default:
            console.log("Tipo Invalido!");
    }
    
    return desPerce;
}

let valorCompra = readline.question("Qual o Valor da Compra: ", (valorCompra) => {
});

let tipoCliente = readline.question("Tipo Cliente: ", (tipoCliente) => {
});

console.log("Seu desconto é: ", calDesc(valorCompra, tipoCliente));


