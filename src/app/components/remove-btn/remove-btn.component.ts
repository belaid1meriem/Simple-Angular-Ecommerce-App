import { Component, output } from '@angular/core';

@Component({
  selector: 'app-remove-btn',
  imports: [],
  templateUrl: './remove-btn.component.html',
  styleUrl: './remove-btn.component.css'
})
export class RemoveBtnComponent {

  clickEvent = output()
  emitEvent() {
    this.clickEvent.emit();
  }
}
