import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonResponse {
  count: number;
  next: string;
  prevous: string;
  results: Pokemon[];
}

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2';
  constructor(private http: HttpClient) {}

  getPokemonList(offset: number = 10, limit: number = 10) {
    return this.http.get<PokemonResponse>(`${this.baseUrl}/pokemon`, {
      params: { offset, limit },
    });
  }

  getPokemon(id: string) {
    return this.http.get<Pokemon>(`${this.baseUrl}/pokemon/${id}`);
  }
}
