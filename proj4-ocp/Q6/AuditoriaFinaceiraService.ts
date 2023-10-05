import { Auditavel } from "./Auditavel";
import { Processable } from "./Processable";

export class AuditoriaFinanceiraService {
  public executar(auditaveis: { auditavel: Auditavel, processable: Processable }[]): void {
    for (const { auditavel, processable } of auditaveis) {
      try {
        auditavel.executarAuditoria(processable);
      } catch (e: any){
        console.log(e.message)
      }
    }
  }
}
