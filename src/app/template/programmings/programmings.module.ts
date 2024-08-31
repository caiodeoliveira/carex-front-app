import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgrammingsComponent } from './programmings.component';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { DataTableModule } from 'src/app/components/data-table/data-table.module';
import { ButtonComponentModule } from 'src/app/components/button/button.module';



@NgModule({
  declarations: [ProgrammingsComponent],
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    DataTableModule,
    ButtonComponentModule,
  ],
  exports: [ProgrammingsComponent]
})
export class ProgrammingsModule { }
