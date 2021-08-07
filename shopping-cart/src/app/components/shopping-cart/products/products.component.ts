import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  // productList: Product[] = [
  //   { serialNum:123123, name:'Some shoes 1', price:199, description:'Some description 1', imageUrl:'https://source.unsplash.com/5BMPrXBFTI8/600xauto' },
  //   { serialNum: 223223, name: 'Some shoes 2', price: 299, description: 'Some description 2', imageUrl: 'https://source.unsplash.com/WlB8TsI_th0/600xauto' },
  //   { serialNum: 323223, name: 'Some shoes 3', price: 399, description: 'Some description 3', imageUrl: 'https://source.unsplash.com/164_6wVEHfI/600xauto' },
  //   { serialNum: 423223, name: 'Some shoes 4', price: 499, description: 'Some description 4', imageUrl: 'https://source.unsplash.com/YQbJLyY0hFU/600xauto' },
  //   { serialNum: 523223, name: 'Some shoes 5', price: 599, description: 'Some description 5', imageUrl: 'https://source.unsplash.com/DMl5gG0yWWY/600xauto' },
  // ];

  productList:Product[]=[]  

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productList=this.productService.getProducts()
  }

}

