import { Component, input } from '@angular/core';

@Component({
  selector: 'app-cart-summary',
  imports: [],
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.css'
})
export class CartSummaryComponent {
    totalPrice= input.required();
}
