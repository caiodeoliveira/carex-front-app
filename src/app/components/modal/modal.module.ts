import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ModalComponent } from './modal.component';
import { ButtonComponentModule } from '../button/button.module';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,
    DialogModule,
    ButtonComponentModule,
    FormsModule,
    DropdownModule,
  ],
  exports: [
    ModalComponent,
    ButtonComponentModule,
  ]
})
export class ModalModule { }
