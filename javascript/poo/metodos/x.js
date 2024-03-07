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

        buscarCliente(x, y) {
            y.forEach(element => {
                if (element.id === x) {
                    element.exibirCliente();
                }
            });
        }

        removerCliente(id, y) {
            let indexToRemove = y.findIndex(client => client.id === id);
            if (indexToRemove !== -1) {
                y.splice(indexToRemove, 1);
                console.log(`Cliente com ID ${id} removido com sucesso.`);
            } else {
                console.log(`Cliente com ID ${id} não encontrado.`);
            }
        }

        adicionarCliente(novoCliente, y) {
            if (y.some(client => client.id === novoCliente.id)) {
                console.log(`Já existe um cliente com o ID ${novoCliente.id}. Não é possível adicionar.`);
            } else if (y.some(client => client.name === novoCliente.name)) {
                console.log(`Já existe um cliente com o nome ${novoCliente.name}. Não é possível adicionar.`);
            } else {
                y.push(novoCliente);
                console.log(`Novo cliente adicionado com sucesso.`);
            }
        }
    }

    let clientes = [];
    let joao = new Client("Joao", 123456, 17, 1);
    let maria = new Client("Maria", 223456, 18, 2);

    clientes.push(joao, maria);

    joao.buscarCliente(2, clientes);

    joao.removerCliente(1, clientes);

    let novoCliente = new Client("Carlos", 323456, 19, 2);
    joao.adicionarCliente(novoCliente, clientes);

    let outroCliente = new Client("Ana", 423456, 20, 3);
    joao.adicionarCliente(outroCliente, clientes);

    console.log(clientes);
}

runReview3();
