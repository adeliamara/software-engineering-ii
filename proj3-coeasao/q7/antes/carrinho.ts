class CarrinhoCompras {
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

    calcularTotal(precoProdutos: { [key: string]: number }) {
        let total = 0;
        for (const item of this.itens) {
            if (precoProdutos[item]) {
                total += precoProdutos[item];
            }
        }
        return total;
    }
}

// Uso da classe com alto acoplamento
const carrinho = new CarrinhoCompras();
carrinho.adicionarItem('produto1');
carrinho.adicionarItem('produto2');
carrinho.removerItem('produto1');

const precoProdutos = {
    produto1: 10,
    produto2: 20,
};

const valor_total = carrinho.calcularTotal(precoProdutos);
console.log('Total do carrinho:', valor_total);
