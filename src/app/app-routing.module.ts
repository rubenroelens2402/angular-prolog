import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { EpisodesComponent } from './layout/episodes/episodes.component';
import { CharactersComponent } from './layout/characters/characters.component';
import { LocationsComponent } from './layout/locations/locations.component';
import { EpisodeDetailComponent } from './layout/episodes/episode-detail/episode-detail.component';
import { CharactersDetailComponent } from './layout/characters/characters-detail/characters-detail.component';
import { LocationDetailComponent } from './layout/locations/location-detail/location-detail.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path:'home', component: HomeComponent
  },
  {
    path: 'episodes', component: EpisodesComponent
  },
  {
    path: 'episodes/:id', component: EpisodeDetailComponent
  },
  {
    path: 'characters', component: CharactersComponent
  },
  {
    path: 'characters/:id', component: CharactersDetailComponent
  },
  {
    path: 'locations', component: LocationsComponent
  },
  {
    path: 'locations/:id', component: LocationDetailComponent
  },
  {
    path: '**', redirectTo: '/home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
