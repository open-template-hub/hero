import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroComponent } from './component/hero/hero.component';

@NgModule( {
  declarations: [
    HeroComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeroComponent
  ]
} )
export class HeroModule {
}
