class Forma{
    descricao(){
        return "Esta é uma forma Geometrica!"
    }
    constructor (apelido) {
        this.apelido = apelido;
    }
}

class Retangulo extends Forma {
    altura;
    largura;

    constructor (altura, largura) {
        super() // Sempre chamar em classes filhas o super ()
        this.altura = altura;
        this.largura = largura;
    }
    descricao(){
        console.log(super.descricao());
        return "Este é um Retangulo!"
    }

    get area() {
        return this.altura * this.largura;
    }
}

const obj = {nome: "Andre"}
console.log(obj);

const formaGeometrica = new Forma()
console.log(formaGeometrica);


const rentagulo = new Retangulo(10, 20);
console.log(rentagulo.descricao());
console.log(rentagulo);
const rentagulo1 = new Retangulo(20, 40);
console.log(rentagulo1.descricao());
console.log(rentagulo1);

console.log(rentagulo.area);
console.log(rentagulo1.area);



