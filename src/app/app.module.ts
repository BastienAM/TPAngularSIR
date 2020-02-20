import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';

import { FormsModule } from '@angular/forms';
import { FilterPokemonPipe } from './filter-pokemon.pipe';
import { PokeAPIService } from './poke-api.service';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    FilterPokemonPipe,
    PokemonDetailsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [PokeAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
