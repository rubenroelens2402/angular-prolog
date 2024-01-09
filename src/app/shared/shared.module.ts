import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTableComponent } from './components/my-table/my-table.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    MyTableComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MyTableComponent,
  ]
})
export class SharedModule { }
