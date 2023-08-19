import Product from './product';
import PerishableProduct from './PerishableProduct';
import Stock from './stock';


//disponivel em https://github.com/adeliamara/poo/tree/main/list7/q5-estoque

const stock: Stock = new Stock();


function writeOff(): void{
    const identifier = input('Digite o id desejado: ')
    let product: Product = stock.consult(identifier);
    let quantity: number = get_number('Quantidade a dar baixar: ');
    if(product){
        if(product instanceof PerishableProduct){
            if((<PerishableProduct> product).writeOff(quantity)){
                console.log('Operação realizada com sucesso!')
            }else{
                console.log('Produto vencido! Operação nao realizada. ')
            }
            return;
        }
        product.writeOff(quantity);
        console.log('Operação realizada com sucesso!')
    }else{
        console.log('Operação não realizada!');
    }
}