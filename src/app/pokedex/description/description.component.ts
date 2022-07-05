import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Pokemon } from 'src/app/_model/pokemon';
import { PokemonService } from 'src/app/_services/pokemon.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  showSearch$?: boolean;

  searchId$?: Observable<string>;

  pokemonDescription$?: Pokemon;

  constructor(public pokemonService: PokemonService) { }

  ngOnInit(): void {

    this.searchId$ = this.pokemonService.getSearchId();

    this.pokemonService.getPokemonDescription().subscribe(res => {
      this.pokemonDescription$ = res;
    });

    this.pokemonService.userCanSearch$.subscribe(res => {
      console.log('bool', res)
      this.showSearch$ = res;
    })

  }

}

