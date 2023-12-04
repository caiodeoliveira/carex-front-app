import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineModule } from 'primeng/timeline';
import { ScheduleTimeLineComponent } from './schedule-time-line.component';
import { CardModule } from 'primeng/card';
import {CalendarModule} from 'primeng/calendar';


@NgModule({
  declarations: [ScheduleTimeLineComponent],
  imports: [
    CommonModule,
    TimelineModule,
    CardModule,
    CalendarModule,
  ],
  exports: [ScheduleTimeLineComponent]
})
export class ScheduleTimeLineModule { }
