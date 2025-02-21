import { Routes } from '@angular/router';
import { HomeComponent } from './housingApp/home/home.component';
import { DetailsComponent } from './housingApp/details/details.component';
import { TimerComponent } from './timerApp/timer/timer.component';
import { HolidaysComponent } from './publicHolidayApp/holidays/holidays.component';
import { PokemonComponent } from './pokemonApp/pokemon/pokemon.component';

const routeConfig: Routes = [
  {
    path: '',
    title: 'Home page',
    component: HomeComponent,
  },
  {
    path: 'pokemon',
    title: 'Pokemon page',
    component: PokemonComponent,
  },
  {
    path: 'holidays',
    component: HolidaysComponent,
    title: 'Holidays page',
  },
  {
    path: 'timer',
    component: TimerComponent,
    title: 'Homes page',
  },
  {
    path: 'homes',
    component: HomeComponent,
    title: 'Homes page',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Homes details',
  },
];

export default routeConfig;
