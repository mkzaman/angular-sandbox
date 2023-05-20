import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicListComponent } from './dynamic-list/dynamic-list.component';

const routes: Routes = [{path:'', component: DynamicListComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
