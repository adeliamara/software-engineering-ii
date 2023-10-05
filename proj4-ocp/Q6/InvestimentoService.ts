import { Auditavel } from "./Auditavel";
import { Investimento, TipoInvestimento } from "./Investimento";

export class InvestimentoService implements Auditavel {
  executarAuditoria(investimento: Investimento): void {
    if(!(investimento instanceof Investimento)){
      throw new Error('Não é uma instancia de investimento')
    }
    console.log('investimento auditada')
  }
  public static avaliarRisco(investimento: Investimento): void {
    if (investimento.getTipo() === TipoInvestimento.RENDA_FIXA) {
      investimento.setStatusRisco('Baixo risco');
    } else {
      investimento.setStatusRisco('Alto risco');
    }
  }
}