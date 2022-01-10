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


  constructor(private pokemonService: PokemonService, private genService: GensService) { }

  ngOnInit(): void {}

}
