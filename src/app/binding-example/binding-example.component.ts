import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-example',
  templateUrl: './binding-example.component.html',
  styleUrls: ['./binding-example.component.css'],
})
export class BindingExampleComponent {

  status = true;
  color = "";
  inputValue = '';
  fontSize = 20;

  constructor() {}

  gettingInput(event) {
    this.inputValue = event.target.value;
    if (this.inputValue !== '') {
      this.status = false;
    } else {
      this.status = true;
    }
  }

  onClickIncrease() {
    this.fontSize++;
    this.color = "colorIncrease";
  }

  onClickDecrease() {
    this.fontSize--;
    this.color = "colorDecrease";
  }
}
