import { Auditavel } from "./Auditavel";
import { Processable } from "./Processable";
import { TipoTransacao, Transacao } from "./Transacao";

export class TransacaoService implements Auditavel {
  
  executarAuditoria(transacao: Transacao): void {
    if(!(transacao instanceof Transacao)){
      throw new Error('Não é uma instancia de transacao')
    }
    console.log("transacao auditada")
  }

  public static verificarFraude(transacao: Transacao): boolean {
    if (transacao.getTipo() === TipoTransacao.DEBITO && transacao.getValor() > 1000) {
      return true; 
    }
    return false;
  }
}
