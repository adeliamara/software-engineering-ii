import { ContaCorrente } from "./ContaCorrente";
import { Transacao } from "./Transacao";
import { TransacaoService } from "./TransacaoService";

export class ContaCorrenteService {
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