import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculationsComponent } from './calculations/calculations.component';
import { SimpleCalculationComponent } from './simple-calculation/simple-calculation.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculationsComponent,
    SimpleCalculationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
