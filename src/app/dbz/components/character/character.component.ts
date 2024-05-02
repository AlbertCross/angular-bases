import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-character',
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent {
  /**
   * importante para poder emitir el evento
   */
  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  character: Character = {
    name:'',
    power: 0
  }


  addCharacter():void{
    if(this.character.name.length ===0) return ;
    this.onNewCharacter.emit(this.character);
    this.character.name = '';
    this.character.power = 0;
  }
}
