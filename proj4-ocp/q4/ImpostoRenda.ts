import { CalculadoraImpostoDeRenda } from "./CalculadoraImpostoDeRenda";
import { GerarRelatorio } from "./GerarRelatorio";

export class ImpostoDeRenda {
    private cpfContribuinte: string;
    private rendimentos: number[];
    private despesas: number[];

    constructor (cpfContribuinte: string, rendimentos: number[], despesas: number[]) {
        this.cpfContribuinte = cpfContribuinte;
        this.rendimentos = rendimentos;
        this.despesas = despesas;
    }

    getCPF(): string {
        return this.cpfContribuinte;
    }
    getRendimentos(): number[] {
        return this.rendimentos;
    }
    getDespesas(): number[] {
        return this.despesas;
    }
    processar(): void {
      const calculadora: CalculadoraImpostoDeRenda = new CalculadoraImpostoDeRenda();
      const impostoDevido: number = calculadora.calcular(this.rendimentos, this.despesas);

      const imprimir: GerarRelatorio = new GerarRelatorio();
      imprimir.executar(this, impostoDevido)
    }
}