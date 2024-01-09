import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, map, switchMap } from 'rxjs';
import { ILocation } from '../interfaces/location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }

  getLocations(page: number) : Observable<ILocation[]> {
    return this.http.get<ILocation[]>(`https://rickandmortyapi.com/api/location?page=${page}`).pipe(
      map((response : any) => response.results),
      map((locations : any) => locations.map((location : ILocation) => ({
        id: location.id,
        name: location.name,
        type: location.type,
        dimension: location.dimension,
        residents: location.residents,
        url: location.url,
        created: location.created
      })))
    );
  }

  getAllLocations() : Observable<ILocation[]> {
    // check page count, then for each page, get the episodes
    return this.getLocationsPageCount().pipe(
      switchMap((pageCount : number) => {
        // check how many pages need to be requestsed
        const requests : Observable<ILocation[]>[] = [];
        for(let i = 1; i <= pageCount; i++) {
          requests.push(this.getLocations(i));
        }
        // forkjoin requests
        return forkJoin(requests).pipe(
          map((responses: ILocation[][]) => responses.reduce((acc, locations) => acc.concat(locations), []))
        )
      })
    )
  }

  getLocationById(id: number) : Observable<ILocation> {
    return this.http.get(`https://rickandmortyapi.com/api/location/${id}`).pipe(
      map((response : any) => ({
        id: response.id,
        name: response.name,
        type: response.type,
        dimension: response.dimension,
        residents: response.residents,
        url: response.url,
        created: response.created
      }))
    )
  }

  getLocationsPageCount() : Observable<number> {
    return this.http.get(`https://rickandmortyapi.com/api/location`).pipe(
      map((response : any) => response.info.pages)
    )
  }
}
