import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExistingProgrammingManagementComponent } from './existing-programming-management.component';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonComponentModule } from "../button/button.module";
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';



@NgModule({
  declarations: [ExistingProgrammingManagementComponent],
  imports: [
    CommonModule,
    TableModule,
    CardModule,
    FormsModule,
    FontAwesomeModule,
    ButtonComponentModule,
    CalendarModule,
    DropdownModule,
],
  exports: [ExistingProgrammingManagementComponent]
})
export class ExistingProgrammingManagementModule { }
