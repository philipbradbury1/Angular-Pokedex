import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map, tap } from 'rxjs/operators';
import { PokemonList } from '../_model/pokemonList';
import { PokemonResults } from '../_model/pokemonResults';
import { Pokemon } from '../_model/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }


  getPokemonByName(name:string): Observable<Pokemon>{
    console.log(name);
    return this.http.get<Pokemon>( this.baseUrl + 'pokemon/' + name)
      .pipe(
        tap(value => console.log('Count: ', value) )
      )
  }

  getPokemonLimit(limit:number, offset:number): Observable<PokemonList[]>{
    return this.http.get<PokemonResults>(this.baseUrl + `pokemon/?limit= ${limit}&offset=${offset}`)
      .pipe(
        map( (res) => res['results'])
      );
  }

}
