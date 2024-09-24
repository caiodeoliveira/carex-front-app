import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { DividerModule } from 'primeng/divider';
import { ButtonComponentModule } from 'src/app/components/button/button.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    DividerModule,
    ButtonComponentModule,
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
