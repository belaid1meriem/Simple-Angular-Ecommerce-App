import { Component, inject, input } from '@angular/core';
import { Product } from '../../../models/product.model';
import { CartServiceService } from '../../../services/cart-service.service';
import { RemoveBtnComponent } from '../../../components/remove-btn/remove-btn.component';

@Component({
  selector: 'app-cart-card',
  imports: [RemoveBtnComponent],
  templateUrl: './cart-card.component.html',
  styleUrl: './cart-card.component.css'
})
export class CartCardComponent {
    product= input.required<Product>();
    cartService = inject(CartServiceService)
}
