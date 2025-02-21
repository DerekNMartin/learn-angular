import { Component, Input, inject } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-card',
  imports: [CommonModule],
  template: `
    <article *ngIf="pokemon" class="pokemon-card">
      <div class="pokemon-card-image">
        <img [src]="image" />
      </div>
      <span class="pokemon-card__id">{{ pokemon.id }}</span>
      <p class="pokemon-card__name">{{ pokemon.name }}</p>
    </article>
  `,
  styleUrl: './pokemon-card.component.css',
})
export class PokemonCardComponent {
  @Input() url = '';

  pokemonService = inject(PokemonService);
  pokemon: Pokemon | null = null;

  ngOnInit() {
    this.fetchPokemon();
  }

  fetchPokemon() {
    if (this.pokemonId) {
      return this.pokemonService
        .getPokemon(this.pokemonId)
        .subscribe((response) => {
          this.pokemon = response;
        });
    }
    return;
  }

  get pokemonId() {
    const regex = /\/pokemon\/([^\/]+)/;
    const match = this.url.match(regex);
    return match ? match[1] : null;
  }

  get name() {
    return this.pokemon?.name;
  }
  get image() {
    return this.pokemon?.sprites?.other['official-artwork'].front_default;
  }
}
