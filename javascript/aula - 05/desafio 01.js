

const livro = {
    titulo: "Aurelio",
    autor: "Aurelio",
    ano_publi: 1975,
    genero: "Dicionario",
    editora: "Palici",
    idioma:  "PT-BR",
    ISBM: "123456789777",
    paginas: 777,
    preco: 300
}

const carro = {
    marca: "Chevrolet",
    modelo: "Corsa",
    ano: 2002,
    preco: 5000,
    cor: "Rosa",
    portas: 2,
    estado: "novo",
    valor: {
        fipe: 4800,
        preco: 5000
    },
    imprimidesc: () => {
        console.log(this.marca);
        console.log(this.modelo);
        console.log(this.ano);
    }
}