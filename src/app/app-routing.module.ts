import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalculationsComponent } from './calculations/calculations.component';
import { EncryptionsComponent } from './encryptions/encryptions.component';

const routes: Routes = [
	{ path: '', component: CalculationsComponent },
	{ path: 'encryptions', component: EncryptionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
