import { Operacao } from "./Operacao";

  export class Soma implements Operacao {
    executar(a: number, b: number): number {
      return a + b;
    }
  }
