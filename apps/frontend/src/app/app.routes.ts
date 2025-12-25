import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/components/search-dashboard/search-dashboard.component').then(
        m => m.SearchDashboardComponent,
      ),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/components/home/home.component').then(m => m.HomeComponent),
  },
];
