import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerapiesComponent } from './terapies.component';
import { TooltipModule } from 'primeng/tooltip';
import { ModalModule } from 'src/app/components/modal/modal.module';
import { SkeletonModule } from 'primeng/skeleton';


@NgModule({
  declarations: [TerapiesComponent],
  imports: [
    CommonModule,
    TooltipModule,
    ModalModule,
    SkeletonModule,
  ],
  exports: [TerapiesComponent]
})
export class TerapiesModule { }
