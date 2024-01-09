import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters.component';
import { CharactersDetailComponent } from './characters-detail/characters-detail.component';
import { MaterialModule } from '../../material/material.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CharactersComponent,
    CharactersDetailComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    CharactersComponent
  ]
})
export class CharactersModule { }
