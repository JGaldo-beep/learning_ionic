import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'adriana',
    loadComponent: () => import('./adriana/adriana.page').then( m => m.AdrianaPage)
  },
  {
    path: 'jorge-c',
    loadComponent: () => import('./jorge-c/jorge-c.page').then( m => m.JorgeCPage)
  },  {
    path: 'silvana',
    loadComponent: () => import('./silvana/silvana.page').then( m => m.SilvanaPage)
  },

];
