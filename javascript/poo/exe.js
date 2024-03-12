
class Pai {
    nome = 'Daniel';
    #patrimonio = 300000;
    constructor(sobrenome){
        this.sobrenome = sobrenome
        
    }
    get patrimonio(){
        return this.#patrimonio;
    }
    
    set patrimonio(novoValor){
        return this.#patrimonio = novoValor;
    }

    andar() {

    }
}

class Filha extends Pai {
    constructor(sobrenome){
        super(sobrenome)
    }


}

const filho = new Filha("Silva");
console.log(filho.nome);
filho.nome = "Cleiton"
console.log(filho.nome);
console.log(filho);
console.log(filho.patrimonio);

const filho1 = new Filha("Gomes");
console.log(filho1);


const Andre = {nome: "Andre", idade: 27}

console.log(Andre);
