import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Details2CompComponent } from './details2-comp/details2-comp.component';

const routes: Routes = [
      {path: '', component: Details2CompComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Details2RoutingModule { }
