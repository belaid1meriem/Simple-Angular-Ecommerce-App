import { Component, inject } from '@angular/core';
import { ReusableBtnComponent } from '../reusable-btn/reusable-btn.component';
import { CartServiceService } from '../../services/cart-service.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [ReusableBtnComponent,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  showBtnClicked(){
    console.log("btn clicked")
  }

  cartService= inject(CartServiceService)
}
