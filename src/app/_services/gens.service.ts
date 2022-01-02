import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { Gen } from '../_model/gen';

@Injectable({
  providedIn: 'root'
})
export class GensService {

  constructor(private http: HttpClient) { }

  getGens() : Observable<Gen[]>{
    return this.http.get<Gen[]>("./assets/generation.json")
    .pipe(
      shareReplay()
    )
  }
}
