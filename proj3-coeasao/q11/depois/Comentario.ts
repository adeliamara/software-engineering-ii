import { IConteudo } from "./IConteudo";

export class Comentario implements IConteudo {
    constructor(public conteudo: string) {}

    criarConteudo(conteudo: string): Comentario {
        const comentario: Comentario = new Comentario(conteudo)
        return comentario;
    }

}