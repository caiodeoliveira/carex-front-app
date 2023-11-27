import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineModule } from 'primeng/timeline';
import { ScheduleTimeLineComponent } from './schedule-time-line.component';
import { CardModule } from 'primeng/card';


@NgModule({
  declarations: [ScheduleTimeLineComponent],
  imports: [
    CommonModule,
    TimelineModule,
    CardModule,
  ],
  exports: [ScheduleTimeLineComponent]
})
export class ScheduleTimeLineModule { }
