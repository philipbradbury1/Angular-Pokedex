import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/app/_model/pokemon';
import { PokemonService } from 'src/app/_services/pokemon.service';

@Component({
  selector: 'app-d-pad',
  templateUrl: './d-pad.component.html',
  styleUrls: ['./d-pad.component.css']
})
export class DPadComponent implements OnInit {

  pokemon$!: Pokemon;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.pokemonList$
    .subscribe(pokemonList => this.pokemon$ = pokemonList);
  }

  clickLeft(){

    let pokemonID = parseInt(this.pokemon$.id)

    if(pokemonID > 1){

      pokemonID--

      if(this.pokemonService.pokemonSelected){
        this.pokemonService.getPokemonByName(pokemonID).subscribe();
      }

    }


  }

  clickRight(){

    let pokemonID = parseInt(this.pokemon$.id)



      pokemonID++

      if(this.pokemonService.pokemonSelected){
        this.pokemonService.getPokemonByName(pokemonID).subscribe();
      }



  }

}
