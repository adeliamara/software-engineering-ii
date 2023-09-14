import { IConteudo } from "./IConteudo";

export class Post implements IConteudo {
    constructor(public conteudo: string) {
    }

    criarConteudo(conteudo: string): Post {
        const post: Post = new Post(conteudo)
        return post;
    }
}