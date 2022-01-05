import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon, Types } from 'src/app/_model/pokemon';
import { PokemonService } from 'src/app/_services/pokemon.service';

@Component({
  selector: 'app-type-panel',
  templateUrl: './type-panel.component.html',
  styleUrls: ['./type-panel.component.css']
})
export class TypePanelComponent implements OnInit {

  pokemon2$?: Observable<Pokemon | null>;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemon2$ = this.pokemonService.pokemonList$
    .pipe(pokemonList=> this.pokemon2$ = pokemonList);
  }

  getClassByType(type:string | undefined){

    if (type == undefined) return ''

    let typeClass = 'type-' + type;

    return ['type-pokemon', typeClass]

  }


}
