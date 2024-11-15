import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerapiesComponent } from './terapies.component';
import { TooltipModule } from 'primeng/tooltip';
import { ModalModule } from 'src/app/components/modal/modal.module';
import { SkeletonModule } from 'primeng/skeleton';
import { InputMaskModule } from 'primeng/inputmask';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from "../../components/data-table/data-table.module";

@NgModule({
  declarations: [TerapiesComponent],
  imports: [
    CommonModule,
    TooltipModule,
    ModalModule,
    SkeletonModule,
    InputMaskModule,
    FormsModule,
    DataTableModule,
],
  exports: [TerapiesComponent]
})
export class TerapiesModule { }
