import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObrasSocialesComponent } from './pages/obras-sociales/obras-sociales.component';

const routes: Routes = [
  {
    path: '',
    component: ObrasSocialesComponent,
    outlet: 'child'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObrasSocialesRoutingModule { }
