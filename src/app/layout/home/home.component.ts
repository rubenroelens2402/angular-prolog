import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { EpisodeService } from '../../core/services/episode.service';
import { IEpisode } from '../../core/interfaces/episode';
import { ICharacter } from '../../core/interfaces/character';
import { CharacterService } from '../../core/services/character.service';
import { LocationService } from '../../core/services/location.service';
import { ILocation } from '../../core/interfaces/location';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private _destroying$ = new Subject<void>();

  episodes : IEpisode[] = [];
  characters: ICharacter[] = [];
  locations : ILocation[] = [];

  title = 'Angular Material';

  constructor(
    private episodeService: EpisodeService, 
    private characterService: CharacterService,
    private locationService: LocationService){}

  currentPage : number = 1;

  ngOnInit(): void {
    this.episodeService.getEpisodes(1).pipe(takeUntil(this._destroying$)).subscribe(episodes => {
      this.episodes = episodes;
    });
    this.characterService.getCharacters(1).pipe(takeUntil(this._destroying$)).subscribe(characters => {
      this.characters = characters;
    });
    this.locationService.getLocations(1).pipe(takeUntil(this._destroying$)).subscribe(locations => {  
      this.locations = locations;
    });
  }
}
