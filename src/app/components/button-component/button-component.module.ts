import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponentComponent } from './button-component.component';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';


@NgModule({
  declarations: [ButtonComponentComponent],
  imports: [
    CommonModule,
    ButtonModule,
    StyleClassModule,
  ],
  exports: [ButtonComponentComponent]
})
export class ButtonComponentModule { }
