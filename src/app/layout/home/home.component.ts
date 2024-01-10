import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { EpisodeService } from '../../core/services/episode.service';
import { IEpisode } from '../../core/interfaces/episode';
import { ICharacter } from '../../core/interfaces/character';
import { CharacterService } from '../../core/services/character.service';
import { LocationService } from '../../core/services/location.service';
import { ILocation } from '../../core/interfaces/location';
import { MatTableDataSource } from '@angular/material/table';
import { PerformanceService } from '../../core/services/performance.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private _destroying$ = new Subject<void>();

  // EPISODES
  episodeDataSource = new MatTableDataSource<IEpisode>();
  episodeDisplayedColumns: string[] = ['id', 'name', 'air_date', 'episode', 'created'];
  episodes : IEpisode[] = [];

  // CHARACTERS
  characterDataSource = new MatTableDataSource<ICharacter>();
  characterDisplayedColumns: string[] = ['id', 'name', 'status', 'species', 'type', 'gender', 'created'];
  characters: ICharacter[] = [];

  // LOCATIONS
  locationDataSource = new MatTableDataSource<ILocation>();
  locationDisplayedColumns : string[] = ['id', 'name', 'type', 'dimension', 'created']
  locations : ILocation[] = [];

  // IMAGES
  images: string[] = [];
  images2: string[] = [];
  images3: string[] = [];
  images4: string[] = [];

  title = 'Angular Material';

  constructor(
    private episodeService: EpisodeService, 
    private characterService: CharacterService,
    private locationService: LocationService,
    private performanceService: PerformanceService){}

  currentPage : number = 1;

  ngOnInit(): void {
    const episodesKey = 'episodesRequest';
    this.performanceService.startTiming(episodesKey);
    this.episodeService.getAllEpisodes().pipe(takeUntil(this._destroying$)).subscribe(episodes => {
      this.episodeDataSource.data = episodes;
      this.episodes = episodes;
      this.performanceService.stopTiming(episodesKey);
    });
    const charactersKey = 'charactersRequest';
    this.performanceService.startTiming(charactersKey);
    this.characterService.getAllCharacters().pipe(takeUntil(this._destroying$)).subscribe(characters => {
      this.characterDataSource.data = characters;
      this.characters = characters;
      this.performanceService.stopTiming(charactersKey);
    });
    const locationsKey = 'locationsRequest';
    this.performanceService.startTiming(locationsKey);
    this.locationService.getAllLocations().pipe(takeUntil(this._destroying$)).subscribe(locations => {  
      this.locationDataSource.data = locations;
      this.locations = locations;
      this.performanceService.stopTiming(locationsKey);
    });
    const imagesKey = 'imagesRequest';
    this.performanceService.startTiming(imagesKey);
    this.divideImages();
    this.performanceService.stopTiming(imagesKey);
  }

  private divideImages() {
    Array.from(Array(3).keys()).forEach(i => this.images.push(`assets/images/rickmorty${i}.png`)); // 0 1 2
    Array.from(Array(3).keys()).forEach(i => this.images2.push(`assets/images/rickmorty${i + 3}.png`)); // 3 4 5
    Array.from(Array(3).keys()).forEach(i => this.images3.push(`assets/images/rickmorty${i + 6}.png`)); // 6 7 8
    Array.from(Array(2).keys()).forEach(i => this.images4.push(`assets/images/rickmorty${i + 9}.png`)); // 9 10 
  }

  ngOnDestroy(): void {
    this._destroying$.next();
    this._destroying$.complete();
  }
}
