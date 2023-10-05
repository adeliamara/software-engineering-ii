import { Auditavel } from "./Auditavel";

export class AuditoriaFinanceiraService {
    public executar(auditaveis: Auditavel[]): void {
      for (const auditavel of auditaveis) {
        auditavel.executarAuditoria();
      }
    }
  }
  