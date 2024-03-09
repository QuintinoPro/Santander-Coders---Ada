// Bank Account

function runBankAccount() {
    class Bank {
        #name
        #clients

        constructor(name, clients) {
            this.#name = name
            this.#clients = clients
        }

        get name() {
            return this.#name
        }
        
        get clients() {
            return this.#clients
        }

        addClient(client) {
            this.#clients.push(client)
        }

    }

    class Client {
        #id
        #name
        #accounts

        constructor(id, name, accounts) {
            this.#id = id
            this.#name = name
            this.#accounts = accounts
        }
    }

    class BankAccount {
        #number
        #digit
        #amount

        constructor(number, digit, amount) {
            this.#number = number
            this.#digit = digit
            this.#amount = amount
        }

        get number() {
            return this.#number
        }

        get digit() {
            return this.#digit
        }

        get amount() {
            return this.#amount
        }

        set amount(value){
            this.#amount = value
        }

        addAmount(amount) {
            this.#amount += amount
        }

        withdraw(saque){             
            if(this.#amount - saque >= 100){
                this.#amount -= saque;
                console.log(`Saque de ${saque} realziado!`);
                console.log(`Seu saldo é de ${this.#amount}`);
            } else {
                console.log(`Saque não realizado!`);
                console.log(`Seu saldo é de ${this.#amount}`);
            }
        }
    }

    class SavingsBankAccount extends BankAccount {
        constructor(number, digit, amount) {
            super(number, digit, amount)
        }
    
        printAccount() {
            // console.log(super.#account) // Dá um erro
            console.log(this.account) // Funciona, porque é um método herdado
        }

        addAmount(amount) {
            console.log('Adding savings')
            super.addAmount(amount)
        }

        get amount() {
            return super.amount * 2
        } 
    }

    class ProfitableBankAccount extends BankAccount {
        constructor(number, digit, amount) {
            super(number, digit, amount)
        }
        
        addAmount(deposit) {
            return this.amount += (deposit + (deposit * 0.01) - 3);
        }

        withdraw(saque){             
            if((this.amount - (saque+0.5)) >= 100){
                this.amount -= (saque+0.5);
                console.log(`Saque de ${saque+0.5} realziado!`);
                console.log(`Seu saldo é de ${this.amount}`);
            } else {
                console.log(`Saque não realizado!`);
                console.log(`Seu saldo é de ${this.amount}`);
            }
        }
    }

    const bank = new Bank('Santander', [])
    const bankAccount = new BankAccount('123', '1', 150)
    const client = new Client(1, 'Ada', [bankAccount])
    bank.addClient(client)
 
    
    bankAccount.withdraw(50)

    // Passo 1.1
    bankAccount.withdraw(50) *//

    console.log('bankAccount: ', bankAccount)

    const savingsBankAccount = new SavingsBankAccount('123', '1', 200)
    savingsBankAccount.addAmount(100)
    console.log('savingsBankAccount: ', savingsBankAccount.amount)
    
    const profitableBankAccount = new ProfitableBankAccount('123', '1', 200)
    profitableBankAccount.addAmount(500)
    console.log('profitableBankAccount: ', profitableBankAccount.amount)

    profitableBankAccount.withdraw(100)
}

runBankAccount()