import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokeAPIService {
  url: string = 'https://pokeapi.co/api/v2/pokemon/';
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getAllPokemon(){
    return this.http.get(this.url + "?offset=0&limit=964");
  }

  getPokemon(id: number) {
    return this.http.get(this.url + id);
  }
}
