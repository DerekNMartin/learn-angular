import { Component, inject, signal, computed } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { CommonModule } from '@angular/common';
import { HousingService } from '../housing.service';
import { Housinglocation } from '../housinglocation';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HousingLocationComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  housingService: HousingService = inject(HousingService);
  housingLocationList: Housinglocation[] = [];
  filterValue = signal<string>('');

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }

  filteredLocationList = computed(() => {
    if (!this.filterValue()) return this.housingLocationList;
    return this.housingLocationList.filter((item) =>
      item.city.toLowerCase().includes(this.filterValue().toLowerCase())
    );
  });
}
