import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin, Observable, of, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { PokemonList } from '../_model/pokemonList';
import { PokemonResults } from '../_model/pokemonResults';
import { Description, Pokemon } from '../_model/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  baseUrl = environment.apiUrl;

  private pokemonListSubject = new BehaviorSubject<any>(null);
  pokemonList$: Observable<any> = this.pokemonListSubject.asObservable();

  searchId$ = new BehaviorSubject<string>('0');

  private userCanSearch = new BehaviorSubject<boolean>(false);
  userCanSearch$  = this.userCanSearch.asObservable();

  pokemonSelected:boolean = false;

  pokemonGenSelected:boolean = false;

  pokemonBack: boolean = false;

  keyInput: string[] = ['0','0','0'];

  constructor(private http: HttpClient) { }

  getPokemonByName(name:string| number){
   return this.http.get<Pokemon>( this.baseUrl + 'pokemon/' + name)
    .pipe(
      mergeMap(pokemon => {
        const pokemonDetails = of(pokemon);
        const description = this.http.get<Description>(pokemon.species.url);
        return forkJoin([pokemonDetails, description]).pipe(
          map(([pokemonDetails, description]) => {
            if(pokemonDetails != null ){
              pokemonDetails.id = ('00' + pokemonDetails.id).slice(-3);
              description.id = ('00' + description.id).slice(-3);
              pokemonDetails.height = pokemonDetails.height / 10;
              pokemonDetails.weight = pokemonDetails.weight / 10;
            }
            return Object.assign(pokemonDetails, description);
          })
        )
      }),
      tap((value) => {
        console.log(value)
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

  getPokemonDescription(): Observable<Pokemon>{
    return this.pokemonList$.pipe(
      map(item => {

        if(item){
          this.keyInput = ['0','0','0'];
          console.log('item',item);
          this.userCanSearch.next(true);
          for (let flavor of item.flavor_text_entries){
            if(flavor.language.name == 'en'){
              return flavor.flavor_text;
            }
          }
        }
      })
    )
  }

  getSearchId(): Observable<string>{
    return this.searchId$.pipe(
      map( res => {
        console.log('res', res)
        if(res){
          this.userCanSearch.next(false);
        }
        if(this.keyInput.length >= 3){
          this.keyInput.shift();
        }
          this.keyInput.push(res);
          return this.keyInput.join('')
      })
    );
  }

  retriveSearchID(numberBtn:any){
    return this.searchId$ = numberBtn;
  }

  setSearchId(res:any){
    this.searchId$.next(res);
  }

  setToNull(){
    this.pokemonListSubject.next(null)
  }

}
