import { Component, inject } from '@angular/core';
import { CartServiceService } from '../../services/cart-service.service';
import { CartCardComponent } from './cart-card/cart-card.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';

@Component({
  selector: 'app-cart',
  imports: [CartCardComponent,CartSummaryComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
    cartService = inject(CartServiceService) 
}
