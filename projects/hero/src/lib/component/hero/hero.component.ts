import { Component, Input } from '@angular/core';
import { Hero } from '../../model/hero/hero.model';

@Component( {
  selector: 'oth-hero',
  templateUrl: './hero.component.html',
  styleUrls: [ './hero.component.scss' ]
} )
export class HeroComponent {

  @Input() contents: Hero[];

  @Input() heroClass: string;

  constructor() {
    this.contents = [
      { text: 'Content'}
    ]

    this.heroClass = '';
  }
}
