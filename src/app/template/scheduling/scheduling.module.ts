import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchedulingComponent } from './scheduling.component';
import { TooltipModule } from 'primeng/tooltip';
import { ModalModule } from 'src/app/components/modal/modal.module';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { DateTimeModule } from 'src/app/components/date-time/date-time.module';
import { CalendarComponentModule } from "../../components/calendar/calendar.component.module";
import { InputMaskModule } from 'primeng/inputmask';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponentModule } from '../../components/button/button.module';

@NgModule({
  declarations: [SchedulingComponent],
  imports: [
    CommonModule,
    TooltipModule,
    ModalModule,
    InputTextModule,
    FormsModule,
    CalendarModule,
    DropdownModule,
    DateTimeModule,
    CalendarModule,
    CalendarComponentModule,
    InputMaskModule,
    BrowserAnimationsModule,
    ButtonComponentModule,
],
  exports: [SchedulingComponent]
})
export class SchedulingModule { }
