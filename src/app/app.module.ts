import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import{MatToolbarModule} from '@angular/material/toolbar';
import { MaterialModule } from './material/material.module';
import { HomeModule } from './layout/home/home.module';
import { SharedModule } from './shared/shared.module';
import { EpisodesModule } from './layout/episodes/episodes.module';
import { CharactersModule } from './layout/characters/characters.module';
import { LocationsModule } from './layout/locations/locations.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    HomeModule,
    EpisodesModule,
    CharactersModule,
    LocationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
