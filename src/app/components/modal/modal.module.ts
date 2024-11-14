import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ModalComponent } from './modal.component';
import { ButtonComponentModule } from '../button/button.module';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,
    DialogModule,
    ButtonComponentModule,
    FormsModule,
    DropdownModule,
    FontAwesomeModule,
    CheckboxModule,
  ],
  exports: [
    ModalComponent,
    ButtonComponentModule,
  ]
})
export class ModalModule { }
