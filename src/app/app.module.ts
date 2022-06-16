import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppComponent } from './app.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { ScreenComponent } from './pokedex/screen/screen.component';
import { DescriptionComponent } from './pokedex/description/description.component';
import { TypePanelComponent } from './pokedex/type-panel/type-panel.component';
import { DetailsPanelComponent } from './pokedex/details-panel/details-panel.component';
import { NamePanelComponent } from './pokedex/name-panel/name-panel.component';
import { BottomScreenComponent } from './pokedex/bottom-screen/bottom-screen.component';
import { DPadComponent } from './pokedex/d-pad/d-pad.component';
import { SearchPadComponent } from './pokedex/search-pad/search-pad.component';
import { ImageButtonsComponent } from './pokedex/image-buttons/image-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    PokedexComponent,
    ScreenComponent,
    DescriptionComponent,
    TypePanelComponent,
    DetailsPanelComponent,
    NamePanelComponent,
    BottomScreenComponent,
    DPadComponent,
    SearchPadComponent,
    ImageButtonsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
