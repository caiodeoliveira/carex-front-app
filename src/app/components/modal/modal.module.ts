import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ModalComponent } from './modal.component';
import {MatStepperModule} from '@angular/material/stepper';




@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,
    DialogModule,
    ModalModule,
    MatStepperModule,
  ]
})
export class ModalModule { }
