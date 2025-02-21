import { Component, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, map, single, tap } from 'rxjs';
import { Pokemon, PokemonResponse, PokemonService } from '../pokemon.service';
import { PaginationComponent } from '../pagination/pagination.component';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';

@Component({
  selector: 'app-pokemon',
  imports: [CommonModule, PaginationComponent, PokemonCardComponent],
  template: `
    <section class="pokemon-list">
      <app-pokemon-card
        *ngFor="let pokemon of pokemonList"
        [url]="pokemon.url"
      />
    </section>
    <app-pagination
      [(offset)]="currentOffset"
      [limit]="limit"
      [total]="total"
    />
  `,
  styleUrl: './pokemon.component.css',
})
export class PokemonComponent {
  pokemonService = inject(PokemonService);
  pokemonList: Pokemon[] = [];
  total?: number;
  currentOffset = signal<number>(0);
  limit = 10;

  constructor() {
    effect(() => {
      this.getPokemon(this.currentOffset());
    });
  }

  getPokemon(offset?: number) {
    return this.pokemonService.getPokemonList(offset).subscribe((response) => {
      this.pokemonList = response.results;
      this.total = response.count;
    });
  }
}
