import {
  Component,
  EventEmitter,
  inject,
  OnInit,
  signal,
  Output,
  effect,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, map } from 'rxjs';
import { HolidaysService } from '../holidays.service';
import { Country } from '../holidays-api';
import { FormsModule } from '@angular/forms';

interface CountryOption {
  id: string;
  name?: string;
}

@Component({
  selector: 'app-holidays-select',
  imports: [CommonModule, FormsModule],
  template: `
    <select [(ngModel)]="selectedCountryId">
      <option *ngFor="let country of countryOptions()" [value]="country.id">
        {{ country.name }}
      </option>
    </select>
  `,
  styleUrl: './holidays-select.component.css',
})
export class HolidaysSelectComponent {
  @Output() countrySelected = new EventEmitter();
  countryOptions = signal<CountryOption[]>([]);
  language = navigator.language;
  selectedCountryId = signal<string>('');

  holidaysService: HolidaysService = inject(HolidaysService);
  countries$: Observable<Country[]>;

  constructor() {
    effect(() => {
      const test = this.selectedCountryId();
      this.countrySelected.emit(test);
    });
  }

  ngOnInit() {
    this.countries$ = this.holidaysService.getCountries();
    this.countries$.subscribe((countries) => {
      if (countries.length > 0) {
        this.countryOptions.set(
          countries.map((country) => ({
            id: country.isoCode,
            name: this.countryName(country),
          }))
        );
        this.selectedCountryId.set(this.countryOptions()[0].id);
      }
    });
  }

  get selectedCountry() {
    return this.countryOptions().find(
      (country) => country.id === this.selectedCountryId()
    );
  }

  countryName(country: Country) {
    return country.name.find((item) =>
      this.language.toLowerCase().includes(item.language.toLowerCase())
    )?.text;
  }
}
