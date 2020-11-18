import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroesService } from '../services/heroes.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  // heroes = HEROES;
  hero = {} as Hero;
  heroes!: Hero[];
  selectedHero!: Hero;

  constructor(private hs: HeroesService) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(){
    this.hs.getHeroes().subscribe((heroes: Hero[]) => {
      this.heroes = heroes;
    });
  }
}