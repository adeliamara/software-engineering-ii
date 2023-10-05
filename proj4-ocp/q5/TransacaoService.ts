import { TipoTransacao, Transacao } from "./Transacao";

export class TransacaoService {
    public static verificarFraude(transacao: Transacao): boolean {
      // Implemente a lógica para verificar se a transação é fraudulenta
      if (transacao.getTipo() === TipoTransacao.DEBITO && transacao.getValor() > 1000) {
        return true; // Transação de débito com valor alto é considerada fraudulenta
      }
      return false;
    }
  }
  