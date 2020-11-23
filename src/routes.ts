import { Routes } from '@angular/router';
import { SectionParkomatsComponent } from './app/section/section-parkomats/section-parkomats.component';
import { SectionStatisticComponent } from './app/section/section-statistic/section-statistic.component';
import { SectionInfoComponent } from './app/section/section-info/section-info.component';

export const appRoutes: Routes = [
  { path: 'parkomats', component: SectionParkomatsComponent },
  { path: 'statistic', component: SectionStatisticComponent },
  { path: 'info', component: SectionInfoComponent },

  { path: '', redirectTo: '/statistic', pathMatch: 'full' },
];
