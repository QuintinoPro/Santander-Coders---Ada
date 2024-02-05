

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


let clima = readline.question("Qual o Clima de Hoje: (Chuva ou Sol) ", (clima) => {
    if(clima.toLowerCase() === "chuva"){
        console.log("Leve um Guarda Chuva!");
    } else {
        console.log("Va de Bike!");
    }

    readline.close;
});




