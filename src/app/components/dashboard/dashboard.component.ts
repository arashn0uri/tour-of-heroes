import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';
import { Hero } from 'src/app/models/hero';
import { Observable, } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(
    private heroService: HeroService
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes(): void {
    let observable : Observable<Hero[]> = this.heroService.getHeroes();
      observable.subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

}
