import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, map, tap } from 'rxjs/operators';
import { PokemonList } from '../_model/pokemonList';
import { PokemonResults } from '../_model/pokemonResults';
import { Pokemon } from '../_model/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  baseUrl = environment.apiUrl;

  private pokemonListSubject = new BehaviorSubject<Pokemon | null>(null);
  pokemonList$: Observable<Pokemon | null> = this.pokemonListSubject.asObservable();

  constructor(private http: HttpClient) { }

  getPokemonByName(name:string){
    return this.http.get<Pokemon | null>( this.baseUrl + 'pokemon/' + name)
    .pipe(
      tap(value => {
        this.pokemonListSubject.next(value)
      })
    );
  }

  getPokemonList(limit:number, offset:number): Observable<PokemonList[]>{
    return this.http.get<PokemonResults>(this.baseUrl + `pokemon/?limit= ${limit}&offset=${offset}`)
      .pipe(
        map( (res) => res['results'])
      );
  }

}
