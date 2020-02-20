import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {

@Input("detailedPokemon")
pokemon: Pokemon;

  constructor() { 
  }

  ngOnInit() {
  }
}
