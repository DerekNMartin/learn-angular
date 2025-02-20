import { Component, Input } from '@angular/core';
import { Housinglocation } from '../housinglocation';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  imports: [RouterLink],
  template: `
    <section class="listing">
      <img class="listing-photo" [src]="housingLocation.photo" />
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">
        {{ housingLocation.city }}, {{ housingLocation.state }}
      </p>
      <a [routerLink]="['details', housingLocation.id]">Learn More</a>
    </section>
  `,
  styleUrl: './housing-location.component.css',
})
export class HousingLocationComponent {
  @Input() housingLocation!: Housinglocation;
}
