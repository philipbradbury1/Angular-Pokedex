import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/_model/pokemon';
import { PokemonService } from 'src/app/_services/pokemon.service';

@Component({
  selector: 'app-image-buttons',
  templateUrl: './image-buttons.component.html',
  styleUrls: ['./image-buttons.component.css']
})
export class ImageButtonsComponent implements OnInit {

  pokemonShowBack: boolean = false;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {}

    frontImage(){
      this.pokemonShowBack = false;
      this.pokemonService.setBackImage(false)
    }

    backImage(){
      this.pokemonShowBack = true;
      this.pokemonService.setBackImage(true);
    }

}
