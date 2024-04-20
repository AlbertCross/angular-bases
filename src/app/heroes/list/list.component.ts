import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  deletedHero?:string = '';
  heroNames: string[]= ['Spiderman', 'hulk','Dr. Strange','Ironman'];

  removeLastHero():void {
    this.deletedHero = this.heroNames.pop();
  }
}
