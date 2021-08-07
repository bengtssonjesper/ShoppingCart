import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs'
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject<Product>();

  constructor() { }

  getMessage():Observable<Product> {
    return this.subject.asObservable();
  }

  sendMessage(productItem:Product) {
    this.subject.next(productItem);
  }
}
