function runReview3() {
    class Client {
        id
        #account
        #digit
        name
        
        constructor(name, account, digit, id) {
            this.name = name
            this.#account = account
            this.id = id
            this.#digit = digit
        }
        
        exibirCliente(){
            console.log(`
            ID: ${this.id}
            Nome: ${this.name}
            Conta: ${this.#account}
            Digito: ${this.#digit}
            `);
        }

        buscarCliente(x,y){
            y.forEach(element => {
                if (element.id === x) {
                    element.exibirCliente();
                }
            });
        }

    }

    let clientes = [];
    let joao = new Client("Joao",123456,17,1);
    let maria = new Client("Maria",223456,18,2);

    clientes.push(joao,maria);
    

    joao.buscarCliente(2,clientes);

    
}

runReview3();

