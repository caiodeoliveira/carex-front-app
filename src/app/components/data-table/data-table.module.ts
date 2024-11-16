import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './data-table.component';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonComponentModule } from "../button/button.module";
import { CalendarModule } from 'primeng/calendar';



@NgModule({
  declarations: [DataTableComponent],
  imports: [
    CommonModule,
    TableModule,
    CardModule,
    FormsModule,
    FontAwesomeModule,
    ButtonComponentModule,
    CalendarModule,
],
  exports: [DataTableComponent]
})
export class DataTableModule { }
