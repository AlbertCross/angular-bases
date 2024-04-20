import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  name: string = 'Ironman';
  age: number = 35;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }
  
  get heroDescription(): string {
    return `${ this.name} - ${this.age}`
  }

  changeHero():void {
    this.name = 'Superman';
  }

  changeAge():void {
    this.age = 28;
  }

  reset():void {
    this.name = 'Ironman';
    this.age = 35;
  }
}
