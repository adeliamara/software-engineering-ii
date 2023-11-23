interface Publicavel {
    exibir(): void;
    getAutor(): Perfil;
}

class Perfil{
    private id: number;
    private nomeUsuario: string;

    constructor(id: number, nomeUsuario: string) {
        this.nomeUsuario = nomeUsuario;
        this.id = id;
    }
 
    getNomeUsuario(): string {
        return this.nomeUsuario;
    }


    // Outros métodos
}

class Postagem implements Publicavel {
    private id: string;
    private autor: Perfil;
    private conteudo: string;
    private reacoes: Reacao[] = [];
    private comentarios: Comentario[] = [];

    constructor(id: string, autor: Perfil, conteudo: string) {
        this.id = id;
        this.autor = autor;
        this.conteudo = conteudo;
    }
    
    getAutor(): Perfil {
        throw new Error("Method not implemented.");
    }

    exibir(): void {
        console.log(`Postagem [${this.id}] de ${this.autor.getNomeUsuario()}: ${this.conteudo}`);
    }

    getId(): string {
        return this.id;
    }

    // outros métodos
}

class Reacao implements Publicavel{
    private tipoReacao: string;
    public postagem: Postagem;

    constructor(id: string, autor: Perfil, tipoReacao: string) {
        this.tipoReacao = tipoReacao;
        this.postagem = new Postagem(id, autor, "")
    }
    getAutor(): Perfil {
        throw new Error("Method not implemented.");
    }

    exibir(): void {
        console.log(`Reação [${this.tipoReacao}] de ${this.postagem.getAutor().getNomeUsuario()} na postagem ${this.postagem.getId()}`);
    }

    // outros métodos
}

class Comentario implements Publicavel {
    private postagemOriginal: Postagem;
    public postagem: Postagem;

    constructor(id: string, autor: Perfil, conteudo: string, postagemOriginal: Postagem) {
        this.postagem = new Postagem(id, autor, "")
        this.postagemOriginal = postagemOriginal;
    }
    getAutor(): Perfil {
        throw new Error("Method not implemented.");
    }

    exibir(): void {
        console.log(`Comentário de ${this.getAutor().getNomeUsuario()} em resposta a postagem [${this.postagemOriginal.getId()}]: ${this.postagem.exibir()}`);
    }

    // outros métodos
}
