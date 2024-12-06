import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  cart = signal<Product[]>([])
  addToCart(product: Product) {
    this.cart.update(currentCart => [...currentCart, product]);
  }
  removeFromCart(productId: number) {
    this.cart.update(currentCart => currentCart.filter(product => product.id!== productId));
  }
  getTotalPrice() {
    return this.cart().reduce((total, product) => total + product.price, 0);
  }
  constructor() { }
}
