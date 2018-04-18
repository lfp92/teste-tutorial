import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes : Hero[];

  selectedHero: Hero;

  onSelect(hero: Hero) : void{
    this.selectedHero = hero;
  }

  getHero(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHero();
  }

}
