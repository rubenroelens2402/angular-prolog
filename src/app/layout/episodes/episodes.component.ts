import { Component, OnInit } from '@angular/core';
import { EpisodeService } from '../../core/services/episode.service';
import { IEpisode } from '../../core/interfaces/episode';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {

    private _destroying$ = new Subject<void>();

    episodes : IEpisode[] = [];
  
    constructor(private episodeService: EpisodeService, private router: Router) { }
  
    ngOnInit(): void {
      this.episodeService.getAllEpisodes().subscribe(episodes => {
        this.episodes = episodes;
      });
    }

    navigateToDetail(id: number) {
        this.router.navigate([`/episodes/${id}`]);
    }

    ngOnDestroy(): void {
        this._destroying$.next();
        this._destroying$.complete();
    }

}
