import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BmiCalculatorComponent } from './bmi-calculator/bmi-calculator.component';
import { BmiResultComponent } from './bmi-result/bmi-result.component';


@NgModule({
  declarations: [
    AppComponent,
    BmiCalculatorComponent,
    BmiResultComponent,
    
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    AppRoutingModule,
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
