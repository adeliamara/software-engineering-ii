export default class PricingService {
    private precos: { [key: string]: number } = {};

    constructor() { }

    setPrecoProduto(produto: string, preco: number) {
        this.precos[produto] = preco;
    }

    getPrecoProduto(produto: string): number {
        return this.precos[produto] || 0;
    }
}