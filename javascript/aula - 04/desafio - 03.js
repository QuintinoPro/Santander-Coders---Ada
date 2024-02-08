


function maiorNumero(x) {
    let maior = 0;
    for (let i = 0; i < x.length; i++){
        if (x[i]>maior) {
            maior = x[i];
        }   
    }
    return maior;
}

function maiorNum(y) {
    return Math.max(...y)
}


let numeros = [1,2,3,4,5,6];

console.log(maiorNumero(numeros));
console.log(maiorNum(numeros));