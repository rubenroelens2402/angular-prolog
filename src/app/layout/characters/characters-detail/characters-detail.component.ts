import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../../../core/services/character.service';
import { ILocation } from '../../../core/interfaces/location';
import { IEpisode } from '../../../core/interfaces/episode';
import { EpisodeService } from '../../../core/services/episode.service';
import { LocationService } from '../../../core/services/location.service';

@Component({
  selector: 'app-characters-detail',
  templateUrl: './characters-detail.component.html',
  styleUrls: ['./characters-detail.component.scss']
})
export class CharactersDetailComponent implements OnInit {

  character: any;
  locations : ILocation[] = [];
  episodes : IEpisode[] = [];

  constructor(private route: ActivatedRoute, private characterService: CharacterService, private episodeService: EpisodeService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id !== null) {
      this.characterService.getCharacterById(id).subscribe(character => {
        console.log(character);
        this.character = character;
        // EPISODES LIST
        this.character.episode.forEach((episodeUrl: string) => {
          console.log(episodeUrl);
          const episodeId = episodeUrl.split('/').pop();
          if (episodeId !== undefined) {
            this.episodeService.getEpisodeById(+episodeId).subscribe((episode : IEpisode) => {
              this.episodes.push(episode);
            });
          }
        });
      });
    }
  }

  navigateToEpisodeDetail(id: number): void {
    window.location.href = `/episodes/${id}`;
  }

  navigateToLocationDetail(id: number): void {
    window.location.href = `/locations/${id}`;
  }

  navigateBack() {
    window.history.back();
  }

  extractId(url: string): number | null {
    // Extract the numeric ID from the URL
    const idMatch = url.match(/\/(\d+)\/?$/);
    return idMatch ? +idMatch[1] : null;
  }
}
