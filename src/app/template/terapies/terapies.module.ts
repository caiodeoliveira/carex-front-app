import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerapiesComponent } from './terapies.component';



@NgModule({
  declarations: [TerapiesComponent],
  imports: [
    CommonModule,
  ],
  exports: [TerapiesComponent]
})
export class TerapiesModule { }
