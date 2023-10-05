import { Auditavel } from "./Auditavel";
import { ContaCorrente } from "./ContaCorrente";
import { Transacao } from "./Transacao";
import { TransacaoService } from "./TransacaoService";

export class ContaCorrenteService implements Auditavel {
  executarAuditoria(contaCorrente: ContaCorrente): void {
    if(!(contaCorrente instanceof ContaCorrente)){
      throw new Error('Não é uma instancia de transacao')
    }
    console.log('contada auditada')
  }
  
  public static filtrarTransacoesInvalidas(conta: ContaCorrente): Transacao[] {
    const transacoesInvalidas: Transacao[] = [];

    for (const transacao of conta.getTransacoes()) {
      if (!TransacaoService.verificarFraude(transacao)) {
        transacoesInvalidas.push(transacao);
      }
    }
    return transacoesInvalidas;
  }
}