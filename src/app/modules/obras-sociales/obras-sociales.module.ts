import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObrasSocialesRoutingModule } from './obras-sociales-routing.module';
import { ObrasSocialesComponent } from './pages/obras-sociales/obras-sociales.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ObrasSocialesComponent
  ],
  imports: [
    CommonModule,
    ObrasSocialesRoutingModule,
    SharedModule,
    ReactiveFormsModule

  ],
})
export class ObrasSocialesModule { }
