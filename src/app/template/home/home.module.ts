import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { ButtonComponentModule } from 'src/app/components/button/button.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputComponentModule } from 'src/app/components/input-component/input-component.module';
import { ModalModule } from 'src/app/components/modal/modal.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ButtonComponentModule,
    BrowserAnimationsModule,
    InputComponentModule,
    ButtonComponentModule,
    ModalModule,
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
