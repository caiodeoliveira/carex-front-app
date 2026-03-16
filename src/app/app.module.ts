import { SchedulingModule } from './template/scheduling/scheduling.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutModule } from './template/about/about.module';
import { FormsModule } from '@angular/forms';
import { ButtonComponentModule } from './components/button/button.module';
import { InputComponentModule } from './components/input-component/input-component.module';
import { TerapiesModule } from './template/terapies/terapies.module';
import { ModalModule } from './components/modal/modal.module';
import { DataTableModule } from './components/data-table/data-table.module';
import { ProgrammingsModule } from './template/programmings/programmings.module';
import { HomeModule } from './template/home/home.module';

import { NgxStripeModule } from 'ngx-stripe';
import { CheckoutModule } from './components/checkout/checkout.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonComponentModule,
    FormsModule,
    InputComponentModule,
    AboutModule,
    TerapiesModule,
    ModalModule,
    SchedulingModule,
    ProgrammingsModule,
    DataTableModule,
    HomeModule,
    HttpClientModule,
    NgxStripeModule.forRoot('pk_test_51ScmlU6hjQpmJbtMDqWXTITcCgPhXxYCd8r99zLUVBt3w1DbUatPMJxAlAI7RLNjaJv3H2dH4gUr05zJ8LWKecIs006f7jUP4Z'),
    CheckoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
