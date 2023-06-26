import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  constructor() { }
  addToCart(product: Product) {
    if(!this.items.find(i=>i.id == product.id)){
      this.items.push(product);
      console.log(`${product.name} added to cart`)
    }
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
