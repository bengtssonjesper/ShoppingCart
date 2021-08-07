import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product(123123, 'Some name 1', 99, 'Some description 1','https://source.unsplash.com/5BMPrXBFTI8/600xauto'),
    new Product(223123, 'Some name 2', 299, 'Some description 2',),
    new Product(323123, 'Some name 3', 399, 'Some description 3','https://source.unsplash.com/WlB8TsI_th0/600xauto'),
    new Product(423123, 'Some name 4', 499, 'Some description 4',),
    new Product(523123, 'Some name 5', 599, 'Some description 5','https://source.unsplash.com/DMl5gG0yWWY/600xauto'),
    new Product(623123, 'Some name 6', 699, 'Some description 6','https://source.unsplash.com/164_6wVEHfI/600xauto'),
    new Product(723123, 'Some name 7', 799, 'Some description 7',),
    new Product(823123, 'Some name 8', 899, 'Some description 8','https://source.unsplash.com/YQbJLyY0hFU/600xauto'),
    
  ]

  constructor() { }

  getProducts(): Product[]{
    return this.products;
  }
}
