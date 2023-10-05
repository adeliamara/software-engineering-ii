import { Operacao } from "./Operacao";
import { Soma } from "./Soma";
import { Subtracao } from "./Subtracação";

class Calculadora {
    private readonly a: number;
    private readonly b: number;

    constructor(a: number, b: number) {
      this.a = a;
      this.b = b;
    }

    calcular(operacoes: Operacao[]): number[] {
      const resultados: number[] = [];
      for (const operacao of operacoes) {
        resultados.push(operacao.executar(this.a, this.b));
      }
      return resultados;
    }
  }


  const a = 10;
  const b = 5;

  const soma = new Soma();
  const subtracao = new Subtracao();

  const calculadora = new Calculadora(a, b);
  const resultados = calculadora.calcular([soma, subtracao]);

  console.log('Resultados:', resultados); // Saída: [15, 5]
