import { NgModule } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';
import { CommonModule } from '@angular/common';
/**
 * @param  {[HeroComponent} {declarations
 * @param  {} ListComponent]
 * @param  {[CommonModule]} imports importante para ngif o ngfor declarados en el html
 * @param  {[HeroComponent} exports
 * @param  {} ListComponent]
 * @param  {} }
 */
@NgModule({
  declarations: [HeroComponent, ListComponent],
  imports: [CommonModule],
  exports: [HeroComponent, ListComponent],
})
export class HeroesModule {}
