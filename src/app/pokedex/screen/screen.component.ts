import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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

  pokemonList$?: Observable<PokemonList[]>;
  gens$: Observable<Gen[]>;
  pokemon$?: Observable<Pokemon>;

  constructor(private pokemonService: PokemonService, private genService: GensService) {
    this.gens$ = this.genService.getGens();
   }

  ngOnInit(): void {}


  getPokemonByName(name: string){
    this.pokemon$ = this.pokemonService.getPokemonByName(name);
  }

  getPokemonByGen(gen: Gen){
    this.pokemonList$ = this.pokemonService.getPokemonLimit(gen.limit, gen.offset);
  }

  backToGen(){
    this.pokemonList$ = undefined;
  }

}
