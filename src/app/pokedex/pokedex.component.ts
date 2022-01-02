import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PokemonService } from '../_services/pokemon.service';
import { Gen } from '../_model/gen';
import { GensService } from '../_services/gens.service';
import { Observable } from 'rxjs';
import { Pokemon } from '../_model/pokemon';
import { PokemonList } from '../_model/pokemonList';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PokedexComponent implements OnInit {
 // pokemonList$?: Observable<PokemonList[]>;
 // gens$: Observable<Gen[]>;
 // pokemon$?: Observable<Pokemon>;

  constructor(private pokemonService: PokemonService, private genService: GensService) {
   // this.gens$ = this.genService.getGens();
   }

  ngOnInit(): void {}

/*
  getPokemonByName(name: string){
    this.pokemon$ = this.pokemonService.getPokemonByName(name);
  }

  getPokemonByGen(gen: Gen){
    this.pokemonList$ = this.pokemonService.getPokemonLimit(gen.limit, gen.offset);
  }

  backToGen(){
    this.pokemonList$ = undefined;
  }
*/
}
