import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateTimeComponent } from './date-time.component';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';



@NgModule({
  declarations: [DateTimeComponent],
  imports: [
    CommonModule,
    FormsModule,
    CalendarModule,
  ],
  exports: [
    DateTimeComponent
  ]
})
export class DateTimeModule { }
