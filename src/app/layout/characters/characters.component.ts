import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../core/services/character.service';
import { Subject, takeUntil } from 'rxjs';
import { ICharacter } from '../../core/interfaces/character';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  private _destroying$ = new Subject<void>();

  characters : ICharacter[] = [];

  constructor(private charactersService: CharacterService, private router: Router) {}

  ngOnInit(): void {
    this.charactersService.getAllCharacters().subscribe(characters => {
      this.characters = characters;
    });
  }

  navigateToDetail(id: number): void {
    this.router.navigate(['characters', id]);
  }

  ngOnDestroy(): void {
    this._destroying$.next();
    this._destroying$.complete();
}

}
