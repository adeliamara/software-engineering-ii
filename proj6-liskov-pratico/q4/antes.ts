class Imovel {
    nome: string;
    local: string;

    constructor(nome: string, local: string) {
        this.nome = nome;
        this.local = local; 
    }

    public addTelhado() {
        console.log("Add telhado")
    }
}

class Casa extends Imovel {
    constructor(nome: string, local: string) {
        super(nome, local);
        
    }
}

class CasaDePraia extends Imovel {
    constructor(nome: string, local: string) {
        super(nome, local);
        
    }
}

class JardimDeInverno extends Imovel {
    constructor(nome: string, local: string) {
        super(nome, local);
    }

    public addTelhado() {
        // nao deve fazer nada
    }
}