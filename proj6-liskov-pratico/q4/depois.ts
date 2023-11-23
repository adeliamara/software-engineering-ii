interface PossuiTelhado {
    addTelhado(): void;
}

class Imovel {
    nome: string;
    local: string;

    constructor(nome: string, local: string) {
        this.nome = nome;
        this.local = local;
    }
}

class Casa extends Imovel implements PossuiTelhado {
    constructor(nome: string, local: string) {
        super(nome, local);
    }

    addTelhado() {
        console.log("Adicionando telhado à casa");
        // Lógica específica para adicionar telhado a uma casa, se necessário
    }

    // Métodos específicos da Casa, se houver
}

class CasaDePraia extends Imovel implements PossuiTelhado {
    constructor(nome: string, local: string) {
        super(nome, local);
    }

    addTelhado() {
        console.log("Adicionando telhado à casa de praia");
        // Lógica específica para adicionar telhado a uma casa de praia, se necessário
    }

    // Métodos específicos da CasaDePraia, se houver
}

class JardimDeInverno extends Imovel {
    // JardimDeInverno não implementa PossuiTelhado, pois não terá a funcionalidade de telhado
    // Métodos específicos do JardimDeInverno, se houver
}
