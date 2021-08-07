export class CartItemModel {
    name: string;
    price: number;
    quantity: number;
    serialNumber: number;
    
    constructor(name:string, price:number, quantity:number,serialNumber:number) {
        this.name = name
        this.price = price
        this.quantity = quantity
        this.serialNumber = serialNumber;
    }
}
