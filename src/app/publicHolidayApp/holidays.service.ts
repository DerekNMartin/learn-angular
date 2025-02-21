import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country, Holiday } from './holidays-api';

@Injectable({
  providedIn: 'root',
})
export class HolidaysService {
  private baseUrl = 'https://openholidaysapi.org';

  constructor(private http: HttpClient) {}

  getCountries() {
    return this.http.get<Country[]>(`${this.baseUrl}/countries`);
  }

  getHolidays(isoCode: string) {
    return this.http.get<Holiday[]>(`${this.baseUrl}/PublicHolidays`, {
      params: {
        countryIsoCode: isoCode || 'NL',
        validFrom: '2024-01-01',
        validTo: '2024-12-31',
      },
    });
  }
}
