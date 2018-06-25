import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Details2RoutingModule } from './details2-routing.module';
import { Details2CompComponent } from './details2-comp/details2-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Details2RoutingModule
  ],
  declarations: [Details2CompComponent]
})
export class Details2Module { }
