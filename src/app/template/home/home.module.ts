import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { DividerModule } from 'primeng/divider';
import { ButtonComponentModule } from 'src/app/components/button/button.module';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    DividerModule,
    ButtonComponentModule,
    NavbarComponent,
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
