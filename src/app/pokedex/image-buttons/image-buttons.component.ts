import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/_model/pokemon';
import { PokemonService } from 'src/app/_services/pokemon.service';

@Component({
  selector: 'app-image-buttons',
  templateUrl: './image-buttons.component.html',
  styleUrls: ['./image-buttons.component.css']
})
export class ImageButtonsComponent implements OnInit {

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
  }

  frontImage(){
    this.pokemonService.pokemonBack = false;
  }

  backImage(){
    this.pokemonService.pokemonBack = true;
  }

  get pokemonShowBack(): boolean{
    console.log('get fired on');
    return this.pokemonService.pokemonBack
  }

}
