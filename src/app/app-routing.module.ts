import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DasbhoardComponent } from './layout/dasbhoard/dasbhoard.component';

const routes: Routes = [
  {
    path:'dashboard',
    component: DasbhoardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
