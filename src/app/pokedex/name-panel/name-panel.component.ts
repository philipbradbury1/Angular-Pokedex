import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/app/_model/pokemon';
import { PokemonService } from 'src/app/_services/pokemon.service';

@Component({
  selector: 'app-name-panel',
  templateUrl: './name-panel.component.html',
  styleUrls: ['./name-panel.component.css']
})
export class NamePanelComponent implements OnInit {

  pokemon2$?: Observable<Pokemon | null>;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemon2$ = this.pokemonService.pokemonList$
    .pipe(pokemonList=> this.pokemon2$ = pokemonList);
  }

}
