import { Comentario } from "./Comentario";
import { IConteudo } from "./IConteudo";
import { Post } from "./Post";

class Usuario {
    private conteudos: IConteudo[] = [];

    criarConteudo(conteudo: IConteudo): void {
        this.conteudos.push(conteudo);
    }

    getConteudos(): Array<IConteudo>{
        return this.conteudos;
    }
}


const adelia: Usuario = new Usuario()

const post: IConteudo = new Post("Publicacao")
const comentario: IConteudo = new Comentario("Publicacao")

adelia.criarConteudo(post)
adelia.criarConteudo(comentario)


console.log(adelia.getConteudos());