import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './template/home/home.module';
import { FormsModule } from '@angular/forms';
import { ButtonComponentModule } from './components/button-component/button-component.module';
import { InputComponentModule } from './components/input-component/input-component.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    ButtonComponentModule,
    FormsModule,
    InputComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
