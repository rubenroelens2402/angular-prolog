import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MonoTypeOperatorFunction, Observable, forkJoin, map, switchMap } from 'rxjs';
import { ICharacter } from '../interfaces/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  pipe(arg0: MonoTypeOperatorFunction<unknown>) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  getCharacters(page: number): Observable<ICharacter[]> {
    return this.http.get(`https://rickandmortyapi.com/api/character?page=${page}`).pipe(
      map((response: any) => response.results),
      map((characters: any) => characters.map((character: ICharacter) => ({
        id: character.id,
        name: character.name,
        status: character.status,
        species: character.species,
        type: character.type,
        gender: character.gender,
        origin: {
          name: character.origin.name,
          url: character.origin.url
        },
        location: {
          name: character.location.name,
          url: character.location.url
        },
        image: character.image, // URL to the character's image
        episode: character.episode, // List of URLs to episodes
        url: character.url, // URL to the character's own endpoint
        created: character.created, // Time at which the character was created in the database
      })
      )));
  }

  getAllCharacters(): Observable<ICharacter[]> {
    // check page count, then for each page, get the episodes
    return this.getCharactersPageCount().pipe(
      switchMap((pageCount: number) => {
        // check how many pages need to be requestsed
        const requests: Observable<ICharacter[]>[] = [];
        for (let i = 1; i <= pageCount; i++) {
          requests.push(this.getCharacters(i));
        }
        // forkjoin requests
        return forkJoin(requests).pipe(
          map((responses: ICharacter[][]) => responses.reduce((acc, characters) => acc.concat(characters), []))
        )
      })
    )
  }

  getCharacterById(id: number): Observable<ICharacter> {
    return this.http.get(`https://rickandmortyapi.com/api/character/${id}`).pipe(
      map((response: any) => ({
        id: response.id,
        name: response.name,
        status: response.status,
        species: response.species,
        type: response.type,
        gender: response.gender,
        origin: {
          name: response.origin.name,
          url: response.origin.url
        },
        location: {
          name: response.location.name,
          url: response.location.url
        },
        image: response.image, // URL to the character's image
        episode: response.episode, // List of URLs to episodes
        url: response.url, // URL to the character's own endpoint
        created: response.created, // Time at which the character was created in the database
      }))
    )
  }

  getCharactersPageCount(): Observable<number> {
    return this.http.get(`https://rickandmortyapi.com/api/character`).pipe(
      map((response: any) => response.info.pages)
    )
  }
}
