import { Usuario2 } from "./Usuario";

export enum TipoRelacionamento {
    Amigo,
    Seguidor,
    Outro,
}
  
export class Relacionamento {
    constructor(
        public iniciador: Usuario2,
        public destinatario: Usuario2,
        public tipo: TipoRelacionamento
      ) {
        if (iniciador === destinatario) {
          throw new Error("Não é possível criar um relacionamento consigo mesmo.");
        }
      }

  }