import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculationsComponent } from './calculations/calculations.component';
import { SimpleCalculationComponent } from './simple-calculation/simple-calculation.component';
import { EncryptionsComponent } from './encryptions/encryptions.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculationsComponent,
    SimpleCalculationComponent,
    EncryptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
