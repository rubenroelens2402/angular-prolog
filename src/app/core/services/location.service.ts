import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
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
}
