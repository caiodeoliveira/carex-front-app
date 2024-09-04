import { SchedulingModule } from './template/scheduling/scheduling.module';
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
import { ModalModule } from './components/modal/modal.module';
import { DataTableModule } from './components/data-table/data-table.module';
import { ProgrammingsComponent } from './template/programmings/programmings.component';
import { ProgrammingsModule } from './template/programmings/programmings.module';

@NgModule({
  declarations: [
    AppComponent
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
    ModalModule,
    SchedulingModule,
    ProgrammingsModule,
    DataTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
