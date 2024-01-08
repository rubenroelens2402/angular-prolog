import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ICharacter } from '../interfaces/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  getCharacters(page: number) : Observable<ICharacter[]>{
    return this.http.get(`https://rickandmortyapi.com/api/character?page=${page}`).pipe(
      map((response : any) => response.results),
      map((characters : any) => characters.map((character : ICharacter) => ({
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
}
