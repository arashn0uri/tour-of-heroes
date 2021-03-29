import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero';
import { HeroService } from 'src/app/services/hero.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  // heroes$ : Observable<Hero[]> = of([]);
  constructor(
    private heroService: HeroService
    ) { }
  onSelect(): void {
    this.getHeroes();
  }
  getHeroes(): void {
    let observable : Observable<Hero[]> = this.heroService.getHeroes();
    observable.subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroService.deleteHero(hero.id)
    .subscribe(() => {
      this.heroes = this.heroes.filter(h => h !== hero);
    });
  }

  ngOnInit(): void {
    this.getHeroes();
  }

}
