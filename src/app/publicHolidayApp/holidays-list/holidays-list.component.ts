import {
  Component,
  Input,
  inject,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Holiday } from '../holidays-api';
import { HolidaysService } from '../holidays.service';

@Component({
  selector: 'app-holidays-list',
  imports: [CommonModule],
  template: `
    <ul class="holidays-list">
      <li *ngFor="let holiday of holidays$ | async" class="holidays-list-item">
        <span class="holidays-list-item__date">{{ holiday.startDate }}</span>
        <span class="holidays-list-item__name">{{ holidayName(holiday) }}</span>
      </li>
    </ul>
  `,
  styleUrl: './holidays-list.component.css',
})
export class HolidaysListComponent {
  @Input() selectedCountryId = '';
  holidayService = inject(HolidaysService);

  holidays$: Observable<Holiday[]>;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedCountryId'].currentValue) this.getHolidays();
  }

  getHolidays() {
    this.holidays$ = this.holidayService.getHolidays(this.selectedCountryId);
  }

  holidayName(holiday: Holiday) {
    return holiday.name.find((name) =>
      navigator.language.toLowerCase().includes(name.language.toLowerCase())
    )?.text;
  }
}
