import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    template: `<h2>contador: {{ contador }}</h2>
    <button (click)="increase(1)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="increase(-1)">-1</button>`
})
export class CounterComponent {
    public contador: number = 5;

    increase(value:number):void {
      this.contador+=value;
    }
    reset():void {
      this.contador=5;
    }
}