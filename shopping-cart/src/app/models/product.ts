export class Product {
    serialNum: number;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    
    constructor(serialNum:number,name:string,price=0,description='No description has been added',imageUrl='https://source.unsplash.com/JpTY4gUviJM/600xauto') {
        this.serialNum = serialNum;
        this.name = name;
        this.price = price;
        this.description = description;
        this.imageUrl = imageUrl;
    }
}
