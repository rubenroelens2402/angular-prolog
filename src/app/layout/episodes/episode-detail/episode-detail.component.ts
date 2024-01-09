import { Component, OnInit } from '@angular/core';
import { IEpisode } from '../../../core/interfaces/episode';
import { ActivatedRoute } from '@angular/router';
import { EpisodeService } from '../../../core/services/episode.service';
import { ICharacter } from '../../../core/interfaces/character';
import { CharacterService } from '../../../core/services/character.service';

@Component({
  selector: 'app-episode-detail',
  templateUrl: './episode-detail.component.html',
  styleUrls: ['./episode-detail.component.scss']
})
export class EpisodeDetailComponent implements OnInit {

  episode : any;

  characters: ICharacter[] = [];

  constructor(private route: ActivatedRoute, private episodeService: EpisodeService, private characterService: CharacterService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id !== null) {
      this.episodeService.getEpisodeById(id).subscribe(episode => {
        this.episode = episode;
        // get characters
        this.episode.characters.forEach((characterUrl : string) => {
          const characterId = characterUrl.split('/').pop();
          if (characterId !== undefined) {
            this.characterService.getCharacterById(+characterId).subscribe(character => {
              this.characters.push(character);
            });
          }
        });
      });
    }
  }

  navigateBack() {
    window.history.back();
  }

  navigateToCharacterDetail(id: number) {
    window.location.href = `/characters/${id}`;
  }
}
