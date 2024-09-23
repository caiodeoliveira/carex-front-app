import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { FormsModule } from '@angular/forms';
import { ButtonComponentModule } from 'src/app/components/button/button.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputComponentModule } from 'src/app/components/input-component/input-component.module';
import { ModalModule } from 'src/app/components/modal/modal.module';

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    FormsModule,
    ButtonComponentModule,
    BrowserAnimationsModule,
    InputComponentModule,
    ButtonComponentModule,
    ModalModule,
  ],
  exports: [AboutComponent]
})
export class AboutModule { }
