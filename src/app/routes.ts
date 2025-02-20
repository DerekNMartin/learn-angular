import { Routes } from '@angular/router';
import { HomeComponent } from './housingApp/home/home.component';
import { DetailsComponent } from './housingApp/details/details.component';

import { TimerComponent } from './timerApp/timer/timer.component';

const routeConfig: Routes = [
  {
    path: '',
    title: 'Home page',
    component: HomeComponent,
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
