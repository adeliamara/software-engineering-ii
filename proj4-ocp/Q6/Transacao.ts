import { Processable } from "./Processable";

export enum TipoTransacao {
    CREDITO,
    DEBITO,
    DINHEIRO
}

export class Transacao implements Processable {
    private id: number;
    private valor: number;
    private tipo: TipoTransacao;
  
    constructor(id: number, valor: number, tipo: TipoTransacao) {
      this.id = id;
      this.valor = valor;
      this.tipo = tipo;
    }
  
    public getId(): number {
      return this.id;
    }
  
    public getValor(): number {
      return this.valor;
    }
  
    public getTipo(): TipoTransacao {
      return this.tipo;
    }
  }