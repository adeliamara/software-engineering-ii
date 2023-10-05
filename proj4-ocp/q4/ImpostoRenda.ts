import { CalculadoraImpostoDeRenda } from "./CalculadoraImpostoDeRenda";
import { GerarRelatorio } from "./GerarRelatorio";
import { Validator } from "./Validator";

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
    processar(validators: Validator[]): void {
        console.log(validators)
    for (let validator of validators) {
        console.log(validator)

        validator.executar(this)
    }
      const calculadora: CalculadoraImpostoDeRenda = new CalculadoraImpostoDeRenda();
      const impostoDevido: number = calculadora.calcular(this.rendimentos, this.despesas);

      const imprimir: GerarRelatorio = new GerarRelatorio();
      imprimir.executar(this, impostoDevido)
    }
}