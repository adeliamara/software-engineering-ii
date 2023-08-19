import Product from "./product";

//disponivel em https://github.com/adeliamara/poo/tree/main/list7/q5-estoque
export default class PerishableProduct extends Product {
    private _expirationDate: Date;

    constructor(identifier: string, description: string, quantityProductsInStock: number, unitValue: number, expirationDate: string) {
        super(identifier, description, quantityProductsInStock, unitValue);
        this._expirationDate = new Date(expirationDate);
    }

    public isValid(): boolean{
        const today = new Date();

        return today <= this._expirationDate;
    }

    public writeOff(quantity: number): boolean {
        if(this.isValid()){
            if (quantity <= this.quantityProductsInStock) {
                this.quantityProductsInStock -= quantity;
                return true;
            }
        }
        return false;
    }

    public replanish(quantity: number): boolean {
        if(this.isValid()){
            this.quantityProductsInStock += quantity;
            return true;
        }

        return false;
    }

    
    public get expirationDate() : string {
        return this._expirationDate.toString();
    }
    

}