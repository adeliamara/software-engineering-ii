import { Processable } from "./Processable";

export interface Auditavel {
    executarAuditoria(processable: Processable): void;
}