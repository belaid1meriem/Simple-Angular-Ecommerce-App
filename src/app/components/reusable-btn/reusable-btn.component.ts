import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-reusable-btn',
  imports: [],
  templateUrl: './reusable-btn.component.html',
  styleUrl: './reusable-btn.component.css'
})

export class ReusableBtnComponent {
  btnLabel= input.required();
  btnEvent= output()
  btnClick() {
    this.btnEvent.emit();
  }
}
