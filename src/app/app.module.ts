import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './template/home/home.module';
import { FormsModule } from '@angular/forms';
import { ButtonComponentModule } from './components/button/button.module';
import { InputComponentModule } from './components/input-component/input-component.module';
import { TerapiesModule } from './template/terapies/terapies.module';

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
    HomeModule,
    TerapiesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
