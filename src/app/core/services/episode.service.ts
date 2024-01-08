import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEpisode } from '../interfaces/episode';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  constructor(private http : HttpClient) { }

  getEpisodes(page: number) : Observable<IEpisode[]>{
    return this.http.get(`https://rickandmortyapi.com/api/episode?page=${page}`).pipe(
      map((response : any) => response.results),
      map((episodes : any) => episodes.map((episode : IEpisode) => ({
        id : episode.id,
        name : episode.name,
        air_date : episode.air_date,
        episode : episode.episode,
        characters : episode.characters,
        url : episode.url,
        created : episode.created
      })))
    )
  }
}
