import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodesComponent } from './episodes.component';
import { EpisodeDetailComponent } from './episode-detail/episode-detail.component';
import { MaterialModule } from '../../material/material.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    EpisodesComponent,
    EpisodeDetailComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    EpisodesComponent,
    EpisodeDetailComponent
  ]
})
export class EpisodesModule { }
