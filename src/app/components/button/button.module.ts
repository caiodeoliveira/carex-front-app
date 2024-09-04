import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { ButtonComponent } from './button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [ButtonComponent],
  imports: [
    CommonModule,
    ButtonModule,
    StyleClassModule,
    FontAwesomeModule,
  ],
  exports: [ButtonComponent]
})
export class ButtonComponentModule { }
