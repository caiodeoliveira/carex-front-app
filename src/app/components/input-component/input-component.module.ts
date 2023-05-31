import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponentComponent } from './input-component.component';
import { FormsModule } from '@angular/forms';
import { SliderModule } from 'primeng/slider';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [InputComponentComponent],
  imports: [
    CommonModule,
    FormsModule,
    SliderModule,
    TooltipModule,
  ],
  exports: [InputComponentComponent]
})
export class InputComponentModule { }
