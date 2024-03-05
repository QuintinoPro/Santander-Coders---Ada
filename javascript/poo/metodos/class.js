
class heroi{
    nome
    poder
    #hp
    #defesa
    #ataque
    constructor(nome, poder, defesa, ataque, hp){
        this.nome = nome,
        this.poder = poder,
        this.#hp = hp,
        this.#defesa = defesa,
        this.#ataque = ataque;
    }

    apresentar(){
        console.log(`
        Heroi: ${this.nome}
        HP: ${this.#hp}
        Poder: ${this.poder}
        Ataque: ${this.#ataque}
        Defesa: ${this.#defesa}`);
    }

    atacar(inimigo){
        console.log(`${this.nome} está atacando ${inimigo.nome} com ${this.poder}!`);
        inimigo.defender(this.#ataque);
    }

    defender(dano){
        console.log(`${this.nome} está defendendo.`);
        this.#hp -= dano - this.#defesa;
        if (this.#hp < 0) {
            this.#hp = 0;
        }
        console.log(`${this.nome} sofreu ${dano - this.#defesa} de dano. HP restante: ${this.#hp}`);
    }
}

const batman = new heroi("Batman","",100,60,30);
const superman = new heroi("Superman", "Super Força", 120,50,40);

batman.apresentar();
superman.apresentar();

batman.atacar(superman);
superman.atacar(batman)