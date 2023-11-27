import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Steps } from './steps.component';
import { StepsModule } from 'primeng/steps';


@NgModule({
  declarations: [Steps],
  imports: [
    CommonModule,
    StepsModule,
  ],
  exports: [
    Steps,
  ],
})
export class StepModule { }
