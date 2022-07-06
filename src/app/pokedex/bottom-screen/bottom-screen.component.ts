import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/app/_model/pokemon';
import { PokemonService } from 'src/app/_services/pokemon.service';

@Component({
  selector: 'app-bottom-screen',
  templateUrl: './bottom-screen.component.html',
  styleUrls: ['./bottom-screen.component.css']
})
export class BottomScreenComponent implements OnInit {

  pokemon$?: Observable<Pokemon>;
  pokemoncheck: any;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemon$ = this.pokemonService.pokemonList$
    .pipe(pokemonList => this.pokemon$ = pokemonList);
  }

  goBackButton(){

    if(this.pokemonService.searchGenerated){
      this.pokemonService.setToNull();
      this.pokemonService.setSearch(false);
      this.pokemonService.pokemonSelected = false;
      this.pokemonService.pokemonGenSelected = false;


    } else if(this.pokemonService.pokemonSelected){
      console.log(1)
      this.pokemonService.setToNull();
      this.pokemonService.setSearch(false);
      this.pokemonService.pokemonSelected = false;
    }else{
      console.log(2)
      this.pokemonService.setSearch(false);
      this.pokemonService.pokemonGenSelected = false;
    }



  }

}
