

const lista1 = ["Maçã", "Banana", "Leite", "Ovos"];
const lista2 = ["Banana", "Ovos", "Arroz", "Feijão"];

let listaFinal = lista1.concat(lista2);
let listaSemRepe = [];

for(let i = 0; i < listaFinal.length; i++){
    if(listaSemRepe.indexOf(listaFinal[i]) === -1){
        listaSemRepe.push(listaFinal[i]);
    }

}

console.log(listaSemRepe);
