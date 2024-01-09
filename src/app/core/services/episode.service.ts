import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEpisode } from '../interfaces/episode';
import { Observable, forkJoin, map, switchMap } from 'rxjs';

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

  getAllEpisodes() : Observable<IEpisode[]> {
    // check page count, then for each page, get the episodes
    return this.getEpisodesPageCount().pipe(
      switchMap((pageCount : number) => {
        // check how many pages need to be requestsed
        const requests : Observable<IEpisode[]>[] = [];
        for(let i = 1; i <= pageCount; i++) {
          requests.push(this.getEpisodes(i));
        }
        // forkjoin requests
        return forkJoin(requests).pipe(
          map((responses: IEpisode[][]) => responses.reduce((acc, episodes) => acc.concat(episodes), []))
        )
      })
    )
  }

  getEpisodeById(id: number) : Observable<IEpisode> {
    return this.http.get(`https://rickandmortyapi.com/api/episode/${id}`).pipe(
      map((response : any) => ({
        id : response.id,
        name : response.name,
        air_date : response.air_date,
        episode : response.episode,
        characters : response.characters,
        url : response.url,
        created : response.created
      }))
    )
  }

  getEpisodesPageCount() : Observable<number> {
    return this.http.get(`https://rickandmortyapi.com/api/episode`).pipe(
      map((response : any) => response.info.pages)
    )
  }
}
