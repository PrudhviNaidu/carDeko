import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { DetailsComponent } from './details/details.component';
import { CompareComponent } from './compare/compare.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
      {path: 'search', component: SearchComponent},
      {path: 'details', component: DetailsComponent},
      {path: 'details2', loadChildren: './details2/details2.module#Details2Module'},
      {path: 'compare', component: CompareComponent},
      {path: 'results', component: ResultComponent},
      {path: '', component: SearchComponent},
      {path: '**', component: SearchComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
