import { Component, OnInit } from '@angular/core';
import { ILocation } from '../../../core/interfaces/location';
import { ActivatedRoute } from '@angular/router';
import { LocationService } from '../../../core/services/location.service';
import { ICharacter } from '../../../core/interfaces/character';
import { CharacterService } from '../../../core/services/character.service';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.scss']
})
export class LocationDetailComponent implements OnInit {

  location: any;
  residents: ICharacter[] = [];

  constructor(private route: ActivatedRoute, private locationService: LocationService, private characterService: CharacterService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id !== null) {
      this.locationService.getLocationById(id).subscribe(location => {
        this.location = location;
        // RESIDENTS
        this.location.residents.forEach((characterUrl : string) => {
          const characterId = characterUrl.split('/').pop();
          if (characterId !== undefined) {
            this.characterService.getCharacterById(+characterId).subscribe(character => {
              this.residents.push(character);
            });
          }
        });
      });
    }
  }

  navigateToCharacterDetail(id: number) {
    window.location.href = `/characters/${id}`;
  }

  navigateBack() {
    window.history.back();
  }

}
