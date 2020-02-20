import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokeAPIService } from '../poke-api.service';
import {PokemonDetailsComponent} from '../pokemon-details/pokemon-details.component';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
  idPokemon: number;
  search: string = '';
  listPokemon: Array<Pokemon> = new Array();
  selectedPokemon : Pokemon;

  constructor(private service: PokeAPIService) { }

  ngOnInit() {
    this.service.getAllPokemon().subscribe((json: Object) => {
      var i:number = 1;
      for(var index in json["results"]){
        this.listPokemon.push(new Pokemon(i, json["results"][index]["name"], null, null));
        i++;
      }
    });
  }

  searchPokemon() {
    console.log(this.search);
    this.service.getPokemon(this.idPokemon).subscribe((data: Object) => this.selectedPokemon =  this.createPokemon(data));
  }

  createPokemon(json : Object){
    var pokemon: Pokemon =  new Pokemon(json["id"], json["name"], json["height"], json["weight"]);

    for(var index in json["moves"]){
      pokemon.addMove(json["moves"][index]["move"]["name"]);
    }

    for(var index in json["types"]){
      pokemon.addType(json["types"][index]["type"]["name"]);
    }

    return pokemon;
  }

}
