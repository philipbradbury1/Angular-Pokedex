import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
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
      debounceTime(500)
    ).subscribe(numberBtn => {
      this.heandleSearch(numberBtn);
    });

  }



  clickNumber(numberBtn: string){
    console.log('clicked number')

    this.keypadInput = this.keypadInput + numberBtn;

    if( this.keypadInput.length > 3){

    }

    this.subject.next(this.keypadInput);
  }



  heandleSearch(numberBtn: string){

    console.log('called', numberBtn)

  /*  if(this.keypadInput.length < 3){
      this.keypadInput = this.keypadInput + numberBtn;

      if(this.keypadInput.length == 3){



      }

    }*/

    this.runSearch('keypad');

  //  console.log(this.keypadInput)

  }

  runSearch(string:string){

   // console.log('run search ran', string )

    this.pokemonService.getPokemonByName(parseInt(this.keypadInput)).subscribe();
    this.pokemonService.pokemonGenSelected = true;
    this.pokemonService.pokemonSelected = true;

    this.keypadInput = '';

  }

}
