import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppComponent } from './app.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { ScreenComponent } from './pokedex/screen/screen.component';

@NgModule({
  declarations: [
    AppComponent,
    PokedexComponent,
    ScreenComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
