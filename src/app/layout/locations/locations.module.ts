import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationsComponent } from './locations.component';
import { LocationDetailComponent } from './location-detail/location-detail.component';
import { MaterialModule } from '../../material/material.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LocationsComponent,
    LocationDetailComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    LocationsComponent
  ]
})
export class LocationsModule { }
