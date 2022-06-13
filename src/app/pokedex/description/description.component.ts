import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pokemon } from 'src/app/_model/pokemon';
import { PokemonService } from 'src/app/_services/pokemon.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  pokemon2$?: Observable<Pokemon | null>;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {

    this.pokemon2$ = this.pokemonService.pokemonList$
    .pipe(
      map(item =>{
        if(item){
          for (let flavor of item.flavor_text_entries){
            if(flavor.language.name == 'en'){
              return flavor.flavor_text;
            }
          }
      }
      }),
    )

  }

}

