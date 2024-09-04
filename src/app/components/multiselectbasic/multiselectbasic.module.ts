import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiSelectModule } from 'primeng/multiselect';
import { MultiselectbasicComponent } from './multiselectbasic.component';


@NgModule({
  declarations: [MultiselectbasicComponent],
  imports: [
    CommonModule,
    MultiSelectModule,
  ],
  exports: [MultiselectbasicComponent]
})
export class MultiselectbasicModule { }
