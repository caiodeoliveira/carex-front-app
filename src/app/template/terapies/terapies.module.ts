import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerapiesComponent } from './terapies.component';
import { TooltipModule } from 'primeng/tooltip';



@NgModule({
  declarations: [TerapiesComponent],
  imports: [
    CommonModule,
    TooltipModule,
  ],
  exports: [TerapiesComponent]
})
export class TerapiesModule { }
