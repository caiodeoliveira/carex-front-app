import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.scss']
})
export class InputComponentComponent {

  /* Slider Input code
  // private inputValue: number = 0;
  //  warningValue: string;
  //  warningActivated: any;
  //  sliderWarning: boolean = true;


  // get inputNumberValue(): number {
  //   return this.inputValue;
  // }

  // set inputNumberValue(value: number) {
  //   this.inputValue = value;
  //   if(value !== 100) {
  //     this.warningActivated = `The value, cannot be different than (100) - ${this.inputNumberValue}`
  //     this.sliderWarning = this.sliderWarning = true;
  //   } else {
  //     this.warningValue = "";
  //     this.sliderWarning = this.sliderWarning = false;
  //   }
  // }
  */

  inputData: string = "";
  @Output() inputDataValueEmitter: EventEmitter<string> = new EventEmitter();


  sendInputValue() {
    this.inputDataValueEmitter.emit(this.inputData);
  }
}
