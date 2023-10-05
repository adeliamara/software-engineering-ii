export class CalculadoraImpostoDeRenda {
    calcular(rendimentos: number[], despesas: number[]){
            const rendaTotal: number = rendimentos.reduce((acc, rendimento) => acc + rendimento, 0);
            const despesaTotal: number = despesas.reduce((acc, despesa) => acc + despesa, 0);
            return rendaTotal - despesaTotal;
    }
}