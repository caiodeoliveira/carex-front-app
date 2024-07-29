import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.scss']
})
export class DateTimeComponent {

  dateData: Date;
  @Output() dateValueEmitter: EventEmitter<Date> = new EventEmitter();


  onDateTimeChange() {
    this.dateValueEmitter.emit(this.dateData);
    this.dateData.setMinutes(0);
    this.dateData.setSeconds(0);
  }

}
