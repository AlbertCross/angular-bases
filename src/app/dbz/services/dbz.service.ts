import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DbzService {
  constructor() {}

  characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 500,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 500000,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 300000,
    },
  ];

  onNewCharacter(character: Character): void {
    const newCaracter: Character = { ...character, id: uuid() };
    this.characters.push(newCaracter);
  }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter (character => character.id !== id);
  }
}
