import { Component, inject, input } from '@angular/core';
import { Product } from '../../../models/product.model';
import { ReusableBtnComponent } from '../../../components/reusable-btn/reusable-btn.component';
import { CartServiceService } from '../../../services/cart-service.service';

@Component({
  selector: 'app-product-card',
  imports: [ReusableBtnComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
    product= input.required<Product>();
    cartService= inject(CartServiceService)
}
