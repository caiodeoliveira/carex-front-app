import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { DividerModule } from 'primeng/divider';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    DividerModule,
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
