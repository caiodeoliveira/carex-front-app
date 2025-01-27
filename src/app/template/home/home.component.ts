import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @Input() breakpoint: string;
  
  @Output() onClickToScroll: EventEmitter<string> = new EventEmitter();

}
