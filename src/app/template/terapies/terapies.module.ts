import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerapiesComponent } from './terapies.component';
import { TooltipModule } from 'primeng/tooltip';
import { ModalModule } from 'src/app/components/modal/modal.module';
import { SkeletonModule } from 'primeng/skeleton';
import { InputMaskModule } from 'primeng/inputmask';
import { FormsModule } from '@angular/forms';
import { ExistingProgrammingManagementModule } from 'src/app/components/existing-programming-management/existing-programming-management.module';

@NgModule({
  declarations: [TerapiesComponent],
  imports: [
    CommonModule,
    TooltipModule,
    ModalModule,
    SkeletonModule,
    InputMaskModule,
    FormsModule,
    ExistingProgrammingManagementModule,
],
  exports: [TerapiesComponent]
})
export class TerapiesModule { }
