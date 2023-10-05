import { Auditavel } from "./Auditavel";
import { Transacao } from "./Transacao";

export class ContaCorrente implements Auditavel {

    private numero: string;
    private saldo: number;
    private transacoes: Transacao[];
  
    constructor(numero: string, saldo: number) {
      this.numero = numero;
      this.saldo = saldo;
      this.transacoes = [];
    }
  
    public getNumero(): string {
      return this.numero;
    }
  
    public getSaldo(): number {
      return this.saldo;
    }
  
    public getTransacoes(): Transacao[] {
      return this.transacoes;
    }
  
    public adicionarTransacao(transacao: Transacao): void {
      this.transacoes.push(transacao);
    }

    executarAuditoria(): void {
      console.log('contada auditada')

    }
  }