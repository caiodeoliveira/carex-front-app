import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerapiesComponent } from './terapies.component';
import { TooltipModule } from 'primeng/tooltip';
import { ModalModule } from 'src/app/components/modal/modal.module';



@NgModule({
  declarations: [TerapiesComponent],
  imports: [
    CommonModule,
    TooltipModule,
    ModalModule,
  ],
  exports: [TerapiesComponent]
})
export class TerapiesModule { }
