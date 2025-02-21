import { Component } from '@angular/core';

import { HolidaysSelectComponent } from '../holidays-select/holidays-select.component';
import { HolidaysListComponent } from '../holidays-list/holidays-list.component';

@Component({
  selector: 'app-holidays',
  imports: [HolidaysSelectComponent, HolidaysListComponent],
  template: `
    <div>
      <app-holidays-select (countrySelected)="selectedCountryId = $event" />
      <app-holidays-list [selectedCountryId]="selectedCountryId" />
    </div>
  `,
  styleUrl: './holidays.component.css',
})
export class HolidaysComponent {
  selectedCountryId: string;
}
