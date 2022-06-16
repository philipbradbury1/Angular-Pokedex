import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Gen } from 'src/app/_model/gen';
import { Pokemon } from 'src/app/_model/pokemon';
import { PokemonList } from 'src/app/_model/pokemonList';
import { GensService } from 'src/app/_services/gens.service';
import { PokemonService } from 'src/app/_services/pokemon.service';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']

})
export class ScreenComponent implements OnInit {

  gens$?: Observable<Gen[]>;
  pokemonList$?: Observable<PokemonList[]>;
  pokemon$?: Observable<Pokemon | null>;

  constructor(public pokemonService: PokemonService, private genService: GensService) {}

  ngOnInit(): void {

    this.gens$ = this.genService.getGens();
    console.log(this.pokemonService.pokemonList$);

    this.pokemon$ = this.pokemonService.pokemonList$
    .pipe(pokemonList => this.pokemon$ = pokemonList);
  }

  getPokemonByName(name: string){
    this.pokemonService.getPokemonByName(name).subscribe();
    this.pokemonService.pokemonSelected = true;
  }

  getPokemonByGen(gen: Gen){
    this.pokemonList$ = this.pokemonService.getPokemonList(gen.limit, gen.offset);
    this.pokemonService.pokemonGenSelected = true;
  }

  get pokemonShowBack(): boolean{
    return this.pokemonService.pokemonBack
  }

}
