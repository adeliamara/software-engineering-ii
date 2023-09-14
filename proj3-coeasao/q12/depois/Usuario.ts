import { Relacionamento, TipoRelacionamento } from "./Relacionamento";

export class Usuario2 {
    public nome: string;
    private relacionamentos: Array<Relacionamento> =[]

    constructor(nome: string){
        this.nome = nome;
    }
    
    public adicionarRelacionamento(usuarioDestinatario: Usuario2, tipoRelacionamento: TipoRelacionamento): void {
        const relacionamento = new Relacionamento(this, usuarioDestinatario, tipoRelacionamento);
        this.relacionamentos.push(relacionamento);
    }

    public getRelacionamentos(): Array<Relacionamento> { 
        return this.relacionamentos;
    }
}

const adelia: Usuario2 = new Usuario2('adélia')
const karla: Usuario2 = new Usuario2('karla')

adelia.adicionarRelacionamento(karla, TipoRelacionamento.Amigo)
karla.adicionarRelacionamento(adelia, TipoRelacionamento.Seguidor)

console.log(adelia.getRelacionamentos())