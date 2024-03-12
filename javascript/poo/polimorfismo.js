class cardCredito {
    pagar(valor){
        return "Pagando com catao de credito." + valor;
    }
}

class Pix {
    pagar(valor){
        return "Pagando com PIX " + valor;
    }
}

class Dinheiro {
    pagar(valor){
        return "Pagando com Dinheiro " + valor;
    }
}

class Bitcoin {
    pagar(valor){
        return "Pagando com Bitcoin " + valor;
    }
}

function fazerPagamento(valor, formadePaga) {
    
    return formadePaga.pagar(valor); 
}

console.log(fazerPagamento(500, new Bitcoin()));