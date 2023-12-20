import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
