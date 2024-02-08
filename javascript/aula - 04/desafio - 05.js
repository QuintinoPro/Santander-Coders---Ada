

function somaNumeros(x) {
    let soma = 0;

    for (let i = 0; i < x.length; i++) {
        soma = soma + x[i];
    }

    return soma;
}


let numeros = [1,2,3,4,5,6,7];

console.log(somaNumeros(numeros));