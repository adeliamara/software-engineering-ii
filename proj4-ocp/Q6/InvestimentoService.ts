import { Investimento, TipoInvestimento } from "./Investimento";

export class InvestimentoService {
    public static avaliarRisco(investimento: Investimento): void {
      if (investimento.getTipo() === TipoInvestimento.RENDA_FIXA) {
        investimento.setStatusRisco('Baixo risco');
      } else {
        investimento.setStatusRisco('Alto risco');
      }
    }
  }