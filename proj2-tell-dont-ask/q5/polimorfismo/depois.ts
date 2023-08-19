import Product from './product';
import PerishableProduct from './PerishableProduct';
import Stock from './stock';

const stock: Stock = new Stock();

function replanish(identifier: string, quantity: number): void{
    let product: Product = stock.consult(identifier);

    if(!product){
        throw new Error("Product Not Found");
    } 

    product.replanish(quantity);
}


function teste(){
    let product: Product = new Product('1', 'Produto 1', 10, 10);
    let product2: Product = new PerishableProduct('2', 'Produto 1', 10, 10, '2024-01-01');

    stock.insert(product)
    stock.insert(product2)

    const quantity = 3;
    const quantity2 = 5;

    replanish('1', quantity)
    replanish('2', quantity2)

    stock.listProductsInStock()


}


teste()
