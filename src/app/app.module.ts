import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { HomeModule } from './layout/home/home.module';
import { SharedModule } from './shared/shared.module';
import { EpisodesModule } from './layout/episodes/episodes.module';
import { CharactersModule } from './layout/characters/characters.module';
import { LocationsModule } from './layout/locations/locations.module';
import { HttpCachingInterceptor } from './core/services/http-caching-interceptor.service';
import { ServiceWorkerModule } from '@angular/service-worker';

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
    SharedModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: HttpCachingInterceptor,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
