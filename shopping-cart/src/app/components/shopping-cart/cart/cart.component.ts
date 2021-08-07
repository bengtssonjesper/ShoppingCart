import { Component, OnInit } from '@angular/core';
import { CartItemModel } from 'src/app/models/cart-item-model';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  // cartItems: any[]=[];

  cartItems:CartItemModel[]=[]

  cartTotal:number=0

  constructor(private msg:MessengerService) { }

  ngOnInit() {
    this.msg.getMessage().subscribe((product: Product) => {
      this.handleSubscription(product);
    })
  }

  handleSubscription(product: Product) {
    let productExists = false;

    for (let i of this.cartItems) {
      if (product.serialNum === i.serialNumber) {
        i.quantity++
        productExists=true
      }
    }
    if (!productExists) {
      this.cartItems.push({
        name: product.name,
        price: product.price,
        quantity: 1,
        serialNumber: product.serialNum,
      })
    }
    this.cartTotal=0
    this.cartItems.forEach(item => {
      this.cartTotal+=item.price*item.quantity
    })
  }
  }

