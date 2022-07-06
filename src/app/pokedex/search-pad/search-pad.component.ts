import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, map, tap } from 'rxjs/operators';
import { PokemonService } from 'src/app/_services/pokemon.service';

@Component({
  selector: 'app-search-pad',
  templateUrl: './search-pad.component.html',
  styleUrls: ['./search-pad.component.css']
})
export class SearchPadComponent implements OnInit {

  constructor(private pokemonService: PokemonService) { }

  private subject: Subject<string> = new Subject();

  keypadInput = '';

  ngOnInit(): void {

    this.subject.pipe(
      debounceTime(7000)
    ).subscribe(numberBtn => {
      this.heandleSearch(numberBtn);
    });

  }

  clickNumber(numberBtn: string){

    this.keypadInput = this.keypadInput + numberBtn;

    /*if( this.keypadInput.length > 3){

    }*/

    this.pokemonService.setSearchId(numberBtn);

    this.subject.next(this.keypadInput);

    this.pokemonService.pokemonGenSelected = false;
    this.pokemonService.pokemonSelected = true;

    this.pokemonService.searchGenerated = true;

  }

  heandleSearch(numberBtn: string){

    console.log('called', numberBtn)
    this.runSearch('keypad');

  }

  runSearch(string:string){

    this.pokemonService.getPokemonByName(parseInt(this.keypadInput)).subscribe();
    this.pokemonService.pokemonGenSelected = true;
    this.pokemonService.pokemonSelected = true;

    this.keypadInput = '';

  }

}


