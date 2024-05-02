import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Output()
  onDeleteCharacter: EventEmitter<string> = new EventEmitter();

  @Input()
  characterList: Character[] = [];

  deleteCharacter(id?: string):void{
    if(!id) return;

    this.onDeleteCharacter.emit(id);
  }

}
