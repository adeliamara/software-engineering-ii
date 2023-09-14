import PricingService from "./pricingService";

class CarrinhoComprasDepois {
    private itens: string[] = [];

    constructor() { }

    adicionarItem(item: string) {
        this.itens.push(item);
    }

    removerItem(item: string) {
        const index = this.itens.indexOf(item);
        if (index !== -1) {
            this.itens.splice(index, 1);
        }
    }

    calcularTotal(pricingService: PricingService) {
        let total = 0;
        for (const item of this.itens) {
            total += pricingService.getPrecoProduto(item);
        }
        return total;
    }
}


function main() {
    const carrinho = new CarrinhoComprasDepois();
    const pricingService = new PricingService();

    carrinho.adicionarItem('produto1');
    carrinho.adicionarItem('produto2');
    carrinho.removerItem('produto1');

    pricingService.setPrecoProduto('produto1', 10);
    pricingService.setPrecoProduto('produto2', 20);

    const total = carrinho.calcularTotal(pricingService);
    console.log('Total do carrinho:', total);
}

main()
